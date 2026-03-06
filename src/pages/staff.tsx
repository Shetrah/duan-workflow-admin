import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  Timestamp
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import companyLogo from '../../assets/images/logo-2.png';

/* ================= TYPES ================= */
interface Staff {
  id: string;
  staffId: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  status: 'active' | 'inactive';
  joinedDate: string;
}

/* ================= CONSTANTS ================= */
const roles = ['admin', 'designer', 'packaging', 'supervisor', 'operator', 'qc-inspector', 'technician', 'store-manager'] as const;
const shifts = ['Day', 'Night'] as const;
const statuses = ['active', 'inactive'] as const;

const roleColors: Record<string, string> = {
  admin: '#8B5CF6',
  designer: '#3B82F6',
  packaging: '#F97316',
  supervisor: '#10B981',
  operator: '#6B7280',
  'qc-inspector': '#F59E0B',
  'technician': '#06B6D4',
  'store-manager': '#F43F5E'
};

const statusColors: Record<string, string> = {
  active: '#10B981',
  inactive: '#6B7280'
};

const departmentIcons: Record<string, string> = {
  'Production': '🏭',
  'Printing': '🖨️',
  'Finishing': '✨',
  'Quality Control': '✅',
  'Packaging': '📦',
  'Design': '🎨',
  'Management': '👔',
  'Maintenance': '🔧',
  'Logistics': '🚚',
  'default': '📁'
};

