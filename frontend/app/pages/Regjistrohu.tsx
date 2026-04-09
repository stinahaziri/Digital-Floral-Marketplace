import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Regjistrohu() {
  return (
    <>
      <Navbar />
      <div className="page-wrap">
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
                <div className="role-card active">
                  <span className="role-icon">🛒</span>
                  <div className="role-nm">Klient</div>
                  <div className="role-ds">Bli dhe personalizo lule</div>
                </div>
                <div className="role-card">
                  <span className="role-icon">🌸</span>
                  <div className="role-nm">Florist</div>
                  <div className="role-ds">Shit lule, menaxho dyqanin</div>
                </div>
              </div>

              <div className="two-cols">
                <div className="form-group">
                  <label className="form-label">Emri</label>
                  <input className="form-input" placeholder="Emri" />
                </div>
                <div className="form-group">
                  <label className="form-label">Mbiemri</label>
                  <input className="form-input" placeholder="Mbiemri" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="emri@shembull.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Fjalëkalimi</label>
                <input className="form-input" type="password" placeholder="Minimum 8 karaktere" />
              </div>
              <div className="form-group">
                <label className="form-label">Konfirmo fjalëkalimin</label>
                <input className="form-input" type="password" placeholder="Persërite fjalëkalimin" />
              </div>

              <button className="btn btn-primary" style={{ width: '100%', padding: '13px', fontSize: '15px', marginTop: '4px' }}>
                Krijo llogarinë
              </button>

              <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--muted)', marginTop: '16px' }}>
                Ke llogari? <Link to="/hyr" style={{ color: 'var(--rose)', textDecoration: 'none', fontWeight: 500 }}>Hyr</Link>
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
