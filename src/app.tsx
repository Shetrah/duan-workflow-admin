import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Staff from "./pages/staff";
import Assignments from "./pages/assignments";
import Departments from "./pages/departments";
import Shifts from "./pages/shifts";
import { LanguageProvider } from "./contexts/LanguageContext";
import RequireAdmin from "./components/RequireAdmin";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Login page */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard protected */}
          <Route
            path="/dashboard"
            element={
              <RequireAdmin>
                <Dashboard />
              </RequireAdmin>
            }
          />

          {/* Staff Management protected */}
          <Route
            path="/staff"
            element={
              <RequireAdmin>
                <Staff />
              </RequireAdmin>
            }
          />

          <Route
            path="/assignments"
            element={
              <RequireAdmin>
                <Assignments />
              </RequireAdmin>
            }
          />

          <Route
            path="/shifts"
            element={
              <RequireAdmin>
                <Shifts />
              </RequireAdmin>
            }
          />

          <Route
            path="/departments"
            element={
              <RequireAdmin>
                <Departments />
              </RequireAdmin>
            }
          />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
