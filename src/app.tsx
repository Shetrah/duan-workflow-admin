import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Staff from "./pages/staff";
import Assignments from "./pages/assignments";
import Departments from "./pages/departments";
import Shifts from "./pages/shifts";
import { LanguageProvider } from "./contexts/LanguageContext";

// Simple auth check
const isAuthenticated = () => !!localStorage.getItem("adminToken");

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Login page */}
          <Route path="/" element={<Login />} />

          {/* Dashboard protected */}
          <Route
            path="/dashboard"
            element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />}
          />

          {/* Staff Management protected */}
          <Route
            path="/staff"
            element={isAuthenticated() ? <Staff /> : <Navigate to="/" />}
          />

          <Route
            path="/assignments"
            element={isAuthenticated() ? <Assignments /> : <Navigate to="/" />}
          />

          <Route path="/shifts" element={<Shifts />} />

          <Route path="/departments" element={<Departments />} />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
