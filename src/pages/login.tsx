import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { lang, setLang } = useLanguage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await signOut(auth);
        throw new Error(t.userNotFound);
      }

      const userData = userSnap.data();
      const userRole = userData.role?.toLowerCase();

      if (userRole !== "admin") {
        await signOut(auth);
        throw new Error(t.accessDenied);
      }

      localStorage.setItem("adminToken", user.uid);
      localStorage.setItem("adminRole", "admin");
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || t.errorDefault);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError(t.emailRequired);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setError(t.resetSent);
    } catch (err: any) {
      setError(err.message || t.resetFailed);
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

        .lang-switcher {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-bottom: 24px;
        }

        .lang-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.7);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lang-btn.active {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          color: #fff;
          font-weight: bold;
        }

        .lang-btn:hover:not(.active) {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
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
          <div className="lang-switcher">
            <button
              type="button"
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
            >
              English
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === "zh" ? "active" : ""}`}
              onClick={() => setLang("zh")}
            >
              中文
            </button>
          </div>

          <div className="logo">
            <img src="/assets/images/logo-1.png" alt="Duan Labels Logo" />
          </div>

          <h2>{t.title}</h2>

          {error && <div className="error-message">{error}</div>}

          <input
            type="email"
            placeholder={t.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder={t.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            {t.login}
          </button>

          <button
            type="button"
            className="forgot-btn"
            onClick={handleForgotPassword}
          >
            {t.forgot}
          </button>
        </form>
      </div>

      <div className="footer">
        © {new Date().getFullYear()} {t.footerPrefix}{" "}
        <strong>NexxaCraft</strong>
      </div>
    </div>
  );
};

export default Login;
