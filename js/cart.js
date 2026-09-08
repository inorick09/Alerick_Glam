// ============================================
// ALERICK GLAM — Carrito de compras
// Para agregar un producto real al carrito, usa un botón así:
// <button type="button" class="btn-cart"
//         data-id="id-unico" data-name="Nombre" data-price="35000" data-image="ruta/imagen.jpg">
//   Agregar
// </button>
// (Los productos del catálogo se agregan editando js/products.js,
// no hace falta tocar botones a mano — ver ese archivo.)
//
// El botón "Enviar pedido" del carrito manda el pedido a una hoja
// de Google Sheets (para que quede registrado) usando la URL de
// ORDER_ENDPOINT de abajo. Instrucciones para crear y conectar esa
// hoja: ver GOOGLE_SHEETS_SETUP.md en la raíz del repositorio.
// ============================================

const CART_KEY = 'alerickglam-cart';
const WHATSAPP_NUMBER = '573112894267';

// Pega aquí la URL que te da Google al desplegar el Apps Script
// como aplicación web (termina en /exec). Mientras diga
// "PENDIENTE_CONFIGURAR", el pedido no se podrá enviar solo y el
// formulario le ofrecerá al cliente el enlace de WhatsApp como
// alternativa.
const ORDER_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxoHtXUzr_4CMtDpmZeh_C2wM7B--BwysGsn5-fqpf2QxGSWoYVGEdx94phqTmVkvLYFg/exec';

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

function buildWhatsAppMessage(cart, customer) {
  const lines = cart.map(i => `• ${i.qty}x ${i.name} — ${formatPrice(i.price * i.qty)}`).join('\n');
  const datos = customer
    ? `\n\nMis datos:\nNombre: ${customer.nombre}\nTeléfono: ${customer.telefono}\nCiudad/dirección: ${customer.ciudad}${customer.notas ? `\nNotas: ${customer.notas}` : ''}`
    : '';
  return `Hola Alerick Glam, quiero pedir:\n${lines}\n\nTotal: ${formatPrice(cartTotal(cart))}${datos}`;
}

function whatsAppLink(cart, customer) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(cart, customer))}`;
}

function renderCart() {
  const cart = getCart();
  const body = document.getElementById('cartBody');
  const totalEl = document.getElementById('cartTotal');
  const badge = document.getElementById('cartBadge');
  const submitBtn = document.getElementById('cartCheckout');
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
  if (submitBtn) submitBtn.disabled = cart.length === 0;
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

function setCheckoutStatus(message, kind) {
  const el = document.getElementById('checkoutStatus');
  if (!el) return;
  el.textContent = message || '';
  el.className = 'checkout-status' + (kind ? ` checkout-status--${kind}` : '');
}

async function submitOrder(customer) {
  const cart = getCart();
  const payload = {
    nombre: customer.nombre,
    telefono: customer.telefono,
    ciudad: customer.ciudad,
    notas: customer.notas || '',
    productos: cart.map(i => ({ nombre: i.name, cantidad: i.qty, precio: i.price })),
    total: cartTotal(cart)
  };

  if (!ORDER_ENDPOINT || ORDER_ENDPOINT === 'PENDIENTE_CONFIGURAR') {
    throw new Error('endpoint-no-configurado');
  }

  const res = await fetch(ORDER_ENDPOINT, {
    method: 'POST',
    // text/plain evita el preflight CORS que Google Apps Script no responde bien.
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('respuesta-no-ok');
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  document.getElementById('cartToggle')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });

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

  const form = document.getElementById('checkoutForm');
  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const cart = getCart();
    if (cart.length === 0) return;

    const customer = {
      nombre: form.nombre.value.trim(),
      telefono: form.telefono.value.trim(),
      ciudad: form.ciudad.value.trim(),
      notas: form.notas.value.trim()
    };

    const submitBtn = document.getElementById('cartCheckout');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    setCheckoutStatus('', null);

    try {
      await submitOrder(customer);
      setCheckoutStatus('¡Pedido enviado! Te contactaremos pronto por WhatsApp para confirmar. 💌', 'ok');
      saveCart([]);
      form.reset();
      renderCart();
    } catch (err) {
      const link = whatsAppLink(cart, customer);
      setCheckoutStatus('', null);
      const el = document.getElementById('checkoutStatus');
      if (el) {
        el.className = 'checkout-status checkout-status--error';
        el.innerHTML = `No pudimos enviar tu pedido automáticamente. <a href="${link}" target="_blank" rel="noopener">Envíalo por WhatsApp</a> y lo confirmamos igual.`;
      }
    } finally {
      submitBtn.textContent = 'Enviar pedido';
      submitBtn.disabled = getCart().length === 0;
    }
  });
});
