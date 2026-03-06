import React, { useState, useEffect } from 'react';
import { 
  Search, Edit, Trash2, Users, Package, TrendingUp, 
  Settings, Plus, X, Clock, MapPin, DollarSign, 
  Briefcase, Activity, ChevronDown, Filter, Download,
  Calendar, Award, AlertCircle, CheckCircle
} from 'lucide-react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot,
  Timestamp,
  query,
  orderBy
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

// ============================================================================
// TYPES
// ============================================================================
interface Department {
  id: string;
  name: string;
  type: 'production' | 'support' | 'management';
  headOfDepartment: string;
  staffCount: number;
  activeJobs: number;
  equipment: string[];
  workingHours: string;
  location: string;
  status: 'active' | 'inactive';
  budget: number;
  utilization: number;
  createdAt: any;
  updatedAt: any;
}

interface Resource {
  id: string;
  name: string;
  type: 'equipment' | 'material' | 'space';
  quantity: number;
  allocated: number;
  unit: string;
  departmentId?: string;
  createdAt: any;
}

interface FormData {
  name: string;
  type: string;
  headOfDepartment: string;
  location: string;
  workingHours: string;
  budget: string;
  staffCount: string;
  equipment: string;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function DepartmentManagement() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showResourceModal, setShowResourceModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [departmentToDelete, setDepartmentToDelete] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    type: 'production',
    headOfDepartment: '',
    location: '',
    workingHours: '',
    budget: '',
    staffCount: '0',
    equipment: ''
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // ============================================================================
  // FIREBASE LISTENERS
  // ============================================================================
  useEffect(() => {
    const departmentsQuery = query(
      collection(db, 'departments'),
      orderBy('createdAt', 'desc')
    );
    
    const unsubscribeDepts = onSnapshot(departmentsQuery, (snapshot) => {
      const depts: Department[] = [];
      snapshot.forEach((doc) => {
        depts.push({ id: doc.id, ...doc.data() } as Department);
      });
      setDepartments(depts);
      setLoading(false);
    });

    const resourcesQuery = query(
      collection(db, 'resources'),
      orderBy('createdAt', 'desc')
    );
    
    const unsubscribeResources = onSnapshot(resourcesQuery, (snapshot) => {
      const res: Resource[] = [];
      snapshot.forEach((doc) => {
        res.push({ id: doc.id, ...doc.data() } as Resource);
      });
      setResources(res);
    });

    return () => {
      unsubscribeDepts();
      unsubscribeResources();
    };
  }, []);

