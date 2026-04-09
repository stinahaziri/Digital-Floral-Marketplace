import { useRef } from 'react'
import AdminSidebar from '../../components/AdminSidebar'

const exportItems = [
  { icon:'📦', name:'Porositë',  desc:'Të gjitha porositë me detajet dhe shumat' },
  { icon:'🌹', name:'Produktet', desc:'Katalogu me çmime, kategori dhe stok' },
  { icon:'👥', name:'Klientët',  desc:'Lista e klientëve me historikun e porosive' },
  { icon:'⭐', name:'Reviews',   desc:'Vlerësimet dhe komentet e klientëve' },
  { icon:'📦', name:'Inventari', desc:'Stoku aktual dhe historiku i lëvizjeve' },
  { icon:'💶', name:'Pagesat',   desc:'Të gjitha transaksionet Stripe' },
]

export default function AdminEksporto() {
  const importRef = useRef<HTMLInputElement>(null)

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main">
        <div className="adm-title">Eksporto & Importo</div>
        <div className="adm-sub">Shkarko të dhënat e dyqanit tuaj në formate të ndryshme</div>

        <div className="adm-card">
          <div className="adm-card-title">📤 Eksporto të dhënat</div>
          <div style={{ display:'flex', gap:'12px', marginBottom:'20px', flexWrap:'wrap', alignItems:'center' }}>
            <label style={{ fontSize:'12px', color:'var(--muted)' }}>Periudha:</label>
            <input type="date" className="form-input" style={{ width:'160px', padding:'8px 12px' }} defaultValue="2026-03-01" />
            <span style={{ color:'var(--muted)', fontSize:'12px' }}>deri</span>
            <input type="date" className="form-input" style={{ width:'160px', padding:'8px 12px' }} defaultValue="2026-03-31" />
          </div>
          <div className="export-grid">
            {exportItems.map(item => (
              <div key={item.name} className="export-card">
                <span className="export-icon">{item.icon}</span>
                <div className="export-name">{item.name}</div>
                <div className="export-desc">{item.desc}</div>
                <div className="export-btns">
                  <button className="btn-excel">📊 Excel</button>
                  <button className="btn-csv">📄 CSV</button>
                  <button className="btn-json">{'{ }'} JSON</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="adm-card">
          <div className="adm-card-title">📥 Importo të dhënat</div>
          <p style={{ fontSize:'13px', color:'var(--muted)', marginBottom:'20px' }}>
            Ngarko produkte ose klientë nga skedarë Excel ose CSV.
          </p>
          <div
            className="import-area"
            onClick={() => importRef.current?.click()}
          >
            <input ref={importRef} type="file" accept=".xlsx,.csv,.json" style={{ display:'none' }} />
            <div style={{ fontSize:'42px', marginBottom:'12px' }}>📥</div>
            <div style={{ fontSize:'15px', fontWeight:500, color:'var(--dark)', marginBottom:'6px' }}>Kliko ose tërhiq skedarin këtu</div>
            <div style={{ fontSize:'12px', color:'var(--muted)' }}>Excel (.xlsx), CSV (.csv) ose JSON (.json)</div>
          </div>
        </div>
      </main>
    </div>
  )
}
