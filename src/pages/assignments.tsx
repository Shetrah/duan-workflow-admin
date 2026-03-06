import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Plus, Search, Filter, Edit, Trash2, Calendar,
  User, Package, Clock, TrendingUp, X, Sparkles, CheckCircle,
  AlertCircle, Loader, Eye, FileText, Zap
} from 'lucide-react';
import {
  collection, addDoc, onSnapshot, deleteDoc, doc,
  updateDoc, query, orderBy, Timestamp
} from 'firebase/firestore';
import { db, auth } from '../../firebaseConfig';

interface Job {
  id: string;
  title: string;
  customer: string;
  quantity: number;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in-progress' | 'qc-review' | 'completed';
  department: string;
  dueDate: string;
  createdBy: string;
  description?: string;
  createdAt?: any;
  assignedStaff?: string;
  timestamp?: string;
}

interface Staff {
  id: string;
  name: string;
  status: string;
}

interface FormData {
  title: string;
  customer: string;
  quantity: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  department: string;
  dueDate: string;
  description: string;
  status: 'pending' | 'in-progress' | 'qc-review' | 'completed';
  createdBy: string;
  assignedStaff: string;
}

export default function JobManagement() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [viewingJob, setViewingJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'pending' | 'in-progress' | 'completed'>('all');

  const [formData, setFormData] = useState<FormData>({
    title: '',
    customer: '',
    quantity: '',
    priority: 'medium',
    department: '',
    dueDate: '',
    description: '',
    status: 'pending',
    createdBy: 'Admin',
    assignedStaff: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Firebase real-time listener
  useEffect(() => {
    const jobsQuery = query(collection(db, 'jobs'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(
      jobsQuery,
      (snapshot) => {
        // Recursively convert any Firestore Timestamp to a readable string
        const sanitizeDoc = (data: Record<string, any>): Record<string, any> => {
          const result: Record<string, any> = {};
          for (const key of Object.keys(data)) {
            const val = data[key];
            if (val && typeof val === 'object' && typeof val.toDate === 'function') {
              result[key] = val.toDate().toLocaleDateString();
            } else if (val && typeof val === 'object' && !Array.isArray(val)) {
              result[key] = sanitizeDoc(val);
            } else {
              result[key] = val;
            }
          }
          return result;
        };
        const jobsData: Job[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...sanitizeDoc(doc.data())
        } as Job));
        setJobs(jobsData);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    );

    const staffQuery = query(collection(db, 'staff'));
    const unsubscribeStaff = onSnapshot(staffQuery, (snapshot) => {
      const data: Staff[] = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        status: doc.data().status
      } as Staff));
      setStaffList(data);
    });

    return () => {
      unsubscribe();
      unsubscribeStaff();
    };
  }, []);

  const priorityConfig = {
    low: { bg: 'from-sky-400 to-cyan-500', text: 'text-sky-50', icon: '🔵' },
    medium: { bg: 'from-blue-500 to-indigo-600', text: 'text-blue-50', icon: '🟢' },
    high: { bg: 'from-orange-500 to-red-500', text: 'text-orange-50', icon: '🟠' },
    urgent: { bg: 'from-red-600 to-pink-600', text: 'text-red-50', icon: '🔴' }
  };

  const statusConfig = {
    pending: { bg: 'from-amber-400 to-yellow-500', text: 'text-amber-900', icon: '⏳' },
    'in-progress': { bg: 'from-blue-500 to-cyan-500', text: 'text-blue-50', icon: '🚀' },
    'qc-review': { bg: 'from-purple-500 to-pink-500', text: 'text-purple-50', icon: '🔍' },
    completed: { bg: 'from-green-500 to-emerald-600', text: 'text-green-50', icon: '✅' }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.title.trim()) errors.title = 'Job title is required';
    if (!formData.customer.trim()) errors.customer = 'Customer name is required';
    if (!formData.quantity || parseInt(formData.quantity) <= 0) errors.quantity = 'Valid quantity is required';
    if (!formData.department.trim()) errors.department = 'Department is required';
    if (!formData.dueDate.trim()) errors.dueDate = 'Due date is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      title: '',
      customer: '',
      quantity: '',
      priority: 'medium',
      department: '',
      dueDate: '',
      description: '',
      status: 'pending',
      createdBy: 'Admin',
      assignedStaff: ''
    });
    setFormErrors({});
    setEditingJob(null);
  };

  const handleCreateJob = async () => {
    if (!validateForm()) return;

    setSubmitting(true);
    try {
      if (!auth?.currentUser) {
        throw new Error('not-authenticated: user must be signed in to write to Firestore');
      }
      await addDoc(collection(db, 'jobs'), {
        ...formData,
        quantity: parseInt(formData.quantity),
        createdAt: Timestamp.now(),
        timestamp: new Date().toLocaleString()
      });

      setShowCreateModal(false);
      resetForm();
    } catch (error: any) {
      console.error('Error creating job:', error);
      const code = error?.code || '';
      const message = error?.message || String(error);
      alert(`Failed to create job (${code}): ${message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditJob = async () => {
    if (!validateForm() || !editingJob) return;

    setSubmitting(true);
    try {
      const jobRef = doc(db, 'jobs', editingJob.id);
      await updateDoc(jobRef, {
        title: formData.title,
        customer: formData.customer,
        quantity: parseInt(formData.quantity),
        priority: formData.priority,
        status: formData.status,
        department: formData.department,
        dueDate: formData.dueDate,
        description: formData.description,
        createdBy: formData.createdBy,
        assignedStaff: formData.assignedStaff
      });

      setShowEditModal(false);
      resetForm();
    } catch (error) {
      console.error('Error updating job:', error);
      alert('Failed to update job');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteJob = async (job: Job) => {
    const confirmed = window.confirm(`Are you sure you want to delete "${job.title}"?`);
    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, 'jobs', job.id));
    } catch (error) {
      console.error('Error deleting job:', error);
      alert('Failed to delete job');
    }
  };

  const openEditModal = (job: Job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      customer: job.customer,
      quantity: job.quantity.toString(),
      priority: job.priority,
      department: job.department,
      dueDate: job.dueDate,
      description: job.description || '',
      status: job.status,
      createdBy: job.createdBy,
      assignedStaff: job.assignedStaff || ''
    });
    setShowEditModal(true);
  };

  const openDetailsModal = (job: Job) => {
    setViewingJob(job);
    setShowDetailsModal(true);
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = selectedFilter === 'all' || job.status === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: jobs.length,
    pending: jobs.filter(j => j.status === 'pending').length,
    inProgress: jobs.filter(j => j.status === 'in-progress').length,
    completed: jobs.filter(j => j.status === 'completed').length
  };

  if (loading) {
    return (
      <div className="loading-container">
        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .spinner {
            width: 80px;
            height: 80px;
            border: 4px solid rgba(255, 255, 255, 0.2);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          .loading-text {
            color: white;
            font-size: 24px;
            font-weight: 700;
            margin-top: 24px;
          }
          .loading-subtext {
            color: rgba(255, 255, 255, 0.8);
            font-size: 14px;
            margin-top: 8px;
          }
        `}</style>
        <div className="spinner"></div>
        <div className="loading-text">Loading Jobs</div>
        <div className="loading-subtext">Fetching data from Firebase...</div>
      </div>
    );
  }

  return (
    <div className="job-management-container">
      <style>{`
        .job-management-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #e8eaf6 50%, #f3e5f5 100%);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Animations */
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes spin { to { transform: rotate(360deg); } }

        .animate-slide-up { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        .animate-slide-down { animation: slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-scale-in { animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-float { animation: float 3s ease-in-out infinite; }

        /* Glass Effects */
        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .glass-modal {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(50px);
          -webkit-backdrop-filter: blur(50px);
        }

        /* Shadows */
        .premium-shadow { box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05); }
        .premium-shadow-lg { box-shadow: 0 30px 90px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.08); }

        /* Header */
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px 0;
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
          position: relative;
          overflow: hidden;
        }

        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          filter: blur(60px);
        }

        .header-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 30px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .back-btn {
          width: 56px;
          height: 56px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .header-title h1 {
          color: white;
          font-size: 42px;
          font-weight: 900;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }

        .header-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .create-btn {
          background: white;
          color: #667eea;
          border: none;
          padding: 16px 32px;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .create-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        /* Search Container */
        .search-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 10;
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .search-box {
          flex: 1;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .search-box input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        .search-box input::placeholder {
          color: #999;
        }

        .filter-btn {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: none;
          padding: 18px;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        /* Stats Grid */
        .stats-grid {
          max-width: 1400px;
          margin: 32px auto 40px;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          position: relative;
          z-index: 20;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(30px);
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
        }

        .stat-icon {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .stat-value {
          font-size: 40px;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 13px;
          font-weight: 700;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Filter Tabs */
        .filter-tabs {
          max-width: 1400px;
          margin: 0 auto 40px;
          padding: 0 32px;
          display: flex;
          gap: 16px;
          overflow-x: auto;
        }

        .filter-tabs::-webkit-scrollbar {
          height: 6px;
        }

        .filter-tabs::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }

        .filter-tabs::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }

        .filter-tab {
          padding: 14px 28px;
          border-radius: 16px;
          border: none;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          color: #555;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .filter-tab.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
          transform: scale(1.05);
        }

        .filter-tab:hover:not(.active) {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.9);
        }

        /* Jobs Grid */
        .jobs-container {
          max-width: 1400px;
          margin: 0 auto 60px;
          padding: 0 32px;
        }

        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 28px;
        }

        .job-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(30px);
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .job-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .job-title {
          font-size: 22px;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .job-id {
          display: inline-block;
          padding: 6px 14px;
          background: #e8eaf6;
          color: #667eea;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
        }

        .job-badges {
          display: flex;
          gap: 10px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .badge {
          padding: 10px 18px;
          border-radius: 14px;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .job-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .detail-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-content {
          flex: 1;
        }

        .detail-label {
          font-size: 11px;
          font-weight: 700;
          color: #888;
          text-transform: uppercase;
          margin-bottom: 4px;
          letter-spacing: 0.5px;
        }

        .detail-value {
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .job-actions {
          display: flex;
          gap: 10px;
          padding-top: 20px;
          border-top: 2px solid rgba(0, 0, 0, 0.05);
        }

        .action-btn {
          flex: 1;
          padding: 14px;
          border: none;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          color: white;
        }

        .btn-view {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .btn-edit {
          background: linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%);
        }

        .btn-delete {
          background: linear-gradient(135deg, #ef5350 0%, #e53935 100%);
          flex: 0 0 auto;
          padding: 14px 16px;
        }

        .action-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 60px 20px;
          overflow-y: auto;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(50px);
          border-radius: 28px;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.3);
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 32px;
          position: relative;
          overflow: hidden;
        }

        .modal-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          filter: blur(60px);
        }

        .modal-header-content {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .modal-title {
          color: white;
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 8px;
        }

        .modal-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .close-btn {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 32px;
          flex: 1;
          overflow-y: auto;
          min-height: 0;
        }

        .modal-body::-webkit-scrollbar {
          width: 8px;
        }

        .modal-body::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }

        .modal-body::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: #333;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .form-input {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #e0e0e0;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 600;
          color: #333;
          transition: all 0.3s ease;
          background: white;
        }

        .form-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .priority-grid, .status-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .priority-btn, .status-btn {
          padding: 16px;
          border: 2px solid #e0e0e0;
          border-radius: 14px;
          background: white;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .priority-btn:hover, .status-btn:hover {
          transform: scale(1.05);
          border-color: #667eea;
        }

        .priority-btn.active, .status-btn.active {
          border-color: #667eea;
          color: white;
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .error-message {
          color: #f44336;
          font-size: 13px;
          font-weight: 700;
          margin-top: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .modal-footer {
          padding: 24px 32px;
          border-top: 2px solid rgba(0, 0, 0, 0.05);
          display: flex;
          gap: 16px;
          background: rgba(249, 250, 251, 0.5);
          flex-shrink: 0;
        }

        .modal-btn {
          flex: 1;
          padding: 16px;
          border: none;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .modal-btn-cancel {
          background: #e0e0e0;
          color: #555;
        }

        .modal-btn-cancel:hover {
          background: #d0d0d0;
          transform: scale(1.05);
        }

        .modal-btn-submit {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
        }

        .modal-btn-submit:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 32px rgba(102, 126, 234, 0.5);
        }

        .modal-btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Empty State */
        .empty-state {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(30px);
          border-radius: 24px;
          padding: 80px 40px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .empty-icon {
          font-size: 100px;
          margin-bottom: 24px;
          animation: float 3s ease-in-out infinite;
        }

        .empty-title {
          font-size: 32px;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .empty-subtitle {
          font-size: 18px;
          color: #666;
          margin-bottom: 32px;
        }

        .empty-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 18px 36px;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
          transition: all 0.3s ease;
        }

        .empty-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header-title h1 {
            font-size: 32px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .jobs-grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .priority-grid, .status-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <button className="back-btn" onClick={() => navigate(-1)}>
              <ArrowLeft style={{ color: 'white', width: 24, height: 24 }} />
            </button>
            <div className="header-title">
              <h1>Job Management</h1>
              <div className="header-subtitle">
                <Sparkles size={18} />
                <span>Managing {filteredJobs.length} jobs with precision</span>
              </div>
            </div>
          </div>
          <button className="create-btn" onClick={() => { resetForm(); setShowCreateModal(true); }}>
            <Plus size={24} />
            Create Job
          </button>
        </div>

        <div className="search-container">
          <div className="search-box">
            <Search style={{ color: '#667eea', width: 24, height: 24 }} />
            <input
              type="text"
              placeholder="Search by job title, customer, or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="filter-btn">
            <Filter style={{ color: 'white', width: 24, height: 24 }} />
          </button>
        </div>
      </header>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card animate-scale-in" style={{ animationDelay: '0s' }}>
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <Package style={{ color: 'white', width: 30, height: 30 }} />
          </div>
          <div className="stat-value">{stats.total}</div>
          <div className="stat-label">Total Jobs</div>
        </div>
        <div className="stat-card animate-scale-in" style={{ animationDelay: '0.1s' }}>
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #ffd54f 0%, #ffb300 100%)' }}>
            <Clock style={{ color: 'white', width: 30, height: 30 }} />
          </div>
          <div className="stat-value">{stats.pending}</div>
          <div className="stat-label">Pending</div>
        </div>
        <div className="stat-card animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)' }}>
            <TrendingUp style={{ color: 'white', width: 30, height: 30 }} />
          </div>
          <div className="stat-value">{stats.inProgress}</div>
          <div className="stat-label">In Progress</div>
        </div>
        <div className="stat-card animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #66bb6a 0%, #43a047 100%)' }}>
            <CheckCircle style={{ color: 'white', width: 30, height: 30 }} />
          </div>
          <div className="stat-value">{stats.completed}</div>
          <div className="stat-label">Completed</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {[
          { key: 'all', label: `All Jobs (${stats.total})` },
          { key: 'pending', label: `Pending (${stats.pending})` },
          { key: 'in-progress', label: `In Progress (${stats.inProgress})` },
          { key: 'completed', label: `Completed (${stats.completed})` }
        ].map((filter) => (
          <button
            key={filter.key}
            className={`filter-tab ${selectedFilter === filter.key ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter.key as any)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Jobs Grid */}
      <div className="jobs-container">
        {filteredJobs.length === 0 ? (
          <div className="empty-state animate-scale-in">
            <div className="empty-icon">📋</div>
            <h3 className="empty-title">No Jobs Found</h3>
            <p className="empty-subtitle">
              {searchQuery ? 'Try adjusting your search criteria' : 'Create your first job to get started'}
            </p>
            {!searchQuery && (
              <button className="empty-btn" onClick={() => { resetForm(); setShowCreateModal(true); }}>
                <Plus size={24} />
                Create Your First Job
              </button>
            )}
          </div>
        ) : (
          <div className="jobs-grid">
            {filteredJobs.map((job, index) => (
              <div key={job.id} className="job-card animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="job-header">
                  <div>
                    <h3 className="job-title">{job.title ?? '(Untitled)'}</h3>
                    <span className="job-id">#{job.id.slice(0, 8)}</span>
                  </div>
                </div>

                <div className="job-badges">
                  <div className={`badge bg-gradient-to-r ${(priorityConfig[job.priority] ?? priorityConfig['medium']).bg} ${(priorityConfig[job.priority] ?? priorityConfig['medium']).text}`}>
                    <span>{(priorityConfig[job.priority] ?? priorityConfig['medium']).icon}</span>
                    {job.priority}
                  </div>
                  <div className={`badge bg-gradient-to-r ${(statusConfig[job.status] ?? statusConfig['pending']).bg} ${(statusConfig[job.status] ?? statusConfig['pending']).text}`}>
                    <span>{(statusConfig[job.status] ?? statusConfig['pending']).icon}</span>
                    {(job.status ?? 'pending').replace('-', ' ')}
                  </div>
                </div>

                <div className="job-details">
                  <div className="detail-item">
                    <div className="detail-icon" style={{ background: 'linear-gradient(135deg, #e1bee7 0%, #ce93d8 100%)' }}>
                      <User style={{ color: '#8e24aa', width: 20, height: 20 }} />
                    </div>
                    <div className="detail-content">
                      <div className="detail-label">Customer</div>
                      <div className="detail-value">{job.customer ?? '—'}</div>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon" style={{ background: 'linear-gradient(135deg, #b3e5fc 0%, #81d4fa 100%)' }}>
                      <Package style={{ color: '#0277bd', width: 20, height: 20 }} />
                    </div>
                    <div className="detail-content">
                      <div className="detail-label">Quantity</div>
                      <div className="detail-value">{(job.quantity ?? 0).toLocaleString()} units</div>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon" style={{ background: 'linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)' }}>
                      <Calendar style={{ color: '#2e7d32', width: 20, height: 20 }} />
                    </div>
                    <div className="detail-content">
                      <div className="detail-label">{job.department ?? '—'}</div>
                      <div className="detail-value">{job.dueDate ?? '—'}</div>
                    </div>
                  </div>
                </div>

                <div className="job-actions">
                  <button className="action-btn btn-view" onClick={() => openDetailsModal(job)}>
                    <Eye size={18} />
                    View
                  </button>
                  <button className="action-btn btn-edit" onClick={() => openEditModal(job)}>
                    <Edit size={18} />
                    Edit
                  </button>
                  <button className="action-btn btn-delete" onClick={() => handleDeleteJob(job)}>
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      {(showCreateModal || showEditModal) && (
        <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) { showCreateModal ? setShowCreateModal(false) : setShowEditModal(false); resetForm(); } }}>
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-header-content">
                <div>
                  <h2 className="modal-title">{showCreateModal ? 'Create New Job' : 'Edit Job'}</h2>
                  <p className="modal-subtitle">
                    <Zap size={16} />
                    <span>{showCreateModal ? 'Fill in the details to create a new job' : 'Update job information'}</span>
                  </p>
                </div>
                <button className="close-btn" onClick={() => { showCreateModal ? setShowCreateModal(false) : setShowEditModal(false); resetForm(); }}>
                  <X style={{ color: 'white', width: 24, height: 24 }} />
                </button>
              </div>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">
                  <FileText size={16} style={{ color: '#667eea' }} />
                  Job Title *
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g., Premium Label Design Project"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                {formErrors.title && (
                  <div className="error-message">
                    <AlertCircle size={16} />
                    {formErrors.title}
                  </div>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    <User size={16} style={{ color: '#667eea' }} />
                    Customer *
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Customer name"
                    value={formData.customer}
                    onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                  />
                  {formErrors.customer && (
                    <div className="error-message">
                      <AlertCircle size={16} />
                      {formErrors.customer}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Package size={16} style={{ color: '#667eea' }} />
                    Quantity *
                  </label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="0"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                  {formErrors.quantity && (
                    <div className="error-message">
                      <AlertCircle size={16} />
                      {formErrors.quantity}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Priority Level</label>
                <div className="priority-grid">
                  {(['low', 'medium', 'high', 'urgent'] as const).map((priority) => (
                    <button
                      key={priority}
                      type="button"
                      className={`priority-btn ${formData.priority === priority ? 'active' : ''}`}
                      style={formData.priority === priority ? {
                        background: `linear-gradient(135deg, ${priority === 'low' ? '#4fc3f7 0%, #29b6f6 100%' : priority === 'medium' ? '#5c6bc0 0%, #3f51b5 100%' : priority === 'high' ? '#ff9800 0%, #f57c00 100%' : '#f44336 0%, #d32f2f 100%'})`
                      } : {}}
                      onClick={() => setFormData({ ...formData, priority })}
                    >
                      <span>{priorityConfig[priority].icon}</span>
                      {priority}
                    </button>
                  ))}
                </div>
              </div>

              {showEditModal && (
                <div className="form-group">
                  <label className="form-label">Job Status</label>
                  <div className="status-grid">
                    {(['pending', 'in-progress', 'qc-review', 'completed'] as const).map((status) => (
                      <button
                        key={status}
                        type="button"
                        className={`status-btn ${formData.status === status ? 'active' : ''}`}
                        style={formData.status === status ? {
                          background: `linear-gradient(135deg, ${status === 'pending' ? '#ffd54f 0%, #ffb300 100%' : status === 'in-progress' ? '#42a5f5 0%, #1e88e5 100%' : status === 'qc-review' ? '#ab47bc 0%, #8e24aa 100%' : '#66bb6a 0%, #43a047 100%'})`
                        } : {}}
                        onClick={() => setFormData({ ...formData, status })}
                      >
                        <span>{statusConfig[status].icon}</span>
                        {status.replace('-', ' ').toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Department *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g., Printing, Design, QC"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  />
                  {formErrors.department && (
                    <div className="error-message">
                      <AlertCircle size={16} />
                      {formErrors.department}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Calendar size={16} style={{ color: '#667eea' }} />
                    Due Date *
                  </label>
                  <input
                    type="date"
                    className="form-input"
                    value={formData.dueDate}
                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  />
                  {formErrors.dueDate && (
                    <div className="error-message">
                      <AlertCircle size={16} />
                      {formErrors.dueDate}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <User size={16} style={{ color: '#667eea' }} />
                  Assign to Staff (Optional)
                </label>
                <select
                  className="form-input"
                  style={{ appearance: 'auto' }}
                  value={formData.assignedStaff}
                  onChange={(e) => setFormData({ ...formData, assignedStaff: e.target.value })}
                >
                  <option value="">-- Unassigned --</option>
                  {staffList.filter(s => s.status === 'active').map(s => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Description (Optional)</label>
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder="Add detailed job description, special requirements, or notes..."
                  style={{ resize: 'vertical' }}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="modal-btn modal-btn-cancel"
                onClick={() => { showCreateModal ? setShowCreateModal(false) : setShowEditModal(false); resetForm(); }}
                disabled={submitting}
              >
                Cancel
              </button>
              <button
                className="modal-btn modal-btn-submit"
                onClick={showCreateModal ? handleCreateJob : handleEditJob}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader size={20} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    {showCreateModal ? 'Creating...' : 'Updating...'}
                  </>
                ) : (
                  <>
                    {showCreateModal ? <Plus size={20} /> : <Edit size={20} />}
                    {showCreateModal ? 'Create Job' : 'Update Job'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetailsModal && viewingJob && (
        <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) setShowDetailsModal(false); }}>
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-header-content">
                <div>
                  <h2 className="modal-title">Job Details</h2>
                  <p className="modal-subtitle">Complete job information</p>
                </div>
                <button className="close-btn" onClick={() => setShowDetailsModal(false)}>
                  <X style={{ color: 'white', width: 24, height: 24 }} />
                </button>
              </div>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <div className="glass-effect" style={{ borderRadius: 16, padding: 24, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)' }}>
                  <p className="detail-label" style={{ fontSize: 14 }}>Job Title</p>
                  <h3 style={{ fontSize: 28, fontWeight: 900, color: '#1a1a1a', marginTop: 8 }}>{viewingJob.title}</h3>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <div className="glass-effect" style={{ borderRadius: 16, padding: 24, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)' }}>
                    <p className="detail-label" style={{ fontSize: 14, marginBottom: 12 }}>Priority</p>
                    <div className={`badge bg-gradient-to-r ${(priorityConfig[viewingJob.priority] ?? priorityConfig['medium']).bg} ${(priorityConfig[viewingJob.priority] ?? priorityConfig['medium']).text}`} style={{ justifyContent: 'center', fontSize: 14 }}>
                      <span style={{ fontSize: 24 }}>{(priorityConfig[viewingJob.priority] ?? priorityConfig['medium']).icon}</span>
                      {viewingJob.priority ?? 'medium'}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="glass-effect" style={{ borderRadius: 16, padding: 24, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)' }}>
                    <p className="detail-label" style={{ fontSize: 14, marginBottom: 12 }}>Status</p>
                    <div className={`badge bg-gradient-to-r ${(statusConfig[viewingJob.status] ?? statusConfig['pending']).bg} ${(statusConfig[viewingJob.status] ?? statusConfig['pending']).text}`} style={{ justifyContent: 'center', fontSize: 14 }}>
                      <span style={{ fontSize: 24 }}>{(statusConfig[viewingJob.status] ?? statusConfig['pending']).icon}</span>
                      {(viewingJob.status ?? 'pending').replace('-', ' ')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <div className="glass-effect" style={{ borderRadius: 16, padding: 24, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 48, height: 48, background: 'linear-gradient(135deg, #e1bee7 0%, #ce93d8 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <User style={{ color: '#8e24aa', width: 24, height: 24 }} />
                      </div>
                      <div>
                        <p className="detail-label">Customer</p>
                        <p className="detail-value" style={{ fontSize: 18 }}>{viewingJob.customer}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="glass-effect" style={{ borderRadius: 16, padding: 24, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 48, height: 48, background: 'linear-gradient(135deg, #b3e5fc 0%, #81d4fa 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Package style={{ color: '#0277bd', width: 24, height: 24 }} />
                      </div>
                      <div>
                        <p className="detail-label">Quantity</p>
                        <p className="detail-value" style={{ fontSize: 18 }}>{(viewingJob.quantity ?? 0).toLocaleString()} units</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <div className="glass-effect" style={{ borderRadius: 16, padding: 24, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 48, height: 48, background: 'linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Calendar style={{ color: '#2e7d32', width: 24, height: 24 }} />
                      </div>
                      <div>
                        <p className="detail-label">Due Date</p>
                        <p className="detail-value" style={{ fontSize: 18 }}>{viewingJob.dueDate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="glass-effect" style={{ borderRadius: 16, padding: 24, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 48, height: 48, background: 'linear-gradient(135deg, #ffe082 0%, #ffd54f 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Zap style={{ color: '#f57f17', width: 24, height: 24 }} />
                      </div>
                      <div>
                        <p className="detail-label">Department</p>
                        <p className="detail-value" style={{ fontSize: 18 }}>{viewingJob.department}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {viewingJob.description && (
                <div className="form-group">
                  <div className="glass-effect" style={{ borderRadius: 16, padding: 24, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)' }}>
                    <p className="detail-label" style={{ fontSize: 14, marginBottom: 12 }}>Description</p>
                    <p style={{ color: '#555', lineHeight: 1.6 }}>{viewingJob.description}</p>
                  </div>
                </div>
              )}

              <div className="form-group">
                <div className="glass-effect" style={{ borderRadius: 16, padding: 24, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)' }}>
                  <p className="detail-label" style={{ fontSize: 14, marginBottom: 12 }}>Additional Information</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#666', fontWeight: 600 }}>Job ID:</span>
                      <span style={{ color: '#1a1a1a', fontWeight: 700 }}>#{viewingJob.id.slice(0, 8)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#666', fontWeight: 600 }}>Created By:</span>
                      <span style={{ color: '#1a1a1a', fontWeight: 700 }}>{viewingJob.createdBy}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="modal-btn"
                style={{ flex: 1, background: 'linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)', color: 'white', boxShadow: '0 8px 24px rgba(66, 165, 245, 0.4)' }}
                onClick={() => { setShowDetailsModal(false); openEditModal(viewingJob); }}
              >
                <Edit size={24} />
                Edit Job
              </button>
              <button
                className="modal-btn modal-btn-cancel"
                onClick={() => setShowDetailsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}