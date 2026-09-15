// ============================================
// ALERICK GLAM — Pinta el catálogo de productos
// Lee el arreglo PRODUCTS (definido en products.js) y arma las
// tarjetas de producto dentro de #productsGrid, filtrando por
// la categoría indicada en su atributo data-category.
// Si todavía no hay productos en esa categoría, no toca nada.
//
// Si además existen #catalogFilters y/o #catalogFiltersColaboracion en
// el HTML, arma dos grupos de chips que NO se combinan entre sí:
//   - #catalogFilters          → tipo de producto (campo subcategory)
//   - #catalogFiltersColaboracion → colección/colaboración (campo colaboracion)
// Elegir un chip de un grupo desactiva el que estuviera elegido en el
// otro grupo — solo un filtro manda a la vez, nunca los dos juntos.
// Volver a hacer clic en el chip activo lo desactiva y vuelve al
// catálogo sin filtrar. Solo aparecen los valores que ya tienen
// productos cargados. Mientras haya al menos un grupo de chips, el
// catálogo empieza sin productos visibles: solo se muestran al elegir
// un chip.
// ============================================

// Orden fijo en el que deben aparecer los chips de filtro, por
// categoría, cuando existan productos de ese tipo.
const SUBCATEGORY_ORDER = {
  maquillaje: [
    'Rostro', 'Labios', 'Cejas', 'Ojos', 'Colaboraciones',
    'Cuidado Facial', 'Capilar', 'Corporal', 'Accesorios', 'Brochas'
  ],
  bisuteria: [
    'Anillos', 'Aretes', 'Collares', 'Conjuntos', 'Dijes',
    'Earcuff', 'Empaques', 'Pulseras', 'Rosarios', 'Tobilleras'
  ]
};

function formatPriceCOP(value) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value);
}

