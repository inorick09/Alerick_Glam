// ============================================
// ALERICK GLAM — Opiniones de clientas (inicio)
//
// Aquí agregas los comentarios REALES que te dejan tus clientas (por
// WhatsApp, Instagram, etc.). Mientras la lista esté vacía, el bloque
// "Lo que dicen nuestras clientas" no aparece en la página; con una
// sola opinión ya se muestra.
//
// CÓMO AGREGAR UNA OPINIÓN:
// Copia el bloque de ejemplo de abajo, quítale las dos barras // del
// inicio de cada línea y cambia los datos:
//   - name: nombre de la clienta (o solo nombre e inicial: "Laura M.")
//   - city: opcional; ciudad o barrio
//   - text: lo que dijo, tal cual (pide su permiso antes de publicarlo)
//   - product: opcional; qué compró
//   - photo: opcional; foto que ella te mandó, guardada en
//     images/clientas/ (ej: "images/clientas/laura.jpg")
// ============================================

const REVIEWS = [
  // {
  //   name: "Laura M.",
  //   city: "Bogotá, Suba",
  //   text: "Me encantó el gloss, súper pigmentado y llegó rapidísimo.",
  //   product: "Brillo Aura Mocca",
  //   photo: ""
  // },
];

document.addEventListener('DOMContentLoaded', () => {
  const block = document.getElementById('reviewsBlock');
  const grid = document.getElementById('reviewsGrid');
  if (!block || !grid || REVIEWS.length === 0) return;

  const esc = str => String(str || '').replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  grid.innerHTML = REVIEWS.map(r => `
    <figure class="review-card">
      ${r.photo ? `<img class="review-card__photo" src="${esc(r.photo)}" alt="Foto de ${esc(r.name)}" loading="lazy">` : ''}
      <div class="review-card__stars" aria-hidden="true">★★★★★</div>
      <blockquote>“${esc(r.text)}”</blockquote>
      <figcaption>
        <strong>${esc(r.name)}</strong>${r.city ? ` · ${esc(r.city)}` : ''}
        ${r.product ? `<span class="review-card__product">Compró: ${esc(r.product)}</span>` : ''}
      </figcaption>
    </figure>
  `).join('');
  block.hidden = false;
});
