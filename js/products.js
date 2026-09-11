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
  name: "Serum Facial Encanto - SET2168",
  price: 15000,                        // solo el número, sin puntos ni $
  image: "images/productos/Maquillaje/Cuidado_Facial/SET2168.jpg",
  description: "Un básico para incluir en tu rutina de cuidado facial. Su textura ligera y fácil de aplicar lo hacen perfecto para usar diariamente y darle a tu piel ese toque de cuidado que se merece."
},
{
  id: "BAQ584",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Base Aqua Cobertura Media - BAQ584",
  price: 30000,
  image: "images/productos/Maquillaje/Rostro/BAQ584.jpg",
  description: "La Base Aqua realza tu belleza natural con un acabado luminoso, fresco y sin peso, se funde perfectamente con la piel."
},
{
  id: "BMT1666",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Baul Mediano Negro - BMT1666",
  price: 40000,
  image: "images/productos/Maquillaje/Accesorios/BMT1666.jpg",
  description: "Organiza los productos favoritos de maquillaje y cuidado facial con la nueva cosmetiquera Trendy. Es muy amplia e incluye varios compartimentos internos en donde puedes organizar productos pequeños. Viene con separador para una organización óptima de los productos y separadores para organizar las brochas de maquillaje."
},
{
  id: "LL590",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo corazón con alas Ajustable - LL590",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL590.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL588",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cirón rojo Ajustable - LL588",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL588.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL586",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cirón cristal Ajustable - LL586",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL586.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL585",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circón verde Ajustable - LL585",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL585.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL584",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cadena Ajustable - LL584",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL584.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL581",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circón cristal Ajustable - LL581",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL581.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX445",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable mariposa tornasol - OX445",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX445.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX444",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable mariposa verde - OX444",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX444.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX443",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable mariposa roja - OX443",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX443.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO158",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable - RO158",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO158.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO157",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable - RO157",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO157.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO156",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable - RO156",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO156.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO155",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable - RO155",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO155.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "NP515",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Flor y Perla Ajustable - NP515",
  price: 30000,
  image: "images/productos/Bisuteria/Anillos/NP515.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "MC934",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Flor y Perla Ajustable - MC934",
  price: 27000,
  image: "images/productos/Bisuteria/Anillos/MC934.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "NP514",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Flor Maxi Ajustable - NP514",
  price: 30000,
  image: "images/productos/Bisuteria/Anillos/NP514.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO145",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazones Rojos Ajustable - RO145",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO145.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO144",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazones blancos Ajustable - RO144",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO144.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "RO143",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazones Rojos Ajustable - RO143",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO143.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "NP513",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Blanco Ajustable - NP513",
  price: 30000,
  image: "images/productos/Bisuteria/Anillos/NP513.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL565",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Cadena Ajustable - LL565",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL565.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL564",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Doble Mariposa Ajustable - LL564",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL564.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL567",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Solitario Ajustable - LL567",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL567.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL569",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circones Ajustable - LL569",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL569.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX426",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazón Maxi Ajustable - OX426",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX426.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LR477",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Estrella Ajustable - LR477",
  price: 19900,
  image: "images/productos/Bisuteria/Anillos/LR477.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "CB703",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circones Cristal Ajustable - CB703",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB703.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL540",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazón Ajustable - LL540",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL540.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LL538",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circones Ajustable - LL538",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL538.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX422",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Concha Ajustable - OX422",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX422.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX417",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circón Fucsia Ajustable - OX417",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX417.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "MC925",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Sol y Luna Ajustable - MC925",
  price: 27000,
  image: "images/productos/Bisuteria/Anillos/MC925.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LM855",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Cubano Ajustable - LM855",
  price: 21000,
  image: "images/productos/Bisuteria/Anillos/LM855.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "OX398",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Nota musical Ajustable - OX398",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX398.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "PG428",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ovalos Ajustable - PG428",
  price: 11900,
  image: "images/productos/Bisuteria/Anillos/PG428.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "PG424",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Balin Ajustable - PG424",
  price: 11900,
  image: "images/productos/Bisuteria/Anillos/PG424.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LM839",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Sol y Luna Ajustable - LM839",
  price: 21000,
  image: "images/productos/Bisuteria/Anillos/LM839.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "MC784",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cuadrado circones - MC784",
  price: 27000,
  image: "images/productos/Bisuteria/Anillos/MC784.jpg",
  description: "Anillo Ajustable en Rodio"
},
{
  id: "LR501",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos - LR501",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR501.jpg",
  description: "Material: Rodio"
},
{
  id: "LR500",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 Topos - LR500",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR500.jpg",
  description: "Material: Rodio"
},
{
  id: "LR499",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 Topos - LR499",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR499.jpg",
  description: "Material: Rodio"
},
{
  id: "LR498",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 Corazones - LR498",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR498.jpg",
  description: "Material: Rodio"
},
{
  id: "LR497",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 topos - LR497",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR497.jpg",
  description: "Material: Rodio"
},
{
  id: "LL596",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón - LL596",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL596.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL595",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Rosa 14 mm - LL595",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL595.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL594",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Roja 14 mm - LL594",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL594.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL593",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Amarillo 14 mm - LL593",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL593.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL592",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Blanco 14 mm - LL592",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL592.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL591",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Negro 14 mm - LL591",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL591.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "AC442",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga cruz 1.4cm - AC442",
  price: 10900,
  image: "images/productos/Bisuteria/Aretes/AC442.jpg",
  description: "Material: Rodio"
},
{
  id: "AC441",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga estrellas 1.4cm - AC441",
  price: 10900,
  image: "images/productos/Bisuteria/Aretes/AC441.jpg",
  description: "Material: Rodio"
},
{
  id: "MC952",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 2 pares de topos - MC952",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC952.jpg",
  description: "Material: Rodio"
},
{
  id: "RO172",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 2 pares de topos - RO172",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO172.jpg",
  description: "Material: Rodio"
},
{
  id: "SP368",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de aretes - SP368",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP368.jpg",
  description: "Material: Rodio"
},
{
  id: "LM878",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 1,5 cm - LM878",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM878.jpg",
  description: "Material: Rodio"
},
{
  id: "RO171",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 1,9 cm - RO171",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO171.jpg",
  description: "Material: Rodio"
},
{
  id: "RO170",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos - RO170",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO170.jpg",
  description: "Material: Rodio"
},
{
  id: "RO169",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos - RO169",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO169.jpg",
  description: "Material: Rodio"
},
{
  id: "RO168",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos - RO168",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO168.jpg",
  description: "Material: Rodio"
},
{
  id: "RO167",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos - RO167",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO167.jpg",
  description: "Material: Rodio"
},
{
  id: "RO166",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos - RO166",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO166.jpg",
  description: "Material: Rodio"
},
{
  id: "RO165",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos - RO165",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO165.jpg",
  description: "Material: Rodio"
},
{
  id: "MC946",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set candongas x 3 - MC946",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC946.jpg",
  description: "Material: Rodio"
},
{
  id: "MC945",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set candongas x 3 - MC945",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC945.jpg",
  description: "Material: Rodio"
},
{
  id: "MC944",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set candongas x 3 - MC944",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC944.jpg",
  description: "Material: Rodio"
},
{
  id: "SP367",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete ﬂor 2 cm - SP367",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP367.jpg",
  description: "Material: Rodio"
},
{
  id: "SP365",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos - SP365",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP365.jpg",
  description: "Material: Rodio"
},
{
  id: "SP364",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos - SP364",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP364.jpg",
  description: "Material: Rodio"
},
{
  id: "SP363",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos - SP363",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP363.jpg",
  description: "Material: Rodio"
},
{
  id: "SP362",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos - SP362",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP362.jpg",
  description: "Material: Rodio"
},
{
  id: "SP361",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos - SP361",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP361.jpg",
  description: "Material: Rodio"
},
{
  id: "MC943",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 topos - MC943",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC943.jpg",
  description: "Material: Rodio"
},
{
  id: "PG460",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Estrella 5 mm - PG460",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG460.jpg",
  description: "Material: Rodio"
},
{
  id: "LL572",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Corona 1 cm x 1,4 cm - LL572",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL572.jpg",
  description: "Material: Rodio"
},
{
  id: "MC938",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor Doble 1,5 cm x 3,1 cm - MC938",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC938.jpg",
  description: "Material: Rodio"
},
{
  id: "RO154",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bicolor 1,9 cm x 1,5 cm - RO154",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO154.jpg",
  description: "Material: Rodio"
},
{
  id: "SP356",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi Blanco 3 cm - SP356",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP356.jpg",
  description: "Material: Rodio"
},
{
  id: "GP454",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 5,5 cm - GP454",
  price: 7100,
  image: "images/productos/Bisuteria/Aretes/GP454.jpg",
  description: "Material: Acero"
},
{
  id: "GP453",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "candonga Lisa 2,9 cm - GP453",
  price: 7100,
  image: "images/productos/Bisuteria/Aretes/GP453.jpg",
  description: "Material: Acero"
},
{
  id: "PC731",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 1,3 cm - PC731",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC731.jpg",
  description: "Material: Acero"
},
{
  id: "PC730",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 1,6 - PC730",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC730.jpg",
  description: "Material: Acero"
},
{
  id: "PC729",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 1,5 cm - PC729",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC729.jpg",
  description: "Material: Acero"
},
{
  id: "PG459",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 1 cm - PG459",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG459.jpg",
  description: "Material: Rodio"
},
{
  id: "PG458",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 1,5 X 1,3 - PG458",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG458.jpg",
  description: "Material: Rodio"
},
{
  id: "FT329",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi FLor 4,3 cm - FT329",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT329.jpg",
  description: "Material: Rodio"
},
{
  id: "FT328",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi Corazón 2,6 cm - FT328",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT328.jpg",
  description: "Material: Rodio"
},
{
  id: "SP354",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor y Perla 2,4 cm - SP354",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP354.jpg",
  description: "Material: Rodio"
},
{
  id: "FT326",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor 2,9 x 2,4 cm - FT326",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT326.jpg",
  description: "Material: Rodio"
},
{
  id: "FT325",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Blanca 3,4 cm x 2,4 cm - FT325",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT325.jpg",
  description: "Material: Rodio"
},
{
  id: "FT324",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor Turquesa 3,4 cm - FT324",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT324.jpg",
  description: "Material: Rodio"
},
{
  id: "SP353",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor Negro 3 cm - SP353",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP353.jpg",
  description: "Material: Rodio"
},
{
  id: "OX439",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón 3,4 cm - OX439",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX439.jpg",
  description: "Material: Rodio"
},
{
  id: "OX438",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Entorchada 2,9 cm - OX438",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX438.jpg",
  description: "Material: Rodio"
},
{
  id: "RO137",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 1,7cm - RO137",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO137.jpg",
  description: "Material: Rodio"
},
{
  id: "RO136",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Set x 3 - RO136",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO136.jpg",
  description: "Material: Rodio"
},
{
  id: "SP351",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi 6,2 cm - SP351",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP351.jpg",
  description: "Material: Rodio"
},
{
  id: "RO115",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes FLor y Perla 2,5 cm - RO115",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO115.jpg",
  description: "Material: Acero"
},
{
  id: "RO111",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor 2,5 cm - RO111",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO111.jpg",
  description: "Material: Acero"
},
{
  id: "OX433",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Doble Corazón 3,1 cm x1,7 cm - OX433",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX433.jpg",
  description: "Material: Acero"
},
{
  id: "PG449",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Gota y Perlas 1,9 cm - PG449",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG449.jpg",
  description: "Material: Rodio"
},
{
  id: "RO108",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 2,7cm - RO108",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO108.jpg",
  description: "Material: Rodio"
},
{
  id: "RO107",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga balín diamantado 3.5cm - RO107",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO107.jpg",
  description: "Material: Rodio"
},
{
  id: "LM868",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga balín italy 3.7 cm - LM868",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM868.jpg",
  description: "Material: Rodio"
},
{
  id: "LM867",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 2.1 cm - LM867",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM867.jpg",
  description: "Material: Rodio"
},
{
  id: "LM865",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 3 cm - LM865",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM865.jpg",
  description: "Material: Rodio"
},
{
  id: "LM863",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 4cm - LM863",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM863.jpg",
  description: "Material: Rodio"
},
{
  id: "RO104",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Plateada 3cm - RO104",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO104.jpg",
  description: "Material: Rodio"
},
{
  id: "LL547",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrella 1.5cm - LL547",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL547.jpg",
  description: "Material: Rodio"
},
{
  id: "OX429",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrella 2.5cm x 2.7cm - OX429",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX429.jpg",
  description: "Material: Rodio"
},
{
  id: "LM861",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrela 5cm - LM861",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM861.jpg",
  description: "Material: Rodio"
},
{
  id: "AC431",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo 1.8 cm - AC431",
  price: 10900,
  image: "images/productos/Bisuteria/Aretes/AC431.jpg",
  description: "Material: Rodio"
},
{
  id: "FT318",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor negro - FT318",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT318.jpg",
  description: "Material: Rodio"
},
{
  id: "NP509",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete ﬂor rosada - NP509",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP509.jpg",
  description: "Material: Rodio"
},
{
  id: "NP508",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 2.2 Cm - NP508",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP508.jpg",
  description: "Material: Rodio"
},
{
  id: "LM859",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo corazón rojo 8mm - LM859",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM859.jpg",
  description: "Material: Rodio"
},
{
  id: "RO101",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Escalador 2 cm x 1,1 cm - RO101",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO101.jpg",
  description: "Material: Rodio"
},
{
  id: "RO100",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Set x3 cruz - RO100",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO100.jpg",
  description: "Material: Rodio"
},
{
  id: "LL544",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Estrella 1,1 cm - LL544",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL544.jpg",
  description: "Material: Rodio"
},
{
  id: "OX427",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Escalador Corazones 2,2 cm x 6 mm - OX427",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX427.jpg",
  description: "Material: Rodio"
},
{
  id: "LL543",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Cristal 1,4 cm x 4 mm - LL543",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL543.jpg",
  description: "Material: Rodio"
},
{
  id: "LL541",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor Cristal 8 mm - LL541",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL541.jpg",
  description: "Material: Rodio"
},
{
  id: "FT317",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Set X3 Dorada - FT317",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT317.jpg",
  description: "Material: Rodio"
},
{
  id: "SP343",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón Blanco 1,6 cm - SP343",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP343.jpg",
  description: "Material: Rodio"
},
{
  id: "LL527",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Cruz 1,3 cm x 8 mm - LL527",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL527.jpg",
  description: "Material: Rodio"
},
{
  id: "RO095",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos astronauta Set x 3 - RO095",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO095.jpg",
  description: "Material: Rodio"
},
{
  id: "SP341",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi Corazón 2,9 cm x 3,1 m - SP341",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP341.jpg",
  description: "Material: Rodio"
},
{
  id: "PC723",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Figura 1 cm x 8 mm - PC723",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC723.jpg",
  description: "Material: Rodio"
},
{
  id: "BR122",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set topos x3 - BR122",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/BR122.jpg",
  description: "Material: Rodio"
},
{
  id: "BR124",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set de topos x3 - BR124",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/BR124.jpg",
  description: "Material: Rodio"
},
{
  id: "RO088",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete doble cristal 1,4 cm x 1 cm - RO088",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO088.jpg",
  description: "Material: Rodio"
},
{
  id: "MC921",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristal 1,6 cm x 1,3 cm - MC921",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC921.jpg",
  description: "Material: Rodio"
},
{
  id: "RO087",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristal 1,3 cm - RO087",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO087.jpg",
  description: "Material: Rodio"
},
{
  id: "RO086",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cuadrado 1,1 cm - RO086",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO086.jpg",
  description: "Material: Rodio"
},
{
  id: "MC920",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristales 1,2 m - MC920",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC920.jpg",
  description: "Material: Rodio"
},
{
  id: "RO082",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor 2,6 cm - RO082",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO082.jpg",
  description: "Material: Rodio"
},
{
  id: "FT310",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Blanco 4,9 cm - FT310",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT310.jpg",
  description: "Material: Rodio"
},
{
  id: "FT309",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Rojo 4,9 cm - FT309",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT309.jpg",
  description: "Material: Rodio"
},
{
  id: "FT308",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Verde 4,9 cm - FT308",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT308.jpg",
  description: "Material: Rodio"
},
{
  id: "FT307",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Beige 4,9 cm - FT307",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT307.jpg",
  description: "Material: Rodio"
},
{
  id: "FT306",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete tejido Azul 4,9 cm - FT306",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT306.jpg",
  description: "Material: Rodio"
},
{
  id: "FT305",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Colombia 4,9 cm - FT305",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT305.jpg",
  description: "Material: Rodio"
},
{
  id: "SP325",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristal 3,8 cm x 1,4 cm - SP325",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP325.jpg",
  description: "Material: Rodio"
},
{
  id: "RO077",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor 1,8 cm x 1,7 cm - RO077",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO077.jpg",
  description: "Material: Rodio"
},
{
  id: "LL511",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo puntos 1 cm - LL511",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL511.jpg",
  description: "Material: Rodio"
},
{
  id: "PC718",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol negro 8mm - PC718",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC718.jpg",
  description: "Material: Rodio"
},
{
  id: "NP478",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete 3 circulos 5,9 cm x 2,5 cm - NP478",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP478.jpg",
  description: "Material: Rodio"
},
{
  id: "NP474",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Óvalo 5,9 cm X 1,8 cm - NP474",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP474.jpg",
  description: "Material: Rodio"
},
{
  id: "NP473",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete corazón 2 cm x 1,4 cm - NP473",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP473.jpg",
  description: "Material: Rodio"
},
{
  id: "LM803",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete escarabajo 3.7 cm - LM803",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM803.jpg",
  description: "Material: Rodio"
},
{
  id: "LM802",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete langosta 4.6cm - LM802",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM802.jpg",
  description: "Material: Rodio"
},
{
  id: "LM801",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete cangrejo 3 x 2.1 cm - LM801",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM801.jpg",
  description: "Material: Rodio"
},
{
  id: "LM799",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete medusa 3cm - LM799",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM799.jpg",
  description: "Material: Rodio"
},
{
  id: "LM798",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete caimán 5.5 - LM798",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM798.jpg",
  description: "Material: Rodio"
},
{
  id: "LM797",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete cocodrilo 4.2cm - LM797",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM797.jpg",
  description: "Material: Rodio"
},
{
  id: "LM796",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete rana 4cm - LM796",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM796.jpg",
  description: "Material: Rodio"
},
{
  id: "LM795",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete medusa 2.1cm - LM795",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM795.jpg",
  description: "Material: Rodio"
},
{
  id: "LM794",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete concha 2.9cm - LM794",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM794.jpg",
  description: "Material: Rodio"
},
{
  id: "LM793",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Escarabajo 3.6 cm - LM793",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM793.jpg",
  description: "Material: Rodio"
},
{
  id: "CB648",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete gota 3cm - CB648",
  price: 15500,
  image: "images/productos/Bisuteria/Aretes/CB648.jpg",
  description: "Material: Rodio"
},
{
  id: "LR418",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos - LR418",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR418.jpg",
  description: "Material: Rodio"
},
{
  id: "PC696",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol rojo 1cm - PC696",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC696.jpg",
  description: "Material: Rodio"
},
{
  id: "PC695",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol negro 1cm - PC695",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC695.jpg",
  description: "Material: Rodio"
},
{
  id: "PC697",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol blanco 1cm - PC697",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC697.jpg",
  description: "Material: Rodio"
},
{
  id: "MC870",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrella de mar - MC870",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC870.jpg",
  description: "Material: Rodio"
},
{
  id: "CB642",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Gota 3,1 cm - CB642",
  price: 15500,
  image: "images/productos/Bisuteria/Aretes/CB642.jpg",
  description: "Material: Rodio"
},
{
  id: "OX315",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol verde 1.4 cm - OX315",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX315.jpg",
  description: "Material: Rodio"
},
{
  id: "FT262",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete animal Print 1,7 cm - FT262",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT262.jpg",
  description: "Material: Rodio"
},
{
  id: "BR095",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete animal print 4.5 cm - BR095",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/BR095.jpg",
  description: "Material: Rodio"
},
{
  id: "LR310",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga tejida Blanca 4cm - LR310",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR310.jpg",
  description: "Material: Oro Goldfield - Acero"
},
{
  id: "LR308",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga tejida Roja 4cm - LR308",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR308.jpg",
  description: "Material: Oro Goldfield - Acero"
},
{
  id: "LR307",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga tejida negra 4cm - LR307",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR307.jpg",
  description: "Material: Oro Goldfield - Acero"
},
{
  id: "TS273",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo seguridad - TS273",
  price: 5400,
  image: "images/productos/Bisuteria/Aretes/TS273.jpg",
  description: "Material: Acero"
},
{
  id: "NP527",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Chicle Mocca 40 cm + 5 cm - NP527",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP527.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT353",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas Corazón Mocca 41 cm + 5 cm Extensión - FT353",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT353.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "SP395",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Margarita 38 cm + 5 cm Extensión - SP395",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP395.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT352",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas y Corazones Vinotinto 38 cm + 5 cm - FT352",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT352.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT349",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Corazones Pasador 44 cm + 5 Extensión - FT349",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT349.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "AC347-P",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena personalizada 1 letra. letra adicional TS256 - AC347-P",
  price: 10900,
  image: "images/productos/Bisuteria/Collares/AC347-P.jpg",
  description: "Material: Rodio"
},
{
  id: "LL250-P",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena personalizada 1 letra. letra adicional GP366 - LL250-P",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL250-P.jpg",
  description: "Material: Rodio"
},
{
  id: "CB672",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena personalizada 1 letra-letra adicional GP445 - CB672",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB672.jpg",
  description: "Material: Rodio"
},
{
  id: "RO174",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas 44 cm + 5 cm Extensión - RO174",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO174.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO173",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas 44 cm + 5 cm Extensíon - RO173",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO173.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT345",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Café 42 cm + 6 Extensión - FT345",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT345.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "SP389",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Colores 42 cm + 5 Extensión - SP389",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP389.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT344",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar maxi corazón negro 40cm + 6cm extensión - FT344",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT344.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT343",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar maxi negro y dorado 40cm cm + 6cm - FT343",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT343.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT342",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar maxi rojo y dorado 40cm + 6 cm extensión - FT342",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT342.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "NP526",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar perla corazón Rojo 40cm + 6 cm extensión - NP526",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP526.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "NP525",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar perla corazón café 40cm + 6 cm extensión - NP525",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP525.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "NP524",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar perla corazón blanco 40cm + 6 cm extensión - NP524",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP524.jpg",
  description: "Material: Rodio"
},
{
  id: "MC950",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije princesa 49 cm - MC950",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC950.jpg",
  description: "Material: Rodio"
},
{
  id: "MC949",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije princesa 49 cm - MC949",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC949.jpg",
  description: "Material: Rodio"
},
{
  id: "MC948",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije princesa 49 cm - MC948",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC948.jpg",
  description: "Material: Rodio"
},
{
  id: "RO164",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable 48cm dije mariposa verde - RO164",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO164.jpg",
  description: "Material: Rodio"
},
{
  id: "RO163",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable 48cm dije mariposa tornasol - RO163",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO163.jpg",
  description: "Material: Rodio"
},
{
  id: "RO162",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable 48cm dije mariposa rojo - RO162",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO162.jpg",
  description: "Material: Rodio"
},
{
  id: "LL580",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena balines 44,5 cm +3cm extensión - LL580",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL580.jpg",
  description: "Material: Rodio"
},
{
  id: "LL579",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena balín ovalado 44,5 cm +3cm extensión - LL579",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL579.jpg",
  description: "Material: Rodio"
},
{
  id: "MC942",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi corazón Negro 40 cm +5 Extensión - MC942",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC942.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "NP522",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Negro 45 cm + 5 extensión - NP522",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP522.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "NP521",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Blanco 44cm + 5 extensión - NP521",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP521.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "SP360",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Margarita 41 cm + 5 Extensión - SP360",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP360.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL577",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Guadalupe 45 cm - LL577",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL577.jpg",
  description: "Material: Acero"
},
{
  id: "LL576",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena San Benito 45 cm - LL576",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL576.jpg",
  description: "Material: Acero"
},
{
  id: "LL575",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena San Miguel y Guadalupe 45 cm - LL575",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL575.jpg",
  description: "Material: Acero"
},
{
  id: "MC939",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Blanco y Negro 42 cm +6 cm Extensión - MC939",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC939.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "MC940",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Amariilo y Café 42 cm + 6 cm Extensión - MC940",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC940.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "MC941",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Amarillo y Café 42 cm + 5 cm Extensión - MC941",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC941.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT332",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar maxi Amarillo y Vino 40 cm + 5 cm Extensión - FT332",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT332.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT333",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Lila 40 cm + 5 Extensión - FT333",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT333.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT334",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Rosa y Rojo 40 cm + 5 cm Extension - FT334",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT334.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT336",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Celeste 41 cm + 6 cm Extensión - FT336",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT336.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "FT330",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Corazón Rojo 38 cm + 6 cm Extensión - FT330",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT330.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "SP355",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Corazones Moca 38 cm + 6 Extensión - SP355",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP355.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO153",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Rosa 38 cm + 7 cm Extensión - RO153",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO153.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO151",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Rojo 36 cm + 7 cm extensión - RO151",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO151.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO152",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Blanco 36 cm + 7 cm Extensión - RO152",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO152.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO149",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Negro 37 cm +5 extensión - RO149",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO149.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO150",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Moca 38 cm + 6 extensión - RO150",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO150.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "NP492",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Chunky Negro 42 cm x 1,6 cm + 5 extensión - NP492",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP492.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR491",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Flor Cristal Ajustable - LR491",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR491.jpg",
  description: "Material: Rodio"
},
{
  id: "LR490",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar FLor Roja Ajustable - LR490",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR490.jpg",
  description: "Material: Rodio"
},
{
  id: "LR489",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Flor Verde Ajustable - LR489",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR489.jpg",
  description: "Material: Rodio"
},
{
  id: "OX440",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Bandera Colombia 40 cm + 5 Extensión - OX440",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX440.jpg",
  description: "Material: Rodio"
},
{
  id: "CB712",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije Colombia - CB712",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB712.jpg",
  description: "Material: Rodio"
},
{
  id: "CB711",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije Colombia - CB711",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB711.jpg",
  description: "Material: Rodio"
},
{
  id: "CB710",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije Colombia - CB710",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB710.jpg",
  description: "Material: Rodio"
},
{
  id: "PG453",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Mini Aros Balines 3 mm x 45 cm + 5 cm - PG453",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG453.jpg",
  description: "Material: Rodio"
},
{
  id: "LL555",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cola Ratón Rayada 1mm x 45 cm + 5 cm - LL555",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL555.jpg",
  description: "Material: Rodio"
},
{
  id: "PG451",
  category: "bisuteria",
  subcategory: "Collares",
  name: "cadena Cola Ratón 1 mm x 45 cm + 5 Extensión - PG451",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG451.jpg",
  description: "Material: Rodio"
},
{
  id: "LL554",
  category: "bisuteria",
  subcategory: "Collares",
  name: "cadena candado Plana 3mm x 45 cm + 5 cm - LL554",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL554.jpg",
  description: "Material: Rodio"
},
{
  id: "GP451Z",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra Z - GP451Z",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451Z.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451Y",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra Y - GP451Y",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451Y.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451X",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra X - GP451X",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451X.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451W",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra W - GP451W",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451W.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451V",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra V - GP451V",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451V.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451U",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra U - GP451U",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451U.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451T",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra T - GP451T",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451T.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451S",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra S - GP451S",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451S.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451O",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra O - GP451O",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451O.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451N",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra N - GP451N",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451N.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451M",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar letra M - GP451M",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451M.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451K",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra K - GP451K",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451K.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451J",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra J - GP451J",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451J.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451I",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra I - GP451I",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451I.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451H",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra H - GP451H",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451H.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451F",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra F - GP451F",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451F.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451E",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra E - GP451E",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451E.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451C",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra C - GP451C",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451C.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP451B",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra B - GP451B",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451B.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "MC931",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena grano 47 cm x 5mm + 5 extensión - MC931",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC931.jpg",
  description: "Material: Rodio"
},
{
  id: "OX430",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije estrella - OX430",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX430.jpg",
  description: "Material: Rodio"
},
{
  id: "RO103",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije estrella - RO103",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO103.jpg",
  description: "Material: Rodio"
},
{
  id: "OX428",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar lazo 2,5mm 43.5cm + 5 cm extensión - OX428",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX428.jpg",
  description: "Material: Rodio"
},
{
  id: "LM860",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije ballena - LM860",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM860.jpg",
  description: "Material: Rodio"
},
{
  id: "LR476",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Dije Sagrado Corazón Ajustable - LR476",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR476.jpg",
  description: "Material: Rodio"
},
{
  id: "SP337",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dijes del Mar - SP337",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP337.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "SP336",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas Caracol y Concha - SP336",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/SP336.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "GP449",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Elefante - GP449",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP449.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "GP448",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar DIje Luna - GP448",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP448.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "GP447",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Árbol de La vida - GP447",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP447.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "PG444",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Corazón Gris 1 cm x 45 cm - PG444",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG444.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "PG442",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Corazón Negro 1 cm x 45 cm - PG442",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG442.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "PG441",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collare Corazón Amarillo 1 cm x 45 cm - PG441",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG441.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "PG440",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Corazón Dorado 1 cm x 45 cm - PG440",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG440.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OX406",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Lazo 2 mm x 45 cm + 5 Extensión - OX406",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX406.jpg",
  description: "Material: Rodio"
},
{
  id: "LR467",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena San Miguel Ajustable - LR467",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR467.jpg",
  description: "Material: Rodio"
},
{
  id: "CB692",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar 2,5 mm x 45 cm + 5 extensión - CB692",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB692.jpg",
  description: "Material: Rodio"
},
{
  id: "PG438",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena cubana destellos 2 mm x 45 cm - PG438",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG438.jpg",
  description: "Material: Rodio"
},
{
  id: "LL518",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana Corazones 1 mm x 45 cm + 5 - LL518",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL518.jpg",
  description: "Material: Rodio"
},
{
  id: "LL517",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Aros Balín 2 mm - LL517",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL517.jpg",
  description: "Material: Rodio"
},
{
  id: "LL515",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar Balín 2mm x 45 cm + 5 cm extensión - LL515",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL515.jpg",
  description: "Material: Rodio"
},
{
  id: "LL514",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena balín y canutillo 45 cm + 5 cm extensión - LL514",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL514.jpg",
  description: "Material: Rodio"
},
{
  id: "LM852",
  category: "bisuteria",
  subcategory: "Collares",
  name: "choker corazones - LM852",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM852.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LM851",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Estrellas - LM851",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM851.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LM849",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas y Estrella - LM849",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM849.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO053",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar trébol Rojo 47 cm - RO053",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO053.jpg",
  description: "Material: Rodio"
},
{
  id: "CB684",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Dije Trébol Rojo - CB684",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB684.jpg",
  description: "Material: Rodio"
},
{
  id: "CB683",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadeja Dije Trébol Blanco - CB683",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB683.jpg",
  description: "Material: Rodio"
},
{
  id: "CB682",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Dije Trébol Negro - CB682",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB682.jpg",
  description: "Material: Rodio"
},
{
  id: "LL505",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena estrellas - LL505",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL505.jpg",
  description: "Material: Acero"
},
{
  id: "OX387",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena DIje Oso - OX387",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX387.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "PG421",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Aros Balin 45 cm x 2 mm + 5 extensión - PG421",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG421.jpg",
  description: "Material: Rodio"
},
{
  id: "LM837",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana 45 cm x 4 mm + 5 extensión - LM837",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM837.jpg",
  description: "Material: Rodio"
},
{
  id: "RO044",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar 45 cm x 4mm + 5 extensión - RO044",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO044.jpg",
  description: "Material: Rodio"
},
{
  id: "RO042",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Negro 45 cm + 5 cm extensión - RO042",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO042.jpg",
  description: "Material: Rodio"
},
{
  id: "RO041",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Negro 45 cm + 5 cm extensión - RO041",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO041.jpg",
  description: "Material: Rodio"
},
{
  id: "RO040",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Negro y Dorado 42,5 cm + 6 cm - RO040",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO040.jpg",
  description: "Material: Rodio"
},
{
  id: "RO038",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Rojo 42,5 cm + 6 cm extensión - RO038",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO038.jpg",
  description: "Material: Rodio"
},
{
  id: "RO037",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Dorado 44 cm + 5 extensión - RO037",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO037.jpg",
  description: "Material: Rodio"
},
{
  id: "RO036",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Blanco 42,5 cm + 6 cm de extensión - RO036",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO036.jpg",
  description: "Material: Rodio"
},
{
  id: "RO035",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Rojo y Dorado 42,5 cm + 6 cm de - RO035",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO035.jpg",
  description: "Material: Rodio"
},
{
  id: "LL498",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena aros balín 1,5mm - LL498",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL498.jpg",
  description: "Material: Rodio"
},
{
  id: "AC425",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena singapur 2mm - AC425",
  price: 10900,
  image: "images/productos/Bisuteria/Collares/AC425.jpg",
  description: "Material: Rodio"
},
{
  id: "LL492",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena veneciana destellos - LL492",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL492.jpg",
  description: "Material: Rodio"
},
{
  id: "CB655",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena lazo con canutillo 2,5mm - CB655",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB655.jpg",
  description: "Material: Rodio"
},
{
  id: "LL491",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena singapur 2,5mm - LL491",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL491.jpg",
  description: "Material: Rodio"
},
{
  id: "GP443",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Mano Hamsa 45 cm - GP443",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP443.jpg",
  description: "Material: Acero - Zamak"
},
{
  id: "GP442",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Árbol de la vida 45 cm - GP442",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP442.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "GP440",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Corazón 45 cm - GP440",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP440.jpg",
  description: "Material: Acero - Fantasia"
},
{
  id: "GP439",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Ojo Turco 45 cm - GP439",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP439.jpg",
  description: "Material: Acero - Fantasia"
},
{
  id: "GP436",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Corazón 45 cm - GP436",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP436.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "LM790",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije relicario 4.3 x 4cm - LM790",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM790.jpg",
  description: "Material: Rodio - Covergold"
},
{
  id: "LM789",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije relicario 4.3 x 4cm - LM789",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM789.jpg",
  description: "Material: Rodio - Covergold"
},
{
  id: "NP464",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar de estrellas multicolor 45cm + 5 ext - NP464",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP464.jpg",
  description: "Material: Rodio"
},
{
  id: "NP463",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar de estrellas negras 45cm + 5 ext - NP463",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP463.jpg",
  description: "Material: Rodio"
},
{
  id: "RO009",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dije trébol Negro 43cm + 5cm extensión - RO009",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO009.jpg",
  description: "Material: Rodio"
},
{
  id: "LR417",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije medusa - LR417",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR417.jpg",
  description: "Material: Rodio"
},
{
  id: "NP456",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Leopardo - NP456",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP456.jpg",
  description: "Material: Rodio"
},
{
  id: "OX362",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable Dije Tortuga - OX362",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX362.jpg",
  description: "Material: Rodio"
},
{
  id: "NP455",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Estrella Cristal 45 cm + 5 extensión - NP455",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP455.jpg",
  description: "Material: Rodio"
},
{
  id: "MC851",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar trébol blanco - MC851",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC851.jpg",
  description: "Material: Rodio"
},
{
  id: "FT285",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena corazón doble dorado y plateado - FT285",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT285.jpg",
  description: "Material: Rodio"
},
{
  id: "CB631",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dije trébol mini Negro - CB631",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB631.jpg",
  description: "Material: Rodio"
},
{
  id: "NP424",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dijes trébol Rojo 40 cm + 5 cm Extensión - NP424",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP424.jpg",
  description: "Material: Acero"
},
{
  id: "NP426",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dijes Verde Negro 40 cm + 5 cm Extensión - NP426",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP426.jpg",
  description: "Material: Acero"
},
{
  id: "CB625",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dije oso, cadena ajustable - CB625",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB625.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "MC804",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije abeja - MC804",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC804.jpg",
  description: "Material: Rodio"
},
{
  id: "DC058",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar trébol, largo 70 cm - DC058",
  price: 52000,
  image: "images/productos/Bisuteria/Collares/DC058.jpg",
  description: "Material: Rodio"
},
{
  id: "NP403",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajusteble dije mamá - NP403",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP403.jpg",
  description: "Material: Rodio"
},
{
  id: "LR332",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar 7 chakras - LR332",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR332.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "PC667",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar corazón - PC667",
  price: 9000,
  image: "images/productos/Bisuteria/Collares/PC667.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "PC659",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible ópalo 39cm + 5 cm extensión - PC659",
  price: 9000,
  image: "images/productos/Bisuteria/Collares/PC659.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "CB613",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Rafael, Salud - CB613",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB613.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "CB610",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Gabriel, Mensajero de Dios - CB610",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB610.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "CB507",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Joﬁel 48 cm ajustable - CB507",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB507.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "CB508",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Uriel 48 cm ajustable - CB508",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB508.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "CB511",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Zadaquiel 48 cm ajustable - CB511",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB511.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "AC397",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije estrella de mar - AC397",
  price: 10900,
  image: "images/productos/Bisuteria/Collares/AC397.jpg",
  description: "Material: Rodio - Oro Goldfield"
},
{
  id: "LR302",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar 7 chakras - LR302",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR302.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OR441",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar lluvia de oro 44cm. Dije: 4.2cm - OR441",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/OR441.jpg",
  description: "Material: Acero - Zamak"
},
{
  id: "GP220",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar placa protección 45cm. Dije: 1cm - GP220",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP220.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR071",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra E 40cm + 6cm extensión - LR071",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR071.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR063",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra F 40cm + 6cm extensión - LR063",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR063.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR062",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra I 40cm + 6cm extensión - LR062",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR062.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR069",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra N 40cm + 6cm extensión - LR069",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR069.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR067",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra Y 40cm + 6cm extensión - LR067",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR067.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR061",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra C 40cm + 6cm extensión - LR061",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR061.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR066",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra V 40cm + 6cm extensión - LR066",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR066.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR064",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra K 40cm + 6cm extensión - LR064",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR064.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR065",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra S 40cm + 6cm extensión - LR065",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR065.jpg",
  description: "Material: Oro Goldfield"
},

