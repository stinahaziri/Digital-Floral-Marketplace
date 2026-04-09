import AdminSidebar from '../../components/AdminSidebar'

const orders = [
  { id:'#4721', client:'Arjeta Morina',   prod:'Buketë Trëndafilash', amt:'€28.50',  st:'Pending',   sc:'status-pending' },
  { id:'#4720', client:'Blerim Krasniqi', prod:'Orkide Elegante',     amt:'€45.00',  st:'Confirmed', sc:'status-confirmed' },
  { id:'#4719', client:'Drita Hoxha',     prod:'Buketë Dasme',        amt:'€120.00', st:'Preparing', sc:'status-preparing' },
  { id:'#4718', client:'Fjolla Selimi',   prod:'Lule Dielli',         amt:'€18.00',  st:'Ready',     sc:'status-ready' },
]

export default function AdminPasqyra() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main">
        <div className="adm-title">Mirëmëngjes, Florist! 👋</div>
        <div className="adm-sub">{new Date().toLocaleDateString('sq-AL',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</div>

        <div className="stats-row">
          <div className="sc"><div className="sc-icon ic-r">📦</div><span className="sc-val">24</span><div className="sc-lbl">Porosi sot</div><div className="sc-ch">↑ 18%</div></div>
          <div className="sc"><div className="sc-icon ic-g">💶</div><span className="sc-val">€847</span><div className="sc-lbl">Të ardhura sot</div><div className="sc-ch">↑ 12%</div></div>
          <div className="sc"><div className="sc-icon ic-y">🌹</div><span className="sc-val">38</span><div className="sc-lbl">Produkte aktive</div><div className="sc-ch">3 me stok të ulët</div></div>
          <div className="sc"><div className="sc-icon ic-b">★</div><span className="sc-val">4.9</span><div className="sc-lbl">Vlerësimi</div><div className="sc-ch">312 reviews</div></div>
        </div>

        <div className="dash-grid">
          <div className="adm-card">
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'16px' }}>
              <div className="adm-card-title" style={{ margin:0 }}>Porositë e fundit</div>
              <div className="live-badge"><div className="live-dot"></div> SignalR Live</div>
            </div>
            <table className="data-table">
              <thead><tr><th>#</th><th>Klienti</th><th>Produkti</th><th>Shuma</th><th>Statusi</th></tr></thead>
              <tbody>
                {orders.map(o => (
                  <tr key={o.id}>
                    <td style={{ fontFamily:'Cormorant Garamond,serif' }}>{o.id}</td>
                    <td>{o.client}</td>
                    <td>{o.prod}</td>
                    <td style={{ fontWeight:500 }}>{o.amt}</td>
                    <td><span className={`status ${o.sc}`}>{o.st}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="adm-card">
            <div className="adm-card-title">Shto produkt shpejt</div>
            <div className="form-group"><label className="form-label">Emri</label><input className="form-input" placeholder="Emri produktit" /></div>
            <div className="form-group"><label className="form-label">Çmimi (€)</label><input className="form-input" type="number" placeholder="0.00" /></div>
            <div className="form-group">
              <label className="form-label">Kategoria</label>
              <select className="form-select"><option>Trëndafila</option><option>Buketa</option><option>Orkide</option><option>Bimë</option></select>
            </div>
            <button className="btn btn-primary" style={{ width:'100%' }}>Shto produktin</button>
          </div>
        </div>
      </main>
    </div>
  )
}
