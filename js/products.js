// ============================================
// ALERICK GLAM — Catálogo de productos
//
// Aquí agregas y editas los productos que se muestran en
// Maquillaje y Bisutería. Cada producto es un objeto dentro
// del arreglo PRODUCTS. El sitio los pinta solo — no toques
// maquillaje.html ni bisuteria.html para agregar un producto.
//
// CÓMO AGREGAR UN PRODUCTO NUEVO:
// 1. Guarda la foto del producto dentro de images/productos/, en la
//    subcarpeta de su categoría y luego la de su tipo (subcategory)
//    (por ejemplo: images/productos/Maquillaje/Labios/labial-rosa.jpg)
// 2. Copia uno de los bloques { ... } de abajo y pégalo
//    dentro del arreglo (respetando la coma entre productos).
// 3. Cambia id, category, name, price, image y description.
//    - id: un texto único, sin espacios (ej: "labial-rosa-01")
//    - category: "maquillaje" o "bisuteria" (así decide en qué
//      página aparece)
//    - price: solo el número, sin puntos ni signo de pesos
//      (ej: 35000 para $35.000)
//    - subcategory: activa el filtro por tipo en la página de la
//      categoría correspondiente. Usa exactamente uno de estos textos:
//      · category "maquillaje": "Rostro", "Labios", "Cejas", "Ojos",
//        "Colaboraciones", "Cuidado Facial", "Capilar", "Corporal",
//        "Accesorios", "Brochas"
//      · category "bisuteria": "Anillos", "Aretes", "Collares",
//        "Conjuntos", "Dijes", "Earcuff", "Empaques", "Pulseras",
//        "Rosarios", "Tobilleras"
// 4. Guarda el archivo y sube los cambios a GitHub — listo,
//    ya aparece en la página con su botón "Agregar" funcionando.
//
// Como compras según lo que te piden, no hay control de stock
// aquí: si un producto ya no lo consigues, simplemente borra su
// bloque (o coméntalo con /* así */) y desaparece del catálogo.
// ============================================

const PRODUCTS = [

  // Ejemplo — descomenta y edita este bloque para tu primer producto real:
  // {
  //   id: "labial-mate-rosa",
  //   category: "maquillaje",
  //   name: "Labial mate Rosa Nude",
  //   price: 35000,
  //   image: "images/productos/Maquillaje/Labios/labial-rosa-nude.jpg",
  //   description: "Acabado mate de larga duración, tono rosado nude."
  // },
{
  id: "SET2168",              // texto único, sin espacios
  category: "maquillaje",              // "maquillaje" o "bisuteria"
  subcategory: "Cuidado Facial",       // ver lista de tipos arriba
  name: "Serum Facial Encanto",
  price: 15000,                        // solo el número, sin puntos ni $
  image: "images/productos/Maquillaje/Cuidado_Facial/SET2168.png",
  description: "Un básico para incluir en tu rutina de cuidado facial. Su textura ligera y fácil de aplicar lo hacen perfecto para usar diariamente y darle a tu piel ese toque de cuidado que se merece."
},
{
  id: "BAQ584",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Base Aqua Cobertura Media",
  price: 30000,
  image: "images/productos/Maquillaje/Rostro/BAQ584.png",
  description: "La Base Aqua realza tu belleza natural con un acabado luminoso, fresco y sin peso, se funde perfectamente con la piel."
},
{
  id: "BMT1666",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Baul Mediano Negro",
  price: 40000,
  image: "images/productos/Maquillaje/Accesorios/BMT1666.png",
  description: "Organiza los productos favoritos de maquillaje y cuidado facial con la nueva cosmetiquera Trendy. Es muy amplia e incluye varios compartimentos internos en donde puedes organizar productos pequeños. Viene con separador para una organización óptima de los productos y separadores para organizar las brochas de maquillaje."
},
];