// --- Conjuntos ---
{
  id: "RO148",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Balón de Fútbol Ajustable - RO148",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO148.jpg",
  description: "Material: Rodio"
},
{
  id: "RO147",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Colombia Ajustable - RO147",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO147.jpg",
  description: "Material: Rodio"
},
{
  id: "RO146",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Balón y Guayo Ajustable - RO146",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO146.jpg",
  description: "Material: Rodio"
},
{
  id: "RO142",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Mini Colibrí 44 cm - RO142",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO142.jpg",
  description: "Material: Rodio"
},
{
  id: "RO138",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Cruz 44 cm - RO138",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO138.jpg",
  description: "Material: Rodio"
},
{
  id: "NP510",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Collar y Pulsera Ajustable - NP510",
  price: 30000,
  image: "images/productos/Bisuteria/Conjuntos/NP510.jpg",
  description: "Material: Rodio"
},
{
  id: "RO135",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Trébol Negro - RO135",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO135.jpg",
  description: "Material: Rodio"
},
{
  id: "RO133",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Trébol Rojo - RO133",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO133.jpg",
  description: "Material: Rodio"
},
{
  id: "RO132",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Trébol Verde - RO132",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO132.jpg",
  description: "Material: Rodio"
},
{
  id: "NP481",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Collar y Pulsera corazón - NP481",
  price: 30000,
  image: "images/productos/Bisuteria/Conjuntos/NP481.jpg",
  description: "Material: Rodio"
},
{
  id: "MC908",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Dije Oso ajustable - MC908",
  price: 27000,
  image: "images/productos/Bisuteria/Conjuntos/MC908.jpg",
  description: "Material: Rodio"
},
{
  id: "CB685",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Cereza - CB685",
  price: 15500,
  image: "images/productos/Bisuteria/Conjuntos/CB685.jpg",
  description: "Material: Rodio"
},
{
  id: "MC896",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Turmalina tamaño y color de la piedra puede variar - MC896",
  price: 27000,
  image: "images/productos/Bisuteria/Conjuntos/MC896.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "LM831",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Cuarzo cristal tamaño y color de la piedra puede variar - LM831",
  price: 21000,
  image: "images/productos/Bisuteria/Conjuntos/LM831.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "LM830",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Amatista tamaño y color de la piedra puede variar - LM830",
  price: 21000,
  image: "images/productos/Bisuteria/Conjuntos/LM830.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "LM832",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Cuarzo rosa tamaño y color de la piedra puede variar - LM832",
  price: 21000,
  image: "images/productos/Bisuteria/Conjuntos/LM832.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "LM829",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Jade tamaño y color de la piedra puede variar - LM829",
  price: 21000,
  image: "images/productos/Bisuteria/Conjuntos/LM829.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "LM827",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Cuarzo cristal tamaño y color de la piedra puede variar - LM827",
  price: 21000,
  image: "images/productos/Bisuteria/Conjuntos/LM827.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "MC895",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Turmalina tamaño y color de la piedra puede variar - MC895",
  price: 27000,
  image: "images/productos/Bisuteria/Conjuntos/MC895.jpg",
  description: "Material: Acero - Oro Goldfield"
},
{
  id: "LM786",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto dije colibrí - LM786",
  price: 21000,
  image: "images/productos/Bisuteria/Conjuntos/LM786.jpg",
  description: "Material: Rodio"
},
{
  id: "AC136H",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Collar dije letra H, el tamaño de los topos puede variar - AC136H",
  price: 10900,
  image: "images/productos/Bisuteria/Conjuntos/AC136H.jpg",
  description: "Material: Rodio"
},

