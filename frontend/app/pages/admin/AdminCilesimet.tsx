import AdminSidebar from '../../components/AdminSidebar'

export default function AdminCilesimet() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main">
        <div className="adm-title">Cilësimet</div>
        <div className="adm-sub">Konfigurimet e sistemit dhe dyqanit tuaj</div>

        <div className="adm-card">
          <div className="adm-card-title">📋 Informacioni i dyqanit</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
            <div className="form-group"><label className="form-label">Emri i dyqanit</label><input className="form-input" defaultValue="Lule Prishtina" /></div>
            <div className="form-group"><label className="form-label">Email kontakti</label><input className="form-input" type="email" defaultValue="info@luleprishtina.com" /></div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
            <div className="form-group"><label className="form-label">Telefoni</label><input className="form-input" defaultValue="+383 44 123 456" /></div>
            <div className="form-group"><label className="form-label">Qyteti</label><select className="form-select"><option>Prishtinë</option><option>Tiranë</option><option>Prizren</option></select></div>
          </div>
          <div className="form-group"><label className="form-label">Adresa e plotë</label><input className="form-input" defaultValue="Rr. Nëna Terezë 12, Prishtinë" /></div>
          <button className="btn btn-primary">Ruaj ndryshimet</button>
        </div>

        <div className="adm-card">
          <div className="adm-card-title">💶 Çmimet dhe tarifat</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
            <div className="form-group"><label className="form-label">Tarifa dorëzimit (€)</label><input className="form-input" type="number" defaultValue="2.50" step="0.50" /></div>
            <div className="form-group"><label className="form-label">Porosi min. falas dorëzim (€)</label><input className="form-input" type="number" defaultValue="40" /></div>
          </div>
          <button className="btn btn-primary">Ruaj tarifat</button>
        </div>

        <div className="adm-card">
          <div className="adm-card-title">⚙️ Konfigurimet e sistemit</div>
          {[
            { label:'🤖 AI Chatbot', desc:'Aktivizo asistentin AI për klientët', defaultOn:true },
            { label:'🎨 Ndërtues 3D', desc:'Lejo klientët të personalizojnë buketa', defaultOn:true },
            { label:'📧 Email njoftime', desc:'Dërgo email për porosi të reja', defaultOn:true },
            { label:'🔔 Njoftime SignalR live', desc:'Njoftime në kohë reale', defaultOn:true },
          ].map(item => (
            <div key={item.label} className="toggle-row">
              <div className="toggle-info">
                <div className="toggle-nm">{item.label}</div>
                <div className="toggle-ds">{item.desc}</div>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked={item.defaultOn} />
                <div className="toggle-track"></div>
                <div className="toggle-thumb"></div>
              </label>
            </div>
          ))}
        </div>

        <div className="adm-card">
          <div className="adm-card-title">🔑 Fjalëkalimi</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
            <div className="form-group"><label className="form-label">Fjalëkalimi aktual</label><input className="form-input" type="password" placeholder="••••••••" /></div>
            <div className="form-group"><label className="form-label">Fjalëkalimi i ri</label><input className="form-input" type="password" placeholder="••••••••" /></div>
          </div>
          <button className="btn btn-dark">Ndrysho fjalëkalimin</button>
        </div>
      </main>
    </div>
  )
}
