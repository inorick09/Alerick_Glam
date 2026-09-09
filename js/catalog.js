// ============================================
// ALERICK GLAM — Pinta el catálogo de productos
// Lee el arreglo PRODUCTS (definido en products.js) y arma las
// tarjetas de producto dentro de #productsGrid, filtrando por
// la categoría indicada en su atributo data-category.
// Si todavía no hay productos en esa categoría, no toca nada y
// se queda visible el bloque "Muy pronto" que ya está en el HTML.
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

function renderCatalogPlaceholder(grid) {
  grid.innerHTML = '<p class="catalog-placeholder">Elige una categoría para ver sus productos.</p>';
}

function setupCatalogFilters(filtersEl, grid, items, category) {
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

    const filtered = items.filter(p => p.subcategory === chip.dataset.filter);
    renderProductCards(grid, filtered);
  });

  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productsGrid');
  if (!grid || typeof PRODUCTS === 'undefined') return;

  const category = grid.dataset.category;
  const items = PRODUCTS.filter(p => p.category === category);
  if (items.length === 0) return; // se queda el "Muy pronto" que ya está en el HTML

  const filtersEl = document.getElementById('catalogFilters');
  const hasCategories = filtersEl && setupCatalogFilters(filtersEl, grid, items, category);

  // Si hay categorías (subcategory) solo se muestran los chips y el
  // usuario elige una para ver sus productos. Si no hay ese dato,
  // no hay nada que elegir y se muestran todos los productos ya mismo.
  if (hasCategories) {
    renderCatalogPlaceholder(grid);
  } else {
    renderProductCards(grid, items);
  }

  // el encabezado de la sección ya no dice "Muy pronto"
  const head = grid.closest('section')?.querySelector('.section__head');
  if (head) {
    const eyebrow = head.querySelector('.eyebrow');
    const note = head.querySelector('p:not(.eyebrow)');
    if (eyebrow) eyebrow.textContent = 'Catálogo';
    if (note) note.textContent = 'Elige tus favoritos y agrégalos al carrito.';
  }
});
