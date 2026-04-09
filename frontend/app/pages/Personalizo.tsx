import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Personalizo() {
  return (
    <>
      <Navbar />
      <div className="page-wrap">
        <div className="cust-layout">

          {/* Left Panel */}
          <div className="cust-left">
            <h2 className="cust-title">Ndërtues 3D</h2>
            <p className="cust-sub">Personalizo buketën tënde hap pas hapi</p>

            <div className="cs">
              <div className="cs-title">Zgjedh lulen</div>
              <div className="flowers-grid">
                {[
                  { id:'rose',   emoji:'🌹', name:'Trëndafil',   price:'€3.50' },
                  { id:'tulip',  emoji:'🌷', name:'Tulipan',     price:'€2.80' },
                  { id:'lily',   emoji:'🌺', name:'Zambak',      price:'€4.20' },
                  { id:'sun',    emoji:'🌻', name:'Lule Dielli', price:'€2.20' },
                  { id:'orchid', emoji:'🌸', name:'Orkide',      price:'€6.50' },
                  { id:'daisy',  emoji:'🌼', name:'Benedetë',    price:'€1.80' },
                ].map(f => (
                  <div key={f.id} className="fo">
                    <span className="fo-emoji">{f.emoji}</span>
                    <div className="fo-name">{f.name}</div>
                    <div className="fo-price">{f.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cs">
              <div className="cs-title">Ngjyra e lules</div>
              <div className="cdots">
                {['#e63946','#ff69b4','#ffffff','#ffd700','#9b59b6','#ff8c00','#e75480','#b19cd9'].map(c => (
                  <div key={c} className="cdot" style={{ background: c, border: c === '#ffffff' ? '2px solid #ccc' : undefined }} />
                ))}
              </div>
            </div>

            <div className="cs">
              <div className="cs-title">Mbështjellja</div>
              <div className="wrap-grid">
                <div className="wo sel"><span className="wo-e">📜</span>Letër</div>
                <div className="wo"><span className="wo-e">🎀</span>Mëndafsh</div>
                <div className="wo"><span className="wo-e">🪵</span>Juta</div>
              </div>
            </div>

            <div className="cs">
              <div className="cs-title">Ngjyra mbështjelljeje</div>
              <div className="cdots">
                {['#fff8dc','#ffe4e1','#e6f3ff','#f0fff0','#2d2d2d','#8b6914'].map(c => (
                  <div key={c} className="cdot" style={{ background: c, border: '1px solid #ddd' }} />
                ))}
              </div>
            </div>

            <div className="cs">
              <div className="cs-title">Dekorimi shtesë</div>
              <div className="dec-list">
                <label className="dec-item"><input type="checkbox" className="dec-cb" defaultChecked /> 🎀 Shirit (€1.50)</label>
                <label className="dec-item"><input type="checkbox" className="dec-cb" /> 🤍 Baby Breath (€2.00)</label>
                <label className="dec-item"><input type="checkbox" className="dec-cb" defaultChecked /> 🌿 Gjethe (€1.00)</label>
                <label className="dec-item"><input type="checkbox" className="dec-cb" /> 💎 Perla (€3.00)</label>
              </div>
            </div>

            <div className="cs">
              <div className="cs-title">Sasia luleve</div>
              <div className="qty-row">
                <button className="qty-btn">−</button>
                <span className="qty-val">7</span>
                <button className="qty-btn">+</button>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>lule</span>
              </div>
            </div>
          </div>

          {/* Center: SVG Preview */}
          <div className="canvas-area">
            <div className="bouquet-wrap">
              <svg
                id="bouquet-svg"
                width="300"
                height="380"
                viewBox="0 0 300 380"
                xmlns="http://www.w3.org/2000/svg"
                style={{ animation: 'floatB 4s ease-in-out infinite', filter: 'drop-shadow(0 24px 40px rgba(26,20,16,.2))' }}
              >
                <polygon points="150,300 55,380 245,380" fill="#fff8dc" stroke="#d4c8b0" strokeWidth="1.5" />
                <ellipse cx="150" cy="302" rx="28" ry="8" fill="#e63946" opacity=".9" />
                <path d="M150,302 Q130,286 116,294 Q132,301 150,302Z" fill="#e63946" />
                <path d="M150,302 Q170,286 184,294 Q168,301 150,302Z" fill="#c8614a" />
                <line x1="150" y1="298" x2="120" y2="240" stroke="#3a7d44" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="150" y1="298" x2="150" y2="220" stroke="#3a7d44" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="150" y1="298" x2="180" y2="240" stroke="#3a7d44" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="150" y1="298" x2="110" y2="260" stroke="#3a7d44" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="150" y1="298" x2="190" y2="260" stroke="#3a7d44" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="150" y1="298" x2="130" y2="210" stroke="#3a7d44" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="150" y1="298" x2="170" y2="210" stroke="#3a7d44" strokeWidth="2.2" strokeLinecap="round" />
                <ellipse cx="112" cy="272" rx="17" ry="7" fill="#3a7d44" transform="rotate(-30,112,272)" opacity=".85" />
                <ellipse cx="188" cy="277" rx="15" ry="6" fill="#3a7d44" transform="rotate(28,188,277)" opacity=".85" />
                <text x="120" y="244" textAnchor="middle" fontSize="42">🌹</text>
                <text x="150" y="224" textAnchor="middle" fontSize="50">🌹</text>
                <text x="180" y="244" textAnchor="middle" fontSize="42">🌹</text>
                <text x="110" y="264" textAnchor="middle" fontSize="38">🌹</text>
                <text x="190" y="264" textAnchor="middle" fontSize="38">🌹</text>
                <text x="130" y="214" textAnchor="middle" fontSize="36">🌹</text>
                <text x="170" y="214" textAnchor="middle" fontSize="36">🌹</text>
              </svg>
            </div>
            <div className="canvas-hint">Klikoni opsionet në të majtë për të ndryshuar buketën ✦</div>
          </div>

          {/* Right: Summary */}
          <div className="cust-right">
            <div className="sum-title">Përmbledhja</div>
            <div className="sum-items">
              <div className="sum-row"><span>🌹 trëndafil × 7</span><span>€24.50</span></div>
              <div className="sum-row"><span>📜 Mbështjellja</span><span>€1.50</span></div>
              <div className="sum-row"><span>🎀 Shirit</span><span>€1.50</span></div>
              <div className="sum-row"><span>🌿 Gjethe</span><span>€1.00</span></div>
            </div>
            <div className="sum-total">
              <span className="sum-total-lbl">Total</span>
              <span className="sum-total-val">€28.50</span>
            </div>
            <input className="save-name-input" placeholder="Emri i buketës (p.sh. Surpriza e Valentinës)" />
            <button className="btn btn-primary" style={{ width: '100%', padding: '12px', marginBottom: '9px' }}>
              💾 Ruaj buketën
            </button>
            <button className="btn btn-dark" style={{ width: '100%', padding: '12px' }}>
              🛒 Porosit tani
            </button>
            <div className="saved-msg" id="sv-msg"></div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
