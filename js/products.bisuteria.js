// ============================================
// ALERICK GLAM — Catálogo de Bisutería
//
// Aquí agregas y editas los productos que se muestran en la
// página de Bisutería. Cada producto es un objeto dentro del
// arreglo PRODUCTS_BISUTERIA. El sitio los pinta solo — no
// toques bisuteria.html para agregar un producto.
//
// Los productos de Maquillaje viven en su propio archivo:
// js/products.maquillaje.js (no los agregues aquí).
//
// CÓMO AGREGAR UN PRODUCTO NUEVO:
// 1. Guarda la foto del producto dentro de images/productos/, en la
//    subcarpeta de su categoría y luego la de su tipo (subcategory)
//    (por ejemplo: images/productos/Bisuteria/Collares/collar-perlas.jpg)
// 2. Copia uno de los bloques { ... } de abajo y pégalo
//    dentro del arreglo (respetando la coma entre productos).
// 3. Cambia id, name, price, image, medidas, material y description.
//    - id: el código del producto (ej: "LL590"). Se muestra en la
//      tarjeta debajo del nombre y va junto al nombre en el carrito
//      ("Anillo cadena LL590"), así que no lo repitas en "name".
//    - name: solo el nombre de la pieza, sin código ni medidas
//      (ej: "Collar Maxi Corazón Rojo")
//    - price: solo el número, sin puntos ni signo de pesos
//      (ej: 35000 para $35.000)
//    - subcategory: activa el filtro por tipo en la página de
//      Bisutería. Usa exactamente uno de estos textos:
//      "Anillos", "Aretes", "Collares", "Conjuntos", "Dijes",
//      "Earcuff", "Empaques", "Pulseras", "Rosarios", "Tobilleras"
//    - material: de qué está hecha la pieza. Se muestra debajo de la
//      descripción ("Material: Rodio") y activa el filtro por material.
//      Usa uno de estos textos: "Plata Ley 925", "Oro Laminado 18K", "Rodio",
//      "Oro Goldfield", "Acero", "Covergold", "Zamak", "Acrílico", "Fantasía".
//      Si la pieza combina dos, sepáralos con " - " (ej: "Acero - Oro
//      Goldfield") y aparece en el filtro de ambos. Los empaques no lo
//      llevan.
//    - medidas: opcional; tamaño, largo o talla
//      (ej: "38 cm + 6 cm extensión", "1,4 cm x 4 mm", "Talla 7").
//    - description: opcional; un detalle corto que no sea el material
//      ni las medidas (ej: "Anillo ajustable").
//    En la tarjeta se ve en este orden: nombre, código, medidas,
//    descripción y material.
//    - tallas: opcional, para el mismo anillo en varias tallas (cada
//      talla con su propio código y precio). Se deja un solo producto con
//      "price" igual al precio más bajo y una línea por talla:
//        medidas: "Talla 6, 7, 8",
//        tallas: [
//          { talla: "6", id: "11092P-JOQ", price: 90000 },
//          { talla: "7", id: "11093P-JOQ", price: 90000 }
//        ],
//      Al tocar "Agregar", la clienta elige la talla y al carrito llega
//      el código y el precio de esa talla.
// 4. Guarda el archivo y sube los cambios a GitHub — listo,
//    ya aparece en la página con su botón "Agregar" funcionando.
//
// AGOTADOS: si un producto ya no lo consigues, agrégale la línea
//   agotado: true
// y deja de mostrarse en la página (sin borrarlo del archivo). Para
// que vuelva a aparecer, quita esa línea.
// ============================================

