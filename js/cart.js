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
const ORDER_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzVfJJwBB9MldhU3zIn1XC_8KzGmNRfn8vsPpW66urK_VUzU46RcspYybzAzfvb3YKeNQ/exec';

// Clave que el script de Google revisa antes de guardar un pedido, para
// que no cualquiera pueda escribirle a la hoja directamente sin pasar
// por el sitio. Debe ser IDÉNTICA a SECRET_TOKEN dentro del Apps Script
// (ver GOOGLE_SHEETS_SETUP.md). Si alguna vez quieres cambiarla, actualiza
// los dos lados a la vez.
const ORDER_TOKEN = '5EJmuaJk2m_XfyP-4WJGBZ2Cv1AIfBKs';

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
  // A propósito no abrimos el carrito aquí: la clienta sigue viendo el
  // catálogo y ve la animación de abajo confirmando que se agregó; ella
  // decide cuándo abrir el carrito para revisar o pagar.
}

// ---------- Animación al agregar ----------
// Una miniatura de la foto "vuela" desde donde se hizo clic hasta el
// ícono del carrito, y el ícono rebota al llegar — así la clienta ve
// que sí se agregó sin que el carrito se le abra encima.
function flyToCart(sourceEl, imageSrc) {
  const cartBtn = document.getElementById('cartToggle');
  if (!cartBtn || !imageSrc) return;

  const cartRect = cartBtn.getBoundingClientRect();
  const startRect = sourceEl?.getBoundingClientRect();
  const origin = (startRect && startRect.width > 0 && startRect.height > 0)
    ? startRect
    : { left: window.innerWidth / 2 - 24, top: window.innerHeight / 2 - 24, width: 48, height: 48 };

  const flyer = document.createElement('img');
  flyer.src = imageSrc;
  flyer.className = 'fly-to-cart';
  flyer.style.left = `${origin.left + origin.width / 2 - 24}px`;
  flyer.style.top = `${origin.top + origin.height / 2 - 24}px`;
  document.body.appendChild(flyer);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const dx = (cartRect.left + cartRect.width / 2) - (origin.left + origin.width / 2);
      const dy = (cartRect.top + cartRect.height / 2) - (origin.top + origin.height / 2);
      flyer.style.transform = `translate(${dx}px, ${dy}px) scale(0.15)`;
      flyer.style.opacity = '0.3';
    });
  });

  let cleaned = false;
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    flyer.remove();
    pulseCartIcon();
  };
  flyer.addEventListener('transitionend', cleanup, { once: true });
  // Respaldo por si el navegador no dispara transitionend (pestaña en
  // segundo plano, elemento removido, etc.) — la miniatura no se queda pegada.
  setTimeout(cleanup, 900);
}

function pulseCartIcon() {
  const cartBtn = document.getElementById('cartToggle');
  if (!cartBtn) return;
  cartBtn.classList.remove('cart-toggle--bump');
  void cartBtn.offsetWidth; // fuerza reflow para poder repetir la animación
  cartBtn.classList.add('cart-toggle--bump');
  cartBtn.addEventListener('animationend', () => cartBtn.classList.remove('cart-toggle--bump'), { once: true });
}

// ---------- Selección de tono obligatoria ----------
// Si un producto trae "tonos" en products.js (una lista de opciones),
// el botón "Agregar" no lo mete directo al carrito: primero abre esta
// ventanita para que la clienta elija uno. Los productos sin "tonos"
// siguen agregándose igual que siempre, sin este paso de más.
let toneModalEls = null;
let toneModalRequestId = 0;

