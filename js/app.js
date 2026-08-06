// ============================================================
// LÓGICA DE LA APLICACIÓN — no requiere cambios por cliente.
// Depende de que CONFIG (config.js) esté cargado antes que este archivo.
// ============================================================

// ── ESTADO ──────────────────────────────────────────────────
const cart = {};
let activeCategory = 'todo';

// ── FORMATO DE PRECIO ────────────────────────────────────────
const fmt = n => '$' + n.toLocaleString('es-CO');

// ── INIT ─────────────────────────────────────────────────────
function init() {
  document.getElementById('logoCircle').textContent = CONFIG.emoji;
  document.getElementById('restoName').textContent   = CONFIG.nombre;
  document.getElementById('restoTagline').textContent = CONFIG.tagline;
  document.getElementById('modalSubtitle').textContent = CONFIG.nombre;
  renderCategories();
  renderMenu('todo');
  renderCartPanel();
}

// ── CATEGORÍAS ───────────────────────────────────────────────
function renderCategories() {
  const nav = document.getElementById('catNav');
  CONFIG.categorias.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (cat.id === 'todo' ? ' active' : '');
    btn.textContent = cat.nombre;
    btn.onclick = () => { activeCategory = cat.id; setActiveTab(btn); renderMenu(cat.id); };
    nav.appendChild(btn);
  });
}

function setActiveTab(btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function scrollCats(direction) {
  const nav = document.getElementById('catNav');
  nav.scrollBy({ left: direction * 150, behavior: 'smooth' });
}

// ── MENÚ ─────────────────────────────────────────────────────
function renderMenu(catId) {
  const container = document.getElementById('menuSections');
  container.innerHTML = '';
  const cats = catId === 'todo'
    ? CONFIG.categorias.filter(c => c.id !== 'todo')
    : CONFIG.categorias.filter(c => c.id === catId);

  cats.forEach(cat => {
    const prods = CONFIG.productos.filter(p => p.cat === cat.id);
    if (!prods.length) return;
    const section = document.createElement('div');
    section.className = 'menu-section';
    section.innerHTML = `<div class="section-title">${cat.nombre}</div>`
      + (cat.nota ? `<div class="section-note">${cat.nota}</div>` : '');
    prods.forEach(p => section.appendChild(productCard(p)));
    container.appendChild(section);
  });
}

function productCard(p) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.id = `card-${p.id}`;
  card.innerHTML = `
    <div class="product-img">${p.emoji}</div>
    <div class="product-info">
      <div class="product-name">${p.nombre}</div>
      <div class="product-desc">${p.desc}</div>
      <div class="product-footer">
        <div class="product-price"><span class="currency">$</span>${p.precio.toLocaleString('es-CO')}</div>
        <div id="ctrl-${p.id}">${addBtn(p.id)}</div>
      </div>
    </div>`;
  return card;
}

function addBtn(id) {
  return `<button class="add-btn" onclick="addToCart(${id})">+</button>`;
}

function qtyCtrl(id) {
  const qty = cart[id] || 0;
  return `<div class="qty-control">
    <button class="qty-btn minus" onclick="removeFromCart(${id})">−</button>
    <span class="qty-num">${qty}</span>
    <button class="qty-btn plus" onclick="addToCart(${id})">+</button>
  </div>`;
}

// ── CARRITO ──────────────────────────────────────────────────
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCtrl(id);
  updateFab();
  renderCartPanel();
}

function removeFromCart(id) {
  if (!cart[id]) return;
  cart[id]--;
  if (cart[id] === 0) delete cart[id];
  updateCtrl(id);
  updateFab();
  renderCartPanel();
  if (document.getElementById('overlay').classList.contains('open')) renderModal();
}

function updateCtrl(id) {
  const ctrl = document.getElementById(`ctrl-${id}`);
  if (!ctrl) return;
  ctrl.innerHTML = cart[id] ? qtyCtrl(id) : addBtn(id);
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = CONFIG.productos.find(p => p.id == id);
    return sum + (p ? p.precio * qty : 0);
  }, 0);
}

function cartItemCount() {
  return Object.values(cart).reduce((s, v) => s + v, 0);
}

function updateFab() {
  const fab = document.getElementById('cartFab');
  const count = cartItemCount();
  if (count > 0) {
    fab.classList.add('visible');
    document.getElementById('cartCount').textContent = count;
    document.getElementById('cartTotalFab').textContent = fmt(cartTotal());
  } else {
    fab.classList.remove('visible');
  }
}

// ── MODAL Y PANEL LATERAL ──────────────────────────────────────
function openCart() {
  document.getElementById('overlay').classList.add('open');
  renderModal();
}

function closeCart() {
  document.getElementById('overlay').classList.remove('open');
}

function renderCartInto(itemsEl, totalEl) {
  const entries = Object.entries(cart);

  if (!entries.length) {
    itemsEl.innerHTML = `<div class="empty-cart"><div class="empty-icon">🛒</div><div class="empty-text">Tu pedido está vacío</div></div>`;
    totalEl.textContent = fmt(0);
    return;
  }

  itemsEl.innerHTML = entries.map(([id, qty]) => {
    const p = CONFIG.productos.find(p => p.id == id);
    if (!p) return '';
    return `<div class="cart-item">
      <span style="font-size:20px">${p.emoji}</span>
      <div class="cart-item-name">${p.nombre}</div>
      <span class="cart-item-qty">x${qty}</span>
      <span class="cart-item-price">${fmt(p.precio * qty)}</span>
      <button class="remove-btn" onclick="removeFromCart(${id})" title="Quitar">✕</button>
    </div>`;
  }).join('');

  totalEl.textContent = fmt(cartTotal());
}

function renderModal() {
  renderCartInto(document.getElementById('modalItems'), document.getElementById('modalTotal'));
}

function renderCartPanel() {
  const itemsEl = document.getElementById('cartPanelItems');
  const totalEl = document.getElementById('cartPanelTotal');
  if (!itemsEl || !totalEl) return;
  renderCartInto(itemsEl, totalEl);
}

// ── ENVIAR PEDIDO POR WHATSAPP ────────────────────────────────
function sendOrder() {
  const entries = Object.entries(cart);
  if (!entries.length) return;

  const lines = entries.map(([id, qty]) => {
    const p = CONFIG.productos.find(p => p.id == id);
    return `• ${qty}x ${p.nombre} — ${fmt(p.precio * qty)}`;
  });

  const total = cartTotal();
  const msg = [
    `¡Hola ${CONFIG.nombre}! 👋`,
    `Quiero hacer el siguiente pedido:`,
    ``,
    ...lines,
    ``,
    `*Total: ${fmt(total)}*`,
    ``,
    `¿Está disponible? ¿Cuánto tiempo de espera tienen? 😊`
  ].join('\n');

  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

init();