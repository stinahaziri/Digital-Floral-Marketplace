import React, { useEffect, useState } from 'react';
import "../css/Signin.css";

type Role = 'customer' | 'florist';
type FormDataState = {
  fn: string;
  ln: string;
  email: string;
  pw: string;
  pw2: string;
  shop: string;
  city: string;
};
type ToastState = { show: boolean; message: string };

const Regjistrohu = () => {
  const [role, setRole] = useState<Role>('customer');
  const [formData, setFormData] = useState<FormDataState>({
    fn: '',
    ln: '',
    email: '',
    pw: '',
    pw2: '',
    shop: '',
    city: 'Prishtinë'
  });
  const [toast, setToast] = useState<ToastState>({ show: false, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    let timer: number | undefined;
    if (toast.show) {
      timer = window.setTimeout(() => setToast({ show: false, message: '' }), 3000);
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [toast.show]);

  const showToast = (msg: string) => {
    setToast({ show: true, message: msg });
  };

  const doRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fn, email, pw, pw2 } = formData;

    if (!fn || !email || !pw) {
      showToast('⚠️ Plotëso të gjitha fushat!');
      return;
    }
    if (pw !== pw2) {
      showToast('⚠️ Fjalëkalimet nuk përputhen!');
      return;
    }
    if (pw.length < 8) {
      showToast('⚠️ Fjalëkalimi duhet të jetë min. 8 karaktere!');
      return;
    }

    showToast(`✓ Llogaria u krijua si ${role === 'florist' ? 'Florist' : 'Klient'}! Mirë se vini!`);
    
    // Këtu shtohet logika e backend-it
    setTimeout(() => {
      // window.location.href = 'index.html'; 
      console.log("Navigimi në faqen kryesore...");
    }, 1600);
  };

  return (
    <div className="page-wrap">
      <style>{`
        .auth-wrap { display:grid; grid-template-columns:1fr 1fr; min-height:calc(100vh - 64px); font-family: sans-serif; }
        .auth-visual { background:linear-gradient(145deg, #1a1a1a, #2d1f14); display:flex; flex-direction:column; align-items:center; justify-content:center; padding:80px; text-align:center; position:relative; overflow:hidden; color: white; }
        .auth-visual::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at 50% 50%,rgba(200,97,74,.2),transparent 60%); }
        .av-flower { font-size:130px; opacity:.07; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); }
        .av-title { font-family:'Cormorant Garamond', serif; font-size:44px; font-weight:300; color:#f9f4ef; line-height:1.1; margin-bottom:16px; position:relative; z-index:1; }
        .av-title em { color:#c8614a; font-style:italic; }
        .av-sub { font-size:14px; color:rgba(249,244,239,.45); line-height:1.65; position:relative; z-index:1; }
        .auth-form-wrap { display:flex; align-items:center; justify-content:center; padding:48px 64px; background:#f9f4ef; overflow-y:auto; }
        .auth-box { width:100%; max-width:440px; }
        .auth-title { font-family:'Cormorant Garamond', serif; font-size:36px; font-weight:300; color:#1a1a1a; margin-bottom:6px; }
        .auth-sub { font-size:13px; color:#666; margin-bottom:28px; }
        .role-cards { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px; }
        .role-card { padding:18px 14px; border:1.5px solid #ddd; border-radius:14px; text-align:center; cursor:pointer; transition:all .2s; background: white; }
        .role-card.active { border-color:#c8614a; background:rgba(200,97,74,.06); }
        .role-icon { font-size:30px; margin-bottom:7px; display:block; }
        .role-nm { font-size:14px; font-weight:500; color:#1a1a1a; }
        .role-ds { font-size:11px; color:#666; margin-top:2px; }
        .two-cols { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .form-group { margin-bottom: 16px; }
        .form-label { display: block; font-size: 13px; margin-bottom: 6px; color: #1a1a1a; font-weight: 500; }
        .form-input, .form-select { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box; }
        .btn-primary { background: #c8614a; color: white; border: none; border-radius: 8px; cursor: pointer; transition: opacity 0.2s; font-weight: 600; }
        .btn-primary:hover { opacity: 0.9; }
        .toast { position: fixed; bottom: 20px; right: 20px; background: #333; color: white; padding: 12px 24px; border-radius: 8px; display: ${toast.show ? 'block' : 'none'}; z-index: 1000; }
      `}</style>

      <div className="auth-wrap">
        <div className="auth-visual">
          <div className="av-flower">🌹</div>
          <h2 className="av-title">Bashkohu me<br /><em>Lule Shqip</em></h2>
          <p className="av-sub">Klientë dhe floristë nga<br />e gjithë Kosova dhe Shqipëria.</p>
        </div>

        <div className="auth-form-wrap">
          <div className="auth-box">
            <h2 className="auth-title">Krijo llogari</h2>
            <p className="auth-sub">Zgjidh llojin e llogarisë suaj</p>

            <div className="role-cards">
              <div 
                className={`role-card ${role === 'customer' ? 'active' : ''}`} 
                onClick={() => setRole('customer')}
              >
                <span className="role-icon">🛒</span>
                <div className="role-nm">Klient</div>
                <div className="role-ds">Bli dhe personalizo lule</div>
              </div>
              <div 
                className={`role-card ${role === 'florist' ? 'active' : ''}`} 
                onClick={() => setRole('florist')}
              >
                <span className="role-icon">🌸</span>
                <div className="role-nm">Florist</div>
                <div className="role-ds">Shit lule, menaxho dyqanin</div>
              </div>
            </div>

            <form onSubmit={doRegister}>
              <div className="two-cols">
                <div className="form-group">
                  <label className="form-label">Emri</label>
                  <input 
                    className="form-input" 
                    placeholder="Emri" 
                    id="fn" 
                    value={formData.fn} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Mbiemri</label>
                  <input 
                    className="form-input" 
                    placeholder="Mbiemri" 
                    id="ln" 
                    value={formData.ln} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  className="form-input" 
                  type="email" 
                  placeholder="emri@shembull.com" 
                  id="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Fjalëkalimi</label>
                <input 
                  className="form-input" 
                  type="password" 
                  placeholder="Minimum 8 karaktere" 
                  id="pw" 
                  value={formData.pw} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Konfirmo fjalëkalimin</label>
                <input 
                  className="form-input" 
                  type="password" 
                  placeholder="Persërite fjalëkalimin" 
                  id="pw2" 
                  value={formData.pw2} 
                  onChange={handleInputChange} 
                />
              </div>

              {role === 'florist' && (
                <>
                  <div className="form-group" id="shop-grp">
                    <label className="form-label">Emri i dyqanit</label>
                    <input 
                      className="form-input" 
                      placeholder="p.sh. Lule Prishtina" 
                      id="shop" 
                      value={formData.shop} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  <div className="form-group" id="city-grp">
                    <label className="form-label">Qyteti</label>
                    <select 
                      className="form-select" 
                      id="city" 
                      value={formData.city} 
                      onChange={handleInputChange}
                    >
                      <option>Prishtinë</option>
                      <option>Tiranë</option>
                      <option>Prizren</option>
                      <option>Gjakovë</option>
                      <option>Shkodër</option>
                      <option>Pejë</option>
                    </select>
                  </div>
                </>
              )}

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '13px', fontSize: '15px', marginTop: '4px' }}
              >
                Krijo llogarinë
              </button>
            </form>

            <p style={{ textAlign: 'center', fontSize: '13px', color: '#666', marginTop: '16px' }}>
              Ke llogari? <a href="/hyr" style={{ color: '#c8614a', textDecoration: 'none', fontWeight: '500' }}>Hyr</a>
            </p>
          </div>
        </div>
      </div>

      <div className="toast">{toast.message}</div>
    </div>
  );
};

export default Regjistrohu;