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
  image: "images/productos/Maquillaje/Cuidado_Facial/SET2168.jpg",
  description: "Un básico para incluir en tu rutina de cuidado facial. Su textura ligera y fácil de aplicar lo hacen perfecto para usar diariamente y darle a tu piel ese toque de cuidado que se merece."
},
{
  id: "BAQ584",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Base Aqua Cobertura Media",
  price: 30000,
  image: "images/productos/Maquillaje/Rostro/BAQ584.jpg",
  description: "La Base Aqua realza tu belleza natural con un acabado luminoso, fresco y sin peso, se funde perfectamente con la piel."
},
{
  id: "BMT1666",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Baul Mediano Negro",
  price: 40000,
  image: "images/productos/Maquillaje/Accesorios/BMT1666.jpg",
  description: "Organiza los productos favoritos de maquillaje y cuidado facial con la nueva cosmetiquera Trendy. Es muy amplia e incluye varios compartimentos internos en donde puedes organizar productos pequeños. Viene con separador para una organización óptima de los productos y separadores para organizar las brochas de maquillaje."
},
{
  id: "LL590",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo corazón con alas Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL590.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL588",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cirón rojo Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL588.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL586",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cirón cristal Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL586.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL585",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circón verde Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL585.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL584",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cadena Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL584.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL581",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circón cristal Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL581.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX445",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable mariposa tornasol",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX445.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX444",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable mariposa verde",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX444.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX443",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable mariposa roja",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX443.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO158",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO158.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO157",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO157.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO156",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO156.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO155",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO155.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "NP515",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Flor y Perla Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Anillos/NP515.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "MC934",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Flor y Perla Ajustable",
  price: 27000,
  image: "images/productos/Bisuteria/Anillos/MC934.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "NP514",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Flor Maxi Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Anillos/NP514.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO145",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazones Rojos Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO145.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO144",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazones blancos Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO144.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO143",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazones Rojos Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO143.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "NP513",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Blanco Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Anillos/NP513.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL565",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Cadena Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL565.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL564",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Doble Mariposa Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL564.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL567",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Solitario Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL567.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL569",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circones Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL569.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX426",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazón Maxi Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX426.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LR477",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Estrella Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Anillos/LR477.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "CB703",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circones Cristal Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB703.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL540",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazón Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL540.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL538",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circones Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL538.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX422",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Concha Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX422.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX417",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circón Fucsia Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX417.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "MC925",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Sol y Luna Ajustable",
  price: 27000,
  image: "images/productos/Bisuteria/Anillos/MC925.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LM855",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Cubano Ajustable",
  price: 21000,
  image: "images/productos/Bisuteria/Anillos/LM855.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX398",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Nota musical Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX398.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "PG428",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ovalos Ajustable",
  price: 11900,
  image: "images/productos/Bisuteria/Anillos/PG428.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "PG424",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Balin Ajustable",
  price: 11900,
  image: "images/productos/Bisuteria/Anillos/PG424.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LM839",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Sol y Luna Ajustable",
  price: 21000,
  image: "images/productos/Bisuteria/Anillos/LM839.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "MC784",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cuadrado circones",
  price: 27000,
  image: "images/productos/Bisuteria/Anillos/MC784.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LR501",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR501.jpg",
  description: "Material: Rodio"
},
{
  id: "LR500",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 Topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR500.jpg",
  description: "Material: Rodio"
},
{
  id: "LR499",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 Topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR499.jpg",
  description: "Material: Rodio"
},
{
  id: "LR498",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 Corazones",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR498.jpg",
  description: "Material: Rodio"
},
{
  id: "LR497",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR497.jpg",
  description: "Material: Rodio"
},
{
  id: "LL596",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL596.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL595",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Rosa 14 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL595.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL594",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Roja 14 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL594.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL593",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Amarillo 14 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL593.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL592",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Blanco 14 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL592.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL591",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Negro 14 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL591.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "AC442",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga cruz 1.4cm",
  price: 10900,
  image: "images/productos/Bisuteria/Aretes/AC442.jpg",
  description: "Material: Rodio"
},
{
  id: "AC441",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga estrellas 1.4cm",
  price: 10900,
  image: "images/productos/Bisuteria/Aretes/AC441.jpg",
  description: "Material: Rodio"
},
{
  id: "MC952",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 2 pares de topos",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC952.jpg",
  description: "Material: Rodio"
},
{
  id: "RO172",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 2 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO172.jpg",
  description: "Material: Rodio"
},
{
  id: "SP368",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de aretes",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP368.jpg",
  description: "Material: Rodio"
},
{
  id: "LM878",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 1,5 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM878.jpg",
  description: "Material: Rodio"
},
{
  id: "RO171",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 1,9 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO171.jpg",
  description: "Material: Rodio"
},
{
  id: "RO170",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO170.jpg",
  description: "Material: Rodio"
},
{
  id: "RO169",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO169.jpg",
  description: "Material: Rodio"
},
{
  id: "RO168",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO168.jpg",
  description: "Material: Rodio"
},
{
  id: "RO167",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO167.jpg",
  description: "Material: Rodio"
},
{
  id: "RO166",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO166.jpg",
  description: "Material: Rodio"
},
{
  id: "RO165",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO165.jpg",
  description: "Material: Rodio"
},
{
  id: "MC946",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set candongas x 3",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC946.jpg",
  description: "Material: Rodio"
},
{
  id: "MC945",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set candongas x 3",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC945.jpg",
  description: "Material: Rodio"
},
{
  id: "MC944",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set candongas x 3",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC944.jpg",
  description: "Material: Rodio"
},
{
  id: "SP367",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete ﬂor 2 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP367.jpg",
  description: "Material: Rodio"
},
{
  id: "SP365",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP365.jpg",
  description: "Material: Rodio"
},
{
  id: "SP364",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP364.jpg",
  description: "Material: Rodio"
},
{
  id: "SP363",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP363.jpg",
  description: "Material: Rodio"
},
{
  id: "SP362",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP362.jpg",
  description: "Material: Rodio"
},
{
  id: "SP361",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP361.jpg",
  description: "Material: Rodio"
},
{
  id: "MC943",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 topos",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC943.jpg",
  description: "Material: Rodio"
},
{
  id: "PG460",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Estrella 5 mm",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG460.jpg",
  description: "Material: Rodio"
},
{
  id: "LL572",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Corona 1 cm x 1,4 cm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL572.jpg",
  description: "Material: Rodio"
},
{
  id: "MC938",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor Doble 1,5 cm x 3,1 cm",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC938.jpg",
  description: "Material: Rodio"
},
{
  id: "RO154",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bicolor 1,9 cm x 1,5 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO154.jpg",
  description: "Material: Rodio"
},
{
  id: "SP356",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi Blanco 3 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP356.jpg",
  description: "Material: Rodio"
},
{
  id: "GP454",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 5,5 cm",
  price: 7100,
  image: "images/productos/Bisuteria/Aretes/GP454.jpg",
  description: "Material: Acero"
},
{
  id: "GP453",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "candonga Lisa 2,9 cm",
  price: 7100,
  image: "images/productos/Bisuteria/Aretes/GP453.jpg",
  description: "Material: Acero"
},
{
  id: "PC731",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 1,3 cm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC731.jpg",
  description: "Material: Acero"
},
{
  id: "PC730",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 1,6",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC730.jpg",
  description: "Material: Acero"
},
{
  id: "PC729",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 1,5 cm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC729.jpg",
  description: "Material: Acero"
},
{
  id: "PG459",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 1 cm",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG459.jpg",
  description: "Material: Rodio"
},
{
  id: "PG458",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 1,5 X 1,3",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG458.jpg",
  description: "Material: Rodio"
},
{
  id: "FT329",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi FLor 4,3 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT329.jpg",
  description: "Material: Rodio"
},
{
  id: "FT328",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi Corazón 2,6 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT328.jpg",
  description: "Material: Rodio"
},
{
  id: "SP354",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor y Perla 2,4 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP354.jpg",
  description: "Material: Rodio"
},
{
  id: "FT326",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor 2,9 x 2,4 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT326.jpg",
  description: "Material: Rodio"
},
{
  id: "FT325",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Blanca 3,4 cm x 2,4 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT325.jpg",
  description: "Material: Rodio"
},
{
  id: "FT324",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor Turquesa 3,4 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT324.jpg",
  description: "Material: Rodio"
},
{
  id: "SP353",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor Negro 3 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP353.jpg",
  description: "Material: Rodio"
},
{
  id: "OX439",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón 3,4 cm",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX439.jpg",
  description: "Material: Rodio"
},
{
  id: "OX438",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Entorchada 2,9 cm",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX438.jpg",
  description: "Material: Rodio"
},
{
  id: "RO137",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 1,7cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO137.jpg",
  description: "Material: Rodio"
},
{
  id: "RO136",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Set x 3",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO136.jpg",
  description: "Material: Rodio"
},
{
  id: "SP351",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi 6,2 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP351.jpg",
  description: "Material: Rodio"
},
{
  id: "RO115",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes FLor y Perla 2,5 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO115.jpg",
  description: "Material: Acero"
},
{
  id: "RO111",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor 2,5 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO111.jpg",
  description: "Material: Acero"
},
{
  id: "OX433",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Doble Corazón 3,1 cm x1,7 cm",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX433.jpg",
  description: "Material: Acero"
},
{
  id: "PG449",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Gota y Perlas 1,9 cm",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG449.jpg",
  description: "Material: Rodio"
},
{
  id: "RO108",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 2,7cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO108.jpg",
  description: "Material: Rodio"
},
{
  id: "RO107",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga balín diamantado 3.5cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO107.jpg",
  description: "Material: Rodio"
},
{
  id: "LM868",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga balín italy 3.7 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM868.jpg",
  description: "Material: Rodio"
},
{
  id: "LM867",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 2.1 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM867.jpg",
  description: "Material: Rodio"
},
{
  id: "LM865",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 3 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM865.jpg",
  description: "Material: Rodio"
},
{
  id: "LM863",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 4cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM863.jpg",
  description: "Material: Rodio"
},
{
  id: "RO104",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Plateada 3cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO104.jpg",
  description: "Material: Rodio"
},
{
  id: "LL547",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrella 1.5cm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL547.jpg",
  description: "Material: Rodio"
},
{
  id: "OX429",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrella 2.5cm x 2.7cm",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX429.jpg",
  description: "Material: Rodio"
},
{
  id: "LM861",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrela 5cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM861.jpg",
  description: "Material: Rodio"
},
{
  id: "AC431",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo 1.8 cm",
  price: 10900,
  image: "images/productos/Bisuteria/Aretes/AC431.jpg",
  description: "Material: Rodio"
},
{
  id: "FT318",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor negro",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT318.jpg",
  description: "Material: Rodio"
},
{
  id: "NP509",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete ﬂor rosada",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP509.jpg",
  description: "Material: Rodio"
},
{
  id: "NP508",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 2.2 Cm",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP508.jpg",
  description: "Material: Rodio"
},
{
  id: "LM859",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo corazón rojo 8mm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM859.jpg",
  description: "Material: Rodio"
},
{
  id: "RO101",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Escalador 2 cm x 1,1 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO101.jpg",
  description: "Material: Rodio"
},
{
  id: "RO100",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Set x3 cruz",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO100.jpg",
  description: "Material: Rodio"
},
{
  id: "LL544",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Estrella 1,1 cm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL544.jpg",
  description: "Material: Rodio"
},
{
  id: "OX427",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Escalador Corazones 2,2 cm x 6 mm",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX427.jpg",
  description: "Material: Rodio"
},
{
  id: "LL543",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Cristal 1,4 cm x 4 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL543.jpg",
  description: "Material: Rodio"
},
{
  id: "LL541",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor Cristal 8 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL541.jpg",
  description: "Material: Rodio"
},
{
  id: "FT317",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Set X3 Dorada",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT317.jpg",
  description: "Material: Rodio"
},
{
  id: "SP343",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón Blanco 1,6 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP343.jpg",
  description: "Material: Rodio"
},
{
  id: "LL527",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Cruz 1,3 cm x 8 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL527.jpg",
  description: "Material: Rodio"
},
{
  id: "RO095",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos astronauta Set x 3",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO095.jpg",
  description: "Material: Rodio"
},
{
  id: "SP341",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi Corazón 2,9 cm x 3,1 m",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP341.jpg",
  description: "Material: Rodio"
},
{
  id: "PC723",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Figura 1 cm x 8 mm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC723.jpg",
  description: "Material: Rodio"
},
{
  id: "BR122",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set topos x3",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/BR122.jpg",
  description: "Material: Rodio"
},
{
  id: "BR124",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set de topos x3",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/BR124.jpg",
  description: "Material: Rodio"
},
{
  id: "RO088",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete doble cristal 1,4 cm x 1 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO088.jpg",
  description: "Material: Rodio"
},
{
  id: "MC921",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristal 1,6 cm x 1,3 cm",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC921.jpg",
  description: "Material: Rodio"
},
{
  id: "RO087",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristal 1,3 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO087.jpg",
  description: "Material: Rodio"
},
{
  id: "RO086",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cuadrado 1,1 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO086.jpg",
  description: "Material: Rodio"
},
{
  id: "MC920",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristales 1,2 m",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC920.jpg",
  description: "Material: Rodio"
},
{
  id: "RO082",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor 2,6 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO082.jpg",
  description: "Material: Rodio"
},
{
  id: "FT310",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Blanco 4,9 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT310.jpg",
  description: "Material: Rodio"
},
{
  id: "FT309",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Rojo 4,9 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT309.jpg",
  description: "Material: Rodio"
},
{
  id: "FT308",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Verde 4,9 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT308.jpg",
  description: "Material: Rodio"
},
{
  id: "FT307",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Beige 4,9 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT307.jpg",
  description: "Material: Rodio"
},
{
  id: "FT306",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete tejido Azul 4,9 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT306.jpg",
  description: "Material: Rodio"
},
{
  id: "FT305",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Colombia 4,9 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT305.jpg",
  description: "Material: Rodio"
},
{
  id: "SP325",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristal 3,8 cm x 1,4 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP325.jpg",
  description: "Material: Rodio"
},
{
  id: "RO077",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor 1,8 cm x 1,7 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO077.jpg",
  description: "Material: Rodio"
},
{
  id: "LL511",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo puntos 1 cm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL511.jpg",
  description: "Material: Rodio"
},
{
  id: "PC718",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol negro 8mm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC718.jpg",
  description: "Material: Rodio"
},
{
  id: "NP478",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete 3 circulos 5,9 cm x 2,5 cm",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP478.jpg",
  description: "Material: Rodio"
},
{
  id: "NP474",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Óvalo 5,9 cm X 1,8 cm",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP474.jpg",
  description: "Material: Rodio"
},
{
  id: "NP473",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete corazón 2 cm x 1,4 cm",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP473.jpg",
  description: "Material: Rodio"
},
{
  id: "LM803",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete escarabajo 3.7 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM803.jpg",
  description: "Material: Rodio"
},
{
  id: "LM802",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete langosta 4.6cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM802.jpg",
  description: "Material: Rodio"
},
{
  id: "LM801",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete cangrejo 3 x 2.1 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM801.jpg",
  description: "Material: Rodio"
},
{
  id: "LM799",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete medusa 3cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM799.jpg",
  description: "Material: Rodio"
},
{
  id: "LM798",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete caimán 5.5",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM798.jpg",
  description: "Material: Rodio"
},
{
  id: "LM797",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete cocodrilo 4.2cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM797.jpg",
  description: "Material: Rodio"
},
{
  id: "LM796",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete rana 4cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM796.jpg",
  description: "Material: Rodio"
},
{
  id: "LM795",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete medusa 2.1cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM795.jpg",
  description: "Material: Rodio"
},
{
  id: "LM794",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete concha 2.9cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM794.jpg",
  description: "Material: Rodio"
},
{
  id: "LM793",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Escarabajo 3.6 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM793.jpg",
  description: "Material: Rodio"
},
{
  id: "CB648",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete gota 3cm",
  price: 15500,
  image: "images/productos/Bisuteria/Aretes/CB648.jpg",
  description: "Material: Rodio"
},
{
  id: "LR418",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR418.jpg",
  description: "Material: Rodio"
},
{
  id: "PC696",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol rojo 1cm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC696.jpg",
  description: "Material: Rodio"
},
{
  id: "PC695",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol negro 1cm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC695.jpg",
  description: "Material: Rodio"
},
{
  id: "PC697",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol blanco 1cm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC697.jpg",
  description: "Material: Rodio"
},
{
  id: "MC870",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrella de mar",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC870.jpg",
  description: "Material: Rodio"
},
{
  id: "CB642",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Gota 3,1 cm",
  price: 15500,
  image: "images/productos/Bisuteria/Aretes/CB642.jpg",
  description: "Material: Rodio"
},
{
  id: "OX315",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol verde 1.4 cm",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX315.jpg",
  description: "Material: Rodio"
},
{
  id: "FT262",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete animal Print 1,7 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT262.jpg",
  description: "Material: Rodio"
},
{
  id: "BR095",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete animal print 4.5 cm",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/BR095.jpg",
  description: "Material: Rodio"
},
{
  id: "LR310",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga tejida Blanca 4cm",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR310.jpg",
  description: "Material: Oro Goldfield - Acero"
},
{
  id: "LR308",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga tejida Roja 4cm",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR308.jpg",
  description: "Material: Oro Goldfield - Acero"
},
{
  id: "LR307",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga tejida negra 4cm",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR307.jpg",
  description: "Material: Oro Goldfield - Acero"
},
{
  id: "TS273",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo seguridad",
  price: 5400,
  image: "images/productos/Bisuteria/Aretes/TS273.jpg",
  description: "Material: Acero"
},
{
  id: "NP527",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Chicle Mocca 40 cm + 5 cm",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP527.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT353",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas Corazón Mocca 41 cm + 5 cm Extensión",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT353.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "SP395",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Margarita 38 cm + 5 cm Extensión",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP395.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT352",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas y Corazones Vinotinto 38 cm + 5 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT352.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT349",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Corazones Pasador 44 cm + 5 Extensión",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT349.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "AC347-P",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena personalizada 1 letra. letra adicional TS256",
  price: 10900,
  image: "images/productos/Bisuteria/Collares/AC347-P.jpg",
  description: "Material: Rodio"
},
{
  id: "LL250-P",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena personalizada 1 letra. letra adicional GP366",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL250-P.jpg",
  description: "Material: Rodio"
},
{
  id: "CB672",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena personalizada 1 letra-letra adicional GP445",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB672.jpg",
  description: "Material: Rodio"
},
{
  id: "RO174",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas 44 cm + 5 cm Extensión",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO174.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO173",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas 44 cm + 5 cm Extensíon",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO173.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT345",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Café 42 cm + 6 Extensión",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT345.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "SP389",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Colores 42 cm + 5 Extensión",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP389.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT344",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar maxi corazón negro 40cm + 6cm extensión",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT344.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT343",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar maxi negro y dorado 40cm cm + 6cm",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT343.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT342",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar maxi rojo y dorado 40cm + 6 cm extensión",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT342.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "NP526",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar perla corazón Rojo 40cm + 6 cm extensión",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP526.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "NP525",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar perla corazón café 40cm + 6 cm extensión",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP525.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "NP524",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar perla corazón blanco 40cm + 6 cm extensión",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP524.jpg",
  description: "Material: Rodio"
},
{
  id: "MC950",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije princesa 49 cm",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC950.jpg",
  description: "Material: Rodio"
},
{
  id: "MC949",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije princesa 49 cm",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC949.jpg",
  description: "Material: Rodio"
},
{
  id: "MC948",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije princesa 49 cm",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC948.jpg",
  description: "Material: Rodio"
},
{
  id: "RO164",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable 48cm dije mariposa verde",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO164.jpg",
  description: "Material: Rodio"
},
{
  id: "RO163",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable 48cm dije mariposa tornasol",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO163.jpg",
  description: "Material: Rodio"
},
{
  id: "RO162",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable 48cm dije mariposa rojo",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO162.jpg",
  description: "Material: Rodio"
},
{
  id: "LL580",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena balines 44,5 cm +3cm extensión",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL580.jpg",
  description: "Material: Rodio"
},
{
  id: "LL579",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena balín ovalado 44,5 cm +3cm extensión",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL579.jpg",
  description: "Material: Rodio"
},
{
  id: "MC942",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi corazón Negro 40 cm +5 Extensión",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC942.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "NP522",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Negro 45 cm + 5 extensión",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP522.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "NP521",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Blanco 44cm + 5 extensión",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP521.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "SP360",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Margarita 41 cm + 5 Extensión",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP360.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL577",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Guadalupe 45 cm",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL577.jpg",
  description: "Material: Acero"
},
{
  id: "LL576",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena San Benito 45 cm",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL576.jpg",
  description: "Material: Acero"
},
{
  id: "LL575",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena San Miguel y Guadalupe 45 cm",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL575.jpg",
  description: "Material: Acero"
},
{
  id: "MC939",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Blanco y Negro 42 cm +6 cm Extensión",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC939.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "MC940",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Amariilo y Café 42 cm + 6 cm Extensión",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC940.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "MC941",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Amarillo y Café 42 cm + 5 cm Extensión",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC941.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT332",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar maxi Amarillo y Vino 40 cm + 5 cm Extensión",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT332.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT333",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Lila 40 cm + 5 Extensión",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT333.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT334",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Rosa y Rojo 40 cm + 5 cm Extension",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT334.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT336",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Celeste 41 cm + 6 cm Extensión",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT336.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT330",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Corazón Rojo 38 cm + 6 cm Extensión",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT330.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "SP355",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Corazones Moca 38 cm + 6 Extensión",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP355.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO153",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Rosa 38 cm + 7 cm Extensión",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO153.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO151",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Rojo 36 cm + 7 cm extensión",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO151.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO152",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Blanco 36 cm + 7 cm Extensión",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO152.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO149",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Negro 37 cm +5 extensión",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO149.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO150",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Moca 38 cm + 6 extensión",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO150.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "NP492",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Chunky Negro 42 cm x 1,6 cm + 5 extensión",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP492.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR491",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Flor Cristal Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR491.jpg",
  description: "Material: Rodio"
},
{
  id: "LR490",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar FLor Roja Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR490.jpg",
  description: "Material: Rodio"
},
{
  id: "LR489",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Flor Verde Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR489.jpg",
  description: "Material: Rodio"
},
{
  id: "OX440",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Bandera Colombia 40 cm + 5 Extensión",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX440.jpg",
  description: "Material: Rodio"
},
{
  id: "CB712",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije Colombia",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB712.jpg",
  description: "Material: Rodio"
},
{
  id: "CB711",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije Colombia",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB711.jpg",
  description: "Material: Rodio"
},
{
  id: "CB710",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije Colombia",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB710.jpg",
  description: "Material: Rodio"
},
{
  id: "PG453",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Mini Aros Balines 3 mm x 45 cm + 5 cm",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG453.jpg",
  description: "Material: Rodio"
},
{
  id: "LL555",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cola Ratón Rayada 1mm x 45 cm + 5 cm",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL555.jpg",
  description: "Material: Rodio"
},
{
  id: "PG451",
  category: "bisuteria",
  subcategory: "Collares",
  name: "cadena Cola Ratón 1 mm x 45 cm + 5 Extensión",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG451.jpg",
  description: "Material: Rodio"
},
{
  id: "LL554",
  category: "bisuteria",
  subcategory: "Collares",
  name: "cadena candado Plana 3mm x 45 cm + 5 cm",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL554.jpg",
  description: "Material: Rodio"
},
{
  id: "GP451Z",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra Z",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451Z.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451Y",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra Y",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451Y.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451X",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra X",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451X.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451W",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra W",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451W.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451V",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra V",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451V.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451U",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra U",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451U.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451T",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra T",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451T.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451S",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra S",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451S.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451O",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra O",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451O.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451N",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra N",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451N.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451M",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar letra M",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451M.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451K",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra K",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451K.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451J",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra J",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451J.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451I",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra I",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451I.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451H",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra H",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451H.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451F",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra F",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451F.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451E",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra E",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451E.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451C",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra C",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451C.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451B",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra B",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451B.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "MC931",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena grano 47 cm x 5mm + 5 extensión",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC931.jpg",
  description: "Material: Rodio"
},
{
  id: "OX430",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije estrella",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX430.jpg",
  description: "Material: Rodio"
},
{
  id: "RO103",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije estrella",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO103.jpg",
  description: "Material: Rodio"
},
{
  id: "OX428",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar lazo 2,5mm 43.5cm + 5 cm extensión",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX428.jpg",
  description: "Material: Rodio"
},
{
  id: "LM860",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije ballena",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM860.jpg",
  description: "Material: Rodio"
},
{
  id: "LR476",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Dije Sagrado Corazón Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR476.jpg",
  description: "Material: Rodio"
},
{
  id: "SP337",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dijes del Mar",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP337.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "SP336",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas Caracol y Concha",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/SP336.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "GP449",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Elefante",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP449.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "GP448",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar DIje Luna",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP448.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "GP447",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Árbol de La vida",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP447.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "PG444",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Corazón Gris 1 cm x 45 cm",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG444.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "PG442",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Corazón Negro 1 cm x 45 cm",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG442.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "PG441",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collare Corazón Amarillo 1 cm x 45 cm",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG441.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "PG440",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Corazón Dorado 1 cm x 45 cm",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG440.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OX406",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Lazo 2 mm x 45 cm + 5 Extensión",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX406.jpg",
  description: "Material: Rodio"
},
{
  id: "LR467",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena San Miguel Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR467.jpg",
  description: "Material: Rodio"
},
{
  id: "CB692",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar 2,5 mm x 45 cm + 5 extensión",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB692.jpg",
  description: "Material: Rodio"
},
{
  id: "PG438",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena cubana destellos 2 mm x 45 cm",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG438.jpg",
  description: "Material: Rodio"
},
{
  id: "LL518",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana Corazones 1 mm x 45 cm + 5",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL518.jpg",
  description: "Material: Rodio"
},
{
  id: "LL517",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Aros Balín 2 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL517.jpg",
  description: "Material: Rodio"
},
{
  id: "LL515",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar Balín 2mm x 45 cm + 5 cm extensión",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL515.jpg",
  description: "Material: Rodio"
},
{
  id: "LL514",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena balín y canutillo 45 cm + 5 cm extensión",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL514.jpg",
  description: "Material: Rodio"
},
{
  id: "LM852",
  category: "bisuteria",
  subcategory: "Collares",
  name: "choker corazones",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM852.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LM851",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Estrellas",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM851.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LM849",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas y Estrella",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM849.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO053",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar trébol Rojo 47 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO053.jpg",
  description: "Material: Rodio"
},
{
  id: "CB684",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Dije Trébol Rojo",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB684.jpg",
  description: "Material: Rodio"
},
{
  id: "CB683",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadeja Dije Trébol Blanco",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB683.jpg",
  description: "Material: Rodio"
},
{
  id: "CB682",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Dije Trébol Negro",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB682.jpg",
  description: "Material: Rodio"
},
{
  id: "LL505",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena estrellas",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL505.jpg",
  description: "Material: Acero"
},
{
  id: "OX387",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena DIje Oso",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX387.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "PG421",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Aros Balin 45 cm x 2 mm + 5 extensión",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG421.jpg",
  description: "Material: Rodio"
},
{
  id: "LM837",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana 45 cm x 4 mm + 5 extensión",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM837.jpg",
  description: "Material: Rodio"
},
{
  id: "RO044",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar 45 cm x 4mm + 5 extensión",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO044.jpg",
  description: "Material: Rodio"
},
{
  id: "RO042",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Negro 45 cm + 5 cm extensión",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO042.jpg",
  description: "Material: Rodio"
},
{
  id: "RO041",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Negro 45 cm + 5 cm extensión",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO041.jpg",
  description: "Material: Rodio"
},
{
  id: "RO040",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Negro y Dorado 42,5 cm + 6 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO040.jpg",
  description: "Material: Rodio"
},
{
  id: "RO038",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Rojo 42,5 cm + 6 cm extensión",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO038.jpg",
  description: "Material: Rodio"
},
{
  id: "RO037",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Dorado 44 cm + 5 extensión",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO037.jpg",
  description: "Material: Rodio"
},
{
  id: "RO036",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Blanco 42,5 cm + 6 cm de extensión",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO036.jpg",
  description: "Material: Rodio"
},
{
  id: "RO035",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Rojo y Dorado 42,5 cm + 6 cm de",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO035.jpg",
  description: "Material: Rodio"
},
{
  id: "LL498",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena aros balín 1,5mm",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL498.jpg",
  description: "Material: Rodio"
},
{
  id: "AC425",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena singapur 2mm",
  price: 10900,
  image: "images/productos/Bisuteria/Collares/AC425.jpg",
  description: "Material: Rodio"
},
{
  id: "LL492",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena veneciana destellos",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL492.jpg",
  description: "Material: Rodio"
},
{
  id: "CB655",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena lazo con canutillo 2,5mm",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB655.jpg",
  description: "Material: Rodio"
},
{
  id: "LL491",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena singapur 2,5mm",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL491.jpg",
  description: "Material: Rodio"
},
{
  id: "GP443",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Mano Hamsa 45 cm",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP443.jpg",
  description: "Material: Acero - Zamak"
},
{
  id: "GP442",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Árbol de la vida 45 cm",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP442.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP440",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Corazón 45 cm",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP440.jpg",
  description: "Material: Acero - Fantasia"
},
{
  id: "GP439",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Ojo Turco 45 cm",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP439.jpg",
  description: "Material: Acero - Fantasia"
},
{
  id: "GP436",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Corazón 45 cm",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP436.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "LM790",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije relicario 4.3 x 4cm",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM790.jpg",
  description: "Material: Rodio - Covergold"
},
{
  id: "LM789",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije relicario 4.3 x 4cm",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM789.jpg",
  description: "Material: Rodio - Covergold"
},
{
  id: "NP464",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar de estrellas multicolor 45cm + 5 ext",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP464.jpg",
  description: "Material: Rodio"
},
{
  id: "NP463",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar de estrellas negras 45cm + 5 ext",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP463.jpg",
  description: "Material: Rodio"
},
{
  id: "RO009",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dije trébol Negro 43cm + 5cm extensión",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO009.jpg",
  description: "Material: Rodio"
},
{
  id: "LR417",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije medusa",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR417.jpg",
  description: "Material: Rodio"
},
{
  id: "NP456",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Leopardo",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP456.jpg",
  description: "Material: Rodio"
},
{
  id: "OX362",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable Dije Tortuga",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX362.jpg",
  description: "Material: Rodio"
},
{
  id: "NP455",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Estrella Cristal 45 cm + 5 extensión",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP455.jpg",
  description: "Material: Rodio"
},
{
  id: "MC851",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar trébol blanco",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC851.jpg",
  description: "Material: Rodio"
},
{
  id: "FT285",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena corazón doble dorado y plateado",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT285.jpg",
  description: "Material: Rodio"
},
{
  id: "CB631",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dije trébol mini Negro",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB631.jpg",
  description: "Material: Rodio"
},
{
  id: "NP424",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dijes trébol Rojo 40 cm + 5 cm Extensión",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP424.jpg",
  description: "Material: Acero"
},
{
  id: "NP426",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dijes Verde Negro 40 cm + 5 cm Extensión",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP426.jpg",
  description: "Material: Acero"
},
{
  id: "CB625",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dije oso, cadena ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB625.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "MC804",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije abeja",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC804.jpg",
  description: "Material: Rodio"
},
{
  id: "DC058",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar trébol, largo 70 cm",
  price: 52000,
  image: "images/productos/Bisuteria/Collares/DC058.jpg",
  description: "Material: Rodio"
},
{
  id: "NP403",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajusteble dije mamá",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP403.jpg",
  description: "Material: Rodio"
},
{
  id: "LR332",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar 7 chakras",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR332.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "PC667",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar corazón",
  price: 9000,
  image: "images/productos/Bisuteria/Collares/PC667.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "PC659",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible ópalo 39cm + 5 cm extensión",
  price: 9000,
  image: "images/productos/Bisuteria/Collares/PC659.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "CB613",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Rafael, Salud",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB613.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "CB610",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Gabriel, Mensajero de Dios",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB610.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "CB507",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Joﬁel 48 cm ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB507.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "CB508",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Uriel 48 cm ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB508.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "CB511",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Zadaquiel 48 cm ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB511.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "AC397",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije estrella de mar",
  price: 10900,
  image: "images/productos/Bisuteria/Collares/AC397.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "LR302",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar 7 chakras",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR302.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OR441",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar lluvia de oro 44cm. Dije: 4.2cm",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/OR441.jpg",
  description: "Material: Acero - Zamak"
},
{
  id: "GP220",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar placa protección 45cm. Dije: 1cm",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP220.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR071",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra E 40cm + 6cm extensión",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR071.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR063",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra F 40cm + 6cm extensión",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR063.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR062",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra I 40cm + 6cm extensión",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR062.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR069",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra N 40cm + 6cm extensión",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR069.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR067",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra Y 40cm + 6cm extensión",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR067.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR061",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra C 40cm + 6cm extensión",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR061.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR066",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra V 40cm + 6cm extensión",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR066.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR064",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra K 40cm + 6cm extensión",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR064.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR065",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra S 40cm + 6cm extensión",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR065.jpg",
  description: "Material: Oro Goldfield"
},
];
