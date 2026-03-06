import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Plus, ChevronLeft, ChevronRight, Users, Edit, Trash2,
  Download, Clock, Calendar, FileText, Settings, Save, X, AlertCircle,
  CheckCircle, Briefcase, TrendingUp, Activity, Filter, Search
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
import { db, auth } from '../../firebaseConfig';

// ============================================================================
// TYPES
// ============================================================================
interface Shift {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  color: string;
  description?: string;
  maxStaff?: number;
  assignedStaff?: number;
  department?: string;
  breakDuration?: number;
  isActive: boolean;
  createdAt: any;
  updatedAt: any;
}

interface Staff {
  id: string;
  staffId: string;
  name: string;
  department: string;
  role: string;
}

interface Assignment {
  id: string;
  shiftId: string;
  staffName: string;
  staffId: string;
  date: string;
  status: 'scheduled' | 'completed' | 'absent';
  notes?: string;
  createdAt: any;
}

interface FormData {
  name: string;
  startTime: string;
  endTime: string;
  color: string;
  description: string;
  maxStaff: string;
  department: string;
  breakDuration: string;
}

interface AssignmentFormData {
  shiftId: string;
  staffName: string;
  staffDocId: string; // The Firestore document ID for selecting in the dropdown
  staffId: string; // The visible/custom staff ID like EMP-001
  frequency: 'single' | 'daily' | 'weekly' | 'biweekly';
  date: string;
  endDate: string;
  notes: string;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function ShiftScheduling() {
  const navigate = useNavigate();
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedShift, setSelectedShift] = useState<Shift | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [shiftToDelete, setShiftToDelete] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    startTime: '08:00',
    endTime: '16:00',
    color: '#3B82F6',
    description: '',
    maxStaff: '10',
    department: '',
    breakDuration: '30'
  });

  const [assignmentFormData, setAssignmentFormData] = useState<AssignmentFormData>({
    shiftId: '',
    staffName: '',
    staffDocId: '',
    staffId: '',
    frequency: 'single',
    date: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    notes: ''
  });

  const [editingAssignment, setEditingAssignment] = useState<Assignment | null>(null);
  const [showEditAssignmentModal, setShowEditAssignmentModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);
  const [showAssignmentDeleteConfirm, setShowAssignmentDeleteConfirm] = useState(false);

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Attendance Register States
  const [selectedStaffForAttendance, setSelectedStaffForAttendance] = useState<Staff | null>(null);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showOnlyCurrentWeek, setShowOnlyCurrentWeek] = useState(true);
  const [showOnlyCurrentRoster, setShowOnlyCurrentRoster] = useState(true);

  // Predefined color palette
  const colorPalette = [
    '#3B82F6', '#8B5CF6', '#EC4899', '#EF4444', '#F59E0B',
    '#10B981', '#06B6D4', '#6366F1', '#84CC16', '#F97316'
  ];

  // ============================================================================
  // FIREBASE LISTENERS
  // ============================================================================
  useEffect(() => {
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

    const shiftsQuery = query(
      collection(db, 'shifts'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribeShifts = onSnapshot(shiftsQuery, (snapshot) => {
      const shiftsData: Shift[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...sanitizeDoc(doc.data())
      } as Shift));
      setShifts(shiftsData);
      setLoading(false);
    });

    const assignmentsQuery = query(
      collection(db, 'assignments'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribeAssignments = onSnapshot(assignmentsQuery, (snapshot) => {
      const assignmentsData: Assignment[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...sanitizeDoc(doc.data())
      } as Assignment));
      setAssignments(assignmentsData);
    });

    const staffQuery = query(collection(db, 'staff'));
    const unsubscribeStaff = onSnapshot(staffQuery, (snapshot) => {
      const staffData: Staff[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        staffId: doc.data().staffId || doc.id,
        name: doc.data().name || '',
        department: doc.data().department || '',
        role: doc.data().role || ''
      }));
      setStaffList(staffData);
    });

    return () => {
      unsubscribeShifts();
      unsubscribeAssignments();
      unsubscribeStaff();
    };
  }, []);

  // Utility to get local YYYY-MM-DD without UTC shifting
  const formatDateLocal = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // ============================================================================
  // WEEK NAVIGATION
  // ============================================================================
  const getWeekDates = () => {
    const start = new Date(currentWeekStart);
    // Adjust to Monday: getDay() returns 0 for Sunday, 1 for Monday, etc.
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1);
    start.setDate(diff);
    start.setHours(0, 0, 0, 0);

    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      d.setHours(0, 0, 0, 0);
      return d;
    });
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
    newDate.setHours(12, 0, 0, 0); // Use mid-day to avoid TZ boundary issues
    setCurrentWeekStart(newDate);
  };

  const weekDates = getWeekDates();

  // ============================================================================
  // FORM VALIDATION
  // ============================================================================
  const validateShiftForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = 'Shift name is required';
    if (!formData.startTime) errors.startTime = 'Start time is required';
    if (!formData.endTime) errors.endTime = 'End time is required';
    if (formData.startTime === formData.endTime) {
      errors.endTime = 'End time must be different from start time';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateAssignmentForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!assignmentFormData.shiftId) errors.shiftId = 'Please select a shift';
    if (!assignmentFormData.staffName.trim()) errors.staffName = 'Staff name is required';
    if (!assignmentFormData.staffId.trim()) errors.staffId = 'Staff ID is required';
    if (!assignmentFormData.date) errors.date = 'Start Date is required';
    if (assignmentFormData.frequency !== 'single') {
      if (!assignmentFormData.endDate) errors.endDate = 'End Date is required for recurring shifts';
      else if (new Date(assignmentFormData.endDate) < new Date(assignmentFormData.date)) {
        errors.endDate = 'End Date must be after Start Date';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // ============================================================================
  // CRUD OPERATIONS - SHIFTS
  // ============================================================================
  const handleCreateShift = async () => {
    if (!validateShiftForm()) return;

    setSaving(true);
    try {
      if (!auth?.currentUser) {
        throw new Error('not-authenticated: user must be signed in to write to Firestore');
      }
      const shiftData = {
        name: formData.name,
        startTime: formData.startTime,
        endTime: formData.endTime,
        color: formData.color,
        description: formData.description,
        maxStaff: parseInt(formData.maxStaff) || 10,
        assignedStaff: 0,
        department: formData.department,
        breakDuration: parseInt(formData.breakDuration) || 0,
        isActive: true,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };

      if (selectedShift) {
        await updateDoc(doc(db, 'shifts', selectedShift.id), {
          ...shiftData,
          createdAt: selectedShift.createdAt,
          assignedStaff: selectedShift.assignedStaff
        });
      } else {
        await addDoc(collection(db, 'shifts'), shiftData);
      }

      resetShiftForm();
      setShowCreateModal(false);
    } catch (error: any) {
      console.error('Error saving shift:', error);
      const code = error?.code || '';
      const message = error?.message || String(error);
      alert(`Error saving shift (${code}): ${message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteShift = async () => {
    if (!shiftToDelete) return;

    try {
      await deleteDoc(doc(db, 'shifts', shiftToDelete));
      setShowDeleteConfirm(false);
      setShiftToDelete(null);
    } catch (error) {
      console.error('Error deleting shift:', error);
      alert('Error deleting shift. Please try again.');
    }
  };

  const handleEditShift = (shift: Shift) => {
    setSelectedShift(shift);
    setFormData({
      name: shift.name,
      startTime: shift.startTime,
      endTime: shift.endTime,
      color: shift.color,
      description: shift.description || '',
      maxStaff: shift.maxStaff?.toString() || '10',
      department: shift.department || '',
      breakDuration: shift.breakDuration?.toString() || '30'
    });
    setShowCreateModal(true);
  };

  const resetShiftForm = () => {
    setFormData({
      name: '',
      startTime: '08:00',
      endTime: '16:00',
      color: '#3B82F6',
      description: '',
      maxStaff: '10',
      department: '',
      breakDuration: '30'
    });
    setFormErrors({});
    setSelectedShift(null);
  };

  // ============================================================================
  // CRUD OPERATIONS - ASSIGNMENTS
  // ============================================================================
  const handleCreateAssignment = async () => {
    if (!validateAssignmentForm()) return;

    setSaving(true);
    try {
      if (!auth?.currentUser) {
        throw new Error('not-authenticated: user must be signed in to write to Firestore');
      }

      // Generate dates based on frequency
      const generatedDates: string[] = [];
      const startDate = new Date(assignmentFormData.date);

      if (assignmentFormData.frequency === 'single') {
        generatedDates.push(assignmentFormData.date);
      } else {
        const endDate = new Date(assignmentFormData.endDate);

        let stepDays = 1; // default to daily
        if (assignmentFormData.frequency === 'weekly') stepDays = 7;
        else if (assignmentFormData.frequency === 'biweekly') stepDays = 14;

        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
          generatedDates.push(formatDateLocal(currentDate));
          currentDate.setDate(currentDate.getDate() + stepDays);
        }
      }

      const promises = generatedDates.map(dateStr => {
        const assignmentData = {
          shiftId: assignmentFormData.shiftId,
          staffName: assignmentFormData.staffName,
          staffId: assignmentFormData.staffId,
          date: dateStr,
          status: 'scheduled' as const,
          notes: assignmentFormData.notes,
          createdAt: Timestamp.now()
        };
        return addDoc(collection(db, 'assignments'), assignmentData);
      });

      await Promise.all(promises);

      // Update shift assigned staff count by 1 (representing a staff member assigned, not raw assignment rows)
      const shift = shifts.find(s => s.id === assignmentFormData.shiftId);
      if (shift) {
        await updateDoc(doc(db, 'shifts', shift.id), {
          assignedStaff: (shift.assignedStaff || 0) + 1,
          updatedAt: Timestamp.now()
        });
      }

      resetAssignmentForm();
      setShowAssignModal(false);
    } catch (error) {
      console.error('Error creating assignment:', error);
      const code = (error as any)?.code || '';
      const message = (error as any)?.message || String(error);
      alert(`Error creating assignment (${code}): ${message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateAssignment = async () => {
    if (!editingAssignment || !auth?.currentUser) return;
    setSaving(true);
    try {
      await updateDoc(doc(db, 'assignments', editingAssignment.id), {
        staffName: editingAssignment.staffName,
        staffId: editingAssignment.staffId,
        date: editingAssignment.date,
        status: editingAssignment.status,
        notes: editingAssignment.notes || ''
      });
      setShowEditAssignmentModal(false);
      setEditingAssignment(null);
    } catch (error) {
      console.error('Error updating assignment:', error);
      alert('Error updating assignment. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteAssignment = async () => {
    if (!assignmentToDelete || !auth?.currentUser) return;
    try {
      const assignment = assignments.find(a => a.id === assignmentToDelete);
      await deleteDoc(doc(db, 'assignments', assignmentToDelete));

      // Since an assignment was deleted and we count assigned staff, we decrement the shift count.
      // This is a naive decrement that assumes shift count perfectly matches assignments.
      if (assignment) {
        const shift = shifts.find(s => s.id === assignment.shiftId);
        if (shift && shift.assignedStaff && shift.assignedStaff > 0) {
          await updateDoc(doc(db, 'shifts', shift.id), {
            assignedStaff: shift.assignedStaff - 1
          });
        }
      }

      setShowAssignmentDeleteConfirm(false);
      setAssignmentToDelete(null);
    } catch (error) {
      console.error('Error deleting assignment:', error);
      alert('Error deleting assignment. Please try again.');
    }
  };

  const toggleAssignmentStatus = async (assignment: Assignment) => {
    if (!auth?.currentUser) return;

    const statusCycle: Assignment['status'][] = ['scheduled', 'completed', 'absent'];
    const currentIndex = statusCycle.indexOf(assignment.status);
    const nextStatus = statusCycle[(currentIndex + 1) % statusCycle.length];

    try {
      await updateDoc(doc(db, 'assignments', assignment.id), {
        status: nextStatus,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  const resetAssignmentForm = () => {
    setAssignmentFormData({
      shiftId: '',
      staffName: '',
      staffDocId: '',
      staffId: '',
      frequency: 'single',
      date: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      notes: ''
    });
    setFormErrors({});
  };

  // ============================================================================
  // UTILITY FUNCTIONS
  // ============================================================================
  const calculateShiftDuration = (start: string, end: string): string => {
    const [startHour, startMin] = start.split(':').map(Number);
    const [endHour, endMin] = end.split(':').map(Number);

    let hours = endHour - startHour;
    let minutes = endMin - startMin;

    if (minutes < 0) {
      hours--;
      minutes += 60;
    }

    return `${hours}h ${minutes > 0 ? `${minutes}m` : ''}`;
  };

  const filteredShifts = shifts.filter(shift =>
    shift.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (shift.department && shift.department.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const activeShifts = shifts.filter(s => s.isActive);
  const totalStaffAssigned = shifts.reduce((sum, s) => sum + (s.assignedStaff || 0), 0);
  const totalCapacity = shifts.reduce((sum, s) => sum + (s.maxStaff || 0), 0);
  const utilizationRate = totalCapacity > 0 ? Math.round((totalStaffAssigned / totalCapacity) * 100) : 0;

  const exportSchedule = () => {
    // Simple CSV export
    const csvData = shifts.map(shift =>
      `${shift.name},${shift.startTime},${shift.endTime},${shift.assignedStaff || 0},${shift.maxStaff || 0}`
    ).join('\n');

    const blob = new Blob([`Name,Start Time,End Time,Assigned,Capacity\n${csvData}`], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shift-schedule.csv';
    a.click();
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
          50% { opacity: 0.8; }
        }

        /* Header Styles */
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

        .header-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .header h1 {
          font-size: 36px;
          font-weight: 700;
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
          color: #667eea;
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

        .btn-icon {
          width: 40px;
          height: 40px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Search Bar */
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

        /* Calendar Week View */
        .calendar-section {
          background: white;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
          border: 2px solid #f3f4f6;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .calendar-title {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
        }

        .week-nav {
          display: flex;
          gap: 8px;
        }

        .week-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 12px;
        }

        .day-card {
          background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          border: 2px solid #e5e7eb;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .day-card:hover {
          border-color: #667eea;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
        }

        .day-card.today {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: #667eea;
        }

        .day-weekday {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 4px;
          opacity: 0.7;
        }

        .day-date {
          font-size: 24px;
          font-weight: 700;
        }

        .day-assignments {
          margin-top: 8px;
          font-size: 11px;
          opacity: 0.8;
        }

        /* Action Buttons Section */
        .action-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .action-btn {
          background: white;
          border: 2px solid #e5e7eb;
          padding: 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-weight: 600;
          color: #1f2937;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn:hover {
          border-color: #667eea;
          background: #f9fafb;
          transform: translateY(-2px);
        }

        .action-btn.primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
        }

        .action-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
        }

        /* Shift Cards */
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

        .shift-grid {
          display: grid;
          gap: 20px;
        }

        .shift-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          border: 2px solid #f3f4f6;
          transition: all 0.3s ease;
          animation: scaleIn 0.3s ease-in-out;
          position: relative;
          overflow: hidden;
        }

        .shift-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 6px;
          background: var(--shift-color);
        }

        .shift-card:hover {
          border-color: #e5e7eb;
          box-shadow: 0 12px 24px -8px rgba(0,0,0,0.1);
          transform: translateY(-2px);
        }

        .shift-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .shift-info {
          flex: 1;
        }

        .shift-name {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .shift-badge {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--shift-color);
          box-shadow: 0 0 0 3px rgba(var(--shift-color-rgb), 0.2);
        }

        .shift-time {
          font-size: 15px;
          color: #6b7280;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .shift-duration {
          background: #f3f4f6;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          color: #4b5563;
        }

        .shift-actions {
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

        .shift-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          padding: 20px;
          background: #f9fafb;
          border-radius: 12px;
          margin-top: 20px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .detail-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: var(--shift-color);
        }

        .detail-content {
          flex: 1;
        }

        .detail-label {
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 2px;
        }

        .detail-value {
          font-size: 15px;
          font-weight: 600;
          color: #1f2937;
        }

        .staff-capacity {
          margin-top: 16px;
        }

        .capacity-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .capacity-label {
          font-size: 13px;
          font-weight: 600;
          color: #4b5563;
        }

        .capacity-value {
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
          background: var(--shift-color);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          z-index: 1000;
          padding: 60px 20px;
          overflow-y: auto;
          animation: fadeIn 0.2s ease-in-out;
        }

        .modal {
          background: white;
          border-radius: 24px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: scaleIn 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
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
          flex: 1;
          overflow-y: auto;
          min-height: 0;
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
          flex-shrink: 0;
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
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
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

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        /* Color Picker */
        .color-picker {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }

        .color-option {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 12px;
          cursor: pointer;
          border: 3px solid transparent;
          transition: all 0.2s ease;
          position: relative;
        }

        .color-option:hover {
          transform: scale(1.1);
        }

        .color-option.selected {
          border-color: #1f2937;
          transform: scale(1.15);
        }

        .color-option.selected::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 20px;
          font-weight: bold;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
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
          border-top-color: #667eea;
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

          .week-grid {
            grid-template-columns: repeat(7, 1fr);
            gap: 6px;
          }

          .day-card {
            padding: 8px;
          }

          .day-date {
            font-size: 18px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .modal {
            max-width: 100%;
            margin: 10px;
          }

          .modal-body {
            padding: 20px;
          }

          .action-buttons {
            grid-template-columns: 1fr;
          }
        }

        /* Animations */
        .fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        .slide-in {
          animation: slideIn 0.3s ease-in-out;
        }
        .table-container {
          background: white;
          border-radius: 16px;
          border: 2px solid #f3f4f6;
          overflow: hidden;
          margin-bottom: 32px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th {
          background: #f9fafb;
          padding: 16px;
          text-align: left;
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #e5e7eb;
        }

        td {
          padding: 16px;
          font-size: 15px;
          color: #1f2937;
          border-bottom: 1px solid #e5e7eb;
        }

        tbody tr:last-child td {
          border-bottom: none;
        }

        tbody tr:hover {
          background: #f9fafb;
        }

        .status-badge {
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .status-scheduled {
          background: #dbeafe;
          color: #1e40af;
        }

        .status-completed {
          background: #d1fae5;
          color: #065f46;
        }

        .status-absent {
          background: #fee2e2;
          color: #b91c1c;
        }
        .register-container {
          background: white;
          border-radius: 20px;
          border: 2px solid #f3f4f6;
          overflow: hidden;
          margin-bottom: 40px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .reg-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
        }

        .reg-th {
          background: #f8fafc;
          padding: 20px 16px;
          text-align: center;
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 2px solid #e2e8f0;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .reg-th.staff-col {
          text-align: left;
          width: 250px;
          position: sticky;
          left: 0;
          background: #f8fafc;
          border-right: 2px solid #e2e8f0;
          z-index: 20;
        }

        .reg-td {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
          text-align: center;
          transition: background 0.2s;
        }

        .reg-td.staff-col {
          text-align: left;
          position: sticky;
          left: 0;
          background: white;
          border-right: 2px solid #f1f5f9;
          z-index: 5;
        }

        .reg-row:hover .reg-td {
          background: #f8fafc;
        }

        .reg-row:hover .reg-td.staff-col {
          background: #f1f5f9;
        }

        .attendance-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          padding: 8px;
          border-radius: 12px;
          transition: all 0.2s;
          user-select: none;
        }

        .attendance-cell:hover {
          background: #f1f5f9;
          transform: translateY(-2px);
        }

        .reg-status {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .status-dot-scheduled {
          background: #eff6ff;
          color: #3b82f6;
          border: 2px solid #dbeafe;
        }

        .status-dot-completed {
          background: #f0fdf4;
          color: #22c55e;
          border: 2px solid #dcfce7;
        }

        .status-dot-absent {
          background: #fef2f2;
          color: #ef4444;
          border: 2px solid #fee2e2;
        }

        .reg-day-info {
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
        }

        .no-assign {
          color: #cbd5e1;
          font-size: 12px;
          font-style: italic;
        }

        .register-header {
          padding: 24px 32px;
          background: white;
          border-bottom: 2px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>

      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <div className="header-top">
              <div className="header-left" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button className="btn btn-ghost" onClick={() => navigate(-1)} title="Back">
                  <ArrowLeft size={18} />
                </button>
                <div className="header-title">
                  <Clock size={36} />
                  <h1>Shift Scheduling</h1>
                </div>
              </div>
              <div className="header-actions">
                <button className="btn btn-secondary" onClick={exportSchedule}>
                  <Download size={18} />
                  Export Schedule
                </button>
                <button className="btn btn-primary" onClick={() => {
                  resetShiftForm();
                  setShowCreateModal(true);
                }}>
                  <Plus size={20} />
                  New Shift
                </button>
              </div>
            </div>

            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search shifts, departments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Statistics */}
          <div className="stats-grid">
            <div className="stat-card" style={{ '--stat-color': '#667eea', '--stat-bg': '#e0e7ff' } as any}>
              <div className="stat-icon">
                <Activity size={24} color="#667eea" />
              </div>
              <div className="stat-value">{activeShifts.length}</div>
              <div className="stat-label">Active Shifts</div>
            </div>

            <div className="stat-card" style={{ '--stat-color': '#10b981', '--stat-bg': '#d1fae5' } as any}>
              <div className="stat-icon">
                <Users size={24} color="#10b981" />
              </div>
              <div className="stat-value">{totalStaffAssigned}</div>
              <div className="stat-label">Staff Assigned</div>
            </div>

            <div className="stat-card" style={{ '--stat-color': '#f59e0b', '--stat-bg': '#fef3c7' } as any}>
              <div className="stat-icon">
                <TrendingUp size={24} color="#f59e0b" />
              </div>
              <div className="stat-value">{utilizationRate}%</div>
              <div className="stat-label">Utilization Rate</div>
            </div>

            <div className="stat-card" style={{ '--stat-color': '#8b5cf6', '--stat-bg': '#ede9fe' } as any}>
              <div className="stat-icon">
                <Briefcase size={24} color="#8b5cf6" />
              </div>
              <div className="stat-value">{totalCapacity}</div>
              <div className="stat-label">Total Capacity</div>
            </div>
          </div>

          {/* Calendar Week View */}
          <div className="calendar-section">
            <div className="calendar-header">
              <h2 className="calendar-title">
                <Calendar size={24} style={{ display: 'inline', marginRight: 8 }} />
                Week Overview
              </h2>
              <div className="week-nav">
                <button
                  className="btn btn-icon btn-ghost"
                  onClick={() => navigateWeek('prev')}
                  aria-label="Previous week"
                  title="Previous week"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="btn btn-icon btn-ghost"
                  onClick={() => navigateWeek('next')}
                  aria-label="Next week"
                  title="Next week"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="week-grid">
              {weekDates.map((date) => {
                const isToday = date.toDateString() === new Date().toDateString();
                const dateStr = formatDateLocal(date);
                const dateAssignments = assignments.filter(
                  a => a.date === dateStr
                );

                return (
                  <div
                    key={date.toISOString()}
                    className={`day-card ${isToday ? 'today' : ''}`}
                  >
                    <div className="day-weekday">
                      {date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div className="day-date">{date.getDate()}</div>
                    {dateAssignments.length > 0 && (
                      <div className="day-assignments">
                        {dateAssignments.length} assigned
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="action-btn primary" onClick={() => setShowAssignModal(true)}>
              <Users size={20} />
              Assign Staff to Shift
            </button>
            <button className="action-btn" onClick={() => {
              resetShiftForm();
              setShowCreateModal(true);
            }}>
              <Plus size={20} />
              Create New Shift
            </button>
          </div>

          {/* Shifts Section */}
          <div className="section-header">
            <h2 className="section-title">
              Defined Shifts ({filteredShifts.length})
            </h2>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <div className="loading-text">Loading shifts...</div>
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredShifts.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">
                <Clock size={40} />
              </div>
              <div className="empty-title">No shifts found</div>
              <div className="empty-description">
                {searchQuery
                  ? 'Try adjusting your search'
                  : 'Get started by creating your first shift'}
              </div>
              {!searchQuery && (
                <button className="btn btn-primary" onClick={() => {
                  resetShiftForm();
                  setShowCreateModal(true);
                }}>
                  <Plus size={20} />
                  Create First Shift
                </button>
              )}
            </div>
          )}

          {/* Shifts Grid */}
          {!loading && filteredShifts.length > 0 && (
            <div className="shift-grid">
              {filteredShifts.map((shift) => {
                const capacityPercent = shift.maxStaff
                  ? Math.round(((shift.assignedStaff || 0) / shift.maxStaff) * 100)
                  : 0;

                return (
                  <div
                    key={shift.id}
                    className="shift-card"
                    style={{ '--shift-color': shift.color } as any}
                  >
                    <div className="shift-header">
                      <div className="shift-info">
                        <div className="shift-name">
                          <div className="shift-badge" />
                          {shift.name}
                        </div>
                        <div className="shift-time">
                          <Clock size={16} />
                          {shift.startTime} – {shift.endTime}
                          <span className="shift-duration">
                            {calculateShiftDuration(shift.startTime, shift.endTime)}
                          </span>
                        </div>
                        {shift.description && (
                          <p style={{
                            marginTop: 8,
                            fontSize: 14,
                            color: '#6b7280',
                            lineHeight: 1.5
                          }}>
                            {shift.description}
                          </p>
                        )}
                      </div>
                      <div className="shift-actions">
                        <button
                          className="icon-btn edit"
                          onClick={() => handleEditShift(shift)}
                          title="Edit shift"
                          aria-label="Edit shift"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          className="icon-btn delete"
                          onClick={() => {
                            setShiftToDelete(shift.id);
                            setShowDeleteConfirm(true);
                          }}
                          title="Delete shift"
                          aria-label="Delete shift"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="shift-details">
                      {shift.department && (
                        <div className="detail-item">
                          <div className="detail-icon">
                            <Briefcase size={18} />
                          </div>
                          <div className="detail-content">
                            <div className="detail-label">Department</div>
                            <div className="detail-value">{shift.department}</div>
                          </div>
                        </div>
                      )}

                      {shift.breakDuration !== undefined && (
                        <div className="detail-item">
                          <div className="detail-icon">
                            <Clock size={18} />
                          </div>
                          <div className="detail-content">
                            <div className="detail-label">Break Time</div>
                            <div className="detail-value">{shift.breakDuration} mins</div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="staff-capacity">
                      <div className="capacity-header">
                        <span className="capacity-label">Staff Capacity</span>
                        <span className="capacity-value">
                          {shift.assignedStaff || 0} / {shift.maxStaff || 0}
                        </span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${capacityPercent}%`,
                            background: shift.color
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Attendance Register Section */}
          <div className="section-header" style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 className="section-title">Staff Attendance Master Roster</h2>
              <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
                {showOnlyCurrentRoster
                  ? `Summary of staff members assigned for the current week (${weekDates[0].toLocaleDateString()} - ${weekDates[6].toLocaleDateString()})`
                  : 'Displaying all staff with upcoming shift assignments'}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setShowOnlyCurrentRoster(true)}
                style={{
                  padding: '6px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  background: showOnlyCurrentRoster ? '#3b82f6' : 'white',
                  color: showOnlyCurrentRoster ? 'white' : '#64748b',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                This Week
              </button>
              <button
                onClick={() => setShowOnlyCurrentRoster(false)}
                style={{
                  padding: '6px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  background: !showOnlyCurrentRoster ? '#3b82f6' : 'white',
                  color: !showOnlyCurrentRoster ? 'white' : '#64748b',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                All Upcoming
              </button>
            </div>
          </div>

          <div className="register-container">
            <table className="reg-table">
              <thead>
                <tr>
                  <th className="reg-th" style={{ textAlign: 'left', paddingLeft: '32px' }}>Staff Member</th>
                  <th className="reg-th">Staff ID</th>
                  <th className="reg-th">Department</th>
                  <th className="reg-th">Shifts This Week</th>
                  <th className="reg-th">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  const weekStartStr = formatDateLocal(weekDates[0]);
                  const weekEndStr = formatDateLocal(weekDates[6]);

                  const staffIdsWithAssignments = Array.from(new Set(
                    assignments
                      .filter(a => {
                        if (showOnlyCurrentRoster) {
                          return a.date >= weekStartStr && a.date <= weekEndStr;
                        } else {
                          return a.date >= weekStartStr;
                        }
                      })
                      .map(a => a.staffId)
                  ));

                  const staffWithAssignments = staffIdsWithAssignments.map(staffId => {
                    const staffInfo = staffList.find(s => s.staffId === staffId);
                    const staffAssignments = assignments.filter(a => {
                      const isMatchingStaff = a.staffId === staffId;
                      if (!isMatchingStaff) return false;

                      if (showOnlyCurrentRoster) {
                        return a.date >= weekStartStr && a.date <= weekEndStr;
                      } else {
                        return a.date >= weekStartStr;
                      }
                    });

                    return {
                      id: staffInfo?.id || `temp-${staffId}`,
                      staffId: staffId,
                      name: staffInfo?.name || staffAssignments[0]?.staffName || 'Unknown Staff',
                      department: staffInfo?.department || 'General',
                      role: staffInfo?.role || 'Staff',
                      shiftCount: staffAssignments.length
                    };
                  }).sort((a, b) => a.name.localeCompare(b.name));

                  if (staffWithAssignments.length === 0) {
                    return (
                      <tr>
                        <td colSpan={5} className="reg-td" style={{ padding: '60px' }}>
                          <div style={{ color: '#94a3b8', textAlign: 'center' }}>
                            {showOnlyCurrentRoster
                              ? 'No staff members assigned for this week'
                              : 'No upcoming shift assignments found'}
                          </div>
                        </td>
                      </tr>
                    );
                  }

                  return staffWithAssignments.map((staff) => (
                    <tr key={staff.id} className="reg-row">
                      <td className="reg-td" style={{ textAlign: 'left', paddingLeft: '32px' }}>
                        <div style={{ fontWeight: 700, color: '#1e293b' }}>{staff.name}</div>
                      </td>
                      <td className="reg-td">
                        <span style={{
                          padding: '4px 10px',
                          background: '#f1f5f9',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: 600,
                          color: '#475569'
                        }}>
                          {staff.staffId}
                        </span>
                      </td>
                      <td className="reg-td" style={{ color: '#64748b' }}>{staff.department || 'General'}</td>
                      <td className="reg-td">
                        <span style={{
                          fontWeight: 700,
                          color: '#3b82f6',
                          background: '#eff6ff',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '13px'
                        }}>
                          {staff.shiftCount}
                        </span>
                      </td>
                      <td className="reg-td">
                        <button
                          className="btn btn-primary"
                          style={{ padding: '8px 16px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}
                          onClick={() => {
                            setSelectedStaffForAttendance(staff as any);
                            setShowAttendanceModal(true);
                          }}
                        >
                          <CheckCircle size={16} />
                          Mark Attendance
                        </button>
                      </td>
                    </tr>
                  ));
                })()}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* Create/Edit Shift Modal */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => {
          setShowCreateModal(false);
          resetShiftForm();
        }}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {selectedShift ? 'Edit Shift' : 'Create New Shift'}
              </h2>
              <button
                className="modal-close"
                onClick={() => {
                  setShowCreateModal(false);
                  resetShiftForm();
                }}
                title="Close modal"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">
                  Shift Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className={`form-input ${formErrors.name ? 'error' : ''}`}
                  placeholder="e.g., Morning Shift, Night Shift"
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

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">
                    Start Time <span className="required">*</span>
                  </label>
                  <input
                    type="time"
                    className={`form-input ${formErrors.startTime ? 'error' : ''}`}
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                  />
                  {formErrors.startTime && (
                    <div className="form-error">
                      <AlertCircle size={14} />
                      {formErrors.startTime}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    End Time <span className="required">*</span>
                  </label>
                  <input
                    type="time"
                    className={`form-input ${formErrors.endTime ? 'error' : ''}`}
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                  />
                  {formErrors.endTime && (
                    <div className="form-error">
                      <AlertCircle size={14} />
                      {formErrors.endTime}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Shift Color</label>
                <div className="color-picker">
                  {colorPalette.map((color) => (
                    <div
                      key={color}
                      className={`color-option ${formData.color === color ? 'selected' : ''}`}
                      style={{ background: color }}
                      onClick={() => setFormData({ ...formData, color })}
                    />
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Optional shift description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Max Staff</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="10"
                    value={formData.maxStaff}
                    onChange={(e) => setFormData({ ...formData, maxStaff: e.target.value })}
                    min="1"
                  />
                  <div className="form-helper">Maximum number of staff for this shift</div>
                </div>

                <div className="form-group">
                  <label className="form-label">Break Duration (mins)</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="30"
                    value={formData.breakDuration}
                    onChange={(e) => setFormData({ ...formData, breakDuration: e.target.value })}
                    min="0"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Department</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g., Production, Quality Control"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-ghost"
                onClick={() => {
                  setShowCreateModal(false);
                  resetShiftForm();
                }}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={handleCreateShift}
                disabled={saving}
              >
                {saving ? (
                  <>
                    <div className="loading-spinner" style={{ width: 16, height: 16, borderWidth: 2 }}></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    {selectedShift ? 'Update Shift' : 'Create Shift'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Assign Staff Modal */}
      {showAssignModal && (
        <div className="modal-overlay" onClick={() => {
          setShowAssignModal(false);
          resetAssignmentForm();
        }}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Assign Staff to Shift</h2>
              <button
                className="modal-close"
                onClick={() => {
                  setShowAssignModal(false);
                  resetAssignmentForm();
                }}
                title="Close modal"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">
                  Select Shift <span className="required">*</span>
                </label>
                <select
                  className={`form-input ${formErrors.shiftId ? 'error' : ''}`}
                  value={assignmentFormData.shiftId}
                  onChange={(e) => setAssignmentFormData({ ...assignmentFormData, shiftId: e.target.value })}
                  title="Select a shift to assign staff"
                  aria-label="Select shift"
                >
                  <option value="">Choose a shift...</option>
                  {shifts.map((shift) => (
                    <option key={shift.id} value={shift.id}>
                      {shift.name} ({shift.startTime} - {shift.endTime})
                    </option>
                  ))}
                </select>
                {formErrors.shiftId && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    {formErrors.shiftId}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  Staff Member <span className="required">*</span>
                </label>
                <select
                  className={`form-input ${formErrors.staffName ? 'error' : ''}`}
                  value={assignmentFormData.staffDocId}
                  onChange={(e) => {
                    const selectedStaffId = e.target.value; // this is doc.id
                    const selectedStaff = staffList.find(s => s.id === selectedStaffId);
                    setAssignmentFormData({
                      ...assignmentFormData,
                      staffDocId: selectedStaffId,
                      staffId: selectedStaff ? selectedStaff.staffId : '',
                      staffName: selectedStaff ? selectedStaff.name : ''
                    });
                  }}
                >
                  <option value="">Choose staff member...</option>
                  {staffList.map((staff) => (
                    <option key={staff.id} value={staff.id}>
                      {staff.name} {staff.department ? `(${staff.department})` : ''}
                    </option>
                  ))}
                </select>
                {formErrors.staffName && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    {formErrors.staffName}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  Staff ID <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className={`form-input ${formErrors.staffId ? 'error' : ''}`}
                  placeholder="e.g., EMP-001 (Auto-filled)"
                  value={assignmentFormData.staffId}
                  readOnly
                  style={{ backgroundColor: '#f3f4f6', cursor: 'not-allowed' }}
                />
                {formErrors.staffId && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    {formErrors.staffId}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  Frequency <span className="required">*</span>
                </label>
                <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="frequency"
                      value="single"
                      checked={assignmentFormData.frequency === 'single'}
                      onChange={(e) => setAssignmentFormData({ ...assignmentFormData, frequency: e.target.value as any })}
                    />
                    <span style={{ fontSize: '14px', color: '#374151' }}>Single</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="frequency"
                      value="daily"
                      checked={assignmentFormData.frequency === 'daily'}
                      onChange={(e) => setAssignmentFormData({ ...assignmentFormData, frequency: e.target.value as any })}
                    />
                    <span style={{ fontSize: '14px', color: '#374151' }}>Daily</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="frequency"
                      value="weekly"
                      checked={assignmentFormData.frequency === 'weekly'}
                      onChange={(e) => setAssignmentFormData({ ...assignmentFormData, frequency: e.target.value as any })}
                    />
                    <span style={{ fontSize: '14px', color: '#374151' }}>Weekly</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="frequency"
                      value="biweekly"
                      checked={assignmentFormData.frequency === 'biweekly'}
                      onChange={(e) => setAssignmentFormData({ ...assignmentFormData, frequency: e.target.value as any })}
                    />
                    <span style={{ fontSize: '14px', color: '#374151' }}>Bi-weekly</span>
                  </label>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">
                    Date <span className="required">*</span>
                  </label>
                  <input
                    type="date"
                    className={`form-input ${formErrors.date ? 'error' : ''}`}
                    value={assignmentFormData.date}
                    onChange={(e) => setAssignmentFormData({ ...assignmentFormData, date: e.target.value })}
                  />
                  {formErrors.date && (
                    <div className="form-error">
                      <AlertCircle size={14} />
                      {formErrors.date}
                    </div>
                  )}
                </div>

                {assignmentFormData.frequency !== 'single' && (
                  <div className="form-group fade-in">
                    <label className="form-label">
                      End Date <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      className={`form-input ${formErrors.endDate ? 'error' : ''}`}
                      value={assignmentFormData.endDate}
                      onChange={(e) => setAssignmentFormData({ ...assignmentFormData, endDate: e.target.value })}
                      min={assignmentFormData.date}
                    />
                    {formErrors.endDate && (
                      <div className="form-error">
                        <AlertCircle size={14} />
                        {formErrors.endDate}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Notes (Optional)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Any additional notes..."
                  title="Additional notes for this staff assignment"
                  aria-label="Notes"
                  value={assignmentFormData.notes}
                  onChange={(e) => setAssignmentFormData({ ...assignmentFormData, notes: e.target.value })}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-ghost"
                onClick={() => {
                  setShowAssignModal(false);
                  resetAssignmentForm();
                }}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={handleCreateAssignment}
                disabled={saving}
              >
                {saving ? (
                  <>
                    <div className="loading-spinner" style={{ width: 16, height: 16, borderWidth: 2 }}></div>
                    Assigning...
                  </>
                ) : (
                  <>
                    <CheckCircle size={18} />
                    Assign Staff
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirm && (
        <div className="modal-overlay" style={{ zIndex: 1100 }} onClick={() => {
          setShowDeleteConfirm(false);
          setShiftToDelete(null);
        }}>
          <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="confirm-icon">
              <AlertCircle size={28} />
            </div>
            <h3 className="confirm-title">Delete Shift?</h3>
            <p className="confirm-message">
              Are you sure you want to delete this shift? This action cannot be undone and will remove all associated assignments.
            </p>
            <div className="confirm-actions">
              <button
                className="btn btn-ghost"
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setShiftToDelete(null);
                }}
              >
                Cancel
              </button>
              <button
                className="btn btn-danger"
                onClick={handleDeleteShift}
              >
                <Trash2 size={18} />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Assignment Delete Confirmation Dialog */}
      {showAssignmentDeleteConfirm && (
        <div className="modal-overlay" style={{ zIndex: 1100 }} onClick={() => {
          setShowAssignmentDeleteConfirm(false);
          setAssignmentToDelete(null);
        }}>
          <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="confirm-icon" style={{ background: '#fee2e2', color: '#ef4444' }}>
              <AlertCircle size={28} />
            </div>
            <h3 className="confirm-title">Delete Assignment?</h3>
            <p className="confirm-message">
              Are you sure you want to delete this staff assignment? This will remove the staff member from this specific shift on this date.
            </p>
            <div className="confirm-actions">
              <button
                className="btn btn-ghost"
                onClick={() => {
                  setShowAssignmentDeleteConfirm(false);
                  setAssignmentToDelete(null);
                }}
              >
                Cancel
              </button>
              <button
                className="btn btn-danger"
                onClick={handleDeleteAssignment}
              >
                <Trash2 size={18} />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Assignment Modal */}
      {showEditAssignmentModal && editingAssignment && (
        <div className="modal-overlay" style={{ zIndex: 1100 }} onClick={() => {
          setShowEditAssignmentModal(false);
          setEditingAssignment(null);
        }}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Edit Assignment</h2>
              <button
                className="modal-close"
                onClick={() => {
                  setShowEditAssignmentModal(false);
                  setEditingAssignment(null);
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">
                  Staff Member <span className="required">*</span>
                </label>
                <select
                  className="form-input"
                  value={staffList.find(s => s.staffId === editingAssignment.staffId)?.id || ''}
                  onChange={(e) => {
                    const selectedStaffId = e.target.value;
                    const selectedStaff = staffList.find(s => s.id === selectedStaffId);
                    setEditingAssignment({
                      ...editingAssignment,
                      staffId: selectedStaff ? selectedStaff.staffId : '',
                      staffName: selectedStaff ? selectedStaff.name : ''
                    });
                  }}
                >
                  <option value="">Choose staff member...</option>
                  {staffList.map((staff) => (
                    <option key={staff.id} value={staff.id}>
                      {staff.name} {staff.department ? `(${staff.department})` : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-input"
                  value={editingAssignment.date}
                  onChange={(e) => setEditingAssignment({ ...editingAssignment, date: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Status</label>
                <select
                  className="form-input"
                  value={editingAssignment.status}
                  onChange={(e) => setEditingAssignment({ ...editingAssignment, status: e.target.value as any })}
                >
                  <option value="scheduled">Scheduled</option>
                  <option value="completed">Completed</option>
                  <option value="absent">Absent</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Notes</label>
                <input
                  type="text"
                  className="form-input"
                  value={editingAssignment.notes || ''}
                  onChange={(e) => setEditingAssignment({ ...editingAssignment, notes: e.target.value })}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-ghost"
                onClick={() => {
                  setShowEditAssignmentModal(false);
                  setEditingAssignment(null);
                }}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={handleUpdateAssignment}
                disabled={saving}
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Assignment Confirmation Dialog */}
      {showAssignmentDeleteConfirm && (
        <div className="modal-overlay" style={{ zIndex: 1100 }} onClick={() => {
          setShowAssignmentDeleteConfirm(false);
          setAssignmentToDelete(null);
        }}>
          <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="confirm-icon">
              <AlertCircle size={28} />
            </div>
            <h3 className="confirm-title">Delete Assignment?</h3>
            <p className="confirm-message">
              Are you sure you want to delete this specific shift assignment? This action cannot be undone.
            </p>
            <div className="confirm-actions">
              <button
                className="btn btn-ghost"
                onClick={() => {
                  setShowAssignmentDeleteConfirm(false);
                  setAssignmentToDelete(null);
                }}
              >
                Cancel
              </button>
              <button
                className="btn btn-danger"
                onClick={handleDeleteAssignment}
              >
                <Trash2 size={18} />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Staff Attendance Modal */}
      {
        showAttendanceModal && selectedStaffForAttendance && (
          <div className="modal-overlay" onClick={() => {
            setShowAttendanceModal(false);
            setSelectedStaffForAttendance(null);
          }}>
            <div className="modal" style={{ maxWidth: '600px' }} onClick={(e) => e.stopPropagation()}>
              <div className="modal-header" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                <div>
                  <h2 className="modal-title" style={{ color: 'white' }}>Attendance Register</h2>
                  <p style={{ fontSize: '14px', opacity: 0.9 }}>{selectedStaffForAttendance.name} • {selectedStaffForAttendance.staffId}</p>
                </div>
                <button
                  className="modal-close"
                  style={{ color: 'white' }}
                  onClick={() => {
                    setShowAttendanceModal(false);
                    setSelectedStaffForAttendance(null);
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto', padding: '0' }}>
                <div style={{ padding: '20px 32px', borderBottom: '1px solid #f1f5f9', background: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {showOnlyCurrentWeek ? 'Assignments for This Week' : 'All Upcoming Assignments'}
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => setShowOnlyCurrentWeek(true)}
                      style={{
                        padding: '4px 12px',
                        fontSize: '11px',
                        fontWeight: 600,
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0',
                        background: showOnlyCurrentWeek ? '#3b82f6' : 'white',
                        color: showOnlyCurrentWeek ? 'white' : '#64748b',
                        cursor: 'pointer'
                      }}
                    >
                      This Week
                    </button>
                    <button
                      onClick={() => setShowOnlyCurrentWeek(false)}
                      style={{
                        padding: '4px 12px',
                        fontSize: '11px',
                        fontWeight: 600,
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0',
                        background: !showOnlyCurrentWeek ? '#3b82f6' : 'white',
                        color: !showOnlyCurrentWeek ? 'white' : '#64748b',
                        cursor: 'pointer'
                      }}
                    >
                      All Upcoming
                    </button>
                  </div>
                </div>

                {(() => {
                  const weekStartStr = formatDateLocal(weekDates[0]);
                  const weekEndStr = formatDateLocal(weekDates[6]);

                  const staffAssignments = assignments.filter(a => {
                    const isMatchingStaff = a.staffId === selectedStaffForAttendance?.staffId;
                    if (!isMatchingStaff) return false;

                    if (showOnlyCurrentWeek) {
                      return a.date >= weekStartStr && a.date <= weekEndStr;
                    } else {
                      return a.date >= weekStartStr;
                    }
                  }).sort((a, b) => a.date.localeCompare(b.date));

                  if (staffAssignments.length === 0) {
                    return (
                      <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
                        No shifts assigned for this week.
                      </div>
                    );
                  }

                  return staffAssignments.map((assign, idx) => {
                    const shift = shifts.find(s => s.id === assign.shiftId);
                    const assignDate = new Date(assign.date);
                    return (
                      <div
                        key={assign.id}
                        style={{
                          padding: '20px 32px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          borderBottom: idx === staffAssignments.length - 1 ? 'none' : '1px solid #f1f5f9',
                          background: 'white'
                        }}
                      >
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                          <div style={{
                            textAlign: 'center',
                            minWidth: '50px',
                            padding: '8px',
                            background: '#f8fafc',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0'
                          }}>
                            <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
                              {assignDate.toLocaleDateString('en-US', { weekday: 'short' })}
                            </div>
                            <div style={{ fontSize: '18px', fontWeight: 800, color: '#1e293b' }}>
                              {assignDate.getDate()}
                            </div>
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, color: '#1e293b' }}>{shift?.name || 'Shift'}</div>
                            <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                              <Clock size={12} />
                              {shift?.startTime} - {shift?.endTime}
                            </div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <button
                              className="btn btn-icon btn-ghost"
                              style={{ color: '#64748b', padding: '8px' }}
                              onClick={() => {
                                setEditingAssignment({ ...assign });
                                setShowEditAssignmentModal(true);
                              }}
                              title="Edit Assignment"
                            >
                              <Edit size={18} />
                            </button>
                            <button
                              className="btn btn-icon btn-ghost"
                              style={{ color: '#ef4444', padding: '8px' }}
                              onClick={() => {
                                setAssignmentToDelete(assign.id);
                                setShowAssignmentDeleteConfirm(true);
                              }}
                              title="Delete Assignment"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                          <div
                            onClick={() => toggleAssignmentStatus(assign)}
                            style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                            className="attendance-toggle"
                          >
                            <div className={`reg-status status-dot-${assign.status}`} style={{ width: '48px', height: '48px' }}>
                              {assign.status === 'scheduled' && <Clock size={24} />}
                              {assign.status === 'completed' && <CheckCircle size={24} />}
                              {assign.status === 'absent' && <X size={24} />}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>

              <div className="modal-footer" style={{ borderTop: '2px solid #f1f5f9', justifyContent: 'center' }}>
                <button
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '12px' }}
                  onClick={() => {
                    setShowAttendanceModal(false);
                    setSelectedStaffForAttendance(null);
                  }}
                >
                  Close Register
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  );
}