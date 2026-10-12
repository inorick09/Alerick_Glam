// ============================================
// ALERICK GLAM — Catálogo de productos (índice)
//
// Los productos ahora están separados en dos archivos para que
// sea más fácil encontrarlos y editarlos:
//   - js/products.maquillaje.js  → productos de Maquillaje
//   - js/products.bisuteria.js   → productos de Bisutería
//
// Para agregar, editar o borrar un producto, abre el archivo que
// corresponda a su categoría (cada uno trae sus propias
// instrucciones). No edites este archivo ni maquillaje.html /
// bisuteria.html — el sitio junta todo solo.
// ============================================

// Se ocultan los productos agotados: en maquillaje con
// category_new: "Agotado" y en bisutería con agotado: true.
const PRODUCTS = [...PRODUCTS_MAQUILLAJE, ...PRODUCTS_BISUTERIA].filter(
  (p) => p.category_new !== "Agotado" && !p.agotado
);
