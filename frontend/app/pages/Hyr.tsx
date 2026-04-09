import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Hyr() {
  return (
    <>
      <Navbar />
      <div className="page-wrap">
        <div className="auth-wrap">

          <div className="auth-visual">
            <div className="av-flower">🌸</div>
            <h2 className="av-title">Mirë se vini<br />në <em>Lule Shqip</em></h2>
            <p className="av-sub">Platforma juaj për lule të freskëta.<br />Çdo buketë, një histori e re.</p>
          </div>

          <div className="auth-form-wrap">
            <div className="auth-box">
              <h2 className="auth-title">Mirë se u ktheve</h2>
              <p className="auth-sub">Hyr në llogarinë tënde</p>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="emri@shembull.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Fjalëkalimi</label>
                <input className="form-input" type="password" placeholder="••••••••" />
              </div>
              <a href="#" className="forgot-link">Harrove fjalëkalimin?</a>

              <button className="btn btn-primary" style={{ width: '100%', padding: '13px', fontSize: '15px' }}>
                Hyr në llogari
              </button>

              <div className="divider">ose vazhdo me</div>
              <button className="btn btn-ghost" style={{ width: '100%', padding: '12px', marginBottom: '10px' }}>
                🔵 &nbsp;Vazhdo me Google
              </button>

              <p className="register-link">
                Nuk ke llogari? <Link to="/regjistrohu">Regjistrohu falas</Link>
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
