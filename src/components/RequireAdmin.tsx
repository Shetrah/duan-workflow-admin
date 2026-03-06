import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { getAdminAccess } from "../auth/adminAccess";

type AccessState = "loading" | "allowed" | "denied";

interface RequireAdminProps {
  children: React.ReactNode;
}

const RequireAdmin: React.FC<RequireAdminProps> = ({ children }) => {
  const [accessState, setAccessState] = useState<AccessState>("loading");

  useEffect(() => {
    let isMounted = true;

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        const access = await getAdminAccess(user);

        if (!isMounted) {
          return;
        }

        if (access.allowed && user) {
          localStorage.setItem("adminToken", user.uid);
          localStorage.setItem("adminRole", "admin");
          setAccessState("allowed");
          return;
        }

        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminRole");
        setAccessState("denied");
      } catch (error) {
        console.error("admin access check failed:", error);
        if (isMounted) {
          setAccessState("denied");
        }
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  if (accessState === "loading") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#fff",
          fontFamily: "Segoe UI, system-ui, sans-serif",
        }}
      >
        Checking admin access...
      </div>
    );
  }

  if (accessState === "denied") {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default RequireAdmin;
