import React, { useEffect, useState } from "react";
import { signOut, User } from "firebase/auth";
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";
import logoImg from "../../assets/images/logo-1.png";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Staff {
  id: string;
  staffId: string;
  name: string;
  department: string;
  role: string;
  status: "active" | "inactive";
}

interface StaffAssignment {
  id: string;
  staffName: string;
  department: string;
  shift: string;
  date: string;
}

interface Shift {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  color: string;
  isActive: boolean;
  assignedStaff?: number;
  maxStaff?: number;
  department?: string;
}

interface Job {
  id: string;
  title: string;
  customer: string;
  status: "pending" | "in-progress" | "qc-review" | "completed";
  priority: "low" | "medium" | "high" | "urgent";
  department: string;
  dueDate: string;
  assignedStaff?: string;
  timestamp?: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Recursively convert Firestore Timestamps to readable strings */
const sanitizeDoc = (data: Record<string, any>): Record<string, any> => {
  const result: Record<string, any> = {};
  for (const key of Object.keys(data)) {
    const val = data[key];
    if (val && typeof val === "object" && typeof val.toDate === "function") {
      result[key] = val.toDate().toLocaleDateString();
    } else if (val && typeof val === "object" && !Array.isArray(val)) {
      result[key] = sanitizeDoc(val);
    } else {
      result[key] = val;
    }
  }
  return result;
};

/** Checks if current HH:mm time falls within a shift's range, handling midnight crosses. */
const isTimeInShift = (currentTime: string, startTime: string, endTime: string): boolean => {
  if (!startTime || !endTime) return false;
  if (startTime < endTime) {
    return currentTime >= startTime && currentTime < endTime;
  } else {
    // Crosses midnight, e.g., 22:00 to 06:00
    return currentTime >= startTime || currentTime < endTime;
  }
};

const fmt12 = (time: string) => {
  if (!time) return "—";
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
};

const priorityColors: Record<string, string> = {
  low: "#38bdf8",
  medium: "#22c55e",
  high: "#f97316",
  urgent: "#ef4444",
};

const statusColors: Record<string, string> = {
  "pending": "#f59e0b",
  "in-progress": "#3b82f6",
  "qc-review": "#8b5cf6",
  "completed": "#10b981",
};

const statusLabels: Record<string, string> = {
  "pending": "Pending",
  "in-progress": "In Progress",
  "qc-review": "QC Review",
  "completed": "Completed",
};

// ─── Component ────────────────────────────────────────────────────────────────

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = translations[lang];
  const [user, setUser] = useState<User | null>(null);