// --- Dijes ---
{
  id: "RO056",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Mariposa - RO056",
  price: 24000,
  image: "images/productos/Bisuteria/Dijes/RO056.jpg",
  description: "Material: Rodio"
},
{
  id: "LM848",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Estrella y Concha - LM848",
  price: 21000,
  image: "images/productos/Bisuteria/Dijes/LM848.jpg",
  description: "Material: Rodio"
},
{
  id: "LR455",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Tornasol - LR455",
  price: 19900,
  image: "images/productos/Bisuteria/Dijes/LR455.jpg",
  description: "Material: Rodio"
},
{
  id: "LR453",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Trébol Negro - LR453",
  price: 19900,
  image: "images/productos/Bisuteria/Dijes/LR453.jpg",
  description: "Material: Rodio"
},
{
  id: "GP445",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra 1 cm - GP445",
  price: 7100,
  image: "images/productos/Bisuteria/Dijes/GP445.jpg",
  description: "Material: Rodio"
},
{
  id: "TS256",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije letra 6mm - TS256",
  price: 5400,
  image: "images/productos/Bisuteria/Dijes/TS256.jpg",
  description: "Material: Rodio"
},
{
  id: "GP366",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Letra rodio - GP366",
  price: 7100,
  image: "images/productos/Bisuteria/Dijes/GP366.jpg",
  description: "Material: Rodio"
},

