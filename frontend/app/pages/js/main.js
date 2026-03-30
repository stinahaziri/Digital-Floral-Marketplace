/* ================================================================
   LULE SHQIP — Global JavaScript
   Perdoret nga te gjitha faqet
================================================================ */

/* ── TOAST ── */
function showToast(msg, duration = 2800) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), duration);
}

/* ── CART (localStorage) ── */
function getCart() {
  try { return JSON.parse(localStorage.getItem('ls_cart') || '[]'); } catch { return []; }
}
function saveCart(cart) { localStorage.setItem('ls_cart', JSON.stringify(cart)); }
function addToCart(product) {
  const cart = getCart();
  const ex = cart.find(i => i.id === product.id);
  if (ex) ex.qty++; else cart.push({ ...product, qty: 1 });
  saveCart(cart);
  updateCartBadge();
  showToast(`${product.emoji || '🌹'} "${product.name}" u shtua në shportë!`);
}
function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const total = getCart().reduce((s, i) => s + i.qty, 0);
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}

/* ── ACTIVE NAV LINK ── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && path.includes(href.replace('../','').replace('.html',''))) {
      a.classList.add('active');
    }
  });
}

/* ── FORMAT CURRENCY ── */
function formatEur(amount) { return `€${parseFloat(amount).toFixed(2)}`; }

/* ── FILTER PRODUCTS ── */
function filterProducts(products, keyword, cat, minP, maxP) {
  return products.filter(p => {
    const kw = keyword.toLowerCase();
    const matchKw = !kw || p.name.toLowerCase().includes(kw) || (p.shop||'').toLowerCase().includes(kw);
    const matchCat = !cat || cat === 'all' || p.cat === cat;
    const matchMin = !minP || p.price >= minP;
    const matchMax = !maxP || p.price <= maxP;
    return matchKw && matchCat && matchMin && matchMax;
  });
}

/* ── RENDER PRODUCT CARDS ── */
function renderProductCards(containerId, products) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!products.length) { el.innerHTML = '<p style="color:var(--muted);grid-column:1/-1;padding:40px 0;text-align:center">Nuk u gjet asnjë produkt.</p>'; return; }
  el.innerHTML = products.map(p => `
    <div class="product-card fade-up">
      <div class="product-img">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        <span>${p.emoji || '🌹'}</span>
      </div>
      <div class="product-body">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-shop">🏪 ${p.shop} &nbsp;★ ${p.rating}</div>
        <div class="product-footer">
          <div class="product-price">${formatEur(p.price)} <small>/ copë</small></div>
          <button class="btn btn-primary btn-icon" onclick="addToCart(${JSON.stringify(p).replace(/"/g,'&quot;')})">+</button>
        </div>
      </div>
    </div>`).join('');
}

/* ── SHARED PRODUCT DATA ── */
const ALL_PRODUCTS = [
  { id:1,  name:'Buketë Trëndafilash', cat:'lule',   shop:'Lule Prishtina', price:28.50, emoji:'🌹', badge:'Bestseller', rating:4.9 },
  { id:2,  name:'Orkide Elegante',     cat:'lule',   shop:'Flowers Tirana', price:45.00, emoji:'🌺', badge:'Premium',    rating:4.8 },
  { id:3,  name:'Buketë Dasme',        cat:'lule',   shop:'Nuse Florals',   price:120.00,emoji:'💐', badge:'Bestseller', rating:5.0 },
  { id:4,  name:'Lule Dielli',         cat:'lule',   shop:'Lule Gjakova',   price:18.00, emoji:'🌻', badge:null,         rating:4.7 },
  { id:5,  name:'Tulipanë Veriorë',    cat:'lule',   shop:'Lule Prizreni',  price:16.50, emoji:'🌷', badge:null,         rating:4.8 },
  { id:6,  name:'Zambak i Bardhë',     cat:'lule',   shop:'Flowers Tirana', price:32.00, emoji:'🌸', badge:'Premium',    rating:4.9 },
  { id:7,  name:'Mimoza Pranverore',   cat:'lule',   shop:'Lule Shkodra',   price:14.00, emoji:'🌼', badge:'E re',       rating:4.5 },
  { id:8,  name:'Bima Jade',           cat:'esencial',shop:'Green Home KS', price:22.00, emoji:'🌿', badge:'E re',       rating:4.6 },
  { id:9,  name:'Vazo Qeramike Blu',   cat:'dekor',  shop:'Dekor Shtëpia',  price:34.00, emoji:'🏺', badge:'Premium',    rating:4.7 },
  { id:10, name:'Shportë Lulesh',      cat:'esencial',shop:'Lule Prishtina',price:48.00, emoji:'🧺', badge:'Bestseller', rating:4.9 },
  { id:11, name:'Dritare Dekori',      cat:'dekor',  shop:'Dekor Shtëpia',  price:26.00, emoji:'🕯️', badge:null,         rating:4.6 },
  { id:12, name:'Kaktus Miniaturë',    cat:'esencial',shop:'Green Home KS', price:12.00, emoji:'🌵', badge:null,         rating:4.4 },
];

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  updateCartBadge();
});