  const [shifts, setShifts] = useState<Shift[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const totalStaff = staffList.length;
  const [loading, setLoading] = useState(true);
  const [activeNav, setActiveNav] = useState("dashboard");

  // Derived stats
  const activeShiftsCount = shifts.filter((s) => s.isActive).length;

  const startOfWeek = (() => {
    const d = new Date();
    d.setDate(d.getDate() - d.getDay());
    d.setHours(0, 0, 0, 0);
    return d;
  })();

  const staffAssignments = jobs.filter(j => j.assignedStaff);
  const weeklyAssignments = staffAssignments.filter((a) => {
    // a.timestamp is a localized string (e.g. "3/6/2026, 12:00:00 PM")
    // If not available, we could try to fallback but jobs without it might just be skipped
    const dateStr = a.timestamp || a.dueDate || "";
    // Because dateStr might be localized string from toLocaleString, we can try to parse it
    // Or if it's dueDate it's YYYY-MM-DD
    const d = new Date(dateStr);
    return !isNaN(d.getTime()) && d >= startOfWeek;
  }).length;

  const departments = new Set([
    ...staffAssignments.map((a) => a.department),
    ...shifts.map((s) => s.department || ""),
  ].filter(Boolean)).size;

  const jobStats = {
    total: jobs.length,
    pending: jobs.filter((j) => j.status === "pending").length,
    inProgress: jobs.filter((j) => j.status === "in-progress").length,
    completed: jobs.filter((j) => j.status === "completed").length,
  };

  // ── Firestore listeners ──────────────────────────────────────────────────
  useEffect(() => {
    const unsubs: Array<() => void> = [];

    // 1. Staff directory
    try {
      unsubs.push(
        onSnapshot(collection(db, "staff"), (snap) => {
          const data: Staff[] = snap.docs.map((doc) => {
            const d = doc.data();
            return {
              id: doc.id,
              staffId: String(d.staffId ?? ""),
              name: String(d.name ?? ""),
              department: String(d.department ?? ""),
              role: String(d.role ?? ""),
              status: (d.status ?? "inactive") as "active" | "inactive",
            };
          });
          setStaffList(data);
        })
      );
    } catch (e) {
      console.error("staff listener:", e);
    }

    // 2. Staff assignments (deprecated listener removed, now derived from jobs)

    // 3. Shifts (for shift schedule panel)
    try {
      unsubs.push(
        onSnapshot(query(collection(db, "shifts"), orderBy("createdAt", "desc")), (snap) => {
          const data: Shift[] = snap.docs.map((doc) => {
            const d = sanitizeDoc(doc.data());
            return {
              id: doc.id,
              name: String(d.name ?? ""),
              startTime: String(d.startTime ?? ""),
              endTime: String(d.endTime ?? ""),
              color: String(d.color ?? "#667eea"),
              isActive: Boolean(d.isActive),
              assignedStaff: Number(d.assignedStaff ?? 0),
              maxStaff: Number(d.maxStaff ?? 0),
              department: String(d.department ?? ""),
            };
          });
          setShifts(data);
          setLoading(false);
        })
      );
    } catch (e) {
      console.error("shifts listener:", e);
      setLoading(false);
    }

    // 4. Jobs (for job summary panel)
    try {
      unsubs.push(
        onSnapshot(query(collection(db, "jobs"), orderBy("createdAt", "desc")), (snap) => {
          const data: Job[] = snap.docs.map((doc) => {
            const d = sanitizeDoc(doc.data());
            return {
              id: doc.id,
              title: String(d.title ?? ""),
              customer: String(d.customer ?? ""),
              status: (d.status ?? "pending") as Job["status"],
              priority: (d.priority ?? "medium") as Job["priority"],
              department: String(d.department ?? ""),
              dueDate: String(d.dueDate ?? ""),
              assignedStaff: d.assignedStaff ? String(d.assignedStaff) : undefined,
              timestamp: d.timestamp ? String(d.timestamp) : (d.createdAt ? new Date(d.createdAt).toLocaleDateString() : undefined),
            };
          });
          setJobs(data);
        })
      );
    } catch (e) {
      console.error("jobs listener:", e);
    }

    // Auth state
    const unsubAuth = auth.onAuthStateChanged((u) => setUser(u));

    return () => {
      unsubs.forEach((u) => u());
      unsubAuth();
    };
  }, []);

  // ── Loading screen ──────────────────────────────────────────────────────
  if (loading) {
    return (
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center",
        height: "100vh", background: "linear-gradient(135deg,#667eea 0%,#764ba2 100%)"
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <div className="loader" />
          <p style={{ color: "#fff", fontSize: "18px", fontWeight: 500 }}>
            {lang === 'zh' ? '正在加载仪表板...' : 'Loading Dashboard...'}
          </p>
        </div>
      </div>
    );
  }

  // ── Render ──────────────────────────────────────────────────────────────
  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { margin:0;padding:0;box-sizing:border-box;font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif; }
        body { background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#1a202c;overflow-x:hidden; }

        .loader { width:50px;height:50px;border:4px solid rgba(255,255,255,.3);border-top:4px solid #fff;border-radius:50%;animation:spin 1s linear infinite; }
        @keyframes spin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes slideIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes scaleIn { from{opacity:0;transform:scale(.95)} to{opacity:1;transform:scale(1)} }

        /* Sidebar */
        .sidebar{width:280px;background:rgba(255,255,255,.95);backdrop-filter:blur(20px);height:100vh;position:fixed;padding:30px 20px;box-shadow:4px 0 30px rgba(0,0,0,.1);z-index:1000;animation:slideIn .5s ease-out;}
        .sidebar .logo{font-size:24px;font-weight:800;margin-bottom:50px;display:flex;align-items:center;gap:12px;padding:0 10px;color:#1a202c;}
        .sidebar .logo img{height:45px;filter:drop-shadow(0 2px 8px rgba(102,126,234,.3));}
        .sidebar nav{display:flex;flex-direction:column;gap:6px;}
        .sidebar nav a{display:flex;align-items:center;gap:12px;padding:14px 16px;color:#64748b;text-decoration:none;border-radius:12px;transition:all .3s cubic-bezier(.4,0,.2,1);font-weight:500;font-size:15px;position:relative;overflow:hidden;}
        .sidebar nav a:hover{background:linear-gradient(135deg,rgba(102,126,234,.1) 0%,rgba(118,75,162,.1) 100%);color:#667eea;transform:translateX(4px);}
        .sidebar nav a.active{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;box-shadow:0 8px 20px rgba(102,126,234,.3);}
        .nav-icon{font-size:20px;min-width:20px;}

        /* Main */
        .main{margin-left:280px;padding:30px 40px;min-height:100vh;animation:fadeIn .6s ease-out;}

        /* Topbar */
        .topbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:35px;background:rgba(255,255,255,.95);backdrop-filter:blur(20px);padding:20px 30px;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,.08);animation:slideIn .5s ease-out .1s both;}
        .topbar-left h1{font-size:32px;font-weight:800;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:4px;}
        .topbar-left p{color:#64748b;font-size:14px;font-weight:500;}
        .top-actions{display:flex;gap:12px;align-items:center;}
        .user-profile{display:flex;align-items:center;gap:12px;padding:8px 16px 8px 8px;background:rgba(102,126,234,.1);border-radius:50px;margin-right:12px;}
        .user-avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px;box-shadow:0 4px 12px rgba(102,126,234,.3);}
        .user-name{font-weight:600;font-size:14px;color:#1a202c;}
        .user-role{font-size:12px;color:#64748b;}
        .top-actions button{padding:12px 24px;border-radius:12px;cursor:pointer;border:none;font-weight:600;font-size:14px;transition:all .3s ease;display:flex;align-items:center;gap:8px;}
        .btn.primary{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;box-shadow:0 8px 20px rgba(102,126,234,.3);}
        .btn.primary:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(102,126,234,.4);}
        .btn.ghost{background:rgba(100,116,139,.1);color:#475569;}
        .btn.ghost:hover{background:rgba(100,116,139,.15);transform:translateY(-2px);}

        /* Stats */
        .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px;margin-bottom:35px;}
        .stats .card{padding:28px;border-radius:20px;background:rgba(255,255,255,.95);backdrop-filter:blur(20px);box-shadow:0 10px 40px rgba(0,0,0,.08);position:relative;overflow:hidden;transition:all .3s ease;animation:scaleIn .5s ease-out backwards;}
        .stats .card:nth-child(1){animation-delay:.1s}.stats .card:nth-child(2){animation-delay:.2s}.stats .card:nth-child(3){animation-delay:.3s}.stats .card:nth-child(4){animation-delay:.4s}
        .stats .card::before{content:'';position:absolute;top:0;left:0;width:100%;height:4px;background:linear-gradient(90deg,var(--gradient-start),var(--gradient-end));}
        .stats .card:hover{transform:translateY(-8px);box-shadow:0 20px 50px rgba(0,0,0,.12);}
        .stat-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;}
        .stat-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;background:linear-gradient(135deg,var(--gradient-start),var(--gradient-end));color:#fff;box-shadow:0 8px 20px rgba(0,0,0,.15);}
        .stats .card h3{font-size:14px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px;}
        .stats .card p{font-size:36px;font-weight:800;margin-bottom:8px;background:linear-gradient(135deg,var(--gradient-start),var(--gradient-end));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .stats .card span{font-size:13px;color:#64748b;font-weight:500;display:flex;align-items:center;gap:6px;}
        .trend-up{color:#10b981;font-weight:600;}
        .stat.blue{--gradient-start:#3b82f6;--gradient-end:#2563eb;}
        .stat.green{--gradient-start:#10b981;--gradient-end:#059669;}
        .stat.purple{--gradient-start:#8b5cf6;--gradient-end:#7c3aed;}
        .stat.orange{--gradient-start:#f59e0b;--gradient-end:#d97706;}

        /* Grid */
        .grid{display:grid;grid-template-columns:2fr 1fr;gap:24px;animation:fadeIn .6s ease-out .3s both;}
        .card.table-card,.card.shifts-card{background:rgba(255,255,255,.95);backdrop-filter:blur(20px);border-radius:20px;padding:28px;box-shadow:0 10px 40px rgba(0,0,0,.08);transition:all .3s ease;}
        .card.table-card:hover,.card.shifts-card:hover{box-shadow:0 20px 50px rgba(0,0,0,.12);}
        .card h2{font-size:20px;font-weight:700;margin-bottom:24px;color:#1a202c;display:flex;align-items:center;gap:10px;}
        .card h2::before{content:'';width:4px;height:24px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:2px;}

        /* Table */
        table{width:100%;border-collapse:separate;border-spacing:0 8px;}
        table th{text-align:left;padding:12px 16px;background:transparent;color:#64748b;font-weight:600;font-size:13px;text-transform:uppercase;letter-spacing:.5px;border:none;}
        table td{text-align:left;padding:16px;border:none;background:rgba(248,250,252,.8);font-weight:500;color:#334155;}
        table tbody tr:hover td{background:rgba(102,126,234,.08);}
        table tbody tr td:first-child{border-radius:12px 0 0 12px;}
        table tbody tr td:last-child{border-radius:0 12px 12px 0;}

        /* Badge */
        .badge{padding:6px 14px;border-radius:20px;color:#fff;font-size:12px;font-weight:600;display:inline-block;box-shadow:0 4px 12px rgba(0,0,0,.15);}
        .badge.blue{background:linear-gradient(135deg,#3b82f6 0%,#2563eb 100%);}
        .badge.purple{background:linear-gradient(135deg,#8b5cf6 0%,#7c3aed 100%);}
        .badge.amber{background:linear-gradient(135deg,#f59e0b 0%,#d97706 100%);}
        .badge.green{background:linear-gradient(135deg,#10b981 0%,#059669 100%);}
        .badge.red{background:linear-gradient(135deg,#ef4444 0%,#dc2626 100%);}

        /* Shifts panel */
        .shifts-card{display:flex;flex-direction:column;gap:12px;}
        .shift{display:flex;align-items:center;padding:16px;background:rgba(248,250,252,.8);border-radius:16px;transition:all .3s ease;border:2px solid transparent;}
        .shift:hover{background:rgba(102,126,234,.08);border-color:rgba(102,126,234,.2);transform:translateX(4px);}
        .shift .dot{width:16px;height:16px;border-radius:50%;margin-right:16px;box-shadow:0 4px 12px rgba(0,0,0,.2);flex-shrink:0;}
        .shift-info{flex:1;}
        .shift-info strong{display:block;font-size:15px;font-weight:700;color:#1a202c;margin-bottom:3px;}
        .shift-info small{display:block;font-size:12px;color:#64748b;font-weight:500;}
        .shift-badge{font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;color:#fff;}
        .shift-empty{text-align:center;padding:40px 20px;color:#94a3b8;font-size:14px;}

        /* Job stats row */
        .job-stats-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;margin-top:35px;animation:fadeIn .6s ease-out .5s both;}
        .job-stat-card{background:rgba(255,255,255,.95);border-radius:16px;padding:20px 24px;box-shadow:0 8px 30px rgba(0,0,0,.07);transition:all .3s ease;display:flex;align-items:center;gap:16px;}
        .job-stat-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.1);}
        .job-stat-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;}
        .job-stat-info strong{font-size:26px;font-weight:800;color:#1a202c;}
        .job-stat-info span{font-size:12px;color:#64748b;font-weight:500;display:block;margin-top:2px;}

        /* Recent jobs table */
        .jobs-section{margin-top:24px;background:rgba(255,255,255,.95);backdrop-filter:blur(20px);border-radius:20px;padding:28px;box-shadow:0 10px 40px rgba(0,0,0,.08);animation:fadeIn .6s ease-out .55s both;}

        /* Current shift chip */
        .current-shift-chip{margin-top:16px;padding:18px;background:rgba(102,126,234,.1);border-radius:16px;}
        .current-shift-label{font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;}
        .current-shift-value{font-size:18px;font-weight:700;color:#667eea;}
        .current-shift-sub{font-size:12px;color:#64748b;margin-top:3px;}

        /* Empty state */
        .empty-state{text-align:center;padding:60px 20px;color:#94a3b8;}
        .empty-state-icon{font-size:64px;margin-bottom:16px;opacity:.5;}

        /* Responsive */
        @media(max-width:1200px){.grid{grid-template-columns:1fr;}}
        @media(max-width:768px){
          .sidebar{width:100%;height:auto;position:relative;padding:20px;}
          .main{margin-left:0;padding:20px;}
          .stats{grid-template-columns:1fr;}
          .topbar{flex-direction:column;gap:16px;align-items:flex-start;}
          .top-actions{width:100%;justify-content:space-between;}
          table{font-size:13px;}
          table th,table td{padding:10px;}
        }
        ::-webkit-scrollbar{width:8px;height:8px;}
        ::-webkit-scrollbar-track{background:rgba(0,0,0,.05);}
        ::-webkit-scrollbar-thumb{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:4px;}
        ::-webkit-scrollbar-thumb:hover{background:linear-gradient(135deg,#764ba2 0%,#667eea 100%);}
      `}</style>

      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        <div className="logo">
          <img src={logoImg} alt="Logo" />
        </div>
        <nav>
          <a className={activeNav === "dashboard" ? "active" : ""} onClick={() => setActiveNav("dashboard")} style={{ cursor: "pointer" }}>
            <span className="nav-icon">📊</span> {t.dashboard}
          </a>
          <a className={activeNav === "staff" ? "active" : ""} onClick={() => { setActiveNav("staff"); navigate("/staff"); }} style={{ cursor: "pointer" }}>
            <span className="nav-icon">👥</span> {t.staffManagement}
          </a>
          <a className={activeNav === "shifts" ? "active" : ""} onClick={() => { setActiveNav("shifts"); navigate("/shifts"); }} style={{ cursor: "pointer" }}>
            <span className="nav-icon">🕐</span> {t.shifts}
          </a>
          <a className={activeNav === "scheduling" ? "active" : ""} onClick={() => { setActiveNav("scheduling"); navigate("/assignments"); }} style={{ cursor: "pointer" }}>
            <span className="nav-icon">📅</span> {t.assignments}
          </a>
          <a onClick={async () => { await signOut(auth); localStorage.clear(); navigate("/login"); }} style={{ cursor: "pointer", marginTop: "20px", color: "#ef4444" }}>
            <span className="nav-icon">🚪</span> {t.logout}
          </a>
        </nav>
      </aside>

      {/* ── MAIN ── */}
      <main className="main">

        {/* Topbar */}
        <header className="topbar">
          <div className="topbar-left">
            <h1>{t.adminDashboard}</h1>
            <p>{t.welcomeBack}</p>
          </div>
          <div className="top-actions">
            <div className="user-profile">
              <div className="user-avatar">{user?.email?.charAt(0).toUpperCase() || "A"}</div>
              <div>
                <div className="user-name">{user?.email?.split("@")[0] || "Admin"}</div>
                <div className="user-role">{t.administrator}</div>
              </div>
            </div>
            <button className="btn ghost">
              <span>📥</span> {t.export}
            </button>
            <button className="btn primary" onClick={() => navigate("/assignments")}>
              <span>➕</span> {t.newAssignment}
            </button>
            <button className="btn ghost" onClick={async () => { await signOut(auth); localStorage.clear(); navigate("/login"); }} style={{ color: "#ef4444" }}>
              <span>🚪</span> {t.logout}
            </button>
          </div>
        </header>

        {/* ── STATS ── */}
        <section className="stats">
          <div className="card stat blue">
            <div className="stat-header">
              <div>
                <h3>{t.totalStaff}</h3>
                <p>{totalStaff}</p>
                <span>{t.activeEmployees}</span>
              </div>
              <div className="stat-icon">👥</div>
            </div>
          </div>

          <div className="card stat green">
            <div className="stat-header">
              <div>
                <h3>{t.activeShifts}</h3>
                <p>{activeShiftsCount}</p>
                <span>{t.fromFirestore}</span>
              </div>
              <div className="stat-icon">🕐</div>
            </div>
          </div>

          <div className="card stat purple">
            <div className="stat-header">
              <div>
                <h3>{t.thisWeek}</h3>
                <p>{weeklyAssignments}</p>
                <span>{t.assignments}</span>
              </div>
              <div className="stat-icon">📋</div>
            </div>
          </div>

          <div className="card stat orange">
            <div className="stat-header">
              <div>
                <h3>{t.departments}</h3>
                <p>{departments}</p>
                <span>{t.operationalUnits}</span>
              </div>
              <div className="stat-icon">🏢</div>
            </div>
          </div>
        </section>

        {/* ── GRID: Assignments table + Shifts panel ── */}
        <section className="grid">

          {/* Recent Staff Assignments */}
          <div className="card table-card">
            <h2>{t.recentAssignments}</h2>
            <table>
              <thead>
                <tr>
                  <th>{t.staffMember}</th>
                  <th>{t.jobTitle}</th>
                  <th>{t.department}</th>
                  <th>{t.date}</th>
                </tr>
              </thead>
              <tbody>
                {staffAssignments.length === 0 ? (
                  <tr>
                    <td colSpan={4}>
                      <div className="empty-state">
                        <div className="empty-state-icon">📭</div>
                        <div>{t.noAssignments}</div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  staffAssignments.slice(0, 8).map((a) => (
                    <tr key={a.id}>
                      <td><strong>{a.assignedStaff || "—"}</strong></td>
                      <td>
                        <span className="badge blue">
                          {a.title || "—"}
                        </span>
                      </td>
                      <td>{a.department || "—"}</td>
                      <td>{a.timestamp ? new Date(a.timestamp).toLocaleDateString() : "—"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Shift Schedule (live from Firestore) */}
          <div className="card shifts-card">
            <h2>{t.shiftSchedule}</h2>

            {shifts.length === 0 ? (
              <div className="shift-empty">
                <div style={{ fontSize: 40, marginBottom: 8 }}>🕐</div>
                {t.noShifts}<br />
                <span
                  style={{ color: "#667eea", cursor: "pointer", fontWeight: 600 }}
                  onClick={() => navigate("/shifts")}
                >
                  {t.addShifts}
                </span>
              </div>
            ) : (
              shifts.slice(0, 6).map((s) => (
                <div className="shift" key={s.id}>
                  <span className="dot" style={{ background: s.color || "#667eea" }} />
                  <div className="shift-info">
                    <strong>{s.name}</strong>
                    <small>{fmt12(s.startTime)} – {fmt12(s.endTime)}{s.department ? ` · ${s.department}` : ""}</small>
                    {s.maxStaff ? (
                      <small style={{ marginTop: 2 }}>
                        {t.staffCount.replace('{{count}}', String(s.assignedStaff ?? 0)).replace('{{max}}', String(s.maxStaff))}
                      </small>
                    ) : null}
                  </div>
                  <span
                    className="shift-badge"
                    style={{ background: s.isActive ? "#10b981" : "#94a3b8" }}
                  >
                    {s.isActive ? t.active : t.off}
                  </span>
                </div>
              ))
            )}

            {/* Current shift chip */}
            <div className="current-shift-chip">
              <div className="current-shift-label">{t.currentShift}</div>
              {(() => {
                const now = new Date();
                const currentHHMM = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
                const activeShift = shifts.find(s => s.isActive && isTimeInShift(currentHHMM, s.startTime, s.endTime));

                if (activeShift) {
                  return (
                    <>
                      <div className="current-shift-value">
                        <span style={{ marginRight: '8px' }}>👤</span>
                        {activeShift.name}
                      </div>
                      <div className="current-shift-sub">
                        {fmt12(activeShift.startTime)} – {fmt12(activeShift.endTime)}
                        {activeShift.department ? ` · ${activeShift.department}` : ""}
                      </div>
                    </>
                  );
                }
                return (
                  <div className="current-shift-value" style={{ fontSize: '14px', color: '#94a3b8' }}>
                    {t.noActiveShift}
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        {/* ── JOB STATS ROW ── */}
        <div className="job-stats-row">
          {[
            { label: t.totalJobs, value: jobStats.total, icon: "📦", bg: "#667eea22", color: "#667eea" },
            { label: t.pending, value: jobStats.pending, icon: "⏳", bg: "#f59e0b22", color: "#f59e0b" },
            { label: t.inProgress, value: jobStats.inProgress, icon: "🚀", bg: "#3b82f622", color: "#3b82f6" },
            { label: t.completed, value: jobStats.completed, icon: "✅", bg: "#10b98122", color: "#10b981" },
          ].map((stat) => (
            <div className="job-stat-card" key={stat.label} onClick={() => navigate("/assignments")} style={{ cursor: "pointer" }}>
              <div className="job-stat-icon" style={{ background: stat.bg }}>
                {stat.icon}
              </div>
              <div className="job-stat-info">
                <strong style={{ color: stat.color }}>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── RECENT JOBS TABLE ── */}
        {jobs.length > 0 && (
          <div className="jobs-section">
            <h2>Recent Jobs</h2>
            <table>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Customer</th>
                  <th>Department</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {jobs.slice(0, 6).map((j) => (
                  <tr key={j.id}>
                    <td><strong>{j.title || "—"}</strong></td>
                    <td>{j.customer || "—"}</td>
                    <td>{j.department || "—"}</td>
                    <td>
                      <span
                        className="badge"
                        style={{ background: priorityColors[j.priority] || "#667eea" }}
                      >
                        {j.priority}
                      </span>
                    </td>
                    <td>
                      <span
                        className="badge"
                        style={{ background: statusColors[j.status] || "#667eea" }}
                      >
                        {statusLabels[j.status] || j.status}
                      </span>
                    </td>
                    <td>{j.dueDate || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {jobs.length > 6 && (
              <div style={{ textAlign: "center", marginTop: 16 }}>
                <button
                  className="btn primary"
                  onClick={() => navigate("/assignments")}
                >
                  View all {jobs.length} jobs →
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── STAFF DIRECTORY TABLE ── */}
        {staffList.length > 0 && (
          <div className="jobs-section" style={{ marginTop: 35 }}>
            <h2>Staff Directory</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {staffList.slice(0, 6).map((s) => (
                  <tr key={s.id}>
                    <td>
                      <span className="badge" style={{ background: "#f3f4f6", color: "#6b7280" }}>
                        {s.staffId || "—"}
                      </span>
                    </td>
                    <td><strong>{s.name || "—"}</strong></td>
                    <td>
                      <span className="badge" style={{ background: "#64748b" }}>
                        {s.role || "—"}
                      </span>
                    </td>
                    <td>{s.department || "—"}</td>
                    <td>
                      <span
                        className="badge"
                        style={{ background: s.status === "active" ? "#10b981" : "#94a3b8" }}
                      >
                        {s.status === "active" ? "Active" : "Inactive"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {staffList.length > 6 && (
              <div style={{ textAlign: "center", marginTop: 16 }}>
                <button
                  className="btn primary"
                  onClick={() => navigate("/staff")}
                >
                  View all {staffList.length} staff members →
                </button>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
};

export default Dashboard;