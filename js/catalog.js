// ============================================
// ALERICK GLAM — Pinta el catálogo de productos
// Lee el arreglo PRODUCTS (definido en products.js) y arma las
// tarjetas de producto dentro de #productsGrid, filtrando por
// la categoría indicada en su atributo data-category.
// Si todavía no hay productos en esa categoría, no toca nada.
//
// Si además existe #catalogFilters en el HTML, arma los chips de
// categoría (subcategory) a partir de los productos que sí tienen
// ese campo — solo aparecen los tipos que ya tienen productos
// cargados. Mientras haya categorías, el catálogo empieza sin
// productos visibles: solo se muestran al elegir una categoría.
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

function renderProductCards(grid, items) {
  // Sin la clase "reveal": esas tarjetas las observa script.js una sola
  // vez al cargar la página, antes de que este script las cree, así que
  // se quedarían invisibles para siempre si la lleváramos.
  grid.innerHTML = items.map(p => `
    <article class="product-card">
      <div class="product-card__img">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-card__body">
        <h3>${p.name}</h3>
        <p>${p.description || ''}</p>
        <div class="product-card__foot">
          <span class="price">${formatPriceCOP(p.price)}</span>
          <button type="button" class="btn-cart"
                  data-id="${p.id}" data-name="${p.name}"
                  data-price="${p.price}" data-image="${p.image}">
            Agregar
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // los botones "Agregar" recién creados necesitan que cart.js
  // les enganche el evento — cart.js ya corre este mismo listener
  // en DOMContentLoaded, así que lo repetimos aquí para estos nuevos:
  grid.querySelectorAll('.btn-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart({
        id: btn.dataset.id,
        name: btn.dataset.name,
        price: btn.dataset.price,
        image: btn.dataset.image
      });
    });
  });
}

function renderCatalogPlaceholder(grid, category) {
  if (category === 'bisuteria') {
    grid.innerHTML = '';
    return;
  }
  grid.innerHTML = '<p class="catalog-placeholder">Elige una categoría para ver sus productos.</p>';
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

function setupCatalogFilters(filtersEl, grid, pagerEl, items, category) {
  const order = SUBCATEGORY_ORDER[category] || [];
  const present = order.filter(sub => items.some(p => p.subcategory === sub));
  if (present.length === 0) {
    filtersEl.hidden = true;
    return false;
  }

  filtersEl.hidden = false;
  // Ningún chip empieza activo: el catálogo solo muestra las categorías
  // hasta que el usuario elige una.
  filtersEl.innerHTML = present.map(label => `
    <button type="button" class="filter-chip" data-filter="${label}">
      ${label}
    </button>
  `).join('');

  filtersEl.addEventListener('click', e => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;

    filtersEl.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('is-active'));
    chip.classList.add('is-active');

    // Al elegir una categoría, la página se enfoca solo en los productos:
    // se ocultan los materiales y la nota de contacto por WhatsApp.
    document.getElementById('materiales')?.setAttribute('hidden', '');
    document.querySelector('.page-hero__contact')?.setAttribute('hidden', '');

    const filtered = items.filter(p => p.subcategory === chip.dataset.filter);
    renderPage(grid, pagerEl, filtered, 1);
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

  const filtersEl = document.getElementById('catalogFilters');
  const hasCategories = filtersEl && setupCatalogFilters(filtersEl, grid, pagerEl, items, category);

  // Si hay categorías (subcategory) solo se muestran los chips y el
  // usuario elige una para ver sus productos. Si no hay ese dato,
  // no hay nada que elegir y se muestran todos los productos ya mismo
  // (paginados de a PAGE_SIZE).
  if (hasCategories) {
    renderCatalogPlaceholder(grid, category);
  } else {
    renderPage(grid, pagerEl, items, 1);
  }
});