function ensureToneModal() {
  if (toneModalEls) return toneModalEls;

  const overlay = document.createElement('div');
  overlay.className = 'tone-modal-overlay';
  overlay.id = 'toneModalOverlay';
  overlay.innerHTML = `
    <div class="tone-modal" role="dialog" aria-modal="true" aria-label="Tonos disponibles">
      <button type="button" class="tone-modal__close" aria-label="Cerrar">&times;</button>
      <div class="tone-modal__stage" hidden>
        <button type="button" class="tone-modal__nav tone-modal__nav--prev" aria-label="Foto anterior" hidden>&#8249;</button>
        <img class="tone-modal__extra-img" alt="">
        <button type="button" class="tone-modal__nav tone-modal__nav--next" aria-label="Foto siguiente" hidden>&#8250;</button>
      </div>
      <p class="tone-modal__eyebrow">Tonos disponibles:</p>
      <div class="tone-modal__options"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const optionsEl = overlay.querySelector('.tone-modal__options');
  const closeBtn = overlay.querySelector('.tone-modal__close');
  const stageEl = overlay.querySelector('.tone-modal__stage');
  const extraImgEl = overlay.querySelector('.tone-modal__extra-img');
  const prevBtn = overlay.querySelector('.tone-modal__nav--prev');
  const nextBtn = overlay.querySelector('.tone-modal__nav--next');

  // "images" siempre trae las fotos de tono en orden (BASE_2, BASE_3...),
  // nunca la foto principal del producto — por eso la lupa siempre abre
  // mostrando la que termina en _2.
  const imgState = { images: [], index: 0 };
  const showToneImage = i => {
    imgState.index = (i + imgState.images.length) % imgState.images.length;
    extraImgEl.src = imgState.images[imgState.index];
  };

  const close = () => {
    overlay.classList.remove('is-open');
    document.body.style.removeProperty('overflow');
  };

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => showToneImage(imgState.index - 1));
  nextBtn.addEventListener('click', () => showToneImage(imgState.index + 1));
  overlay.addEventListener('click', e => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') showToneImage(imgState.index - 1);
    if (e.key === 'ArrowRight') showToneImage(imgState.index + 1);
  });

  toneModalEls = { overlay, optionsEl, close, stageEl, extraImgEl, prevBtn, nextBtn, imgState, showToneImage };
  return toneModalEls;
}

function openToneModal(product, sourceEl) {
  const { overlay, optionsEl, stageEl, extraImgEl, prevBtn, nextBtn, imgState, showToneImage } = ensureToneModal();

  stageEl.hidden = true;
  prevBtn.hidden = true;
  nextBtn.hidden = true;
  extraImgEl.removeAttribute('src');
  imgState.images = [];

  // Busca "BASE_2.jpg", "BASE_3.jpg"... junto a la foto principal (mismo
  // patrón de nombres que usa la lupa del catálogo, en catalog.js). Si
  // hay más de una, aparecen las flechitas para pasarlas; si solo existe
  // la _2, se muestra sola, sin flechas.
  const requestId = ++toneModalRequestId;
  probeExtraImages(product.image).then(extras => {
    if (requestId !== toneModalRequestId || extras.length === 0) return;
    imgState.images = extras;
    extraImgEl.alt = product.name;
    showToneImage(0);
    stageEl.hidden = false;
    if (extras.length > 1) {
      prevBtn.hidden = false;
      nextBtn.hidden = false;
    }
  });

  optionsEl.innerHTML = product.tonos.map(tono => `
    <button type="button" class="tone-modal__option" data-tono="${tono}">${tono}</button>
  `).join('');
  optionsEl.querySelectorAll('.tone-modal__option').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart({
        id: `${product.id}::${btn.dataset.tono}`,
        name: `${product.name} — Tono: ${btn.dataset.tono}`,
        price: product.price,
        image: product.image
      });
      close();
      flyToCart(sourceEl, product.image);
    });
  });

  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

// Punto de entrada del botón "Agregar"/"Elegir tono" de cada tarjeta:
// decide si el producto necesita que elijan tono primero o si se puede
// agregar directo. "sourceEl" es el botón que se hizo clic, para que la
// animación de abajo sepa desde dónde "volar" hasta el carrito.
function addProductToCart(product, sourceEl) {
  if (Array.isArray(product.tonos) && product.tonos.length > 0) {
    openToneModal(product, sourceEl);
    return;
  }
  addToCart({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image
  });
  flyToCart(sourceEl, product.image);
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
  let datos = '';
  if (customer) {
    const partes = [`Nombre: ${customer.nombre}`];
    if (customer.clienta === 'recurrente') partes.push('Clienta recurrente');
    if (customer.telefono) partes.push(`Teléfono: ${customer.telefono}`);
    if (customer.ciudad) partes.push(`Ciudad/dirección: ${customer.ciudad}`);
    if (customer.notas) partes.push(`Notas: ${customer.notas}`);
    datos = `\n\nMis datos:\n${partes.join('\n')}`;
  }
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
    token: ORDER_TOKEN,
    clienta: customer.clienta,
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

  // Apps Script siempre responde HTTP 200, incluso cuando el script
  // rechaza el pedido (token inválido, límite de envíos alcanzado,
  // etc.) — por eso hay que revisar el cuerpo de la respuesta también.
  const data = await res.json().catch(() => null);
  if (!data || data.ok !== true) throw new Error('pedido-rechazado');
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
      flyToCart(btn, btn.dataset.image);
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
  const extraFields = document.getElementById('checkoutExtraFields');

  // Clienta nueva: hay que diligenciar teléfono y ciudad (además de
  // nombre y notas, que siempre se piden). Clienta recurrente: con
  // nombre y notas basta, teléfono y ciudad se ocultan.
  form?.querySelectorAll('input[name="clienta"]').forEach(input => {
    input.addEventListener('change', () => {
      const isNew = input.value === 'nueva' && input.checked;
      if (!extraFields) return;
      extraFields.hidden = !isNew;
      form.telefono.required = isNew;
      form.ciudad.required = isNew;
      if (!isNew) {
        form.telefono.value = '';
        form.ciudad.value = '';
      }
    });
  });

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const cart = getCart();
    if (cart.length === 0) return;

    const clienta = form.querySelector('input[name="clienta"]:checked')?.value || '';
    const isNew = clienta === 'nueva';

    const customer = {
      clienta,
      nombre: form.nombre.value.trim(),
      telefono: isNew ? form.telefono.value.trim() : '',
      ciudad: isNew ? form.ciudad.value.trim() : '',
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
