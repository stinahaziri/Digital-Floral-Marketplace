import { Link, useLocation } from 'react-router-dom'
import logo from "../Images/logo1-removebg-preview.png"

export default function Navbar() {
  const { pathname } = useLocation()
  const active = (path: string) => pathname === path ? 'active' : ''

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo"> <img src={logo} alt="Digital Floral Marketplace" width={140} /></Link>

      <ul className="nav-links">
        <li><Link to="/" className={active('/')}>Ballina</Link></li>
        <li className="nav-dropdown">
          <a href="#">Produktet</a>
          <div className="dropdown-menu">
            <Link to="/esentials">🌿 Esenciale</Link>
            <Link to="/lulet">🌹 Lulët</Link>
            <Link to="/dekore">🏺 Dekorë</Link>
          </div>
        </li>
        <li><Link to="/kerko" className={active('/kerko')}>Kërko</Link></li>
        <li><Link to="/personalizo" className={active('/personalizo')}>Personalizo 3D</Link></li>
      </ul>

      <div className="nav-actions">
        <Link to="/kerko" className="btn btn-ghost btn-sm">🔍</Link>
        <Link to="/hyr"   className="btn btn-ghost btn-sm">Hyr</Link>
        <Link to="/regjistrohu" className="btn btn-primary btn-sm">Regjistrohu</Link>
      </div>
    </nav>
  )
}
