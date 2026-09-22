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
      if (typeof addProductToCart !== 'function') return;
      addProductToCart(modal.product, modal.img);
      const needsTone = Array.isArray(modal.product.tonos) && modal.product.tonos.length > 0;
      if (!needsTone) modal.close();
    });
    // Después de elegir un tono (o agregar directo) la ventana se cierra para
    // que la clienta vea la animación hacia el carrito y siga navegando.
    document.addEventListener('click', e => {
      if (e.target.closest('.tone-modal__option')) modal.close();
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

  // ---------- Movimiento del carrusel ----------
  // Ojo: esto NO usa el scroll nativo del navegador (scrollLeft). Se mueve
  // aplicando "transform" con JavaScript, y el arrastre con el dedo también
  // se calcula a mano con eventos "pointer". Se hizo así porque con scroll
  // nativo, en Android Chrome tocar una tarjeta mientras la tira se mueve
  // sola hace que el navegador interprete el toque como "frenar el scroll":
  // ni dispara el clic para abrir el producto, ni deja pasar el gesto para
  // que la página baje. Manejando el movimiento nosotros mismos evitamos
  // ese conflicto: un toque corto siempre abre el producto, arrastrar de
  // lado mueve el carrusel, y un gesto vertical se le deja completo a la
  // página (ver también "touch-action: pan-y" en el CSS).
  const SPEED = 40; // píxeles por segundo, movimiento solo
  const RESUME_DELAY = 2500; // ms después de soltar el dedo (tras arrastrar)
  const TAP_SLOP = 8; // px de margen para distinguir un toque de un arrastre

  const isModalOpen = () =>
    !!document.querySelector('.pd-overlay.is-open, .tone-modal-overlay.is-open, .lightbox-overlay.is-open');

  function startCarouselMotion(viewport, track) {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    // El ancho de una copia se mide una sola vez (al iniciar y si cambia el
    // tamaño de pantalla), nunca dentro del bucle de animación: leerlo en
    // cada cuadro obliga al navegador a recalcular el diseño constantemente.
    let unit = 0;
    const measure = () => { unit = track.scrollWidth / 3; };

    let offset = 0;   // px ya recorridos hacia la izquierda
    let paused = false;
    let dragging = false;
    let resumeTimer = null;
    let last = 0;
    let visible = true;

    const applyTransform = () => { track.style.transform = `translateX(${-offset}px)`; };
    const wrapOffset = () => {
      if (!unit) return;
      while (offset >= 2 * unit) offset -= unit;
      while (offset < unit) offset += unit;
    };
    const pause = () => { paused = true; clearTimeout(resumeTimer); };
    const resumeLater = delay => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { paused = false; }, delay);
    };

    // ---- Arrastre manual (dedo, mouse o lápiz, todo con Pointer Events) ----
    let pointerId = null, startX = 0, startY = 0, startOffset = 0, isDrag = false, startTarget = null;

    viewport.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      startOffset = offset;
      startTarget = e.target;
      isDrag = false;
      dragging = true;
      pause();
    });

    viewport.addEventListener('pointermove', e => {
      if (e.pointerId !== pointerId) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (!isDrag) {
        if (Math.abs(dx) < TAP_SLOP && Math.abs(dy) < TAP_SLOP) return; // podría ser aún un toque
        if (Math.abs(dx) <= Math.abs(dy)) {
          // Gesto vertical: se suelta para que la página haga scroll normal.
          pointerId = null;
          dragging = false;
          resumeLater(0);
          return;
        }
        isDrag = true;
        try { viewport.setPointerCapture(pointerId); } catch {}
      }
      offset = startOffset - dx;
      wrapOffset();
      applyTransform();
    });

    const endDrag = e => {
      if (pointerId === null || e.pointerId !== pointerId) return;
      const wasTap = !isDrag;
      const target = startTarget;
      pointerId = null;
      dragging = false;
      resumeLater(wasTap ? 400 : RESUME_DELAY);
      if (wasTap && e.pointerType !== 'mouse') {
        // En touch/lápiz se abre directo (sin esperar el "click" nativo):
        // así no depende de que el navegador decida disparar el clic.
        const card = target?.closest?.('.new-card');
        card?.click();
      }
    };
    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);

    // Mouse: pausa mientras está encima. (No se usa :hover de CSS porque en
    // el celular se queda "pegado" después de tocar.)
    viewport.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') pause(); });
    viewport.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse' && !dragging) resumeLater(0); });
    viewport.addEventListener('wheel', () => { pause(); resumeLater(RESUME_DELAY); }, { passive: true });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }).observe(viewport);
    }
    if ('ResizeObserver' in window) {
      new ResizeObserver(() => { measure(); wrapOffset(); applyTransform(); }).observe(track);
    } else {
      window.addEventListener('resize', measure);
    }

    // Se espera a que carguen las fotos para conocer el ancho real de las copias.
    const init = () => {
      measure();
      if (!unit) return requestAnimationFrame(init);
      offset = unit;
      applyTransform();
      if (reduceMotion) return;
      const tick = t => {
        const dt = last ? Math.min(t - last, 100) : 0;
        last = t;
        if (!paused && !dragging && visible && !document.hidden && unit && !isModalOpen()) {
          offset += (SPEED * dt) / 1000;
          wrapOffset();
          applyTransform();
        }
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    init();
  }

  // ---------- Carrusel ----------
  function initCarousel({ sectionId, trackId, items, showTag }) {
    const section = document.getElementById(sectionId);
    const track = document.getElementById(trackId);
    const viewport = track?.parentElement;
    if (!section || !track || !viewport || !items.length) return;

    const cardsHTML = hidden => items.map(p => `
      <button type="button" class="new-card" data-id="${esc(p.id)}"
         ${hidden ? 'tabindex="-1" aria-hidden="true"' : ''}>
        ${showTag ? '<span class="tag">Nuevo</span>' : ''}
        <img src="${esc(p.image)}" alt="${hidden ? '' : esc(p.name)}" loading="lazy" draggable="false">
        <span class="new-card__name">${esc(p.name)}</span>
        <span class="new-card__price">${price(p.price)}</span>
      </button>`).join('');

    // Tres copias seguidas: se arranca en la del medio y, al llegar a una
    // orilla, se salta una copia atrás/adelante sin que se note (bucle infinito
    // tanto al moverse sola como al deslizar con el dedo).
    track.innerHTML = cardsHTML(false) + cardsHTML(true) + cardsHTML(true);
    section.hidden = false;
    startCarouselMotion(viewport, track);

    // "click" cubre el toque en mouse/teclado; en touch/lápiz, el toque ya
    // se detectó a mano en startCarouselMotion (ver comentario ahí arriba),
    // que dispara este mismo evento con card.click() — así solo hay un
    // lugar que decide qué producto abrir.
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
