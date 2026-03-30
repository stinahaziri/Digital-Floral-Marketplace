import { useState, useEffect } from "react";
import "../css/Flower.css";

type Product = {
  id: number;
  cat: "lule" | "rose" | "orchid" | "dasme" | "tulip";
  name: string;
  price: number;
  img?: string;
};

const ALL_PRODUCTS: Product[] = [
  { id: 1, cat: "lule", name: "Trëndafil i Kuq", price: 20 },
  { id: 2, cat: "rose", name: "Bukëta Trëndafila", price: 35 },
  { id: 3, cat: "orchid", name: "Orkide e Bardhë", price: 40 },
  { id: 4, cat: "dasme", name: "Aranxhimi Dasme", price: 70 },
  { id: 5, cat: "tulip", name: "Tulipanë të Njëngjyrshëm", price: 25 },
  { id: 6, cat: "lule", name: "Lule Mix", price: 30 },
];

export default function Flowers() {
  const [activeCat, setActiveCat] = useState<"lule" | "rose" | "orchid" | "dasme" | "tulip">("lule");
  const [products, setProducts] = useState<Product[]>(ALL_PRODUCTS.filter((p) => p.cat === "lule"));

  useEffect(() => {
    filterProducts(activeCat);
  }, [activeCat]);

  const filterProducts = (cat: Product["cat"]) => {
    const list =
      cat === "lule"
        ? ALL_PRODUCTS.filter((p) => p.cat === "lule")
        : ALL_PRODUCTS.filter((p) => p.cat === cat || p.cat === "lule");

    setProducts(list.length ? list : ALL_PRODUCTS.filter((p) => p.cat === "lule"));
  };

  return (
    <div className="page-wrap">

      {/* HERO */}
      <div className="page-hero">
        <div className="section-eyebrow">Kategoria</div>
        <h1>🌹 Lulët</h1>
        <p>
          Trëndafila, orkide, tulipanë dhe shumë më tepër
          nga floristët tanë të verifikuar
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="section">
        <div className="cat-pills">

          <button
            className={`cat-pill ${activeCat === "lule" ? "active" : ""}`}
            onClick={() => setActiveCat("lule")}
          >
            Të gjitha
          </button>

          <button
            className={`cat-pill ${activeCat === "rose" ? "active" : ""}`}
            onClick={() => setActiveCat("rose")}
          >
            🌹 Trëndafila
          </button>

          <button
            className={`cat-pill ${activeCat === "orchid" ? "active" : ""}`}
            onClick={() => setActiveCat("orchid")}
          >
            🌺 Orkide
          </button>

          <button
            className={`cat-pill ${activeCat === "dasme" ? "active" : ""}`}
            onClick={() => setActiveCat("dasme")}
          >
            💐 Dasme
          </button>

          <button
            className={`cat-pill ${activeCat === "tulip" ? "active" : ""}`}
            onClick={() => setActiveCat("tulip")}
          >
            🌷 Tulipanë
          </button>

        </div>

        {/* PRODUCTS GRID */}
        <div className="grid-4">
          {products.map((p) => (
            <div key={p.id} className="card">
              <h4>{p.name}</h4>
              <p>€{p.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}