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
{
  id: "LL590",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo corazón con alas ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL590.png",
  description: "Material: Rodio"
},
{
  id: "LL588",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cirón rojo Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL588.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL586",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cirón cristal Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL586.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL585",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circón verde Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL585.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL584",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cadena Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL584.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL581",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circón cristal Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL581.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX445",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable mariposa tornasol",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX445.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX444",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable mariposa verde",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX444.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX443",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable mariposa roja",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX443.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO158",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO158.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO157",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO157.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO156",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO156.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO155",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO155.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "NP515",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Flor y Perla Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Anillos/NP515.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "MC934",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Flor y Perla Ajustable",
  price: 27000,
  image: "images/productos/Bisuteria/Anillos/MC934.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "NP514",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Flor Maxi Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Anillos/NP514.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO145",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazones Rojos Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO145.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO144",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazones blancos Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO144.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO143",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazones Rojos Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO143.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "NP513",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Blanco Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Anillos/NP513.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL565",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Cadena Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL565.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL564",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Doble Mariposa Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL564.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL567",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Solitario Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL567.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL569",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circones Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL569.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX426",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazón Maxi Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX426.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LR477",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Estrella Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Anillos/LR477.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "CB703",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circones Cristal Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB703.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL540",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazón Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL540.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL538",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circones Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL538.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX422",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Concha Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX422.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX417",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circón Fucsia Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX417.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "MC925",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Sol y Luna Ajustable",
  price: 27000,
  image: "images/productos/Bisuteria/Anillos/MC925.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LM855",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Cubano Ajustable",
  price: 21000,
  image: "images/productos/Bisuteria/Anillos/LM855.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX398",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Nota musical Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX398.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "PG428",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ovalos Ajustable",
  price: 11900,
  image: "images/productos/Bisuteria/Anillos/PG428.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "PG424",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Balin Ajustable",
  price: 11900,
  image: "images/productos/Bisuteria/Anillos/PG424.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LM839",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Sol y Luna Ajustable",
  price: 21000,
  image: "images/productos/Bisuteria/Anillos/LM839.png",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "MC784",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cuadrado circones",
  price: 27000,
  image: "images/productos/Bisuteria/Anillos/MC784.png",
  description: "Anillo Ajustable en Rodio"
},
];
