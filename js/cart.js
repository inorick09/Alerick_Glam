// ============================================
// ALERICK GLAM — Carrito de compras
// Para agregar un producto real al carrito, usa un botón así:
// <button type="button" class="btn-cart"
//         data-id="id-unico" data-name="Nombre" data-price="35000" data-image="ruta/imagen.jpg">
//   Agregar
// </button>
// ============================================

const CART_KEY = 'alerickglam-cart';
const WHATSAPP_NUMBER = '573112894267';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function formatPrice(value) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value);
}

function cartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartCount(cart) {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function addToCart({ id, name, price, image }) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price: Number(price) || 0, image: image || '', qty: 1 });
  }
  saveCart(cart);
  renderCart();
  openCart();
}

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  saveCart(item.qty > 0 ? cart : cart.filter(i => i.id !== id));
  renderCart();
}

function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
  renderCart();
}

function renderCart() {
  const cart = getCart();
  const body = document.getElementById('cartBody');
  const totalEl = document.getElementById('cartTotal');
  const badge = document.getElementById('cartBadge');
  const checkout = document.getElementById('cartCheckout');
  if (!body) return;

  const count = cartCount(cart);
  if (badge) {
    badge.textContent = count;
    badge.hidden = count === 0;
  }

  if (cart.length === 0) {
    body.innerHTML = '<p class="cart-empty">Tu carrito está vacío. Muy pronto vas a poder agregar productos desde Maquillaje, Bisutería y Lo nuevo. 🛍️</p>';
  } else {
    body.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item__img">${item.image ? `<img src="${item.image}" alt="">` : ''}</div>
        <div>
          <p class="cart-item__name">${item.name}</p>
          <span class="cart-item__price">${formatPrice(item.price)}</span>
          <div class="cart-item__qty">
            <button type="button" data-action="dec" aria-label="Restar">−</button>
            <span>${item.qty}</span>
            <button type="button" data-action="inc" aria-label="Sumar">+</button>
          </div>
        </div>
        <button type="button" class="cart-item__remove" data-action="remove">Quitar</button>
      </div>
    `).join('');
  }

  if (totalEl) totalEl.textContent = formatPrice(cartTotal(cart));

  if (checkout) {
    if (cart.length === 0) {
      checkout.setAttribute('aria-disabled', 'true');
      checkout.href = '#';
    } else {
      checkout.removeAttribute('aria-disabled');
      const lines = cart.map(i => `• ${i.qty}x ${i.name} — ${formatPrice(i.price * i.qty)}`).join('\n');
      const message = `Hola Alerick Glam, quiero pedir:\n${lines}\n\nTotal: ${formatPrice(cartTotal(cart))}`;
      checkout.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }
  }
}

function openCart() {
  document.getElementById('cartOverlay')?.removeAttribute('hidden');
  requestAnimationFrame(() => {
    document.getElementById('cartOverlay')?.classList.add('is-open');
    document.getElementById('cartDrawer')?.classList.add('is-open');
  });
  document.getElementById('cartDrawer')?.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('is-open');
  document.getElementById('cartOverlay')?.classList.remove('is-open');
  document.getElementById('cartDrawer')?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => document.getElementById('cartOverlay')?.setAttribute('hidden', ''), 300);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  document.getElementById('cartToggle')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });

  document.getElementById('cartCheckout')?.addEventListener('click', e => {
    if (e.currentTarget.getAttribute('aria-disabled') === 'true') e.preventDefault();
  });

  document.querySelectorAll('.btn-cart').forEach(btn => {
    if (btn.disabled) return;
    btn.addEventListener('click', () => {
      addToCart({
        id: btn.dataset.id,
        name: btn.dataset.name,
        price: btn.dataset.price,
        image: btn.dataset.image
      });
    });
  });

  document.getElementById('cartBody')?.addEventListener('click', e => {
    const actionBtn = e.target.closest('button[data-action]');
    if (!actionBtn) return;
    const id = actionBtn.closest('.cart-item')?.dataset.id;
    if (!id) return;
    if (actionBtn.dataset.action === 'inc') changeQty(id, 1);
    if (actionBtn.dataset.action === 'dec') changeQty(id, -1);
    if (actionBtn.dataset.action === 'remove') removeFromCart(id);
  });
});
