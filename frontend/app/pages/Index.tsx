import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { ALL_PRODUCTS } from '../data/products'

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="page-wrap">

        {/* Promo Banner */}
        <div className="promo-banner">
          🚚 <strong>Dërgesa falas</strong> për porosi mbi €40 &nbsp;·&nbsp; Kodi: <strong>LULET24</strong>
        </div>

        {/* Hero */}
        <section className="hero">
          <div className="hero-left fade-up">
            <div className="hero-eyebrow">Marketplace i Luleve · Kosovë & Shqipëri</div>
            <h1 className="hero-title">Lule të <em>freskëta</em><br />drejt zemrës tënde</h1>
            <p className="hero-sub">
              Zgjidh nga mbi 240 floristë të verifikuar. Personalize buketën tënde me ndërtuesin 3D.
            </p>
            <div className="hero-ctas">
              <Link to="/kerko" className="btn btn-rose btn-large">Shfleto dyqanet</Link>
              <Link to="/personalizo" className="btn btn-outline btn-large">Krijo buketën 3D ✦</Link>
            </div>
            <div className="hero-stats">
              <div><span className="stat-num">240+</span><span className="stat-lbl">Floristë</span></div>
              <div><span className="stat-num">12k</span><span className="stat-lbl">Porosi</span></div>
              <div><span className="stat-num">4.9★</span><span className="stat-lbl">Vlerësim</span></div>
            </div>
          </div>
          <div className="hero-right">
            <div className="mini-grid">
              <Link to="/lulet"       className="mini-card"><span className="mini-emoji">🌹</span><div className="mini-name">Trëndafila</div><div className="mini-price">nga €3.50</div></Link>
              <Link to="/lulet"       className="mini-card"><span className="mini-emoji">💐</span><div className="mini-name">Buketa</div><div className="mini-price">nga €18.00</div></Link>
              <Link to="/lulet"       className="mini-card"><span className="mini-emoji">🌸</span><div className="mini-name">Dasme</div><div className="mini-price">nga €45.00</div></Link>
              <Link to="/personalizo" className="mini-card"><span className="mini-emoji">🎨</span><div className="mini-name">Krijo 3D</div><div className="mini-price">Personalizo</div></Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <div className="features-row">
          <div className="feature-item"><span className="feature-icon">🚚</span><div><div className="feature-title">Dërgesa e shpejtë</div><div className="feature-desc">Brenda 2-4 orësh</div></div></div>
          <div className="feature-item"><span className="feature-icon">✅</span><div><div className="feature-title">Floristë të verifikuar</div><div className="feature-desc">Të gjithë të kontrolluar</div></div></div>
          <div className="feature-item"><span className="feature-icon">🔒</span><div><div className="feature-title">Pagesë e sigurt</div><div className="feature-desc">Stripe · SSL · 256-bit</div></div></div>
        </div>

        {/* Categories */}
        <div className="cats-section">
          <div className="section-eyebrow">Shfleto sipas kategorisë</div>
          <h2 className="section-title">Çfarë po kërkon?</h2>
          <div className="cats-grid">
            <Link to="/lulet"     className="cat-card c1"><div className="cat-bg">🌹</div><div className="cat-overlay"></div><div className="cat-info"><div className="cat-name">Lulët</div><div className="cat-count">180+ produkte</div></div></Link>
            <Link to="/esentials" className="cat-card c2"><div className="cat-bg">🌿</div><div className="cat-overlay"></div><div className="cat-info"><div className="cat-name">Esenciale</div><div className="cat-count">90+ produkte</div></div></Link>
            <Link to="/dekore"    className="cat-card c3"><div className="cat-bg">🏺</div><div className="cat-overlay"></div><div className="cat-info"><div className="cat-name">Dekorë</div><div className="cat-count">60+ produkte</div></div></Link>
          </div>
        </div>

        {/* Featured Products */}
        <div className="section">
          <div className="section-header">
            <h2 className="section-title">Produktet e javës</h2>
            <Link to="/kerko" className="section-link">Shiko të gjitha →</Link>
          </div>
          <div className="grid-4">
            {ALL_PRODUCTS.slice(0, 8).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}