// --- Earcuff ---
{
  id: "LL507",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff - LL507",
  price: 13900,
  image: "images/productos/Bisuteria/Earcuff/LL507.jpg",
  description: "Material: Rodio"
},
{
  id: "OX391",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff - OX391",
  price: 18000,
  image: "images/productos/Bisuteria/Earcuff/OX391.jpg",
  description: "Material: Rodio"
},
{
  id: "OX390",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff chunky - OX390",
  price: 18000,
  image: "images/productos/Bisuteria/Earcuff/OX390.jpg",
  description: "Material: Rodio"
},
{
  id: "CB679",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff Flores - CB679",
  price: 15500,
  image: "images/productos/Bisuteria/Earcuff/CB679.jpg",
  description: "Material: Rodio"
},
{
  id: "LL501",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perla plateado - LL501",
  price: 13900,
  image: "images/productos/Bisuteria/Earcuff/LL501.jpg",
  description: "Material: Rodio"
},
{
  id: "CB667",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff estrellas - CB667",
  price: 15500,
  image: "images/productos/Bisuteria/Earcuff/CB667.jpg",
  description: "Material: Rodio"
},
{
  id: "PC713",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas - PC713",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC713.jpg",
  description: "Material: Covergold"
},
{
  id: "GP433",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff flores - GP433",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP433.jpg",
  description: "Material: Covergold"
},
{
  id: "GP432",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff - GP432",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP432.jpg",
  description: "Material: Covergold"
},
{
  id: "GP431",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff - GP431",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP431.jpg",
  description: "Material: Covergold"
},
{
  id: "GP430",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff - GP430",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP430.jpg",
  description: "Material: Covergold"
},
{
  id: "GP429",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff - GP429",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP429.jpg",
  description: "Material: Covergold"
},
{
  id: "GP428",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff - GP428",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP428.jpg",
  description: "Material: Covergold"
},
{
  id: "PC711",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff - PC711",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC711.jpg",
  description: "Material: Covergold"
},
{
  id: "PC710",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff chunky - PC710",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC710.jpg",
  description: "Material: Covergold"
},
{
  id: "PC707",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff cadena y topo - PC707",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC707.jpg",
  description: "Material: Covergold"
},
{
  id: "GP423",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff - GP423",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP423.jpg",
  description: "Material: Covergold"
},
{
  id: "GP422",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff chunky - GP422",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP422.jpg",
  description: "Material: Covergold"
},
{
  id: "GP421",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff dorado - GP421",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP421.jpg",
  description: "Material: Covergold"
},
{
  id: "PC706",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas - PC706",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC706.jpg",
  description: "Material: Covergold"
},
{
  id: "PC705",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas - PC705",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC705.jpg",
  description: "Material: Covergold"
},
{
  id: "PC704",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas - PC704",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC704.jpg",
  description: "Material: Covergold"
},
{
  id: "PC703",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas - PC703",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC703.jpg",
  description: "Material: Covergold"
},
{
  id: "PC702",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas - PC702",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC702.jpg",
  description: "Material: Covergold"
},
{
  id: "PC701",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas - PC701",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC701.jpg",
  description: "Material: Covergold"
},
{
  id: "PC700",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas - PC700",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC700.jpg",
  description: "Material: Covergold"
},
{
  id: "AC405",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff hojas - AC405",
  price: 10900,
  image: "images/productos/Bisuteria/Earcuff/AC405.jpg",
  description: "Material: Acero"
},
{
  id: "PC688",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas - PC688",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC688.jpg",
  description: "Material: Covergold"
},
{
  id: "PC685",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas - PC685",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC685.jpg",
  description: "Material: Covergold"
},
{
  id: "PC681",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas - PC681",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC681.jpg",
  description: "Material: Covergold"
},
{
  id: "PC671",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff - PC671",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC671.jpg",
  description: "Material: Covergold"
},
{
  id: "PC670",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff doble - PC670",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC670.jpg",
  description: "Material: Covergold"
},
{
  id: "LL382",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff Colores - LL382",
  price: 13900,
  image: "images/productos/Bisuteria/Earcuff/LL382.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "PG361",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff doble - PG361",
  price: 11900,
  image: "images/productos/Bisuteria/Earcuff/PG361.jpg",
  description: "Material: Rodio"
},
{
  id: "CB596",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff tejido - CB596",
  price: 15500,
  image: "images/productos/Bisuteria/Earcuff/CB596.jpg",
  description: "Material: Oro Goldfield"
},

