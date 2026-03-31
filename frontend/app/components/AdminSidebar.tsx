import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/admin',              icon: '📊', label: 'Pasqyra' },
  { to: '/admin/porosite',     icon: '📦', label: 'Porositë',  badge: 3 },
  { to: '/admin/produktet',    icon: '🌹', label: 'Produktet' },
  { to: '/admin/oraret',       icon: '📅', label: 'Oraret' },
  { to: '/admin/chat',         icon: '💬', label: 'Chat',      badge: 5 },
  { to: '/admin/cilesimet',    icon: '⚙️', label: 'Cilësimet' },
  { to: '/admin/eksporto',     icon: '📤', label: 'Eksporto' },
]

export default function AdminSidebar() {
  const { pathname } = useLocation()

  return (
    <aside className="admin-sidebar">
      <div className="asb-logo">🌸 <span>Florist Panel</span></div>

      <div className="asb-section">Kryesor</div>
      {links.slice(0, 4).map(l => (
        <Link key={l.to} to={l.to} className={`asb-item ${pathname === l.to ? 'active' : ''}`}>
          <span className="asb-icon">{l.icon}</span>
          {l.label}
          {l.badge && <span className="asb-badge">{l.badge}</span>}
        </Link>
      ))}

      <div className="asb-section">Tjera</div>
      {links.slice(4).map(l => (
        <Link key={l.to} to={l.to} className={`asb-item ${pathname === l.to ? 'active' : ''}`}>
          <span className="asb-icon">{l.icon}</span>
          {l.label}
          {l.badge && <span className="asb-badge">{l.badge}</span>}
        </Link>
      ))}

      <div style={{ marginTop: 'auto', padding: '20px' }}>
        <Link to="/" className="asb-item" style={{ opacity: .6 }}>← Kthehu te faqja</Link>
      </div>
    </aside>
  )
}
