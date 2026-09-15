// ============================================
// ALERICK GLAM — Catálogo de Maquillaje
//
// Aquí agregas y editas los productos que se muestran en la
// página de Maquillaje. Cada producto es un objeto dentro del
// arreglo PRODUCTS_MAQUILLAJE. El sitio los pinta solo — no
// toques maquillaje.html para agregar un producto.
//
// Los productos de Bisutería viven en su propio archivo:
// js/products.bisuteria.js (no los agregues aquí).
//
// CÓMO AGREGAR UN PRODUCTO NUEVO:
// 1. Guarda la foto del producto dentro de images/productos/, en la
//    subcarpeta de su categoría y luego la de su tipo (subcategory)
//    (por ejemplo: images/productos/Maquillaje/Labios/labial-rosa.jpg)
// 2. Copia uno de los bloques { ... } de abajo y pégalo
//    dentro del arreglo (respetando la coma entre productos).
// 3. Cambia id, name, price, image y description.
//    - id: un texto único, sin espacios (ej: "labial-rosa-01")
//    - price: solo el número, sin puntos ni signo de pesos
//      (ej: 35000 para $35.000)
//    - subcategory: activa el filtro por tipo en la página de
//      Maquillaje. Usa exactamente uno de estos textos:
//      "Rostro", "Labios", "Cejas", "Ojos", "Colaboraciones",
//      "Cuidado Facial", "Capilar", "Corporal", "Accesorios", "Brochas"
// 4. Guarda el archivo y sube los cambios a GitHub — listo,
//    ya aparece en la página con su botón "Agregar" funcionando.
//
// SI EL PRODUCTO VIENE EN VARIOS TONOS:
// Agrégale un campo "tonos" con la lista de opciones, así:
//   tonos: ["Beige claro", "Beige medio", "Beige oscuro"]
// En ese caso el botón cambia de "Agregar" a "Elegir tono", y antes de
// meterlo al carrito le pide a la clienta escoger uno de esa lista —
// no se puede agregar sin elegir. Los productos SIN este campo (la
// mayoría) se agregan directo, como siempre. No hace falta poner
// "tonos" si el producto es de un solo color/versión.
//
// SI EL PRODUCTO ES DE UNA COLECCIÓN O COLABORACIÓN (Barbie, Bob
// Esponja, Toy Story, Disney, etc.):
// Agrégale un campo "colaboracion" con el nombre de esa colección, así:
//   colaboracion: "Barbie"
// Es independiente de "subcategory": un producto puede ser "Rostro" y
// además ser de la colección "Barbie" al mismo tiempo, y en la página
// aparece filtrable por los dos a la vez. Es texto libre (no hay una
// lista fija como en subcategory) — solo asegúrate de escribir el
// mismo texto, con las mismas mayúsculas, en todos los productos de
// esa colección para que el filtro los agrupe bien. Los productos SIN
// este campo (los que no son de ninguna colaboración) simplemente no
// aparecen en ese filtro.
//
// Como compras según lo que te piden, no hay control de stock
// aquí: si un producto ya no lo consigues, simplemente borra su
// bloque (o coméntalo con /* así */) y desaparece del catálogo.
// ============================================

