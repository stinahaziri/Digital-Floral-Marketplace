import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { ALL_PRODUCTS } from '../data/products'

export default function Kerko() {
  return (
    <>
      <Navbar />
      <div className="page-wrap">

        <div className="search-hero">
          <h1 className="search-hero-title">Gjej lulet <em>perfekte</em></h1>
          <p className="search-hero-sub">Filtro sipas ngjyrës, rastit, çmimit dhe qytetit</p>
          <div className="search-bar-wrap">
            <input className="search-input" placeholder="Kërko lule, dyqan, qytet..." />
            <button className="search-btn">Kërko</button>
          </div>
        </div>

        <div className="search-layout">
          {/* Filters */}
          <div className="filters-panel">
            <div className="filter-group">
              <div className="filter-title">Kategoria</div>
              <label className="filter-opt"><input type="checkbox" className="filter-cb" /> 🌹 Lulët</label>
              <label className="filter-opt"><input type="checkbox" className="filter-cb" /> 🌿 Esenciale</label>
              <label className="filter-opt"><input type="checkbox" className="filter-cb" /> 🏺 Dekorë</label>
            </div>
            <div className="filter-group">
              <div className="filter-title">Rasti</div>
              <label className="filter-opt"><input type="checkbox" className="filter-cb" /> Dasëm</label>
              <label className="filter-opt"><input type="checkbox" className="filter-cb" /> Ditëlindje</label>
              <label className="filter-opt"><input type="checkbox" className="filter-cb" /> Valentinë</label>
              <label className="filter-opt"><input type="checkbox" className="filter-cb" /> Funeral</label>
            </div>
            <div className="filter-group">
              <div className="filter-title">Ngjyra</div>
              <div className="swatches">
                {['#e63946','#ffffff','#ff69b4','#9b59b6','#ffd700','#ff8c00','#3a7d44'].map(c => (
                  <div key={c} className="swatch" style={{ background: c, border: c === '#ffffff' ? '1px solid #ddd' : undefined }} />
                ))}
              </div>
            </div>
            <div className="filter-group">
              <div className="filter-title">Çmimi (€)</div>
              <div className="price-row">
                <input className="price-inp" type="number" placeholder="Min" />
                <span style={{ color: 'var(--muted)', fontSize: '12px' }}>—</span>
                <input className="price-inp" type="number" placeholder="Max" />
              </div>
            </div>
            <div className="filter-group">
              <div className="filter-title">Qyteti</div>
              <label className="filter-opt"><input type="checkbox" className="filter-cb" /> Prishtinë</label>
              <label className="filter-opt"><input type="checkbox" className="filter-cb" /> Tiranë</label>
              <label className="filter-opt"><input type="checkbox" className="filter-cb" /> Prizren</label>
              <label className="filter-opt"><input type="checkbox" className="filter-cb" /> Gjakovë</label>
            </div>
            <div className="filter-group">
              <div className="filter-title">Vlerësimi</div>
              <label className="filter-opt"><input type="checkbox" className="filter-cb" /> ★★★★★ 5.0</label>
              <label className="filter-opt"><input type="checkbox" className="filter-cb" /> ★★★★☆ 4.0+</label>
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }}>Apliko filtrat</button>
          </div>

          {/* Results */}
          <div className="results-area">
            <div className="results-header">
              <span className="results-count">Duke shfaqur {ALL_PRODUCTS.length} rezultate</span>
              <select className="sort-sel">
                <option>Rendito: Relevante</option>
                <option>Çmimi: Ulët → Lartë</option>
                <option>Çmimi: Lartë → Ulët</option>
                <option>Vlerësimi</option>
              </select>
            </div>
            <div className="results-grid">
              {ALL_PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}