// Quita tildes/mayúsculas para que la búsqueda encuentre "PLANCHA" con
// "plancha" o "Rímel" con "rimel", sin importar cómo lo escriba la clienta.
function normalizeSearchText(str) {
  return (str || '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

// El nombre del producto debe contener CADA palabra escrita en la
// búsqueda (en cualquier orden) — así "labial mate" encuentra
// "Labial Mate Trendy" pero no "Labial Trendy" a secas.
function matchesSearch(name, query) {
  const words = normalizeSearchText(query).trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return true;
  const normalizedName = normalizeSearchText(name);
  return words.every(word => normalizedName.includes(word));
}

function renderProductCards(grid, items) {
  // Sin la clase "reveal": esas tarjetas las observa script.js una sola
  // vez al cargar la página, antes de que este script las cree, así que
  // se quedarían invisibles para siempre si la lleváramos.
  grid.innerHTML = items.map(p => `
    <article class="product-card">
      <div class="product-card__img" data-zoom-image="${p.image}" data-zoom-name="${p.name}">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="product-card__zoom-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
      </div>
      <div class="product-card__body">
        <h3 title="${p.name}">${p.name}</h3>
        <p class="product-card__desc">${p.description || ''}</p>
        <button type="button" class="product-card__more" hidden>Ver más</button>
        <div class="product-card__foot">
          <span class="price">${formatPriceCOP(p.price)}</span>
          <button type="button" class="btn-cart"
                  data-id="${p.id}" data-name="${p.name}"
                  data-price="${p.price}" data-image="${p.image}">
            ${Array.isArray(p.tonos) && p.tonos.length > 0 ? 'Elegir tono' : 'Agregar'}
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // los botones "Agregar"/"Elegir tono" recién creados necesitan su
  // propio listener — cada uno pasa el producto completo (no solo lo
  // que cabe en data-*) para que addProductToCart (en cart.js) sepa si
  // debe pedir tono antes de agregarlo.
  grid.querySelectorAll('.btn-cart').forEach(btn => {
    const product = items.find(p => p.id === btn.dataset.id);
    if (!product) return;
    // la animación "vuela" desde la foto del producto, no desde el botón
    const imgWrap = btn.closest('.product-card')?.querySelector('.product-card__img');
    btn.addEventListener('click', () => addProductToCart(product, imgWrap || btn));
  });

  // clic en la foto de un producto: la amplía en grande (efecto lupa)
  grid.querySelectorAll('.product-card__img').forEach(imgWrap => {
    imgWrap.addEventListener('click', () => {
      openLightbox(imgWrap.dataset.zoomImage, imgWrap.dataset.zoomName);
    });
  });

  // Las descripciones se recortan a 3 líneas (ver CSS) para que todas
  // las tarjetas queden del mismo tamaño. Si el texto de un producto sí
  // se corta, aparece su botón "Ver más" — si el texto ya cabía completo
  // en esas 3 líneas, el botón se queda oculto (no hace falta).
  grid.querySelectorAll('.product-card__desc').forEach(desc => {
    if (desc.scrollHeight > desc.clientHeight + 1) {
      const moreBtn = desc.nextElementSibling;
      if (moreBtn?.classList.contains('product-card__more')) moreBtn.hidden = false;
    }
  });

  grid.querySelectorAll('.product-card__more').forEach(btn => {
    btn.addEventListener('click', () => {
      const desc = btn.previousElementSibling;
      const expanded = desc.classList.toggle('is-expanded');
      btn.textContent = expanded ? 'Ver menos' : 'Ver más';
    });
  });
}

// ---------- Lupa: amplía la foto del producto al hacer clic ----------
// Crea la ventana emergente una sola vez y la reutiliza para cualquier
// producto que el usuario abra, en cualquiera de las dos páginas.
//
// Además de la foto principal, busca fotos extra del mismo producto:
// si guardas "BAQ584.jpg" y luego "BAQ584_2.jpg", "BAQ584_3.jpg"... en
// la misma carpeta, aparecen solas como galería dentro de la lupa —
// no hace falta editar products.js para eso, solo nombrar los archivos
// siguiendo ese patrón.
let lightboxEls = null;
let lightboxRequestId = 0;

function ensureLightbox() {
  if (lightboxEls) return lightboxEls;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.id = 'lightboxOverlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Imagen ampliada del producto');
  overlay.innerHTML = `
    <figure class="lightbox-overlay__figure">
      <button type="button" class="lightbox-overlay__close" aria-label="Cerrar">&times;</button>
      <div class="lightbox-overlay__stage">
        <button type="button" class="lightbox-overlay__nav lightbox-overlay__nav--prev" aria-label="Foto anterior" hidden>&#8249;</button>
        <img class="lightbox-overlay__img" alt="">
        <button type="button" class="lightbox-overlay__nav lightbox-overlay__nav--next" aria-label="Foto siguiente" hidden>&#8250;</button>
      </div>
      <div class="lightbox-overlay__thumbs" hidden></div>
    </figure>
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector('.lightbox-overlay__img');
  const closeBtn = overlay.querySelector('.lightbox-overlay__close');
  const prevBtn = overlay.querySelector('.lightbox-overlay__nav--prev');
  const nextBtn = overlay.querySelector('.lightbox-overlay__nav--next');
  const thumbsEl = overlay.querySelector('.lightbox-overlay__thumbs');

  const state = { images: [], index: 0, name: '' };

  const showImage = index => {
    state.index = index;
    img.src = state.images[index];
    img.alt = state.name;
    thumbsEl.querySelectorAll('.lightbox-overlay__thumb').forEach((t, i) => {
      t.classList.toggle('is-active', i === index);
    });
  };

  const showPrev = () => showImage((state.index - 1 + state.images.length) % state.images.length);
  const showNext = () => showImage((state.index + 1) % state.images.length);

  const close = () => {
    overlay.classList.remove('is-open');
    document.body.style.removeProperty('overflow');
  };

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  lightboxEls = { overlay, state, showImage, prevBtn, nextBtn, thumbsEl };
  return lightboxEls;
}

function renderLightboxThumbs(images) {
  const { thumbsEl, showImage } = lightboxEls;
  if (images.length < 2) {
    thumbsEl.hidden = true;
    thumbsEl.innerHTML = '';
    return;
  }
  thumbsEl.hidden = false;
  thumbsEl.innerHTML = images.map((src, i) => `
    <button type="button" class="lightbox-overlay__thumb${i === 0 ? ' is-active' : ''}" data-index="${i}">
      <img src="${src}" alt="">
    </button>
  `).join('');
  thumbsEl.querySelectorAll('.lightbox-overlay__thumb').forEach(btn => {
    btn.addEventListener('click', () => showImage(Number(btn.dataset.index)));
  });
}

// Prueba si existen "<nombre>_2.<ext>", "_3.<ext>"... junto a la foto
// principal, cargándolas en un <img> invisible. Se detiene en el
// primer número que no encuentre (no hace falta que estén numeradas
// sin saltos más allá de eso).
function probeExtraImages(src, maxExtra = 6) {
  const match = src.match(/^(.*?)(_\d+)?(\.[^./]+)$/);
  if (!match) return Promise.resolve([]);
  const [, base, , ext] = match;

  const checkOne = n => new Promise(resolve => {
    const testSrc = `${base}_${n}${ext}`;
    const testImg = new Image();
    testImg.onload = () => resolve(testSrc);
    testImg.onerror = () => resolve(null);
    testImg.src = testSrc;
  });

  return (async () => {
    const extras = [];
    for (let n = 2; n <= maxExtra + 1; n++) {
      const found = await checkOne(n);
      if (!found) break;
      extras.push(found);
    }
    return extras;
  })();
}

function openLightbox(src, name) {
  const { overlay, state, showImage, prevBtn, nextBtn, thumbsEl } = ensureLightbox();

  state.name = name || '';
  state.images = [src];
  showImage(0);
  prevBtn.hidden = true;
  nextBtn.hidden = true;
  thumbsEl.hidden = true;
  thumbsEl.innerHTML = '';

  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // Si mientras se busca el usuario abre otra foto, esta respuesta ya
  // no aplica — evita que le peguen fotos de otro producto.
  const requestId = ++lightboxRequestId;
  probeExtraImages(src).then(extras => {
    if (requestId !== lightboxRequestId || !overlay.classList.contains('is-open') || extras.length === 0) return;
    state.images = [src, ...extras];
    renderLightboxThumbs(state.images);
    prevBtn.hidden = false;
    nextBtn.hidden = false;
  });
}

// El aviso "Elige una categoría..." vive fijo en el HTML, justo antes
// de los chips de filtro — aquí solo se muestra/oculta según la página.
function showCatalogPlaceholder(category) {
  const placeholder = document.getElementById('catalogPlaceholder');
  if (!placeholder) return;
  placeholder.hidden = category === 'bisuteria';
}

// Máximo de productos por página, para no cargar todo el catálogo de una vez.
const PAGE_SIZE = 15;

// Números de página a mostrar: siempre primera, última, la actual y sus
// vecinas inmediatas; el resto se resume con "…".
function getPaginationRange(current, total) {
  const delta = 1;
  const range = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }
  const withEllipsis = [];
  let prev = 0;
  for (const i of range) {
    if (prev && i - prev > 1) withEllipsis.push('…');
    withEllipsis.push(i);
    prev = i;
  }
  return withEllipsis;
}

function renderPager(pagerEl, items, page, onPageChange) {
  const totalPages = Math.ceil(items.length / PAGE_SIZE);
  if (totalPages <= 1) {
    pagerEl.hidden = true;
    pagerEl.innerHTML = '';
    return;
  }

  pagerEl.hidden = false;
  const numbersHtml = getPaginationRange(page, totalPages).map(n => (
    n === '…'
      ? `<span class="pager-ellipsis">…</span>`
      : `<button type="button" class="pager-num${n === page ? ' is-active' : ''}" data-page="${n}" ${n === page ? 'aria-current="page"' : ''}>${n}</button>`
  )).join('');

  pagerEl.innerHTML = `
    <button type="button" class="pager-btn" data-page="${page - 1}" ${page <= 1 ? 'disabled' : ''}>← Anterior</button>
    <div class="pager-numbers">${numbersHtml}</div>
    <button type="button" class="pager-btn" data-page="${page + 1}" ${page >= totalPages ? 'disabled' : ''}>Siguiente →</button>
  `;

  pagerEl.querySelectorAll('.pager-btn:not(:disabled), .pager-num:not(.is-active)').forEach(btn => {
    btn.addEventListener('click', () => onPageChange(Number(btn.dataset.page)));
  });
}

function renderPage(grid, pagerEl, items, page) {
  const start = (page - 1) * PAGE_SIZE;
  renderProductCards(grid, items.slice(start, start + PAGE_SIZE));
  renderPager(pagerEl, items, page, newPage => {
    renderPage(grid, pagerEl, items, newPage);
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// Valores presentes de "field" entre los productos, para armar los
// chips de un grupo de filtro. Si se pasa "order" (lista fija, como
// SUBCATEGORY_ORDER), respeta ese orden; si no, los ordena alfabéticamente
// — así sirve tanto para subcategory (orden curado) como para
// colaboracion (texto libre, sin lista fija de valores posibles).
function getPresentFilterValues(items, field, order) {
  if (order) {
    return order.filter(value => items.some(p => p[field] === value));
  }
  const values = new Set();
  items.forEach(p => { if (p[field]) values.add(p[field]); });
  return [...values].sort((a, b) => a.localeCompare(b, 'es'));
}

// Arma un grupo de chips dentro de filtersEl. onToggle(value) se llama
// cada vez que cambia la selección de este grupo — con el valor elegido,
// o null si el usuario desactivó el chip que tenía activo.
function setupFilterGroup(filtersEl, values, onToggle) {
  if (!filtersEl || values.length === 0) {
    if (filtersEl) filtersEl.hidden = true;
    return false;
  }

  filtersEl.hidden = false;
  // Ningún chip empieza activo: el catálogo solo muestra productos
  // cuando el usuario elige uno.
  filtersEl.innerHTML = values.map(label => `
    <button type="button" class="filter-chip" data-filter="${label}">
      ${label}
    </button>
  `).join('');

  filtersEl.addEventListener('click', e => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;

    const alreadyActive = chip.classList.contains('is-active');
    filtersEl.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('is-active'));

    if (alreadyActive) {
      onToggle(null);
      return;
    }
    chip.classList.add('is-active');
    onToggle(chip.dataset.filter);
  });

  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productsGrid');
  if (!grid || typeof PRODUCTS === 'undefined') return;

  const category = grid.dataset.category;
  const items = PRODUCTS.filter(p => p.category === category);
  if (items.length === 0) return;

  const pagerEl = document.createElement('div');
  pagerEl.className = 'catalog-pager';
  pagerEl.hidden = true;
  grid.insertAdjacentElement('afterend', pagerEl);

  // Estado de los dos filtros de chip — nunca los dos a la vez: elegir
  // uno limpia el otro (ver más abajo) — más la búsqueda por nombre, que
  // sí se combina con cualquiera de los dos (afina lo que ya esté filtrado).
  const state = { subcategory: null, colaboracion: null, search: '' };

  const applyFilters = () => {
    const hasFilter = state.subcategory || state.colaboracion || state.search.trim();

    if (!hasFilter) {
      // Sin ningún chip activo: se vuelve al estado inicial, con el
      // aviso de "elige..." y las secciones extra visibles de nuevo.
      grid.innerHTML = '';
      pagerEl.hidden = true;
      pagerEl.innerHTML = '';
      showCatalogPlaceholder(category);
      document.querySelector('.catalog-extra')?.removeAttribute('hidden');
      document.querySelector('.page-hero__contact')?.removeAttribute('hidden');
      return;
    }

    // Al elegir un chip, la página se enfoca solo en los productos: se
    // ocultan el aviso de "elige...", la sección extra (materiales /
    // marcas) y la nota de contacto por WhatsApp.
    document.getElementById('catalogPlaceholder')?.setAttribute('hidden', '');
    document.querySelector('.catalog-extra')?.setAttribute('hidden', '');
    document.querySelector('.page-hero__contact')?.setAttribute('hidden', '');

    const filtered = items.filter(p =>
      (!state.subcategory || p.subcategory === state.subcategory) &&
      (!state.colaboracion || p.colaboracion === state.colaboracion) &&
      matchesSearch(p.name, state.search)
    );
    renderPage(grid, pagerEl, filtered, 1);
  };

  const subcategoryValues = getPresentFilterValues(items, 'subcategory', SUBCATEGORY_ORDER[category]);
  const colaboracionValues = getPresentFilterValues(items, 'colaboracion');

  const filtersElSubcategory = document.getElementById('catalogFilters');
  const filtersElColaboracion = document.getElementById('catalogFiltersColaboracion');

  // Quita el chip activo (si hay uno) del otro grupo, para que los dos
  // grupos nunca filtren a la vez.
  const clearActiveChip = filtersEl => {
    filtersEl?.querySelectorAll('.filter-chip.is-active').forEach(b => b.classList.remove('is-active'));
  };

  const hasSubcategoryFilter = setupFilterGroup(
    filtersElSubcategory,
    subcategoryValues,
    value => {
      state.subcategory = value;
      if (value) {
        state.colaboracion = null;
        clearActiveChip(filtersElColaboracion);
      }
      applyFilters();
    }
  );
  const hasColaboracionFilter = setupFilterGroup(
    filtersElColaboracion,
    colaboracionValues,
    value => {
      state.colaboracion = value;
      if (value) {
        state.subcategory = null;
        clearActiveChip(filtersElSubcategory);
      }
      applyFilters();
    }
  );

  // Buscador por nombre (la lupa): funciona sola, sin necesidad de
  // elegir antes un chip, y se combina con el chip activo si hay uno.
  const searchInput = document.getElementById('catalogSearch');
  const searchClear = document.getElementById('catalogSearchClear');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      state.search = searchInput.value;
      if (searchClear) searchClear.hidden = state.search.trim() === '';
      applyFilters();
    });
  }
  if (searchClear) {
    searchClear.addEventListener('click', () => {
      state.search = '';
      searchInput.value = '';
      searchClear.hidden = true;
      applyFilters();
      searchInput.focus();
    });
  }

  // Si hay al menos un grupo de chips, el catálogo empieza sin
  // productos visibles: solo se muestran al elegir uno. Si no hay
  // ningún dato de filtro, no hay nada que elegir y se muestran todos
  // los productos ya mismo (paginados de a PAGE_SIZE).
  if (hasSubcategoryFilter || hasColaboracionFilter) {
    showCatalogPlaceholder(category);
  } else {
    renderPage(grid, pagerEl, items, 1);
  }
});
