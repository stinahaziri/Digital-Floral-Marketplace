import AdminSidebar from '../../components/AdminSidebar'

export default function AdminOraret() {
  const days = ['E Hën','E Mar','E Mër','E Enj','E Pre','E Sht','E Die']
  const slots = [
    [{ t:'09:00–12:00', c:'8/10', full:true }, { t:'13:00–17:00', c:'3/10', full:false }],
    [{ t:'09:00–12:00', c:'2/10', full:false }, { t:'13:00–17:00', c:'10/10', full:true }],
    [{ t:'09:00–12:00', c:'0/10', full:false }, { t:'13:00–17:00', c:'1/10', full:false }],
    [{ t:'09:00–12:00', c:'5/10', full:false }, { t:'13:00–17:00', c:'4/10', full:false }],
    [{ t:'09:00–12:00', c:'9/10', full:true },  { t:'13:00–17:00', c:'10/10', full:true }],
    [{ t:'09:00–14:00', c:'6/15', full:false }],
    [],
  ]

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main">
        <div className="adm-title">Oraret e dorëzimit</div>
        <div className="adm-sub">Menaxho disponueshmërinë dhe kapacitetin e porosive</div>

        <div className="adm-card">
          <div className="adm-card-title">Pamja javore</div>
          <div className="week-grid">
            {days.map((day, i) => (
              <div key={day} className="day-col">
                <div className="day-name">{day}</div>
                {slots[i].map((s, j) => (
                  <div key={j} className={`day-slot${s.full ? ' full' : ''}`}>
                    {s.t}<br /><small>{s.c}</small>
                  </div>
                ))}
                {slots[i].length === 0 && <div className="day-slot empty">+ Shto slot</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="adm-card">
          <div className="adm-card-title">Shto slot të ri</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
            <div className="form-group">
              <label className="form-label">Dita e javës</label>
              <select className="form-select"><option>E Hënë</option><option>E Martë</option><option>E Mërkurë</option><option>E Enjte</option><option>E Premte</option><option>E Shtunë</option><option>E Diel</option></select>
            </div>
            <div className="form-group"><label className="form-label">Kapaciteti (max porosi)</label><input className="form-input" type="number" placeholder="10" /></div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
            <div className="form-group"><label className="form-label">Ora fillimit</label><input className="form-input" type="time" defaultValue="09:00" /></div>
            <div className="form-group"><label className="form-label">Ora mbarimit</label><input className="form-input" type="time" defaultValue="12:00" /></div>
          </div>
          <button className="btn btn-primary">Shto slot-in</button>
        </div>
      </main>
    </div>
  )
}