const PRODUCTS_BISUTERIA = [
{
  id: "OX460",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Flor Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX460.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "LR508",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Flores Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Anillos/LR508.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "LR507",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ojo Turco Colores Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Anillos/LR507.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "LR506",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ojo Turco Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Anillos/LR506.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB749",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazón Verde Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB749.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB748",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circones Verde Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB748.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB747",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Solitario Verde Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB747.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB746",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Solitario Verde Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB746.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB745",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circones Verdes Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB745.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB744",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazón Fucsia Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB744.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB743",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazón Verde Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB743.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB742",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Piedra Verde Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB742.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB741",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazón Verde Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB741.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB740",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Solitario Cristal Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB740.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB739",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corona Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB739.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB737",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circón Verde Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB737.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB738",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Piedra Roja Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB738.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "OX455",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Doble Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX455.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "OX454",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Liso Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX454.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "OX453",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Olas Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX453.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "LL570",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Solitario Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL570.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "OX425",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Abeja Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX425.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "12048P-JOR",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo CT Ajustable",
  price: 100000,
  image: "images/productos/Bisuteria/Anillos/12048P-JOR.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11965P-JOQ",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo 5 carriles, balín italiano y liso",
  price: 90000,
  image: "images/productos/Bisuteria/Anillos/11965P-JOQ.jpg",
  medidas: "3mm y 3mm",
  material: "Plata Ley 925"
},
{
  id: "11945P-JOR",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Eternal Loop Ajustable",
  price: 100000,
  image: "images/productos/Bisuteria/Anillos/11945P-JOR.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11944P-JOR",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Starlight Ajustable",
  price: 100000,
  image: "images/productos/Bisuteria/Anillos/11944P-JOR.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11904P-JON",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circón verde",
  price: 75000,
  image: "images/productos/Bisuteria/Anillos/11904P-JON.jpg",
  medidas: "Talla 8",
  material: "Plata Ley 925"
},
{
  id: "11902P-JOL",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circón verde",
  price: 70000,
  image: "images/productos/Bisuteria/Anillos/11902P-JOL.jpg",
  medidas: "Talla 7, 8",
  tallas: [
    { talla: "7", id: "11902P-JOL", price: 70000 },
    { talla: "8", id: "11903P-JOL", price: 70000 }
  ],
  material: "Plata Ley 925"
},
{
  id: "11899P-JOJ",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo solitario",
  price: 60000,
  image: "images/productos/Bisuteria/Anillos/11899P-JOJ.jpg",
  medidas: "Talla 7",
  material: "Plata Ley 925"
},
{
  id: "11849P-JOP",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo corazón",
  price: 85000,
  image: "images/productos/Bisuteria/Anillos/11849P-JOP.jpg",
  medidas: "Talla 7, 8",
  tallas: [
    { talla: "7", id: "11849P-JOP", price: 85000 },
    { talla: "8", id: "11850P-JOP", price: 85000 }
  ],
  material: "Plata Ley 925"
},
{
  id: "11839P-JOG",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable Balín Liso",
  price: 45000,
  image: "images/productos/Bisuteria/Anillos/11839P-JOG.jpg",
  medidas: "4 mm",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11838P-JOE",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable Balín Italy",
  price: 35000,
  image: "images/productos/Bisuteria/Anillos/11838P-JOE.jpg",
  medidas: "4 mm",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11837P-JOJ",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable Balín liso Italiano",
  price: 60000,
  image: "images/productos/Bisuteria/Anillos/11837P-JOJ.jpg",
  medidas: "4 mm y 3 mm",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11195P-JXD",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillos Diamond Eternity Ajustable",
  price: 350000,
  image: "images/productos/Bisuteria/Anillos/11195P-JXD.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11194P-JXC",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillos One Forever Ajustable",
  price: 320000,
  image: "images/productos/Bisuteria/Anillos/11194P-JXC.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11193P-JXB",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillos Eternal Glow Ajustable",
  price: 280000,
  image: "images/productos/Bisuteria/Anillos/11193P-JXB.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11192P-JXC",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillos True Love Ajustable",
  price: 320000,
  image: "images/productos/Bisuteria/Anillos/11192P-JXC.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11191P-JXC",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillos Heart Promise Ajustable",
  price: 320000,
  image: "images/productos/Bisuteria/Anillos/11191P-JXC.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11190P-JXB",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillos Pure Love Ajustable",
  price: 280000,
  image: "images/productos/Bisuteria/Anillos/11190P-JXB.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11189P-JXB",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillos Union Eterna Ajustable",
  price: 280000,
  image: "images/productos/Bisuteria/Anillos/11189P-JXB.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11188P-JXC",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillos Eternal Shine Ajustable",
  price: 320000,
  image: "images/productos/Bisuteria/Anillos/11188P-JXC.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11187P-JXB",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillos Amor Infinito Ajustable",
  price: 280000,
  image: "images/productos/Bisuteria/Anillos/11187P-JXB.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11186P-JXC",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillos Promise Ajustable",
  price: 320000,
  image: "images/productos/Bisuteria/Anillos/11186P-JXC.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11185P-JXD",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillos Legacy Love Ajustable",
  price: 350000,
  image: "images/productos/Bisuteria/Anillos/11185P-JXD.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11184P-JXB",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillos Destiny Love Ajustable",
  price: 280000,
  image: "images/productos/Bisuteria/Anillos/11184P-JXB.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11180P-JOS",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Flor Ajustable",
  price: 120000,
  image: "images/productos/Bisuteria/Anillos/11180P-JOS.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11177P-JOS",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Cristal",
  price: 120000,
  image: "images/productos/Bisuteria/Anillos/11177P-JOS.jpg",
  medidas: "Talla 6, 7, 8",
  tallas: [
    { talla: "6", id: "11177P-JOS", price: 120000 },
    { talla: "7", id: "11178P-JOS", price: 120000 },
    { talla: "8", id: "11179P-JOT", price: 130000 }
  ],
  material: "Plata Ley 925"
},
{
  id: "11174P-JOP",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Cruz",
  price: 85000,
  image: "images/productos/Bisuteria/Anillos/11174P-JOP.jpg",
  medidas: "Talla 6, 7, 8",
  tallas: [
    { talla: "6", id: "11174P-JOP", price: 85000 },
    { talla: "7", id: "11175P-JOP", price: 85000 },
    { talla: "8", id: "11176P-JOQ", price: 90000 }
  ],
  material: "Plata Ley 925"
},
{
  id: "11033P-JOL",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo ajustable cruz",
  price: 70000,
  image: "images/productos/Bisuteria/Anillos/11033P-JOL.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11131P-JOW",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Eternal Stone Moissanita Ajustable",
  price: 160000,
  image: "images/productos/Bisuteria/Anillos/11131P-JOW.jpg",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "11092P-JOQ",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Copo de Nieve",
  price: 90000,
  image: "images/productos/Bisuteria/Anillos/11092P-JOQ.jpg",
  medidas: "Talla 6, 7, 8",
  tallas: [
    { talla: "6", id: "11092P-JOQ", price: 90000 },
    { talla: "7", id: "11093P-JOQ", price: 90000 },
    { talla: "8", id: "11094P-JOQ", price: 90000 }
  ],
  material: "Plata Ley 925"
},
{
  id: "11089P-JOR",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Gota",
  price: 100000,
  image: "images/productos/Bisuteria/Anillos/11089P-JOR.jpg",
  medidas: "Talla 6, 7, 8",
  tallas: [
    { talla: "6", id: "11089P-JOR", price: 100000 },
    { talla: "7", id: "11090P-JOR", price: 100000 },
    { talla: "8", id: "11091P-JOS", price: 120000 }
  ],
  material: "Plata Ley 925"
},
{
  id: "11086P-JOR",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circón Rojo",
  price: 100000,
  image: "images/productos/Bisuteria/Anillos/11086P-JOR.jpg",
  medidas: "Talla 6, 7, 8",
  tallas: [
    { talla: "6", id: "11086P-JOR", price: 100000 },
    { talla: "7", id: "11087P-JOS", price: 120000 },
    { talla: "8", id: "11088P-JOS", price: 120000 }
  ],
  material: "Plata Ley 925"
},
{
  id: "11084P-JOR",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Doble Cruz",
  price: 100000,
  image: "images/productos/Bisuteria/Anillos/11084P-JOR.jpg",
  medidas: "Talla 5, 6",
  tallas: [
    { talla: "5", id: "11084P-JOR", price: 100000 },
    { talla: "6", id: "11085P-JOT", price: 130000 }
  ],
  material: "Plata Ley 925"
},
{
  id: "11080P-JOP",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Argolla lisa",
  price: 85000,
  image: "images/productos/Bisuteria/Anillos/11080P-JOP.jpg",
  medidas: "Talla 6, 10",
  tallas: [
    { talla: "6", id: "11080P-JOP", price: 85000 },
    { talla: "10", id: "11892P-JOQ", price: 90000 }
  ],
  material: "Plata Ley 925"
},
{
  id: "11064P-JOH",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Balín",
  price: 50000,
  image: "images/productos/Bisuteria/Anillos/11064P-JOH.jpg",
  medidas: "4 mm",
  material: "Plata Ley 925"
},
{
  id: "11063P-JNA",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo balín Italy",
  price: 15000,
  image: "images/productos/Bisuteria/Anillos/11063P-JNA.jpg",
  medidas: "4mm",
  material: "Plata Ley 925"
},
{
  id: "10911P-T11-JOW",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Argolla trenzada",
  price: 160000,
  image: "images/productos/Bisuteria/Anillos/10911P-T11-JOW.jpg",
  medidas: "Talla 11",
  material: "Plata Ley 925"
},
{
  id: "10802P-JOK",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo balín ajustable",
  price: 70000,
  image: "images/productos/Bisuteria/Anillos/10802P-JOK.jpg",
  medidas: "3 mm",
  description: "Anillo ajustable",
  material: "Plata Ley 925"
},
{
  id: "LL590",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo corazón con alas Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL590.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "LL588",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cirón rojo Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL588.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "LL586",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cirón cristal Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL586.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "LL585",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circón verde Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL585.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "LL584",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cadena Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL584.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "LL581",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circón cristal Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL581.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "OX445",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable mariposa tornasol",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX445.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "OX444",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable mariposa verde",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX444.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "OX443",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ajustable mariposa roja",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX443.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "RO158",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO158.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "RO157",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO157.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "RO156",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO156.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "RO155",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO155.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "NP515",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Flor y Perla Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Anillos/NP515.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "MC934",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Maxi Flor y Perla Ajustable",
  price: 27000,
  image: "images/productos/Bisuteria/Anillos/MC934.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "NP514",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Flor Maxi Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Anillos/NP514.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "RO145",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazones Rojos Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO145.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "RO144",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazones blancos Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO144.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "RO143",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazones Rojos Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Anillos/RO143.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "NP513",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Blanco Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Anillos/NP513.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "LL565",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Cadena Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL565.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "LL564",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Doble Mariposa Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL564.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "LL567",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Solitario Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL567.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "LL569",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo circones Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL569.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "OX426",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazón Maxi Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX426.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "LR477",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Estrella Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Anillos/LR477.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "CB703",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circones Cristal Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Anillos/CB703.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "LL540",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Corazón Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL540.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "LL538",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circones Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Anillos/LL538.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "OX422",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Concha Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX422.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "OX417",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Circón Fucsia Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX417.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "MC925",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Sol y Luna Ajustable",
  price: 27000,
  image: "images/productos/Bisuteria/Anillos/MC925.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "LM855",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Cubano Ajustable",
  price: 21000,
  image: "images/productos/Bisuteria/Anillos/LM855.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "OX398",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Nota musical Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Anillos/OX398.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "PG428",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Ovalos Ajustable",
  price: 11900,
  image: "images/productos/Bisuteria/Anillos/PG428.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "PG424",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Balin Ajustable",
  price: 11900,
  image: "images/productos/Bisuteria/Anillos/PG424.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "LM839",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo Sol y Luna Ajustable",
  price: 21000,
  image: "images/productos/Bisuteria/Anillos/LM839.jpg",
  description: "Anillo ajustable",
  material: "Rodio",
  agotado: true
},
{
  id: "MC784",
  category: "bisuteria",
  subcategory: "Anillos",
  name: "Anillo cuadrado circones",
  price: 27000,
  image: "images/productos/Bisuteria/Anillos/MC784.jpg",
  description: "Anillo ajustable",
  material: "Rodio"
},
{
  id: "OX459",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX459.jpg",
  medidas: "4 cm",
  material: "Rodio"
},
{
  id: "OX458",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX458.jpg",
  medidas: "4 cm",
  material: "Rodio"
},
{
  id: "OX457",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX457.jpg",
  medidas: "3 cm",
  material: "Rodio"
},
{
  id: "OX456",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX456.jpg",
  medidas: "3 cm",
  material: "Rodio"
},
{
  id: "CB757",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 15500,
  image: "images/productos/Bisuteria/Aretes/CB757.jpg",
  medidas: "2,5 cm",
  material: "Rodio"
},
{
  id: "OX452",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Italy",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX452.jpg",
  medidas: "5 cm"
},
{
  id: "OX451",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Diamantada",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX451.jpg",
  medidas: "5 cm",
  material: "Rodio"
},
{
  id: "OX450",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazones",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX450.jpg",
  medidas: "2,3 x 1,4 cm",
  material: "Acero"
},
{
  id: "LR505",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón y perlas",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR505.jpg",
  medidas: "1,4 cm x 1,9 cm",
  material: "Acero"
},
{
  id: "CB728",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Margaritas",
  price: 15500,
  image: "images/productos/Bisuteria/Aretes/CB728.jpg",
  medidas: "1,5 cm",
  material: "Acero"
},
{
  id: "LL573",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Mariposa",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL573.jpg",
  medidas: "1 cm x 1,1 cm",
  material: "Rodio"
},
{
  id: "LM294",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete eslabones",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM294.jpg",
  medidas: "1.5 cm de largo x 7 mm de grosor",
  material: "Oro Goldfield"
},
{
  id: "12039P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/12039P-JOG.jpg",
  medidas: "1,5 cm",
  material: "Plata Ley 925"
},
{
  id: "12038P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/12038P-JOG.jpg",
  medidas: "1,6 cm",
  material: "Plata Ley 925"
},
{
  id: "12037P-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/12037P-JOK.jpg",
  medidas: "1,6 cm",
  material: "Plata Ley 925"
},
{
  id: "12036P-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Balines",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/12036P-JOH.jpg",
  medidas: "1,6 cm",
  material: "Plata Ley 925"
},
{
  id: "12033P-JOU",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo esmeralda rústico rosca de seguridad",
  price: 140000,
  image: "images/productos/Bisuteria/Aretes/12033P-JOU.jpg",
  medidas: "3mm",
  description: "El tamaño y la forma pueden variar",
  material: "Plata Ley 925"
},
{
  id: "11006P-JNA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Balin #4",
  price: 15000,
  image: "images/productos/Bisuteria/Aretes/11006P-JNA.jpg",
  material: "Plata Ley 925"
},
{
  id: "10748P-JNA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Balín",
  price: 15000,
  image: "images/productos/Bisuteria/Aretes/10748P-JNA.jpg",
  medidas: "3mm",
  material: "Plata Ley 925"
},
{
  id: "12032P-JNA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo balín",
  price: 15000,
  image: "images/productos/Bisuteria/Aretes/12032P-JNA.jpg",
  medidas: "2mm",
  material: "Plata Ley 925"
},
{
  id: "12015P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/12015P-JOF.jpg",
  medidas: "4mm",
  material: "Plata Ley 925"
},
{
  id: "12014P-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/12014P-JOH.jpg",
  medidas: "1,9 cm",
  material: "Plata Ley 925"
},
{
  id: "12013P-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/12013P-JOJ.jpg",
  medidas: "2,6 cm",
  material: "Plata Ley 925"
},
{
  id: "12012P-JOR",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 100000,
  image: "images/productos/Bisuteria/Aretes/12012P-JOR.jpg",
  medidas: "4,3 cm",
  material: "Plata Ley 925"
},
{
  id: "12011P-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Balín",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/12011P-JOJ.jpg",
  medidas: "2,1 cm",
  material: "Plata Ley 925"
},
{
  id: "12010P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/12010P-JOF.jpg",
  medidas: "1,6 cm",
  material: "Plata Ley 925"
},
{
  id: "12009P-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/12009P-JOK.jpg",
  medidas: "2,3 cm",
  material: "Plata Ley 925"
},
{
  id: "12008P-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/12008P-JOJ.jpg",
  medidas: "1,6 cm",
  material: "Plata Ley 925"
},
{
  id: "12007P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/12007P-JOG.jpg",
  medidas: "1,5 CM",
  material: "Plata Ley 925"
},
{
  id: "12006P-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/12006P-JOJ.jpg",
  medidas: "1,6 CM",
  material: "Plata Ley 925"
},
{
  id: "12005P-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/12005P-JOJ.jpg",
  medidas: "2,3 cm",
  material: "Plata Ley 925"
},
{
  id: "12004P-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/12004P-JOK.jpg",
  medidas: "2,4 cm",
  material: "Plata Ley 925"
},
{
  id: "12003P-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/12003P-JOH.jpg",
  medidas: "1,4 cm",
  material: "Plata Ley 925"
},
{
  id: "11992P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón irisado",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11992P-JOA.jpg",
  medidas: "3mm",
  material: "Plata Ley 925"
},
{
  id: "11928P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón fucsia",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11928P-JOA.jpg",
  medidas: "3mm",
  material: "Plata Ley 925"
},
{
  id: "11927P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón rojo",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11927P-JOA.jpg",
  medidas: "3mm",
  material: "Plata Ley 925"
},
{
  id: "11926P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón azul",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11926P-JOA.jpg",
  medidas: "3mm",
  material: "Plata Ley 925"
},
{
  id: "11073P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo verde",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11073P-JOA.jpg",
  medidas: "3mm",
  material: "Plata Ley 925"
},
{
  id: "11985P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo estrella circón cristal",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11985P-JOA.jpg",
  medidas: "4mm",
  material: "Plata Ley 925"
},
{
  id: "11983P-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos circón cristal",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/11983P-JOJ.jpg",
  medidas: "6, 4 y 2 mm",
  material: "Plata Ley 925"
},
{
  id: "11982P-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos circón verde",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/11982P-JOJ.jpg",
  medidas: "6, 4 y 2 mm",
  material: "Plata Ley 925"
},
{
  id: "11980P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón redondo Verde",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11980P-JOA.jpg",
  medidas: "2mm",
  material: "Plata Ley 925"
},
{
  id: "11981P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón cristal",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11981P-JOA.jpg",
  medidas: "2mm",
  material: "Plata Ley 925"
},
{
  id: "11941P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón rosado",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11941P-JOA.jpg",
  medidas: "2mm",
  material: "Plata Ley 925"
},
{
  id: "11979P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo redondo circón cristal",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11979P-JOA.jpg",
  medidas: "4mm",
  material: "Plata Ley 925"
},
{
  id: "11978P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo redondo circón Verde",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11978P-JOA.jpg",
  medidas: "4mm",
  material: "Plata Ley 925"
},
{
  id: "11925P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón Negro",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11925P-JOA.jpg",
  medidas: "4mm",
  material: "Plata Ley 925"
},
{
  id: "11924P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón rosado",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11924P-JOA.jpg",
  medidas: "4mm",
  material: "Plata Ley 925"
},
{
  id: "11977P-JOE",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón redondo cristal",
  price: 35000,
  image: "images/productos/Bisuteria/Aretes/11977P-JOE.jpg",
  medidas: "6mm",
  material: "Plata Ley 925"
},
{
  id: "11976P-JOE",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón redondo verde",
  price: 35000,
  image: "images/productos/Bisuteria/Aretes/11976P-JOE.jpg",
  medidas: "6mm",
  material: "Plata Ley 925"
},
{
  id: "11922P-JOE",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón negro",
  price: 35000,
  image: "images/productos/Bisuteria/Aretes/11922P-JOE.jpg",
  medidas: "6mm",
  material: "Plata Ley 925"
},
{
  id: "11923P-JOE",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón rojo",
  price: 35000,
  image: "images/productos/Bisuteria/Aretes/11923P-JOE.jpg",
  medidas: "6mm",
  material: "Plata Ley 925"
},
{
  id: "11889P-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Esmeralda Rústico",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/11889P-JOQ.jpg",
  medidas: "2 mm",
  description: "El tamaño y la forma pueden variar",
  material: "Plata Ley 925"
},
{
  id: "11890P-JOR",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Esmeralda Rústico",
  price: 100000,
  image: "images/productos/Bisuteria/Aretes/11890P-JOR.jpg",
  medidas: "3 mm",
  description: "El tamaño y la forma pueden variar",
  material: "Plata Ley 925"
},
{
  id: "11891P-JOR",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Esmeralda Rústico",
  price: 100000,
  image: "images/productos/Bisuteria/Aretes/11891P-JOR.jpg",
  medidas: "4 mm",
  description: "El tamaño y la forma pueden variar",
  material: "Plata Ley 925"
},
{
  id: "11865P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo rosa",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11865P-JOA.jpg",
  medidas: "3mm",
  material: "Plata Ley 925"
},
{
  id: "11078P-JOC",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Rojo",
  price: 25000,
  image: "images/productos/Bisuteria/Aretes/11078P-JOC.jpg",
  medidas: "4mm",
  material: "Plata Ley 925"
},
{
  id: "11079P-JOC",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo verde",
  price: 25000,
  image: "images/productos/Bisuteria/Aretes/11079P-JOC.jpg",
  medidas: "4mm",
  material: "Plata Ley 925"
},
{
  id: "10908P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad elefante",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10908P-JOF.jpg",
  medidas: "1cm x 6mm",
  material: "Plata Ley 925"
},
{
  id: "10907P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad San benito",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10907P-JOF.jpg",
  medidas: "8mm",
  material: "Plata Ley 925"
},
{
  id: "10667P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad Virgen",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10667P-JOF.jpg",
  medidas: "5mm x 8mm",
  material: "Plata Ley 925"
},
{
  id: "10668P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad Virgen",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10668P-JOF.jpg",
  medidas: "6mm x 8mm",
  material: "Plata Ley 925"
},
{
  id: "10670P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad Torre París",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10670P-JOF.jpg",
  medidas: "6 mm x 7 mm",
  material: "Plata Ley 925"
},
{
  id: "10891P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad infinito",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10891P-JOF.jpg",
  medidas: "8mm",
  material: "Plata Ley 925"
},
{
  id: "10892P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad mariposa",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10892P-JOF.jpg",
  medidas: "7mm",
  material: "Plata Ley 925"
},
{
  id: "10894P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo seguridad oso",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10894P-JOF.jpg",
  medidas: "8mm",
  material: "Plata Ley 925"
},
{
  id: "10896P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad paloma",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10896P-JOF.jpg",
  medidas: "8mm",
  material: "Plata Ley 925"
},
{
  id: "10898P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad estrella",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10898P-JOF.jpg",
  medidas: "7mm",
  material: "Plata Ley 925"
},
{
  id: "10900P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad corazón",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10900P-JOF.jpg",
  medidas: "7mm",
  material: "Plata Ley 925"
},
{
  id: "10901P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad oso",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10901P-JOF.jpg",
  medidas: "5x6mm",
  material: "Plata Ley 925"
},
{
  id: "10902P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad sol",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10902P-JOF.jpg",
  medidas: "7mm",
  material: "Plata Ley 925"
},
{
  id: "10903P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad cruz",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10903P-JOF.jpg",
  medidas: "9x6mm",
  material: "Plata Ley 925"
},
{
  id: "10904P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad corazón",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10904P-JOF.jpg",
  medidas: "7mm",
  material: "Plata Ley 925"
},
{
  id: "10906P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad Gucci",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10906P-JOF.jpg",
  medidas: "6x4mm",
  material: "Plata Ley 925"
},
{
  id: "10909P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad tortuga",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10909P-JOF.jpg",
  medidas: "7mm",
  material: "Plata Ley 925"
},
{
  id: "10910P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad divino niño",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10910P-JOF.jpg",
  medidas: "9x6mm",
  material: "Plata Ley 925"
},
{
  id: "11921P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo balín rosca de seguridad",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/11921P-JOF.jpg",
  medidas: "3mm",
  material: "Plata Ley 925"
},
{
  id: "11920P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo rosca de seguridad circón cristal",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/11920P-JOF.jpg",
  medidas: "4mm",
  material: "Plata Ley 925"
},
{
  id: "11919P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo rosca de seguridad circón rosado",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/11919P-JOF.jpg",
  medidas: "4mm",
  material: "Plata Ley 925"
},
{
  id: "11918P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo rosca de seguridad circón rojo",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/11918P-JOF.jpg",
  medidas: "4mm",
  material: "Plata Ley 925"
},
{
  id: "11917P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo rosca de seguridad circón verde",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/11917P-JOF.jpg",
  medidas: "4mm",
  material: "Plata Ley 925"
},
{
  id: "11916P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo rosca seguridad Cristal",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/11916P-JOF.jpg",
  medidas: "5mm",
  material: "Plata Ley 925"
},
{
  id: "11915P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo rosca seguridad rosado",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/11915P-JOF.jpg",
  medidas: "5mm",
  material: "Plata Ley 925"
},
{
  id: "11914P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo rosca seguridad rojo",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/11914P-JOF.jpg",
  medidas: "5mm",
  material: "Plata Ley 925"
},
{
  id: "11872P-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Aro Eclat",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/11872P-JOJ.jpg",
  medidas: "5 mm",
  material: "Plata Ley 925"
},
{
  id: "11871P-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Kron",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/11871P-JOK.jpg",
  medidas: "6,4 mm",
  material: "Plata Ley 925"
},
{
  id: "11870P-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Cat Shine",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/11870P-JOH.jpg",
  medidas: "5 mm",
  material: "Plata Ley 925"
},
{
  id: "11869P-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Kitty Love",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/11869P-JOH.jpg",
  medidas: "6 mm",
  material: "Plata Ley 925"
},
{
  id: "11858P-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga corazón",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/11858P-JOJ.jpg",
  medidas: "1,5 cm",
  material: "Plata Ley 925"
},
{
  id: "11857P-JNA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 15000,
  image: "images/productos/Bisuteria/Aretes/11857P-JNA.jpg",
  medidas: "1 cm",
  material: "Plata Ley 925"
},
{
  id: "11834P-JOD",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/11834P-JOD.jpg",
  medidas: "1,5 cm",
  material: "Plata Ley 925"
},
{
  id: "11832P-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/11832P-JOK.jpg",
  medidas: "1,3 cm",
  material: "Plata Ley 925"
},
{
  id: "11831P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/11831P-JOF.jpg",
  medidas: "2 cm",
  material: "Plata Ley 925"
},
{
  id: "11803P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo seguridad Cristal",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/11803P-JOF.jpg",
  medidas: "4 mm",
  material: "Plata Ley 925"
},
{
  id: "11162P-JOU",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Set Cuore Onix",
  price: 140000,
  image: "images/productos/Bisuteria/Aretes/11162P-JOU.jpg",
  material: "Plata Ley 925"
},
{
  id: "11160P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Line Heart",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/11160P-JOF.jpg",
  medidas: "3 mm",
  material: "Plata Ley 925"
},
{
  id: "11159P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Siren Tail",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/11159P-JOG.jpg",
  medidas: "6 mm",
  material: "Plata Ley 925"
},
{
  id: "11158P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Oria Heart",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/11158P-JOG.jpg",
  medidas: "4 mm",
  material: "Plata Ley 925"
},
{
  id: "11156P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Aero Spark",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/11156P-JOG.jpg",
  medidas: "7 mm",
  material: "Plata Ley 925"
},
{
  id: "11153P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Topo Coris",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/11153P-JOG.jpg",
  medidas: "6 mm",
  material: "Plata Ley 925"
},
{
  id: "11152P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Ciel Heart",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/11152P-JOG.jpg",
  medidas: "4x3 mm",
  material: "Plata Ley 925"
},
{
  id: "11151P-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Aurelle",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/11151P-JOH.jpg",
  medidas: "5 mm",
  material: "Plata Ley 925"
},
{
  id: "11137P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Bear Glow",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/11137P-JOG.jpg",
  medidas: "4x5 mm",
  material: "Plata Ley 925"
},
{
  id: "11136P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Eiffel Spark",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/11136P-JOG.jpg",
  medidas: "4x7 mm",
  material: "Plata Ley 925"
},
{
  id: "11135P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Ocean Pair",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/11135P-JOG.jpg",
  medidas: "5 mm",
  material: "Plata Ley 925"
},
{
  id: "11126P-JOC",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Luxe Dot",
  price: 25000,
  image: "images/productos/Bisuteria/Aretes/11126P-JOC.jpg",
  medidas: "2 mm",
  material: "Plata Ley 925"
},
{
  id: "11124P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Facet Hoop",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/11124P-JOG.jpg",
  medidas: "7 mm",
  material: "Plata Ley 925"
},
{
  id: "11122P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tria Luxe MT",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/11122P-JOG.jpg",
  medidas: "3 mm",
  material: "Plata Ley 925"
},
{
  id: "11051P-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/11051P-JOK.jpg",
  medidas: "1,4 cm",
  material: "Plata Ley 925"
},
{
  id: "11039P-JOE",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo huella",
  price: 35000,
  image: "images/productos/Bisuteria/Aretes/11039P-JOE.jpg",
  medidas: "8mm",
  material: "Plata Ley 925"
},
{
  id: "11035P-JOC",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo cruz",
  price: 25000,
  image: "images/productos/Bisuteria/Aretes/11035P-JOC.jpg",
  medidas: "8mm",
  material: "Plata Ley 925"
},
{
  id: "11024P-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Move Pave MSK",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/11024P-JOK.jpg",
  medidas: "4x8 mm",
  material: "Plata Ley 925"
},
{
  id: "11023P-JOC",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Destello Fine",
  price: 25000,
  image: "images/productos/Bisuteria/Aretes/11023P-JOC.jpg",
  medidas: "1 mm",
  material: "Plata Ley 925"
},
{
  id: "11022P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Destello Fine",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/11022P-JOF.jpg",
  medidas: "2,4 mm",
  material: "Plata Ley 925"
},
{
  id: "11021P-JOE",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Destello Fine",
  price: 35000,
  image: "images/productos/Bisuteria/Aretes/11021P-JOE.jpg",
  medidas: "2,1 mm",
  material: "Plata Ley 925"
},
{
  id: "11011P-JOA",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Balin #3",
  price: 20000,
  image: "images/productos/Bisuteria/Aretes/11011P-JOA.jpg",
  material: "Plata Ley 925"
},
{
  id: "11009P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Triangle Crystal",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/11009P-JOF.jpg",
  medidas: "3 mm",
  material: "Plata Ley 925"
},
{
  id: "11008P-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Triangle Crystal",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/11008P-JOG.jpg",
  medidas: "4 mm",
  material: "Plata Ley 925"
},
{
  id: "11007P-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Triangle Crystal",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/11007P-JOH.jpg",
  medidas: "5 mm",
  material: "Plata Ley 925"
},
{
  id: "10897P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad huella",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10897P-JOF.jpg",
  medidas: "8 mm",
  material: "Plata Ley 925"
},
{
  id: "10838P-JOL",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/10838P-JOL.jpg",
  medidas: "3,8 cm",
  material: "Plata Ley 925"
},
{
  id: "10754P-JOC",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo estrella rojo",
  price: 25000,
  image: "images/productos/Bisuteria/Aretes/10754P-JOC.jpg",
  material: "Plata Ley 925"
},
{
  id: "10755P-JOC",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo estrella negro",
  price: 25000,
  image: "images/productos/Bisuteria/Aretes/10755P-JOC.jpg",
  material: "Plata Ley 925"
},
{
  id: "10671P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad Oso",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10671P-JOF.jpg",
  medidas: "8mm x 5mm",
  material: "Plata Ley 925"
},
{
  id: "10669P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad Rolex",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10669P-JOF.jpg",
  medidas: "7mm",
  material: "Plata Ley 925"
},
{
  id: "10644P-JNB",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo circón",
  price: 10000,
  image: "images/productos/Bisuteria/Aretes/10644P-JNB.jpg",
  medidas: "3mm",
  material: "Plata Ley 925"
},
{
  id: "10589P-JOE",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo oso de seguridad",
  price: 35000,
  image: "images/productos/Bisuteria/Aretes/10589P-JOE.jpg",
  medidas: "1 cm",
  material: "Plata Ley 925"
},
{
  id: "10522P-JOE",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 35000,
  image: "images/productos/Bisuteria/Aretes/10522P-JOE.jpg",
  medidas: "1,3 cm",
  material: "Plata Ley 925"
},
{
  id: "10521P-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/10521P-JOF.jpg",
  medidas: "1,1 cm",
  material: "Plata Ley 925"
},
{
  id: "10520P-JOC",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 25000,
  image: "images/productos/Bisuteria/Aretes/10520P-JOC.jpg",
  medidas: "8mm",
  material: "Plata Ley 925"
},
{
  id: "10480P-JOE",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo de seguridad",
  price: 35000,
  image: "images/productos/Bisuteria/Aretes/10480P-JOE.jpg",
  medidas: "6mm",
  material: "Plata Ley 925"
},
{
  id: "LR501",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR501.jpg",
  material: "Rodio"
},
{
  id: "LR500",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 Topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR500.jpg",
  material: "Rodio"
},
{
  id: "LR499",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 Topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR499.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "LR498",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 Corazones",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR498.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "LR497",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR497.jpg",
  material: "Rodio"
},
{
  id: "LL596",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL596.jpg",
  material: "Oro Goldfield"
},
{
  id: "LL595",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Rosa",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL595.jpg",
  medidas: "14 mm",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "LL594",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Roja",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL594.jpg",
  medidas: "14 mm",
  material: "Oro Goldfield"
},
{
  id: "LL593",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Amarillo",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL593.jpg",
  medidas: "14 mm",
  material: "Oro Goldfield"
},
{
  id: "LL592",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Blanco",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL592.jpg",
  medidas: "14 mm",
  material: "Oro Goldfield"
},
{
  id: "LL591",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bola Negro",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL591.jpg",
  medidas: "14 mm",
  material: "Oro Goldfield"
},
{
  id: "AC442",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga cruz",
  price: 10900,
  image: "images/productos/Bisuteria/Aretes/AC442.jpg",
  medidas: "1.4cm",
  material: "Rodio"
},
{
  id: "AC441",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga estrellas",
  price: 10900,
  image: "images/productos/Bisuteria/Aretes/AC441.jpg",
  medidas: "1.4cm",
  material: "Rodio",
  agotado: true
},
{
  id: "MC952",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 2 pares de topos",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC952.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "RO172",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 2 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO172.jpg",
  material: "Rodio"
},
{
  id: "SP368",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de aretes",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP368.jpg",
  material: "Rodio"
},
{
  id: "LM878",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM878.jpg",
  medidas: "1,5 cm",
  material: "Rodio"
},
{
  id: "RO171",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO171.jpg",
  medidas: "1,9 cm",
  material: "Rodio"
},
{
  id: "RO170",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO170.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "RO169",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO169.jpg",
  material: "Rodio"
},
{
  id: "RO168",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO168.jpg",
  material: "Rodio"
},
{
  id: "RO167",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO167.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "RO166",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO166.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "RO165",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO165.jpg",
  material: "Rodio"
},
{
  id: "MC946",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set candongas x 3",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC946.jpg",
  material: "Rodio"
},
{
  id: "MC945",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set candongas x 3",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC945.jpg",
  material: "Rodio"
},
{
  id: "MC944",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set candongas x 3",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC944.jpg",
  material: "Rodio"
},
{
  id: "SP367",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete flor",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP367.jpg",
  medidas: "2 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "SP365",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP365.jpg",
  material: "Rodio"
},
{
  id: "SP364",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP364.jpg",
  material: "Rodio"
},
{
  id: "SP363",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP363.jpg",
  material: "Rodio"
},
{
  id: "SP362",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP362.jpg",
  material: "Rodio"
},
{
  id: "SP361",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 Topos",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP361.jpg",
  material: "Rodio"
},
{
  id: "MC943",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x3 topos",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC943.jpg",
  material: "Rodio"
},
{
  id: "PG460",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Estrella",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG460.jpg",
  medidas: "5 mm",
  material: "Rodio"
},
{
  id: "LL572",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Corona",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL572.jpg",
  medidas: "1 cm x 1,4 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "MC938",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor Doble",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC938.jpg",
  medidas: "1,5 cm x 3,1 cm",
  material: "Rodio"
},
{
  id: "RO154",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bicolor",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO154.jpg",
  medidas: "1,9 cm x 1,5 cm",
  material: "Rodio"
},
{
  id: "SP356",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi Blanco",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP356.jpg",
  medidas: "3 cm",
  material: "Rodio"
},
{
  id: "GP454",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa",
  price: 7100,
  image: "images/productos/Bisuteria/Aretes/GP454.jpg",
  medidas: "5,5 cm",
  material: "Acero"
},
{
  id: "GP453",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "candonga Lisa",
  price: 7100,
  image: "images/productos/Bisuteria/Aretes/GP453.jpg",
  medidas: "2,9 cm",
  material: "Acero",
  agotado: true
},
{
  id: "PC731",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC731.jpg",
  medidas: "1,3 cm",
  material: "Acero",
  agotado: true
},
{
  id: "PC730",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa 1,6",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC730.jpg",
  material: "Acero"
},
{
  id: "PC729",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC729.jpg",
  medidas: "1,5 cm",
  material: "Acero"
},
{
  id: "PG459",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Lisa",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG459.jpg",
  medidas: "1 cm",
  material: "Rodio"
},
{
  id: "PG458",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga 1,5 X 1,3",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG458.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "FT329",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi FLor",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT329.jpg",
  medidas: "4,3 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "FT328",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi Corazón",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT328.jpg",
  medidas: "2,6 cm",
  material: "Rodio"
},
{
  id: "SP354",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor y Perla",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP354.jpg",
  medidas: "2,4 cm",
  material: "Rodio"
},
{
  id: "FT326",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT326.jpg",
  medidas: "2,9 x 2,4 cm",
  material: "Rodio"
},
{
  id: "FT325",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Blanca",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT325.jpg",
  medidas: "3,4 cm x 2,4 cm",
  material: "Rodio"
},
{
  id: "FT324",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor Turquesa",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT324.jpg",
  medidas: "3,4 cm",
  material: "Rodio"
},
{
  id: "SP353",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor Negro",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP353.jpg",
  medidas: "3 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "OX439",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX439.jpg",
  medidas: "3,4 cm",
  material: "Rodio"
},
{
  id: "OX438",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Entorchada",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX438.jpg",
  medidas: "2,9 cm",
  material: "Rodio"
},
{
  id: "RO137",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO137.jpg",
  medidas: "1,7cm",
  material: "Rodio",
  agotado: true
},
{
  id: "RO136",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Set x 3",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO136.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "SP351",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP351.jpg",
  medidas: "6,2 cm",
  material: "Rodio"
},
{
  id: "RO115",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes FLor y Perla",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO115.jpg",
  medidas: "2,5 cm",
  material: "Acero"
},
{
  id: "RO111",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO111.jpg",
  medidas: "2,5 cm",
  material: "Acero",
  agotado: true
},
{
  id: "OX433",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Doble Corazón",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX433.jpg",
  medidas: "3,1 cm x1,7 cm",
  material: "Acero",
  agotado: true
},
{
  id: "PG449",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Gota y Perlas",
  price: 11900,
  image: "images/productos/Bisuteria/Aretes/PG449.jpg",
  medidas: "1,9 cm",
  material: "Rodio"
},
{
  id: "RO108",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO108.jpg",
  medidas: "2,7cm",
  material: "Rodio",
  agotado: true
},
{
  id: "RO107",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga balín diamantado",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO107.jpg",
  medidas: "3.5cm",
  material: "Rodio",
  agotado: true
},
{
  id: "LM868",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga balín italy",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM868.jpg",
  medidas: "3.7 cm",
  material: "Rodio"
},
{
  id: "LM867",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM867.jpg",
  medidas: "2.1 cm",
  material: "Rodio"
},
{
  id: "LM865",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM865.jpg",
  medidas: "3 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "LM863",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM863.jpg",
  medidas: "4cm",
  material: "Rodio",
  agotado: true
},
{
  id: "RO104",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Plateada",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO104.jpg",
  medidas: "3cm",
  material: "Rodio",
  agotado: true
},
{
  id: "LL547",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrella",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL547.jpg",
  medidas: "1.5cm",
  material: "Rodio",
  agotado: true
},
{
  id: "OX429",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrella",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX429.jpg",
  medidas: "2.5cm x 2.7cm",
  material: "Rodio"
},
{
  id: "LM861",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrela",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM861.jpg",
  medidas: "5cm",
  material: "Rodio"
},
{
  id: "AC431",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo",
  price: 10900,
  image: "images/productos/Bisuteria/Aretes/AC431.jpg",
  medidas: "1.8 cm",
  material: "Rodio"
},
{
  id: "FT318",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor negro",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT318.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "NP509",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete flor rosada",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP509.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "NP508",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP508.jpg",
  medidas: "2.2 Cm",
  material: "Rodio"
},
{
  id: "LM859",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo corazón rojo",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM859.jpg",
  medidas: "8mm",
  material: "Rodio"
},
{
  id: "RO101",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Escalador",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO101.jpg",
  medidas: "2 cm x 1,1 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "RO100",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Set x3 cruz",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO100.jpg",
  material: "Rodio"
},
{
  id: "LL544",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Estrella",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL544.jpg",
  medidas: "1,1 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "OX427",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Escalador Corazones",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX427.jpg",
  medidas: "2,2 cm x 6 mm",
  material: "Rodio"
},
{
  id: "LL543",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Cristal",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL543.jpg",
  medidas: "1,4 cm x 4 mm",
  material: "Rodio"
},
{
  id: "LL541",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor Cristal",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL541.jpg",
  medidas: "8 mm",
  material: "Rodio",
  agotado: true
},
{
  id: "FT317",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Set X3 Dorada",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT317.jpg",
  material: "Rodio"
},
{
  id: "SP343",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón Blanco",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP343.jpg",
  medidas: "1,6 cm",
  material: "Rodio"
},
{
  id: "LL527",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Cruz",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL527.jpg",
  medidas: "1,3 cm x 8 mm",
  material: "Rodio"
},
{
  id: "RO095",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos astronauta Set x 3",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO095.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "SP341",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Maxi Corazón",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP341.jpg",
  medidas: "2,9 cm x 3,1 m",
  material: "Rodio",
  agotado: true
},
{
  id: "PC723",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Figura",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC723.jpg",
  medidas: "1 cm x 8 mm",
  material: "Rodio"
},
{
  id: "BR122",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set topos x3",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/BR122.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "BR124",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set de topos x3",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/BR124.jpg",
  material: "Rodio"
},
{
  id: "RO088",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete doble cristal",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO088.jpg",
  medidas: "1,4 cm x 1 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "MC921",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristal",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC921.jpg",
  medidas: "1,6 cm x 1,3 cm",
  material: "Rodio"
},
{
  id: "RO087",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristal",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO087.jpg",
  medidas: "1,3 cm",
  material: "Rodio"
},
{
  id: "RO086",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cuadrado",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO086.jpg",
  medidas: "1,1 cm",
  material: "Rodio"
},
{
  id: "MC920",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristales",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC920.jpg",
  medidas: "1,2 m",
  material: "Rodio"
},
{
  id: "RO082",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Flor",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO082.jpg",
  medidas: "2,6 cm",
  material: "Acero"
},
{
  id: "FT310",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Blanco",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT310.jpg",
  medidas: "4,9 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "FT309",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Rojo",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT309.jpg",
  medidas: "4,9 cm",
  material: "Rodio"
},
{
  id: "FT308",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Verde",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT308.jpg",
  medidas: "4,9 cm",
  material: "Rodio"
},
{
  id: "FT307",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Beige",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT307.jpg",
  medidas: "4,9 cm",
  material: "Rodio"
},
{
  id: "FT306",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete tejido Azul",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT306.jpg",
  medidas: "4,9 cm",
  material: "Rodio"
},
{
  id: "FT305",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tejido Colombia",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT305.jpg",
  medidas: "4,9 cm",
  material: "Rodio"
},
{
  id: "SP325",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Cristal",
  price: 35900,
  image: "images/productos/Bisuteria/Aretes/SP325.jpg",
  medidas: "3,8 cm x 1,4 cm",
  material: "Rodio"
},
{
  id: "RO077",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Flor",
  price: 24000,
  image: "images/productos/Bisuteria/Aretes/RO077.jpg",
  medidas: "1,8 cm x 1,7 cm",
  material: "Rodio"
},
{
  id: "LL511",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo puntos",
  price: 13900,
  image: "images/productos/Bisuteria/Aretes/LL511.jpg",
  medidas: "1 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "PC718",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol negro",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC718.jpg",
  medidas: "8mm",
  material: "Rodio"
},
{
  id: "NP478",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete 3 circulos",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP478.jpg",
  medidas: "5,9 cm x 2,5 cm",
  material: "Rodio"
},
{
  id: "NP474",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Óvalo",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP474.jpg",
  medidas: "5,9 cm X 1,8 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "NP473",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete corazón",
  price: 30000,
  image: "images/productos/Bisuteria/Aretes/NP473.jpg",
  medidas: "2 cm x 1,4 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "LM803",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete escarabajo",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM803.jpg",
  medidas: "3.7 cm",
  material: "Rodio"
},
{
  id: "LM802",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete langosta",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM802.jpg",
  medidas: "4.6cm",
  material: "Rodio"
},
{
  id: "LM801",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete cangrejo",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM801.jpg",
  medidas: "3 x 2.1 cm",
  material: "Rodio"
},
{
  id: "LM799",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete medusa",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM799.jpg",
  medidas: "3cm",
  material: "Rodio"
},
{
  id: "LM798",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete caimán 5.5",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM798.jpg",
  material: "Rodio"
},
{
  id: "LM797",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete cocodrilo",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM797.jpg",
  medidas: "4.2cm",
  material: "Rodio"
},
{
  id: "LM796",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete rana",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM796.jpg",
  medidas: "4cm",
  material: "Rodio"
},
{
  id: "LM795",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete medusa",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM795.jpg",
  medidas: "2.1cm",
  material: "Rodio"
},
{
  id: "LM794",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete concha",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM794.jpg",
  medidas: "2.9cm",
  material: "Rodio"
},
{
  id: "LM793",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Escarabajo",
  price: 21000,
  image: "images/productos/Bisuteria/Aretes/LM793.jpg",
  medidas: "3.6 cm",
  material: "Rodio"
},
{
  id: "CB648",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete gota",
  price: 15500,
  image: "images/productos/Bisuteria/Aretes/CB648.jpg",
  medidas: "3cm",
  material: "Rodio",
  agotado: true
},
{
  id: "LR418",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Set x 3 pares de topos",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR418.jpg",
  material: "Rodio"
},
{
  id: "PC696",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol rojo",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC696.jpg",
  medidas: "1cm",
  material: "Rodio"
},
{
  id: "PC695",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol negro",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC695.jpg",
  medidas: "1cm",
  material: "Rodio"
},
{
  id: "PC697",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol blanco",
  price: 9000,
  image: "images/productos/Bisuteria/Aretes/PC697.jpg",
  medidas: "1cm",
  material: "Rodio",
  agotado: true
},
{
  id: "MC870",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete estrella de mar",
  price: 27000,
  image: "images/productos/Bisuteria/Aretes/MC870.jpg",
  material: "Rodio"
},
{
  id: "CB642",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Gota",
  price: 15500,
  image: "images/productos/Bisuteria/Aretes/CB642.jpg",
  medidas: "3,1 cm",
  material: "Rodio"
},
{
  id: "OX315",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo trébol verde",
  price: 18000,
  image: "images/productos/Bisuteria/Aretes/OX315.jpg",
  medidas: "1.4 cm",
  material: "Acero"
},
{
  id: "FT262",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete animal Print",
  price: 39900,
  image: "images/productos/Bisuteria/Aretes/FT262.jpg",
  medidas: "1,7 cm",
  material: "Rodio"
},
{
  id: "BR095",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete animal print",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/BR095.jpg",
  medidas: "4.5 cm",
  material: "Rodio"
},
{
  id: "LR310",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga tejida Blanca",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR310.jpg",
  medidas: "4cm",
  material: "Oro Goldfield - Acero"
},
{
  id: "LR308",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga tejida Roja",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR308.jpg",
  medidas: "4cm",
  material: "Oro Goldfield - Acero"
},
{
  id: "LR307",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga tejida negra",
  price: 19900,
  image: "images/productos/Bisuteria/Aretes/LR307.jpg",
  medidas: "4cm",
  material: "Oro Goldfield - Acero"
},
{
  id: "TS273",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo seguridad",
  price: 5400,
  image: "images/productos/Bisuteria/Aretes/TS273.jpg",
  material: "Acero"
},
{
  id: "FT357",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Chicle Rosado",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT357.jpg",
  medidas: "43 cm + 5 Extensión",
  material: "Oro Goldfield"
},
{
  id: "MC962",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Ajustable Flor",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC962.jpg",
  medidas: "43 cm",
  material: "Rodio"
},
{
  id: "RO182",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Ajustable Corazón Cristal",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO182.jpg",
  medidas: "43 cm",
  material: "Rodio"
},
{
  id: "RO181",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Ajustable Corazón Rojo",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO181.jpg",
  medidas: "43 cm",
  material: "Rodio"
},
{
  id: "RO180",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Ajustable Corazón Verde",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO180.jpg",
  medidas: "43 cm",
  material: "Rodio"
},
{
  id: "RO179",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Ajustable Verde",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO179.jpg",
  medidas: "43 cm",
  material: "Rodio"
},
{
  id: "RO178",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Ajustable Rojo",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO178.jpg",
  medidas: "43 cm",
  material: "Rodio"
},
{
  id: "LL599",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Aros",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL599.jpg",
  medidas: "60 cm x 8 mm",
  material: "Rodio"
},
{
  id: "OX449",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Lazo",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX449.jpg",
  medidas: "61 cm x 4 mm",
  material: "Rodio"
},
{
  id: "LL598",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Escalera Diamantada",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL598.jpg",
  medidas: "45 cm x 2 mm + 5 extensión",
  material: "Rodio"
},
{
  id: "LR504",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Balines",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR504.jpg",
  medidas: "45 cm + 5 extensión",
  description: "Balín 4mm",
  material: "Rodio"
},
{
  id: "LL597",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Balines",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL597.jpg",
  medidas: "45 cm + 5 extensión",
  description: "Balín 2,5mm",
  material: "Rodio"
},
{
  id: "CB734",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena trenzada",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB734.jpg",
  medidas: "45 cm x 2,5mm + 5 extensión",
  material: "Rodio"
},
{
  id: "LR503",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Gucci",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR503.jpg",
  medidas: "45 cm + 4 cm extensión",
  material: "Rodio"
},
{
  id: "MC957",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar margaritas",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC957.jpg",
  medidas: "38 cm + 4 cm Extensión",
  material: "Acero"
},
{
  id: "FT347",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas y Corazón Dorado",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT347.jpg",
  medidas: "44 cm + 5 cm Extensión",
  material: "Oro Goldfield"
},
{
  id: "SP394",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perla y Corazón Dorado",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP394.jpg",
  medidas: "44 cm + 6 cm Extensión",
  material: "Oro Goldfield"
},
{
  id: "FT337",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Perla y Corazón Verde",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT337.jpg",
  medidas: "41 cm",
  material: "Oro Goldfield"
},
{
  id: "GP451A",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Letra A",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451A.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "FT354",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Sagrado Rostro",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT354.jpg",
  medidas: "64 cm, dije 5,5 cm"
},
{
  id: "FT351",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar San Judas Tadeo",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT351.jpg",
  medidas: "64 cm, dije 5,5 cm"
},
{
  id: "FT350",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Virgen Guadalupe",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT350.jpg",
  medidas: "64 cm, dije 5,5 cm"
},
{
  id: "LM875",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM875.jpg",
  medidas: "60 cm x 4 mm",
  material: "Acero"
},
{
  id: "LM874",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena 3x1",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM874.jpg",
  medidas: "60 cm x 4 mm",
  material: "Acero"
},
{
  id: "FT319",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Tejido Chino",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT319.jpg",
  medidas: "60 cm x 4 mm",
  material: "Acero"
},
{
  id: "SP349",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Grano",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP349.jpg",
  medidas: "60 cm x 5 mm",
  material: "Acero"
},
{
  id: "12047P-JOP",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Espejo",
  price: 85000,
  image: "images/productos/Bisuteria/Collares/12047P-JOP.jpg",
  medidas: "45 cm x 1mm",
  material: "Plata Ley 925"
},
{
  id: "12044P-JOS",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Unicornio",
  price: 120000,
  image: "images/productos/Bisuteria/Collares/12044P-JOS.jpg",
  medidas: "40 cm + 4 cm Extensión",
  material: "Plata Ley 925"
},
{
  id: "12043P-JOP",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena San Benito",
  price: 85000,
  image: "images/productos/Bisuteria/Collares/12043P-JOP.jpg",
  medidas: "41 cm",
  material: "Plata Ley 925"
},
{
  id: "12042P-JOQ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Veneciana Gota",
  price: 90000,
  image: "images/productos/Bisuteria/Collares/12042P-JOQ.jpg",
  medidas: "40 cm x 2,5 mm + 5 extensión",
  material: "Plata Ley 925"
},
{
  id: "12041P-JOH",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana Destello",
  price: 50000,
  image: "images/productos/Bisuteria/Collares/12041P-JOH.jpg",
  medidas: "40 cm x 1,5 cm + 5 cm extensión",
  material: "Plata Ley 925"
},
{
  id: "12040P-JOH",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Singapur",
  price: 50000,
  image: "images/productos/Bisuteria/Collares/12040P-JOH.jpg",
  medidas: "44 cm x 1 mm",
  material: "Plata Ley 925"
},
{
  id: "12031P-JOR",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Escalerita Con Destellos",
  price: 100000,
  image: "images/productos/Bisuteria/Collares/12031P-JOR.jpg",
  medidas: "45 cm x 1.7 mm",
  material: "Plata Ley 925"
},
{
  id: "12030P-JOU",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubanita IT",
  price: 140000,
  image: "images/productos/Bisuteria/Collares/12030P-JOU.jpg",
  medidas: "60 cm x 1.5 mm",
  material: "Plata Ley 925"
},
{
  id: "12029P-JOR",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubanita IT",
  price: 100000,
  image: "images/productos/Bisuteria/Collares/12029P-JOR.jpg",
  medidas: "45 cm x 1.5 mm",
  material: "Plata Ley 925"
},
{
  id: "12001P-JOM",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Veneciana Balín",
  price: 75000,
  image: "images/productos/Bisuteria/Collares/12001P-JOM.jpg",
  medidas: "45 cm x 1 mm, balín 2 mm",
  material: "Plata Ley 925"
},
{
  id: "11996P-JOJ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Olímpica",
  price: 60000,
  image: "images/productos/Bisuteria/Collares/11996P-JOJ.jpg",
  medidas: "45 cm x 1 mm",
  material: "Plata Ley 925"
},
{
  id: "11993P-JON",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar",
  price: 75000,
  image: "images/productos/Bisuteria/Collares/11993P-JON.jpg",
  medidas: "45 cm x 1 mm",
  material: "Plata Ley 925"
},
{
  id: "11967P-JON",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Dije Cruz",
  price: 75000,
  image: "images/productos/Bisuteria/Collares/11967P-JON.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11943P-JOL",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Veneciana",
  price: 70000,
  image: "images/productos/Bisuteria/Collares/11943P-JOL.jpg",
  medidas: "45 cm x 0,8 mm",
  material: "Plata Ley 925"
},
{
  id: "11115P-JOV",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Gargantilla Opal",
  price: 150000,
  image: "images/productos/Bisuteria/Collares/11115P-JOV.jpg",
  medidas: "40 cm + extensión",
  material: "Plata Ley 925"
},
{
  id: "11877P-JOS",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Clover",
  price: 120000,
  image: "images/productos/Bisuteria/Collares/11877P-JOS.jpg",
  medidas: "45 cm + extensión, dije 1,3 cm",
  material: "Plata Ley 925"
},
{
  id: "11878P-JOW",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Ruby Stag",
  price: 160000,
  image: "images/productos/Bisuteria/Collares/11878P-JOW.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11938P-JOX",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Gargantilla Ame",
  price: 170000,
  image: "images/productos/Bisuteria/Collares/11938P-JOX.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11879P-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Dreama",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/11879P-JOY.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11937P-JOX",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Gargantilla Secret Garden",
  price: 170000,
  image: "images/productos/Bisuteria/Collares/11937P-JOX.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11935P-JOX",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Gargantilla Emerald Stag",
  price: 170000,
  image: "images/productos/Bisuteria/Collares/11935P-JOX.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11934P-JXA",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Gargantilla Teddy Charm",
  price: 240000,
  image: "images/productos/Bisuteria/Collares/11934P-JXA.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11933P-JXA",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Gargantilla Celestial Grace",
  price: 240000,
  image: "images/productos/Bisuteria/Collares/11933P-JXA.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11932P-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Gargantilla Cuore Brillante",
  price: 280000,
  image: "images/productos/Bisuteria/Collares/11932P-JXB.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11930P-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Gargantilla Unicorn",
  price: 280000,
  image: "images/productos/Bisuteria/Collares/11930P-JXB.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11929P-JOV",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Gargantilla Angelique Green",
  price: 150000,
  image: "images/productos/Bisuteria/Collares/11929P-JOV.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11893P-JOZ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Personalizada Nombre",
  price: 230000,
  image: "images/productos/Bisuteria/Collares/11893P-JOZ.jpg",
  material: "Plata Ley 925"
},
{
  id: "10771P-JON",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena dije corazón",
  price: 75000,
  image: "images/productos/Bisuteria/Collares/10771P-JON.jpg",
  description: "El tejido de la cadena puede variar",
  material: "Plata Ley 925"
},
{
  id: "10934P-JOK",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena dije estrella",
  price: 70000,
  image: "images/productos/Bisuteria/Collares/10934P-JOK.jpg",
  description: "El tejido de la cadena puede variar",
  material: "Plata Ley 925"
},
{
  id: "11146P-JON",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena dije cruz",
  price: 75000,
  image: "images/productos/Bisuteria/Collares/11146P-JON.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11148P-JOL",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena dije estrella",
  price: 70000,
  image: "images/productos/Bisuteria/Collares/11148P-JOL.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11150P-JOL",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena dije ancla",
  price: 70000,
  image: "images/productos/Bisuteria/Collares/11150P-JOL.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11885P-JOX",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Secret Garden",
  price: 170000,
  image: "images/productos/Bisuteria/Collares/11885P-JOX.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11884P-JXA",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Amore Duo",
  price: 240000,
  image: "images/productos/Bisuteria/Collares/11884P-JXA.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11883P-JXA",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Crystal Teddy",
  price: 240000,
  image: "images/productos/Bisuteria/Collares/11883P-JXA.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11882P-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Amora Love MT",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/11882P-JOY.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11876P-JXC",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena China",
  price: 320000,
  image: "images/productos/Bisuteria/Collares/11876P-JXC.jpg",
  medidas: "65 cm x 3 mm",
  material: "Plata Ley 925"
},
{
  id: "11875P-JXE",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Gucci",
  price: 380000,
  image: "images/productos/Bisuteria/Collares/11875P-JXE.jpg",
  medidas: "60 cm x 4,5 mm",
  material: "Plata Ley 925"
},
{
  id: "11874P-JXF",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Gucci",
  price: 400000,
  image: "images/productos/Bisuteria/Collares/11874P-JXF.jpg",
  medidas: "50 cm x 4,5 mm",
  material: "Plata Ley 925"
},
{
  id: "11071P-JON",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena dije corazón Verde",
  price: 75000,
  image: "images/productos/Bisuteria/Collares/11071P-JON.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11070P-JON",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena dije corazón cristal",
  price: 75000,
  image: "images/productos/Bisuteria/Collares/11070P-JON.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "11049P-JOP",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dije estrella",
  price: 85000,
  image: "images/productos/Bisuteria/Collares/11049P-JOP.jpg",
  medidas: "43 cm + 4 cm extensión",
  material: "Plata Ley 925"
},
{
  id: "11013P-JON",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Marine",
  price: 75000,
  image: "images/productos/Bisuteria/Collares/11013P-JON.jpg",
  medidas: "45 cm x 1,5 mm",
  material: "Plata Ley 925"
},
{
  id: "11016P-JOR",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Escalera Ovalada Plana",
  price: 100000,
  image: "images/productos/Bisuteria/Collares/11016P-JOR.jpg",
  medidas: "45 cm x 2 mm",
  material: "Plata Ley 925"
},
{
  id: "11012P-JOT",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena 3*1",
  price: 130000,
  image: "images/productos/Bisuteria/Collares/11012P-JOT.jpg",
  medidas: "65 cm x 1.4 mm",
  material: "Plata Ley 925"
},
{
  id: "10996P-JXC",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Gargantilla Círculo Pave",
  price: 320000,
  image: "images/productos/Bisuteria/Collares/10996P-JXC.jpg",
  medidas: "40 cm + extensión, dije 16 mm",
  material: "Plata Ley 925"
},
{
  id: "10995P-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Gargantilla Cascada Crystal",
  price: 280000,
  image: "images/productos/Bisuteria/Collares/10995P-JXB.jpg",
  medidas: "40 cm + extensión",
  material: "Plata Ley 925"
},
{
  id: "10994P-JOX",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Gargantilla Wave Crystal",
  price: 170000,
  image: "images/productos/Bisuteria/Collares/10994P-JOX.jpg",
  medidas: "40 cm + extensión",
  material: "Plata Ley 925"
},
{
  id: "10988P-JOS",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Marine",
  price: 120000,
  image: "images/productos/Bisuteria/Collares/10988P-JOS.jpg",
  medidas: "65 cm x 1,5 mm",
  material: "Plata Ley 925"
},
{
  id: "10987P-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/10987P-JOY.jpg",
  medidas: "65 cm x 1,9 mm",
  material: "Plata Ley 925"
},
{
  id: "10986P-JXA",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana Cruzada",
  price: 240000,
  image: "images/productos/Bisuteria/Collares/10986P-JXA.jpg",
  medidas: "65 cm x 2,4mm",
  material: "Plata Ley 925"
},
{
  id: "10985P-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana Cruzada",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/10985P-JOY.jpg",
  medidas: "45 cm x 2,4mm",
  material: "Plata Ley 925"
},
{
  id: "10984P-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena China",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/10984P-JOY.jpg",
  medidas: "65 cm x 2 mm",
  material: "Plata Ley 925"
},
{
  id: "10979P-JOW",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena China",
  price: 160000,
  image: "images/productos/Bisuteria/Collares/10979P-JOW.jpg",
  medidas: "45 cm x 2 mm",
  material: "Plata Ley 925"
},
{
  id: "10978P-JOL",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Singapur",
  price: 70000,
  image: "images/productos/Bisuteria/Collares/10978P-JOL.jpg",
  medidas: "45 cm x 1,7 mm",
  material: "Plata Ley 925"
},
{
  id: "10976P-JOQ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Destello",
  price: 90000,
  image: "images/productos/Bisuteria/Collares/10976P-JOQ.jpg",
  medidas: "45 cm",
  material: "Plata Ley 925"
},
{
  id: "10975P-JOR",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Veneciana",
  price: 100000,
  image: "images/productos/Bisuteria/Collares/10975P-JOR.jpg",
  medidas: "45 cm x 0,8 mm",
  material: "Plata Ley 925"
},
{
  id: "10974P-JOW",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana",
  price: 160000,
  image: "images/productos/Bisuteria/Collares/10974P-JOW.jpg",
  medidas: "45 cm x 1,9 mm",
  material: "Plata Ley 925"
},
{
  id: "10972P-JOQ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena 3*1",
  price: 90000,
  image: "images/productos/Bisuteria/Collares/10972P-JOQ.jpg",
  medidas: "45 cm x 1.4 mm",
  material: "Plata Ley 925"
},
{
  id: "10971P-JOQ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana",
  price: 90000,
  image: "images/productos/Bisuteria/Collares/10971P-JOQ.jpg",
  medidas: "45 cm x 1 mm",
  material: "Plata Ley 925"
},
{
  id: "10969P-JOS",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Caracol",
  price: 120000,
  image: "images/productos/Bisuteria/Collares/10969P-JOS.jpg",
  medidas: "45 cm x 1,5 mm",
  material: "Plata Ley 925"
},
{
  id: "10968P-JOR",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Canutillo y Balín",
  price: 100000,
  image: "images/productos/Bisuteria/Collares/10968P-JOR.jpg",
  medidas: "45 cm x 1 mm",
  material: "Plata Ley 925"
},
{
  id: "10967P-JOS",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena lazo delgada",
  price: 120000,
  image: "images/productos/Bisuteria/Collares/10967P-JOS.jpg",
  medidas: "46 cm x 1 mm",
  material: "Plata Ley 925"
},
{
  id: "10852P-JXE",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Gucci",
  price: 380000,
  image: "images/productos/Bisuteria/Collares/10852P-JXE.jpg",
  medidas: "65 cm x 0,4 mm",
  material: "Plata Ley 925"
},
{
  id: "10851P-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Gucci",
  price: 280000,
  image: "images/productos/Bisuteria/Collares/10851P-JXB.jpg",
  medidas: "45 cm x 0,4 mm",
  material: "Plata Ley 925"
},
{
  id: "NP527",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Chicle Mocca",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP527.jpg",
  medidas: "40 cm + 5 cm",
  material: "Oro Goldfield"
},
{
  id: "FT353",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas Corazón Mocca",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT353.jpg",
  medidas: "41 cm + 5 cm Extensión",
  material: "Oro Goldfield"
},
{
  id: "SP395",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Margarita",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP395.jpg",
  medidas: "38 cm + 5 cm Extensión",
  material: "Oro Goldfield"
},
{
  id: "FT352",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas y Corazones Vinotinto",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT352.jpg",
  medidas: "38 cm + 5 cm",
  material: "Oro Goldfield"
},
{
  id: "FT349",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Corazones Pasador",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT349.jpg",
  medidas: "44 cm + 5 Extensión",
  material: "Oro Goldfield"
},
{
  id: "AC347-P",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena personalizada 1 letra. letra adicional TS256",
  price: 10900,
  image: "images/productos/Bisuteria/Collares/AC347-P.jpg",
  material: "Rodio"
},
{
  id: "LL250-P",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena personalizada 1 letra. letra adicional GP366",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL250-P.jpg",
  material: "Rodio"
},
{
  id: "CB672",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena personalizada 1 letra-letra adicional GP445",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB672.jpg",
  material: "Rodio"
},
{
  id: "RO174",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO174.jpg",
  medidas: "44 cm + 5 cm Extensión",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "RO173",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO173.jpg",
  medidas: "44 cm + 5 cm extensión",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "FT345",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Café",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT345.jpg",
  medidas: "42 cm + 6 Extensión",
  material: "Oro Goldfield"
},
{
  id: "SP389",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Colores",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP389.jpg",
  medidas: "42 cm + 5 Extensión",
  material: "Oro Goldfield"
},
{
  id: "FT344",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar maxi corazón negro",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT344.jpg",
  medidas: "40cm + 6cm extensión",
  material: "Oro Goldfield"
},
{
  id: "FT343",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar maxi negro y dorado",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT343.jpg",
  medidas: "40 cm + 6 cm",
  material: "Oro Goldfield"
},
{
  id: "FT342",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar maxi rojo y dorado",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT342.jpg",
  medidas: "40cm + 6 cm extensión",
  material: "Oro Goldfield"
},
{
  id: "NP526",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar perla corazón Rojo",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP526.jpg",
  medidas: "40cm + 6 cm extensión",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "NP525",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar perla corazón café",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP525.jpg",
  medidas: "40cm + 6 cm extensión",
  material: "Oro Goldfield"
},
{
  id: "NP524",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar perla corazón blanco",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP524.jpg",
  medidas: "40cm + 6 cm extensión",
  material: "Oro Goldfield"
},
{
  id: "MC950",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije princesa",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC950.jpg",
  medidas: "49 cm",
  material: "Rodio"
},
{
  id: "MC949",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije princesa",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC949.jpg",
  medidas: "49 cm",
  material: "Rodio"
},
{
  id: "MC948",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije princesa",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC948.jpg",
  medidas: "49 cm",
  material: "Rodio"
},
{
  id: "RO164",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije mariposa verde",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO164.jpg",
  medidas: "48cm",
  material: "Rodio"
},
{
  id: "RO163",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije mariposa tornasol",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO163.jpg",
  medidas: "48cm",
  material: "Rodio",
  agotado: true
},
{
  id: "RO162",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije mariposa rojo",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO162.jpg",
  medidas: "48cm",
  material: "Rodio"
},
{
  id: "LL580",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena balines",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL580.jpg",
  medidas: "44,5 cm +3cm extensión",
  material: "Rodio"
},
{
  id: "LL579",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena balín ovalado",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL579.jpg",
  medidas: "44,5 cm +3cm extensión",
  material: "Rodio"
},
{
  id: "MC942",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi corazón Negro",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC942.jpg",
  medidas: "40 cm +5 Extensión",
  material: "Oro Goldfield"
},
{
  id: "NP522",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Negro",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP522.jpg",
  medidas: "45 cm + 5 extensión",
  material: "Oro Goldfield"
},
{
  id: "NP521",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Blanco",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP521.jpg",
  medidas: "44cm + 5 extensión",
  material: "Oro Goldfield"
},
{
  id: "SP360",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Margarita",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP360.jpg",
  medidas: "41 cm + 5 Extensión",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "LL577",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Guadalupe",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL577.jpg",
  medidas: "45 cm",
  material: "Acero"
},
{
  id: "LL576",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena San Benito",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL576.jpg",
  medidas: "45 cm",
  material: "Acero"
},
{
  id: "LL575",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena San Miguel y Guadalupe",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL575.jpg",
  medidas: "45 cm",
  material: "Acero"
},
{
  id: "MC939",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Blanco y Negro",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC939.jpg",
  medidas: "42 cm +6 cm Extensión",
  material: "Oro Goldfield"
},
{
  id: "MC940",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Amariilo y Café",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC940.jpg",
  medidas: "42 cm + 6 cm Extensión",
  material: "Oro Goldfield"
},
{
  id: "MC941",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Amarillo y Café",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC941.jpg",
  medidas: "42 cm + 5 cm Extensión",
  material: "Oro Goldfield"
},
{
  id: "FT332",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar maxi Amarillo y Vino",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT332.jpg",
  medidas: "40 cm + 5 cm Extensión",
  material: "Oro Goldfield"
},
{
  id: "FT333",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Lila",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT333.jpg",
  medidas: "40 cm + 5 Extensión",
  material: "Oro Goldfield"
},
{
  id: "FT334",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Rosa y Rojo",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT334.jpg",
  medidas: "40 cm + 5 cm Extension",
  material: "Oro Goldfield"
},
{
  id: "FT336",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Celeste",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT336.jpg",
  medidas: "41 cm + 6 cm Extensión",
  material: "Oro Goldfield"
},
{
  id: "FT330",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Corazón Rojo",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT330.jpg",
  medidas: "38 cm + 6 cm Extensión",
  material: "Oro Goldfield"
},
{
  id: "SP355",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Corazones Moca",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP355.jpg",
  medidas: "38 cm + 6 Extensión",
  material: "Oro Goldfield"
},
{
  id: "RO153",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Rosa",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO153.jpg",
  medidas: "38 cm + 7 cm Extensión",
  material: "Oro Goldfield"
},
{
  id: "RO151",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Rojo",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO151.jpg",
  medidas: "36 cm + 7 cm extensión",
  material: "Rodio"
},
{
  id: "RO152",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Blanco",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO152.jpg",
  medidas: "36 cm + 7 cm Extensión",
  material: "Oro Goldfield"
},
{
  id: "RO149",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Negro",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO149.jpg",
  medidas: "37 cm +5 extensión",
  material: "Oro Goldfield"
},
{
  id: "RO150",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Maxi Moca",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO150.jpg",
  medidas: "38 cm + 6 extensión",
  material: "Oro Goldfield"
},
{
  id: "NP492",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Chunky Negro",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP492.jpg",
  medidas: "42 cm x 1,6 cm + 5 extensión",
  material: "Oro Goldfield"
},
{
  id: "LR491",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Flor Cristal Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR491.jpg",
  material: "Rodio"
},
{
  id: "LR490",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar FLor Roja Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR490.jpg",
  material: "Rodio"
},
{
  id: "LR489",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Flor Verde Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR489.jpg",
  material: "Rodio"
},
{
  id: "OX440",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Bandera Colombia",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX440.jpg",
  medidas: "40 cm + 5 Extensión",
  material: "Oro Goldfield"
},
{
  id: "CB712",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije Colombia",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB712.jpg",
  material: "Rodio"
},
{
  id: "CB711",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije Colombia",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB711.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "CB710",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije Colombia",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB710.jpg",
  material: "Rodio"
},
{
  id: "PG453",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Mini Aros Balines",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG453.jpg",
  medidas: "3 mm x 45 cm + 5 cm",
  material: "Rodio"
},
{
  id: "LL555",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cola Ratón Rayada",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL555.jpg",
  medidas: "1mm x 45 cm + 5 cm",
  material: "Rodio"
},
{
  id: "PG451",
  category: "bisuteria",
  subcategory: "Collares",
  name: "cadena Cola Ratón",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG451.jpg",
  medidas: "1 mm x 45 cm + 5 Extensión",
  material: "Rodio"
},
{
  id: "LL554",
  category: "bisuteria",
  subcategory: "Collares",
  name: "cadena candado Plana",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL554.jpg",
  medidas: "3mm x 45 cm + 5 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "GP451Z",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra Z",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451Z.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451Y",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra Y",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451Y.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451X",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra X",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451X.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451W",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra W",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451W.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451V",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra V",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451V.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451U",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra U",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451U.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451T",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra T",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451T.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451S",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra S",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451S.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451O",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra O",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451O.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451N",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra N",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451N.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451M",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar letra M",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451M.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451K",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra K",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451K.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451J",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra J",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451J.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451I",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra I",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451I.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451H",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra H",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451H.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451F",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra F",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451F.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451E",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra E",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451E.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451C",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra C",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451C.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP451B",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Letra B",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP451B.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "MC931",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena grano",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC931.jpg",
  medidas: "47 cm x 5mm + 5 extensión",
  material: "Rodio"
},
{
  id: "OX430",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije estrella",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX430.jpg",
  material: "Rodio"
},
{
  id: "RO103",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije estrella",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO103.jpg",
  material: "Rodio"
},
{
  id: "OX428",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar lazo",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX428.jpg",
  medidas: "2,5mm y 43.5cm + 5 cm extensión",
  material: "Rodio",
  agotado: true
},
{
  id: "LM860",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije ballena",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM860.jpg",
  material: "Rodio"
},
{
  id: "LR476",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Dije Sagrado Corazón Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR476.jpg",
  material: "Rodio"
},
{
  id: "SP337",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dijes del Mar",
  price: 35900,
  image: "images/productos/Bisuteria/Collares/SP337.jpg",
  material: "Oro Goldfield"
},
{
  id: "SP336",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas Caracol y Concha",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/SP336.jpg",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "GP449",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Elefante",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP449.jpg",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "GP448",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar DIje Luna",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP448.jpg",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "GP447",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Árbol de La vida",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP447.jpg",
  material: "Acero - Zamak"
},
{
  id: "PG444",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Corazón Gris",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG444.jpg",
  medidas: "1 cm x 45 cm",
  material: "Acero - Oro Goldfield"
},
{
  id: "PG442",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Corazón Negro",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG442.jpg",
  medidas: "1 cm x 45 cm",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "PG441",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collare Corazón Amarillo",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG441.jpg",
  medidas: "1 cm x 45 cm",
  material: "Acero - Oro Goldfield"
},
{
  id: "PG440",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Corazón Dorado",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG440.jpg",
  medidas: "1 cm x 45 cm",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "OX406",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Lazo",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX406.jpg",
  medidas: "2 mm x 45 cm + 5 Extensión",
  material: "Rodio",
  agotado: true
},
{
  id: "LR467",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena San Miguel Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR467.jpg",
  material: "Rodio"
},
{
  id: "CB692",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB692.jpg",
  medidas: "2,5 mm x 45 cm + 5 extensión",
  material: "Rodio"
},
{
  id: "PG438",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena cubana destellos",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG438.jpg",
  medidas: "2 mm x 45 cm",
  material: "Rodio"
},
{
  id: "LL518",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana Corazones",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL518.jpg",
  medidas: "1 mm x 45 cm + 5",
  material: "Rodio"
},
{
  id: "LL517",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Aros Balín",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL517.jpg",
  medidas: "2 mm",
  material: "Rodio"
},
{
  id: "LL515",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar Balín",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL515.jpg",
  medidas: "2mm x 45 cm + 5 cm extensión",
  material: "Rodio"
},
{
  id: "LL514",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena balín y canutillo",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL514.jpg",
  medidas: "45 cm + 5 cm extensión",
  material: "Rodio"
},
{
  id: "LM852",
  category: "bisuteria",
  subcategory: "Collares",
  name: "choker corazones",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM852.jpg",
  material: "Oro Goldfield"
},
{
  id: "LM851",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Estrellas",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM851.jpg",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "LM849",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Perlas y Estrella",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM849.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO053",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar trébol Rojo",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO053.jpg",
  medidas: "47 cm",
  material: "Rodio"
},
{
  id: "CB684",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Dije Trébol Rojo",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB684.jpg",
  material: "Rodio"
},
{
  id: "CB683",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadeja Dije Trébol Blanco",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB683.jpg",
  material: "Rodio"
},
{
  id: "CB682",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Dije Trébol Negro",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB682.jpg",
  material: "Rodio"
},
{
  id: "LL505",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena estrellas",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL505.jpg",
  material: "Acero"
},
{
  id: "OX387",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena DIje Oso",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX387.jpg",
  material: "Acero - Oro Goldfield",
  agotado: true
},
{
  id: "PG421",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Aros Balin",
  price: 11900,
  image: "images/productos/Bisuteria/Collares/PG421.jpg",
  medidas: "45 cm x 2 mm + 5 extensión",
  material: "Rodio"
},
{
  id: "LM837",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM837.jpg",
  medidas: "45 cm x 4 mm + 5 extensión",
  material: "Rodio"
},
{
  id: "RO044",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO044.jpg",
  medidas: "45 cm x 4mm + 5 extensión",
  material: "Rodio",
  agotado: true
},
{
  id: "RO042",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Negro",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO042.jpg",
  medidas: "45 cm + 5 cm extensión",
  material: "Rodio"
},
{
  id: "RO041",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Negro",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO041.jpg",
  medidas: "45 cm + 5 cm extensión",
  material: "Rodio"
},
{
  id: "RO040",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Negro y Dorado",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO040.jpg",
  medidas: "42,5 cm + 6 cm",
  material: "Rodio"
},
{
  id: "RO038",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Rojo",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO038.jpg",
  medidas: "42,5 cm + 6 cm extensión",
  material: "Rodio"
},
{
  id: "RO037",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Dorado",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO037.jpg",
  medidas: "44 cm + 5 extensión",
  material: "Rodio"
},
{
  id: "RO036",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Blanco",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO036.jpg",
  medidas: "42,5 cm + 6 cm de extensión",
  material: "Rodio"
},
{
  id: "RO035",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Trébol Rojo y Dorado",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO035.jpg",
  medidas: "42,5 cm + 6 cm de extensión",
  material: "Rodio"
},
{
  id: "LL498",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena aros balín",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL498.jpg",
  medidas: "1,5mm",
  material: "Rodio"
},
{
  id: "AC425",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena singapur",
  price: 10900,
  image: "images/productos/Bisuteria/Collares/AC425.jpg",
  medidas: "2mm",
  material: "Rodio",
  agotado: true
},
{
  id: "LL492",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena veneciana destellos",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL492.jpg",
  material: "Rodio"
},
{
  id: "CB655",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena lazo con canutillo",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB655.jpg",
  medidas: "2,5mm",
  material: "Rodio"
},
{
  id: "LL491",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena singapur",
  price: 13900,
  image: "images/productos/Bisuteria/Collares/LL491.jpg",
  medidas: "2,5mm",
  material: "Rodio"
},
{
  id: "GP443",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Mano Hamsa",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP443.jpg",
  medidas: "45 cm",
  material: "Acero - Zamak"
},
{
  id: "GP442",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Árbol de la vida",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP442.jpg",
  medidas: "45 cm",
  material: "Acero - Oro Goldfield"
},
{
  id: "GP440",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Corazón",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP440.jpg",
  medidas: "45 cm",
  material: "Acero - Fantasía"
},
{
  id: "GP439",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Ojo Turco",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP439.jpg",
  medidas: "45 cm",
  material: "Acero - Fantasía"
},
{
  id: "GP436",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Dije Corazón",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP436.jpg",
  medidas: "45 cm",
  material: "Acero - Oro Goldfield"
},
{
  id: "LM790",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije relicario",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM790.jpg",
  medidas: "4.3 x 4cm",
  material: "Rodio - Covergold"
},
{
  id: "LM789",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije relicario",
  price: 21000,
  image: "images/productos/Bisuteria/Collares/LM789.jpg",
  medidas: "4.3 x 4cm",
  material: "Rodio - Covergold"
},
{
  id: "NP464",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar de estrellas multicolor",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP464.jpg",
  medidas: "45cm + 5 ext",
  material: "Rodio",
  agotado: true
},
{
  id: "NP463",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar de estrellas negras",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP463.jpg",
  medidas: "45cm + 5 ext",
  material: "Rodio"
},
{
  id: "RO009",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dije trébol Negro",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/RO009.jpg",
  medidas: "43cm + 5cm extensión",
  material: "Rodio"
},
{
  id: "LR417",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije medusa",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR417.jpg",
  material: "Rodio"
},
{
  id: "NP456",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Leopardo",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP456.jpg",
  material: "Rodio"
},
{
  id: "OX362",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable Dije Tortuga",
  price: 18000,
  image: "images/productos/Bisuteria/Collares/OX362.jpg",
  material: "Rodio"
},
{
  id: "NP455",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar Estrella Cristal",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP455.jpg",
  medidas: "45 cm + 5 extensión",
  material: "Rodio",
  agotado: true
},
{
  id: "MC851",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar trébol blanco",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC851.jpg",
  material: "Rodio"
},
{
  id: "FT285",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena corazón doble dorado y plateado",
  price: 39900,
  image: "images/productos/Bisuteria/Collares/FT285.jpg",
  material: "Rodio"
},
{
  id: "CB631",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dije trébol mini Negro",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB631.jpg",
  material: "Rodio"
},
{
  id: "NP424",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dijes trébol Rojo",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP424.jpg",
  medidas: "40 cm + 5 cm Extensión",
  material: "Acero",
  agotado: true
},
{
  id: "NP426",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dijes Verde Negro",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP426.jpg",
  medidas: "40 cm + 5 cm Extensión",
  material: "Acero",
  agotado: true
},
{
  id: "CB625",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar dije oso, cadena ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB625.jpg",
  material: "Rodio - Oro Goldfield"
},
{
  id: "MC804",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije abeja",
  price: 27000,
  image: "images/productos/Bisuteria/Collares/MC804.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "DC058",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar trébol",
  price: 52000,
  image: "images/productos/Bisuteria/Collares/DC058.jpg",
  medidas: "Largo 70 cm",
  material: "Rodio"
},
{
  id: "NP403",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajusteble dije mamá",
  price: 30000,
  image: "images/productos/Bisuteria/Collares/NP403.jpg",
  material: "Rodio"
},
{
  id: "LR332",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar 7 chakras",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR332.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "PC667",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar corazón",
  price: 9000,
  image: "images/productos/Bisuteria/Collares/PC667.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "PC659",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible ópalo",
  price: 9000,
  image: "images/productos/Bisuteria/Collares/PC659.jpg",
  medidas: "39cm + 5 cm extensión",
  material: "Oro Goldfield"
},
{
  id: "CB613",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Rafael, Salud",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB613.jpg",
  material: "Rodio - Oro Goldfield"
},
{
  id: "CB610",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Gabriel, Mensajero de Dios",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB610.jpg",
  material: "Rodio - Oro Goldfield"
},
{
  id: "CB507",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Jofiel ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB507.jpg",
  medidas: "48 cm",
  material: "Rodio - Oro Goldfield"
},
{
  id: "CB508",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Uriel ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB508.jpg",
  medidas: "48 cm",
  material: "Rodio - Oro Goldfield"
},
{
  id: "CB511",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar arcángel Zadaquiel ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Collares/CB511.jpg",
  medidas: "48 cm",
  material: "Rodio - Oro Goldfield"
},
{
  id: "AC397",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar ajustable dije estrella de mar",
  price: 10900,
  image: "images/productos/Bisuteria/Collares/AC397.jpg",
  material: "Rodio - Oro Goldfield"
},
{
  id: "LR302",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar 7 chakras",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR302.jpg",
  material: "Oro Goldfield"
},
{
  id: "OR441",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar lluvia de oro",
  price: 24000,
  image: "images/productos/Bisuteria/Collares/OR441.jpg",
  medidas: "44 cm, dije 4.2 cm",
  material: "Acero - Zamak"
},
{
  id: "GP220",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar placa protección",
  price: 7100,
  image: "images/productos/Bisuteria/Collares/GP220.jpg",
  medidas: "45 cm, dije 1 cm",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "LR071",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra E",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR071.jpg",
  medidas: "40cm + 6cm extensión",
  material: "Oro Goldfield"
},
{
  id: "LR063",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra F",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR063.jpg",
  medidas: "40cm + 6cm extensión",
  material: "Oro Goldfield"
},
{
  id: "LR062",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra I",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR062.jpg",
  medidas: "40cm + 6cm extensión",
  material: "Oro Goldfield"
},
{
  id: "LR069",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra N",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR069.jpg",
  medidas: "40cm + 6cm extensión",
  material: "Oro Goldfield"
},
{
  id: "LR067",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra Y",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR067.jpg",
  medidas: "40cm + 6cm extensión",
  material: "Oro Goldfield"
},
{
  id: "LR061",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra C",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR061.jpg",
  medidas: "40cm + 6cm extensión",
  material: "Oro Goldfield"
},
{
  id: "LR066",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra V",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR066.jpg",
  medidas: "40cm + 6cm extensión",
  material: "Oro Goldfield"
},
{
  id: "LR064",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra K",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR064.jpg",
  medidas: "40cm + 6cm extensión",
  material: "Oro Goldfield"
},
{
  id: "LR065",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Collar invisible letra S",
  price: 19900,
  image: "images/productos/Bisuteria/Collares/LR065.jpg",
  medidas: "40cm + 6cm extensión",
  material: "Oro Goldfield"
},

// --- Conjuntos ---
{
  id: "FT358",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Corazón",
  price: 39900,
  image: "images/productos/Bisuteria/Conjuntos/FT358.jpg",
  medidas: "41 cm",
  material: "Acero"
},
{
  id: "RO134",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Trébol Blanco",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO134.jpg",
  material: "Rodio"
},
{
  id: "10943P-JXB",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Pave Circón Rosado",
  price: 280000,
  image: "images/productos/Bisuteria/Conjuntos/10943P-JXB.jpg",
  material: "Plata Ley 925"
},
{
  id: "10942P-JXB",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Pave Circón Verde",
  price: 280000,
  image: "images/productos/Bisuteria/Conjuntos/10942P-JXB.jpg",
  material: "Plata Ley 925"
},
{
  id: "11044P-JON",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto dije y topos corazón",
  price: 75000,
  image: "images/productos/Bisuteria/Conjuntos/11044P-JON.jpg",
  material: "Plata Ley 925"
},
{
  id: "11037P-JOQ",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto dijes y topos",
  price: 90000,
  image: "images/productos/Bisuteria/Conjuntos/11037P-JOQ.jpg",
  material: "Plata Ley 925"
},
{
  id: "RO148",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Balón de Fútbol Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO148.jpg",
  material: "Rodio"
},
{
  id: "RO147",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Colombia Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO147.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "RO146",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Balón y Guayo Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO146.jpg",
  material: "Rodio"
},
{
  id: "RO142",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Mini Colibrí",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO142.jpg",
  medidas: "44 cm",
  material: "Rodio"
},
{
  id: "RO138",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Cruz",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO138.jpg",
  medidas: "44 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "NP510",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Collar y Pulsera Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Conjuntos/NP510.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO135",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Trébol Negro",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO135.jpg",
  material: "Rodio"
},
{
  id: "RO133",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Trébol Rojo",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO133.jpg",
  material: "Rodio"
},
{
  id: "RO132",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Trébol Verde",
  price: 24000,
  image: "images/productos/Bisuteria/Conjuntos/RO132.jpg",
  material: "Rodio"
},
{
  id: "NP481",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Collar y Pulsera corazón",
  price: 30000,
  image: "images/productos/Bisuteria/Conjuntos/NP481.jpg",
  material: "Oro Goldfield"
},
{
  id: "MC908",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Dije Oso ajustable",
  price: 27000,
  image: "images/productos/Bisuteria/Conjuntos/MC908.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "CB685",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Cereza",
  price: 15500,
  image: "images/productos/Bisuteria/Conjuntos/CB685.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "MC896",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Turmalina tamaño y color de la piedra puede variar",
  price: 27000,
  image: "images/productos/Bisuteria/Conjuntos/MC896.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "LM831",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Cuarzo cristal tamaño y color de la piedra puede variar",
  price: 21000,
  image: "images/productos/Bisuteria/Conjuntos/LM831.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "LM830",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Amatista tamaño y color de la piedra puede variar",
  price: 21000,
  image: "images/productos/Bisuteria/Conjuntos/LM830.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "LM832",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Cuarzo rosa tamaño y color de la piedra puede variar",
  price: 21000,
  image: "images/productos/Bisuteria/Conjuntos/LM832.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "LM829",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Jade tamaño y color de la piedra puede variar",
  price: 21000,
  image: "images/productos/Bisuteria/Conjuntos/LM829.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "LM827",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Cuarzo cristal tamaño y color de la piedra puede variar",
  price: 21000,
  image: "images/productos/Bisuteria/Conjuntos/LM827.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "MC895",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto Turmalina tamaño y color de la piedra puede variar",
  price: 27000,
  image: "images/productos/Bisuteria/Conjuntos/MC895.jpg",
  material: "Acero - Oro Goldfield"
},
{
  id: "LM786",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto dije colibrí",
  price: 21000,
  image: "images/productos/Bisuteria/Conjuntos/LM786.jpg",
  material: "Rodio"
},
{
  id: "AC136H",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Collar dije letra H, el tamaño de los topos puede variar",
  price: 10900,
  image: "images/productos/Bisuteria/Conjuntos/AC136H.jpg",
  material: "Oro Goldfield - Acero"
},

// --- Dijes ---
{
  id: "12054P-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Guadalupe Bendita IT",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/12054P-JOJ.jpg",
  medidas: "1.6 cm",
  material: "Plata Ley 925"
},
{
  id: "12054P-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Medalla Milagrosa IT",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/12054P-JOH.jpg",
  medidas: "1.45 cm",
  material: "Plata Ley 925"
},
{
  id: "12028P-JOQ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje caballo",
  price: 90000,
  image: "images/productos/Bisuteria/Dijes/12028P-JOQ.jpg",
  medidas: "1,8 cm x 1,5 cm",
  material: "Plata Ley 925"
},
{
  id: "12016P-JOF",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije San Benito",
  price: 40000,
  image: "images/productos/Bisuteria/Dijes/12016P-JOF.jpg",
  medidas: "1 cm",
  material: "Plata Ley 925"
},
{
  id: "11991P-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije tres gracias",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/11991P-JOJ.jpg",
  material: "Plata Ley 925"
},
{
  id: "11990P-JOF",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje San Benito Orejita",
  price: 40000,
  image: "images/productos/Bisuteria/Dijes/11990P-JOF.jpg",
  material: "Plata Ley 925"
},
{
  id: "11989P-JOF",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje pasador San Benito",
  price: 40000,
  image: "images/productos/Bisuteria/Dijes/11989P-JOF.jpg",
  medidas: "1 cm",
  material: "Plata Ley 925"
},
{
  id: "11957P-JNA",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije oso",
  price: 15000,
  image: "images/productos/Bisuteria/Dijes/11957P-JNA.jpg",
  medidas: "1 cm",
  material: "Plata Ley 925"
},
{
  id: "11959P-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje corona",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/11959P-JOJ.jpg",
  medidas: "1,3 cm x 1,2 cm",
  material: "Plata Ley 925"
},
{
  id: "11958P-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje trébol",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/11958P-JOH.jpg",
  medidas: "1 cm x 8mm",
  material: "Plata Ley 925"
},
{
  id: "11956P-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje cruz",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/11956P-JOJ.jpg",
  medidas: "1,9 cm x 8mm",
  material: "Plata Ley 925"
},
{
  id: "11955P-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje bolsa de dinero",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/11955P-JOG.jpg",
  medidas: "1.2 cm",
  material: "Plata Ley 925"
},
{
  id: "11954P-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje dólar",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/11954P-JOG.jpg",
  medidas: "1,9 cm x 6mm",
  material: "Plata Ley 925"
},
{
  id: "11953P-JOF",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje Virgen Guadalupe",
  price: 40000,
  image: "images/productos/Bisuteria/Dijes/11953P-JOF.jpg",
  medidas: "1,3 cm x 9mm",
  material: "Plata Ley 925"
},
{
  id: "11952P-JOF",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje pasador Virgen Guadalupe",
  price: 40000,
  image: "images/productos/Bisuteria/Dijes/11952P-JOF.jpg",
  medidas: "9mm x 6mm",
  material: "Plata Ley 925"
},
{
  id: "11951P-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije San Miguel",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/11951P-JOH.jpg",
  medidas: "1,6 cm x 1 cm",
  material: "Plata Ley 925"
},
{
  id: "11950P-JOE",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje pasador San Miguel Arcángel",
  price: 35000,
  image: "images/productos/Bisuteria/Dijes/11950P-JOE.jpg",
  medidas: "9mm x 6mm",
  material: "Plata Ley 925"
},
{
  id: "11949P-JOE",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje San Miguel",
  price: 35000,
  image: "images/productos/Bisuteria/Dijes/11949P-JOE.jpg",
  medidas: "1,5 cm x 8mm",
  material: "Plata Ley 925"
},
{
  id: "11948P-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje infinito",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/11948P-JOH.jpg",
  medidas: "1.9 cm x 5mm",
  material: "Plata Ley 925"
},
{
  id: "11947P-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije aleta",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/11947P-JOG.jpg",
  medidas: "1 cm",
  material: "Plata Ley 925"
},
{
  id: "11946P-JOF",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje estrella pasador",
  price: 40000,
  image: "images/productos/Bisuteria/Dijes/11946P-JOF.jpg",
  medidas: "7mm",
  material: "Plata Ley 925"
},
{
  id: "11908P-JOF",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije cruz circones",
  price: 40000,
  image: "images/productos/Bisuteria/Dijes/11908P-JOF.jpg",
  medidas: "1,4 cm x 9mm",
  material: "Plata Ley 925"
},
{
  id: "11907P-JOA",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije cruz",
  price: 20000,
  image: "images/productos/Bisuteria/Dijes/11907P-JOA.jpg",
  medidas: "1,6 cm x 9mm",
  material: "Plata Ley 925"
},
{
  id: "11836P-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Mini San Miguel",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/11836P-JOG.jpg",
  medidas: "0.7 cm",
  material: "Plata Ley 925"
},
{
  id: "11166P-JOD",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Virgen María",
  price: 30000,
  image: "images/productos/Bisuteria/Dijes/11166P-JOD.jpg",
  medidas: "1,4 cm x 7 mm",
  material: "Plata Ley 925"
},
{
  id: "11165P-JOA",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Corazón",
  price: 20000,
  image: "images/productos/Bisuteria/Dijes/11165P-JOA.jpg",
  medidas: "8mm x 9mm",
  material: "Plata Ley 925"
},
{
  id: "11118P-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Mini San Miguel Arcángel XS",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/11118P-JOG.jpg",
  medidas: "0.8 cm",
  material: "Plata Ley 925"
},
{
  id: "11117P-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Mini Milagrosa XS",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/11117P-JOG.jpg",
  medidas: "0.8 cm",
  material: "Plata Ley 925"
},
{
  id: "11113P-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Mini Virgen De Guadalupe XS",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/11113P-JOG.jpg",
  medidas: "0.7 cm",
  material: "Plata Ley 925"
},
{
  id: "11112P-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Mini San Benito XS",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/11112P-JOG.jpg",
  medidas: "0.8 cm",
  material: "Plata Ley 925"
},
{
  id: "11110P-JOE",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Mini San Benito",
  price: 35000,
  image: "images/productos/Bisuteria/Dijes/11110P-JOE.jpg",
  medidas: "1 cm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11107P-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije San Benito",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/11107P-JOH.jpg",
  medidas: "1,2 cm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11106P-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Virgen De Guadalupe",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/11106P-JOG.jpg",
  medidas: "1,2 cm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11101P-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Milagrosa",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/11101P-JOG.jpg",
  medidas: "1,2 cm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11042P-JNA",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije tortuga",
  price: 15000,
  image: "images/productos/Bisuteria/Dijes/11042P-JNA.jpg",
  medidas: "6x5mm",
  material: "Plata Ley 925"
},
{
  id: "11040P-JOC",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije huella",
  price: 25000,
  image: "images/productos/Bisuteria/Dijes/11040P-JOC.jpg",
  material: "Plata Ley 925"
},
{
  id: "11005P-JOD",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije San Miguel Mini",
  price: 30000,
  image: "images/productos/Bisuteria/Dijes/11005P-JOD.jpg",
  medidas: "1,2 cm x 6 mm",
  material: "Plata Ley 925"
},
{
  id: "11004P-JOD",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Bolsa de Dinero",
  price: 30000,
  image: "images/productos/Bisuteria/Dijes/11004P-JOD.jpg",
  medidas: "1,3 cm x 5 mm",
  material: "Plata Ley 925"
},
{
  id: "11000P-V-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra V",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-V-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-S-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra S",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-S-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-N-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra N",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-N-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-G-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra G",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-G-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-Y-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra Y",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-Y-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-W-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra W",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-W-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-I-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra I",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-I-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-O-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra O",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-O-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-M-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra M",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-M-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-L-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra L",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-L-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-K-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra K",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-K-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-J-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra J",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-J-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-F-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra F",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-F-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-E-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra E",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-E-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-D-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra D",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-D-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "11000P-A-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra A",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/11000P-A-JOK.jpg",
  medidas: "1,3 cm x 9 mm",
  description: "No incluye cadena",
  material: "Plata Ley 925"
},
{
  id: "10951P-JNA",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije corazón",
  price: 15000,
  image: "images/productos/Bisuteria/Dijes/10951P-JNA.jpg",
  medidas: "6mm",
  material: "Plata Ley 925"
},
{
  id: "10936P-JOF",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije San Benito",
  price: 40000,
  image: "images/productos/Bisuteria/Dijes/10936P-JOF.jpg",
  medidas: "8 mm",
  material: "Plata Ley 925"
},
{
  id: "10757P-JOA",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije búho",
  price: 20000,
  image: "images/productos/Bisuteria/Dijes/10757P-JOA.jpg",
  medidas: "1,4 cm x 6mm",
  material: "Plata Ley 925"
},
{
  id: "10601P-JNA",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje infinito",
  price: 15000,
  image: "images/productos/Bisuteria/Dijes/10601P-JNA.jpg",
  material: "Plata Ley 925"
},
{
  id: "10600P-JOF",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje cruz",
  price: 40000,
  image: "images/productos/Bisuteria/Dijes/10600P-JOF.jpg",
  material: "Plata Ley 925"
},
{
  id: "10574P-JOC",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Virgen Guadalupe",
  price: 25000,
  image: "images/productos/Bisuteria/Dijes/10574P-JOC.jpg",
  medidas: "1 X 1.5 cm",
  material: "Plata Ley 925"
},
{
  id: "RO056",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Mariposa",
  price: 24000,
  image: "images/productos/Bisuteria/Dijes/RO056.jpg",
  material: "Rodio"
},
{
  id: "LM848",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Estrella y Concha",
  price: 21000,
  image: "images/productos/Bisuteria/Dijes/LM848.jpg",
  material: "Rodio"
},
{
  id: "LR455",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Tornasol",
  price: 19900,
  image: "images/productos/Bisuteria/Dijes/LR455.jpg",
  material: "Rodio"
},
{
  id: "LR453",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Trébol Negro",
  price: 19900,
  image: "images/productos/Bisuteria/Dijes/LR453.jpg",
  material: "Rodio"
},
{
  id: "GP445",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Letra",
  price: 7100,
  image: "images/productos/Bisuteria/Dijes/GP445.jpg",
  medidas: "1 cm",
  material: "Rodio"
},
{
  id: "TS256",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije letra",
  price: 5400,
  image: "images/productos/Bisuteria/Dijes/TS256.jpg",
  medidas: "6mm",
  material: "Rodio"
},
{
  id: "GP366",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Letra rodio",
  price: 7100,
  image: "images/productos/Bisuteria/Dijes/GP366.jpg",
  material: "Rodio"
},

// --- Earcuff ---
{
  id: "LL507",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff",
  price: 13900,
  image: "images/productos/Bisuteria/Earcuff/LL507.jpg",
  material: "Rodio"
},
{
  id: "OX391",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff",
  price: 18000,
  image: "images/productos/Bisuteria/Earcuff/OX391.jpg",
  material: "Rodio"
},
{
  id: "OX390",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff chunky",
  price: 18000,
  image: "images/productos/Bisuteria/Earcuff/OX390.jpg",
  material: "Rodio"
},
{
  id: "CB679",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff Flores",
  price: 15500,
  image: "images/productos/Bisuteria/Earcuff/CB679.jpg",
  material: "Rodio"
},
{
  id: "LL501",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perla plateado",
  price: 13900,
  image: "images/productos/Bisuteria/Earcuff/LL501.jpg",
  material: "Rodio"
},
{
  id: "CB667",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff estrellas",
  price: 15500,
  image: "images/productos/Bisuteria/Earcuff/CB667.jpg",
  material: "Rodio"
},
{
  id: "PC713",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC713.jpg",
  material: "Covergold"
},
{
  id: "GP433",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff flores",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP433.jpg",
  material: "Covergold"
},
{
  id: "GP432",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP432.jpg",
  material: "Covergold"
},
{
  id: "GP431",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP431.jpg",
  material: "Covergold"
},
{
  id: "GP430",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP430.jpg",
  material: "Covergold"
},
{
  id: "GP429",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP429.jpg",
  material: "Covergold"
},
{
  id: "GP428",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP428.jpg",
  material: "Covergold"
},
{
  id: "PC711",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC711.jpg",
  material: "Covergold"
},
{
  id: "PC710",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff chunky",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC710.jpg",
  material: "Covergold"
},
{
  id: "PC707",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff cadena y topo",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC707.jpg",
  material: "Covergold"
},
{
  id: "GP423",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP423.jpg",
  material: "Covergold"
},
{
  id: "GP422",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff chunky",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP422.jpg",
  material: "Covergold"
},
{
  id: "GP421",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff dorado",
  price: 7100,
  image: "images/productos/Bisuteria/Earcuff/GP421.jpg",
  material: "Covergold"
},
{
  id: "PC706",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC706.jpg",
  material: "Covergold"
},
{
  id: "PC705",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC705.jpg",
  material: "Covergold"
},
{
  id: "PC704",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC704.jpg",
  material: "Covergold"
},
{
  id: "PC703",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC703.jpg",
  material: "Covergold"
},
{
  id: "PC702",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC702.jpg",
  material: "Covergold"
},
{
  id: "PC701",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC701.jpg",
  material: "Covergold"
},
{
  id: "PC700",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC700.jpg",
  material: "Covergold"
},
{
  id: "AC405",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff hojas",
  price: 10900,
  image: "images/productos/Bisuteria/Earcuff/AC405.jpg",
  material: "Acero"
},
{
  id: "PC688",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC688.jpg",
  material: "Covergold"
},
{
  id: "PC685",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC685.jpg",
  material: "Covergold"
},
{
  id: "PC681",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff perlas",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC681.jpg",
  material: "Covergold"
},
{
  id: "PC671",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC671.jpg",
  material: "Covergold"
},
{
  id: "PC670",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff doble",
  price: 9000,
  image: "images/productos/Bisuteria/Earcuff/PC670.jpg",
  material: "Covergold"
},
{
  id: "LL382",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff Colores",
  price: 13900,
  image: "images/productos/Bisuteria/Earcuff/LL382.jpg",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "PG361",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff doble",
  price: 11900,
  image: "images/productos/Bisuteria/Earcuff/PG361.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "CB596",
  category: "bisuteria",
  subcategory: "Earcuff",
  name: "Earcuff tejido",
  price: 15500,
  image: "images/productos/Bisuteria/Earcuff/CB596.jpg",
  material: "Oro Goldfield"
},

// --- Empaques ---
{
  id: "SP345",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería rectangular",
  price: 35900,
  image: "images/productos/Bisuteria/Empaques/SP345.jpg",
  medidas: "7×10×3,5 cm"
},
{
  id: "SP344",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería rectangular",
  price: 35900,
  image: "images/productos/Bisuteria/Empaques/SP344.jpg",
  medidas: "7×10×3,5 cm"
},
{
  id: "CB688",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja para Joyería Cuadrada",
  price: 15500,
  image: "images/productos/Bisuteria/Empaques/CB688.jpg",
  medidas: "9×9×3.5 cm"
},
{
  id: "LR434",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Cofre Blanco",
  price: 19900,
  image: "images/productos/Bisuteria/Empaques/LR434.jpg",
  medidas: "4,5 cm x 5,5 cm"
},
{
  id: "PG465",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería",
  price: 11900,
  image: "images/productos/Bisuteria/Empaques/PG465.jpg",
  medidas: "5×5×3,5 cm",
  description: "Caja"
},
{
  id: "PG464",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería Rosa",
  price: 11900,
  image: "images/productos/Bisuteria/Empaques/PG464.jpg",
  medidas: "5×5×3,5 cm",
  description: "Caja"
},
{
  id: "PG463",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Deslizable Negro",
  price: 11900,
  image: "images/productos/Bisuteria/Empaques/PG463.jpg",
  medidas: "5×5×3,5 cm",
  description: "Empaque"
},
{
  id: "RO176",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Royal",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO176.jpg",
  medidas: "8,5 × 7,5 × 3,5 cm",
  description: "Empaque"
},
{
  id: "FT348",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Noir Atelier",
  price: 39900,
  image: "images/productos/Bisuteria/Empaques/FT348.jpg",
  medidas: "11 × 16 × 3,5 cm",
  description: "Empaque"
},
{
  id: "GP457",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería en forma de corazón negro",
  price: 7100,
  image: "images/productos/Bisuteria/Empaques/GP457.jpg",
  medidas: "4×4×3,3 cm",
  description: "Caja"
},
{
  id: "GP456",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería en forma de corazón rojo",
  price: 7100,
  image: "images/productos/Bisuteria/Empaques/GP456.jpg",
  medidas: "4×4×3,3 cm",
  description: "Caja"
},
{
  id: "BR128",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería cuadrada",
  price: 45000,
  image: "images/productos/Bisuteria/Empaques/BR128.jpg",
  medidas: "7×10×3,5 cm",
  description: "Caja"
},
{
  id: "MC955",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Deluxe Gris",
  price: 27000,
  image: "images/productos/Bisuteria/Empaques/MC955.jpg",
  medidas: "7 × 8 × 3,5 cm",
  description: "Empaque"
},
{
  id: "SP392",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Elite",
  price: 35900,
  image: "images/productos/Bisuteria/Empaques/SP392.jpg",
  medidas: "9 × 9 × 4,5 cm",
  description: "Empaque"
},
{
  id: "RO099",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería con colgaderas",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO099.jpg",
  medidas: "10×10×3,5 cm",
  description: "Caja"
},
{
  id: "RO098",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería con colgaderas",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO098.jpg",
  medidas: "10×10×3,5 cm",
  description: "Caja"
},
{
  id: "RO097",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería con colgaderas",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO097.jpg",
  medidas: "10×10×3,5 cm",
  description: "Caja"
},
{
  id: "FT314",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Negro Mediano",
  price: 39900,
  image: "images/productos/Bisuteria/Empaques/FT314.jpg",
  description: "Joyero"
},
{
  id: "FT313",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Salmón Mediano",
  price: 39900,
  image: "images/productos/Bisuteria/Empaques/FT313.jpg",
  description: "Joyero"
},
{
  id: "FT312",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Blanco Mediano",
  price: 39900,
  image: "images/productos/Bisuteria/Empaques/FT312.jpg",
  description: "Joyero"
},
{
  id: "RO093",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Negro Cuadrado",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO093.jpg",
  description: "Joyero"
},
{
  id: "RO092",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Salmón Cuadrado",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO092.jpg",
  description: "Joyero"
},
{
  id: "RO091",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Blanco Cuadrado",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO091.jpg",
  description: "Joyero"
},
{
  id: "RO090",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Blanco Redondo",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO090.jpg",
  description: "Joyero"
},
{
  id: "RO089",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero Rosa Redondo",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO089.jpg",
  description: "Joyero"
},
{
  id: "BR121",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería",
  price: 45000,
  image: "images/productos/Bisuteria/Empaques/BR121.jpg",
  medidas: "6,5×3,5×4,5cm",
  description: "Caja"
},
{
  id: "BR120",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería",
  price: 45000,
  image: "images/productos/Bisuteria/Empaques/BR120.jpg",
  medidas: "6,5×3,5×4,5cm",
  description: "Caja"
},
{
  id: "CB689",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja para Joyería Cuadrada",
  price: 15500,
  image: "images/productos/Bisuteria/Empaques/CB689.jpg",
  medidas: "9×9×3,5 cm",
  description: "Caja"
},
{
  id: "RO065",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja de joyería con colgaderas",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO065.jpg",
  medidas: "10×10×3,5 cm",
  description: "Caja"
},
{
  id: "RO045",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Cofre Negro",
  price: 24000,
  image: "images/productos/Bisuteria/Empaques/RO045.jpg",
  medidas: "4,6 cm x 5,5 cm",
  description: "Cofre"
},
{
  id: "1PE-PLATINADO-JNC",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Elegance platinado",
  price: 7500,
  image: "images/productos/Bisuteria/Empaques/1PE-PLATINADO-JNC.jpg",
  description: "Empaque"
},
{
  id: "PANA-001",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Bolsa de pana pequeña",
  price: 800,
  image: "images/productos/Bisuteria/Empaques/PANA-001.jpg",
  description: "Bolsa"
},
{
  id: "NP365",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Joyero negro redondo",
  price: 30000,
  image: "images/productos/Bisuteria/Empaques/NP365.jpg",
  medidas: "Diámetro 10.5 cm, alto 4 cm",
  description: "Joyero"
},
{
  id: "1EU-NEGRO-JNC",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Elegance",
  price: 7500,
  image: "images/productos/Bisuteria/Empaques/1EU-NEGRO-JNC.jpg",
  description: "Empaque",
  agotado: true
},
{
  id: "1EU-PERLA-JNC",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Elegance",
  price: 7500,
  image: "images/productos/Bisuteria/Empaques/1EU-PERLA-JNC.jpg",
  description: "Empaque"
},
{
  id: "1EU-ROSA-JNC",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Empaque Elegance",
  price: 7500,
  image: "images/productos/Bisuteria/Empaques/1EU-ROSA-JNC.jpg",
  description: "Empaque"
},
{
  id: "C-005",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja Beige Pequeña",
  price: 3000,
  image: "images/productos/Bisuteria/Empaques/C-005.jpg",
  description: "Caja"
},
{
  id: "VA004",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Bolsa tul mediana",
  price: 600,
  image: "images/productos/Bisuteria/Empaques/VA004.jpg",
  medidas: "12CM X 8CM por unidad",
  description: "Bolsa"
},
{
  id: "VA022",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Bolsa tul pequeña",
  price: 400,
  image: "images/productos/Bisuteria/Empaques/VA022.jpg",
  medidas: "6.5cm x 9 cm por unidad",
  description: "Bolsa"
},
{
  id: "VA005",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Bolsa tul grande",
  price: 800,
  image: "images/productos/Bisuteria/Empaques/VA005.jpg",
  medidas: "18 cm x 12 cm",
  description: "Bolsa"
},
{
  id: "C-002",
  category: "bisuteria",
  subcategory: "Empaques",
  name: "Caja tipo sobre",
  price: 1500,
  image: "images/productos/Bisuteria/Empaques/C-002.jpg",
  medidas: "Ancho 10.5cm x Largo",
  description: "Caja"
},

// --- Pulseras ---
{
  id: "RO177",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 Pulsera Sol y Luna",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO177.jpg",
  material: "Acero"
},
{
  id: "CB735",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Brazalete Liso Para Charm Con Broche",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB735.jpg",
  material: "Rodio"
},
{
  id: "PC609",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera turquesa ajustable",
  price: 9000,
  image: "images/productos/Bisuteria/Pulseras/PC609.jpg",
  material: "Oro Goldfield"
},
{
  id: "PG456",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cubana",
  price: 11900,
  image: "images/productos/Bisuteria/Pulseras/PG456.jpg",
  medidas: "21 cm x 4 mm",
  material: "Acero"
},
{
  id: "PG455",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera 3x1",
  price: 11900,
  image: "images/productos/Bisuteria/Pulseras/PG455.jpg",
  medidas: "22 cm x 4 mm",
  material: "Acero"
},
{
  id: "OX437",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera 3x1",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX437.jpg",
  medidas: "22 cm x 6 mm",
  material: "Acero"
},
{
  id: "CB700",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Placa Plateada",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB700.jpg",
  medidas: "22 cm",
  material: "Acero"
},
{
  id: "CB699",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Placa Negra",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB699.jpg",
  medidas: "22 cm",
  material: "Acero"
},
{
  id: "CB698",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Padre Nuestro Negra",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB698.jpg",
  medidas: "22 cm",
  material: "Acero"
},
{
  id: "CB697",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Padre Nuestro Plateada",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB697.jpg",
  medidas: "22 cm",
  material: "Acero"
},
{
  id: "CB696",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Padre Nuestro Dorada",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB696.jpg",
  medidas: "22 cm",
  material: "Acero"
},
{
  id: "LM871",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Charm avión y Maleta Dorado",
  price: 21000,
  image: "images/productos/Bisuteria/Dijes/LM871.jpg",
  material: "Rodio"
},
{
  id: "MC932",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Charm Cofre Morado Tortuga y Concha",
  price: 27000,
  image: "images/productos/Bisuteria/Dijes/MC932.jpg",
  material: "Rodio"
},
{
  id: "LR452",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Charm Alas",
  price: 19900,
  image: "images/productos/Bisuteria/Dijes/LR452.jpg",
  material: "Rodio"
},
{
  id: "LR451",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Charm Tortuga y Ola",
  price: 19900,
  image: "images/productos/Bisuteria/Dijes/LR451.jpg",
  material: "Rodio"
},
{
  id: "LR450",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Charm Árbol de la vida",
  price: 19900,
  image: "images/productos/Bisuteria/Dijes/LR450.jpg",
  material: "Rodio"
},
{
  id: "LR449",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Charm Viajero",
  price: 19900,
  image: "images/productos/Bisuteria/Dijes/LR449.jpg",
  material: "Rodio"
},
{
  id: "LR393",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Charm tortuga y perla dorado",
  price: 19900,
  image: "images/productos/Bisuteria/Dijes/LR393.jpg",
  material: "Rodio"
},
{
  id: "LR369",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Charm dorado cola de ballena",
  price: 19900,
  image: "images/productos/Bisuteria/Dijes/LR369.jpg",
  material: "Rodio"
},
{
  id: "OX335",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Charm 4 flores",
  price: 18000,
  image: "images/productos/Bisuteria/Dijes/OX335.jpg",
  material: "Rodio"
},
{
  id: "LM711",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Charm dijes mar",
  price: 21000,
  image: "images/productos/Bisuteria/Dijes/LM711.jpg",
  material: "Rodio"
},
{
  id: "LM698",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera con extensor plateado",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM698.jpg",
  medidas: "21 cm + 5 Extensión",
  material: "Rodio"
},
{
  id: "MC785",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera con broche plateado",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC785.jpg",
  medidas: "18 cm",
  material: "Rodio"
},
{
  id: "BR104",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera broche estrella circones",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/BR104.jpg",
  material: "Rodio"
},
{
  id: "BR103",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera con broche plateado",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/BR103.jpg",
  material: "Rodio"
},
{
  id: "NP392",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera con broche plateado",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP392.jpg",
  material: "Rodio"
},
{
  id: "BR098",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera broche estrella circones",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/BR098.jpg",
  material: "Rodio"
},
{
  id: "BR097",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera broche corazón circones dorado",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/BR097.jpg",
  material: "Rodio"
},
{
  id: "LM682",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Charm rueda",
  price: 21000,
  image: "images/productos/Bisuteria/Dijes/LM682.jpg",
  material: "Rodio"
},
{
  id: "10981P-JOF",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Marine",
  price: 40000,
  image: "images/productos/Bisuteria/Pulseras/10981P-JOF.jpg",
  medidas: "16 cm x 1,5 mm",
  material: "Plata Ley 925"
},
{
  id: "10990P-JOG",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Marine",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/10990P-JOG.jpg",
  medidas: "19,5 cm x 1,5 mm",
  material: "Plata Ley 925"
},
{
  id: "12035P-JOG",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Aros",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/12035P-JOG.jpg",
  medidas: "18,5 cm x 4 mm",
  material: "Plata Ley 925"
},
{
  id: "10980P-JOJ",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulseras 3*1",
  price: 60000,
  image: "images/productos/Bisuteria/Pulseras/10980P-JOJ.jpg",
  medidas: "16 cm x 1.4 mm",
  material: "Plata Ley 925"
},
{
  id: "11183P-JOL",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera China",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/11183P-JOL.jpg",
  medidas: "16 cm x 2 mm",
  material: "Plata Ley 925"
},
{
  id: "10992P-JOQ",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera China",
  price: 90000,
  image: "images/productos/Bisuteria/Pulseras/10992P-JOQ.jpg",
  medidas: "19.5 cm x 2 mm",
  material: "Plata Ley 925"
},
{
  id: "10991P-JOR",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cubana",
  price: 100000,
  image: "images/productos/Bisuteria/Pulseras/10991P-JOR.jpg",
  medidas: "19.5 cm x 1,9 mm",
  material: "Plata Ley 925"
},
{
  id: "12034P-JOR",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazones",
  price: 100000,
  image: "images/productos/Bisuteria/Pulseras/12034P-JOR.jpg",
  medidas: "19 cm x 7 mm",
  material: "Plata Ley 925"
},
{
  id: "12050P-JOT",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera China",
  price: 130000,
  image: "images/productos/Bisuteria/Pulseras/12050P-JOT.jpg",
  medidas: "19.5 cm x 3 mm",
  material: "Plata Ley 925"
},
{
  id: "12051P-JOS",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera China",
  price: 120000,
  image: "images/productos/Bisuteria/Pulseras/12051P-JOS.jpg",
  medidas: "16 cm x 3 mm",
  material: "Plata Ley 925"
},
{
  id: "12049P-JOK",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Herraje San Benito",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/12049P-JOK.jpg",
  description: "Balín liso 3mm",
  material: "Plata Ley 925"
},
{
  id: "11995P-JOX",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera zig zag",
  price: 170000,
  image: "images/productos/Bisuteria/Pulseras/11995P-JOX.jpg",
  description: "Balín italy rodinado 4mm, balín liso 3mm",
  material: "Plata Ley 925"
},
{
  id: "11988P-JON",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras infinito",
  price: 75000,
  image: "images/productos/Bisuteria/Pulseras/11988P-JON.jpg",
  description: "Balín liso 4 y 3mm",
  material: "Plata Ley 925"
},
{
  id: "11986P-JOH",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera negra infinito",
  price: 50000,
  image: "images/productos/Bisuteria/Pulseras/11986P-JOH.jpg",
  description: "Balín liso 4 y 3mm",
  material: "Plata Ley 925"
},
{
  id: "11987P-JOH",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Roja infinito",
  price: 50000,
  image: "images/productos/Bisuteria/Pulseras/11987P-JOH.jpg",
  description: "Balín liso 3mm",
  material: "Plata Ley 925"
},
{
  id: "11975P-JOW",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras infinito",
  price: 160000,
  image: "images/productos/Bisuteria/Pulseras/11975P-JOW.jpg",
  description: "Balín liso 5,4 y 3mm",
  material: "Plata Ley 925"
},
{
  id: "11974P-JOP",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera herraje infinito",
  price: 85000,
  image: "images/productos/Bisuteria/Pulseras/11974P-JOP.jpg",
  description: "Balín liso 4 y 3mm",
  material: "Plata Ley 925"
},
{
  id: "11973P-JOQ",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera herraje infinito",
  price: 90000,
  image: "images/productos/Bisuteria/Pulseras/11973P-JOQ.jpg",
  description: "Balín liso 5, 4 y 3mm",
  material: "Plata Ley 925"
},
{
  id: "11972P-JOP",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera verde herraje dólar",
  price: 85000,
  image: "images/productos/Bisuteria/Pulseras/11972P-JOP.jpg",
  description: "Balín italiano 4 mm, dona 4 mm",
  material: "Plata Ley 925"
},
{
  id: "11971P-JOS",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera verde herraje corona",
  price: 120000,
  image: "images/productos/Bisuteria/Pulseras/11971P-JOS.jpg",
  description: "Balín liso 3mm",
  material: "Plata Ley 925"
},
{
  id: "11970P-JOQ",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera herraje cruz",
  price: 90000,
  image: "images/productos/Bisuteria/Pulseras/11970P-JOQ.jpg",
  description: "Balín italiano 4mm, liso 3mm",
  material: "Plata Ley 925"
},
{
  id: "11969P-JOL",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera herraje estrella",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/11969P-JOL.jpg",
  description: "Balín italiano 3mm, liso 3mm",
  material: "Plata Ley 925"
},
{
  id: "11968P-JOR",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera herraje bolsa de dinero",
  price: 100000,
  image: "images/productos/Bisuteria/Pulseras/11968P-JOR.jpg",
  description: "Balín liso 5 y 3mm",
  material: "Plata Ley 925"
},
{
  id: "11966P-JOU",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera zigzag",
  price: 140000,
  image: "images/productos/Bisuteria/Pulseras/11966P-JOU.jpg",
  description: "Balín liso 4mm y 3mm",
  material: "Plata Ley 925"
},
{
  id: "11964P-JOW",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera 5 carriles",
  price: 160000,
  image: "images/productos/Bisuteria/Pulseras/11964P-JOW.jpg",
  description: "Balín italiano 3mm, liso 3mm",
  material: "Plata Ley 925"
},
{
  id: "11962P-JOF",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ojo turco",
  price: 40000,
  image: "images/productos/Bisuteria/Pulseras/11962P-JOF.jpg",
  description: "Balín liso 4 y 3 mm",
  material: "Plata Ley 925"
},
{
  id: "11961P-JOV",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera herraje San Benito",
  price: 150000,
  image: "images/productos/Bisuteria/Pulseras/11961P-JOV.jpg",
  description: "Balín 3mm",
  material: "Plata Ley 925"
},
{
  id: "11960P-JOL",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera balín italy rodinado",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/11960P-JOL.jpg",
  description: "Balín italy rodinado 4mm, liso 3mm",
  material: "Plata Ley 925"
},
{
  id: "11998P-JOH",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera balín italy",
  price: 50000,
  image: "images/productos/Bisuteria/Pulseras/11998P-JOH.jpg",
  description: "Balín italy 4mm, liso 4 y 3mm",
  material: "Plata Ley 925"
},
{
  id: "11913P-JOP",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito",
  price: 85000,
  image: "images/productos/Bisuteria/Pulseras/11913P-JOP.jpg",
  description: "Balín Italiano 4 mm liso 3 mm",
  material: "Plata Ley 925"
},
{
  id: "11912P-JOT",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Balín Italy y Liso",
  price: 130000,
  image: "images/productos/Bisuteria/Pulseras/11912P-JOT.jpg",
  description: "Balín italy 3 mm y liso 4 mm",
  material: "Plata Ley 925"
},
{
  id: "11911P-JOT",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Balín Italy y Liso",
  price: 130000,
  image: "images/productos/Bisuteria/Pulseras/11911P-JOT.jpg",
  description: "Balín italy 3 mm, liso 4 mm",
  material: "Plata Ley 925"
},
{
  id: "11910P-JOT",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Balín",
  price: 130000,
  image: "images/productos/Bisuteria/Pulseras/11910P-JOT.jpg",
  description: "Balín 4 mm y 3 mm",
  material: "Plata Ley 925"
},
{
  id: "11909P-JOT",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Balín Liso",
  price: 130000,
  image: "images/productos/Bisuteria/Pulseras/11909P-JOT.jpg",
  description: "Balín liso 4 mm y 3 mm",
  material: "Plata Ley 925"
},
{
  id: "11873P-JOS",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Gucci",
  price: 120000,
  image: "images/productos/Bisuteria/Pulseras/11873P-JOS.jpg",
  medidas: "16 cm x 4,5 mm",
  material: "Plata Ley 925"
},
{
  id: "11830P-JON",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito",
  price: 75000,
  image: "images/productos/Bisuteria/Pulseras/11830P-JON.jpg",
  description: "Balín liso 4mm",
  material: "Plata Ley 925"
},
{
  id: "11829P-JOH",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito",
  price: 50000,
  image: "images/productos/Bisuteria/Pulseras/11829P-JOH.jpg",
  material: "Plata Ley 925"
},
{
  id: "11827P-JOK",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera herraje San Benito",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/11827P-JOK.jpg",
  description: "Balín liso 3mm",
  material: "Plata Ley 925"
},
{
  id: "11826P-JOL",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera dije corazón",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/11826P-JOL.jpg",
  description: "Balín italy 4mm y liso 3mm",
  material: "Plata Ley 925"
},
{
  id: "11825P-JOK",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera balín liso",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/11825P-JOK.jpg",
  description: "Balín liso 4mm, italiano 3mm",
  material: "Plata Ley 925"
},
{
  id: "11824P-JOF",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera balín liso",
  price: 40000,
  image: "images/productos/Bisuteria/Pulseras/11824P-JOF.jpg",
  description: "Balín liso 3 mm",
  material: "Plata Ley 925"
},
{
  id: "11823P-JOR",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set X 2 Pulsera San Benito",
  price: 100000,
  image: "images/productos/Bisuteria/Pulseras/11823P-JOR.jpg",
  description: "Balín 3 mm y 4 mm",
  material: "Plata Ley 925"
},
{
  id: "11815P-JOW",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera barril",
  price: 160000,
  image: "images/productos/Bisuteria/Pulseras/11815P-JOW.jpg",
  description: "Barril 3mm",
  material: "Plata Ley 925"
},
{
  id: "11814P-JOF",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras barril",
  price: 40000,
  image: "images/productos/Bisuteria/Pulseras/11814P-JOF.jpg",
  description: "Barril 3mm",
  material: "Plata Ley 925"
},
{
  id: "11813P-JOA",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera barril",
  price: 20000,
  image: "images/productos/Bisuteria/Pulseras/11813P-JOA.jpg",
  description: "Barril 3mm",
  material: "Plata Ley 925"
},
{
  id: "11812P-JOF",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras barril",
  price: 40000,
  image: "images/productos/Bisuteria/Pulseras/11812P-JOF.jpg",
  description: "Barril 3mm",
  material: "Plata Ley 925"
},
{
  id: "11811P-JOA",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera barril",
  price: 20000,
  image: "images/productos/Bisuteria/Pulseras/11811P-JOA.jpg",
  description: "Barril 3mm, plata rodinada",
  material: "Plata Ley 925"
},
{
  id: "11810P-JOM",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Milagrosa",
  price: 75000,
  image: "images/productos/Bisuteria/Pulseras/11810P-JOM.jpg",
  description: "Balín 3 mm",
  material: "Plata Ley 925"
},
{
  id: "11809P-JOQ",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito",
  price: 90000,
  image: "images/productos/Bisuteria/Pulseras/11809P-JOQ.jpg",
  description: "Balín 3 mm",
  material: "Plata Ley 925"
},
{
  id: "11808P-JON",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Milagrosa",
  price: 75000,
  image: "images/productos/Bisuteria/Pulseras/11808P-JON.jpg",
  description: "Balín Italiano Y Liso 3 mm",
  material: "Plata Ley 925"
},
{
  id: "11807P-JOL",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Miguel",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/11807P-JOL.jpg",
  description: "Balín 4mm y 3mm",
  material: "Plata Ley 925"
},
{
  id: "11806P-JON",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Miguel",
  price: 75000,
  image: "images/productos/Bisuteria/Pulseras/11806P-JON.jpg",
  description: "Balín 4mm y 3mm",
  material: "Plata Ley 925"
},
{
  id: "11805P-JOJ",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito",
  price: 60000,
  image: "images/productos/Bisuteria/Pulseras/11805P-JOJ.jpg",
  description: "Balín liso 4mm y 3mm",
  material: "Plata Ley 925"
},
{
  id: "11804P-JOJ",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito",
  price: 60000,
  image: "images/productos/Bisuteria/Pulseras/11804P-JOJ.jpg",
  description: "Balín Italy 4mm liso 3mm",
  material: "Plata Ley 925"
},
{
  id: "10117P-JOE",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tejida 7 nudos",
  price: 35000,
  image: "images/productos/Bisuteria/Pulseras/10117P-JOE.jpg",
  description: "Balín 3mm",
  material: "Plata Ley 925"
},
{
  id: "10104P-JOE",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tejida 7 nudos",
  price: 35000,
  image: "images/productos/Bisuteria/Pulseras/10104P-JOE.jpg",
  description: "Balín 3mm",
  material: "Plata Ley 925"
},
{
  id: "11130P-JOG",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Bicolor",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/11130P-JOG.jpg",
  description: "Balín Italiano 3 mm",
  material: "Plata Ley 925"
},
{
  id: "11104P-JXI",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Spark Moissanita",
  price: 660000,
  image: "images/productos/Bisuteria/Pulseras/11104P-JXI.jpg",
  medidas: "17 cm",
  material: "Plata Ley 925"
},
{
  id: "11098P-JXI",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Sole Moissanita",
  price: 660000,
  image: "images/productos/Bisuteria/Pulseras/11098P-JXI.jpg",
  medidas: "17 cm",
  material: "Plata Ley 925"
},
{
  id: "11068P-JOA",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera 7 nudos",
  price: 20000,
  image: "images/productos/Bisuteria/Pulseras/11068P-JOA.jpg",
  description: "Balín 3mm",
  material: "Plata Ley 925"
},
{
  id: "11065P-JOK",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Guadalupe",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/11065P-JOK.jpg",
  medidas: "3 mm",
  material: "Plata Ley 925"
},
{
  id: "11061P-JOK",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Balín",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/11061P-JOK.jpg",
  description: "Balín 4 mm",
  material: "Plata Ley 925"
},
{
  id: "11056P-JON",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Milagrosa",
  price: 75000,
  image: "images/productos/Bisuteria/Pulseras/11056P-JON.jpg",
  description: "Balín Italiano 3 mm",
  material: "Plata Ley 925"
},
{
  id: "11055P-JOQ",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito",
  price: 90000,
  image: "images/productos/Bisuteria/Pulseras/11055P-JOQ.jpg",
  material: "Plata Ley 925"
},
{
  id: "10800P-JOE",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras",
  price: 35000,
  image: "images/productos/Bisuteria/Pulseras/10800P-JOE.jpg",
  description: "Balín 4mm y 3mm",
  material: "Plata Ley 925"
},
{
  id: "10819P-JOE",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Roja",
  price: 35000,
  image: "images/productos/Bisuteria/Pulseras/10819P-JOE.jpg",
  description: "Balín 4mm",
  material: "Plata Ley 925"
},
{
  id: "10811P-JOX",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Clover",
  price: 170000,
  image: "images/productos/Bisuteria/Pulseras/10811P-JOX.jpg",
  medidas: "15 cm + extensión, dije 1,2 cm",
  material: "Plata Ley 925"
},
{
  id: "10804P-JON",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera dije corazón",
  price: 75000,
  image: "images/productos/Bisuteria/Pulseras/10804P-JON.jpg",
  material: "Plata Ley 925"
},
{
  id: "10803P-JOR",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera dije tres gracias",
  price: 100000,
  image: "images/productos/Bisuteria/Pulseras/10803P-JOR.jpg",
  material: "Plata Ley 925"
},
{
  id: "10799P-JOK",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera balín",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/10799P-JOK.jpg",
  description: "Balín 4 mm",
  material: "Plata Ley 925"
},
{
  id: "10798P-JOQ",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras",
  price: 90000,
  image: "images/productos/Bisuteria/Pulseras/10798P-JOQ.jpg",
  description: "Balín 4mm y 3mm",
  material: "Plata Ley 925"
},
{
  id: "10797P-JOQ",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras",
  price: 90000,
  image: "images/productos/Bisuteria/Pulseras/10797P-JOQ.jpg",
  description: "Balín 3mm y 4mm",
  material: "Plata Ley 925"
},
{
  id: "10796P-JOL",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/10796P-JOL.jpg",
  description: "Balín 4mm",
  material: "Plata Ley 925"
},
{
  id: "10795P-JOG",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera negra",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/10795P-JOG.jpg",
  description: "Balín 4mm",
  material: "Plata Ley 925"
},
{
  id: "10794P-JOH",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera 7 nudos",
  price: 50000,
  image: "images/productos/Bisuteria/Pulseras/10794P-JOH.jpg",
  description: "Balín italiano 4mm",
  material: "Plata Ley 925"
},
{
  id: "10793P-JOR",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera dije tres gracias",
  price: 100000,
  image: "images/productos/Bisuteria/Pulseras/10793P-JOR.jpg",
  description: "Balín 3 y 4mm",
  material: "Plata Ley 925"
},
{
  id: "10792P-JOF",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera roja 7 chakras",
  price: 40000,
  image: "images/productos/Bisuteria/Pulseras/10792P-JOF.jpg",
  material: "Plata Ley 925"
},
{
  id: "10791P-JOF",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera negra 7 chakras",
  price: 40000,
  image: "images/productos/Bisuteria/Pulseras/10791P-JOF.jpg",
  material: "Plata Ley 925"
},
{
  id: "10789P-JOH",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera herraje infinito",
  price: 50000,
  image: "images/productos/Bisuteria/Pulseras/10789P-JOH.jpg",
  description: "Balín 4mm",
  material: "Plata Ley 925"
},
{
  id: "10786P-JON",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera dije corazón",
  price: 75000,
  image: "images/productos/Bisuteria/Pulseras/10786P-JON.jpg",
  description: "Balín 4mm",
  material: "Plata Ley 925"
},
{
  id: "10785P-JOK",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera 7 chakras",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/10785P-JOK.jpg",
  description: "Balín 3mm",
  material: "Plata Ley 925"
},
{
  id: "10778P-JOG",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera piedra natural jade",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/10778P-JOG.jpg",
  description: "Balín 4mm",
  material: "Plata Ley 925"
},
{
  id: "10777P-JOG",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera piedra natural Cuarzo rosa",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/10777P-JOG.jpg",
  description: "Balín 4mm",
  material: "Plata Ley 925"
},
{
  id: "10776P-JOG",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera piedra natural Amatista",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/10776P-JOG.jpg",
  description: "Balín 4mm",
  material: "Plata Ley 925"
},
{
  id: "10775P-JOG",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera piedra natural Ónix",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/10775P-JOG.jpg",
  description: "Balín 4mm",
  material: "Plata Ley 925"
},
{
  id: "10655P-JOH",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera 7 nudos",
  price: 50000,
  image: "images/productos/Bisuteria/Pulseras/10655P-JOH.jpg",
  description: "Balín 4 mm",
  material: "Plata Ley 925"
},
{
  id: "10567P-JOJ",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Amor propio",
  price: 60000,
  image: "images/productos/Bisuteria/Pulseras/10567P-JOJ.jpg",
  description: "Sanación emocional, protección",
  material: "Plata Ley 925"
},
{
  id: "MC958",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera set x 2 Pareja Ajustable",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC958.jpg",
  material: "Oro Goldfield"
},
{
  id: "OX448",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set X2 Corazones Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX448.jpg",
  material: "Oro Goldfield"
},
{
  id: "CB733",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x 2 Corazones Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB733.jpg",
  material: "Oro Goldfield"
},
{
  id: "LR495",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x 2 Corazón Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR495.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO175",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x3 Corazón Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO175.jpg",
  material: "Oro Goldfield"
},
{
  id: "OX447",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x2 Mariposa Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX447.jpg",
  material: "Oro Goldfield"
},
{
  id: "CB732",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulseras Set x2 Cruz Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB732.jpg",
  material: "Oro Goldfield"
},
{
  id: "LM881",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x2 Corazón Ajustable",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM881.jpg",
  material: "Oro Goldfield"
},
{
  id: "LR493",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x2 Corazón y Estrella Dorado Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR493.jpg",
  material: "Oro Goldfield"
},
{
  id: "OX446",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x2 Corazones Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX446.jpg",
  material: "Oro Goldfield"
},
{
  id: "LM880",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x2 Corazones Ajustable",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM880.jpg",
  material: "Oro Goldfield"
},
{
  id: "LR492",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set X 2 Sol y Luna Ajustable",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR492.jpg",
  material: "Rodio - Zamak"
},
{
  id: "CB731",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Maxi Negra Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB731.jpg",
  material: "Oro Goldfield"
},
{
  id: "CB730",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Maxi Rosada Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB730.jpg",
  material: "Oro Goldfield"
},
{
  id: "CB729",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Maxi Morada Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB729.jpg",
  material: "Oro Goldfield"
},
{
  id: "CB727",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Maragritas",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB727.jpg",
  medidas: "17 cm + 5 cm Extensión",
  material: "Acero"
},
{
  id: "CB726",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Bolas Café y Dorado Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB726.jpg",
  material: "Oro Goldfield"
},
{
  id: "CB725",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Bolas Blanca y Dorada Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB725.jpg",
  material: "Oro Goldfield"
},
{
  id: "CB724",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Bolas Café y Dorado Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB724.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO161",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Mariposa verde",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO161.jpg",
  material: "Rodio"
},
{
  id: "RO160",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Mariposa Tornasol",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO160.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "RO159",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Mariposa roja",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO159.jpg",
  material: "Rodio"
},
{
  id: "FT341",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tulipán Morada",
  price: 39900,
  image: "images/productos/Bisuteria/Pulseras/FT341.jpg",
  medidas: "17 cm",
  material: "Rodio"
},
{
  id: "FT340",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tulipán Rosada",
  price: 39900,
  image: "images/productos/Bisuteria/Pulseras/FT340.jpg",
  medidas: "17 cm",
  material: "Rodio"
},
{
  id: "FT339",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tulipán roja",
  price: 39900,
  image: "images/productos/Bisuteria/Pulseras/FT339.jpg",
  medidas: "17 cm",
  material: "Rodio"
},
{
  id: "LL578",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Llamador de Angeles Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL578.jpg",
  material: "Oro Goldfield"
},
{
  id: "OX442",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Margarita set x3",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX442.jpg",
  material: "Oro Goldfield"
},
{
  id: "OX441",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Maxi Corazón Negro Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX441.jpg",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "NP520",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP520.jpg",
  material: "Rodio"
},
{
  id: "NP519",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Negra Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP519.jpg",
  material: "Rodio"
},
{
  id: "NP518",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP518.jpg",
  material: "Rodio"
},
{
  id: "MC937",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Brazalete",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC937.jpg",
  medidas: "7,5 cm",
  material: "Rodio"
},
{
  id: "CB723",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Grano",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB723.jpg",
  medidas: "18 cm + 5 cm Extensión",
  material: "Rodio",
  agotado: true
},
{
  id: "LL563",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Seleccion Colombia Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL563.jpg",
  material: "Rodio"
},
{
  id: "LL562",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Seleccion Colombia Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL562.jpg",
  material: "Rodio"
},
{
  id: "LL561",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Seleccion Colombia Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL561.jpg",
  material: "Rodio"
},
{
  id: "LL560",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Selección Colombia Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL560.jpg",
  material: "Rodio"
},
{
  id: "LL559",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Seleccion Colombia Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL559.jpg",
  material: "Rodio"
},
{
  id: "LL558",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable tricolor",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL558.jpg",
  material: "Rodio"
},
{
  id: "LL557",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable tricolor",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL557.jpg",
  material: "Rodio",
  agotado: true
},
{
  id: "LL556",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable tricolor",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL556.jpg",
  material: "Rodio"
},
{
  id: "LR487",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Colombia",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR487.jpg",
  material: "Rodio"
},
{
  id: "LR486",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Colombia",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR486.jpg",
  material: "Rodio"
},
{
  id: "LR485",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Colombia",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR485.jpg",
  material: "Rodio"
},
{
  id: "LM873",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Negro Ajustable",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM873.jpg",
  material: "Rodio"
},
{
  id: "LM872",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Azul Ajustable",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM872.jpg",
  material: "Rodio"
},
{
  id: "RO131",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Ojo Turco Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO131.jpg",
  material: "Fantasía"
},
{
  id: "RO130",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera protección Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO130.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO129",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Ojo turco y San Benito Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO129.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO128",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cruz y San Benito Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO128.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO127",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Ojo Turco y Ala Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO127.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO126",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x3 Ojo Turco Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO126.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO125",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x4 Perlas Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO125.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO124",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x4 Estrellas Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO124.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO123",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x 4 Murano Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO123.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO122",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x 4 Corazón Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO122.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO121",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Set x 4 Estrellas Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO121.jpg",
  material: "Oro Goldfield"
},
{
  id: "RO120",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera set x 4 Murano Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO120.jpg",
  material: "Oro Goldfield"
},
{
  id: "LL553",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito Pasador Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL553.jpg",
  material: "Rodio"
},
{
  id: "LL552",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Miguel y Cruz Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL552.jpg",
  material: "Rodio"
},
{
  id: "LL551",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Virgen y Cruz Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL551.jpg",
  material: "Rodio"
},
{
  id: "LL550",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito Pasador Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL550.jpg",
  material: "Rodio"
},
{
  id: "LL549",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito Pasador Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL549.jpg",
  material: "Rodio"
},
{
  id: "LL548",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito Ajustable Roja",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL548.jpg",
  material: "Rodio"
},
{
  id: "PC724",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Mini Aros",
  price: 9000,
  image: "images/productos/Bisuteria/Pulseras/PC724.jpg",
  medidas: "18 cm + 5 cm Extensión",
  material: "Rodio"
},
{
  id: "CB705",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Circones Dorados Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB705.jpg",
  material: "Rodio"
},
{
  id: "SP348",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Virgen Nacar",
  price: 35900,
  image: "images/productos/Bisuteria/Pulseras/SP348.jpg",
  medidas: "18,5 cm + 5 cm Extensión",
  material: "Rodio"
},
{
  id: "RO110",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito Azul Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO110.jpg",
  material: "Rodio"
},
{
  id: "RO109",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito Roja Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO109.jpg",
  material: "Rodio"
},
{
  id: "OX424",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Mamá Doble Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX424.jpg",
  material: "Oro Goldfield"
},
{
  id: "CB702",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Mamá Dije Perla Ajustable",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB702.jpg",
  material: "Oro Goldfield"
},
{
  id: "LL537",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Mamá y Corona Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL537.jpg",
  material: "Oro Goldfield"
},
{
  id: "LL536",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Mamá Doble Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL536.jpg",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "LL534",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Protección Mamá Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL534.jpg",
  material: "Oro Goldfield"
},
{
  id: "LL533",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Abuela Ajustable",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL533.jpg",
  material: "Oro Goldfield"
},
{
  id: "PC721",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Triclor Ajustable",
  price: 9000,
  image: "images/productos/Bisuteria/Pulseras/PC721.jpg",
  material: "Acero"
},
{
  id: "PG437",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Atlético Nacional Ajustable",
  price: 11900,
  image: "images/productos/Bisuteria/Pulseras/PG437.jpg",
  material: "Rodio - Oro Goldfield"
},
{
  id: "RO078",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Balón Ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO078.jpg",
  material: "Rodio"
},
{
  id: "NP489",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Guadalupe Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP489.jpg",
  material: "Rodio"
},
{
  id: "NP488",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Guadalupe verde Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP488.jpg",
  material: "Rodio"
},
{
  id: "NP487",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Guadalupe Cristal Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP487.jpg",
  material: "Rodio"
},
{
  id: "NP486",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Guadalupe Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP486.jpg",
  material: "Rodio"
},
{
  id: "NP485",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cruz y guadalupe Ajustable",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP485.jpg",
  material: "Rodio"
},
{
  id: "OX396",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Balin Dije Divino NIño Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX396.jpg",
  material: "Rodio"
},
{
  id: "OX395",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Balin Dije cruz Ajustable",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX395.jpg",
  material: "Rodio"
},
{
  id: "LR464",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazones Negros",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR464.jpg",
  medidas: "18 cm x 1,2 + 5 Extensión",
  material: "Rodio"
},
{
  id: "LR460",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Conchas",
  price: 19900,
  image: "images/productos/Bisuteria/Pulseras/LR460.jpg",
  medidas: "19cm x 1,3 cm + 5 Extensión",
  material: "Rodio"
},
{
  id: "LM850",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera corazón set x 3 Ajustable",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM850.jpg",
  material: "Oro Goldfield"
},
{
  id: "MC913",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Rosada x3 Ajustable",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC913.jpg",
  material: "Oro Goldfield"
},
{
  id: "LM846",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol roja",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM846.jpg",
  medidas: "19 cm + 6 extensión",
  material: "Rodio"
},
{
  id: "LM843",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM843.jpg",
  medidas: "17 cm + 5 cm extensión",
  material: "Rodio"
},
{
  id: "RO051",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Trébol Rojo",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO051.jpg",
  material: "Rodio"
},
{
  id: "RO050",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Trébol Negro",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO050.jpg",
  material: "Rodio"
},
{
  id: "LL508",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera G",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL508.jpg",
  medidas: "18 cm x 4 mm + extensor 4 cm",
  material: "Rodio",
  agotado: true
},
{
  id: "CB681",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol blanca",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB681.jpg",
  material: "Rodio"
},
{
  id: "CB680",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol negra",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB680.jpg",
  material: "Rodio"
},
{
  id: "MC901",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Dije Sol Ajustable",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC901.jpg",
  medidas: "2,4 CM X 1,9 CM",
  material: "Rodio"
},
{
  id: "AC429",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Set x2",
  price: 10900,
  image: "images/productos/Bisuteria/Pulseras/AC429.jpg",
  material: "Fantasía",
  agotado: true
},
{
  id: "AC428",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón set x 2",
  price: 10900,
  image: "images/productos/Bisuteria/Pulseras/AC428.jpg",
  material: "Oro Goldfield"
},
{
  id: "CB677",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Ojo Turco Set x2",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB677.jpg",
  material: "Oro Goldfield"
},
{
  id: "CB676",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cruz Set x2",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB676.jpg",
  material: "Acero",
  agotado: true
},
{
  id: "CB675",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Set x2",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB675.jpg",
  material: "Acero"
},
{
  id: "LL504",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Corazón Set x 2",
  price: 13900,
  image: "images/productos/Bisuteria/Pulseras/LL504.jpg",
  material: "Acero"
},
{
  id: "LM836",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Trébol Dorado",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM836.jpg",
  medidas: "17 cm + 5 cm extensión",
  material: "Rodio"
},
{
  id: "LM835",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Trébol Rojo",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM835.jpg",
  medidas: "17 cm + 5 cm extensión",
  material: "Rodio"
},
{
  id: "LM833",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Trébol Negro",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM833.jpg",
  medidas: "17 cm + 5 cm extensión",
  material: "Rodio",
  agotado: true
},
{
  id: "CB671",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera 7 chakras Negra, el color de la piedra puede variar",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB671.jpg",
  material: "Rodio"
},
{
  id: "CB670",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera 7 chakras Roja, el color de la piedra puede variar",
  price: 15500,
  image: "images/productos/Bisuteria/Pulseras/CB670.jpg",
  material: "Rodio"
},
{
  id: "TS263",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera amatista ajustable",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS263.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS264",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera cuarzo rosa ajustable",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS264.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS265",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera turquesa ajustable",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS265.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS266",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ónix ajustable",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS266.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS267",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera cuarzo cristal ajustable",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS267.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS268",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera jade ajustable",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS268.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS286",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Ojo de Tigre",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS286.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS287",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Lluvia de oro",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS287.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS288",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Ojo de tigre",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS288.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS285",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable Lluvia de oro",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS285.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS205",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Ónix (Ajustable)",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS205.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS204",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tejida cuarzos (Ajustable)",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS204.jpg",
  medidas: "8mm",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "TS203",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Jade (Ajustable)",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS203.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS202",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Amatista (Ajustable)",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS202.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS201",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cuarzo rosa (Ajustable)",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS201.jpg",
  material: "Oro Goldfield"
},
{
  id: "TS200",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Turquesa (Ajustable)",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS200.jpg",
  material: "Oro Goldfield"
},
{
  id: "DR079",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera acrilica Blanca",
  price: 49900,
  image: "images/productos/Bisuteria/Pulseras/DR079.jpg",
  material: "Acrílico"
},
{
  id: "DR077",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera acrilica negra",
  price: 49900,
  image: "images/productos/Bisuteria/Pulseras/DR077.jpg",
  material: "Acrílico"
},
{
  id: "DR078",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera acrilica Rosada",
  price: 49900,
  image: "images/productos/Bisuteria/Pulseras/DR078.jpg",
  material: "Acrílico"
},
{
  id: "RO013",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera virgen guadalupe y medalla milagrosa",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO013.jpg",
  medidas: "18cm",
  material: "Rodio"
},
{
  id: "RO014",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera protección san benito",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO014.jpg",
  medidas: "18cm + 5 ext.",
  material: "Rodio"
},
{
  id: "RO012",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera protección san benito",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO012.jpg",
  medidas: "18cm + 5 ext.",
  material: "Rodio"
},
{
  id: "RO011",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera virgen guadalupe y medalla milagrosa",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO011.jpg",
  medidas: "18cm",
  material: "Rodio"
},
{
  id: "NP462",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera dije Estrella de Mar",
  price: 30000,
  image: "images/productos/Bisuteria/Pulseras/NP462.jpg",
  medidas: "18 cm + 5 extensión",
  material: "Rodio"
},
{
  id: "RO007",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol rojo",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO007.jpg",
  medidas: "18cm + 5 cm extensión",
  material: "Rodio"
},
{
  id: "RO005",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol rojo",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO005.jpg",
  medidas: "17,5 cm + 5 cm extensión",
  material: "Rodio"
},
{
  id: "RO002",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trebol dorada",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO002.jpg",
  medidas: "17.5 cm + 5 cm extensión",
  material: "Rodio"
},
{
  id: "RO001",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol dorada",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO001.jpg",
  medidas: "18 cm + 5 cm extensión",
  material: "Rodio"
},
{
  id: "RO003",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol blanco",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/RO003.jpg",
  medidas: "5 cm de extensión",
  material: "Rodio"
},
{
  id: "LM788",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera caracol",
  price: 21000,
  image: "images/productos/Bisuteria/Pulseras/LM788.jpg",
  medidas: "18cm + 5 cm extensión",
  material: "Rodio"
},
{
  id: "MC853",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San Benito dorado y plateado",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC853.jpg",
  material: "Rodio"
},
{
  id: "MC852",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera San benito dorada",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC852.jpg",
  material: "Rodio"
},
{
  id: "OX294",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras corazón rojo",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX294.jpg",
  material: "Rodio"
},
{
  id: "OX295",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras corazón negro",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX295.jpg",
  material: "Rodio"
},
{
  id: "MC846",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol blanco y negro",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC846.jpg",
  material: "Rodio"
},
{
  id: "MC829",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera negra trébol",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC829.jpg",
  medidas: "18 cm + 5 cm extensión",
  material: "Rodio"
},
{
  id: "MC826",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera set x3 Margaritas",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC826.jpg",
  material: "Oro Goldfield"
},
{
  id: "PC669",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Set x 2 pulseras para compartir dije avión",
  price: 9000,
  image: "images/productos/Bisuteria/Pulseras/PC669.jpg",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "MC807",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol negro",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC807.jpg",
  medidas: "18 cm + 5 cm extensión",
  material: "Acero"
},
{
  id: "OX292",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Uriel, energías positivas",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX292.jpg",
  material: "Oro Goldfield"
},
{
  id: "OX291",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Jofiel Sabiduría, comprensión e inspiración",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX291.jpg",
  material: "Oro Goldfield"
},
{
  id: "OX290",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Zadquiel, Alegría y libertad",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX290.jpg",
  material: "Oro Goldfield"
},
{
  id: "OX289",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Rafael, Salud",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX289.jpg",
  material: "Oro Goldfield"
},
{
  id: "OX288",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Gabriel, Mensajero de Dios",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX288.jpg",
  material: "Oro Goldfield"
},
{
  id: "OX287",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Miguel, protección, la fuerza y la fe",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX287.jpg",
  material: "Oro Goldfield"
},
{
  id: "OX286",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera arcángel Chamuel, Amor y unión",
  price: 18000,
  image: "images/productos/Bisuteria/Pulseras/OX286.jpg",
  material: "Oro Goldfield"
},
{
  id: "MC775",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol verde",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC775.jpg",
  medidas: "17 cm + 5 cm extensión",
  material: "Acero"
},
{
  id: "MC763",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera trébol roja",
  price: 27000,
  image: "images/productos/Bisuteria/Pulseras/MC763.jpg",
  medidas: "17 cm + 5 cm extensión",
  material: "Acero"
},
{
  id: "OR051",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Trebol negra ajustable",
  price: 24000,
  image: "images/productos/Bisuteria/Pulseras/OR051.jpg",
  material: "Rodio"
},
{
  id: "TS278",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS278.jpg",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "TS277",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ajustable",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS277.jpg",
  material: "Oro Goldfield",
  agotado: true
},
{
  id: "TS215",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tejida 7 chakras (Ajustable)",
  price: 5400,
  image: "images/productos/Bisuteria/Pulseras/TS215.jpg",
  medidas: "7mm",
  material: "Oro Goldfield"
},
{
  id: "GP362",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera ojo turco ajustable",
  price: 7100,
  image: "images/productos/Bisuteria/Pulseras/GP362.jpg",
  material: "Oro Goldfield"
},
{
  id: "PC607",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera cuarzo rosa ajustable",
  price: 9000,
  image: "images/productos/Bisuteria/Pulseras/PC607.jpg",
  material: "Oro Goldfield"
},
{
  id: "TP336",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera tejida 7 nudos (Ajustable)",
  price: 4200,
  image: "images/productos/Bisuteria/Pulseras/TP336.jpg",
  medidas: "3mm",
  material: "Fantasía"
},
{
  id: "12055P-JXC",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario",
  price: 320000,
  image: "images/productos/Bisuteria/Rosarios/12055P-JXC.jpg",
  medidas: "60 cm x 4 mm",
  material: "Plata Ley 925"
},
{
  id: "12045P-JOX",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario Virgen María",
  price: 170000,
  image: "images/productos/Bisuteria/Rosarios/12045P-JOX.jpg",
  medidas: "41 cm + 4 Extensión",
  material: "Plata Ley 925"
},
{
  id: "12000P-JOX",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario",
  price: 170000,
  image: "images/productos/Bisuteria/Rosarios/12000P-JOX.jpg",
  medidas: "48 cm x 4 mm",
  material: "Plata Ley 925"
},
{
  id: "10933P-JOT",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario",
  price: 130000,
  image: "images/productos/Bisuteria/Rosarios/10933P-JOT.jpg",
  medidas: "44.5 cm x 2mm",
  material: "Plata Ley 925"
},
{
  id: "SP396",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario San Benito",
  price: 35900,
  image: "images/productos/Bisuteria/Rosarios/SP396.jpg",
  medidas: "64 cm x 5 mm",
  material: "Acero"
},
{
  id: "MC961",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario Guadalupe",
  price: 27000,
  image: "images/productos/Bisuteria/Rosarios/MC961.jpg",
  medidas: "50 cm x 3 mm",
  material: "Acero"
},
{
  id: "MC960",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario San Benito",
  price: 27000,
  image: "images/productos/Bisuteria/Rosarios/MC960.jpg",
  medidas: "54 cm x 3 mm",
  material: "Acero"
},
{
  id: "NP529",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario San Benito",
  price: 30000,
  image: "images/productos/Bisuteria/Rosarios/NP529.jpg",
  medidas: "64 cm x 5 mm",
  material: "Acero"
},
{
  id: "NP528",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario San Benito Dorado",
  price: 30000,
  image: "images/productos/Bisuteria/Rosarios/NP528.jpg",
  medidas: "53 cm x 3 mm",
  material: "Acero"
},
{
  id: "MC959",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario San Benito Tricolor",
  price: 27000,
  image: "images/productos/Bisuteria/Rosarios/MC959.jpg",
  medidas: "56 cm x 3 mm",
  material: "Rodio"
},
{
  id: "MC914",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario Dorado",
  price: 27000,
  image: "images/productos/Bisuteria/Rosarios/MC914.jpg",
  medidas: "67 cm x 6 mm",
  material: "Rodio"
},
{
  id: "RO070",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario Murano Negro",
  price: 24000,
  image: "images/productos/Bisuteria/Rosarios/RO070.jpg",
  medidas: "63 cm x 4 mm",
  material: "Rodio"
},
{
  id: "OR011",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Camandula",
  price: 24000,
  image: "images/productos/Bisuteria/Rosarios/OR011.jpg",
  medidas: "52 cm",
  material: "Acero"
},
{
  id: "CB756",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Corazones",
  price: 15500,
  image: "images/productos/Bisuteria/Tobilleras/CB756.jpg",
  medidas: "21,5 cm + 5 Extensión",
  material: "Rodio"
},
{
  id: "CB755",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Eslabones",
  price: 15500,
  image: "images/productos/Bisuteria/Tobilleras/CB755.jpg",
  medidas: "21 cm + 5 Extensión",
  material: "Rodio"
},
{
  id: "CB754",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Militar",
  price: 15500,
  image: "images/productos/Bisuteria/Tobilleras/CB754.jpg",
  medidas: "21 cm + 5 Extensión",
  material: "Rodio"
},
{
  id: "CB753",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Cubana",
  price: 15500,
  image: "images/productos/Bisuteria/Tobilleras/CB753.jpg",
  medidas: "21 cm + 5 Extensión",
  material: "Rodio"
},
{
  id: "CB752",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Militar",
  price: 15500,
  image: "images/productos/Bisuteria/Tobilleras/CB752.jpg",
  medidas: "21 cm + 5 Extensión",
  material: "Rodio"
},
{
  id: "CB751",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera",
  price: 15500,
  image: "images/productos/Bisuteria/Tobilleras/CB751.jpg",
  medidas: "21,5 cm + 5 Extensión",
  material: "Rodio"
},
{
  id: "CB750",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Serpiente",
  price: 15500,
  image: "images/productos/Bisuteria/Tobilleras/CB750.jpg",
  medidas: "21 cm + 5 Extensión",
  material: "Rodio"
},
{
  id: "AC432",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Trébol Rojo",
  price: 10900,
  image: "images/productos/Bisuteria/Tobilleras/AC432.jpg",
  medidas: "21 cm + 7 extensión",
  material: "Rodio"
},
{
  id: "PG447",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Mariposa y hoja",
  price: 11900,
  image: "images/productos/Bisuteria/Tobilleras/PG447.jpg",
  medidas: "24 cm",
  material: "Acero"
},
{
  id: "PG445",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Cruz",
  price: 11900,
  image: "images/productos/Bisuteria/Tobilleras/PG445.jpg",
  medidas: "24 cm",
  material: "Acero"
},
{
  id: "NP500",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Estrella de Mar",
  price: 30000,
  image: "images/productos/Bisuteria/Tobilleras/NP500.jpg",
  material: "Oro Goldfield"
},
{
  id: "12002P-JOH",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Veneciana",
  price: 50000,
  image: "images/productos/Bisuteria/Tobilleras/12002P-JOH.jpg",
  medidas: "23 cm x 1 mm",
  description: "Balín 1,5 mm",
  material: "Plata Ley 925"
},
{
  id: "12052P-JOV",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Gucci",
  price: 150000,
  image: "images/productos/Bisuteria/Tobilleras/12052P-JOV.jpg",
  medidas: "24 cm x 4,5 mm",
  material: "Plata Ley 925"
},
{
  id: "30404-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Balín Italy",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/30404-JOG.jpg",
  medidas: "4 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "30406-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Balín Italy",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/30406-JOG.jpg",
  medidas: "6 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "30408-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Balín Italy",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/30408-JOH.jpg",
  medidas: "8 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "33032-JOC",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo a presión",
  price: 25000,
  image: "images/productos/Bisuteria/Aretes/33032-JOC.jpg",
  medidas: "2 mm",
  description: "Broche a presión",
  material: "Oro Laminado 18K"
},
{
  id: "33033-JOC",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos a presión",
  price: 25000,
  image: "images/productos/Bisuteria/Aretes/33033-JOC.jpg",
  medidas: "3 mm",
  description: "Broche a presión",
  material: "Oro Laminado 18K"
},
{
  id: "33034-JOE",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos balín",
  price: 35000,
  image: "images/productos/Bisuteria/Aretes/33034-JOE.jpg",
  medidas: "4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34011-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo balín",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/34011-JOF.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34012-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos balín",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/34012-JOG.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "31053BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Milagrosa",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31053BD-JOQ.jpg",
  medidas: "6 mm x 8 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "31037BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Verde",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31037BD-JOQ.jpg",
  medidas: "6 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "31058DB-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Virgen del Carmen Clásica",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31058DB-JOQ.jpg",
  medidas: "6 mm x 9 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34313-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Oso Cristal",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/34313-JOH.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "30070-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Cristal",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/30070-JOQ.jpg",
  medidas: "24 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30069-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Wave",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/30069-JOK.jpg",
  medidas: "18 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30068-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Élite",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/30068-JOH.jpg",
  medidas: "12 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30078-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Cristal",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/30078-JOG.jpg",
  medidas: "3 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30079-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Cristal",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/30079-JOH.jpg",
  medidas: "4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30077-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Esmerald",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/30077-JOJ.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30076-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Esmerald",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/30076-JOH.jpg",
  medidas: "4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30072-JOL",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Dalia",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/30072-JOL.jpg",
  medidas: "1,5 cm",
  material: "Oro Laminado 18K"
},
{
  id: "30073-JON",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Circón Verde",
  price: 75000,
  image: "images/productos/Bisuteria/Aretes/30073-JON.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "30064-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Amare",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/30064-JOJ.jpg",
  medidas: "12 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30062-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Codice",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/30062-JOK.jpg",
  medidas: "15 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30061-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Hexa Grial",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/30061-JOJ.jpg",
  medidas: "13 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30059-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Avalon",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/30059-JOH.jpg",
  medidas: "1 cm",
  material: "Oro Laminado 18K"
},
{
  id: "30057-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Coeur",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/30057-JOK.jpg",
  medidas: "1,7 cm",
  material: "Oro Laminado 18K"
},
{
  id: "31112BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Seguridad",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31112BD-JOQ.jpg",
  medidas: "8 mm x 5 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "31110BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Seguridad",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31110BD-JOQ.jpg",
  medidas: "4 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "31093BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Seguridad",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31093BD-JOQ.jpg",
  medidas: "7 mm x 6 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "30054-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Regina",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/30054-JOG.jpg",
  medidas: "7 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30055-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Love CTR",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/30055-JOG.jpg",
  medidas: "5 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "31026BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Doré",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31026BD-JOQ.jpg",
  medidas: "3 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "31116BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Guadalupe",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31116BD-JOQ.jpg",
  medidas: "8 mm x 6 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "31117BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos María Auxiliadora",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31117BD-JOQ.jpg",
  medidas: "8 mm x 6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "31109BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo San Benito",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31109BD-JOQ.jpg",
  medidas: "8 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "31111BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo San Miguel",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31111BD-JOQ.jpg",
  medidas: "7 mm x 6 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "31036BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Verde",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31036BD-JOQ.jpg",
  medidas: "4 mm",
  description: "Rosca de seguridad",
  material: "Oro Laminado 18K"
},
{
  id: "31084BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo rosca de seguridad",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31084BD-JOQ.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "31083BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo rosca de seguridad",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31083BD-JOQ.jpg",
  medidas: "5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "31025BD-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo rosca de seguridad",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/31025BD-JOQ.jpg",
  medidas: "4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30052-JOL",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos Balón de Fútbol",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/30052-JOL.jpg",
  medidas: "5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30369-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Aretes Corazón Mini",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/30369-JOH.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "30044-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Corazón Crystal",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/30044-JOH.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "30049-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga CC",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/30049-JOK.jpg",
  medidas: "13 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30048-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Clover Luxe",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/30048-JOK.jpg",
  medidas: "12 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30046-JOL",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Amore Halo",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/30046-JOL.jpg",
  medidas: "9 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30027-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Link GC",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/30027-JOK.jpg",
  medidas: "12 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30022-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Parallel Circones",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/30022-JOK.jpg",
  medidas: "1,4 cm",
  material: "Oro Laminado 18K"
},
{
  id: "30013-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Facet",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/30013-JOH.jpg",
  medidas: "1,6 cm",
  material: "Oro Laminado 18K"
},
{
  id: "30007-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Coeur París",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/30007-JOG.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34208-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Gucci",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/34208-JOF.jpg",
  medidas: "3 mm x 4 mm",
  description: "Broche a presión",
  material: "Oro Laminado 18K"
},
{
  id: "34215-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete calavera",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/34215-JOF.jpg",
  medidas: "6 mm x 5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34060-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos alas",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/34060-JOH.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34036-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Gucci",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/34036-JOG.jpg",
  medidas: "7 mm x 5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "35012-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Amour",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/35012-JOQ.jpg",
  medidas: "6 mm",
  description: "Rosca de seguridad, base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "35011-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Roya",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/35011-JOQ.jpg",
  medidas: "5 mm",
  description: "Rosca de seguridad, base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "35009-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Amour",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/35009-JOQ.jpg",
  medidas: "6 mm",
  description: "Rosca de seguridad, base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "35008-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Amour",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/35008-JOQ.jpg",
  medidas: "5 mm",
  description: "Rosca de seguridad, base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "35007-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Amour",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/35007-JOQ.jpg",
  medidas: "4 mm",
  description: "Rosca de seguridad, base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "35005-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Star",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/35005-JOQ.jpg",
  medidas: "5 mm",
  description: "Rosca de seguridad, base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "35002-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo rosca de seguridad",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/35002-JOQ.jpg",
  medidas: "6 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "35001-JOQ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo rosca de seguridad",
  price: 90000,
  image: "images/productos/Bisuteria/Aretes/35001-JOQ.jpg",
  medidas: "5 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "30040-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Royal Green",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/30040-JOK.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30090-JOP",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Move",
  price: 85000,
  image: "images/productos/Bisuteria/Aretes/30090-JOP.jpg",
  medidas: "12 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30037-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Cat Mini",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/30037-JOG.jpg",
  medidas: "6 mm x 4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30051-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Corazón Sol",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/30051-JOJ.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "30021-JOR",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Pavé Circle",
  price: 100000,
  image: "images/productos/Bisuteria/Aretes/30021-JOR.jpg",
  medidas: "1,4 cm",
  material: "Oro Laminado 18K"
},
{
  id: "30009-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Árbol de la Vida",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/30009-JOJ.jpg",
  medidas: "1 cm",
  material: "Oro Laminado 18K"
},
{
  id: "34306-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga Clip",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/34306-JOK.jpg",
  medidas: "1,5 cm",
  material: "Oro Laminado 18K"
},
{
  id: "30003-JOC",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo mini Double",
  price: 25000,
  image: "images/productos/Bisuteria/Aretes/30003-JOC.jpg",
  medidas: "2 mm x 3,5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "60000-JOK",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto dije y aretes",
  price: 70000,
  image: "images/productos/Bisuteria/Conjuntos/60000-JOK.jpg",
  medidas: "Dije 7 mm x 5 mm",
  description: "No incluye cadena",
  material: "Oro Laminado 18K"
},
{
  id: "60001-JOK",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto dije y aretes",
  price: 70000,
  image: "images/productos/Bisuteria/Conjuntos/60001-JOK.jpg",
  medidas: "Aretes 6 mm, dije 8 mm",
  description: "No incluye cadena",
  material: "Oro Laminado 18K"
},
{
  id: "35672-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/35672-JOG.jpg",
  medidas: "1,4 cm x 1,1 cm",
  material: "Oro Laminado 18K"
},
{
  id: "34136-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga G",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/34136-JOH.jpg",
  medidas: "1,8 cm",
  material: "Oro Laminado 18K"
},
{
  id: "35616-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga textura",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/35616-JOG.jpg",
  medidas: "1,2 cm",
  material: "Oro Laminado 18K"
},
{
  id: "34132-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/34132-JOK.jpg",
  medidas: "2,2 cm",
  material: "Oro Laminado 18K"
},
{
  id: "34259-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Virgen de Guadalupe",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/34259-JOH.jpg",
  medidas: "9 mm x 5 mm",
  description: "No incluye topo",
  material: "Oro Laminado 18K"
},
{
  id: "34250-JOL",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Avión",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/34250-JOL.jpg",
  medidas: "1 cm",
  material: "Oro Laminado 18K"
},
{
  id: "34249-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete herradura",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/34249-JOJ.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34254-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete trébol",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/34254-JOJ.jpg",
  medidas: "1 cm",
  description: "No incluye earcuff",
  material: "Oro Laminado 18K"
},
{
  id: "63002-JOQ",
  category: "bisuteria",
  subcategory: "Conjuntos",
  name: "Conjunto dije y aretes trébol",
  price: 90000,
  image: "images/productos/Bisuteria/Conjuntos/63002-JOQ.jpg",
  medidas: "1 cm",
  description: "Incluye dije y aretes",
  material: "Oro Laminado 18K"
},
{
  id: "34237-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete gota",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/34237-JOJ.jpg",
  medidas: "1,2 cm x 9 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34206-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Bright Star",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/34206-JOH.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "33542-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos mini Virgen del Carmen",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/33542-JOH.jpg",
  medidas: "9 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34244-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Tri Balín",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/34244-JOH.jpg",
  medidas: "7 mm x 2 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34241-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Celtic",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/34241-JOK.jpg",
  medidas: "1 cm x 1,1 cm",
  material: "Oro Laminado 18K"
},
{
  id: "34240-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Ancla de Mar",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/34240-JOK.jpg",
  medidas: "9 mm x 7 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34063-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete San Miguel Arcángel",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/34063-JOK.jpg",
  medidas: "9 mm x 7 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34230-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Arete Espíritu Santo",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/34230-JOH.jpg",
  medidas: "1 cm x 6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34210-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo palmera",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/34210-JOJ.jpg",
  medidas: "1 cm x 9 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34207-JOI",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo hoja",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/34207-JOI.jpg",
  medidas: "8 mm x 5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34212-JOH",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topo Triángulo",
  price: 50000,
  image: "images/productos/Bisuteria/Aretes/34212-JOH.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34168-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos cara feliz",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/34168-JOG.jpg",
  medidas: "5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "33023N-JOF",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos corazón circón negro",
  price: 40000,
  image: "images/productos/Bisuteria/Aretes/33023N-JOF.jpg",
  medidas: "4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34171-JON",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Candonga lisa",
  price: 75000,
  image: "images/productos/Bisuteria/Aretes/34171-JON.jpg",
  medidas: "2,6 cm",
  material: "Oro Laminado 18K"
},
{
  id: "34146-JOK",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos sol",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/34146-JOK.jpg",
  medidas: "7 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34122-JOG",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos triángulo",
  price: 45000,
  image: "images/productos/Bisuteria/Aretes/34122-JOG.jpg",
  medidas: "5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34156-JOL",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos perro inflable",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/34156-JOL.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34162-JOL",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos tortugas",
  price: 70000,
  image: "images/productos/Bisuteria/Aretes/34162-JOL.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "34098-JOJ",
  category: "bisuteria",
  subcategory: "Aretes",
  name: "Topos rayo",
  price: 60000,
  image: "images/productos/Bisuteria/Aretes/34098-JOJ.jpg",
  medidas: "9 mm",
  material: "Oro Laminado 18K"
},
{
  id: "45208-JXC",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana Cruzada",
  price: 320000,
  image: "images/productos/Bisuteria/Collares/45208-JXC.jpg",
  medidas: "65 cm x 2,4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "45173-JOZ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Escalera con Destellos IT",
  price: 230000,
  image: "images/productos/Bisuteria/Collares/45173-JOZ.jpg",
  medidas: "65 cm x 2,1 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "47033-JXH",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar Italy",
  price: 580000,
  image: "images/productos/Bisuteria/Collares/47033-JXH.jpg",
  medidas: "60 cm x 4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "45003-JXG",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar IT",
  price: 480000,
  image: "images/productos/Bisuteria/Collares/45003-JXG.jpg",
  medidas: "65 cm",
  material: "Oro Laminado 18K"
},
{
  id: "45883-JXG",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena China IT",
  price: 500000,
  image: "images/productos/Bisuteria/Collares/45883-JXG.jpg",
  medidas: "65 cm x 5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "46889-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena China IT",
  price: 280000,
  image: "images/productos/Bisuteria/Collares/46889-JXB.jpg",
  medidas: "60 cm x 2 mm",
  material: "Oro Laminado 18K"
},
{
  id: "46882-JOZ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena China IT",
  price: 230000,
  image: "images/productos/Bisuteria/Collares/46882-JOZ.jpg",
  medidas: "50 cm x 2 mm",
  material: "Oro Laminado 18K"
},
{
  id: "45159-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubanita IT",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/45159-JOY.jpg",
  medidas: "60 cm x 1,5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "45049-JOZ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Singapur IT",
  price: 230000,
  image: "images/productos/Bisuteria/Collares/45049-JOZ.jpg",
  medidas: "60 cm x 1,7 mm",
  material: "Oro Laminado 18K"
},
{
  id: "45048-JOZ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Singapur IT",
  price: 230000,
  image: "images/productos/Bisuteria/Collares/45048-JOZ.jpg",
  medidas: "65 cm x 1,7 mm",
  material: "Oro Laminado 18K"
},
{
  id: "45153-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubanita",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/45153-JOY.jpg",
  medidas: "65 cm x 1,5 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "46033-JXG",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cuban Link IT",
  price: 460000,
  image: "images/productos/Bisuteria/Collares/46033-JXG.jpg",
  medidas: "65 cm x 3,1 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45038-JXG",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Gucci IT",
  price: 460000,
  image: "images/productos/Bisuteria/Collares/45038-JXG.jpg",
  medidas: "65 cm x 2,5 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45068-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Marine IT",
  price: 280000,
  image: "images/productos/Bisuteria/Collares/45068-JXB.jpg",
  medidas: "65 cm x 2,8 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45063-JOU",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Marine IT",
  price: 140000,
  image: "images/productos/Bisuteria/Collares/45063-JOU.jpg",
  medidas: "65 cm x 1,5 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45223-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Tube Gold IT",
  price: 280000,
  image: "images/productos/Bisuteria/Collares/45223-JXB.jpg",
  medidas: "65 cm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45213-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Tube Rose IT",
  price: 280000,
  image: "images/productos/Bisuteria/Collares/45213-JXB.jpg",
  medidas: "65 cm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45043-JXJ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Barril Italy",
  price: 900000,
  image: "images/productos/Bisuteria/Collares/45043-JXJ.jpg",
  medidas: "65 cm x 3 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45313-JXG",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Station Redonda 3C IT",
  price: 460000,
  image: "images/productos/Bisuteria/Collares/45313-JXG.jpg",
  medidas: "65 cm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "46883-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena China IT",
  price: 280000,
  image: "images/productos/Bisuteria/Collares/46883-JXB.jpg",
  medidas: "65 cm x 2 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45078-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubana Continua IT",
  price: 280000,
  image: "images/productos/Bisuteria/Collares/45078-JXB.jpg",
  medidas: "65 cm x 2,3 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45303-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar Espaciada Ovalada Italy IT",
  price: 280000,
  image: "images/productos/Bisuteria/Collares/45303-JXB.jpg",
  medidas: "65 cm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45308-JXF",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar Ovalada Italy IT",
  price: 400000,
  image: "images/productos/Bisuteria/Collares/45308-JXF.jpg",
  medidas: "65 cm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45028-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Arrow IT",
  price: 320000,
  image: "images/productos/Bisuteria/Collares/45028-JXB.jpg",
  medidas: "65 cm x 2,6 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45128-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena 3x1 IT",
  price: 280000,
  image: "images/productos/Bisuteria/Collares/45128-JXB.jpg",
  medidas: "65 cm x 2,9 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45888-JXC",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena China IT",
  price: 320000,
  image: "images/productos/Bisuteria/Collares/45888-JXC.jpg",
  medidas: "65 cm x 3 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "43058-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Aros",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/43058-JOY.jpg",
  medidas: "65 cm x 3 mm",
  material: "Oro Laminado 18K"
},
{
  id: "43788-JXF",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena tejido franco",
  price: 400000,
  image: "images/productos/Bisuteria/Collares/43788-JXF.jpg",
  medidas: "65 cm x 3,5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "42108-JOW",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena espejo cuadrada",
  price: 160000,
  image: "images/productos/Bisuteria/Collares/42108-JOW.jpg",
  medidas: "65 cm x 2,5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "44768-JXC",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena veneciana gruesa",
  price: 320000,
  image: "images/productos/Bisuteria/Collares/44768-JXC.jpg",
  medidas: "65 cm x 2 mm",
  material: "Oro Laminado 18K"
},
{
  id: "44853-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena tejido cordón",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/44853-JOY.jpg",
  medidas: "65 cm x 1,5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "44833-JOT",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena tejido serpiente plana",
  price: 130000,
  image: "images/productos/Bisuteria/Collares/44833-JOT.jpg",
  medidas: "65 cm x 1 mm",
  material: "Oro Laminado 18K"
},
{
  id: "43833-JXB",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena tejido serpiente",
  price: 280000,
  image: "images/productos/Bisuteria/Collares/43833-JXB.jpg",
  medidas: "65 cm x 1 mm",
  material: "Oro Laminado 18K"
},
{
  id: "44468-JXC",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena continua",
  price: 320000,
  image: "images/productos/Bisuteria/Collares/44468-JXC.jpg",
  medidas: "65 cm x 4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "44068-JXF",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena tejido serpiente",
  price: 400000,
  image: "images/productos/Bisuteria/Collares/44068-JXF.jpg",
  medidas: "65 cm x 4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "44293-JOW",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena tejido escalera plana",
  price: 160000,
  image: "images/productos/Bisuteria/Collares/44293-JOW.jpg",
  medidas: "65 cm x 2 mm",
  material: "Oro Laminado 18K"
},
{
  id: "41413-JOU",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena cubana destellos",
  price: 140000,
  image: "images/productos/Bisuteria/Collares/41413-JOU.jpg",
  medidas: "60 cm x 2 mm",
  material: "Oro Laminado 18K"
},
{
  id: "43033-JOX",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena cubana sol",
  price: 170000,
  image: "images/productos/Bisuteria/Collares/43033-JOX.jpg",
  medidas: "65 cm x 1 mm",
  material: "Oro Laminado 18K"
},
{
  id: "45101-JOQ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Veneciana IT",
  price: 90000,
  image: "images/productos/Bisuteria/Collares/45101-JOQ.jpg",
  medidas: "45 cm x 0,64 mm",
  material: "Oro Laminado 18K"
},
{
  id: "45172-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Escalera con Destellos IT",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/45172-JOY.jpg",
  medidas: "50 cm x 2,1 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45150-JOT",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubanita IT",
  price: 130000,
  image: "images/productos/Bisuteria/Collares/45150-JOT.jpg",
  medidas: "40 cm x 1,5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "47031-JXG",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar Italy",
  price: 480000,
  image: "images/productos/Bisuteria/Collares/47031-JXG.jpg",
  medidas: "45 cm x 4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "47001-JOR",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Caracol Plana",
  price: 100000,
  image: "images/productos/Bisuteria/Collares/47001-JOR.jpg",
  medidas: "45 cm x 1,8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "40012-JOS",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Gargantilla Sparkle Heart",
  price: 120000,
  image: "images/productos/Bisuteria/Collares/40012-JOS.jpg",
  medidas: "45 cm, dije 12 mm",
  material: "Oro Laminado 18K"
},
{
  id: "45001-JXD",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Militar Italy IT",
  price: 350000,
  image: "images/productos/Bisuteria/Collares/45001-JXD.jpg",
  medidas: "45 cm",
  material: "Oro Laminado 18K"
},
{
  id: "45046-JOR",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Singapur IT",
  price: 100000,
  image: "images/productos/Bisuteria/Collares/45046-JOR.jpg",
  medidas: "45 cm x 1,2 mm",
  material: "Oro Laminado 18K"
},
{
  id: "45156-JOQ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubanita IT",
  price: 90000,
  image: "images/productos/Bisuteria/Collares/45156-JOQ.jpg",
  medidas: "45 cm x 1 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45151-JOU",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Cubanita",
  price: 140000,
  image: "images/productos/Bisuteria/Collares/45151-JOU.jpg",
  medidas: "45 cm x 1,5 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45121-JOR",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena 3x1 IT",
  price: 100000,
  image: "images/productos/Bisuteria/Collares/45121-JOR.jpg",
  medidas: "45 cm x 1,6 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45006B-JOR",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena con dije trébol blanco",
  price: 100000,
  image: "images/productos/Bisuteria/Collares/45006B-JOR.jpg",
  medidas: "42 cm + extensión",
  material: "Oro Laminado 18K"
},
{
  id: "45036-JXC",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Gucci IT",
  price: 320000,
  image: "images/productos/Bisuteria/Collares/45036-JXC.jpg",
  medidas: "45 cm x 2,5 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45331-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Lazito IT",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/45331-JOY.jpg",
  medidas: "45 cm x 1,3 mm",
  material: "Oro Laminado 18K"
},
{
  id: "45041-JXH",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Barril Italy",
  price: 560000,
  image: "images/productos/Bisuteria/Collares/45041-JXH.jpg",
  medidas: "45 cm x 3 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "46881-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena China IT",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/46881-JOY.jpg",
  medidas: "45 cm x 2 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45881-JXD",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena China IT",
  price: 350000,
  image: "images/productos/Bisuteria/Collares/45881-JXD.jpg",
  medidas: "45 cm x 5 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45026-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Arrow IT",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/45026-JOY.jpg",
  medidas: "45 cm x 2,6 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45066-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Marine IT",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/45066-JOY.jpg",
  medidas: "45 cm x 2,8 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45006N-JOR",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena con dije trébol negro",
  price: 100000,
  image: "images/productos/Bisuteria/Collares/45006N-JOR.jpg",
  medidas: "42 cm + extensión",
  material: "Oro Laminado 18K"
},
{
  id: "45061-JOR",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Marine IT",
  price: 100000,
  image: "images/productos/Bisuteria/Collares/45061-JOR.jpg",
  medidas: "45 cm x 1,5 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "45886-JOZ",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena China IT",
  price: 230000,
  image: "images/productos/Bisuteria/Collares/45886-JOZ.jpg",
  medidas: "45 cm x 3 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "40002-JOT",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Clover",
  price: 130000,
  image: "images/productos/Bisuteria/Collares/40002-JOT.jpg",
  medidas: "45 cm + extensión",
  description: "Incluye dije de 1,3 cm",
  material: "Oro Laminado 18K"
},
{
  id: "71562-JOX",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena con dije Jesús",
  price: 170000,
  image: "images/productos/Bisuteria/Collares/71562-JOX.jpg",
  description: "Incluye dije y cadena",
  material: "Oro Laminado 18K"
},
{
  id: "43786-JXC",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena tejido franco",
  price: 320000,
  image: "images/productos/Bisuteria/Collares/43786-JXC.jpg",
  medidas: "45 cm x 3,5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "43886-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena tejido chino",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/43886-JOY.jpg",
  medidas: "45 cm x 3 mm",
  material: "Oro Laminado 18K"
},
{
  id: "43106-JOS",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena espejo",
  price: 120000,
  image: "images/productos/Bisuteria/Collares/43106-JOS.jpg",
  medidas: "45 cm x 2 mm",
  material: "Oro Laminado 18K"
},
{
  id: "43831-JOY",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena tejido serpiente",
  price: 210000,
  image: "images/productos/Bisuteria/Collares/43831-JOY.jpg",
  medidas: "45 cm x 1 mm",
  material: "Oro Laminado 18K"
},
{
  id: "46521-JOX",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Caracol Gruesa",
  price: 170000,
  image: "images/productos/Bisuteria/Collares/46521-JOX.jpg",
  medidas: "45 cm",
  material: "Oro Laminado 18K"
},
{
  id: "44986-JOR",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena militar",
  price: 100000,
  image: "images/productos/Bisuteria/Collares/44986-JOR.jpg",
  medidas: "45 cm x 1,1 mm",
  material: "Oro Laminado 18K"
},
{
  id: "44751-JOU",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena Destellos",
  price: 140000,
  image: "images/productos/Bisuteria/Collares/44751-JOU.jpg",
  medidas: "45 cm x 2,5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "44936-JOT",
  category: "bisuteria",
  subcategory: "Collares",
  name: "Cadena escalera",
  price: 130000,
  image: "images/productos/Bisuteria/Collares/44936-JOT.jpg",
  medidas: "45 cm x 2 mm",
  material: "Oro Laminado 18K"
},
{
  id: "20016-JOP",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Atlético Nacional",
  price: 85000,
  image: "images/productos/Bisuteria/Dijes/20016-JOP.jpg",
  medidas: "15 mm",
  material: "Oro Laminado 18K"
},
{
  id: "24001-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Oso T Shine",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/24001-JOH.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23153-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Sol y Luna",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23153-JOH.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "20010-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Cruz L Mini",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/20010-JOG.jpg",
  medidas: "9 mm",
  material: "Oro Laminado 18K"
},
{
  id: "20012-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Milagrosa",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/20012-JOG.jpg",
  medidas: "12 mm",
  material: "Oro Laminado 18K"
},
{
  id: "20009-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Cruz L",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/20009-JOG.jpg",
  medidas: "16 mm",
  material: "Oro Laminado 18K"
},
{
  id: "20008-JOF",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Corazón Sol Mini",
  price: 40000,
  image: "images/productos/Bisuteria/Dijes/20008-JOF.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "20006-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Royal Green",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/20006-JOH.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "23329-JON",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Cristo INRI Mediano",
  price: 75000,
  image: "images/productos/Bisuteria/Dijes/23329-JON.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23400-JON",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije INRI Redentor",
  price: 75000,
  image: "images/productos/Bisuteria/Dijes/23400-JON.jpg",
  medidas: "3,1 cm x 1,8 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23401-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije INRI Redentor Mini",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/23401-JOG.jpg",
  medidas: "7 mm x 1,5 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23319C-JOR",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije medalla Virgen de Guadalupe colores",
  price: 100000,
  image: "images/productos/Bisuteria/Dijes/23319C-JOR.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "20005-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Signo Peso",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/20005-JOK.jpg",
  medidas: "1,8 cm x 1,5 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23339-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Elefant",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/23339-JOG.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23354-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Wuff",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/23354-JOG.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23368-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Blessed Love",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23368-JOH.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23390-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije San Benito Red Circonias",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23390-JOH.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23393-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Lottus",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/23393-JOJ.jpg",
  medidas: "1,5 cm x 1,3 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23383-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Cruz Silueta",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/23383-JOG.jpg",
  medidas: "2,2 cm x 1,3 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23372-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Cruz Lisa Slim",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23372-JOH.jpg",
  medidas: "2,3 cm x 1,4 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23386-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Torre Eiffel",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23386-JOH.jpg",
  medidas: "1,7 cm x 1 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23361-JOE",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije tortuga mini",
  price: 35000,
  image: "images/productos/Bisuteria/Dijes/23361-JOE.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23352-JOL",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Cruz Ankh",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23352-JOL.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23350-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije cruz infinity",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23350-JOH.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "27360-N-JOE",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije placa letra N",
  price: 35000,
  image: "images/productos/Bisuteria/Dijes/27360-N-JOE.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23336-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Cruz Cristo",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/23336-JOJ.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23326-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Nuestra Señora Milagrosa",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/23326-JOG.jpg",
  medidas: "1,6 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23325-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Medalla de San Benito",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/23325-JOJ.jpg",
  medidas: "2 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23321-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Santa Cruz grande",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23321-JOK.jpg",
  medidas: "3,7 cm x 2,1 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23318-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Virgen Milagrosa",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23318-JOK.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23298-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije dólar",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23298-JOK.jpg",
  medidas: "2,2 cm x 0,9 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23228-JON",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Match",
  price: 75000,
  image: "images/productos/Bisuteria/Dijes/23228-JON.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23249-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Corazón",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23249-JOK.jpg",
  medidas: "8 mm x 1,3 cm",
  material: "Oro Laminado 18K"
},
{
  id: "24350-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije mano Hamsa",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/24350-JOH.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "24259-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Virgen de Guadalupe",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/24259-JOG.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23310-JOW",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Virgen de Guadalupe",
  price: 160000,
  image: "images/productos/Bisuteria/Dijes/23310-JOW.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23305-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Cruz Lúmen",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23305-JOK.jpg",
  medidas: "4,7 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23306-JOQ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Cruz Lúmen",
  price: 90000,
  image: "images/productos/Bisuteria/Dijes/23306-JOQ.jpg",
  medidas: "5,1 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23303-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije escapulario San Benito",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/23303-JOJ.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23276-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije flor de loto",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/23276-JOJ.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23271-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Paloma",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/23271-JOG.jpg",
  medidas: "1 cm",
  material: "Oro Laminado 18K"
},
{
  id: "24476-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije San Benito",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/24476-JOH.jpg",
  medidas: "1,3 cm x 1,6 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23122-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije bolsa de dinero",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23122-JOK.jpg",
  medidas: "1,5 cm x 8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "26360-I-JOC",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije letra lisa I",
  price: 25000,
  image: "images/productos/Bisuteria/Dijes/26360-I-JOC.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "26360-N-JOC",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije letra lisa N",
  price: 25000,
  image: "images/productos/Bisuteria/Dijes/26360-N-JOC.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "26360-O-JOC",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije letra lisa O",
  price: 25000,
  image: "images/productos/Bisuteria/Dijes/26360-O-JOC.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "26360-P-JOC",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije letra lisa P",
  price: 25000,
  image: "images/productos/Bisuteria/Dijes/26360-P-JOC.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "26360-T-JOC",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije letra lisa T",
  price: 25000,
  image: "images/productos/Bisuteria/Dijes/26360-T-JOC.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "26360-W-JOC",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije letra lisa W",
  price: 25000,
  image: "images/productos/Bisuteria/Dijes/26360-W-JOC.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "23154-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Caballo",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23154-JOH.jpg",
  medidas: "1,2 cm",
  material: "Oro Laminado 18K"
},
{
  id: "24463-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Virgen Milagrosa",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/24463-JOG.jpg",
  medidas: "1,3 cm x 9 mm",
  material: "Oro Laminado 18K"
},
{
  id: "23101-JOE",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije San Benito",
  price: 35000,
  image: "images/productos/Bisuteria/Dijes/23101-JOE.jpg",
  medidas: "1,1 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23155-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije rayo liso",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/23155-JOJ.jpg",
  medidas: "5 mm x 1,5 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23262-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Corazón",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/23262-JOJ.jpg",
  medidas: "1,2 cm x 9,5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "23295-JON",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije crucifijo pequeño",
  price: 75000,
  image: "images/productos/Bisuteria/Dijes/23295-JON.jpg",
  medidas: "1,8 cm x 3 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23294-JOQ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Crucifijo",
  price: 90000,
  image: "images/productos/Bisuteria/Dijes/23294-JOQ.jpg",
  medidas: "4,3 cm x 2,5 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23043-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije estrella lisa",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23043-JOH.jpg",
  medidas: "1 cm x 1,3 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23370-I-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije letra I con circones",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/23370-I-JOG.jpg",
  medidas: "1,2 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23242-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije caballo herradura",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23242-JOH.jpg",
  medidas: "2,1 cm x 1,8 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23201C-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Bulldog francés circón cristal",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23201C-JOH.jpg",
  medidas: "1,3 cm x 1,1 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23247-JOP",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije escapulario",
  price: 85000,
  image: "images/productos/Bisuteria/Dijes/23247-JOP.jpg",
  medidas: "9 mm x 1,4 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23218-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije perro inflable",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23218-JOK.jpg",
  medidas: "1,5 cm x 2 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23448-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije tres gracias",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23448-JOH.jpg",
  medidas: "1,8 cm",
  material: "Oro Laminado 18K"
},
{
  id: "24541-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Virgen de Guadalupe",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/24541-JOG.jpg",
  medidas: "1,1 cm x 1,6 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23145-JOR",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Virgen de Guadalupe colores",
  price: 100000,
  image: "images/productos/Bisuteria/Dijes/23145-JOR.jpg",
  medidas: "8 mm x 2 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23134-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije cruz lisa",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/23134-JOG.jpg",
  medidas: "1 cm x 1,6 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23003-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije oso circones mini",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23003-JOH.jpg",
  medidas: "8 mm x 1,4 cm",
  material: "Oro Laminado 18K"
},
{
  id: "24900-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije San Miguel Arcángel",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/24900-JOK.jpg",
  medidas: "1,2 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23210-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije San Miguel Arcángel",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/23210-JOJ.jpg",
  medidas: "1,5 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23208-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Virgen Milagrosa",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23208-JOK.jpg",
  medidas: "1,1 cm x 1,7 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23207-JOL",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Virgen del Carmen silueta",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23207-JOL.jpg",
  medidas: "1,1 cm x 1,6 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23198-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije delfín",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/23198-JOJ.jpg",
  medidas: "8 mm x 1,5 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23105-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Virgen del Carmen",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23105-JOH.jpg",
  medidas: "9 mm x 1,4 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23090-JOL",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije cruz tubular circones",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23090-JOL.jpg",
  medidas: "1,7 cm x 2,8 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23142-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije Guadalupe",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/23142-JOJ.jpg",
  medidas: "1,5 cm x 9 mm",
  material: "Oro Laminado 18K"
},
{
  id: "23037-JOQ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Dije San Miguel Silueta",
  price: 90000,
  image: "images/productos/Bisuteria/Dijes/23037-JOQ.jpg",
  medidas: "2,1 cm x 1,9 cm",
  material: "Oro Laminado 18K"
},
{
  id: "55206-JOR",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cubana Cruzada",
  price: 100000,
  image: "images/productos/Bisuteria/Pulseras/55206-JOR.jpg",
  medidas: "16 cm x 2,4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "55172-JOR",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Escalera con Destellos IT",
  price: 100000,
  image: "images/productos/Bisuteria/Pulseras/55172-JOR.jpg",
  medidas: "19,5 cm x 2,1 mm",
  material: "Oro Laminado 18K"
},
{
  id: "57032-JXA",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Militar Italy",
  price: 240000,
  image: "images/productos/Bisuteria/Pulseras/57032-JXA.jpg",
  medidas: "19 cm x 4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "57031-JOY",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Militar Italy",
  price: 210000,
  image: "images/productos/Bisuteria/Pulseras/57031-JOY.jpg",
  medidas: "16,5 cm x 4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "57001-JOG",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Caracol Plana",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/57001-JOG.jpg",
  medidas: "16,5 cm x 1,8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "55207-JOT",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cubana Cruzada",
  price: 130000,
  image: "images/productos/Bisuteria/Pulseras/55207-JOT.jpg",
  medidas: "19,5 cm x 2,4 mm",
  material: "Oro Laminado 18K"
},
{
  id: "55176-JOK",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Escalerita con Destellos IT",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/55176-JOK.jpg",
  medidas: "16,5 cm x 1,7 mm",
  material: "Oro Laminado 18K"
},
{
  id: "55162-JOW",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cubana IT",
  price: 160000,
  image: "images/productos/Bisuteria/Pulseras/55162-JOW.jpg",
  medidas: "19,5 cm x 3 mm",
  material: "Oro Laminado 18K"
},
{
  id: "54546-JOG",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Singapur",
  price: 45000,
  image: "images/productos/Bisuteria/Pulseras/54546-JOG.jpg",
  medidas: "16 cm + extensión x 1,5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "55062-JON",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Marine IT",
  price: 75000,
  image: "images/productos/Bisuteria/Pulseras/55062-JON.jpg",
  medidas: "19,5 cm x 1,5 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "55002-JOY",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Militar IT",
  price: 210000,
  image: "images/productos/Bisuteria/Pulseras/55002-JOY.jpg",
  medidas: "19,5 cm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "56032-JOX",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cuban Link IT",
  price: 170000,
  image: "images/productos/Bisuteria/Pulseras/56032-JOX.jpg",
  medidas: "19 cm x 3,1 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "54041-JOL",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Vintage",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/54041-JOL.jpg",
  medidas: "16 cm + extensión x 1,2 mm",
  material: "Oro Laminado 18K"
},
{
  id: "55067-JOT",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Marine IT",
  price: 130000,
  image: "images/productos/Bisuteria/Pulseras/55067-JOT.jpg",
  medidas: "19,5 cm x 2,8 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "90006-JOS",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Denario Benedictus",
  price: 120000,
  image: "images/productos/Bisuteria/Pulseras/90006-JOS.jpg",
  medidas: "16 cm + extensión",
  material: "Oro Laminado 18K"
},
{
  id: "55332-JOS",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Lazito IT",
  price: 120000,
  image: "images/productos/Bisuteria/Pulseras/55332-JOS.jpg",
  medidas: "19,5 cm x 1,3 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "55222-JOT",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Tube Gold IT",
  price: 130000,
  image: "images/productos/Bisuteria/Pulseras/55222-JOT.jpg",
  medidas: "19,5 cm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "55212-JOT",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Tube Rose IT",
  price: 130000,
  image: "images/productos/Bisuteria/Pulseras/55212-JOT.jpg",
  medidas: "19,5 cm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "55312-JOW",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Station Redonda 3C IT",
  price: 160000,
  image: "images/productos/Bisuteria/Pulseras/55312-JOW.jpg",
  medidas: "19,5 cm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "55151-JOK",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cubanita IT",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/55151-JOK.jpg",
  medidas: "16 cm x 1,5 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "55061-JOK",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Marine IT",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/55061-JOK.jpg",
  medidas: "16 cm x 1,5 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "55152-JON",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cubanita IT",
  price: 75000,
  image: "images/productos/Bisuteria/Pulseras/55152-JON.jpg",
  medidas: "19,5 cm x 1,5 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "55157-JOH",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cubanita IT",
  price: 50000,
  image: "images/productos/Bisuteria/Pulseras/55157-JOH.jpg",
  medidas: "19 cm x 1 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "55031-JOH",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Aros IT",
  price: 50000,
  image: "images/productos/Bisuteria/Pulseras/55031-JOH.jpg",
  medidas: "15,5 cm + extensión x 2 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "55121-JOK",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera 3x1 IT",
  price: 70000,
  image: "images/productos/Bisuteria/Pulseras/55121-JOK.jpg",
  medidas: "16 cm x 1,6 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "55026-JOR",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Arrow IT",
  price: 100000,
  image: "images/productos/Bisuteria/Pulseras/55026-JOR.jpg",
  medidas: "16 cm x 2,6 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "55027-JOS",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Arrow IT",
  price: 120000,
  image: "images/productos/Bisuteria/Pulseras/55027-JOS.jpg",
  medidas: "19,5 cm x 2,6 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "55011-JOH",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Grumetta Rada IT",
  price: 50000,
  image: "images/productos/Bisuteria/Pulseras/55011-JOH.jpg",
  medidas: "16 cm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "50030-JOR",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Heart",
  price: 100000,
  image: "images/productos/Bisuteria/Pulseras/50030-JOR.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "55127-JOS",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera 3x1 IT",
  price: 120000,
  image: "images/productos/Bisuteria/Pulseras/55127-JOS.jpg",
  medidas: "19,5 cm x 2,9 mm",
  description: "Base plata ley 925",
  material: "Oro Laminado 18K"
},
{
  id: "50096-JOR",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Cubana Clover",
  price: 100000,
  image: "images/productos/Bisuteria/Pulseras/50096-JOR.jpg",
  medidas: "15 cm + extensión x 1,1 cm",
  material: "Oro Laminado 18K"
},
{
  id: "50027-NEGRA-JOU",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Circonias Negra",
  price: 140000,
  image: "images/productos/Bisuteria/Pulseras/50027-NEGRA-JOU.jpg",
  medidas: "20 cm",
  material: "Oro Laminado 18K"
},
{
  id: "50007-JON",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Vintage",
  price: 75000,
  image: "images/productos/Bisuteria/Pulseras/50007-JON.jpg",
  medidas: "20 cm",
  material: "Oro Laminado 18K"
},
{
  id: "50002-JOT",
  category: "bisuteria",
  subcategory: "Pulseras",
  name: "Pulsera Escalera G",
  price: 130000,
  image: "images/productos/Bisuteria/Pulseras/50002-JOT.jpg",
  medidas: "19,5 cm",
  material: "Oro Laminado 18K"
},
{
  id: "55179-JOQ",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Escalerita con Destellos IT",
  price: 90000,
  image: "images/productos/Bisuteria/Tobilleras/55179-JOQ.jpg",
  medidas: "24,5 cm x 1,7 mm",
  material: "Oro Laminado 18K"
},
{
  id: "50029-JOQ",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera Coeur",
  price: 90000,
  image: "images/productos/Bisuteria/Tobilleras/50029-JOQ.jpg",
  medidas: "25 cm",
  material: "Oro Laminado 18K"
},
{
  id: "54119-JOR",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera perla",
  price: 100000,
  image: "images/productos/Bisuteria/Tobilleras/54119-JOR.jpg",
  medidas: "23 cm + extensión",
  material: "Oro Laminado 18K"
},
{
  id: "52889-JOQ",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera tejido chino",
  price: 90000,
  image: "images/productos/Bisuteria/Tobilleras/52889-JOQ.jpg",
  medidas: "25 cm x 2 mm",
  material: "Oro Laminado 18K"
},
{
  id: "54874-JOL",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera",
  price: 70000,
  image: "images/productos/Bisuteria/Tobilleras/54874-JOL.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "54989-JOL",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera militar delgada",
  price: 70000,
  image: "images/productos/Bisuteria/Tobilleras/54989-JOL.jpg",
  medidas: "24,5 cm x 1,1 mm",
  material: "Oro Laminado 18K"
},
{
  id: "54039-JOY",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera",
  price: 210000,
  image: "images/productos/Bisuteria/Tobilleras/54039-JOY.jpg",
  medidas: "24,5 cm",
  material: "Oro Laminado 18K"
},
{
  id: "53889-JOT",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera tejido chino",
  price: 130000,
  image: "images/productos/Bisuteria/Tobilleras/53889-JOT.jpg",
  medidas: "24,5 cm x 3 mm",
  material: "Oro Laminado 18K"
},
{
  id: "54294-JOQ",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera escalera plana lisa",
  price: 90000,
  image: "images/productos/Bisuteria/Tobilleras/54294-JOQ.jpg",
  medidas: "24,5 cm x 2 mm",
  material: "Oro Laminado 18K"
},
{
  id: "53834-JOR",
  category: "bisuteria",
  subcategory: "Tobilleras",
  name: "Tobillera tejido serpiente",
  price: 100000,
  image: "images/productos/Bisuteria/Tobilleras/53834-JOR.jpg",
  medidas: "25 cm x 2 mm",
  material: "Oro Laminado 18K"
},
{
  id: "95036-JXC",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario IT Balín",
  price: 320000,
  image: "images/productos/Bisuteria/Rosarios/95036-JXC.jpg",
  medidas: "45 cm x 2,5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "90008-JOX",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario Benedictus",
  price: 170000,
  image: "images/productos/Bisuteria/Rosarios/90008-JOX.jpg",
  medidas: "43 cm + extensión",
  material: "Oro Laminado 18K"
},
{
  id: "94036-JXG",
  category: "bisuteria",
  subcategory: "Rosarios",
  name: "Rosario Hombre",
  price: 550000,
  image: "images/productos/Bisuteria/Rosarios/94036-JXG.jpg",
  medidas: "65 cm x 6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "20086BD-JOL",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje letra",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/20086BD-JOL.jpg",
  medidas: "1,2 cm",
  description: "Escoge la letra que más te guste",
  material: "Oro Laminado 18K"
},
{
  id: "20017-JON",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje Atlético Nacional",
  price: 75000,
  image: "images/productos/Bisuteria/Dijes/20017-JON.jpg",
  medidas: "1 cm",
  material: "Oro Laminado 18K"
},
{
  id: "20052BD-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje Avión",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/20052BD-JOH.jpg",
  medidas: "1,5 cm x 1,9 cm",
  material: "Oro Laminado 18K"
},
{
  id: "20360R-BD-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje pasador corona Rolex",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/20360R-BD-JOH.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "20360C-BD-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje pasador corazón",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/20360C-BD-JOH.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "20360L-BD-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje pasador letra",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/20360L-BD-JOH.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "20360BD-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje bolsa de dinero",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/20360BD-JOH.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "22550-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje Guadalupe tallada",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/22550-JOJ.jpg",
  medidas: "9 mm",
  material: "Oro Laminado 18K"
},
{
  id: "20047-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje cruz lisa",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/20047-JOH.jpg",
  medidas: "10 mm",
  material: "Oro Laminado 18K"
},
{
  id: "20046-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje balón de fútbol",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/20046-JOH.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "24100-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje dólar",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/24100-JOK.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23076V-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje bola de fuego verde",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23076V-JOK.jpg",
  medidas: "6 mm",
  material: "Oro Laminado 18K"
},
{
  id: "20011-JOF",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje cruz mini",
  price: 40000,
  image: "images/productos/Bisuteria/Dijes/20011-JOF.jpg",
  medidas: "11 mm",
  material: "Oro Laminado 18K"
},
{
  id: "20491-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje San Benito",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/20491-JOG.jpg",
  medidas: "10 mm",
  material: "Oro Laminado 18K"
},
{
  id: "20429-JOE",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje San Benito",
  price: 35000,
  image: "images/productos/Bisuteria/Dijes/20429-JOE.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "23344-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje Beatly",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23344-JOH.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23342-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje Zirclove",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/23342-JOG.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23343-JOF",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje Lovix",
  price: 40000,
  image: "images/productos/Bisuteria/Dijes/23343-JOF.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23376-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje Lottus",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/23376-JOJ.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23399-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje Clover Sol esfera cristal",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/23399-JOH.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23398-JOF",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje trébol circonia",
  price: 40000,
  image: "images/productos/Bisuteria/Dijes/23398-JOF.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "23366-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje Cristo San Benito",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/23366-JOG.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23338-JNC",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje redondo italiano",
  price: 7500,
  image: "images/productos/Bisuteria/Dijes/23338-JNC.jpg",
  medidas: "4 mm",
  description: "Precio por unidad",
  material: "Oro Laminado 18K"
},
{
  id: "23328-JNB",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje redondo",
  price: 10000,
  image: "images/productos/Bisuteria/Dijes/23328-JNB.jpg",
  medidas: "5 mm",
  description: "Precio por unidad",
  material: "Oro Laminado 18K"
},
{
  id: "23327-JNC",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje cubo",
  price: 7500,
  image: "images/productos/Bisuteria/Dijes/23327-JNC.jpg",
  medidas: "3,5 mm",
  description: "Precio por unidad",
  material: "Oro Laminado 18K"
},
{
  id: "24800-CRISTAL",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje rondel circonias cristal",
  price: 16000,
  image: "images/productos/Bisuteria/Dijes/24800-CRISTAL.jpg",
  medidas: "5 mm",
  description: "Precio por unidad",
  material: "Oro Laminado 18K"
},
{
  id: "24813C-JON",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje Virgen de Guadalupe cristal",
  price: 75000,
  image: "images/productos/Bisuteria/Dijes/24813C-JON.jpg",
  material: "Oro Laminado 18K"
},
{
  id: "23180-JOC",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje corazón cristal",
  price: 25000,
  image: "images/productos/Bisuteria/Dijes/23180-JOC.jpg",
  medidas: "4 mm x 8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "23255-JOC",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje circona redonda",
  price: 25000,
  image: "images/productos/Bisuteria/Dijes/23255-JOC.jpg",
  medidas: "9 mm x 5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "24477-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje San Benito",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/24477-JOH.jpg",
  medidas: "1,3 cm x 1,9 cm",
  material: "Oro Laminado 18K"
},
{
  id: "24075C-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje bola de fuego circones cristal",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/24075C-JOJ.jpg",
  medidas: "5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "23237-JOJ",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje bicicleta",
  price: 60000,
  image: "images/productos/Bisuteria/Dijes/23237-JOJ.jpg",
  medidas: "1,7 cm x 8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "23241-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje caballo y herradura",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/23241-JOG.jpg",
  medidas: "1,6 cm x 1,2 cm",
  material: "Oro Laminado 18K"
},
{
  id: "22799-JOG",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje rondel circones cristal",
  price: 45000,
  image: "images/productos/Bisuteria/Dijes/22799-JOG.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "24799-CRISTAL",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje rondel circones cristal",
  price: 12000,
  image: "images/productos/Bisuteria/Dijes/24799-CRISTAL.jpg",
  medidas: "4 mm",
  description: "Precio por unidad",
  material: "Oro Laminado 18K"
},
{
  id: "24544-JOH",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje Virgen Milagrosa",
  price: 50000,
  image: "images/productos/Bisuteria/Dijes/24544-JOH.jpg",
  medidas: "8 mm x 1,2 cm",
  material: "Oro Laminado 18K"
},
{
  id: "24901-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje San Miguel Arcángel",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/24901-JOK.jpg",
  medidas: "1,3 cm",
  material: "Oro Laminado 18K"
},
{
  id: "23078-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje bola de fuego",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23078-JOK.jpg",
  medidas: "8 mm",
  material: "Oro Laminado 18K"
},
{
  id: "24343-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje infinito circones",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/24343-JOK.jpg",
  medidas: "2 cm x 5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "23048-JOK",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje ala circones",
  price: 70000,
  image: "images/productos/Bisuteria/Dijes/23048-JOK.jpg",
  medidas: "1,6 cm x 5 mm",
  material: "Oro Laminado 18K"
},
{
  id: "24800-VERDE",
  category: "bisuteria",
  subcategory: "Dijes",
  name: "Herraje rondel circonias verde",
  price: 16000,
  image: "images/productos/Bisuteria/Dijes/24800-VERDE.jpg",
  medidas: "5 mm",
  description: "Precio por unidad",
  material: "Oro Laminado 18K"
}
];
