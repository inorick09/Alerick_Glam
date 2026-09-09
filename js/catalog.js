// ============================================
// ALERICK GLAM — Pinta el catálogo de productos
// Lee el arreglo PRODUCTS (definido en products.js) y arma las
// tarjetas de producto dentro de #productsGrid, filtrando por
// la categoría indicada en su atributo data-category.
// Si todavía no hay productos en esa categoría, no toca nada y
// se queda visible el bloque "Muy pronto" que ya está en el HTML.
//
// En Maquillaje, además, si existe #catalogFilters en el HTML,
// arma los chips de filtro por tipo (subcategory) a partir de los
// productos que sí tienen ese campo — solo aparecen los tipos que
// ya tienen productos cargados.
// ============================================

// Orden fijo en el que deben aparecer los chips de filtro cuando existan
// productos de ese tipo.
const MAKEUP_SUBCATEGORIES = [
  'Rostro', 'Labios', 'Cejas', 'Ojos', 'Colaboraciones',
  'Cuidado Facial', 'Capilar', 'Corporal', 'Accesorios', 'Brochas'
];

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

function setupCatalogFilters(filtersEl, grid, items) {
  const present = MAKEUP_SUBCATEGORIES.filter(sub => items.some(p => p.subcategory === sub));
  if (present.length === 0) {
    filtersEl.hidden = true;
    return;
  }

  filtersEl.hidden = false;
  filtersEl.innerHTML = ['Todos', ...present].map((label, i) => `
    <button type="button" class="filter-chip${i === 0 ? ' is-active' : ''}" data-filter="${label === 'Todos' ? '' : label}">
      ${label}
    </button>
  `).join('');

  filtersEl.addEventListener('click', e => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;

    filtersEl.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('is-active'));
    chip.classList.add('is-active');

    const filter = chip.dataset.filter;
    const filtered = filter ? items.filter(p => p.subcategory === filter) : items;
    renderProductCards(grid, filtered);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productsGrid');
  if (!grid || typeof PRODUCTS === 'undefined') return;

  const category = grid.dataset.category;
  const items = PRODUCTS.filter(p => p.category === category);
  if (items.length === 0) return; // se queda el "Muy pronto" que ya está en el HTML

  renderProductCards(grid, items);

  const filtersEl = document.getElementById('catalogFilters');
  if (filtersEl) setupCatalogFilters(filtersEl, grid, items);

  // el encabezado de la sección ya no dice "Muy pronto"
  const head = grid.closest('section')?.querySelector('.section__head');
  if (head) {
    const eyebrow = head.querySelector('.eyebrow');
    const note = head.querySelector('p:not(.eyebrow)');
    if (eyebrow) eyebrow.textContent = 'Catálogo';
    if (note) note.textContent = 'Elige tus favoritos y agrégalos al carrito.';
  }
});
