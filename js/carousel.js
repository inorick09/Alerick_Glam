// ============================================
// ALERICK GLAM — Carruseles del inicio
//   - "Recién llegados": productos con category_new: "Nueva colección"
//     (maquillaje y bisutería).
//   - "Bisutería": 15 productos al azar de products.bisuteria.js, repartidos
//     entre sus categorías (subcategory). Cambian en cada visita.
// Cada uno es una tira que se desplaza sola y se pausa al pasar el mouse o
// tocar. Al hacer clic en una tarjeta se abre el detalle del producto (foto,
// precio, descripción) con el botón de agregar al carrito, que usa
// addProductToCart (cart.js) y por tanto respeta la elección de tono de los
// productos que la piden.
// ============================================
(function () {
  if (typeof PRODUCTS === 'undefined') return;

  const MAX_NEW = 16;
  const BISUTERIA_COUNT = 15;

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const price = v => '$' + Number(v).toLocaleString('es-CO');

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Reparte por turnos entre las subcategorías (cada una barajada) hasta
  // juntar "count" productos, para que no salgan todos del mismo tipo.
  function pickAcrossSubcategories(products, count) {
    const groups = {};
    products.forEach(p => { (groups[p.subcategory || ''] ||= []).push(p); });
    const queues = shuffle(Object.values(groups)).map(shuffle);
    const picked = [];
    while (picked.length < count && queues.some(q => q.length)) {
      for (const q of queues) {
        if (q.length && picked.length < count) picked.push(q.pop());
      }
    }
    return shuffle(picked);
  }

  // ---------- Detalle del producto (una sola ventana para todos los carruseles) ----------
  let modal = null;
  let requestId = 0;

  function ensureModal() {
    if (modal) return modal;
    const overlay = document.createElement('div');
    overlay.className = 'pd-overlay';
    overlay.innerHTML = `
      <div class="pd" role="dialog" aria-modal="true" aria-label="Detalle del producto">
        <button type="button" class="pd__close" aria-label="Cerrar">&times;</button>
        <div class="pd__stage">
          <button type="button" class="pd__nav pd__nav--prev" aria-label="Foto anterior" hidden>&#8249;</button>
          <img class="pd__img" alt="">
          <button type="button" class="pd__nav pd__nav--next" aria-label="Foto siguiente" hidden>&#8250;</button>
        </div>
        <div class="pd__body">
          <h3 class="pd__name"></h3>
          <p class="pd__price"></p>
          <p class="pd__desc"></p>
          <button type="button" class="btn-cart pd__add">Agregar al carrito</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    const el = sel => overlay.querySelector(sel);
    modal = {
      overlay, img: el('.pd__img'), prev: el('.pd__nav--prev'), next: el('.pd__nav--next'),
      name: el('.pd__name'), price: el('.pd__price'), desc: el('.pd__desc'), add: el('.pd__add'),
      images: [], index: 0, product: null
    };
    modal.show = i => {
      modal.index = (i + modal.images.length) % modal.images.length;
      modal.img.src = modal.images[modal.index];
    };
    modal.close = () => {
      overlay.classList.remove('is-open');
      document.body.style.removeProperty('overflow');
    };

    el('.pd__close').addEventListener('click', modal.close);
    overlay.addEventListener('click', e => { if (e.target === overlay) modal.close(); });
    modal.prev.addEventListener('click', () => modal.show(modal.index - 1));
    modal.next.addEventListener('click', () => modal.show(modal.index + 1));
    modal.add.addEventListener('click', () => {
      if (typeof addProductToCart === 'function') addProductToCart(modal.product, modal.img);
    });
    document.addEventListener('keydown', e => {
      if (!overlay.classList.contains('is-open')) return;
      // Si la ventana de tonos está abierta encima, ella maneja el teclado.
      if (document.getElementById('toneModalOverlay')?.classList.contains('is-open')) return;
      if (e.key === 'Escape') modal.close();
      if (e.key === 'ArrowLeft' && modal.images.length > 1) modal.show(modal.index - 1);
      if (e.key === 'ArrowRight' && modal.images.length > 1) modal.show(modal.index + 1);
    });
    return modal;
  }

  function openProduct(product) {
    const m = ensureModal();
    m.product = product;
    m.images = [product.image];
    m.img.alt = product.name;
    m.show(0);
    m.prev.hidden = m.next.hidden = true;
    m.name.textContent = product.name;
    m.price.textContent = price(product.price);
    m.desc.textContent = product.description || '';
    m.desc.hidden = !product.description;
    m.overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Fotos extra (BASE_2.jpg, BASE_3.jpg...): solo maquillaje las usa,
    // igual que en el catálogo (bisutería tiene una sola foto por producto).
    if (product.category === 'maquillaje' && typeof probeExtraImages === 'function') {
      const id = ++requestId;
      probeExtraImages(product.image).then(extras => {
        if (id !== requestId || !extras.length) return;
        m.images = [product.image, ...extras];
        m.prev.hidden = m.next.hidden = false;
      });
    }
  }

  // ---------- Carrusel ----------
  function initCarousel({ sectionId, trackId, items, showTag }) {
    const section = document.getElementById(sectionId);
    const track = document.getElementById(trackId);
    if (!section || !track || !items.length) return;

    const cardsHTML = hidden => items.map(p => `
      <button type="button" class="new-card" data-id="${esc(p.id)}"
         ${hidden ? 'tabindex="-1" aria-hidden="true"' : ''}>
        ${showTag ? '<span class="tag">Nuevo</span>' : ''}
        <img src="${esc(p.image)}" alt="${hidden ? '' : esc(p.name)}" loading="lazy" draggable="false">
        <span class="new-card__name">${esc(p.name)}</span>
        <span class="new-card__price">${price(p.price)}</span>
      </button>`).join('');

    // Se duplica el contenido para que el bucle sea continuo.
    track.innerHTML = cardsHTML(false) + cardsHTML(true);
    track.style.setProperty('--new-duration', Math.max(items.length * 4, 20) + 's');
    section.hidden = false;

    track.addEventListener('click', e => {
      const card = e.target.closest('.new-card');
      const product = card && items.find(p => p.id === card.dataset.id);
      if (product) openProduct(product);
    });
  }

  initCarousel({
    sectionId: 'recien-llegados',
    trackId: 'newCarouselTrack',
    items: PRODUCTS.filter(p => p.category_new === 'Nueva colección').slice(0, MAX_NEW),
    showTag: true
  });

  initCarousel({
    sectionId: 'bisuteria-destacada',
    trackId: 'bisuteriaCarouselTrack',
    items: pickAcrossSubcategories(PRODUCTS.filter(p => p.category === 'bisuteria'), BISUTERIA_COUNT),
    showTag: false
  });
})();