// --- Empaques ---
{
  id: "PG465",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería 5×5×3,5 cm - PG465",
  price: 11900,
  image: "images/productos/Bisuteria/Empaques/PG465.jpg",
  description: "Caja"
},
{
  id: "PG464",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería Rosa 5×5×3,5 cm - PG464",
  price: 11900,
  image: "images/productos/Bisuteria/Empaques/PG464.jpg",
  description: "Caja"
},
{
  id: "PG463",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Deslizable Negro 5×5×3,5 cm - PG463",
  price: 11900,
  image: "images/productos/Bisuteria/Empaques/PG463.jpg",
  description: "Empaque"
},
{
  id: "RO176",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Royal 8,5 × 7,5 × 3,5 cm - RO176",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO176.jpg",
  description: "Empaque"
},
{
  id: "FT348",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Noir Atelier 11 × 16 × 3,5 cm - FT348",
  price: 39900,
  image: "images/productos/Bisuteria/Empaques/FT348.jpg",
  description: "Empaque"
},
{
  id: "GP457",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería en forma de corazón negro 4×4×3,3 - GP457",
  price: 7100,
  image: "images/productos/Bisuteria/Empaques/GP457.jpg",
  description: "Caja"
},
{
  id: "GP456",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería en forma de corazón rojo 4×4×3,3 - GP456",
  price: 7100,
  image: "images/productos/Bisuteria/Empaques/GP456.jpg",
  description: "Caja"
},
{
  id: "BR128",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería cuadrada 7×10×3,5 cm - BR128",
  price: 45000,
  image: "images/productos/Bisuteria/Empaques/BR128.jpg",
  description: "Caja"
},
{
  id: "MC955",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Deluxe Gris 7 × 8 × 3,5 cm - MC955",
  price: 27000,
  image: "images/productos/Bisuteria/Empaques/MC955.jpg",
  description: "Empaque"
},
{
  id: "SP392",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Elite 9 × 9 × 4,5 cm - SP392",
  price: 35900,
  image: "images/productos/Bisuteria/Empaques/SP392.jpg",
  description: "Empaque"
},
{
  id: "RO099",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería con colgaderas 10×10×3,5 cm - RO099",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO099.jpg",
  description: "Caja"
},
{
  id: "RO098",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería con colgaderas 10×10×3,5 cm - RO098",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO098.jpg",
  description: "Caja"
},
{
  id: "RO097",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería con colgaderas 10×10×3,5 cm - RO097",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO097.jpg",
  description: "Caja"
},
{
  id: "FT314",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Negro Mediano - FT314",
  price: 39900,
  image: "images/productos/Bisuteria/Empaques/FT314.jpg",
  description: "Joyero"
},
{
  id: "FT313",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Salmón Mediano - FT313",
  price: 39900,
  image: "images/productos/Bisuteria/Empaques/FT313.jpg",
  description: "Joyero"
},
{
  id: "FT312",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Blanco Mediano - FT312",
  price: 39900,
  image: "images/productos/Bisuteria/Empaques/FT312.jpg",
  description: "Joyero"
},
{
  id: "RO093",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Negro Cuadrado - RO093",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO093.jpg",
  description: "Joyero"
},
{
  id: "RO092",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Salmón Cuadrado - RO092",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO092.jpg",
  description: "Joyero"
},
{
  id: "RO091",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Blanco Cuadrado - RO091",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO091.jpg",
  description: "Joyero"
},
{
  id: "RO090",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Blanco Redondo - RO090",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO090.jpg",
  description: "Joyero"
},
{
  id: "RO089",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Rosa Redondo - RO089",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO089.jpg",
  description: "Joyero"
},
{
  id: "BR121",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería 6,5×3,5×4,5cm - BR121",
  price: 45000,
  image: "images/productos/Bisuteria/Empaques/BR121.jpg",
  description: "Caja"
},
{
  id: "BR120",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería 6,5×3,5×4,5cm - BR120",
  price: 45000,
  image: "images/productos/Bisuteria/Empaques/BR120.jpg",
  description: "Caja"
},
{
  id: "CB689",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja para Joyería Cuadrada 9×9×3,5 cm - CB689",
  price: 15500,
  image: "images/productos/Bisuteria/Empaques/CB689.jpg",
  description: "Caja"
},
{
  id: "RO065",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería con colgaderas 10×10×3,5 cm - RO065",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO065.jpg",
  description: "Caja"
},
{
  id: "RO045",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Cofre Negro 4,6 cm x 5,5 cm - RO045",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO045.jpg",
  description: "Cofre"
},
{
  id: "1PE-PLATINADO-JNC",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Elegance platinado - 1PE-PLATINADO-JNC",
  price: 7500,
  image: "images/productos/Bisuteria/Empaques/1PE-PLATINADO-JNC.jpg",
  description: "Empaque"
},
{
  id: "PANA-001",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Bolsa de pana pequeña - PANA-001",
  price: 800,
  image: "images/productos/Bisuteria/Empaques/PANA-001.jpg",
  description: "Bolsa"
},
{
  id: "NP365",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero negro redondo. Diámetro10.5 cm alto 4cm - NP365",
  price: 30000,
  image: "images/productos/Bisuteria/Empaques/NP365.jpg",
  description: "Joyero"
},
{
  id: "1EU-NEGRO-JNC",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Elegance - 1EU-NEGRO-JNC",
  price: 7500,
  image: "images/productos/Bisuteria/Empaques/1EU-NEGRO-JNC.jpg",
  description: "Empaque"
},
{
  id: "1EU-PERLA-JNC",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Elegance - 1EU-PERLA-JNC",
  price: 7500,
  image: "images/productos/Bisuteria/Empaques/1EU-PERLA-JNC.jpg",
  description: "Empaque"
},
{
  id: "1EU-ROSA-JNC",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Elegance - 1EU-ROSA-JNC",
  price: 7500,
  image: "images/productos/Bisuteria/Empaques/1EU-ROSA-JNC.jpg",
  description: "Empaque"
},
{
  id: "C-005",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja Beige Pequeña - C-005",
  price: 3000,
  image: "images/productos/Bisuteria/Empaques/C-005.jpg",
  description: "Caja"
},
{
  id: "VA004",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Bolsa tul mediana. Medidas: 12CM X 8CM por unidad - VA004",
  price: 600,
  image: "images/productos/Bisuteria/Empaques/VA004.jpg",
  description: "Bolsa"
},
{
  id: "VA022",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Bolsa tul pequeña. Medidas: 6.5cm x 9 cm por unidad - VA022",
  price: 400,
  image: "images/productos/Bisuteria/Empaques/VA022.jpg",
  description: "Bolsa"
},
{
  id: "VA005",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Bolsa tul grande. Medidas: 18cm x 12cm. Colores - VA005",
  price: 800,
  image: "images/productos/Bisuteria/Empaques/VA005.jpg",
  description: "Bolsa"
},
{
  id: "C-002",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja tipo sobre, medida: Ancho 10.5cm x Largo - C-002",
  price: 105,
  image: "images/productos/Bisuteria/Empaques/C-002.jpg",
  description: "Caja"
},

