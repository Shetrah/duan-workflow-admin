import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // 1️⃣ Authenticate user with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 2️⃣ Fetch user role from Firestore
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await signOut(auth);
        throw new Error("Access denied. User record not found.");
      }

      const userData = userSnap.data();
      const userRole = userData.role?.toLowerCase();

      if (userRole !== "admin") {
        await signOut(auth);
        throw new Error("Access denied. Admins only.");
      }

      // 3️⃣ Store admin token
      localStorage.setItem("adminToken", user.uid);
      localStorage.setItem("adminRole", "admin");

      // 4️⃣ Redirect to dashboard
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Enter your email first");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setError("Password reset email sent");
    } catch (err: any) {
      setError(err.message || "Failed to send reset email");
    }
  };

  return (
    <div className="login-root">
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        html, body {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .login-root {
          position: relative;
          width: 100vw;
          height: 100vh;
          font-family: 'Segoe UI', system-ui, sans-serif;
          color: #fff;
        }

        .bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -3;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom right,
            rgba(2,6,23,0.65),
            rgba(2,6,23,0.9)
          );
          z-index: -2;
        }

        .login-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .login-form {
          width: 380px;
          padding: 50px 44px;
          border-radius: 24px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(26px);
          box-shadow: 0 40px 90px rgba(0,0,0,0.65);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.9s ease;
        }

        .login-form.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .logo {
          display: flex;
          justify-content: center;
          margin-bottom: 22px;
        }

        .logo img {
          height: 70px;
          padding: 12px;
          border-radius: 16px;
          background: rgba(255,255,255,0.18);
          box-shadow: 0 12px 32px rgba(0,0,0,0.5);
        }

        h2 {
          text-align: center;
          font-size: 30px;
          margin-bottom: 32px;
        }

        input {
          width: 100%;
          padding: 14px;
          margin-bottom: 18px;
          border-radius: 14px;
          border: none;
          outline: none;
          background: rgba(255,255,255,0.22);
          color: #fff;
          font-size: 15px;
        }

        input::placeholder {
          color: rgba(255,255,255,0.75);
        }

        .login-btn {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          border: none;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          margin-bottom: 14px;
        }

        .forgot-btn {
          background: none;
          border: none;
          width: 100%;
          color: #e5e7eb;
          font-size: 14px;
          text-decoration: underline;
          cursor: pointer;
        }

        .error-message {
          text-align: center;
          margin-bottom: 16px;
          font-size: 14px;
          color: #fca5a5;
        }

        .footer {
          position: absolute;
          bottom: 20px;
          width: 100%;
          text-align: center;
          font-size: 14px;
          color: rgba(255,255,255,0.65);
        }
      `}</style>

      {/* Background Video */}
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/videos/video-1.mp4" type="video/mp4" />
      </video>

      <div className="overlay" />

      <div className="login-wrapper">
        <form
          className={`login-form ${fadeIn ? "fade-in" : ""}`}
          onSubmit={handleLogin}
        >
          <div className="logo">
            <img src="/assets/images/logo-1.png" alt="Duan Labels Logo" />
          </div>

          <h2>Admin Login</h2>

          {error && <div className="error-message">{error}</div>}

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Secure Login
          </button>

          <button
            type="button"
            className="forgot-btn"
            onClick={handleForgotPassword}
          >
            Forgot password?
          </button>
        </form>
      </div>

      <div className="footer">
        © {new Date().getFullYear()} Duan Labels Ltd · Built by{" "}
        <strong>NexxaCraft</strong>
      </div>
    </div>
  );
};

export default Login;