const PRODUCTS_MAQUILLAJE = [

  // Ejemplo — descomenta y edita este bloque para tu primer producto real:
  // {
  //   id: "labial-mate-rosa",
  //   category: "maquillaje",
  //   name: "Labial mate Rosa Nude",
  //   price: 35000,
  //   image: "images/productos/Maquillaje/Labios/labial-rosa-nude.jpg",
  //   description: "Acabado mate de larga duración, tono rosado nude."
  // },
  // Ejemplo de producto con varios tonos:
  // {
  //   id: "base-aqua-smooth",
  //   category: "maquillaje",
  //   name: "Base Aqua Smooth",
  //   price: 30000,
  //   image: "images/productos/Maquillaje/Rostro/base-aqua-smooth.jpg",
  //   description: "Acabado natural, fresca y sin peso.",
  //   tonos: ["Claro", "Medio", "Oscuro"]
  // },
{
  id: "MT2418",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Kit Brillo Y Monedero Amigas Barbie",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/MT2418.jpg",
  description: "Brilla con luz propia y lleva todo el estilo de Barbie a donde quiera que vayas. Este kit combina dos glosses sin color cargados con delicados destellos en tonos azul y rosado, acompañados por un práctico monedero pequeño para guardar tus cosas. Es la opción ideal para complementar tus Looks diarios mientras disfrutas de un producto útil y bonito.",
  colaboracion: "Mattel"
},
{
  id: "HLB2482",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Hidratante De Labios Bob Esponja",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/HLB2482.jpg",
  description: "Dale a tus labios un momento divertido de cuidado mientras combates la resequedad diaria. Esta mascarilla inspirada en Bob Esponja complementa tu rutina ofreciendo una experiencia diferente que ayuda a mantener los labios suaves, hidratados y con una apariencia más saludable.",
  colaboracion: "Paramount"
},
{
  id: "PSA2483",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Polvo Suelto Arenita Bob Esponja",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/PSA2483.jpg",
  description: "Sella tus productos cremosos y evita que la base o el corrector se muevan con el paso del tiempo. Este polvo suelto inspirado en Bob Esponja ayuda a fijar el maquillaje dejando un acabado suave y completamente aterciopelado para que la piel luzca uniforme. Su textura micropulverizada se difumina fácilmente y se siente liviana sobre el rostro, mientras que su subtono amarillo ayuda a neutralizar visualmente los tonos fríos, siendo el aliado perfecto para corregir y perfeccionar la zona de la ojera.",
  colaboracion: "Paramount"
},
{
  id: "Dyt2678",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit Pizza Planet",
  price: 35000,
  image: "images/productos/Maquillaje/Labios/Dyt2678.jpg",
  description: "Incluye:\n\n1 Brillo de labios que aporta un color natural.\n1 Tinta de textura cremosa color terracota.\n1 Tinta acuosa color vino.\n1 Gloss en formato colapsible que aporta color rojizo.\n1 Una cosmetiquera con ganchito para llevar a todas partes.",
  colaboracion: "Disney"
},
{
  id: "Dyt2512",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Monedero Lotso",
  price: 25000,
  image: "images/productos/Maquillaje/Accesorios/Dyt2512.jpg",
  description: "Un 3 en 1 que te facilita tu look. Lleva tus esenciales de maquillaje a todas partes con el encanto de Lotso. Este práctico kit incluye un monedero adorable y muy amplio, un brillo natural para tus labios y un rubor en polvo en tono rosa que aporta brillo muy sutil sobre las mejillas, combina funcionalidad y estilo en un accesorio ideal para el día a día.",
  colaboracion: "Disney"
},
{
  id: "Dyt2552",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Mini Rubor Lotso",
  price: 20000,
  image: "images/productos/Maquillaje/Rostro/Dyt2552.jpg",
  description: "Un rubor satinado que tiene que ser parte de tu colección. Dale a tus mejillas un toque de dulzura y frescura con el Mini Rubor Lotso. Su textura suave y ligera se difumina fácilmente sobre la piel, aportando un color natural y luminoso que realza la belleza del rostro y brinda una apariencia saludable y radiante.",
  tonos: ["01", "02"],
  colaboracion: "Disney"
},
{
  id: "Dyt2551",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Fijador Toy Story",
  price: 25000,
  image: "images/productos/Maquillaje/Rostro/Dyt2551.jpg",
  description: "Lleva tu maquillaje al infinito y más allá con el fijador Toy Story.\nSu innovadora fórmula en gel se transforma en una ligera bruma líquida al salir del spray, permitiendo una aplicación uniforme y cómoda sobre la piel.\nDiseñado para complementar tu rutina de maquillaje, ayuda a mantener una apariencia fresca y favorece un acabado más integrado y natural semi mate, sin sensación pesada.",
  colaboracion: "Disney"
},
];
