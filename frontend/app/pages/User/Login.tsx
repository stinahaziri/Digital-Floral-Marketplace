import { useState } from "react";
import "../css/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = () => {
    if (!email || !password) {
      alert("⚠️ Plotëso të gjitha fushat!");
      return;
    }

    alert("✓ U kyçët me sukses!");

    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="page-wrap">
      <div className="auth-wrap">

        {/* LEFT SIDE */}
        <div className="auth-visual">
          <div className="av-flower">🌸</div>

          <h2 className="av-title">
            Mirë se vini <br /> në <em>Lule Shqip</em>
          </h2>

          <p className="av-sub">
            Platforma juaj për lule të freskëta.
            <br />
            Çdo buketë, një histori e re.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="auth-form-wrap">
          <div className="auth-box">

            <h2 className="auth-title">Mirë se u ktheve</h2>
            <p className="auth-sub">Hyr në llogarinë tënde</p>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                placeholder="emri@shembull.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Fjalëkalimi</label>
              <input
                className="form-input"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <a href="#" className="forgot-link">
              Harrove fjalëkalimin?
            </a>

            <button
              className="btn btn-primary full-btn"
              onClick={doLogin}
            >
              Hyr në llogari
            </button>

            <div className="divider">ose vazhdo me</div>

            <button
              className="btn btn-ghost full-btn"
              onClick={() => alert("Google login — do të integrohet!")}
            >
              🔵 Vazhdo me Google
            </button>

            <div className="register-link">
              Nuk ke llogari? <a href="/register">Regjistrohu falas</a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}