  // ============================================================================
  // FORM VALIDATION
  // ============================================================================
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) errors.name = 'Department name is required';
    if (!formData.headOfDepartment.trim()) errors.headOfDepartment = 'Head of department is required';
    if (!formData.location.trim()) errors.location = 'Location is required';
    if (!formData.workingHours.trim()) errors.workingHours = 'Working hours are required';
    if (!formData.budget || parseFloat(formData.budget) <= 0) errors.budget = 'Valid budget is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // ============================================================================
  // CRUD OPERATIONS
  // ============================================================================
  const handleCreateDepartment = async () => {
    if (!validateForm()) return;
    
    setSaving(true);
    try {
      const equipmentArray = formData.equipment
        .split(',')
        .map(e => e.trim())
        .filter(e => e.length > 0);

      const departmentData = {
        name: formData.name,
        type: formData.type,
        headOfDepartment: formData.headOfDepartment,
        staffCount: parseInt(formData.staffCount) || 0,
        activeJobs: 0,
        equipment: equipmentArray,
        workingHours: formData.workingHours,
        location: formData.location,
        status: 'active',
        budget: parseFloat(formData.budget),
        utilization: 0,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };

      if (selectedDepartment) {
        await updateDoc(doc(db, 'departments', selectedDepartment.id), {
          ...departmentData,
          createdAt: selectedDepartment.createdAt
        });
      } else {
        await addDoc(collection(db, 'departments'), departmentData);
      }

      resetForm();
      setShowCreateModal(false);
    } catch (error) {
      console.error('Error saving department:', error);
      alert('Error saving department. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteDepartment = async () => {
    if (!departmentToDelete) return;
    
    try {
      await deleteDoc(doc(db, 'departments', departmentToDelete));
      setShowDeleteConfirm(false);
      setDepartmentToDelete(null);
    } catch (error) {
      console.error('Error deleting department:', error);
      alert('Error deleting department. Please try again.');
    }
  };

  const handleEditDepartment = (dept: Department) => {
    setSelectedDepartment(dept);
    setFormData({
      name: dept.name,
      type: dept.type,
      headOfDepartment: dept.headOfDepartment,
      location: dept.location,
      workingHours: dept.workingHours,
      budget: dept.budget.toString(),
      staffCount: dept.staffCount.toString(),
      equipment: dept.equipment.join(', ')
    });
    setShowCreateModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'production',
      headOfDepartment: '',
      location: '',
      workingHours: '',
      budget: '',
      staffCount: '0',
      equipment: ''
    });
    setFormErrors({});
    setSelectedDepartment(null);
  };

  // ============================================================================
  // FILTERING & STATISTICS
  // ============================================================================
  const filteredDepartments = departments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.headOfDepartment.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterType === 'all' || dept.type === filterType;
    
    return matchesSearch && matchesFilter;
  });

  const totalStaff = departments.reduce((sum, dept) => sum + dept.staffCount, 0);
  const totalActiveJobs = departments.reduce((sum, dept) => sum + dept.activeJobs, 0);
  const avgUtilization = departments.length > 0
    ? Math.round(departments.reduce((sum, dept) => sum + dept.utilization, 0) / departments.length)
    : 0;
  const totalBudget = departments.reduce((sum, dept) => sum + dept.budget, 0);

  // ============================================================================
  // UTILITY FUNCTIONS
  // ============================================================================
  const getUtilizationColor = (utilization: number): string => {
    if (utilization >= 80) return '#10b981';
    if (utilization >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const getTypeColor = (type: string): { bg: string; text: string } => {
    const colors = {
      production: { bg: '#dbeafe', text: '#1e40af' },
      support: { bg: '#d1fae5', text: '#065f46' },
      management: { bg: '#e9d5ff', text: '#6b21a8' }
    };
    return colors[type as keyof typeof colors] || colors.production;
  };

  // ============================================================================
  // RENDER
  // ============================================================================
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          background: white;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Header Styles */
        .header {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          padding: 40px;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .header-content {
          position: relative;
          z-index: 1;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 30px;
        }

        .header h1 {
          font-size: 36px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0;
        }

        .header-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
        }

        .btn-primary {
          background: white;
          color: #3b82f6;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .btn-danger {
          background: #ef4444;
          color: white;
        }

        .btn-danger:hover {
          background: #dc2626;
        }

        .btn-ghost {
          background: transparent;
          color: #6b7280;
          padding: 8px 16px;
        }

        .btn-ghost:hover {
          background: #f3f4f6;
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Search and Filter */
        .search-filter-container {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .search-container {
          position: relative;
          flex: 1;
          min-width: 300px;
        }

        .search-input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 12px;
          background: rgba(255,255,255,0.95);
          color: #1f2937;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: white;
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
        }

        .filter-container {
          display: flex;
          gap: 8px;
          background: rgba(255,255,255,0.95);
          padding: 8px;
          border-radius: 12px;
          border: 2px solid rgba(255,255,255,0.3);
        }

        .filter-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          background: transparent;
          color: #6b7280;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: capitalize;
        }

        .filter-btn.active {
          background: #3b82f6;
          color: white;
        }

        .filter-btn:hover:not(.active) {
          background: #f3f4f6;
        }

        /* Main Content */
        .main-content {
          padding: 32px 40px;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          border: 2px solid #f3f4f6;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--stat-color), transparent);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -8px rgba(0,0,0,0.1);
          border-color: var(--stat-color);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          background: var(--stat-bg);
        }

        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }

        /* Section Header */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
        }

        /* Department Grid */
        .department-grid {
          display: grid;
          gap: 24px;
        }

        .department-card {
          background: white;
          border-radius: 16px;
          padding: 28px;
          border: 2px solid #f3f4f6;
          transition: all 0.3s ease;
          animation: scaleIn 0.3s ease-in-out;
        }

        .department-card:hover {
          border-color: #e5e7eb;
          box-shadow: 0 12px 24px -8px rgba(0,0,0,0.1);
          transform: translateY(-2px);
        }

        .dept-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .dept-info h3 {
          font-size: 22px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 6px;
        }

        .dept-id {
          font-size: 13px;
          color: #6b7280;
          font-weight: 500;
          font-family: 'Courier New', monospace;
        }

        .dept-actions {
          display: flex;
          gap: 8px;
        }

        .icon-btn {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #f3f4f6;
        }

        .icon-btn:hover {
          transform: scale(1.1);
        }

        .icon-btn.edit:hover {
          background: #dbeafe;
          color: #3b82f6;
        }

        .icon-btn.delete:hover {
          background: #fee2e2;
          color: #ef4444;
        }

        /* Tags */
        .tags {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .tag {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Department Details */
        .dept-details {
          display: grid;
          gap: 14px;
          margin-bottom: 20px;
        }

        .detail-row {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #6b7280;
          font-size: 14px;
        }

        .detail-row svg {
          flex-shrink: 0;
        }

        .detail-label {
          font-weight: 600;
          color: #4b5563;
        }

        /* Utilization Bar */
        .utilization-section {
          margin-bottom: 20px;
        }

        .utilization-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .utilization-label {
          font-size: 13px;
          font-weight: 600;
          color: #4b5563;
        }

        .utilization-value {
          font-size: 13px;
          font-weight: 700;
          color: #1f2937;
        }

        .progress-bar {
          height: 8px;
          background: #f3f4f6;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 0.5s ease;
        }

        /* Equipment Tags */
        .equipment-section {
          padding-top: 20px;
          border-top: 2px solid #f3f4f6;
        }

        .equipment-label {
          font-size: 13px;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 10px;
        }

        .equipment-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .equipment-tag {
          padding: 6px 12px;
          background: #f3f4f6;
          border-radius: 8px;
          font-size: 12px;
          color: #6b7280;
          font-weight: 500;
        }

        /* Budget Section */
        .budget-section {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 2px solid #f3f4f6;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .budget-label {
          font-size: 13px;
          color: #6b7280;
        }

        .budget-value {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
        }

        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.2s ease-in-out;
        }

        /* Modal */
        .modal {
          background: white;
          border-radius: 24px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: scaleIn 0.3s ease-in-out;
        }

        .modal-header {
          padding: 28px 32px;
          border-bottom: 2px solid #f3f4f6;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
        }

        .modal-title {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .modal-close {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: #f3f4f6;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background: #e5e7eb;
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 32px;
          max-height: calc(90vh - 200px);
          overflow-y: auto;
        }

        .modal-body::-webkit-scrollbar {
          width: 8px;
        }

        .modal-body::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }

        .modal-body::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }

        .modal-body::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }

        .modal-footer {
          padding: 24px 32px;
          border-top: 2px solid #f3f4f6;
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          background: #f9fafb;
        }

        /* Form Styles */
        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .form-label .required {
          color: #ef4444;
          margin-left: 2px;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          color: #1f2937;
          transition: all 0.2s ease;
          background: #f9fafb;
        }

        .form-input:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-input.error {
          border-color: #ef4444;
          background: #fef2f2;
        }

        .form-error {
          color: #ef4444;
          font-size: 13px;
          margin-top: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .form-helper {
          color: #6b7280;
          font-size: 13px;
          margin-top: 6px;
        }

        /* Type Selection */
        .type-selection {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .type-option {
          padding: 14px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #f9fafb;
          font-weight: 600;
          text-transform: capitalize;
          color: #6b7280;
        }

        .type-option:hover {
          border-color: #d1d5db;
          background: white;
        }

        .type-option.selected {
          border-color: #3b82f6;
          background: #eff6ff;
          color: #3b82f6;
        }

        /* Loading State */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 4px solid #f3f4f6;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-text {
          margin-top: 16px;
          color: #6b7280;
          font-size: 15px;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 80px 20px;
        }

        .empty-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          background: #f3f4f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
        }

        .empty-title {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .empty-description {
          font-size: 15px;
          color: #6b7280;
          margin-bottom: 24px;
        }

        /* Resource Modal */
        .resource-grid {
          display: grid;
          gap: 16px;
        }

        .resource-card {
          background: #f9fafb;
          border-radius: 12px;
          padding: 20px;
          border: 2px solid #e5e7eb;
        }

        .resource-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .resource-name {
          font-size: 16px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .resource-type {
          font-size: 12px;
          color: #6b7280;
          text-transform: capitalize;
        }

        .resource-id {
          background: #dbeafe;
          color: #1e40af;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          font-family: 'Courier New', monospace;
        }

        .resource-stats {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 14px;
        }

        .resource-stat-label {
          color: #6b7280;
        }

        .resource-stat-value {
          font-weight: 700;
          color: #1f2937;
        }

        /* Confirm Dialog */
        .confirm-dialog {
          background: white;
          border-radius: 20px;
          padding: 32px;
          max-width: 440px;
          width: 100%;
          animation: scaleIn 0.3s ease-in-out;
        }

        .confirm-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #fee2e2;
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .confirm-title {
          font-size: 22px;
          font-weight: 700;
          color: #1f2937;
          text-align: center;
          margin-bottom: 12px;
        }

        .confirm-message {
          font-size: 15px;
          color: #6b7280;
          text-align: center;
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .confirm-actions {
          display: flex;
          gap: 12px;
        }

        .confirm-actions .btn {
          flex: 1;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          body {
            padding: 10px;
          }

          .header {
            padding: 24px 20px;
          }

          .header h1 {
            font-size: 24px;
          }

          .main-content {
            padding: 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .search-filter-container {
            flex-direction: column;
          }

          .search-container {
            min-width: 100%;
          }

          .filter-container {
            width: 100%;
            overflow-x: auto;
          }

          .type-selection {
            grid-template-columns: 1fr;
          }

          .modal {
            max-width: 100%;
            margin: 10px;
          }

          .modal-body {
            padding: 20px;
          }

          .modal-footer {
            padding: 16px 20px;
          }
        }

        /* Animations for individual elements */
        .fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        .slide-in {
          animation: slideIn 0.3s ease-in-out;
        }
      `}</style>

      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <div className="header-top">
              <h1>
                <Briefcase size={36} />
                Department Management
              </h1>
              <div className="header-actions">
                <button className="btn btn-secondary" onClick={() => setShowResourceModal(true)}>
                  <Settings size={18} />
                  Resources
                </button>
                <button className="btn btn-primary" onClick={() => {
                  resetForm();
                  setShowCreateModal(true);
                }}>
                  <Plus size={20} />
                  Add Department
                </button>
              </div>
            </div>

            <div className="search-filter-container">
              <div className="search-container">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search departments, managers, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="filter-container">
                <button 
                  className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterType('all')}
                >
                  All
                </button>
                <button 
                  className={`filter-btn ${filterType === 'production' ? 'active' : ''}`}
                  onClick={() => setFilterType('production')}
                >
                  Production
                </button>
                <button 
                  className={`filter-btn ${filterType === 'support' ? 'active' : ''}`}
                  onClick={() => setFilterType('support')}
                >
                  Support
                </button>
                <button 
                  className={`filter-btn ${filterType === 'management' ? 'active' : ''}`}
                  onClick={() => setFilterType('management')}
                >
                  Management
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Statistics */}
          <div className="stats-grid">
            <div className="stat-card" style={{ '--stat-color': '#3b82f6', '--stat-bg': '#dbeafe' } as any}>
              <div className="stat-icon">
                <Users size={24} color="#3b82f6" />
              </div>
              <div className="stat-value">{totalStaff}</div>
              <div className="stat-label">Total Staff</div>
            </div>

            <div className="stat-card" style={{ '--stat-color': '#10b981', '--stat-bg': '#d1fae5' } as any}>
              <div className="stat-icon">
                <Package size={24} color="#10b981" />
              </div>
              <div className="stat-value">{totalActiveJobs}</div>
              <div className="stat-label">Active Jobs</div>
            </div>

            <div className="stat-card" style={{ '--stat-color': '#f59e0b', '--stat-bg': '#fef3c7' } as any}>
              <div className="stat-icon">
                <TrendingUp size={24} color="#f59e0b" />
              </div>
              <div className="stat-value">{avgUtilization}%</div>
              <div className="stat-label">Avg Utilization</div>
            </div>

            <div className="stat-card" style={{ '--stat-color': '#8b5cf6', '--stat-bg': '#ede9fe' } as any}>
              <div className="stat-icon">
                <DollarSign size={24} color="#8b5cf6" />
              </div>
              <div className="stat-value">${(totalBudget / 1000).toFixed(0)}K</div>
              <div className="stat-label">Total Budget</div>
            </div>
          </div>

          {/* Departments Section */}
          <div className="section-header">
            <h2 className="section-title">
              Departments ({filteredDepartments.length})
            </h2>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <div className="loading-text">Loading departments...</div>
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredDepartments.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">
                <Briefcase size={40} />
              </div>
              <div className="empty-title">No departments found</div>
              <div className="empty-description">
                {searchQuery || filterType !== 'all' 
                  ? 'Try adjusting your search or filters'
                  : 'Get started by creating your first department'}
              </div>
              {!searchQuery && filterType === 'all' && (
                <button className="btn btn-primary" onClick={() => {
                  resetForm();
                  setShowCreateModal(true);
                }}>
                  <Plus size={20} />
                  Create Department
                </button>
              )}
            </div>
          )}

          {/* Departments Grid */}
          {!loading && filteredDepartments.length > 0 && (
            <div className="department-grid">
              {filteredDepartments.map((dept) => {
                const typeColor = getTypeColor(dept.type);
                return (
                  <div key={dept.id} className="department-card">
                    <div className="dept-header">
                      <div className="dept-info">
                        <h3>{dept.name}</h3>
                        <div className="dept-id">{dept.id}</div>
                      </div>
                      <div className="dept-actions">
                        <button 
                          className="icon-btn edit"
                          onClick={() => handleEditDepartment(dept)}
                          title="Edit department"
                        >
                          <Edit size={16} />
                        </button>
                        <button 
                          className="icon-btn delete"
                          onClick={() => {
                            setDepartmentToDelete(dept.id);
                            setShowDeleteConfirm(true);
                          }}
                          title="Delete department"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="tags">
                      <div 
                        className="tag"
                        style={{ 
                          background: typeColor.bg, 
                          color: typeColor.text 
                        }}
                      >
                        {dept.type}
                      </div>
                      <div 
                        className="tag"
                        style={{ 
                          background: dept.status === 'active' ? '#d1fae5' : '#f3f4f6',
                          color: dept.status === 'active' ? '#065f46' : '#6b7280'
                        }}
                      >
                        {dept.status}
                      </div>
                    </div>

                    <div className="dept-details">
                      <div className="detail-row">
                        <Users size={16} />
                        <span>
                          <span className="detail-label">Head:</span> {dept.headOfDepartment}
                          <span style={{ margin: '0 8px' }}>•</span>
                          <span className="detail-label">Staff:</span> {dept.staffCount}
                        </span>
                      </div>
                      <div className="detail-row">
                        <Package size={16} />
                        <span>
                          <span className="detail-label">Active Jobs:</span> {dept.activeJobs}
                        </span>
                      </div>
                      <div className="detail-row">
                        <Clock size={16} />
                        <span>
                          <span className="detail-label">Hours:</span> {dept.workingHours}
                        </span>
                      </div>
                      <div className="detail-row">
                        <MapPin size={16} />
                        <span>{dept.location}</span>
                      </div>
                    </div>

                    <div className="utilization-section">
                      <div className="utilization-header">
                        <span className="utilization-label">Utilization</span>
                        <span className="utilization-value">{dept.utilization}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ 
                            width: `${dept.utilization}%`,
                            background: getUtilizationColor(dept.utilization)
                          }}
                        />
                      </div>
                    </div>

                    {dept.equipment && dept.equipment.length > 0 && (
                      <div className="equipment-section">
                        <div className="equipment-label">Equipment:</div>
                        <div className="equipment-tags">
                          {dept.equipment.map((equip, index) => (
                            <div key={index} className="equipment-tag">
                              {equip}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="budget-section">
                      <span className="budget-label">Annual Budget:</span>
                      <span className="budget-value">
                        ${dept.budget.toLocaleString()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Create/Edit Department Modal */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => {
          setShowCreateModal(false);
          resetForm();
        }}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {selectedDepartment ? 'Edit Department' : 'Create New Department'}
              </h2>
              <button 
                className="modal-close"
                onClick={() => {
                  setShowCreateModal(false);
                  resetForm();
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">
                  Department Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className={`form-input ${formErrors.name ? 'error' : ''}`}
                  placeholder="e.g., Printing Department"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {formErrors.name && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    {formErrors.name}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  Department Type <span className="required">*</span>
                </label>
                <div className="type-selection">
                  {['production', 'support', 'management'].map((type) => (
                    <div
                      key={type}
                      className={`type-option ${formData.type === type ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, type })}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Head of Department <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className={`form-input ${formErrors.headOfDepartment ? 'error' : ''}`}
                  placeholder="e.g., John Smith"
                  value={formData.headOfDepartment}
                  onChange={(e) => setFormData({ ...formData, headOfDepartment: e.target.value })}
                />
                {formErrors.headOfDepartment && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    {formErrors.headOfDepartment}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  Location <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className={`form-input ${formErrors.location ? 'error' : ''}`}
                  placeholder="e.g., Building A - Floor 1"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
                {formErrors.location && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    {formErrors.location}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  Working Hours <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className={`form-input ${formErrors.workingHours ? 'error' : ''}`}
                  placeholder="e.g., 08:00 - 18:00 or 24/7 (3 shifts)"
                  value={formData.workingHours}
                  onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
                />
                {formErrors.workingHours && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    {formErrors.workingHours}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  Staff Count
                </label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="0"
                  value={formData.staffCount}
                  onChange={(e) => setFormData({ ...formData, staffCount: e.target.value })}
                  min="0"
                />
                <div className="form-helper">Current number of staff members</div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Annual Budget (USD) <span className="required">*</span>
                </label>
                <input
                  type="number"
                  className={`form-input ${formErrors.budget ? 'error' : ''}`}
                  placeholder="e.g., 150000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  min="0"
                  step="1000"
                />
                {formErrors.budget && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    {formErrors.budget}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  Equipment
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g., Digital Press, Flexo Press, Offset Press"
                  value={formData.equipment}
                  onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                />
                <div className="form-helper">Separate equipment names with commas</div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="btn btn-ghost"
                onClick={() => {
                  setShowCreateModal(false);
                  resetForm();
                }}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary"
                onClick={handleCreateDepartment}
                disabled={saving}
              >
                {saving ? (
                  <>
                    <div className="loading-spinner" style={{ width: 16, height: 16, borderWidth: 2 }}></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <CheckCircle size={18} />
                    {selectedDepartment ? 'Update Department' : 'Create Department'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resources Modal */}
      {showResourceModal && (
        <div className="modal-overlay" onClick={() => setShowResourceModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Resource Allocation</h2>
              <button 
                className="modal-close"
                onClick={() => setShowResourceModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              {resources.length === 0 ? (
                <div className="empty-state" style={{ padding: '40px 20px' }}>
                  <div className="empty-icon" style={{ width: 60, height: 60 }}>
                    <Package size={30} />
                  </div>
                  <div className="empty-title" style={{ fontSize: 18 }}>No Resources</div>
                  <div className="empty-description">
                    No resources have been added yet.
                  </div>
                </div>
              ) : (
                <div className="resource-grid">
                  {resources.map((resource) => {
                    const utilizationPercent = (resource.allocated / resource.quantity) * 100;
                    return (
                      <div key={resource.id} className="resource-card">
                        <div className="resource-header">
                          <div>
                            <div className="resource-name">{resource.name}</div>
                            <div className="resource-type">
                              Type: {resource.type}
                            </div>
                          </div>
                          <div className="resource-id">{resource.id}</div>
                        </div>

                        <div className="resource-stats">
                          <div>
                            <span className="resource-stat-label">Allocated: </span>
                            <span className="resource-stat-value">
                              {resource.allocated} {resource.unit}
                            </span>
                          </div>
                          <div>
                            <span className="resource-stat-label">Total: </span>
                            <span className="resource-stat-value">
                              {resource.quantity} {resource.unit}
                            </span>
                          </div>
                        </div>

                        <div className="progress-bar">
                          <div 
                            className="progress-fill"
                            style={{ 
                              width: `${utilizationPercent}%`,
                              background: utilizationPercent >= 80 ? '#ef4444' : 
                                         utilizationPercent >= 60 ? '#f59e0b' : '#10b981'
                            }}
                          />
                        </div>
                        <div style={{ 
                          textAlign: 'right', 
                          fontSize: 12, 
                          color: '#6b7280', 
                          marginTop: 4 
                        }}>
                          {utilizationPercent.toFixed(0)}% utilized
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button 
                className="btn btn-primary"
                onClick={() => setShowResourceModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirm && (
        <div className="modal-overlay" onClick={() => {
          setShowDeleteConfirm(false);
          setDepartmentToDelete(null);
        }}>
          <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="confirm-icon">
              <AlertCircle size={28} />
            </div>
            <h3 className="confirm-title">Delete Department?</h3>
            <p className="confirm-message">
              Are you sure you want to delete this department? This action cannot be undone.
            </p>
            <div className="confirm-actions">
              <button 
                className="btn btn-ghost"
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setDepartmentToDelete(null);
                }}
              >
                Cancel
              </button>
              <button 
                className="btn btn-danger"
                onClick={handleDeleteDepartment}
              >
                <Trash2 size={18} />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}