// --- Pulseras ---
{
  id: "MC958",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera set x 2 Pareja Ajustable - MC958",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC958.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OX448",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set X2 Corazones Ajustable - OX448",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX448.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "CB733",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x 2 Corazones Ajustable - CB733",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB733.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR495",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x 2 Corazón Ajustable - LR495",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR495.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO175",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x3 Corazón Ajustable - RO175",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO175.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OX447",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x2 Mariposa Ajustable - OX447",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX447.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "CB732",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulseras Set x2 Cruz Ajustable - CB732",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB732.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LM881",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x2 Corazón Ajustable - LM881",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM881.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR493",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x2 Corazón y Estrella Dorado Ajustable - LR493",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR493.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OX446",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x2 Corazones Ajustable - OX446",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX446.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LM880",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x2 Corazones Ajustable - LM880",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM880.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LR492",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set X 2 Sol y Luna Ajustable - LR492",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR492.jpg",
  description: "Material: Rodio - Zamak"
},
{
  id: "CB731",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Maxi Negra Ajustable - CB731",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB731.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "CB730",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Maxi Rosada Ajustable - CB730",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB730.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "CB729",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Maxi Morada Ajustable - CB729",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB729.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "CB727",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Maragritas 17 cm + 5 cm Extensión - CB727",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB727.jpg",
  description: "Material: Acero"
},
{
  id: "CB726",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Bolas Café y Dorado Ajustable - CB726",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB726.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "CB725",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Bolas Blanca y Dorada Ajustable - CB725",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB725.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "CB724",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Bolas Café y Dorado Ajustable - CB724",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB724.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO161",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Mariposa verde - RO161",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO161.jpg",
  description: "Material: Rodio"
},
{
  id: "RO160",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Mariposa Tornasol - RO160",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO160.jpg",
  description: "Material: Rodio"
},
{
  id: "RO159",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Mariposa roja - RO159",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO159.jpg",
  description: "Material: Rodio"
},
{
  id: "FT341",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tulipán Morada 17 cm - FT341",
  price: 39900,
  image: "images/productos/Bisuteria/Pulseras/FT341.jpg",
  description: "Material: Rodio"
},
{
  id: "FT340",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tulipán Rosada 17 cm - FT340",
  price: 39900,
  image: "images/productos/Bisuteria/Pulseras/FT340.jpg",
  description: "Material: Rodio"
},
{
  id: "FT339",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tulipán roja 17 cm - FT339",
  price: 39900,
  image: "images/productos/Bisuteria/Pulseras/FT339.jpg",
  description: "Material: Rodio"
},
{
  id: "LL578",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Llamador de Angeles Ajustable - LL578",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL578.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OX442",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Margarita set x3 - OX442",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX442.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OX441",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Maxi Corazón Negro Ajustable - OX441",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX441.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "NP520",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Ajustable - NP520",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP520.jpg",
  description: "Material: Rodio"
},
{
  id: "NP519",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Negra Ajustable - NP519",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP519.jpg",
  description: "Material: Rodio"
},
{
  id: "NP518",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Ajustable - NP518",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP518.jpg",
  description: "Material: Rodio"
},
{
  id: "MC937",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Brazalete 7,5 cm - MC937",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC937.jpg",
  description: "Material: Rodio"
},
{
  id: "CB723",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Grano 18 cm + 5 cm Extensión - CB723",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB723.jpg",
  description: "Material: Rodio"
},
{
  id: "LL563",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Seleccion Colombia Ajustable - LL563",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL563.jpg",
  description: "Material: Rodio"
},
{
  id: "LL562",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Seleccion Colombia Ajustable - LL562",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL562.jpg",
  description: "Material: Rodio"
},
{
  id: "LL561",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Seleccion Colombia Ajustable - LL561",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL561.jpg",
  description: "Material: Rodio"
},
{
  id: "LL560",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Selección Colombia Ajustable - LL560",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL560.jpg",
  description: "Material: Rodio"
},
{
  id: "LL559",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Seleccion Colombia Ajustable - LL559",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL559.jpg",
  description: "Material: Rodio"
},
{
  id: "LL558",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable tricolor - LL558",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL558.jpg",
  description: "Material: Rodio"
},
{
  id: "LL557",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable tricolor - LL557",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL557.jpg",
  description: "Material: Rodio"
},
{
  id: "LL556",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable tricolor - LL556",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL556.jpg",
  description: "Material: Rodio"
},
{
  id: "LR487",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Colombia - LR487",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR487.jpg",
  description: "Material: Rodio"
},
{
  id: "LR486",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Colombia - LR486",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR486.jpg",
  description: "Material: Rodio"
},
{
  id: "LR485",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Colombia - LR485",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR485.jpg",
  description: "Material: Rodio"
},
{
  id: "LM873",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Negro Ajustable - LM873",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM873.jpg",
  description: "Material: Rodio"
},
{
  id: "LM872",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Azul Ajustable - LM872",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM872.jpg",
  description: "Material: Rodio"
},
{
  id: "RO131",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Ojo Turco Ajustable - RO131",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO131.jpg",
  description: "Material: Fantasia"
},
{
  id: "RO130",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera protección Ajustable - RO130",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO130.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO129",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Ojo turco y San Benito Ajustable - RO129",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO129.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO128",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cruz y San Benito Ajustable - RO128",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO128.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO127",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Ojo Turco y Ala Ajustable - RO127",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO127.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO126",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x3 Ojo Turco Ajustable - RO126",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO126.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO125",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x4 Perlas Ajustable - RO125",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO125.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO124",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x4 Estrellas Ajustable - RO124",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO124.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO123",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x 4 Murano Ajustable - RO123",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO123.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO122",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x 4 Corazón Ajustable - RO122",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO122.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO121",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x 4 Estrellas Ajustable - RO121",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO121.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO120",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera set x 4 Murano Ajustable - RO120",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO120.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL553",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito Pasador Ajustable - LL553",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL553.jpg",
  description: "Material: Rodio"
},
{
  id: "LL552",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Miguel y Cruz Ajustable - LL552",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL552.jpg",
  description: "Material: Rodio"
},
{
  id: "LL551",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Virgen y Cruz Ajustable - LL551",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL551.jpg",
  description: "Material: Rodio"
},
{
  id: "LL550",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito Pasador Ajustable - LL550",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL550.jpg",
  description: "Material: Rodio"
},
{
  id: "LL549",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito Pasador Ajustable - LL549",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL549.jpg",
  description: "Material: Rodio"
},
{
  id: "LL548",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito Ajustable Roja - LL548",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL548.jpg",
  description: "Material: Rodio"
},
{
  id: "PC724",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Mini Aros 18 cm + 5 cm Extensión - PC724",
  price: 9000,
  image: "images/productos/Bisuteria/Pulseras/PC724.jpg",
  description: "Material: Rodio"
},
{
  id: "CB705",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Circones Dorados Ajustable - CB705",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB705.jpg",
  description: "Material: Rodio"
},
{
  id: "SP348",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Virgen Nacar 18,5 cm + 5 cm Extensión - SP348",
  price: 35900,
  image: "images/productos/Bisuteria/Pulseras/SP348.jpg",
  description: "Material: Rodio"
},
{
  id: "RO110",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito Azul Ajustable - RO110",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO110.jpg",
  description: "Material: Rodio"
},
{
  id: "RO109",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito Roja Ajustable - RO109",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO109.jpg",
  description: "Material: Rodio"
},
{
  id: "OX424",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Mamá Doble Ajustable - OX424",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX424.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "CB702",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Mamá Dije Perla Ajustable - CB702",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB702.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL537",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Mamá y Corona Ajustable - LL537",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL537.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL536",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Mamá Doble Ajustable - LL536",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL536.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL534",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Protección Mamá Ajustable - LL534",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL534.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LL533",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Abuela Ajustable - LL533",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL533.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "PC721",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Triclor Ajustable - PC721",
  price: 9000,
  image: "images/productos/Bisuteria/Pulseras/PC721.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "PG437",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Atlético Nacional Ajustable - PG437",
  price: 11900,
  image: "images/productos/Bisuteria/Pulseras/PG437.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "RO078",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Balón Ajustable - RO078",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO078.jpg",
  description: "Material: Rodio"
},
{
  id: "NP489",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Guadalupe Ajustable - NP489",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP489.jpg",
  description: "Material: Rodio"
},
{
  id: "NP488",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Guadalupe verde Ajustable - NP488",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP488.jpg",
  description: "Material: Rodio"
},
{
  id: "NP487",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Guadalupe Cristal Ajustable - NP487",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP487.jpg",
  description: "Material: Rodio"
},
{
  id: "NP486",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Guadalupe Ajustable - NP486",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP486.jpg",
  description: "Material: Rodio"
},
{
  id: "NP485",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cruz y guadalupe Ajustable - NP485",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP485.jpg",
  description: "Material: Rodio"
},
{
  id: "OX396",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Balin Dije Divino NIño Ajustable - OX396",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX396.jpg",
  description: "Material: Rodio"
},
{
  id: "OX395",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Balin Dije cruz Ajustable - OX395",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX395.jpg",
  description: "Material: Rodio"
},
{
  id: "LR464",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazones Negros 18 cm x 1,2 + 5 Extensión - LR464",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR464.jpg",
  description: "Material: Rodio"
},
{
  id: "LR460",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Conchas 19cm x 1,3 cm + 5 Extensión - LR460",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR460.jpg",
  description: "Material: Rodio"
},
{
  id: "LM850",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera corazón set x 3 Ajustable - LM850",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM850.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "MC913",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Rosada x3 Ajustable - MC913",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC913.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "LM846",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol roja 19 cm + 6 extensión - LM846",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM846.jpg",
  description: "Material: Rodio"
},
{
  id: "LM843",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol 17 cm + 5 cm extensión - LM843",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM843.jpg",
  description: "Material: Rodio"
},
{
  id: "RO051",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Trébol Rojo - RO051",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO051.jpg",
  description: "Material: Rodio"
},
{
  id: "RO050",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Trébol Negro - RO050",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO050.jpg",
  description: "Material: Rodio"
},
{
  id: "LL508",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera G 18 cm x 4 mm - extensor 4 cm - LL508",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL508.jpg",
  description: "Material: Rodio"
},
{
  id: "CB681",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol blanca - CB681",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB681.jpg",
  description: "Material: Rodio"
},
{
  id: "CB680",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol negra - CB680",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB680.jpg",
  description: "Material: Rodio"
},
{
  id: "MC901",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Dije Sol 2,4 CM X 1,9 CM Ajustable - MC901",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC901.jpg",
  description: "Material: Rodio"
},
{
  id: "AC429",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Set x2 - AC429",
  price: 10900,
  image: "images/productos/Bisuteria/Pulseras/AC429.jpg",
  description: "Material: Fantasia"
},
{
  id: "AC428",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón set x 2 - AC428",
  price: 10900,
  image: "images/productos/Bisuteria/Pulseras/AC428.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "CB677",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Ojo Turco Set x2 - CB677",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB677.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "CB676",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cruz Set x2 - CB676",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB676.jpg",
  description: "Material: Acero"
},
{
  id: "CB675",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Set x2 - CB675",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB675.jpg",
  description: "Material: Acero"
},
{
  id: "LL504",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Set x 2 - LL504",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL504.jpg",
  description: "Material: Acero"
},
{
  id: "LM836",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Trébol Dorado 17 cm + 5 cm extensión - LM836",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM836.jpg",
  description: "Material: Rodio"
},
{
  id: "LM835",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Trébol Rojo 17 cm + 5 cm extensión - LM835",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM835.jpg",
  description: "Material: Rodio"
},
{
  id: "LM833",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Trébol Negro 17 cm + 5 cm extensión - LM833",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM833.jpg",
  description: "Material: Rodio"
},
{
  id: "CB671",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera 7 chakras Negra, el color de la piedra puede variar - CB671",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB671.jpg",
  description: "Material: Rodio"
},
{
  id: "CB670",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera 7 chakras Roja, el color de la piedra puede variar - CB670",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB670.jpg",
  description: "Material: Rodio"
},
{
  id: "TS263",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera amatista ajustable - TS263",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS263.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS264",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera cuarzo rosa ajustable - TS264",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS264.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS265",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera turquesa ajustable - TS265",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS265.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS266",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ónix ajustable - TS266",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS266.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS267",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera cuarzo cristal ajustable - TS267",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS267.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS268",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera jade ajustable - TS268",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS268.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS286",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Ojo de Tigre - TS286",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS286.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS287",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Lluvia de oro - TS287",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS287.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS288",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Ojo de tigre - TS288",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS288.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS285",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Lluvia de oro - TS285",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS285.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS205",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Ónix (Ajustable) - TS205",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS205.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS204",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tejida cuarzos 8mm (Ajustable) - TS204",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS204.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS203",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Jade (Ajustable) - TS203",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS203.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS202",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Amatista (Ajustable) - TS202",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS202.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS201",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cuarzo rosa (Ajustable) - TS201",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS201.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS200",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Turquesa (Ajustable) - TS200",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS200.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "DR079",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera acrilica Blanca - DR079",
  price: 49900,
  image: "images/productos/Bisuteria/Pulseras/DR079.jpg",
  description: "Material: Acrilico"
},
{
  id: "DR077",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera acrilica negra - DR077",
  price: 49900,
  image: "images/productos/Bisuteria/Pulseras/DR077.jpg",
  description: "Material: Acrilico"
},
{
  id: "DR078",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera acrilica Rosada - DR078",
  price: 49900,
  image: "images/productos/Bisuteria/Pulseras/DR078.jpg",
  description: "Material: Acrilico"
},
{
  id: "RO013",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera virgen guadalupe y medalla milagrosa, 18cm - RO013",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO013.jpg",
  description: "Material: Rodio"
},
{
  id: "RO014",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera protección san benito, 18cm + 5 ext. - RO014",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO014.jpg",
  description: "Material: Rodio"
},
{
  id: "RO012",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera protección san benito, 18cm + 5 ext. - RO012",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO012.jpg",
  description: "Material: Rodio"
},
{
  id: "RO011",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera virgen guadalupe y medalla milagrosa, 18cm - RO011",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO011.jpg",
  description: "Material: Rodio"
},
{
  id: "NP462",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera dije Estrella de Mar 18 cm + 5 extensión - NP462",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP462.jpg",
  description: "Material: Rodio"
},
{
  id: "RO007",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol rojo, 18cm + 5 cm extensión - RO007",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO007.jpg",
  description: "Material: Rodio"
},
{
  id: "RO005",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol rojo 17,5 cm + 5 cm extensión - RO005",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO005.jpg",
  description: "Material: Rodio"
},
{
  id: "RO002",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trebol dorada 17.5 cm + 5 cm extensión - RO002",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO002.jpg",
  description: "Material: Rodio"
},
{
  id: "RO001",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol dorada 18 cm + 5 cm extensión - RO001",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO001.jpg",
  description: "Material: Rodio"
},
{
  id: "RO003",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol blanco + 5 cm extensión - RO003",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO003.jpg",
  description: "Material: Rodio"
},
{
  id: "LM788",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera caracol 18cm + 5 cm extensión - LM788",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM788.jpg",
  description: "Material: Rodio"
},
{
  id: "MC853",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito dorado y plateado - MC853",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC853.jpg",
  description: "Material: Rodio"
},
{
  id: "MC852",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San benito dorada - MC852",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC852.jpg",
  description: "Material: Rodio"
},
{
  id: "OX294",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras corazón rojo - OX294",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX294.jpg",
  description: "Material: Rodio"
},
{
  id: "OX295",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras corazón negro - OX295",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX295.jpg",
  description: "Material: Rodio"
},
{
  id: "MC846",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol blanco y negro - MC846",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC846.jpg",
  description: "Material: Rodio"
},
{
  id: "MC829",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera negra trébol 18 cm + 5 cm extensión - MC829",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC829.jpg",
  description: "Material: Rodio"
},
{
  id: "MC826",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera set x3 Margaritas - MC826",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC826.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "PC669",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras para compartir dije avión - PC669",
  price: 9000,
  image: "images/productos/Bisuteria/Pulseras/PC669.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "MC807",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol negro 18 cm + 5 cm extensión - MC807",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC807.jpg",
  description: "Material: Acero"
},
{
  id: "OX292",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Uriel, energías positivas - OX292",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX292.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OX291",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Jofiel Sabiduría, comprensión e inspiración - OX291",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX291.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OX290",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Zadquiel, Alegría y libertad - OX290",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX290.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OX289",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Rafael, Salud - OX289",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX289.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OX288",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Gabriel, Mensajero de Dios - OX288",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX288.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OX287",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Miguel, protección, la fuerza y la fe. - OX287",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX287.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "OX286",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Chamuel, Amor y unión - OX286",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX286.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "MC775",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol verde 17 cm + 5 cm extensión - MC775",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC775.jpg",
  description: "Material: Acero"
},
{
  id: "MC763",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol roja 17 cm + 5 cm extensión - MC763",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC763.jpg",
  description: "Material: Acero"
},
{
  id: "OR051",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Trebol negra ajustable - OR051",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/OR051.jpg",
  description: "Material: Rodio"
},
{
  id: "TS278",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable - TS278",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS278.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS277",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable - TS277",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS277.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TS215",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tejida 7 chakras 7mm (Ajustable) - TS215",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS215.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "GP362",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ojo turco ajustable - GP362",
  price: 7100,
  image: "images/productos/Bisuteria/Pulseras/GP362.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "PC607",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera cuarzo rosa ajustable - PC607",
  price: 9000,
  image: "images/productos/Bisuteria/Pulseras/PC607.jpg",
  description: "Material: Oro Goldfield"
},
{
  id: "TP336",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tejida 7 nudos 3mm (Ajustable) - TP336",
  price: 4200,
  image: "images/productos/Bisuteria/Pulseras/TP336.jpg",
  description: "Material: Fantasia"
},
];
