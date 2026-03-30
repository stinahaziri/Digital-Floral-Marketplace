import { useState } from "react";

// Supozojmë se të dhënat vijnë nga një skedar tjetër ose API
const ALL_PRODUCTS = [
  { id: 1, cat: 'dekor', name: 'Vazo Keramike', price: '25€', img: 'https://placehold.co/300x400', desc: 'Vazo handmade' },
  { id: 2, cat: 'dekor', name: 'Qiri Aromatik', price: '12€', img: 'https://placehold.co/300x400', desc: 'Aromë lulesh' },
  { id: 3, cat: 'dekor', name: 'Vazo Kristali', price: '45€', img: 'https://placehold.co/300x400', desc: 'Elegante' },
  { id: 4, cat: 'dekor', name: 'Dritë Dekorative', price: '18€', img: 'https://placehold.co/300x400', desc: 'Për ambient' },
];

export function meta() {
  return [
    { title: "Dekore - Lule Shqip" },
    { name: "description", content: "Vazo, qirinj dhe aksesorë dekorimi." },
  ];
}

export default function Dekore() {
  // 1. State për filtrimin
  const [filter, setFilter] = useState<'all' | 'vazo' | 'qirinj'>('all');

  // 2. Logjika e filtrimit (në React kjo bëhet automatikisht gjatë renderimit)
  const filteredProducts = ALL_PRODUCTS.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'vazo') return p.name.includes('Vazo');
    if (filter === 'qirinj') return p.name.includes('Qiri') || p.name.includes('Dri');
    return true;
  });

  return (
    <div className="page-wrap">
      {/* Hero Section */}
      <div className="page-hero">
        <div className="section-eyebrow">Kategoria</div>
        <h1>🏺 Dekorë</h1>
        <p>Vazo, qirinj, aksesore dekorimi dhe shumë më tepër për shtëpinë tuaj</p>
      </div>

      <div className="section">
        {/* Kategoritë (Pills) */}
        <div className="cat-pills">
          <button 
            className={`cat-pill ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            Të gjitha
          </button>
          <button 
            className={`cat-pill ${filter === 'vazo' ? 'active' : ''}`} 
            onClick={() => setFilter('vazo')}
          >
            🏺 Vazo
          </button>
          <button 
            className={`cat-pill ${filter === 'qirinj' ? 'active' : ''}`} 
            onClick={() => setFilter('qirinj')}
          >
            🕯️ Qirinj
          </button>
        </div>

        {/* Grid i Produkteve */}
        <div className="grid-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.img} alt={product.name} className="product-img" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <div className="product-price">{product.price}</div>
                  <button className="btn-add">Shto në shportë</button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px' }}>
              Nuk u gjet asnjë produkt në këtë kategori.
            </p>
          )}
        </div>
      </div>

      {/* CSS-ja specifike (mund ta vendosësh edhe në një skedar .css) */}
      {/* <style dangerouslySetInnerHTML={{ __html: `
        .page-hero { text-align: center; padding: 60px 20px; background: #fdfaf7; }
        .section-eyebrow { color: #c8614a; font-weight: 600; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
        .cat-pills { display: flex; justify-content: center; gap: 10px; margin-bottom: 40px; }
        .cat-pill { padding: 10px 20px; border: 1px solid #ddd; border-radius: 30px; background: white; cursor: pointer; transition: 0.3s; }
        .cat-pill.active { background: #c8614a; color: white; border-color: #c8614a; }
        .grid-4 { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 30px; padding: 20px; }
        .product-card { border: 1px solid #eee; border-radius: 12px; overflow: hidden; background: white; }
        .product-img { width: 100%; height: 250px; object-fit: cover; }
        .product-info { padding: 15px; }
        .product-price { font-weight: bold; color: #c8614a; margin: 10px 0; }
        .btn-add { width: 100%; padding: 10px; background: #1a1a1a; color: white; border: none; border-radius: 6px; cursor: pointer; }
      `}} /> */}
    </div>
  );
}