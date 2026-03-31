import AdminSidebar from '../../components/AdminSidebar'

const orders = [
  { id:'#4721', client:'Arjeta Morina',   prod:'Buketë Trëndafilash', amt:'€28.50',  date:'29 Mar 2026', st:'Pending',   sc:'status-pending' },
  { id:'#4720', client:'Blerim Krasniqi', prod:'Orkide Elegante',     amt:'€45.00',  date:'29 Mar 2026', st:'Confirmed', sc:'status-confirmed' },
  { id:'#4719', client:'Drita Hoxha',     prod:'Buketë Dasme',        amt:'€120.00', date:'28 Mar 2026', st:'Preparing', sc:'status-preparing' },
  { id:'#4718', client:'Fjolla Selimi',   prod:'Lule Dielli',         amt:'€18.00',  date:'28 Mar 2026', st:'Ready',     sc:'status-ready' },
  { id:'#4717', client:'Granit Berisha',  prod:'Bima Jade',           amt:'€22.00',  date:'27 Mar 2026', st:'Delivered', sc:'status-delivered' },
  { id:'#4716', client:'Hana Gashi',      prod:'Zambak i Bardhë',     amt:'€32.00',  date:'27 Mar 2026', st:'Delivered', sc:'status-delivered' },
]

export default function AdminPorosite() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main">
        <div className="adm-title">Porositë</div>
        <div className="adm-sub">Menaxho dhe përditëso statusin e porosive</div>

        <div style={{ display:'flex', gap:'12px', marginBottom:'20px', flexWrap:'wrap' }}>
          <input className="form-input" style={{ width:'220px' }} placeholder="Kërko porosi..." />
          <select className="form-select" style={{ width:'180px' }}>
            <option>Të gjitha statuset</option>
            <option>Pending</option><option>Confirmed</option>
            <option>Preparing</option><option>Ready</option><option>Delivered</option>
          </select>
          <select className="form-select" style={{ width:'150px' }}>
            <option>Sot</option><option>Kjo javë</option><option>Ky muaj</option>
          </select>
        </div>

        <div className="adm-card">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'16px' }}>
            <div className="adm-card-title" style={{ margin:0 }}>Lista e porosive</div>
            <div className="live-badge"><div className="live-dot"></div> Live</div>
          </div>
          <table className="data-table">
            <thead><tr><th>#ID</th><th>Klienti</th><th>Produkti</th><th>Shuma</th><th>Data</th><th>Statusi</th><th>Veprimet</th></tr></thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id}>
                  <td style={{ fontFamily:'Cormorant Garamond,serif' }}>{o.id}</td>
                  <td>{o.client}</td><td>{o.prod}</td>
                  <td style={{ fontWeight:500 }}>{o.amt}</td>
                  <td style={{ color:'var(--muted)' }}>{o.date}</td>
                  <td><span className={`status ${o.sc}`}>{o.st}</span></td>
                  <td><button className="btn btn-ghost btn-sm">Ndrysho</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
