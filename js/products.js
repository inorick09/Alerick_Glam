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
  name: "Anillo corazón con alas Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL590.png",
  description: "Anillo Ajustable en Rodio"
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
{
  id: "LR501",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR501.png",
  description: "Material: Rodio"
},
{
  id: "LR500",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 Topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR500.png",
  description: "Material: Rodio"
},
{
  id: "LR499",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 Topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR499.png",
  description: "Material: Rodio"
},
{
  id: "LR498",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 Corazones",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR498.png",
  description: "Material: Rodio"
},
{
  id: "LR497",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR497.png",
  description: "Material: Rodio"
},
{
  id: "LL596",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL596.png",
  description: "Material: Oro Goldfield"
},
{
  id: "LL595",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Rosa 14 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL595.png",
  description: "Material: Oro Goldfield"
},
{
  id: "LL594",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Roja 14 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL594.png",
  description: "Material: Oro Goldfield"
},
{
  id: "LL593",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Amarillo 14 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL593.png",
  description: "Material: Oro Goldfield"
},
{
  id: "LL592",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Blanco 14 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL592.png",
  description: "Material: Oro Goldfield"
},
{
  id: "LL591",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Negro 14 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL591.png",
  description: "Material: Oro Goldfield"
},
{
  id: "AC442",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga cruz 1.4cm",
  price: 10900,
  image: "images/productos/Bisuteria/Aretes/AC442.png",
  description: "Material: Rodio"
},
{
  id: "AC441",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga estrellas 1.4cm",
  price: 10900,
  image: "images/productos/Bisuteria/Aretes/AC441.png",
  description: "Material: Rodio"
},
{
  id: "MC952",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 2 pares de topos",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC952.png",
  description: "Material: Rodio"
},
{
  id: "RO172",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 2 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO172.png",
  description: "Material: Rodio"
},
{
  id: "SP368",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de aretes",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP368.png",
  description: "Material: Rodio"
},
{
  id: "LM878",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 1,5 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM878.png",
  description: "Material: Rodio"
},
{
  id: "RO171",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 1,9 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO171.png",
  description: "Material: Rodio"
},
{
  id: "RO170",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO170.png",
  description: "Material: Rodio"
},
{
  id: "RO169",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO169.png",
  description: "Material: Rodio"
},
{
  id: "RO168",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO168.png",
  description: "Material: Rodio"
},
{
  id: "RO167",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO167.png",
  description: "Material: Rodio"
},
{
  id: "RO166",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO166.png",
  description: "Material: Rodio"
},
{
  id: "RO165",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO165.png",
  description: "Material: Rodio"
},
{
  id: "MC946",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set candongas x 3",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC946.png",
  description: "Material: Rodio"
},
{
  id: "MC945",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set candongas x 3",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC945.png",
  description: "Material: Rodio"
},
{
  id: "MC944",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set candongas x 3",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC944.png",
  description: "Material: Rodio"
},
{
  id: "SP367",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete ﬂor 2 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP367.png",
  description: "Material: Rodio"
},
{
  id: "SP365",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP365.png",
  description: "Material: Rodio"
},
{
  id: "SP364",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP364.png",
  description: "Material: Rodio"
},
{
  id: "SP363",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP363.png",
  description: "Material: Rodio"
},
{
  id: "SP362",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP362.png",
  description: "Material: Rodio"
},
{
  id: "SP361",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP361.png",
  description: "Material: Rodio"
},
{
  id: "MC943",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 topos",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC943.png",
  description: "Material: Rodio"
},
{
  id: "PG460",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Estrella 5 mm",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG460.png",
  description: "Material: Rodio"
},
{
  id: "LL572",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Corona 1 cm x 1,4 cm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL572.png",
  description: "Material: Rodio"
},
{
  id: "MC938",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor Doble 1,5 cm x 3,1 cm",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC938.png",
  description: "Material: Rodio"
},
{
  id: "RO154",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bicolor 1,9 cm x 1,5 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO154.png",
  description: "Material: Rodio"
},
{
  id: "SP356",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi Blanco 3 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP356.png",
  description: "Material: Rodio"
},
{
  id: "GP454",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 5,5 cm",
  price: 7100,
  image: "images/productos/Bisuteria/Aretes/GP454.png",
  description: "Material: Acero"
},
{
  id: "GP453",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "candonga Lisa 2,9 cm",
  price: 7100,
  image: "images/productos/Bisuteria/Aretes/GP453.png",
  description: "Material: Acero"
},
{
  id: "PC731",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 1,3 cm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC731.png",
  description: "Material: Acero"
},
{
  id: "PC730",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 1,6",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC730.png",
  description: "Material: Acero"
},
{
  id: "PC729",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 1,5 cm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC729.png",
  description: "Material: Acero"
},
{
  id: "PG459",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 1 cm",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG459.png",
  description: "Material: Rodio"
},
{
  id: "PG458",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 1,5 X 1,3",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG458.png",
  description: "Material: Rodio"
},
{
  id: "FT329",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi FLor 4,3 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT329.png",
  description: "Material: Rodio"
},
{
  id: "FT328",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi Corazón 2,6 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT328.png",
  description: "Material: Rodio"
},
{
  id: "SP354",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor y Perla 2,4 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP354.png",
  description: "Material: Rodio"
},
{
  id: "FT326",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor 2,9 x 2,4 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT326.png",
  description: "Material: Rodio"
},
{
  id: "FT325",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Blanca 3,4 cm x 2,4 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT325.png",
  description: "Material: Rodio"
},
{
  id: "FT324",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor Turquesa 3,4 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT324.png",
  description: "Material: Rodio"
},
{
  id: "SP353",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor Negro 3 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP353.png",
  description: "Material: Rodio"
},
{
  id: "OX439",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón 3,4 cm",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX439.png",
  description: "Material: Rodio"
},
{
  id: "OX438",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Entorchada 2,9 cm",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX438.png",
  description: "Material: Rodio"
},
{
  id: "RO137",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 1,7cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO137.png",
  description: "Material: Rodio"
},
{
  id: "RO136",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Set x 3",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO136.png",
  description: "Material: Rodio"
},
{
  id: "SP351",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi 6,2 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP351.png",
  description: "Material: Rodio"
},
{
  id: "RO115",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes FLor y Perla 2,5 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO115.png",
  description: "Material: Acero"
},
{
  id: "RO111",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor 2,5 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO111.png",
  description: "Material: Acero"
},
{
  id: "OX433",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Doble Corazón 3,1 cm x1,7 cm",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX433.png",
  description: "Material: Acero"
},
{
  id: "PG449",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Gota y Perlas 1,9 cm",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG449.png",
  description: "Material: Rodio"
},
{
  id: "RO108",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 2,7cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO108.png",
  description: "Material: Rodio"
},
{
  id: "RO107",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga balín diamantado 3.5cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO107.png",
  description: "Material: Rodio"
},
{
  id: "LM868",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga balín italy 3.7 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM868.png",
  description: "Material: Rodio"
},
{
  id: "LM867",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 2.1 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM867.png",
  description: "Material: Rodio"
},
{
  id: "LM865",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 3 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM865.png",
  description: "Material: Rodio"
},
{
  id: "LM863",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 4cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM863.png",
  description: "Material: Rodio"
},
{
  id: "RO104",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Plateada 3cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO104.png",
  description: "Material: Rodio"
},
{
  id: "LL547",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrella 1.5cm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL547.png",
  description: "Material: Rodio"
},
{
  id: "OX429",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrella 2.5cm x 2.7cm",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX429.png",
  description: "Material: Rodio"
},
{
  id: "LM861",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrela 5cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM861.png",
  description: "Material: Rodio"
},
{
  id: "AC431",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo 1.8 cm",
  price: 10900,
  image: "images/productos/Bisuteria/Aretes/AC431.png",
  description: "Material: Rodio"
},
{
  id: "FT318",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor negro",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT318.png",
  description: "Material: Rodio"
},
{
  id: "NP509",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete ﬂor rosada",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP509.png",
  description: "Material: Rodio"
},
{
  id: "NP508",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 2.2 Cm",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP508.png",
  description: "Material: Rodio"
},
{
  id: "LM859",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo corazón rojo 8mm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM859.png",
  description: "Material: Rodio"
},
{
  id: "RO101",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Escalador 2 cm x 1,1 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO101.png",
  description: "Material: Rodio"
},
{
  id: "RO100",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Set x3 cruz",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO100.png",
  description: "Material: Rodio"
},
{
  id: "LL544",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Estrella 1,1 cm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL544.png",
  description: "Material: Rodio"
},
{
  id: "OX427",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Escalador Corazones 2,2 cm x 6 mm",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX427.png",
  description: "Material: Rodio"
},
{
  id: "LL543",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Cristal 1,4 cm x 4 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL543.png",
  description: "Material: Rodio"
},
{
  id: "LL541",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor Cristal 8 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL541.png",
  description: "Material: Rodio"
},
{
  id: "FT317",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Set X3 Dorada",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT317.png",
  description: "Material: Rodio"
},
{
  id: "SP343",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón Blanco 1,6 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP343.png",
  description: "Material: Rodio"
},
{
  id: "LL527",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Cruz 1,3 cm x 8 mm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL527.png",
  description: "Material: Rodio"
},
{
  id: "RO095",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos astronauta Set x 3",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO095.png",
  description: "Material: Rodio"
},
{
  id: "SP341",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi Corazón 2,9 cm x 3,1 m",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP341.png",
  description: "Material: Rodio"
},
{
  id: "PC723",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Figura 1 cm x 8 mm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC723.png",
  description: "Material: Rodio"
},
{
  id: "BR122",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set topos x3",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/BR122.png",
  description: "Material: Rodio"
},
{
  id: "BR124",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set de topos x3",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/BR124.png",
  description: "Material: Rodio"
},
{
  id: "RO088",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete doble cristal 1,4 cm x 1 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO088.png",
  description: "Material: Rodio"
},
{
  id: "MC921",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristal 1,6 cm x 1,3 cm",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC921.png",
  description: "Material: Rodio"
},
{
  id: "RO087",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristal 1,3 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO087.png",
  description: "Material: Rodio"
},
{
  id: "RO086",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cuadrado 1,1 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO086.png",
  description: "Material: Rodio"
},
{
  id: "MC920",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristales 1,2 m",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC920.png",
  description: "Material: Rodio"
},
{
  id: "RO082",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor 2,6 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO082.png",
  description: "Material: Rodio"
},
{
  id: "FT310",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Blanco 4,9 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT310.png",
  description: "Material: Rodio"
},
{
  id: "FT309",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Rojo 4,9 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT309.png",
  description: "Material: Rodio"
},
{
  id: "FT308",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Verde 4,9 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT308.png",
  description: "Material: Rodio"
},
{
  id: "FT307",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Beige 4,9 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT307.png",
  description: "Material: Rodio"
},
{
  id: "FT306",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete tejido Azul 4,9 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT306.png",
  description: "Material: Rodio"
},
{
  id: "FT305",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Colombia 4,9 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT305.png",
  description: "Material: Rodio"
},
{
  id: "SP325",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristal 3,8 cm x 1,4 cm",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP325.png",
  description: "Material: Rodio"
},
{
  id: "RO077",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor 1,8 cm x 1,7 cm",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO077.png",
  description: "Material: Rodio"
},
{
  id: "LL511",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo puntos 1 cm",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL511.png",
  description: "Material: Rodio"
},
{
  id: "PC718",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol negro 8mm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC718.png",
  description: "Material: Rodio"
},
{
  id: "NP478",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete 3 circulos 5,9 cm x 2,5 cm",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP478.png",
  description: "Material: Rodio"
},
{
  id: "NP474",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Óvalo 5,9 cm X 1,8 cm",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP474.png",
  description: "Material: Rodio"
},
{
  id: "NP473",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete corazón 2 cm x 1,4 cm",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP473.png",
  description: "Material: Rodio"
},
{
  id: "LM803",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete escarabajo 3.7 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM803.png",
  description: "Material: Rodio"
},
{
  id: "LM802",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete langosta 4.6cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM802.png",
  description: "Material: Rodio"
},
{
  id: "LM801",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete cangrejo 3 x 2.1 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM801.png",
  description: "Material: Rodio"
},
{
  id: "LM799",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete medusa 3cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM799.png",
  description: "Material: Rodio"
},
{
  id: "LM798",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete caimán 5.5",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM798.png",
  description: "Material: Rodio"
},
{
  id: "LM797",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete cocodrilo 4.2cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM797.png",
  description: "Material: Rodio"
},
{
  id: "LM796",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete rana 4cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM796.png",
  description: "Material: Rodio"
},
{
  id: "LM795",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete medusa 2.1cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM795.png",
  description: "Material: Rodio"
},
{
  id: "LM794",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete concha 2.9cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM794.png",
  description: "Material: Rodio"
},
{
  id: "LM793",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Escarabajo 3.6 cm",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM793.png",
  description: "Material: Rodio"
},
{
  id: "CB648",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete gota 3cm",
  price: 15500,
  image: "images/productos/Bisuteria/Aretes/CB648.png",
  description: "Material: Rodio"
},
{
  id: "LR418",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR418.png",
  description: "Material: Rodio"
},
{
  id: "PC696",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol rojo 1cm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC696.png",
  description: "Material: Rodio"
},
{
  id: "PC695",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol negro 1cm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC695.png",
  description: "Material: Rodio"
},
{
  id: "PC697",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol blanco 1cm",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC697.png",
  description: "Material: Rodio"
},
{
  id: "MC870",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrella de mar",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC870.png",
  description: "Material: Rodio"
},
{
  id: "CB642",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Gota 3,1 cm",
  price: 15500,
  image: "images/productos/Bisuteria/Aretes/CB642.png",
  description: "Material: Rodio"
},
{
  id: "OX315",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol verde 1.4 cm",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX315.png",
  description: "Material: Rodio"
},
{
  id: "FT262",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete animal Print 1,7 cm",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT262.png",
  description: "Material: Rodio"
},
{
  id: "BR095",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete animal print 4.5 cm",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/BR095.png",
  description: "Material: Rodio"
},
{
  id: "LR310",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga tejida Blanca 4cm",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR310.png",
  description: "Material: Oro Goldfield - Acero"
},
{
  id: "LR308",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga tejida Roja 4cm",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR308.png",
  description: "Material: Oro Goldfield - Acero"
},
{
  id: "LR307",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga tejida negra 4cm",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR307.png",
  description: "Material: Oro Goldfield - Acero"
},
{
  id: "TS273",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo seguridad",
  price: 5400,
  image: "images/productos/Bisuteria/Aretes/TS273.png",
  description: "Material: Acero"
},
];
