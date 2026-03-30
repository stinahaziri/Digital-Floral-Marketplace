// import type { Route } from "./+types/esentials"; // Sigurohu që emri i skedarit të jetë esentials.tsx
import { useState } from "react";

// Të dhënat shembull (Këto mund të vijnë nga një API ose skedar JSON)
const ALL_PRODUCTS = [
  { id: 101, cat: 'esencial', name: 'Bimë Monstera', price: '30€', img: 'https://placehold.co/300x400', desc: 'Bimë shtëpiake ekzotike' },
  { id: 102, cat: 'esencial', name: 'Shportë me Trëndafila', price: '45€', img: 'https://placehold.co/300x400', desc: 'Shportë dekorative' },
  { id: 103, cat: 'esencial', name: 'Bimë Fikus', price: '25€', img: 'https://placehold.co/300x400', desc: 'Ideale për zyrë' },
  { id: 104, cat: 'esencial', name: 'Shportë Frutash & Lulesh', price: '50€', img: 'https://placehold.co/300x400', desc: 'Dhuratë perfekte' },
  { id: 105, cat: 'esencial', name: 'Bimë Aloe Vera', price: '15€', img: 'https://placehold.co/300x400', desc: 'Bimë mjekësore' },
];

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Esenciale - Lule Shqip" },
//     { name: "description", content: "Bimë shtëpiake dhe shporta lulesh esenciale." },
//   ];
// }

export default function Esentials() {
  // State për kategorinë e zgjedhur
  const [activeFilter, setActiveFilter] = useState<'all' | 'bime' | 'shporta'>('all');

  // Logjika e filtrimit
  const filteredProducts = ALL_PRODUCTS.filter(p => {
    if (activeFilter === 'all') return p.cat === 'esencial';
    if (activeFilter === 'bime') return p.cat === 'esencial' && p.name.includes('Bim');
    if (activeFilter === 'shporta') return p.cat === 'esencial' && p.name.includes('Shport');
    return true;
  });

  return (
    <div className="page-wrap">
      {/* Hero Section */}
      <div className="page-hero">
        <div className="section-eyebrow">Kategoria</div>
        <h1>🌿 Esenciale</h1>
        <p>Bimë shtëpiake, shporta lulesh dhe produktet tona bazë</p>
      </div>

      <div className="section">
        {/* Butonat e Filtrimit (Pills) */}
        <div className="cat-pills">
          <button 
            className={`cat-pill ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Të gjitha
          </button>
          <button 
            className={`cat-pill ${activeFilter === 'bime' ? 'active' : ''}`}
            onClick={() => setActiveFilter('bime')}
          >
            🌿 Bimë
          </button>
          <button 
            className={`cat-pill ${activeFilter === 'shporta' ? 'active' : ''}`}
            onClick={() => setActiveFilter('shporta')}
          >
            🧺 Shporta
          </button>
        </div>

        {/* Grid i produkteve */}
        <div className="grid-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrap">
                <img src={product.img} alt={product.name} className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <div className="product-price">{product.price}</div>
                <button className="btn-add">Shto në shportë</button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div style={{textAlign: 'center', padding: '50px', color: '#666'}}>
            Nuk u gjet asnjë produkt në këtë kategori.
          </div>
        )}
      </div>

      {/* Stilet CSS (Mund t'i zhvendosësh në një file .css) */}
      {/* <style dangerouslySetInnerHTML={{ __html: `
        .page-hero { text-align: center; padding: 80px 20px; background: #f4f7f4; border-bottom: 1px solid #eee; }
        .section-eyebrow { color: #5a8d5a; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1.5px; margin-bottom: 10px; }
        .page-hero h1 { font-size: 42px; margin-bottom: 15px; font-family: 'Cormorant Garamond', serif; }
        
        .cat-pills { display: flex; justify-content: center; gap: 12px; margin: 40px 0; }
        .cat-pill { padding: 10px 24px; border: 1.5px solid #ddd; border-radius: 50px; background: white; cursor: pointer; font-weight: 500; transition: 0.3s; }
        .cat-pill.active { background: #5a8d5a; color: white; border-color: #5a8d5a; box-shadow: 0 4px 12px rgba(90,141,90,0.2); }
        
        .grid-4 { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 30px; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .product-card { background: white; border-radius: 16px; border: 1px solid #f0f0f0; transition: transform 0.3s; overflow: hidden; }
        .product-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
        .product-img { width: 100%; height: 280px; object-fit: cover; }
        .product-info { padding: 20px; }
        .product-title { font-size: 18px; margin-bottom: 8px; color: #1a1a1a; }
        .product-desc { font-size: 13px; color: #777; margin-bottom: 15px; }
        .product-price { font-weight: 700; color: #5a8d5a; font-size: 18px; margin-bottom: 15px; }
        .btn-add { width: 100%; padding: 12px; background: #1a1a1a; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
      `}} /> */}
    </div>
  );
}