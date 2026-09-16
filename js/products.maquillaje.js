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
{
  id: "Kct2246",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Kit Carrusel Primer Brillo - Kct2246",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/Kct2246.jpg",
  description: "¡Los básicos e infaltables de toda cosmetiquera ahora en combo! Este kit de primer y lip gloss se convertirá en uno de tus esenciales para el diario. El primer (o prebase) es un producto de maquillaje que se aplica después de tu crema hidratante y antes de la base. Sirve principalmente para alisar la piel, rellenar los poros y líneas de expresión, y crear una barrera que hace que tu maquillaje luzca impecable por mucho más tiempo. Y el Lip gloss aporta luminosidad, da un efecto de volumen y crea un acabado jugoso en los labios con destellitos que le dan un acabado más glowy. No aporta color, por lo que es ideal para combinar con tus tintas o labiales favoritos y crear un lip combo excepcional."
},
{
  id: "RCS2205",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor En Crema Star - RCS2205",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/RCS2205.jpg",
  description: "Rubor líquido ideal para lograr un look natural con un toque de color en las mejillas.\nSu fórmula ligera y de fácil aplicación se difumina suavemente, dejando un acabado mate pero luminoso que aporta frescura al rostro durante todo el día.\nDisponible en 5 tonos: rosas, corales y un rosado chicle encantador.",
  tonos: ["01", "02", "03", "04", "05"]
},
{
  id: "FDT2173",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Fijador Dreams - FDT2173",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/FDT2173.jpg",
  description: "Mantén tu maquillaje intacto y a prueba de todo con el Fijador Dreams.\n\n- Acabado ligero y natural, suave con tu piel, gracias a su fórmula.\n- Tiene extractos de aloe vera, pepino y castaño de indias, que le darán una extra-hidratación a tu piel durante el día.\n- No deja sensación pesada ni pegajosa.\n- Es perfecto para todo tipo de piel."
},
{
  id: "PHM2166",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Polvo De Hadas Golden - PHM2166",
  price: 12000,
  image: "images/productos/Maquillaje/Rostro/PHM2166.jpg",
  description: "¡Tu polvo de hadas favorito ahora en versión dorada y mini!\n\nSu tono dorado aporta un efecto luminoso y cálido, perfecto para resaltar la piel, el cabello o incluso darle un toque especial a tu ropa.\nSu textura ligera permite una aplicación fácil y versátil, logrando desde un brillo sutil hasta un efecto mucho más llamativo según la cantidad que utilices.\nLlévalo contigo a todas partes gracias a su práctica presentación mini y añade un toque de magia a cualquier ocasión.\nTip: Para una mayor intensidad y duración, aplícalo sobre la piel ligeramente húmeda o sella con un poco de fijador o agua de rosas.\n¡Trae muchísimo contenido para que brilles todos los días sin esfuerzo!"
},
{
  id: "CC01",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Contorno Cupcake - CC01",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/CC01.jpg",
  description: "El combo perfecto que todo maquillaje de piel necesita.\n\nEste kit tiene textura en polvo, la cual se funde perfectamente con tu maquillaje y deja una sensación de terciopelo en el rostro.\nIncluye un contorno de subtono grisáceo, el cual permite esculpir y definir tus facciones.\nEl rubor es un tono durazno que complementa perfecto al contorno.\nEl iluminador viene en tono champaña para dar un pop de brillo hermoso a tu maquillaje."
},
{
  id: "CQT1981",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Contorno En Crema Queen - CQT1981",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/CQT1981.jpg",
  description: "Un contorno que no puede faltarte. ¡Este contorno líquido está hecho justo para ti!\n\n- Maquillajes de piel completos y glamourosos con el contorno en crema Queen.\n- Viene en un tono universal de acabado mate, perfecto para aportar calidez y definición a tu rostro.\n- Su aplicador de esponja es ultrasuave y te permite tener una aplicación más precisa.\n- Recuerda aplicar a toques en pequeñas cantidades de producto e ir difuminando con tu esponja o brocha favorita, así podrás controlar la saturación del producto y tener más precisión."
},
{
  id: "PCF2054",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Polvos Compactos Golden - PCF2054",
  price: 25000,
  image: "images/productos/Maquillaje/Rostro/PCF2054.jpg",
  description: "Maquilla tu piel logrando un acabado suave y completamente mate con los polvos compactos Golden. Podrás encontrar 7 tonos perfectos para una amplia gama de pieles.\n¡No es necesario aplicar base!\nEstos polvos te ayudan a unificar visiblemente el tono de tu piel.\nSu excelente pigmentación permite que con una sola aplicación notes la diferencia. Son de textura suave, logrando una piel tersa y un acabado aterciopelado.\nSu diseño premium y compacto es perfecto para llevar en tu cosmetiquera o bolso y retocar tu maquillaje en cualquier momento. Incluye un pomito aplicador, el cual te da una mayor cobertura."
},
{
  id: "Scr1892",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Contorno En Crema Star - Scr1892",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/Scr1892.jpg",
  description: "Su fórmula ligera y fácil de aplicar permite una saturación de tono hermosa, creando sombras suaves y definidas.\n\nEste contorno líquido se difumina de manera uniforme, aportando un acabado radiante y sutil dependiendo de la cantidad que apliques.\n\nTiene una muy buena durabilidad manteniendo un look impecable durante el día.\nDisponible en un solo tono."
},
{
  id: "MG11",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Corrector Magic Grande - MG11",
  price: 30000,
  image: "images/productos/Maquillaje/Rostro/MG11.jpg",
  description: "¡Ahora en tamaño GIGANTE!\nNuestro Magic Concealer llega en su versión más grande, manteniendo la misma calidad profesional y acabados del formato original de 2 g, pero ahora con 7 veces más producto.\nSu aplicador extra grande permite una aplicación más rápida y uniforme, mientras que su textura cremosa se desliza fácilmente sobre la piel, brindando alta cobertura y un acabado impecable.",
  tonos: ["00", "01", "02"]
},
{
  id: "ILS1473",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Iluminador Líquido The Sun - ILS1473",
  price: 6000,
  image: "images/productos/Maquillaje/Rostro/ILS1473.jpg",
  description: "- Este iluminador líquido está diseñado para darle a tu maquillaje un acabado luminoso y lleno de destellos.\n- Su fórmula tiene partículas tipo glitter muy finas que reflejan la luz hermoso sobre la piel, logrando un efecto glow mucho más llamativo y brillante.\n- Su textura es ligera, suave y fácil de difuminar en rostro y cuerpo, mientras su excelente pigmentación permite que el brillo se note desde la primera aplicación.\n- Disponible en 2 tonos dorados perfectos para resaltar cualquier look y llevar tu glow al siguiente nivel.\n- Se envían surtidos.",
  tonos: ["01", "02"]
},
{
  id: "R1602",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor Doble Mia - R1602",
  price: 25000,
  image: "images/productos/Maquillaje/Rostro/R1602.jpg",
  description: "La piel glowy natural está en tendencia y este rubor doble le hace justicia. Viene en un tono terracota, perfecto para todo tipo de piel.\nContiene un rubor cremoso y uno en polvo satinado para sellarlo y darle un acabado más luminoso.\nEs de calidad premium y profesional.\nEl empaque es demasiado luxury.\nContiene un espejo práctico.",
  tonos: ["01", "02"]
},
{
  id: "Bet1496",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Contorno En Crema Bronzer Stamp - Bet1496",
  price: 20000,
  image: "images/productos/Maquillaje/Rostro/Bet1496.jpg",
  description: "¡Una nueva versión de stamp pero esta vez en Bronzer! Como lo tuyo es el acabado natural, los productos en crema son el aliado perfecto. El bronzer es un producto de maquillaje que te aporta calidez y color a la piel, simulando un bronceado natural. Se utiliza para conseguir un aspecto saludable y radiante, como si acabaras de regresar de unas vacaciones bajo el sol. El Bronzer Stamp hace un complemento ideal con el rubor en crema y polvo. Así como leíste, el Bronzer Stamp es un bronzer líquido de fácil aplicación, textura ligera y acabado natural que potenciará tus maquillajes diarios. Cobertura media-alta y de larga duración. Acabado mate perfecto para el día a día.",
  tonos: ["01", "02"]
},
{
  id: "Rbh1651",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor En Crema Beverly Hills - Rbh1651",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/Rbh1651.jpg",
  description: "Los rubores nunca dejarán de ser tendencia.\nEl rubor cremoso es un complemento indispensable para elevar tu maquillaje.\nEsta opción en textura tipo velvet es increíble.\nDisponible en 2 tonos: Rosa barbie y uno terracota.\nSon muy suaves al tacto, tipo terciopelo.\nSe difumina a la perfección, sin dejar sensación pesada y sin dejar parches.\nContiene un aplicador gigante apto para aplicar la cantidad necesaria de producto sobre tus mejillas.",
  tonos: ["01", "02"]
},
{
  id: "PH03",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Polvo De Hadas Trendy - PH03",
  price: 12000,
  image: "images/productos/Maquillaje/Rostro/PH03.jpg",
  description: "El polvo de hadas es un producto indispensable si te gusta el brillo. Este es el clásico, de tonalidad plateada. Su aplicador es en forma de 'lengüita' y no necesitas hacer mucha fuerza o presión para que salga el producto. Puedes aplicarlo en el rostro, pecho, hombro, brazos, y si quieres que te dure mucho más puedes sellarlo con un poquito de fijador o tónico de rosas. Trae muchísimo contenido y el aplicador deposita en tu piel la cantidad necesaria para lucir brillitos en la zona aplicada."
},
{
  id: "Cct1870",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Contorno Barra Chocolate - Cct1870",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/Cct1870.jpg",
  description: "Luce un rostro definido, natural y radiante con nuestro contorno en barra super cremoso.\nSu textura suave se desliza con facilidad sobre la piel y se difumina sin esfuerzo, dejando un acabado impecable.\n\nFórmula cremosa y de alta adherencia.\nExcelente pigmentación, modulable según tu gusto.\nTono cálido que no se ve naranjado al aplicarlo."
},
{
  id: "Lov3",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor Garden Of Love - Lov3",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/Lov3.jpg",
  description: "Dale color y vida a tu rostro con estos rubores en tonos perfectos para cualquier ocasión.\n- Sus tonalidades entre rojizos, rosados claros y coral se adaptan a todo tipo de piel y aportan un acabado natural o más intenso, según tu estilo.\n-Textura en polvo ultra suave, fácil de difuminar.\n- Logras una alta pigmentación con poca cantidad de producto.\n- Empaque compacto, hermoso y con gran contenido: Ideal para llevar en tu bolso o cosmetiquera.\n- Incluye 3 tonos muy similares, que se envían surtidos.\n- Perfecto para uso diario o para completar un look más elaborado.",
  tonos: ["01", "02", "03"]
},
{
  id: "Psc1251",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor Pink Sweet Cotton - Psc1251",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/Psc1251.jpg",
  description: "- Un iluminador duocromático rosa coral, que deja un efecto glowy precioso en los pómulos.\n- Se adapta perfectamente a todo tipo de piel.\n- Puedes combinarlos entre sí para crear tonos únicos y favorecedores.\n- Textura ultra suave y tersa, fácil de difuminar sin dejar parches.\n¡Ideal para llevar en tu cartera!\nImportante: Existen dos referencias muy similares que se envían surtidas."
},
{
  id: "Pct1798",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Pompon Cotton - Pct1798",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/Pct1798.jpg",
  description: "Si amas una piel glowy, este pompón será tu nuevo favorito. Su pigmento plateado brillante aporta un toque de luminosidad que transforma cualquier look.\n\nSu diseño inspirado en el algodón de azúcar no solo es adorable: evita derrames y mantiene el producto en su lugar, para llevarlo contigo sin preocupaciones."
},
{
  id: "CN09",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Fijador Cosmic Night - CN09",
  price: 25000,
  image: "images/productos/Maquillaje/Rostro/CN09.jpg",
  description: "El fijador Cosmic ayuda a mantener tu maquillaje intacto por más tiempo, protegiéndolo del calor, la humedad y el desgaste natural del día.\nEs un spray ligero que se distribuye uniformemente sobre el rostro, ayudando a sellar el maquillaje sin dejar sensación pesada. Además, su acabado mate contribuye a controlar el exceso de brillo para que tu piel luzca fresca y tu maquillaje impecable durante horas.\nRápido secado y excelente duración.\nUn imprescindible para quienes buscan mayor duración y un acabado más pulido en su maquillaje."
},
{
  id: "MT1665",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Torre Multi Iluminador Cat - MT1665",
  price: 20000,
  image: "images/productos/Maquillaje/Rostro/MT1665.jpg",
  description: "Brillo y más brillo, ¡En Trendy somos expertos!\nEsta torre contiene 4 iluminadores de increíble pigmentación.\nContiene un glitter tipo gel con acabado tornasol que será el complemento perfecto de tus maquillajes.\nLos otros 3 iluminadores tienen una textura horneada ligeramente cremosa que les da una adherencia y pigmentación espectacular.\nSus tonos varían entre dorados, rosa y tornasol.\nContiene un mini espejo de alta definición."
},
{
  id: "CMC1869",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Contorno En Crema Master Contour - CMC1869",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/CMC1869.jpg",
  description: "Definición en el rostro con una sola paleta. Una piel perfecta y definida, ¡Este producto es el que necesitas! Incluye 3 tonos de contorno en crema principalmente cálidos y un corrector de subtono amarillo para que le des definición, calidez y un acabado superior a tu piel. Su textura es de fácil difuminado, no deja sensación grasosa y da un acabado semi mate."
},
{
  id: "ID02",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Kit X 4 Iluminador Dreams - ID02",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/ID02.jpg",
  description: "¡Los iluminadores que necesitas para un glow perfecto!\n\nVienen 4 tonos de iluminadores horneados. Viene 1 tono plateado, 1 oro rosa, 1 dorado con destellos amarillos y 1 dorado. Su pigmentación es increíble.\nTextura ultra suave y de fácil difuminado.\nCombina los tonos para crear dimensión."
},
{
  id: "BST1412",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Contorno en Barra Individual Bronzer Stick - BST1412",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/BST1412.jpg",
  description: "El bronzer es el producto perfecto para definir tu rostro en cuestión de minutos. Ya está aquí el Bronzer Stick, es un producto que se difumina con facilidad en la piel y te deja un acabado natural y cálido en el rostro. Si buscar darle color, vida y un brillo saludable a la piel, este tono café universal te lo brinda. Es un producto muy práctico y versátil. Su tamaño compacto te permite llevarlo a todos lados con facilidad y su diseño tipo lápiz retráctil te asegura un mayor rendimiento."
},
{
  id: "PMT1371",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Primer Menta Trendy 60ml - PMT1371",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/PMT1371.jpg",
  description: "Aplicar Primer antes de tu base ayuda a mejorar la adherencia y prolongar su duración,\nEste tiene un efecto mentolado y ácido hialurónico que permite que tu piel esté fresca y radiante durante todo el día, dándole un acabado superior a tu maquillaje.\nSu textura en gel es humectante y se absorbe con facilidad en tu piel.\nNo deja sensación grasa ni pesada."
},
{
  id: "IHT1408",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Kit X 4 Iluminador Quesito Hightouille - IHT1408",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/IHT1408.jpg",
  description: "Un cuarteto que eleva desde el look más sencillo hasta el más sofisticado.\nVienen 4 iluminadores entre champañas y dorados.\nSon de excelente pigmentación y calidad premium.\nNo necesitas tanto producto para lograr una saturación top.\nLas tonalidades quedan muy bien en todo tipo de piel."
},
{
  id: "BLT1686",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor Doble Loop Blush - BLT1686",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/BLT1686.jpg",
  description: "Tus mejillas con el rosadito perfecto gracias a este dúo de rubores satinados.\nEs un dúo de rubores mineralizados con destellos satinados para derle una pizca de glowy a tus looks.\nSon dos tonalidades uno rosa claro y el otro más fucsia en donde cambia el tono bicromático, uno tiene destellos dorados y el otro trae destellos plateados.\nCombínalos entre sí y descubre nuevos colores."
},
{
  id: "PK12",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor E Iluminador Puppy Collection - PK12",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/PK12.jpg",
  description: "El cuarteto que tu rostro necesita. Una paleta con iluminador y tres rubores. ¡Perfecta para definir tu rostro! Su pigmentación es muy buena, con una textura muy suave y se difumina ligeramente sobre el rostro. Llévala contigo siempre, su tamaño cabe en tu cosmetiquera. Los rubores en tonalidades salmón lo hacen un producto versátil, se pueden combinar entre sí y te ayudan a lucir un color divino en tus mejillas. El iluminador en tono dorado, deja un efecto luminoso sobre el rostro y es el complemento perfecto para el rubor."
},
{
  id: "PAT1894",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Primer Aloha - PAT1894",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/PAT1894.jpg",
  description: "Los primers son una herramienta para asegurar un mejor acabado en nuestros maquillajes. El primer o prebase en el maquillaje sirve para preparar la piel, actuando como un puente entre tu rostro y el maquillaje. Su función principal es unificar la textura, minimizar los poros, controlar el brillo y hacer que tu maquillaje dure mucho más tiempo intacto. En esta ocasión traemos el primer Aloha, formulado con ácido hialurónico, lo que permite mantener hidratada tu piel durante el día. Su textura es tipo gel a base de agua, así que es perfecto para todo tipo de piel. Su aroma es neutro. Sus componentes permiten una mayor adherencia y duración de los productos durante el día."
},
{
  id: "SB18",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Kit Dúo Rubor Líquido Safari Blush - SB18",
  price: 25000,
  image: "images/productos/Maquillaje/Rostro/SB18.jpg",
  description: "La cajita contiene dos rubores en tonos diferentes, uno coral y otro más rosa.\nTextura cremosa PREMIUM, super suave, difumina muy fácil con brocha o esponja.\nLarga duración e increíble pigmentación.\nTe encantará, se volverá uno de tus productos favoritos y esenciales para los looks naturales.",
  tonos: ["01", "02"]
},
{
  id: "HRC1326",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor En Crema Happy - HRC1326",
  price: 5000,
  image: "images/productos/Maquillaje/Rostro/HRC1326.jpg",
  description: "Te lo presentamos: En este producto encuentras calidad y pigmentación en su máximo esplendor.\nTe permite darle al rostro calidez y viveza en un solo paso.\nCon poco producto gozas de un acabado perfecto.\nVienen en un tono coral que se adapta a todos los tonos de piel y queda increíble.\nSu textura es suave y fácil de difuminar."
},
{
  id: "BL07",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor En Barra Blush Love - BL07",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/BL07.jpg",
  description: "El rubor de maquillaje, también conocido como blush, sirve principalmente para devolverle el color, la vitalidad y la dimensión al rostro.\nSu función es dar un efecto rosadito simulando el color natural de esta zona, y dependiendo de dónde lo apliques, ayuda a levantar visualmente los pómulos o suavizar las facciones.\nViene en 2 tonos universales que te llegan surtidos, pero los dos son hermosos.\nEl empaque es demasiado tierno y funcional, ¡puedes llevarlo siempre contigo!",
  tonos: ["01", "02"]
},
{
  id: "SSS1158",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Sachet Primer Serum Summer - SSS1158",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/SSS1158.jpg",
  description: "Su textura en aqua gel te deja un acabado mate pero levemente iluminado, por sus partículas lucirás radiante, juvenil y fresca. Puede usarse en todo tipo de piel pero es ideal para piel mixta, seca o madura. Deja una sensación suave, seca y de acabado mate sobre la piel, logrando obtener un maquillaje perfecto. Puede ser utilizado todos los días, por su textura no obstruye el poro y permite la ‘respiración’ normal de la piel, mientras le aporta nutrientes. Tiene un olor delicioso."
},
{
  id: "ABT1742",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor En Crema Aura - ABT1742",
  price: 5000,
  image: "images/productos/Maquillaje/Rostro/ABT1742.jpg",
  description: "¡Todos los rubores son perfección en el rostro!\nRubor para crear looks completos y hermosos.\nEste rubor multipropósito es versátil, ya que funciona también como sombra de ojos.\nSe difumina a la perfección sin dejar parches.\nAporta jugosidad a la piel, haciéndola ver más saludable.",
  tonos: ["01", "02"]
},
{
  id: "CMT547",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Corrector Magic Mini - CMT547",
  price: 12000,
  image: "images/productos/Maquillaje/Rostro/CMT547.jpg",
  description: "Unifica el tono de tu piel y corrige pequeñas manchas con este corrector de textura equilibrada, apto para todo tipo de piel.\nNo es excesivamente matte ni demasiado hidratante, lo que lo hace perfecto para uso diario.\nAunque su tamaño es compacto, su alta pigmentación permite lograr excelentes resultados con muy poca cantidad. Se difumina con facilidad, ofreciendo una sensación y acabado comparables a un corrector de alta gama. Una vez seco, su fórmula se mantiene intacta durante todo el día. Puede llegarte cualquiera de nuestras 2 presentaciones.",
  tonos: ["00", "01", "02"]
},
{
  id: "Rbt1769",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor Bakery - Rbt1769",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/Rbt1769.jpg",
  description: "- Necesitas este kit de rubores y bronzer Bakery para crear maquillajes increíbles y llenos de vida.\n\n- En esta paleta encontrarás 3 tonos de rubor en rosas y duraznos, además de un bronzer ideal para aportar calidez y definición al rostro.\n\n- Su fórmula en polvo tiene una textura horneada que deja tu piel súper suave y ligera, además se difumina fácilmente sobre la piel, logrando un acabado completamente mate, natural y uniforme. - Perfecta para darle color al rostro sin parches y con un acabado hermoso todos los días."
},
{
  id: "Rtg1725",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor Tutu Glow - Rtg1725",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/Rtg1725.jpg",
  description: "- 4 tonos en una sola paleta que abarcan dos rubores satinados rosita y coral y dos iluminadores champaña y dorado.\n- Los puedes utilizar para sellar tu rubor líquido o cremoso favorito y darle un acabado luminoso de infarto.\n- Textura suave y fácil de difuminar.\n- Esta paleta es práctica y fácil de llevar a todas partes para que retoques tu maquillaje en cualquier momento.\n- Utilízalo también como iluminador o sombra satinada."
},
{
  id: "Ict1768",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Iluminador Chocolate - Ict1768",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/Ict1768.jpg",
  description: "- Vienen 4 tonos: plateado, oro rosa, dorado y terracota dúo cromático con destellos plateados.\n- Su textura es suave y las partículas de brillo son sutiles, aportando un brillo hermoso pero sofisticado.\n- Gracias a su fórmula fina aporta una apariencia radiante que se difumina a la perfección sobre el rostro."
},
{
  id: "SLU1936",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Sombra En Barra + Líquida Level Up - SLU1936",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/SLU1936.jpg",
  description: "Descubre esta sombra 2 en 1 que te permitirá recrear looks satinados con todo el brillo e impacto que necesitas.\nUn extremo con sombra líquida satinada de alta pigmentación y aplicador de punta fina, ideal para usar también como delineador perlado.\nSu otro extremo contiene la sombra cremosa tipo mantequilla, la cual se difumina fácilmente sin dejar parches.\nSon de excelente adherencia y durabilidad.\nDisponible en 4 tonos perlados versátiles: dorados y oro rosa.\nPerfecta para llevar en el bolso y realzar tu mirada con un solo producto.",
  tonos: ["01", "02", "03", "04"]
},
];
