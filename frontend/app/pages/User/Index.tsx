import { useMemo, useState } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "../css/Index.css";
import "../css/style.css"

type Product = {
  id: number;
  cat: "lule" | "esencial";
  name: string;
  price: number;
};

const ALL_PRODUCTS: Product[] = [
  { id: 1, cat: "lule", name: "Trëndafil i Kuq", price: 18 },
  { id: 2, cat: "lule", name: "Tulipanë Mix", price: 22 },
  { id: 3, cat: "esencial", name: "Bimë Shtëpiake", price: 15 },
  { id: 4, cat: "esencial", name: "Shporta Premium", price: 45 },
  { id: 5, cat: "lule", name: "Buketë e Ditës", price: 30 },
];

export default function Index() {
  const [activeCat, setActiveCat] = useState<"all" | Product["cat"]>("all");

  const filteredProducts = useMemo(() => {
    if (activeCat === "all") return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter((p) => p.cat === activeCat);
  }, [activeCat]);

  const handleFilter = (cat: "all" | Product["cat"]) => {
    setActiveCat(cat);
  };

  return (
    <div className="page-wrap">

      {/* Promo Banner */}
      <div className="promo-banner">
        🚚 <strong>Dërgesa falas</strong> për porosi mbi €40 · Kodi: <strong>LULET24</strong>
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-left fade-up">
          <div className="hero-eyebrow">
            Marketplace i Luleve · Kosovë & Shqipëri
          </div>

          <h1 className="hero-title">
            Lule të <em>freskëta</em><br /> drejt zemrës tënde
          </h1>

          <p className="hero-sub">
            Zgjidh nga mbi 240 floristë të verifikuar...
          </p>

          <div className="hero-ctas">
            <a href="/kerko" className="btn btn-primary btn-lg">
              Shfleto dyqanet
            </a>

            <a href="/personalizo" className="btn btn-ghost btn-lg">
              Krijo buketën 3D ✦
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <span className="stat-num">240+</span>
              <span className="stat-lbl">Floristë</span>
            </div>
            <div>
              <span className="stat-num">12k</span>
              <span className="stat-lbl">Porosi</span>
            </div>
            <div>
              <span className="stat-num">4.9★</span>
              <span className="stat-lbl">Vlerësim</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="mini-grid">
            <a href="/lulet" className="mini-card">
              <span className="mini-emoji">🌹</span>
              <div className="mini-name">Trëndafila</div>
              <div className="mini-price">nga €3.50</div>
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features-row">
        <div className="feature-item">
          <span className="feature-icon">🚚</span>
          <div>
            <div className="feature-title">Dërgesa e shpejtë</div>
            <div className="feature-desc">Brenda 2-4 orësh</div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="cats-section">
        <h2 className="section-title">Çfarë po kërkon?</h2>

        <div className="cats-grid">
          <a href="/lulet" className="cat-card c1">
            <div className="cat-bg">🌹</div>
            <div className="cat-overlay"></div>
            <div className="cat-info">
              <div className="cat-name">Lulët</div>
              <div className="cat-count">180+ produkte</div>
            </div>
          </a>
        </div>
      </div>

      {/* Products */}
      <div className="section">
        <h2 className="section-title">Produktet e javës</h2>

        <div className="cat-pills">
          <button onClick={() => handleFilter("all")} className="cat-pill">
            Të gjitha
          </button>

          <button onClick={() => handleFilter("lule")} className="cat-pill">
            🌹 Lulët
          </button>
        </div>

        <div className="grid-4">
          {filteredProducts.length === 0 ? (
            <div className="no-results">Ska produkte për këtë kategori</div>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className="card">
                <h4>{product.name}</h4>
                <p>€{product.price.toFixed(2)}</p>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
    