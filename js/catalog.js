// ============================================
// ALERICK GLAM — Pinta el catálogo de productos
// Lee el arreglo PRODUCTS (definido en products.js) y arma las
// tarjetas de producto dentro de #productsGrid, filtrando por
// la categoría indicada en su atributo data-category.
// Si todavía no hay productos en esa categoría, no toca nada.
//
// Si además existen #catalogFilters, #catalogFiltersColaboracion y/o
// #catalogFiltersAge en el HTML, arma hasta cuatro grupos de chips que NO
// se combinan entre sí:
//   - #catalogFilters          → tipo de producto (campo subcategory)
//   - #catalogFiltersColaboracion → colección/colaboración (campo colaboracion)
//   - #catalogFiltersAge       → categoría por edad (campo category_age)
//   - #catalogFiltersNew       → novedades (campo category_new)
//   - #catalogFiltersMaterial  → material (campo material, solo bisutería)
// Elegir un chip de un grupo desactiva el que estuviera elegido en los
// otros grupos — solo un filtro manda a la vez, nunca dos juntos. Las
// excepciones: en tipo de producto se pueden marcar varios chips a la vez
// (Anillos + Aretes), y material (uno solo) se combina con esos tipos
// (Anillos + Aretes en Rodio) para afinar lo que ya está filtrado.
// Volver a hacer clic en el chip activo lo desactiva y vuelve al
// catálogo sin filtrar. Solo aparecen los valores que ya tienen
// productos cargados. Sin ningún chip elegido se muestra todo el
// catálogo (primero lo de "Nueva colección", luego el resto, cada parte
// en orden aleatorio), paginado de a PAGE_SIZE.
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

// Icono redondo (images/iconos/<archivo>.svg) que acompaña a cada chip de
// filtro. Los valores que no estén aquí se muestran como pastilla de texto.
const FILTER_ICONS = {
  'Nueva colección': 'nueva-coleccion', 'Oferta': 'oferta',
  'Rostro': 'rostro', 'Labios': 'labios', 'Cejas': 'cejas', 'Ojos': 'ojos',
  'Colaboraciones': 'colaboraciones', 'Cuidado Facial': 'cuidado-facial',
  'Capilar': 'capilar', 'Corporal': 'corporal', 'Accesorios': 'accesorios',
  'Brochas': 'brochas',
  'Disney': 'disney', 'Mattel': 'mattel', 'Barbie': 'mattel', 'Paramount': 'paramount',
  'Para niñas': 'para-ninas', 'Niñas': 'para-ninas',
  'Anillos': 'anillos', 'Aretes': 'aretes', 'Collares': 'collares',
  'Conjuntos': 'conjuntos', 'Dijes': 'dijes', 'Earcuff': 'earcuff',
  'Empaques': 'empaques', 'Pulseras': 'pulseras', 'Rosarios': 'rosarios',
  'Tobilleras': 'tobilleras',
  'Rodio': 'rodio', 'Oro Goldfield': 'oro-goldfield', 'Acero': 'acero',
  'Covergold': 'covergold', 'Zamak': 'zamak', 'Acrílico': 'acrilico',
  'Fantasía': 'fantasia', 'Plata Ley 925': 'plata-925',
  'Oro Laminado 18K': 'oro-laminado'
};

// Orden fijo de los chips de material; los que no estén en la lista van
// al final, en orden alfabético.
const MATERIAL_ORDER = ['Plata Ley 925', 'Oro Laminado 18K', 'Rodio', 'Oro Goldfield', 'Acero', 'Covergold', 'Zamak', 'Acrílico', 'Fantasía'];

// Una pieza puede combinar materiales ("Acero - Oro Goldfield"): se
// separan para que aparezca en el filtro de cada uno.
function getMaterials(p) {
  return (p.material || '').split(' - ').map(m => m.trim()).filter(Boolean);
}

// Anillos con varias tallas a distinto precio: la tarjeta muestra
// "Desde" con el precio más bajo (el campo price).
function hasPriceRange(p) {
  return Array.isArray(p.tallas) && new Set(p.tallas.map(t => t.price)).size > 1;
}

