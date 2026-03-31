import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { ALL_PRODUCTS } from '../data/products'

export function Lulet() {
  const products = ALL_PRODUCTS.filter(p => p.cat === 'lule')
  return (
    <>
      <Navbar />
      <div className="page-wrap">
        <div className="page-hero">
          <div className="section-eyebrow">Kategoria</div>
          <h1>🌹 Lulët</h1>
          <p>Trëndafila, orkide, tulipanë dhe shumë më tepër nga floristët tanë të verifikuar</p>
        </div>
        <div className="section">
          <div className="cat-pills">
            <button className="cat-pill active">Të gjitha</button>
            <button className="cat-pill">🌹 Trëndafila</button>
            <button className="cat-pill">🌺 Orkide</button>
            <button className="cat-pill">💐 Dasme</button>
            <button className="cat-pill">🌷 Tulipanë</button>
          </div>
          <div className="grid-4">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export function Esentials() {
  const products = ALL_PRODUCTS.filter(p => p.cat === 'esencial')
  return (
    <>
      <Navbar />
      <div className="page-wrap">
        <div className="page-hero">
          <div className="section-eyebrow">Kategoria</div>
          <h1>🌿 Esenciale</h1>
          <p>Bimë shtëpiake, shporta lulesh dhe produktet tona bazë</p>
        </div>
        <div className="section">
          <div className="cat-pills">
            <button className="cat-pill active">Të gjitha</button>
            <button className="cat-pill">🌿 Bimë</button>
            <button className="cat-pill">🧺 Shporta</button>
          </div>
          <div className="grid-4">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export function Dekore() {
  const products = ALL_PRODUCTS.filter(p => p.cat === 'dekor')
  return (
    <>
      <Navbar />
      <div className="page-wrap">
        <div className="page-hero">
          <div className="section-eyebrow">Kategoria</div>
          <h1>🏺 Dekorë</h1>
          <p>Vazo, qirinj, aksesore dekorimi dhe shumë më tepër për shtëpinë tuaj</p>
        </div>
        <div className="section">
          <div className="cat-pills">
            <button className="cat-pill active">Të gjitha</button>
            <button className="cat-pill">🏺 Vazo</button>
            <button className="cat-pill">🕯️ Qirinj</button>
          </div>
          <div className="grid-4">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
