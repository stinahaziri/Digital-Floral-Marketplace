import { useState, useEffect } from "react";


type Product = {
  id: number;
  cat: "lule" | "esencial";
  name: string;
  price: number;
  rating: number;
};

const ALL_PRODUCTS: Product[] = [
  { id: 1, cat: "lule", name: "Trëndafil i Kuq", price: 18, rating: 4.8 },
  { id: 2, cat: "lule", name: "Tulipanë Pasta", price: 12, rating: 4.5 },
  { id: 3, cat: "esencial", name: "Bimë Shtëpiake", price: 15, rating: 4.6 },
  { id: 4, cat: "esencial", name: "Shporta Ekskluzive", price: 35, rating: 4.9 },
];

export default function Kerko() {
  const [kw, setKw] = useState("");
  const [minP, setMinP] = useState("");
  const [maxP, setMaxP] = useState("");
  const [category, setCategory] = useState<Product["cat"][]>([]);
  const [sort, setSort] = useState("rel");
  const [results, setResults] = useState<Product[]>(ALL_PRODUCTS);

  useEffect(() => {
    doSearch();
  }, [kw, minP, maxP, category, sort]);

  const toggleCategory = (cat: Product["cat"]) => {
    setCategory((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

  const doSearch = () => {
    let list = [...ALL_PRODUCTS];

    const min = parseFloat(minP) || 0;
    const max = parseFloat(maxP) || 99999;

    // filter keyword
    if (kw) {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(kw.toLowerCase())
      );
    }

    // filter price
    list = list.filter((p) => p.price >= min && p.price <= max);

    // filter category
    if (category.length) {
      list = list.filter((p) => category.includes(p.cat));
    }

    // sort
    if (sort === "asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);

    setResults(list);
  };

  const resetFilters = () => {
    setKw("");
    setMinP("");
    setMaxP("");
    setCategory([]);
    setSort("rel");
  };

  return (
    <div className="page-wrap">

      {/* HERO */}
      <div className="search-hero">
        <h1>Gjej lulet <em>perfekte</em></h1>
        <p>Filtro sipas çmimit, kategorisë dhe kërkimit</p>

        <div className="search-bar-wrap">
          <input
            type="text"
            placeholder="Kërko..."
            value={kw}
            onChange={(e) => setKw(e.target.value)}
          />
          <button>Kërko</button>
        </div>
      </div>

      <div className="search-layout">

        {/* FILTERS */}
        <div className="filters-panel">

          <div className="filter-group">
            <div className="filter-title">Kategoria</div>

            <label className="filter-opt">
              <input
                type="checkbox"
                checked={category.includes("lule")}
                onChange={() => toggleCategory("lule")}
              />
              🌹 Lulët
            </label>

            <label className="filter-opt">
              <input
                type="checkbox"
                checked={category.includes("esencial")}
                onChange={() => toggleCategory("esencial")}
              />
              🌿 Esenciale
            </label>
          </div>

          <div className="filter-group">
            <div className="filter-title">Çmimi (€)</div>

            <div className="price-row">
              <input
                className="price-inp"
                type="number"
                placeholder="Min"
                value={minP}
                onChange={(e) => setMinP(e.target.value)}
              />
              <input
                className="price-inp"
                type="number"
                placeholder="Max"
                value={maxP}
                onChange={(e) => setMaxP(e.target.value)}
              />
            </div>
          </div>

          <button className="btn btn-primary" onClick={resetFilters}>
            Pastro filtrat
          </button>
        </div>

        {/* RESULTS */}
        <div className="results-area">

          <div className="results-header">
            <span className="results-count">
              Duke shfaqur {results.length} rezultate
            </span>

            <select
              className="sort-sel"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="rel">Relevante</option>
              <option value="asc">Çmimi ↑</option>
              <option value="desc">Çmimi ↓</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="grid-3">
            {results.length === 0 ? (
              <div className="no-results">Ska rezultate 😢</div>
            ) : (
              results.map((p) => (
                <div key={p.id} className="card">
                  <h4>{p.name}</h4>
                  <p>€{p.price}</p>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}