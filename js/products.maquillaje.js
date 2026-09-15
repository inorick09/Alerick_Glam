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
//    - name: termina el nombre con " - " seguido del mismo id
//      (ej: "Labial mate Rosa Nude - labial-rosa-01"), igual que en
//      Bisutería — así se ve el código del producto en la tarjeta,
//      el carrito, WhatsApp y la hoja de pedidos.
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
  //   name: "Labial mate Rosa Nude - labial-mate-rosa",
  //   price: 35000,
  //   image: "images/productos/Maquillaje/Rostro/labial-rosa-nude.jpg",
  //   description: "Acabado mate de larga duración, tono rosado nude."
  // },
  // Ejemplo de producto con varios tonos:
  // {
  //   id: "base-aqua-smooth",
  //   category: "maquillaje",
  //   name: "Base Aqua Smooth - base-aqua-smooth",
  //   price: 30000,
  //   image: "images/productos/Maquillaje/Rostro/base-aqua-smooth.jpg",
  //   description: "Acabado natural, fresca y sin peso.",
  //   tonos: ["Claro", "Medio", "Oscuro"]
  // },
{
  id: "MT2418",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Kit Brillo Y Monedero Amigas Barbie - MT2418",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/MT2418.jpg",
  description: "Brilla con luz propia y lleva todo el estilo de Barbie a donde quiera que vayas. Este kit combina dos glosses sin color cargados con delicados destellos en tonos azul y rosado, acompañados por un práctico monedero pequeño para guardar tus cosas. Es la opción ideal para complementar tus Looks diarios mientras disfrutas de un producto útil y bonito.",
  colaboracion: "Mattel"
},
{
  id: "HLB2482",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Hidratante De Labios Bob Esponja - HLB2482",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/HLB2482.jpg",
  description: "Dale a tus labios un momento divertido de cuidado mientras combates la resequedad diaria. Esta mascarilla inspirada en Bob Esponja complementa tu rutina ofreciendo una experiencia diferente que ayuda a mantener los labios suaves, hidratados y con una apariencia más saludable.",
  colaboracion: "Paramount"
},
{
  id: "PSA2483",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Polvo Suelto Arenita Bob Esponja - PSA2483",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/PSA2483.jpg",
  description: "Sella tus productos cremosos y evita que la base o el corrector se muevan con el paso del tiempo. Este polvo suelto inspirado en Bob Esponja ayuda a fijar el maquillaje dejando un acabado suave y completamente aterciopelado para que la piel luzca uniforme. Su textura micropulverizada se difumina fácilmente y se siente liviana sobre el rostro, mientras que su subtono amarillo ayuda a neutralizar visualmente los tonos fríos, siendo el aliado perfecto para corregir y perfeccionar la zona de la ojera.",
  colaboracion: "Paramount"
},
{
  id: "Dyt2678",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit Pizza Planet - Dyt2678",
  price: 35000,
  image: "images/productos/Maquillaje/Labios/Dyt2678.jpg",
  description: "Incluye:\n\n1 Brillo de labios que aporta un color natural.\n1 Tinta de textura cremosa color terracota.\n1 Tinta acuosa color vino.\n1 Gloss en formato colapsible que aporta color rojizo.\n1 Una cosmetiquera con ganchito para llevar a todas partes.",
  colaboracion: "Disney"
},
{
  id: "Dyt2512",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Monedero Lotso - Dyt2512",
  price: 25000,
  image: "images/productos/Maquillaje/Rostro/Dyt2512.jpg",
  description: "Un 3 en 1 que te facilita tu look. Lleva tus esenciales de maquillaje a todas partes con el encanto de Lotso. Este práctico kit incluye un monedero adorable y muy amplio, un brillo natural para tus labios y un rubor en polvo en tono rosa que aporta brillo muy sutil sobre las mejillas, combina funcionalidad y estilo en un accesorio ideal para el día a día.",
  colaboracion: "Disney"
},
{
  id: "Dyt2552",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Mini Rubor Lotso - Dyt2552",
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
  name: "Fijador Toy Story - Dyt2551",
  price: 25000,
  image: "images/productos/Maquillaje/Rostro/Dyt2551.jpg",
  description: "Lleva tu maquillaje al infinito y más allá con el fijador Toy Story.\nSu innovadora fórmula en gel se transforma en una ligera bruma líquida al salir del spray, permitiendo una aplicación uniforme y cómoda sobre la piel.\nDiseñado para complementar tu rutina de maquillaje, ayuda a mantener una apariencia fresca y favorece un acabado más integrado y natural semi mate, sin sensación pesada.",
  colaboracion: "Disney"
},
{
  id: "Dyt2656",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor En Crema Lotso - Dyt2656",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/Dyt2656.jpg",
  description: "Consigue unas mejillas naturalmente radiantes con el Rubor en Crema Lotso.\n\nSu textura cremosa y ligera se funde fácilmente con la piel, aportando un toque de color fresco que realza la apariencia natural del rostro.\n\nGracias a su fácil difuminado, permite lograr desde un efecto sutil y delicado hasta un acabado más intenso, adaptándose a diferentes estilos de maquillaje y logrando una aplicación perfecta con la brocha que está en la parte superior. Inspirado en la dulzura y el encanto de Lotso, este rubor brinda un aspecto saludable que ayuda a revitalizar el maquillaje con un acabado mate y natural.",
  colaboracion: "Disney"
},
{
  id: "Dyt2546",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Grip Primer Buzz Grande - Dyt2546",
  price: 30000,
  image: "images/productos/Maquillaje/Rostro/Dyt2546.jpg",
  description: "Notarás el cambio una vez que agregues este paso al iniciar tu maquillaje. Prepara tu piel para despegar hacia un maquillaje de otro nivel con el Grip Primer Buzz Grande. Este grip primer está diseñado para crear una base perfecta antes del maquillaje, ayudando a que los productos se adhieran mejor a la piel y luzcan más uniformes durante el día. Funciona como un \"pegante\" en donde tu maquillaje tendrá más adherencia y resistencia durante el día. Su textura ligera ayuda a suavizar la apariencia de la piel, convirtiéndose en el aliado ideal para potenciar la duración y el acabado de tu maquillaje. Es perfecto para ocasiones donde deseas que tu look esté intacto.",
  colaboracion: "Disney"
},
{
  id: "Dyt2547",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Grip Primer Buzz Pequeño - Dyt2547",
  price: 20000,
  image: "images/productos/Maquillaje/Rostro/Dyt2547.jpg",
  description: "Notarás el cambio una vez que agregues este paso al iniciar tu maquillaje. Prepara tu piel para despegar hacia un maquillaje de otro nivel con el Grip Primer Buzz Grande. Este grip primer está diseñado para crear una base perfecta antes del maquillaje, ayudando a que los productos se adhieran mejor a la piel y luzcan más uniformes durante el día. Funciona como un \"pegante\" en donde tu maquillaje tendrá más adherencia y resistencia durante el día. Su textura ligera ayuda a suavizar la apariencia de la piel, convirtiéndose en el aliado ideal para potenciar la duración y el acabado de tu maquillaje. Es perfecto para ocasiones donde deseas que tu look esté intacto.",
  colaboracion: "Disney"
},
{
  id: "Dyt2575",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Polvo Compacto Jack - Dyt2575",
  price: 20000,
  image: "images/productos/Maquillaje/Rostro/Dyt2575.jpg",
  description: "Este polvo compacto tipo banana es perfecto para sellar el maquillaje y ayudar a unificar visualmente el tono de la piel.\nSu tono amarillo suave contribuye a neutralizar áreas más oscuras del rostro, aportando un acabado más limpio, uniforme y natural.\nAdemás, ayuda a controlar el brillo y la oleosidad durante el día, manteniendo la piel con un aspecto fresco y el maquillaje intacto por más tiempo.\nSu presentación luxury incluye un espejo de alta calidad y una almohadita redonda, ideal para retoques en cualquier momento.\nUn básico infaltable para perfeccionar y sellar tu maquillaje.",
  colaboracion: "Disney"
},
{
  id: "Dyt2576",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Polvo Compacto Sally - Dyt2576",
  price: 20000,
  image: "images/productos/Maquillaje/Rostro/Dyt2576.jpg",
  description: "Este polvo compacto rosado es perfecto para sellar el maquillaje mientras aporta un toque de frescura y luminosidad al rostro.\nSu tono se integra de forma armoniosa con el rubor, ayudando a lograr un acabado más uniforme, natural y lleno de vida\nAdemás, ayuda a controlar el brillo y la oleosidad sin dejar la piel acartonada, manteniendo el maquillaje impecable por más tiempo.\nSu presentación luxury incluye un espejo de alta calidad y una almohadita redonda, ideal para retoques durante el día. Un imprescindible para quienes aman los acabados frescos, suaves y naturales.",
  colaboracion: "Disney"
},
{
  id: "MTT2515",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Moños Barbie Dreams - MTT2515",
  price: 4000,
  image: "images/productos/Maquillaje/Accesorios/MTT2515.jpg",
  description: "Ahora tu Mini TrendyLover tendrá los peinados más chic e icónicos.\n\n- Este hermoso kit de moños está inspirado en Barbie, e incluye dos moños en tela de tamaño ideal para complementar su look.\n\n- Tendrá un acabado delicado, feminino y moderno en sus peinados, que combinará perfecto con personalidad.",
  colaboracion: "Mattel"
},
{
  id: "MTT2516",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Cepillo Barbie Dreams - MTT2516",
  price: 8000,
  image: "images/productos/Maquillaje/Accesorios/MTT2516.jpg",
  description: "¡Ten tu cabello on point en todo momento!.\n\n- Este práctico kit inspirado en Barbie incluye un cepillo portátil y un scrunchie, perfectos para llevar en el bolso y crear peinados rápidos con mucho estilo.\n\n- Su diseño le dará un toque femenino, moderno y divertido a todos tus looks.",
  colaboracion: "Mattel"
},
{
  id: "DY2425",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Cara De Papa - DY2425",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2425.jpg",
  description: "- Está inspirado en Toy Story y su icónico personaje, el Señor Cara de Papa.\n- Perfecto para darle un toque auténtico a tus bolsos, chaquetas, cosmetiqueras, cartucheras o cualquier accesorio que quieras personalizar con mucho estilo.\n- Gracias a su material resistente y tamaño práctico, podrás usarlo diariamente mientras complementas tus looks con un detalle original y llamativo. Además, su práctico sistema de broche te permite mantenerlo seguro siempre.",
  colaboracion: "Disney"
},
{
  id: "MNT2389",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Mascarilla Arcilla Nebula - MNT2389",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/MNT2389.jpg",
  description: "- Está diseñada para limpiar profundamente los poros y controlar el exceso de grasa.\n- Su fórmula brinda una sensación fresca y ligera mientras ayuda a mejorar la apariencia de la piel, dejándola con un acabado más suave, uniforme y mate, gracias a sus ingredientes reconocidos por sus beneficios purificantes y equilibrantes, como la arcilla.\n- Purifica, refresca y renueva tu piel, ideal para complementar tu rutina de skincare y darle a tu rostro una sensación de limpieza profunda y frescura."
},
{
  id: "MRT2388",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Mascarilla Romantica - MRT2388",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/MRT2388.jpg",
  description: "- Esta mascarilla facial de textura ligera tipo gel está enriquecida con ingredientes que ayudan a mantener la piel suave, humectada y revitalizada, brindando una sensación refrescante desde la primera aplicación.\n- Contiene ingredientes reconocidos por sus beneficios hidratantes y calmantes como el aloe vera, que ayuda a refrescar y suavizar la piel; pantenol, conocido por aportar hidratación y confort; y vitamina E, ideal para ayudar a proteger y mantener la piel con una apariencia saludable y luminosa.\n- Ideal para complementar tu rutina de skincare y devolverle al rostro una apariencia luminosa, descansada y saludable."
},
{
  id: "EMT2504",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Encrespador Luxé Mini Plástico - EMT2504",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/EMT2504.jpg",
  description: "- Su diseño mini cabe en cualquier bolso sin ocupar espacio, diseñado para adaptarse a la forma del ojo y proporcionar una curva progresiva y natural desde la base de la pestaña hasta las puntas.\n- La almohadilla de caucho suave trabaja la pestaña de manera amable generando la curva sin el doblado brusco que causa ruptura.\n- El básico de mirada más completo del bolso, cuatro funciones en un solo accesorio portátil de la línea Luxé."
},
{
  id: "DY2346",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Stitch Guitarra - DY2346",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2346.jpg",
  description: "Perfecto para amantes de la música y de los accesorios con personalidad.\nUn detalle ideal para darle un toque juvenil y creativo a tus prendas o accesorios favoritos.\nDiseño coleccionable inspirado en Disney, ideal para regalar o coleccionar.",
  colaboracion: "Disney"
},
{
  id: "Crg1420",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Corrector Hidrante Rebel Girl - Crg1420",
  price: 12000,
  image: "images/productos/Maquillaje/Rostro/Crg1420.jpg",
  description: "¡Un corrector perfecto para el día a día!\nCubre y disimula tus imperfecciones gracias a nuestro corrector Rebel Girl.\nTiene una cobertura media - alta.\nEs muy cremosito.\nTe deja un acabado mate.\nAl cubrir las ojeras logra que la zona del contorno de los ojos se vea mucho más radiante.\nNo es pesado.\nAporta una cobertura uniforme sin dejar parches\nViene en 3 tonos.",
  tonos: ["01", "02", "03"]
},
{
  id: "Rht2202",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor Baked Lucky - Rht2202",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/Rht2202.jpg",
  description: "- Dale vida y color a tus mejillas con este dúo de rubores.\n- Su textura en polvo es suave y se desliza fácilmente sobre la piel, dejando un acabado mate natural que realza tus facciones de forma increíble.\n- Textura aterciopelada que se difumina sin esfuerzo.\n- Práctico dúo en tonos corales: uno claro y otro más oscuro, perfectos para toda ocasión.\n- Un must en tu cosmetiquera: Combina, mezcla o luce cada tono por separado para un look siempre fresco y en tendencia."
},
{
  id: "ILK2286",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Iluminador Líquido Panda - ILK2286",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/ILK2286.jpg",
  description: "Descubre el brillo que transforma tu look. Este iluminador líquido combina una textura ligera y de fácil aplicación con un acabado luminoso que resalta de manera natural las facciones del rostro. Su fórmula se integra perfectamente con la piel. Disponible en dos tonos versátiles que se envían surtidos: Oro rosa, ideal para un toque sutil de luz. Dorado perlado, perfecto para un efecto más intenso y radiante. Su textura líquida es de fácil difuminación. Pigmentación construible para un acabado sutil o más marcado.",
  tonos: ["01", "02"]
},
{
  id: "Rtt2204",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor X 3 Primavera - Rtt2204",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/Rtt2204.jpg",
  description: "- Su fórmula en polvo asegura duración y un acabado 100% mate en tu piel.\n- Este Kit incluye 3 tonalidades: durazno, coral claro y coral oscuro.\n- Los rubores cálidos se funden en la piel creando un look suave y sofisticado.\n- Pigmentación media, puedes construirla según tu gusto.\n- Incluye espejo HD para que apliques o retoques tu rubor en cualquier momento."
},
{
  id: "Ktt2249",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Kit Rubores Toy - Ktt2249",
  price: 12000,
  image: "images/productos/Maquillaje/Rostro/Ktt2249.jpg",
  description: "Consigue un look poderoso con este dúo infaltable de rubores. Incluye un rubor en crema y uno en polvo de la misma tonalidad. Este kit es perfecto para dar color a las mejillas con un efecto saludable y fresco. Permite aplicar el producto en crema para un acabado radiante y fundente, y usar el polvo para sellarlo, prolongando su duración e incrementando la intensidad del tono. Son de alta pigmentación y acabado mate garantizan un efecto prolijo y de larga duración. Son de único tono."
},
];