/* ================= COMPONENT ================= */
const AdminStaffScreen: React.FC = () => {
  const navigate = useNavigate();
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [viewMode, setViewMode] = useState<'grouped' | 'list'>('grouped');

  const [showModal, setShowModal] = useState(false);
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null);

  const [formData, setFormData] = useState({
    staffId: '',
    name: '',
    email: '',
    phone: '',
    role: 'operator' as Staff['role'],
    department: '',
    status: 'active' as Staff['status']
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  /* ================= TOAST ================= */
  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  /* ================= FIREBASE ================= */
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'staff'), snapshot => {
      const data: Staff[] = snapshot.docs.map(d => ({
        id: d.id,
        ...(d.data() as Omit<Staff, 'id'>)
      }));
      setStaff(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  /* ================= VALIDATION ================= */
  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.staffId) e.staffId = 'Staff ID required';
    if (!formData.name) e.name = 'Name required';
    if (!formData.email.includes('@')) e.email = 'Valid email required';
    if (!formData.phone) e.phone = 'Phone required';
    if (!formData.department) e.department = 'Department required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ================= ACTIONS ================= */
  const openAdd = () => {
    setEditingStaff(null);
    setFormData({
      staffId: '',
      name: '',
      email: '',
      phone: '',
      role: 'operator',
      department: '',
      status: 'active'
    });
    setErrors({});
    setShowModal(true);
  };

  const openEdit = (s: Staff) => {
    setEditingStaff(s);
    setFormData(s);
    setErrors({});
    setShowModal(true);
  };

  const saveStaff = async () => {
    if (!validate()) return;
    setSubmitting(true);
    try {
      if (editingStaff) {
        await updateDoc(doc(db, 'staff', editingStaff.id), formData);
        showToast('Staff updated successfully');
      } else {
        await addDoc(collection(db, 'staff'), {
          ...formData,
          joinedDate: new Date().toISOString().split('T')[0],
          createdAt: Timestamp.now()
        });
        showToast('Staff added successfully');
      }
      setShowModal(false);
    } catch {
      showToast('Failed to save staff', 'error');
    }
    setSubmitting(false);
  };

  const removeStaff = async (s: Staff) => {
    if (!window.confirm(`Are you sure you want to delete ${s.name}?`)) return;
    try {
      await deleteDoc(doc(db, 'staff', s.id));
      showToast('Staff removed successfully');
    } catch {
      showToast('Failed to remove staff', 'error');
    }
  };

  /* ================= FILTER ================= */
  const filtered = staff.filter(s => {
    const q = searchQuery.toLowerCase();
    const match =
      s.name.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q) ||
      s.department.toLowerCase().includes(q);
    const statusMatch = filter === 'all' || s.status === filter;
    return match && statusMatch;
  });

  /* ================= GROUPING ================= */
  const groupedByDepartment = filtered.reduce((acc, staff) => {
    const dept = staff.department || 'Unassigned';
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(staff);
    return acc;
  }, {} as Record<string, Staff[]>);

  const departments = Object.keys(groupedByDepartment).sort();

  /* ================= STATS ================= */
  const stats = {
    total: staff.length,
    active: staff.filter(s => s.status === 'active').length,
    inactive: staff.filter(s => s.status === 'inactive').length,
    departments: new Set(staff.map(s => s.department)).size
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading staff data...</p>
      </div>
    );
  }

  /* ================= UI ================= */
  return (
    <div className="page">
      {/* TOAST */}
      {toast && (
        <div className={`toast ${toast.type}`}>
          <span>{toast.type === 'success' ? '✓' : '✕'}</span>
          {toast.msg}
        </div>
      )}

      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <button type="button" title="Go back to dashboard" className="back-btn" onClick={() => navigate('/dashboard')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="header-title">
            <h1>Staff Management</h1>
            <p>{filtered.length} staff members</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="view-toggle" onClick={() => setViewMode(viewMode === 'grouped' ? 'list' : 'grouped')}>
            {viewMode === 'grouped' ? '📋 List View' : '📊 Group View'}
          </button>
          <button className="primary-btn" onClick={openAdd}>
            <span>+</span> Add Staff
          </button>
        </div>
      </header>

      {/* STATS */}
      <div className="stats-grid">
        <div className="stat-card" style={{ '--accent': '#8B5CF6' } as React.CSSProperties}>
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>{stats.total}</h3>
            <p>Total Staff</p>
          </div>
        </div>
        <div className="stat-card" style={{ '--accent': '#10B981' } as React.CSSProperties}>
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{stats.active}</h3>
            <p>Active</p>
          </div>
        </div>
        <div className="stat-card" style={{ '--accent': '#6B7280' } as React.CSSProperties}>
          <div className="stat-icon">⏸️</div>
          <div className="stat-content">
            <h3>{stats.inactive}</h3>
            <p>Inactive</p>
          </div>
        </div>
        <div className="stat-card" style={{ '--accent': '#3B82F6' } as React.CSSProperties}>
          <div className="stat-icon">🏢</div>
          <div className="stat-content">
            <h3>{stats.departments}</h3>
            <p>Departments</p>
          </div>
        </div>
      </div>

      {/* SEARCH & FILTERS */}
      <div className="controls">
        <div className="search-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            placeholder="Search by name, email, or department..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-chips">
          {['all', 'active', 'inactive'].map(f => (
            <button
              key={f}
              className={filter === f ? 'chip active' : 'chip'}
              onClick={() => setFilter(f as any)}
            >
              {f === 'all' ? `All (${stats.total})` :
                f === 'active' ? `Active (${stats.active})` :
                  `Inactive (${stats.inactive})`}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      {viewMode === 'grouped' ? (
        <div className="department-groups">
          {departments.map(dept => (
            <div key={dept} className="department-section">
              <div className="department-header">
                <div className="department-info">
                  <span className="department-icon">{departmentIcons[dept] || departmentIcons.default}</span>
                  <h2>{dept}</h2>
                  <span className="count">{groupedByDepartment[dept].length} members</span>
                </div>
              </div>
              <div className="grid">
                {groupedByDepartment[dept].map(s => (
                  <StaffCard key={s.id} staff={s} onEdit={openEdit} onDelete={removeStaff} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid">
          {filtered.map(s => (
            <StaffCard key={s.id} staff={s} onEdit={openEdit} onDelete={removeStaff} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">👥</div>
          <h3>No staff members found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}

      {/* MODAL */}
      {showModal && (
        <div className="modal-backdrop" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '60px 20px',
          overflowY: 'auto',
          animation: 'fadeIn 0.3s ease'
        }} onClick={() => setShowModal(false)}>
          <div className="modal glass" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <img src={companyLogo} className="logo" alt="Company logo" />
              <h2>{editingStaff ? 'Edit Staff Member' : 'Add New Staff Member'}</h2>
              <p className="modal-subtitle">Fill in the details below</p>
            </div>

            <div className="modal-body" style={{ padding: '20px 30px' }}>
              <div className="form-row">
                <div className="form-group">
                  <label>Staff ID *</label>
                  <input
                    placeholder="e.g., EMP-001"
                    value={formData.staffId}
                    onChange={e => setFormData({ ...formData, staffId: e.target.value })}
                    className={errors.staffId ? 'error' : ''}
                  />
                  {errors.staffId && <span className="error-text">{errors.staffId}</span>}
                </div>

                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    placeholder="e.g., John Doe"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+1234567890"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Department *</label>
                <input
                  placeholder="e.g., Production, Printing, Quality Control"
                  value={formData.department}
                  onChange={e => setFormData({ ...formData, department: e.target.value })}
                  className={errors.department ? 'error' : ''}
                />
                {errors.department && <span className="error-text">{errors.department}</span>}
              </div>

              <div className="form-group">
                <label>Role *</label>
                <div className="chip-grid">
                  {roles.map(r => (
                    <button
                      key={r}
                      className={formData.role?.toLowerCase() === r.toLowerCase() ? 'chip-select active' : 'chip-select'}
                      onClick={() => setFormData({ ...formData, role: r })}
                      type="button"
                    >
                      {r.charAt(0).toUpperCase() + r.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Status *</label>
                  <div className="chip-grid">
                    {statuses.map(st => (
                      <button
                        key={st}
                        className={formData.status === st ? 'chip-select active' : 'chip-select'}
                        onClick={() => setFormData({ ...formData, status: st })}
                        type="button"
                      >
                        {st === 'active' ? '✅ Active' : '⏸️ Inactive'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="cancel-btn" onClick={() => setShowModal(false)} disabled={submitting}>
                Cancel
              </button>
              <button className="save-btn" onClick={saveStaff} disabled={submitting}>
                {submitting ? (
                  <>
                    <div className="btn-loader"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <span>✓</span>
                    {editingStaff ? 'Update' : 'Add'} Staff
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
        
        body { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }

        .page { 
          padding: 30px 40px; 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* LOADING */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          gap: 20px;
        }

        .loader {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* HEADER */
        .header { 
          display: flex; 
          justify-content: space-between; 
          align-items: center;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 24px 30px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
          animation: slideDown 0.5s ease-out;
        }

        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .back-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(102, 126, 234, 0.1);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          transform: translateX(-4px);
        }

        .header-title h1 { 
          font-size: 28px; 
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 4px;
        }

        .header-title p {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .view-toggle {
          padding: 12px 20px;
          border-radius: 12px;
          background: rgba(100, 116, 139, 0.1);
          border: none;
          cursor: pointer;
          font-weight: 600;
          color: #475569;
          transition: all 0.3s ease;
        }

        .view-toggle:hover {
          background: rgba(100, 116, 139, 0.2);
          transform: translateY(-2px);
        }

        .primary-btn { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff; 
          padding: 12px 24px; 
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          font-size: 15px;
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(102, 126, 234, 0.4);
        }

        .primary-btn span {
          font-size: 20px;
        }

        /* STATS */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 24px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border-top: 4px solid var(--accent);
          animation: scaleIn 0.5s ease-out backwards;
        }

        .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .stat-card:nth-child(2) { animation-delay: 0.2s; }
        .stat-card:nth-child(3) { animation-delay: 0.3s; }
        .stat-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .stat-icon {
          font-size: 36px;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent), var(--accent));
          border-radius: 16px;
          opacity: 0.2;
        }

        .stat-content h3 {
          font-size: 32px;
          font-weight: 800;
          color: var(--accent);
          margin-bottom: 4px;
        }

        .stat-content p {
          font-size: 14px;
          color: #64748b;
          font-weight: 600;
        }

        /* CONTROLS */
        .controls { 
          display: flex; 
          gap: 16px; 
          margin-bottom: 30px;
          flex-wrap: wrap;
          align-items: center;
        }

        .search-box {
          flex: 1;
          min-width: 300px;
          position: relative;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 14px 20px;
          border-radius: 14px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          gap: 12px;
        }

        .search-box svg {
          color: #9ca3af;
        }

        .search-box input { 
          flex: 1;
          padding: 0;
          border: none;
          background: transparent;
          font-size: 15px;
          color: #1f2937;
          outline: none;
          font-weight: 500;
        }

        .search-box input::placeholder {
          color: #9ca3af;
        }

        .filter-chips {
          display: flex;
          gap: 10px;
        }

        .chip { 
          padding: 10px 18px; 
          border-radius: 12px;
          border: 2px solid transparent;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          cursor: pointer;
          font-weight: 600;
          color: #64748b;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .chip:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .chip.active { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        /* DEPARTMENT GROUPS */
        .department-groups {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .department-section {
          animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .department-header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 20px 24px;
          border-radius: 16px;
          margin-bottom: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }

        .department-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .department-icon {
          font-size: 28px;
        }

        .department-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .count {
          padding: 4px 12px;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        /* GRID */
        .grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); 
          gap: 20px;
          animation: fadeIn 0.6s ease-out;
        }

        /* CARD */
        .card { 
          background: rgba(255, 255, 255, 0.95); 
          backdrop-filter: blur(20px);
          padding: 24px; 
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .card:hover::before {
          opacity: 1;
        }

        .card-top { 
          display: flex; 
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .card-top strong {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .card-top small {
          display: block;
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
        }

        .card-top > div:last-child {
          display: flex;
          gap: 8px;
        }

        .card-top button {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
          background: rgba(0, 0, 0, 0.05);
        }

        .card-top button:hover {
          transform: scale(1.1);
        }

        .card-top button:first-child:hover {
          background: rgba(59, 130, 246, 0.1);
        }

        .card-top button:last-child:hover {
          background: rgba(239, 68, 68, 0.1);
        }

        .badges { 
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .badges span { 
          padding: 6px 12px; 
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .card p {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .card p:last-child {
          margin-bottom: 0;
        }

        /* EMPTY STATE */
        .empty-state {
          text-align: center;
          padding: 80px 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .empty-icon {
          font-size: 64px;
          margin-bottom: 16px;
          opacity: 0.5;
        }

        .empty-state h3 {
          font-size: 20px;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .empty-state p {
          color: #9ca3af;
        }

        /* MODAL */
        .modal-backdrop { 
          position: fixed; 
          inset: 0; 
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          display: flex; 
          justify-content: center; 
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }

        .modal { 
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(40px);
          padding: 0;
          border-radius: 28px;
          width: 90%;
          max-width: 600px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
          animation: modalSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          display: flex;
          flex-direction: column;
        }

        @keyframes modalSlide {
          from { transform: scale(0.9) translateY(40px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }

        .modal-header {
          flex-shrink: 0;
          padding: 32px 32px 24px;
          text-align: center;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
        }

        .logo { 
          width: 80px;
          height: 80px;
          display: block;
          margin: 0 auto 16px;
          filter: drop-shadow(0 4px 12px rgba(102, 126, 234, 0.3));
        }

        .modal h2 {
          font-size: 24px;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
        }

        .modal-subtitle {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }

        .modal-body {
          flex: 1;
          padding: 16px 32px;
          overflow-y: auto;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #374151;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-group input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          background: rgba(249, 250, 251, 0.8);
          font-size: 15px;
          color: #1f2937;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .form-group input:focus {
          outline: none;
          border-color: #667eea;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .form-group input.error {
          border-color: #ef4444;
        }

        .error-text {
          display: block;
          color: #ef4444;
          font-size: 12px;
          margin-top: 6px;
          font-weight: 600;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .chip-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .chip-select {
          padding: 10px 16px;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          background: rgba(249, 250, 251, 0.8);
          cursor: pointer;
          font-weight: 600;
          color: #64748b;
          transition: all 0.3s ease;
          font-size: 13px;
          text-transform: capitalize;
        }

        .chip-select:hover {
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.05);
        }

        .chip-select.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .modal-footer {
          flex-shrink: 0;
          padding: 16px 32px;
          display: flex;
          gap: 12px;
          background: rgba(249, 250, 251, 0.95);
        }

        .cancel-btn {
          flex: 1;
          padding: 14px;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          background: #fff;
          cursor: pointer;
          font-weight: 700;
          color: #64748b;
          transition: all 0.3s ease;
          font-size: 15px;
        }

        .cancel-btn:hover {
          background: #f9fafb;
          border-color: #d1d5db;
        }

        .cancel-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .save-btn {
          flex: 1;
          padding: 14px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.3s ease;
          font-size: 15px;
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .save-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(102, 126, 234, 0.4);
        }

        .save-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .btn-loader {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        /* TOAST */
        .toast { 
          position: fixed; 
          bottom: 30px; 
          right: 30px;
          padding: 16px 24px;
          border-radius: 16px;
          color: #fff;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 2000;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: toastSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes toastSlide {
          from { transform: translateX(400px); }
          to { transform: translateX(0); }
        }

        .toast.success { 
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .toast.error { 
          background: linear-gradient(135deg, #ef4444, #dc2626);
        }

        .toast span {
          font-size: 18px;
          font-weight: 700;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .page {
            padding: 20px;
          }

          .header {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }

          .header-left {
            width: 100%;
          }

          .header-actions {
            width: 100%;
            justify-content: space-between;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .controls {
            flex-direction: column;
            align-items: stretch;
          }

          .search-box {
            min-width: 100%;
          }

          .filter-chips {
            justify-content: space-between;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .modal {
            width: 95%;
            max-height: 95vh;
          }
        }

        /* SCROLLBAR */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }
      `}</style>
    </div>
  );
};

/* ================= STAFF CARD COMPONENT ================= */
const StaffCard: React.FC<{
  staff: Staff;
  onEdit: (staff: Staff) => void;
  onDelete: (staff: Staff) => void;
}> = ({ staff, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="card-top">
        <div>
          <strong>{staff.name}</strong>
          <small>{staff.department}</small>
        </div>
        <div>
          <button onClick={() => onEdit(staff)} title="Edit">✏️</button>
          <button onClick={() => onDelete(staff)} title="Delete">🗑️</button>
        </div>
      </div>

      <div className="badges">
        <span style={{
          background: roleColors[staff.role] + '22',
          color: roleColors[staff.role]
        }}>
          {staff.role}
        </span>
        <span style={{
          background: statusColors[staff.status] + '22',
          color: statusColors[staff.status]
        }}>
          {staff.status}
        </span>
      </div>

      <p>🆔 {staff.staffId || 'N/A'}</p>
      <p>� {staff.email}</p>
      <p>📱 {staff.phone}</p>
      <p>📅 Joined: {staff.joinedDate}</p>
    </div>
  );
};

export default AdminStaffScreen;