// Mezcla el arreglo en su lugar (Fisher–Yates).
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

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

// El nombre del producto debe contener AL MENOS UNA de las palabras
// escritas en la búsqueda — así "delineador azul" encuentra tanto los
// delineadores como los productos azules, sin importar cuántas palabras
// se escriban ni el orden.
function matchesSearch(name, query) {
  const words = normalizeSearchText(query).trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return true;
  const normalizedName = normalizeSearchText(name);
  return words.some(word => normalizedName.includes(word));
}

function renderProductCards(grid, items) {
  // Sin la clase "reveal": esas tarjetas las observa script.js una sola
  // vez al cargar la página, antes de que este script las cree, así que
  // se quedarían invisibles para siempre si la lleváramos.
  grid.innerHTML = items.map(p => `
    <article class="product-card">
      <div class="product-card__img" data-zoom-image="${p.image}" data-zoom-name="${p.name}" data-category="${p.category}">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${p.category_new === 'Nueva colección' ? '<span class="tag">Nuevo</span>' : ''}
        ${p.category_new === 'Oferta' ? '<span class="tag tag--aqua">Oferta</span>' : ''}
        ${p.category === 'maquillaje' ? `
        <button type="button" class="product-card__nav product-card__nav--prev" aria-label="Foto anterior" hidden>&#8249;</button>
        <button type="button" class="product-card__nav product-card__nav--next" aria-label="Foto siguiente" hidden>&#8250;</button>
        ` : ''}
        <span class="product-card__zoom-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
      </div>
      <div class="product-card__body">
        <h3 title="${p.name}">${p.name}</h3>
        ${p.category === 'bisuteria' ? `
        <p class="product-card__desc product-card__details">
          <span class="product-card__code">${p.tallas ? 'Código según la talla' : p.id}</span>
          ${p.medidas ? `<span>Medidas: ${p.medidas}</span>` : ''}
          ${p.description ? `<span>${p.description}</span>` : ''}
          ${p.material ? `<span class="product-card__material">Material: ${p.material}</span>` : ''}
        </p>` : `
        <p class="product-card__desc">${p.description || ''}</p>`}
        ${p.category === 'maquillaje' ? '<button type="button" class="product-card__more" hidden>Ver más</button>' : ''}
        <div class="product-card__foot">
          <span class="price">${hasPriceRange(p) ? '<small>Desde</small> ' : ''}${formatPriceCOP(p.price)}</span>
          <button type="button" class="btn-cart"
                  data-id="${p.id}" data-name="${p.category === 'bisuteria' ? `${p.name} ${p.id}` : p.name}"
                  data-price="${p.price}" data-image="${p.image}">
            Agregar
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
    // Solo maquillaje: si el producto tiene fotos extra (BASE_2.jpg,
    // BASE_3.jpg...), esta tarjeta muestra flechitas para pasearlas sin
    // necesidad de abrir la lupa. Bisutería no las lleva (sus productos
    // solo tienen una foto), así que ni siquiera se buscan.
    if (imgWrap.dataset.category === 'maquillaje') {
      setupCardGallery(imgWrap);
    }
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

// ---------- Flechitas de la tarjeta: pasear las fotos de un producto
// sin abrir la lupa (solo maquillaje, ver comentario en renderProductCards) ----------
function setupCardGallery(imgWrap) {
  const imgEl = imgWrap.querySelector('img');
  const prevBtn = imgWrap.querySelector('.product-card__nav--prev');
  const nextBtn = imgWrap.querySelector('.product-card__nav--next');
  if (!imgEl || !prevBtn || !nextBtn) return;

  const baseImage = imgWrap.dataset.zoomImage;
  probeExtraImages(baseImage).then(extras => {
    if (extras.length === 0) return;
    const images = [baseImage, ...extras];
    let index = 0;
    const show = next => {
      index = (next + images.length) % images.length;
      imgEl.src = images[index];
      imgWrap.dataset.zoomImage = images[index];
    };
    prevBtn.hidden = false;
    nextBtn.hidden = false;
    prevBtn.addEventListener('click', e => { e.stopPropagation(); show(index - 1); });
    nextBtn.addEventListener('click', e => { e.stopPropagation(); show(index + 1); });
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

// Máximo de productos por página, para no cargar todo el catálogo de una vez.
const PAGE_SIZE = 25;

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
  if (items.length === 0) {
    grid.innerHTML = '<p class="catalog-empty">No encontramos productos con esos filtros.</p>';
    pagerEl.hidden = true;
    pagerEl.innerHTML = '';
    return;
  }
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
// o null si el usuario desactivó el chip que tenía activo. Con
// { multiple: true } se pueden marcar varios chips a la vez y onToggle
// recibe la lista de valores marcados (o null si no queda ninguno).
function setupFilterGroup(filtersEl, values, onToggle, { multiple = false } = {}) {
  if (!filtersEl || values.length === 0) {
    if (filtersEl) filtersEl.hidden = true;
    return false;
  }

  filtersEl.hidden = false;
  // Ningún chip empieza activo: sin filtro se muestra todo el catálogo
  // y cada chip lo va afinando.
  filtersEl.innerHTML = values.map(label => {
    const icon = FILTER_ICONS[label];
    if (!icon) {
      return `<button type="button" class="filter-chip" data-filter="${label}">${label}</button>`;
    }
    return `
      <button type="button" class="filter-chip filter-chip--icon" data-filter="${label}">
        <img class="filter-chip__icon" src="images/iconos/${icon}.svg" alt="" width="72" height="72">
        <span class="filter-chip__label">${label}</span>
      </button>`;
  }).join('');

  filtersEl.addEventListener('click', e => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;

    if (multiple) {
      chip.classList.toggle('is-active');
      const selected = [...filtersEl.querySelectorAll('.filter-chip.is-active')].map(b => b.dataset.filter);
      onToggle(selected.length ? selected : null);
      return;
    }

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
  // Catálogo sin filtrar: primero lo nuevo, luego el resto, cada parte
  // en orden aleatorio para que la vitrina se vea distinta en cada visita.
  const getDefaultOrder = () => [
    ...shuffle(items.filter(p => p.category_new === 'Nueva colección')),
    ...shuffle(items.filter(p => p.category_new !== 'Nueva colección'))
  ];

  const state = { subcategory: null, colaboracion: null, categoryAge: null, categoryNew: null, material: null, search: '' };

  const applyFilters = () => {
    const hasFilter = state.subcategory || state.colaboracion || state.categoryAge || state.categoryNew || state.material || state.search.trim();

    if (!hasFilter) {
      // Sin ningún chip activo: se vuelve al catálogo completo, con las
      // secciones extra visibles de nuevo.
      renderActiveFilters(null);
      renderPage(grid, pagerEl, getDefaultOrder(), 1);
      document.querySelector('.catalog-extra')?.removeAttribute('hidden');
      document.querySelector('.page-hero__contact')?.removeAttribute('hidden');
      return;
    }

    // Al elegir un chip, la página se enfoca solo en los productos: se
    // ocultan la sección extra (materiales / marcas) y la nota de
    // contacto por WhatsApp.
    document.querySelector('.catalog-extra')?.setAttribute('hidden', '');
    document.querySelector('.page-hero__contact')?.setAttribute('hidden', '');

    const filtered = items.filter(p =>
      (!state.subcategory || state.subcategory.includes(p.subcategory)) &&
      (!state.colaboracion || p.colaboracion === state.colaboracion) &&
      (!state.categoryAge || p.category_age === state.categoryAge) &&
      (!state.categoryNew || p.category_new === state.categoryNew) &&
      (!state.material || getMaterials(p).includes(state.material)) &&
      matchesSearch(`${p.name} ${p.id} ${(p.tallas || []).map(t => t.id).join(' ')}`, state.search)
    );
    // Cada vez que cambia un filtro los productos salen en orden aleatorio;
    // al pasar de página se conserva ese mismo orden.
    shuffle(filtered);
    renderActiveFilters(filtered.length);
    renderPage(grid, pagerEl, filtered, 1);
  };

  // Barra "Filtros aplicados" encima de los productos: repite como
  // pastillas los chips que están marcados (y la búsqueda), con una × para
  // quitar cada uno y "Limpiar todo". Quitar una pastilla equivale a tocar
  // su chip, así que reutiliza la misma lógica de cada grupo.
  const activeBar = document.createElement('div');
  activeBar.className = 'active-filters';
  activeBar.hidden = true;
  grid.insertAdjacentElement('beforebegin', activeBar);

  function renderActiveFilters(count) {
    if (count === null) {
      activeBar.hidden = true;
      activeBar.innerHTML = '';
      return;
    }
    const chips = [...document.querySelectorAll('.catalog-filters .filter-chip.is-active')];
    const search = state.search.trim();
    const pill = (label, attr) => `
      <button type="button" class="active-filters__pill" ${attr} aria-label="Quitar filtro ${label}">
        ${label}<span aria-hidden="true">×</span>
      </button>`;
    activeBar.innerHTML = `
      <span class="active-filters__count">${count} ${count === 1 ? 'producto' : 'productos'}</span>
      <span class="active-filters__label">Filtros aplicados:</span>
      ${chips.map((chip, i) => pill(chip.dataset.filter, `data-chip="${i}"`)).join('')}
      ${search ? pill(`“${search}”`, 'data-search') : ''}
      <button type="button" class="active-filters__clear">Limpiar todo</button>`;
    activeBar.hidden = false;

    activeBar.querySelectorAll('[data-chip]').forEach(btn => {
      btn.addEventListener('click', () => chips[Number(btn.dataset.chip)].click());
    });
    activeBar.querySelector('[data-search]')?.addEventListener('click', clearSearch);
    activeBar.querySelector('.active-filters__clear').addEventListener('click', () => {
      chips.forEach(chip => { if (chip.classList.contains('is-active')) chip.click(); });
      if (state.search.trim()) clearSearch();
    });
  }

  // Al tocar un chip de filtro, la página baja hasta los productos (la
  // barra "Filtros aplicados"), dejando espacio para el encabezado fijo.
  // Solo con toques reales: "Limpiar todo" y la × de cada pastilla
  // desmarcan chips por código y no deben mover la página.
  document.addEventListener('click', e => {
    if (!e.isTrusted || !e.target.closest('.catalog-filters .filter-chip')) return;
    if (activeBar.hidden) return;
    const headerH = document.querySelector('.header')?.offsetHeight || 0;
    const top = activeBar.getBoundingClientRect().top + window.scrollY - headerH - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  function clearSearch() {
    const input = document.getElementById('catalogSearch');
    if (input) input.value = '';
    document.getElementById('catalogSearchClear')?.setAttribute('hidden', '');
    state.search = '';
    applyFilters();
  }

  const subcategoryValues = getPresentFilterValues(items, 'subcategory', SUBCATEGORY_ORDER[category]);
  const colaboracionValues = getPresentFilterValues(items, 'colaboracion');
  const categoryAgeValues = getPresentFilterValues(items, 'category_age');
  const categoryNewValues = getPresentFilterValues(items, 'category_new');
  const presentMaterials = new Set(items.flatMap(getMaterials));
  const materialValues = [
    ...MATERIAL_ORDER.filter(m => presentMaterials.has(m)),
    ...[...presentMaterials].filter(m => !MATERIAL_ORDER.includes(m)).sort((a, b) => a.localeCompare(b, 'es'))
  ];

  const filtersElSubcategory = document.getElementById('catalogFilters');
  const filtersElColaboracion = document.getElementById('catalogFiltersColaboracion');
  const filtersElAge = document.getElementById('catalogFiltersAge');
  const filtersElNew = document.getElementById('catalogFiltersNew');
  const filtersElMaterial = document.getElementById('catalogFiltersMaterial');

  // Quita el chip activo (si hay uno) del otro grupo, para que los dos
  // grupos nunca filtren a la vez.
  const clearActiveChip = filtersEl => {
    filtersEl?.querySelectorAll('.filter-chip.is-active').forEach(b => b.classList.remove('is-active'));
  };

  // Tipo de producto: se pueden marcar varios a la vez (Anillos + Aretes).
  const hasSubcategoryFilter = setupFilterGroup(
    filtersElSubcategory,
    subcategoryValues,
    values => {
      state.subcategory = values;
      if (values) {
        state.colaboracion = null;
        state.categoryAge = null;
        state.categoryNew = null;
        clearActiveChip(filtersElColaboracion);
        clearActiveChip(filtersElAge);
        clearActiveChip(filtersElNew);
      }
      applyFilters();
    },
    { multiple: true }
  );
  setupFilterGroup(
    filtersElColaboracion,
    colaboracionValues,
    value => {
      state.colaboracion = value;
      if (value) {
        state.subcategory = null;
        state.categoryAge = null;
        state.categoryNew = null;
        state.material = null;
        clearActiveChip(filtersElSubcategory);
        clearActiveChip(filtersElAge);
        clearActiveChip(filtersElNew);
        clearActiveChip(filtersElMaterial);
      }
      applyFilters();
    }
  );
  setupFilterGroup(
    filtersElAge,
    categoryAgeValues,
    value => {
      state.categoryAge = value;
      if (value) {
        state.subcategory = null;
        state.colaboracion = null;
        state.categoryNew = null;
        state.material = null;
        clearActiveChip(filtersElSubcategory);
        clearActiveChip(filtersElColaboracion);
        clearActiveChip(filtersElNew);
        clearActiveChip(filtersElMaterial);
      }
      applyFilters();
    }
  );
  const hasNewFilter = setupFilterGroup(
    filtersElNew,
    categoryNewValues,
    value => {
      state.categoryNew = value;
      if (value) {
        state.subcategory = null;
        state.colaboracion = null;
        state.categoryAge = null;
        state.material = null;
        clearActiveChip(filtersElSubcategory);
        clearActiveChip(filtersElColaboracion);
        clearActiveChip(filtersElAge);
        clearActiveChip(filtersElMaterial);
      }
      applyFilters();
    }
  );
  // Material no limpia el tipo de producto: se combinan (Anillos + Rodio).
  setupFilterGroup(
    filtersElMaterial,
    materialValues,
    value => {
      state.material = value;
      if (value) {
        state.colaboracion = null;
        state.categoryAge = null;
        state.categoryNew = null;
        clearActiveChip(filtersElColaboracion);
        clearActiveChip(filtersElAge);
        clearActiveChip(filtersElNew);
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

  // Si se llegó desde el menú del celular con un tipo de producto ya
  // elegido (maquillaje.html?sub=Rostro), se activa ese chip de una vez y
  // se muestran sus productos, sin esperar a que la clienta lo toque.
  let preSelected = false;
  const wantedSub = new URLSearchParams(location.search).get('sub');
  if (wantedSub && hasSubcategoryFilter) {
    const chip = filtersElSubcategory.querySelector(`.filter-chip[data-filter="${CSS.escape(wantedSub)}"]`);
    if (chip) {
      chip.classList.add('is-active');
      state.subcategory = [wantedSub];
      applyFilters();
      preSelected = true;
      document.getElementById('catalogo')?.scrollIntoView({ block: 'start' });
    }
  }

  // Igual que "sub" arriba, pero para los botones "Ver más" de los
  // carruseles del inicio (maquillaje.html?new=Oferta).
  const wantedNew = new URLSearchParams(location.search).get('new');
  if (!preSelected && wantedNew && hasNewFilter) {
    const chip = filtersElNew.querySelector(`.filter-chip[data-filter="${CSS.escape(wantedNew)}"]`);
    if (chip) {
      chip.classList.add('is-active');
      state.categoryNew = wantedNew;
      applyFilters();
      preSelected = true;
      document.getElementById('catalogo')?.scrollIntoView({ block: 'start' });
    }
  }

  // Sin chip elegido desde la URL, el catálogo arranca mostrando todos
  // los productos (paginados de a PAGE_SIZE) para que la clienta vea
  // productos apenas entra.
  if (!preSelected) {
    renderPage(grid, pagerEl, getDefaultOrder(), 1);
  }
});
