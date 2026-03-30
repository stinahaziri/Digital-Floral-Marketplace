/* ================================================================
   NAVBAR & FOOTER — Inject me JavaScript
   Shtoje ne cdo faqe: <script src="../js/navbar.js"></script>
   ose per faqet ne root: <script src="js/navbar.js"></script>
================================================================ */

function getNavbar(prefix) {
  prefix = prefix || '';
  return `
<nav class="navbar">
  <a href="${prefix}index.html" class="nav-logo">Lule <span>Shqip</span></a>
  <ul class="nav-links">
    <li><a href="${prefix}index.html">Ballina</a></li>
    <li class="nav-dropdown">
      <a href="#">Produktet</a>
      <div class="dropdown-menu">
        <a href="${prefix}esentials.html">🌿 Esenciale</a>
        <a href="${prefix}lulet.html">🌹 Lulët</a>
        <a href="${prefix}dekore.html">🏺 Dekorë</a>
      </div>
    </li>
    <li><a href="${prefix}kerko.html">Kërko</a></li>
    <li><a href="${prefix}personalizo.html">Personalizo 3D</a></li>
  </ul>
  <div class="nav-actions">
    <a href="${prefix}kerko.html" class="btn btn-ghost btn-sm">🔍</a>
    <a href="#" class="btn btn-ghost btn-sm" style="position:relative">
      🛒 <span id="cart-badge" style="display:none;position:absolute;top:-6px;right:-6px;background:var(--rose);color:white;font-size:10px;font-weight:700;width:18px;height:18px;border-radius:50%;align-items:center;justify-content:center">0</span>
    </a>
    <a href="${prefix}hyr.html" class="btn btn-ghost btn-sm">Hyr</a>
    <a href="${prefix}regjistrohu.html" class="btn btn-primary btn-sm">Regjistrohu</a>
  </div>
</nav>`;
}

function getFooter() {
  return `
<footer>
  <div class="footer-logo">Lule Shqip 🌸</div>
  <p style="margin-bottom:16px">Platforma juaj për lule të freskëta nga floristët e verifikuar.</p>
  <p>&copy; 2025 Lule Shqip &nbsp;·&nbsp; <a href="#">Kushtet</a> &nbsp;·&nbsp; <a href="#">Privatësia</a></p>
</footer>`;
}

/* Auto-inject */
document.addEventListener('DOMContentLoaded', function() {
  const navEl = document.getElementById('navbar-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  const prefix = navEl ? (navEl.dataset.prefix || '') : '';
  if (navEl) navEl.outerHTML = getNavbar(prefix);
  if (footEl) footEl.outerHTML = getFooter();
});
