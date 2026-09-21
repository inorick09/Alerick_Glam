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
// SI QUIERES AGRUPAR EL PRODUCTO POR EDAD (Niñas, Adultas, etc.):
// Agrégale un campo "category_age" con ese texto, así:
//   category_age: "Niñas"
// En la página de Maquillaje aparece solo un botón (chip) con ese texto,
// en la fila "Edad:", igual que las colecciones. Es texto libre: escribe
// el mismo texto, con las mismas mayúsculas, en todos los productos del
// mismo grupo para que el botón los agrupe. Los productos SIN este campo
// simplemente no aparecen en ese filtro. Como los demás filtros, no se
// combina con el de tipo ni con el de colección: manda uno a la vez.
//
// SI QUIERES AGRUPAR EL PRODUCTO EN UNA CATEGORÍA DE NOVEDADES:
// Agrégale un campo "category_new" con ese texto, así:
//   category_new: "Nuevos"
// Funciona igual que "category_age": aparece un solo botón (chip) con ese
// texto, en la fila "Novedades:". Es texto libre: escribe el mismo texto,
// con las mismas mayúsculas, en todos los productos del grupo. Los
// productos SIN este campo no aparecen en ese filtro, y solo manda un
// filtro a la vez (tipo, colección, edad o novedades).
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
  colaboracion: "Mattel",
  category_new: "Nueva colección"
},
{
  id: "HLB2482",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Hidratante De Labios Bob Esponja - HLB2482",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/HLB2482.jpg",
  description: "Dale a tus labios un momento divertido de cuidado mientras combates la resequedad diaria. Esta mascarilla inspirada en Bob Esponja complementa tu rutina ofreciendo una experiencia diferente que ayuda a mantener los labios suaves, hidratados y con una apariencia más saludable.",
  colaboracion: "Paramount",
  category_new: "Nueva colección"
},
{
  id: "PSA2483",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Polvo Suelto Arenita Bob Esponja - PSA2483",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/PSA2483.jpg",
  description: "Sella tus productos cremosos y evita que la base o el corrector se muevan con el paso del tiempo. Este polvo suelto inspirado en Bob Esponja ayuda a fijar el maquillaje dejando un acabado suave y completamente aterciopelado para que la piel luzca uniforme. Su textura micropulverizada se difumina fácilmente y se siente liviana sobre el rostro, mientras que su subtono amarillo ayuda a neutralizar visualmente los tonos fríos, siendo el aliado perfecto para corregir y perfeccionar la zona de la ojera.",
  colaboracion: "Paramount",
  category_new: "Nueva colección"
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
  colaboracion: "Disney",
  tonos: ["01", "02"]
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
  category_new: "Nueva colección",
  tonos: ["01", "02", "03"]
},
{
  id: "Rht2202",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor Baked Lucky - Rht2202",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/Rht2202.jpg",
  description: "- Dale vida y color a tus mejillas con este dúo de rubores.\n- Su textura en polvo es suave y se desliza fácilmente sobre la piel, dejando un acabado mate natural que realza tus facciones de forma increíble.\n- Textura aterciopelada que se difumina sin esfuerzo.\n- Práctico dúo en tonos corales: uno claro y otro más oscuro, perfectos para toda ocasión.\n- Un must en tu cosmetiquera: Combina, mezcla o luce cada tono por separado para un look siempre fresco y en tendencia.",
  category_new: "Nueva colección"
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
  description: "- Su fórmula en polvo asegura duración y un acabado 100% mate en tu piel.\n- Este Kit incluye 3 tonalidades: durazno, coral claro y coral oscuro.\n- Los rubores cálidos se funden en la piel creando un look suave y sofisticado.\n- Pigmentación media, puedes construirla según tu gusto.\n- Incluye espejo HD para que apliques o retoques tu rubor en cualquier momento.",
  category_new: "Nueva colección"
},
{
  id: "Ktt2249",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Kit Rubores Toy - Ktt2249",
  price: 12000,
  image: "images/productos/Maquillaje/Rostro/Ktt2249.jpg",
  description: "Consigue un look poderoso con este dúo infaltable de rubores. Incluye un rubor en crema y uno en polvo de la misma tonalidad. Este kit es perfecto para dar color a las mejillas con un efecto saludable y fresco. Permite aplicar el producto en crema para un acabado radiante y fundente, y usar el polvo para sellarlo, prolongando su duración e incrementando la intensidad del tono. Son de alta pigmentación y acabado mate garantizan un efecto prolijo y de larga duración. Son de único tono.",
  category_new: "Nueva colección"
},
{
  id: "Kct2246",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Kit Carrusel Primer Brillo - Kct2246",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/Kct2246.jpg",
  description: "¡Los básicos e infaltables de toda cosmetiquera ahora en combo! Este kit de primer y lip gloss se convertirá en uno de tus esenciales para el diario. El primer (o prebase) es un producto de maquillaje que se aplica después de tu crema hidratante y antes de la base. Sirve principalmente para alisar la piel, rellenar los poros y líneas de expresión, y crear una barrera que hace que tu maquillaje luzca impecable por mucho más tiempo. Y el Lip gloss aporta luminosidad, da un efecto de volumen y crea un acabado jugoso en los labios con destellitos que le dan un acabado más glowy. No aporta color, por lo que es ideal para combinar con tus tintas o labiales favoritos y crear un lip combo excepcional.",
  category_new: "Nueva colección"
},
{
  id: "RCS2205",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor En Crema Star - RCS2205",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/RCS2205.jpg",
  description: "Rubor líquido ideal para lograr un look natural con un toque de color en las mejillas.\nSu fórmula ligera y de fácil aplicación se difumina suavemente, dejando un acabado mate pero luminoso que aporta frescura al rostro durante todo el día.\nDisponible en 5 tonos: rosas, corales y un rosado chicle encantador.",
  category_new: "Nueva colección",
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
  description: "Maquilla tu piel logrando un acabado suave y completamente mate con los polvos compactos Golden. Podrás encontrar 7 tonos perfectos para una amplia gama de pieles.\n¡No es necesario aplicar base!\nEstos polvos te ayudan a unificar visiblemente el tono de tu piel.\nSu excelente pigmentación permite que con una sola aplicación notes la diferencia. Son de textura suave, logrando una piel tersa y un acabado aterciopelado.\nSu diseño premium y compacto es perfecto para llevar en tu cosmetiquera o bolso y retocar tu maquillaje en cualquier momento. Incluye un pomito aplicador, el cual te da una mayor cobertura.",
  category_new: "Nueva colección"
},
{
  id: "Scr1892",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Contorno En Crema Star - Scr1892",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/Scr1892.jpg",
  description: "Su fórmula ligera y fácil de aplicar permite una saturación de tono hermosa, creando sombras suaves y definidas.\n\nEste contorno líquido se difumina de manera uniforme, aportando un acabado radiante y sutil dependiendo de la cantidad que apliques.\n\nTiene una muy buena durabilidad manteniendo un look impecable durante el día.\nDisponible en un solo tono.",
  category_new: "Nueva colección"
},
{
  id: "MG11",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Corrector Magic Grande - MG11",
  price: 30000,
  image: "images/productos/Maquillaje/Rostro/MG11.jpg",
  description: "¡Ahora en tamaño GIGANTE!\nNuestro Magic Concealer llega en su versión más grande, manteniendo la misma calidad profesional y acabados del formato original de 2 g, pero ahora con 7 veces más producto.\nSu aplicador extra grande permite una aplicación más rápida y uniforme, mientras que su textura cremosa se desliza fácilmente sobre la piel, brindando alta cobertura y un acabado impecable.",
  category_new: "Nueva colección",
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
  category_new: "Nueva colección",
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
  category_new: "Nueva colección",
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
  category_new: "Nueva colección",
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
  description: "Luce un rostro definido, natural y radiante con nuestro contorno en barra super cremoso.\nSu textura suave se desliza con facilidad sobre la piel y se difumina sin esfuerzo, dejando un acabado impecable.\n\nFórmula cremosa y de alta adherencia.\nExcelente pigmentación, modulable según tu gusto.\nTono cálido que no se ve naranjado al aplicarlo.",
  category_new: "Nueva colección"
},
{
  id: "Lov3",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor Garden Of Love - Lov3",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/Lov3.jpg",
  description: "Dale color y vida a tu rostro con estos rubores en tonos perfectos para cualquier ocasión.\n- Sus tonalidades entre rojizos, rosados claros y coral se adaptan a todo tipo de piel y aportan un acabado natural o más intenso, según tu estilo.\n-Textura en polvo ultra suave, fácil de difuminar.\n- Logras una alta pigmentación con poca cantidad de producto.\n- Empaque compacto, hermoso y con gran contenido: Ideal para llevar en tu bolso o cosmetiquera.\n- Incluye 3 tonos muy similares, que se envían surtidos.\n- Perfecto para uso diario o para completar un look más elaborado.",
  category_new: "Nueva colección",
  tonos: ["01", "02", "03"]
},
{
  id: "Psc1251",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor Pink Sweet Cotton - Psc1251",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/Psc1251.jpg",
  description: "- Un iluminador duocromático rosa coral, que deja un efecto glowy precioso en los pómulos.\n- Se adapta perfectamente a todo tipo de piel.\n- Puedes combinarlos entre sí para crear tonos únicos y favorecedores.\n- Textura ultra suave y tersa, fácil de difuminar sin dejar parches.\n¡Ideal para llevar en tu cartera!\nImportante: Existen dos referencias muy similares que se envían surtidas.",
  category_new: "Nueva colección"
},
{
  id: "Pct1798",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Pompon Cotton - Pct1798",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/Pct1798.jpg",
  description: "Si amas una piel glowy, este pompón será tu nuevo favorito. Su pigmento plateado brillante aporta un toque de luminosidad que transforma cualquier look.\n\nSu diseño inspirado en el algodón de azúcar no solo es adorable: evita derrames y mantiene el producto en su lugar, para llevarlo contigo sin preocupaciones.",
  category_new: "Nueva colección"
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
  category_new: "Nueva colección",
  tonos: ["00", "01", "02"]
},
{
  id: "Rbt1769",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor Bakery - Rbt1769",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/Rbt1769.jpg",
  description: "- Necesitas este kit de rubores y bronzer Bakery para crear maquillajes increíbles y llenos de vida.\n\n- En esta paleta encontrarás 3 tonos de rubor en rosas y duraznos, además de un bronzer ideal para aportar calidez y definición al rostro.\n\n- Su fórmula en polvo tiene una textura horneada que deja tu piel súper suave y ligera, además se difumina fácilmente sobre la piel, logrando un acabado completamente mate, natural y uniforme. - Perfecta para darle color al rostro sin parches y con un acabado hermoso todos los días.",
  category_new: "Nueva colección"
},
{
  id: "Rtg1725",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Rubor Tutu Glow - Rtg1725",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/Rtg1725.jpg",
  description: "- 4 tonos en una sola paleta que abarcan dos rubores satinados rosita y coral y dos iluminadores champaña y dorado.\n- Los puedes utilizar para sellar tu rubor líquido o cremoso favorito y darle un acabado luminoso de infarto.\n- Textura suave y fácil de difuminar.\n- Esta paleta es práctica y fácil de llevar a todas partes para que retoques tu maquillaje en cualquier momento.\n- Utilízalo también como iluminador o sombra satinada.",
  category_new: "Nueva colección"
},
{
  id: "Ict1768",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Iluminador Chocolate - Ict1768",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/Ict1768.jpg",
  description: "- Vienen 4 tonos: plateado, oro rosa, dorado y terracota dúo cromático con destellos plateados.\n- Su textura es suave y las partículas de brillo son sutiles, aportando un brillo hermoso pero sofisticado.\n- Gracias a su fórmula fina aporta una apariencia radiante que se difumina a la perfección sobre el rostro.",
  category_new: "Nueva colección"
},
{
  id: "SLU1936",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra En Barra + Líquida Level Up - SLU1936",
  price: 10000,
  image: "images/productos/Maquillaje/Ojos/SLU1936.jpg",
  description: "Descubre esta sombra 2 en 1 que te permitirá recrear looks satinados con todo el brillo e impacto que necesitas.\nUn extremo con sombra líquida satinada de alta pigmentación y aplicador de punta fina, ideal para usar también como delineador perlado.\nSu otro extremo contiene la sombra cremosa tipo mantequilla, la cual se difumina fácilmente sin dejar parches.\nSon de excelente adherencia y durabilidad.\nDisponible en 4 tonos perlados versátiles: dorados y oro rosa.\nPerfecta para llevar en el bolso y realzar tu mirada con un solo producto.",
  category_new: "Nueva colección",
  tonos: ["01", "02", "03", "04"]
},
{
  id: "BAQ564",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Base Aqua OG - BAQ564",
  price: 30000,
  image: "images/productos/Maquillaje/Rostro/BAQ564.jpg",
  description: "La base ideal para tus looks diarios\nUna de nuestras marcas favoritas para el cuidado de la piel y una de las más vendidas en la tienda.\nPerfecta para todo tipo de piel, especialmente si buscas un acabado natural y uniforme.\nOfrece una cobertura media, de larga duración, con una textura ligera y formulación semicremosa que se adapta fácilmente a tu rutina diaria.",
  tonos: ["04", "06"]
},
{
  id: "IPU1654",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Iluminador Pin - IPU1654",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/IPU1654.jpg",
  description: "¡El glowy nunca faltará en tu vida si este iluminador conforma tu maquillaje!\nVienen dos tonos de iluminador prensado, uno en tono champaña y otro en rosa champaña.\nTienen una pigmentación de otro planeta. Con poco producto satura increíble.\nSu textura es suave.\nLlévala contigo siempre."
},
{
  id: "Slb1927",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Iluminador Liquido Brilla - Slb1927",
  price: 8000,
  image: "images/productos/Maquillaje/Rostro/Slb1927.jpg",
  description: "¡Deslumbra tus maquillajes de la mano de este iluminador!\n\nAgrega un glowy perfecto pero con un plus y es que es que se ve muy sutil en tus looks. Su textura es cremosa y muy ligera. Al aplicarlo se difumina fácil. No te deja sensación pesada. Viene en un tono único champán precioso.",
  category_new: "Nueva colección"
},
{
  id: "WGT1652",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Iluminador Wonderland Glow - WGT1652",
  price: 20000,
  image: "images/productos/Maquillaje/Rostro/WGT1652.jpg",
  description: "¡El iluminador le agrega ese toque mágico a tu maquillaje de rostro!\n\nUnas mejillas perceptibles y perfectas con tonos satinados.\nUn producto en donde se combinan 4 tonos entre rosas, dorados y un toque de blanco.\nEs muy versátil, ya que le queda bien a todo tipo de piel.\nAl ser mineralizado, sus partículas dan un glow extra, ese que tanto te gusta.\nSu pigmentación es increíble."
},
{
  id: "BLT2219",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Gloss Mágico Groovy - BLT2219",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/BLT2219.jpg",
  description: "¡El brillo mágico que nunca pasa de moda! Este gloss reacciona al pH natural de tus labios, creando un tono rosado que puede ir de suave a moderado según cada persona, para un resultado único y personalizado. Son 2 tonos, ambos con ese acabado rosita. Su textura ligera tipo lip oil brinda una sensación cómoda, suave e hidratante, mientras sus delicados destellos aportan un brillo hermoso que resalta los labios sin sentirse pesado. Además, cuenta con un práctico aplicador de silicona, ideal para usar solo o sobre tus labiales y tintas favoritas para crear lip combos espectaculares. Un imprescindible para quienes aman los labios brillantes, jugosos y con un toque de magia."
},
{
  id: "Dyt2648",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Labial Doble Vaquero Toy Story - Dyt2648",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/Dyt2648.jpg",
  description: "Dos formas de expresar tu estilo en un solo producto. El Labial Doble Toy Story combina color y versatilidad para crear diferentes looks, permitiéndote mezclar el acabado que mejor se adapte a cada ocasión. Su práctica presentación reúne dos opciones en un solo producto, por un costado encontrarás un labial semi mate y por el otro el mismo tono pero con acabado satinado, ideal para acompañarte desde el día hasta la noche con comodidad y personalidad. Disponible en 3 tonos, rosado, café y uno naranja. Inspirado en el mágico universo de Toy Story, es perfecto para quienes disfrutan experimentar con su maquillaje y llevar siempre una alternativa para complementar cualquier estilo.",
  colaboracion: "Disney",
  tonos: ["01", "02", "03"]
},
{
  id: "Dyt2683",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Lip Balm Glitter Ham - Dyt2683",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/Dyt2683.jpg",
  description: "Mágico desde el empaque hasta el color. Consiente tus labios con color  y un delicado toque de brillo. El Lip Balm Ham combina cuidado, belleza e innovación gracias a su textura de gelatina; son 3 tonos diferentes en su barra, pero el color es el mismo. Te ayuda a mantener los labios suaves, cómodos y con una apariencia saludable. Su textura ligera se desliza fácilmente, proporcionando una sensación confortable y un acabado natural ideal para cualquier ocasión.",
  colaboracion: "Disney",
  tonos: ["02", "03"]
},
{
  id: "BLT2222",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Gloss Retro Glow - BLT2222",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/BLT2222.jpg",
  description: "¡El gloss con aroma a fresa que llevarás en tu cartera siempre!\n\nMantén tus labios jugosos y de apariencia saludable con los gloss retro Glow.\nSu fórmula es suave y ligera. Perfectos para el diario.\nNo da sensación pegajosa y no son pesados. Aportan un leve color rosita, perfecto para combinar con tus labiales o tintas favoritas y crear un lip combo increíble.\nTienen una fragancia frutal dulce y ligera.\nSu aplicador es ideal para que retoques el brillo durante el día sin manchas.",
  tonos: ["01", "02"]
},
{
  id: "Gcg2577",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Gloss Cafe Garden - Gcg2577",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/Gcg2577.jpg",
  description: "- El aliado perfecto para lograr unos labios con un tono cálido, elegante y versátil.\n- El tono café, protagonista de las tendencias actuales, se ha convertido en un imprescindible por su capacidad de realzar cualquier look, desde los más naturales hasta los más sofisticados.\n -Aporta profundidad y un estilo moderno que favorece todos los tonos de piel.\n- Su acabado brillante realza el color natural de los labios, dejando un efecto luminoso y jugoso. Además, su textura es cómoda, ligera y no pegajosa, permitiendo una aplicación uniforme. Perfecto para usar solo o sobre tu labial favorito para potenciar el color.",
  category_new: "Nueva colección"
},
{
  id: "DYT2571",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Furia - DYT2571",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/DYT2571.jpg",
  description: "- La Tinta de Labios Furia de Trendy está diseñada para quienes aman un color intenso con un acabado hermoso y duradero.\n- Su textura ligeramente oleosa permite que se deslice con facilidad, logrando una aplicación uniforme sin sensación pesada ni pegajosa.\n- Aporta un tono vibrante que se fija en los labios dejando un efecto natural.\n- Perfecta para usar sola con acabado difuminado o como base para potenciar tu gloss favorito.\n- Es la tinta perfecta para lograr looks versátiles, en tendencia y con la actitud Furia que te encanta.",
  colaboracion: "Disney"
},
{
  id: "BTT2221",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Voluminizador Boutique - BTT2221",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/BTT2221.jpg",
  description: "Es ideal para dar volumen de forma natural. Su fórmula ligera ofrece un efecto voluminizador suave. Cuenta con aplicador de silicona, que permite una aplicación uniforme, precisa y delicada, adaptándose perfectamente a la forma de los labios. Disponible en tonos transparentes y un poco más rojizos, perfectos para el uso diario o para complementar cualquier look. Producto no apto para niñas menores de 13 años."
},
{
  id: "DYT2572",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Voluminizador Furia - DYT2572",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/DYT2572.jpg",
  description: "¡Tu favorito ahora en versión individual!\n\n- Brillo labial voluminizador con brillitos sutiles que aportan un acabado luminoso y hermoso.\n- Su fórmula genera un ligero cosquilleo que ayuda a dar la apariencia de labios más grandes y definidos.\n- Aporta un leve tono rojizo casi transparente, perfecto para realzar el color natural de los labios sin recargarlos.\n- Ideal para usar solo o sobre tu labial favorito y lograr un efecto jugoso y voluminoso.\n- El ligero picor es normal y forma parte del efecto voluminizador.",
  colaboracion: "Disney"
},
{
  id: "BHC2273",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Llavero Hippie Chic - BHC2273",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/BHC2273.jpg",
  description: "Dale brillo a tus labios y estilo a tus accesorios con este gloss, que incluye un llavero metálico decorativo ideal para colgar en tu bolso, llaves o tener en tu cosmetiquera.\nSu fórmula ligera aporta un acabado brillante con destellos y deja los labios con un look fresco y divertido.\n\nGloss labial con acabado brillante y efecto glitter.\nTextura suave y fácil de aplicar.\n\nDos tonos disponibles: uno rosado y uno oro rosa perfectos que aportan unos destellos sutiles."
},
{
  id: "KPG2087",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Lip Combo Pink And Gold - KPG2087",
  price: 12000,
  image: "images/productos/Maquillaje/Labios/KPG2087.jpg",
  description: "Un lip combo que será tu compañía a donde quiera que vayas gracias a su tamaño. Es perfecto para darle personalidad a tus labios, dar volumen óptico, definir el contorno y lograr que el color dure mucho más tiempo. Contiene dos productos: un delineador y un gloss, con el que podrás crear un efecto degradado. Es pequeño pero poderoso en tus labios. Gloss de textura suave que no deja sensación pegajosa. Lápiz delineador de punta tajable y fórmula cremosa de excelente pigmentación. Son dos referencias con tonos rosita y nude; cada uno incluye los dos productos.",
  category_new: "Nueva colección",
  tonos: ["02", "03"]
},
{
  id: "Dy2105",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Twist Villanos - Dy2105",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/Dy2105.jpg",
  description: "Los brillos pueden transformar cualquier look así como lo harán los de la nueva colección inspirada en Villanos que le dan el toque a las historias, ahora también pueden darte ese toque de poder y encanto que necesitas.\n\n- ¡3 tonos encantadores para que elijas tu favorito!\n- Tus villanos favoritos se unen para darle un acabado mágico a tus labios.\n- Su textura suave y ligera se difumina a la perfección.\n- Tonos rositas con leves destellos que aportan un acabado más jugoso y suave a tus labios.\n- Diseños únicos que llamarán la atención donde quieras que vayas.",
  colaboracion: "Disney",
  tonos: ["Hades", "Queen", "Úrsula"]
},
{
  id: "Dy2080",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit Labios Stitch - Dy2080",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/Dy2080.jpg",
  description: "¡El aroma tropical que tus labios merecen! Dales color e hidratación a tus labios con este dúo infaltable. Perfectos para llevar en la cosmetiquera. Incluye un bálsamo hidratante y un gloss rosita. El lip balm o bálsamo labial sirve para hidratar, proteger y reparar los labios. Su textura crea una barrera que evita la pérdida de humedad causada por el clima frío, el viento o el sol. Además, previene grietas y es ideal para usarlo a diario. Su textura ligera deja los labios suaves, frescos y sin sensación pegajosa. El gloss o brillo labial sirve para aportar luminosidad, dar un efecto de volumen y crear un acabado jugoso en los labios que tiene un sutil toque de color. Perfecto para usar solo o sobre tintas y labiales mate. No es pegajoso ni pesado. Un diseño exclusivo inspirado en Stitch que amarás.",
  colaboracion: "Disney"
},
{
  id: "Dy2159",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Tinta Gloss Jack - Dy2159",
  price: 20000,
  image: "images/productos/Maquillaje/Labios/Dy2159.jpg",
  description: "El lip combo perfecto para unos labios irresistibles, inspirado en el clásico de Disney, Tim Burton´s The Night Before Christmas.\n- Este dúo incluye una tinta de labios oleosa con textura ultrasuave y fácil de difuminar; te aportará un tono y un aroma a vino que te sorprenderá.\n- Por el otro lado, encontrarás un gloss con un toque de color rosa y destellos, que no solo te aportará un toque de color, sino también un efecto mentolado refrescante y un aroma delicioso.\n- Aplica la tinta en tus labios y difumínala para un efecto natural.\n- Si buscas un toque brillante, añade el gloss encima y consigue un lip combo irresistible.\n- Este dúo elevará tu look y hará que tus labios luzcan espectaculares siempre.",
  colaboracion: "Disney"
},
{
  id: "Dy2099",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillos De Los Recuerdos Intensamente - Dy2099",
  price: 5000,
  image: "images/productos/Maquillaje/Labios/Dy2099.jpg",
  description: "Nos inspiramos en Intensamente y en cada uno de sus icónicos personajes.\nCada brillo representa una emoción, ¡Elige tu favorito!\nSu diferencia es que varían sus tonos entre rosaditos y transparentes con una leve escarchita.\nSu fragancia te encantará. Aporta un leve tono rosa a tus labios y viene con destellos dorados que le darán un plus a cualquier maquillaje.\nPerfecto para llevar en la cosmetiquera o bolso.",
  colaboracion: "Disney",
  category_age: "Para niñas",
  tonos: ["Alegría", "Ansiedad", "Furia"]
},
{
  id: "Bbs2096",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit X 3 Brillos Bloom To Shine - Bbs2096",
  price: 18000,
  image: "images/productos/Maquillaje/Labios/Bbs2096.jpg",
  description: "Acá está el secreto para unos labios radiantes y deslumbrantes! Estos glosses o brillos labiales sirven para aportar luminosidad, dar un efecto de volumen y crear un acabado jugoso en los labios. Este kit incluye 3 brillos satinados ideales para cualquier ocasión. Con una textura ligera tipo gloss, proporciona un brillo duradero sin dejar sensación pegajosa en los labios. Su fragancia te cautivará. Úsalos solos o sobre tu labial mate favorito para un acabado luminoso y sofisticado.",
  category_new: "Nueva colección"
},
{
  id: "Kcl2095",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit Crema Y Brillo Bright And Fun - Kcl2095",
  price: 12000,
  image: "images/productos/Maquillaje/Labios/Kcl2095.jpg",
  description: "¡Este será tu dúo favorito a partir de ahora! El lip balm o bálsamo labial sirve para hidratar, proteger, reparar los labios y aportar un tono sutil dependiendo de tu pH. Su textura crea una barrera que evita la pérdida de humedad causada por el clima frío, el viento o el sol. Además, previene grietas y es ideal para usarlo a diario. Su textura ligera deja los labios suaves, frescos y sin sensación pegajosa. También viene con una mini crema de manos que hidrata la piel sin dejar sensación grasosa, absorbiéndose rápidamente y dejando un aroma delicioso que te enamorará.",
  category_new: "Nueva colección"
},
{
  id: "KLT2088",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit Labios Love Travel - KLT2088",
  price: 8000,
  image: "images/productos/Maquillaje/Labios/KLT2088.jpg",
  description: "Dale a tus labios el cuidado que merecen. Este kit exclusivo es ideal para ti y para tu mini Trendy lover. El lip balm o bálsamo labial sirve para hidratar, proteger y reparar los labios. Su textura crea una barrera que evita la pérdida de humedad causada por el clima frío, el viento o el sol. Además, previene grietas y es ideal para usarlo a diario. Su textura ligera deja los labios suaves, frescos y sin sensación pegajosa. El gloss o brillo labial sirve para aportar luminosidad, dar un efecto de volumen y crear un acabado jugoso en los labios que tiene un sutil toque de color. Perfecto para usar solo o sobre tintas y labiales mate. No es pegajoso ni pesado. Su tamaño es viajero perfecto para llevar a todas partes sin que ocupe mucho espacio. El aroma de este set te va a enamorar.",
  category_age: "Para niñas"
},
{
  id: "Dy2075",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Holográfico Stitch - Dy2075",
  price: 8000,
  image: "images/productos/Maquillaje/Labios/Dy2075.jpg",
  description: "Su diseño adorable es el match perfecto para tus maquillajes diarios. Son dos diseños que se envían surtidos.\nCada uno es perfecto para utilizarlos solos o aplicar sobre cualquier labial y crear un look apto para cualquier ocasión.\nContiene leves partículas escarchadas holográficas que le dan brillo y un acabado jugoso a tus labios. Sentirás una deliciosa fragancia al destaparlo.\nDejan una sensación suave y ligera en tus labios sin aportar un acabado pegajoso.\nSe envía Surtido",
  colaboracion: "Disney"
},
{
  id: "DY2098",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit Labios Furia - DY2098",
  price: 25000,
  image: "images/productos/Maquillaje/Labios/DY2098.jpg",
  description: "El kit incluye un gloss voluminizador con destellos, un brillo de labios tono cereza y un delineador de labios, juntos hacen en match perfecto para lucir unos labios rojos de impacto.\nLa calidad y versatilidad de este producto te va a enamorar. El delineador de labios es de una textura cremosa que se desliza fácilmente sobre tus labios, es mate y de excelente durabilidad.\nEl gloss será tu favorito desde la primera aplicación. Cuando apliques el producto, quedará un brillo hermoso en tus labios.\nSi quieres para finalizar, aplica el gloss voluminizador, esto no solo aporta brillo con destellos, sino que también da la ilusión de labios más jugosos y rellenos, recuerda que puedes sentir una sensación de picor y ardor, aplícalo progresivamente y verifica que tan sensible puedes ser al uso del mismo.\nEste lip combo es ideal para cualquier ocasión en donde quieres que tus labios sean los protagonistas. No apto para niños.",
  colaboracion: "Disney"
},
{
  id: "BAT1878",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo De Labios Aura - BAT1878",
  price: 20000,
  image: "images/productos/Maquillaje/Labios/BAT1878.jpg",
  description: "¡El gloss más viral de internet! El Brillo de Labios Aura Trendy está diseñado para quienes buscan unos labios perfectos con un acabado tipo espejo y son amates al acabado jugoso del gloss. Con su aplicador de gran tamaño y textura ligera, este brillo de labios se desliza suavemente sin dejar sensación pesada. Su fórmula enriquecida con componentes hidratantes actúa en ellos dándole una apariencia saludable, ideal para brindar jugosidad a los labios resecos mientras aporta un color vibrante.\n\nDisponible en 6 tonos versátiles que incluyen labiales nude, labial fucsia y el clásico brillo rosado, el Gloss Aura es la pieza clave para crear tu lip combo favorito. Ya sea que busques un look de labios rojos naturales o prefieras un tono naranja o mocca, este gloss labial con aroma a fresa garantiza una hidratación prolongada, funcionando casi como un serum para labios de uso diario.",
  category_new: "Nueva colección",
  tonos: ["01", "02"]
},
{
  id: "Bpt1963",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo De Labios Lip Oil Pretty Things - Bpt1963",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/Bpt1963.jpg",
  description: "Su pigmentación es construible, así que entre más apliques más se notará el color.\nTienen una textura suave y ligera, así que se difuminan suavemente sobre tus labios.\nSon 6 tonos diferentes, elige tu color favorito.\nSus colores son rojizos y uno violeta, ideales para aportar un leve color.\nSu textura es espesa, así que se esparce sobre tus labios fácilmente.",
  category_new: "Nueva colección",
  tonos: ["01", "02"]
},
{
  id: "STT1328",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Tinta Soda - STT1328",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/STT1328.jpg",
  description: "¡Tinta de labios en forma de gaseosa! El producto que nunca pasará de moda.\n\nEs una tinta de labios que se desliza fácilmente sobre los labios. Su textura es acuosa y de excelente pigmentación. No deja una sensación pesada. Larga duración. Viene en un solo tono rojizo que queda perfecto para todo tipo de piel. Su tamaño es perfecto para llevar en todas partes."
},
{
  id: "CC11",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Cotton Candy - CC11",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/CC11.jpg",
  description: "Es un brillo transparente que deja un efecto gloss con glitter sobre los labios gracias a las partículas de escarcha que se reflejan.\nSon 3 tonos distintos pero todos te dejan el mismo resultado.\nViene con un aplicador en goma divino que ayuda a dejar un efecto húmedo en los labios.\nHuelen delicioso."
},
{
  id: "BCC1366",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Cherry Color - BCC1366",
  price: 5000,
  image: "images/productos/Maquillaje/Labios/BCC1366.jpg",
  description: "- Nunca pasan de moda y los Gloss Cherry tienen todo lo que amamos de un buen brillo labial.\n- Vienen en 5 tonalidades nude perfectas para el día a día, maquillajes naturales o cualquier ocasión.\n- Su textura es suave, cómoda y ligera sobre los labios, aportando un acabado brillante sin sensación pesada o pegajosa.\n- Son ideales para usar solos o sobre tu labial favorito si quieres unos labios mucho más protagonistas.\n- Se envían surtidos, pero seguro te encantará el que te llegue."
},
{
  id: "KSC1737",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit De Glosses Sweet Cream - KSC1737",
  price: 20000,
  image: "images/productos/Maquillaje/Labios/KSC1737.jpg",
  description: "- Este set de tres piezas es el sueño de cualquier amante de los labiales nude.\n- Cada brillo cuenta con la tendencia de lip glosses con aplicador grueso, lo que permite una aplicación generosa que envuelve los labios en una capa de suavidad extrema.\n- Su fórmula cremosa es ideal para quienes sufren de labios resecos, aportando un efecto volumen visual y una sensación de confort que dura horas sin ser pegajosa.",
  tonos: ["01", "02", "03", "04", "05"]
},
{
  id: "Hl15",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Magico Honey - Hl15",
  price: 6000,
  image: "images/productos/Maquillaje/Labios/Hl15.jpg",
  description: "Labios hermosos, con color en segundos y una sensación hidratante desde la primera aplicación. Este brillo mágico reacciona al pH natural de tus labios, creando un tono único que se adapta a ti y realza tu color natural. Su fórmula enriquecida con aceites ayuda a mantener los labios suaves e hidratados, mientras aporta un acabado luminoso y fresco. Disfruta de una textura cómoda, ligera y agradable de llevar durante todo el día, con un toque de color personalizado y un brillo que resalta la belleza natural de tus labios.",
  category_new: "Nueva colección"
},
{
  id: "Dlt1270",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Delineador De Labios - Dlt1270",
  price: 6000,
  image: "images/productos/Maquillaje/Labios/Dlt1270.jpg",
  description: "- El Delineador Jumbo Cupcake redefine la técnica del contorno labial.\n- Su formato ancho y su mina rica en ceras naturales permiten un deslizamiento sin fricción, ideal para labios resecos que necesitan definición sin maltrato.\n- Funciona como el ancla perfecta para labiales duraderos, creando una barrera física que impide que el color se desplace, mientras que su alta pigmentación permite usarlo como una barra labial mate de cobertura total.",
  category_new: "Nueva colección",
  tonos: ["01", "02", "03", "04", "05", "06"]
},
{
  id: "BFG1776",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit X8 Forever Gloss - BFG1776",
  price: 25000,
  image: "images/productos/Maquillaje/Labios/BFG1776.jpg",
  description: "Tus labios requieren un color diferente cada día.\n\nCompleta tu rutina de maquillaje con este práctico kit de 8 glosses con color en tonos rosas, rojizos y nudes.\n\nSu textura suave y ligera brinda un acabado brillante que realza los labios, aportando color y frescura con una durabilidad media.\n\nPerfectos para crear diferentes looks y lucir unos labios radiantes en cualquier ocasión."
},
{
  id: "7498B",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Tinta Heladito - 7498B",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/7498B.jpg",
  description: "Nuestra tinta de labios líquida es de textura ultraligera que se absorbe en la piel. Sirve para aportar un color de larga duración que resiste a la transferencia, logrando un efecto de \"tatuaje\" natural que tiñe los labios durante horas sin necesidad de retoques. Lograrás un efecto de color natural y fresco con esta tinta multifuncional, ideal para complementar cualquier maquillaje, ya que puedes usarla como rubor o sombra de ojos. Es ideal si quieres modificar el color de tus labios a unos más rojitos con un aspecto saludable y luminoso. Puedes usarlo solo o complementarlo con un brillo o gloss.",
  category_new: "Nueva colección",
  tonos: ["01", "02", "03", "04"]
},
{
  id: "7999A",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Tinta Frutas - 7999A",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/7999A.jpg",
  description: "¡Color natural para labios y mejillas en un solo producto!\n\nEstas tintas de frutas aportan un tono rojito natural perfecto para looks frescos y ligeros.\nSu textura acuosa se adhiere rápidamente a la piel, manteniendo el color por horas.\nPuedes usarlas como labial o rubor para darle a tu maquillaje un acabado más natural y saludable.\nTodas las referencias tienen coloración roja y una duración aproximada de 4 horas.",
  category_new: "Nueva colección",
  tonos: ["01", "02", "03", "04"]
},
{
  id: "Kbg1400",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit X 5 Garden Gloss - Kbg1400",
  price: 20000,
  image: "images/productos/Maquillaje/Labios/Kbg1400.jpg",
  description: "Perfecto para llevar contigo y estar lista para cualquier ocasión.\nTextura suave y cómoda en los labios.\nCada cajita incluye 5 tonos: rosas, nude, tierras, neutros y rojizos. Acabados satinados y neutros.\nSe adaptan a todo tipo de ocasión.\nAroma delicioso que amarás.\nTambién puedes usarlos sobre labiales mates para darles un toque de brillo y frescura.",
  category_new: "Nueva colección"
},
{
  id: "Vpg1966",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Voluminizador Plump Gloss - Vpg1966",
  price: 5000,
  image: "images/productos/Maquillaje/Labios/Vpg1966.jpg",
  description: "Logra unos labios de impacto y glossy con esta mini cápsula.\nDale volumen a tus labios, al principio sentirás una leve picazón, es un efecto normal.\nEn minutos unos labios más gruesitos.\nDisponibles en tres aromas deliciosos.\nSu textura es suave, no te deja sensación pesada.\nSe envían surtidos.\nModo de uso: Si es la primera vez que lo pruebas, te recomendamos usar poco producto y esperar alrededor de un minuto, allí vas sintiendo la sensación de picor, tus labios en un transcurso de 5 minutos quedarán con el resultado final.\n\nInfo adicional: \"No recomendamos este producto para pieles o labios sensibles.\nSe envian surtidos\"",
  category_new: "Nueva colección"
},
{
  id: "Bmp1920",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit X 3 Gloss Mood Pills - Bmp1920",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/Bmp1920.jpg",
  description: "Estas píldoras son el remedio perfecto para el síndrome de maquillaje aburrido.\nKit de 3 glosses con el glow más precioso de todos.\nUtilízalas para devolverle el brillo y glamour a tus looks.\nEn cada cajita encuentras 3 tonos diferentes, entre oro rosa, rosado y uno con destellos dorados.",
  category_new: "Nueva colección"
},
{
  id: "Bms1596",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit Labios Soda Pop - Bms1596",
  price: 18000,
  image: "images/productos/Maquillaje/Labios/Bms1596.jpg",
  description: "¡El S.O.S para tus labios! Lo necesitas para el cuidado y una mejor apariencia en tus labios. Logra unos labios suaves, saludables y de impacto. Con este kit lograrás hidratación con un toque de brillo. Incluye una mascarilla/bálsamo labial diseñada para nutrir, suavizar y proteger los labios, ayudando a mantenerlos suaves y muy saludables. Se complementa con un brillo de textura ligera que aporta un acabado luminoso y natural, perfecto para usar solo o sobre el bálsamo. Un dúo práctico muy ideal para el uso diario.",
  category_new: "Nueva colección"
},
{
  id: "Tpi1414",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Tinta Ice Paleta - Tpi1414",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/Tpi1414.jpg",
  description: "¡Alerta para que te unas a la tendencia de la tinta de labios! Labios al estilo coreano con las nuevas Tintas Ice de Trendy. Viene en 4 tonos rojos hermosos muy similares. Su textura suave tipo aceitosa la hace una tinta hidratante. Tiene un leve olor a dulce delicioso. Son perfectas para darle un tono rojito a tus labios.",
  category_new: "Nueva colección"
},
{
  id: "Bpm1426",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Magico Doble Perfect Match - Bpm1426",
  price: 8000,
  image: "images/productos/Maquillaje/Labios/Bpm1426.jpg",
  description: "Los labios son y serán siempre tendencia.Acabado: Semi Mate\nTipo de labial: Brillo\nFórmula cosmética: Líquida",
  category_new: "Nueva colección"
},
{
  id: "Hs24",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Mascarilla Hidratante De Labios Strawberry - Hs24",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/Hs24.jpg",
  description: "Mascarilla de labios sin color, ideal para el cuidado diario.\nSu textura suave se desliza fácilmente, brindando naturalidad inmediata, mientras su delicioso aroma a fresa convierte la aplicación en una experiencia sensorial.\nViene en un empaque hermoso, perfecto para llevar contigo y disfrutar de labios visiblemente más suaves y cuidados.\nDisponible en 2 presentaciones diferentes. El producto se entrega surtido según disponibilidad.",
  category_new: "Nueva colección"
},
{
  id: "HMA1460",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Hidratante Mágico Aloe Vera - HMA1460",
  price: 6000,
  image: "images/productos/Maquillaje/Labios/HMA1460.jpg",
  description: "Labios maquillados y saludables con un mismo producto. Este brillo mágico reacciona al pH natural de tus labios para revelar un tono único y personalizado en cada persona. Su textura ultra ligera e hidratante los mantiene suaves y cómodos, mientras aporta un color natural y favorecedor que dura por horas. Su presentación en barra es práctica y perfecta para llevar contigo a todas partes, ideal para darle un toque de color y brillo a tus labios en cualquier momento."
},
{
  id: "Lbe1921",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Labial Y Gloss Eclipse - Lbe1921",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/Lbe1921.jpg",
  description: "Un lip combo en un solo producto.\nEl dúo dinámico para un maquillaje de labios completo y de impacto.\nPor un costado viene un gloss con color y por el otro un labial en barra que aporta un acabado semi mate precioso.\nVienen 6 tonos disponibles entre rosas y rojos que se envían surtidos.\nSon de una textura suave sin sentirse pesados.",
  tonos: ["01", "02", "03", "04", "05", "06"]
},
{
  id: "DL07",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Tinta Y Brillo Doggie Lips - DL07",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/DL07.jpg",
  description: "¡Dos imprescindibles para unos labios irresistibles!\nBrillo labial + tinta, el dúo perfecto para lograr unos labios jugosos, con color y apariencia saludable.\nSu práctico diseño 2 en 1 reúne todo lo que necesitas: en un lado encontrarás la tinta para aportar un tono rojito natural y de larga duración, y en el otro un brillo labial para darle el toque final a tu maquillaje.\nViene en un único tono y es el compañero perfecto para llevar en tu cartera y retocar tus labios en cualquier momento."
},
{
  id: "HKC1550",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Lip Balm Kisses Rojo - HKC1550",
  price: 8000,
  image: "images/productos/Maquillaje/Labios/HKC1550.jpg",
  description: "Los lip balm Kisses son la clave para lograr unos labios suaves, brillantes y con ese acabado jugoso que nunca pasa de moda.\nVienen en 2 referencias que aportan un delicado tono rojizo, ideal para realzar el color natural de los labios de forma sutil y favorecedora.\nSu textura es cómoda, ligera y agradable de llevar durante el día, dejando los labios con una apariencia saludable y luminosa.\nAdemás, su práctico tamaño de bolsillo es perfecto para llevarlo contigo a todas partes y retocar cuando quieras.\nSe envían surtidos.",
  tonos: ["01", "02"]
},
{
  id: "BJL1726",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Just Lips Balm - BJL1726",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/BJL1726.jpg",
  description: "¡La salvación a los labios resecos!\nTu nuevo bálsamo favorito para tener unos labios suaves y con vida.\nViene en tres aromas y tonalidades muy sutiles:\nDurazno: Es un tono coral que no aporta tanto color.\nFresa: Tono rosa claro. Sandia:\nTono cereza.\nTe llegan surtidos.\nEs de una textura suave manteniendo los labios suaves durante bastante tiempo.\nCon él logras tener un acabado mucho más prolijo cuando apliques productos mate, además le aporta esa hidratación extra."
},
{
  id: "HRT1461",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Reparador Rosas - HRT1461",
  price: 6000,
  image: "images/productos/Maquillaje/Labios/HRT1461.jpg",
  description: "¡El cuidado diario que tus labios necesitan! Este bálsamo reparador en barra ayuda a mantener los labios suaves, protegidos y con una apariencia saludable. Su fórmula se desliza fácilmente, brindando una sensación cómoda e hidratante desde la primera aplicación. No aporta color, por lo que es perfecto para usar solo o como preparación antes de tu labial favorito. Además, su delicioso aroma hace que reaplicarlo durante el día sea aún más agradable. Llévalo siempre contigo y dale a tus labios el cuidado que merecen en cualquier momento."
},
{
  id: "TST1368",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Tinta School - TST1368",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/TST1368.jpg",
  description: "¡Las tintas en los labios son un estilo de vida!\n\nTus tintas favoritas están de regreso, ahora con un empaque renovado que las hace aún más irresistibles. Su fórmula a base de agua aporta una sensación cómoda sobre los labios y se distribuye fácilmente para lograr un acabado natural y uniforme.\nSu tono rojizo se adapta hermoso al color de los labios, creando ese efecto de \"labio naturalmente sonrojado\" que tanto nos encanta.\nAdemás, tienen excelente durabilidad para que disfrutes de un toque de color fresco durante horas."
},
{
  id: "HKS1551",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Lip Balm Kisses Sin Color - HKS1551",
  price: 8000,
  image: "images/productos/Maquillaje/Labios/HKS1551.jpg",
  description: "Los lip balm Kisses son la clave para lograr unos labios suaves, brillantes y con ese acabado jugoso que nunca pasa de moda.\nVienen en 2 referencias que no aportan color, realza la belleza natural de tus labios, aportando un brillo hermoso y una apariencia saludable.\nSu textura es cómoda, ligera y agradable de llevar durante el día, dejando los labios con una apariencia saludable y luminosa.\nAdemás, su práctico tamaño de bolsillo es perfecto para llevarlo contigo a todas partes y retocar cuando quieras.\nSe envían surtidos."
},
{
  id: "KBT1484",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit De Labios Tiger Lips - KBT1484",
  price: 35000,
  image: "images/productos/Maquillaje/Labios/KBT1484.jpg",
  description: "3¡Amado y bendito gloss de los 2000’s! La tendencia que perdurará por siempre. Estos glosses o brillos labiales sirven para aportar luminosidad, dar un efecto de volumen y crear un acabado jugoso en los labios. Encontrás en color transparente, con escarcha o con un toque de color. Lograrás reflejar la luz para que los labios luzcan más carnosos y saludables. Puedes usarlos solos o sobre tu labial favorito para cambiar su textura y agregar dimensión. Son el complemento perfecto para unos labios maquillados o naturales. ¡5 Glosses en una sola cajita! Las texturas son ligeras y fáciles de difuminar. Son de excelente pigmentación. Tienen un aroma delicioso."
},
{
  id: "LT18",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Voluminizador De Labios - LT18",
  price: 12000,
  image: "images/productos/Maquillaje/Labios/LT18.jpg",
  description: "Este voluminizador de labios está diseñado para proporcionar una apariencia más voluminosa y definida de forma temporal.\nAl aplicarlo es normal sentir una ligera sensación de picazón, hormigueo o frescura, ya que son parte del efecto que ayuda a potenciar el volumen de los labios.\nSi es tu primera vez usándolo, te recomendamos aplicar una pequeña cantidad y esperar unos minutos para conocer cómo responde tu piel.\nPuedes aplicar una segunda capa si deseas intensificar el efecto y te sientes cómoda con la sensación.\nLos resultados comienzan a apreciarse en pocos minutos y el efecto voluminizador puede durar entre 1 y 3 horas, dependiendo de cada persona.\n\nTip: Úsalo solo o sobre tu labial favorito para unos labios más llamativos y con apariencia más voluminosa.\nNo se recomienda para labios o pieles sensibles."
},
{
  id: "EML1727",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Dúo Exfoliante + Mascarilla De Labios Pink Lemon - EML1727",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/EML1727.jpg",
  description: "Dale a tus labios el cuidado que merecen con este dúo reparador, diseñado para ayudar a mejorar su apariencia y mantenerlos suaves todos los días.\nIncluye un exfoliante labial que ayuda a remover suavemente las células muertas y la resequedad acumulada, dejando los labios más lisos y preparados para recibir hidratación.\nAdemás, cuenta con una mascarilla reparadora que ayuda a acondicionar y suavizar los labios, aportándoles una apariencia más saludable y confortable.\nEs el complemento perfecto para preparar tus labios antes del maquillaje o para incluir en tu rutina de cuidado diario. La mascarilla tiene tonalidad naranja y el exfoliante tonalidad rosa.\nTip: Utilízalos juntos para conseguir unos labios más suaves, uniformes y listos para cualquier labial o gloss."
},
{
  id: "BKL1685",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Gloss Kiss Lips - BKL1685",
  price: 8000,
  image: "images/productos/Maquillaje/Labios/BKL1685.jpg",
  description: "El brillo en los labios es obligatorio.\n\n¡Le agrega el plus ideal!\n- Disponibles en 10 tonos entre rosas y nudes que son perfectos para toda ocasión.\n- Unos son con color y otros satinados.\n- Tienen un aroma delicioso\n- Deja un efecto de brillo con color extremo.",
  tonos: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]
},
{
  id: "BDT1749",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Gloss Dash - BDT1749",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/BDT1749.jpg",
  description: "Unos labios elegantes, modernos y siempre en tendencia.\n\nDisponible en 6 tonos entre rosas, nudes y terracotas, una selección versátil que complementa cualquier look y ocasión.\nSu aplicador de tamaño amplio permite una aplicación fácil, uniforme y cómoda.\nSu textura suave se desliza perfectamente sobre los labios sin dejar sensación pesada o pegajosa. Además de aportar un brillo hermoso, ofrece excelente duración para que tus labios se vean radiantes por más tiempo.\nSe envían surtidos.",
  tonos: ["01", "02", "03", "04", "05", "06"]
},
{
  id: "BHB1744",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Gloss Happy Berry - BHB1744",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/BHB1744.jpg",
  description: "Un gloss que nunca puede faltar.\n¡Es un básico en tu kit de maquillaje!\n- El brillo Happy Berry llegó para darle a tus labios un brillo extremo y suavidad instantánea.\n- Aporta un tono rosa muy sutil.\n- Se desliza con suavidad sobre tus labios."
},
{
  id: "BMT1748",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Gloss Maddie - BMT1748",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/BMT1748.jpg",
  description: "Unos labios elegantes, pero en tendencia.\n- Un lip gloss con una tonalidad perfecta para cada día, te llegan surtidos.\n- Son 6 tonos entre rosas, dorados y holográficos para que puedas combinar con tus look diarios.\n- Su aplicador es grueso, perfecto para la aplicación del gloss.\n- Son ultra suaves y no deja sensación pesada.\n- Es de excelente durabilidad.",
  tonos: ["01", "02", "03", "04", "05", "06"]
},
{
  id: "RLG1846",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Red Lips - RLG1846",
  price: 8000,
  image: "images/productos/Maquillaje/Labios/RLG1846.jpg",
  description: "Un gloss con color para darle protagonismo a tus labios. Es perfecto para complementar tus maquillajes. Vienen 6 tonos entre nudes, rojos y terracotas. Se envían surtidos. Son de una textura suave, se adhiere muy bien sin dejar sensación pesada o grasosa. Tienen un aroma deli",
  tonos: ["01", "02", "03", "04", "05", "06"]
},
{
  id: "BFT1756",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Gloss Flash - BFT1756",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/BFT1756.jpg",
  description: "Los gloss ya son parte indispensable de nuestro maquillaje. Gloss donde los labios serán centro de atención. Perfecto para brindarle a tus labios una apariencia saludable y jugosita. Es el complemento perfecto para tu día a día. Viene en 6 tonos con glitter entre rosas, dorados, oro rosas y holográficos. Su durabilidad es buena, pero debes retocarlo durante el día. Se envian surtidos.",
  tonos: ["01", "02", "03", "04", "05", "06"]
},
{
  id: "B177",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Retráctil Beauty Glazed - B177",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/B177.jpg",
  description: "No sufras más porque tu labial favorito se rompió, Con el Lip Plump de Beauty Glazed podrás mantener a raya tu labial favorito evitando que se quiebre. Solo debes dar click a medida que vas gastando el producto y saldrá como nuevo.\nEsta fórmula cremosa y suave te dará un brillo y suavidad excepcional.\nDeja una sensación de hidratación inmediata y cero pegajosa.\nMantiene su brillo durante horas.\nTonos de excelente pigmentación y calidad."
},
{
  id: "Tgt1896",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Tinta Gloss Corazón - Tgt1896",
  price: 5000,
  image: "images/productos/Maquillaje/Labios/Tgt1896.jpg",
  description: "Descubre un nuevo formato de Tinta de Labios de larga duración.\nDisponible en una gama vibrante de tonos rojizos, esta fórmula innovadora de textura aterciopelada y cremosa, que se desliza suavemente para crear un acabado mate y sin transferencias lo que hará que perdure todo el día.\nNo solo proporciona un color intenso, sino que también mantiene tus labios suaves y flexibles.\nPerfecta para cualquier ocasión, nuestra Tinta Gloss Tint es el complemento ideal para tu rutina de maquillaje, garantizando una aplicación fácil y resultados duraderos desde el primer toque.",
  category_new: "Nueva colección",
  tonos: ["01", "02", "03", "04", "05", "06"]
},
{
  id: "TEB1745",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Tinta Con Escarcha Be Mine - TEB1745",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/TEB1745.jpg",
  description: "¡Las tintas le dan el color perfecto a tus labios! Unos labios de impacto gracias a la tinta Be mine.\n\nSu textura es suave y se difumina sobre tus labios de forma perfecta.\nAporta un acabado con destellos dorados.\nSu durabilidad es excelente. Viene en un tono rojo cereza."
},
{
  id: "DYT2528",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Toy Story - DYT2528",
  price: 40000,
  image: "images/productos/Maquillaje/Ojos/DYT2528.jpg",
  description: "Tu look merece esta calidad y combinación. Lleva la diversión y la aventura de Toy Story a tu maquillaje con esta sombra de ojos de alta pigmentación.\n\nSu textura suave permite crear desde looks delicados para el día hasta maquillajes más llamativos para cualquier ocasión.\nUn toque de color que hará brillar tu creatividad.\nIncluye tambien sombras tipo glitter perfectas para looks mas arriesgados y artísticos. Encontrarás 38 tonos entre mates nude, mate coloridos y satinados.\nAdemás, incluye un espejo en donde facilitará tu maquillaje.",
  colaboracion: "Disney"
},
{
  id: "Dyt2654",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Lápiz Ojos y Cejas Toy Story - Dyt2654",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/Dyt2654.jpg",
  description: "La herramienta que buscas para unos ojos de impacto. Consigue cejas definidas y de apariencia natural con este Lápiz de Cejas. Sus dos puntas permiten crear trazos precisos con los que puedes rellenar espacios; por un costado encontrarás un lápiz retráctil de textura cremosa y, por el otro lado un plumón delineador de larga duración resistente al agua, ayudando a dar forma a las cejas con facilidad o perfecto para delinear tus ojos. Son 3 tonos disponibles en el lápiz cremoso.",
  colaboracion: "Disney",
  tonos: ["01", "02", "03"]
},
{
  id: "Dyt2724",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Vaquera Toy Story - Dyt2724",
  price: 20000,
  image: "images/productos/Maquillaje/Ojos/Dyt2724.jpg",
  description: "Dale vida a tu mirada con la sombra Toy Story, una propuesta perfecta para los amantes de los tonos tierra. Su textura suave permite una aplicación cómoda y un difuminado fácil, logrando acabados desde los más naturales hasta los más intensos, según el estilo que quieras crear.\nSu paleta combina tonos tierras mates y satinados ideales para lograr looks cálidos, equilibrados y muy favorecedores para el día a día o para ocasiones especiales.\nTiene una increíble pigmentación los 10 tonos.",
  colaboracion: "Disney"
},
{
  id: "Dct2573",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Delineador Cafe Rainbow - Dct2573",
  price: 10000,
  image: "images/productos/Maquillaje/Ojos/Dct2573.jpg",
  description: "Seamos muy sinceras: amamos el delineador negro, pero hay días en los que queremos un look más fresco, sutil y natural para ir a la oficina o la universidad, y el negro puede verse muy fuerte o endurecer la mirada. Intentar un delineado café con sombras a veces termina en un manchón que se borra a las dos horas, y los lápices tradicionales suelen ser rígidos, raspan el párpado y se corren con el sudor. ¡Por eso rescatamos a este rey del famoso kit Rainbow para traerlo de forma individual! Este delineador líquido café es una absoluta joya para lograr acabados ultra suaves, cálidos y elegantes. Su aplicador en pincel de alta precisión te da el control total para diseñar desde líneas milimétricas hasta colitas de gato intensas. Además, su fórmula es de secado rápido, tiene una duración espectacular y se asienta de forma homogénea para que tu mirada se vea impecable, despierta y hermosa todo el día sin cuartearse.",
  category_new: "Nueva colección"
},
{
  id: "DST2259",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Lápiz Delineador Ojos Safari - DST2259",
  price: 5000,
  image: "images/productos/Maquillaje/Ojos/DST2259.jpg",
  description: "Aceptémoslo: no hay nada más frustrante que intentar delinear tu línea del agua con un lápiz viejo, duro y seco que te raspa el ojo, te hace llorar y termina dejando un trazo grisáceo y parchado que desaparece a las dos horas, dejándote un manchón oscuro fatal en la ojera. ¡Es momento de despedirse de las batallas del diario y darle la bienvenida al trazo más dócil del planeta! El Lápiz Safari llegó para rescatar tus looks con su pigmento negro intenso que aporta un color profundo desde la primera pasada. Su textura es deliciosamente cremosa, lo que facilita un deslizamiento ultra suave y uniforme tanto si buscas un trazo gráfico súper preciso como si quieres difuminar los bordes para crear esos ahumados espectaculares que roban miradas. Un básico versátil y salvavidas que no puede faltar en tu colección."
},
{
  id: "Slt2203",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Liquida Glow Beat - Slt2203",
  price: 8000,
  image: "images/productos/Maquillaje/Ojos/Slt2203.jpg",
  description: "La Sombra Líquida Glow es la elegida para darle a tu mirada un acabado luminoso y divertido.\n\n- Su fórmula ligera y de fácil aplicación se desliza suavemente sobre el párpado o mejillas, dejando un efecto radiante con destellos en tonos lilas, morados y dorados que transforman cualquier look en un estilo lleno de magia y único.",
  category_new: "Nueva colección"
},
{
  id: "Sut2170",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra En Polvo X12 Urban - Sut2170",
  price: 12000,
  image: "images/productos/Maquillaje/Ojos/Sut2170.jpg",
  description: "Seguro te ha pasado: tienes boletas para un festival o una salida emocionante con tus amigas, te sientas a maquillarte y te das cuenta de que todas tus paletas tienen los mismos tonos cafés clásicos de siempre. ¡Es momento de dejar atrás los looks planos y darle la bienvenida a la paleta más urbana y cool de tu colección! La paleta Urban reúne 12 tonos espectaculares entre mates y satinados, con una armonía genial enfocada principalmente en la gama de los verdes. Diseñada con una calidad premium y una pigmentación de locura, esta paleta te permite construir desde un delineado difuminado, clásico para el diario hasta los sombreados más vanguardistas y potentes para bailar toda la noche. Su polvo sedoso se adhiere a tus párpados como un imán, asegurándote que tu mirada se quede on point e intacta sin importar qué tan intenso se ponga el evento."
},
{
  id: "Slu2171",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Líquida Urban - Slu2171",
  price: 5000,
  image: "images/productos/Maquillaje/Ojos/Slu2171.jpg",
  description: "El brillo nunca está de más, y mucho menos cuando hablamos de festivales, conciertos o de esos días donde simplemente quieres que tu maquillaje grite estilo propio. Seguro te ha pasado que quieres un look divertido pero terminas usando glitters sueltos pesados que te raspan el párpado, se caen por toda la cara a los diez minutos o te dejan una sensación grasosa e incómoda que te cuartea la base. ¡Es hora de dejar atrás los desastres y darle la bienvenida al destello más cómodo del planeta! Esta sombra líquida es una absoluta joya porque la puedes aplicar tanto en los párpados como en las mejillas para crear un efecto luminoso tridimensional. Su tono es un verde mágico con destellos doraditos preciosos que dan un acabado cálido espectacular. Al difuminarla en tu piel verás un acabado suave que no se siente pesado ni acartonado; su fórmula no se seca bruscamente, lo que te da el tiempo perfecto para esparcirla con tus dedos como un sueño absoluto."
},
{
  id: "Dy2081",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Kit X 2 Delineadores Stitch - Dy2081",
  price: 25000,
  image: "images/productos/Maquillaje/Ojos/Dy2081.jpg",
  description: "Salir de casa feliz con tu delineado y notar a mitad del día que el calor, el sudor o una lagrimita convirtieron tu mirada en un manchón es una verdadera pesadilla. Peor aún es querer sumarte a la tendencia de los delineados gráficos y descubrir que tus productos no pigmentan bien o se cuartean al dar la segunda pasada. ¡Es hora de ganar la batalla del trazo perfecto con tus nuevos compañeros favoritos! Con este kit puedes crear looks súper producidos para un día especial o lucir natural pero fabulosa en tu día a día. En este dúo encuentras los dos infaltables definitivos que toda amante del maquillaje necesita: un delineador negro ultra intenso y uno blanco puro. Ambos cuentan con una excelente pigmentación que deja un acabado prolijo desde el primer trazo, garantizándote calidad profesional para acabados extraordinarios. Su fórmula es de larga duración y resistente al agua, lo que significa que se fijan a tu piel como un escudo para que disfrutes tu rutina con total seguridad. Todo esto viene envuelto en un diseño hermoso y exclusivo inspirado en Stitch que vas a querer presumir en todos lados."
},
{
  id: "SHT1310",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Hollywood - SHT1310",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/SHT1310.jpg",
  description: "- Esta paleta incluye tonos muy versátiles y cálidos entre naranjas, rojizos y cafés, con acabados mate y satinados, ideales para cualquier ocasión.\n- Pigmentación construible que se adapta a cualquier maquillaje sea de día o noche.\n- Textura suave y fácil de difuminar.\n- Presentación inspirada en una cinta de película: ¡compacta y hermosa!\nSe envían surtidas."
},
{
  id: "RROt10",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Cartera Teddy - RROt10",
  price: 20000,
  image: "images/productos/Maquillaje/Ojos/RROt10.jpg",
  description: "Descubre la Paleta Cartera Teddy, un producto todo en uno diseñado para acompañarte a donde vayas.\nIncluye todo lo que necesitas para un look completo:\n\n- 26 sombras para ojos en tonos tierra: cafés, dorados y rosados.\n- 15 con acabado mate.\n- 11 con acabado satinado.\n- 2 rubores mate en tono rosado.\n- 2 iluminadores: Uno tono champaña y otro dorado.\n- 2 pigmentos en polvo para cejas.\n- Además, viene con una brocha pequeña y un espejo HD integrado, ideal para que te retoques donde estés.\n- Su presentación en forma de cartera la hace práctica y adorable.\n- Ideal para llevar en tu bolso o de viaje.",
  category_new: "Nueva colección"
},
{
  id: "Spv1777",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Vintage - Spv1777",
  price: 30000,
  image: "images/productos/Maquillaje/Ojos/Spv1777.jpg",
  description: "¡Un salvamaquillajes cuando necesitamos una ayuda extra en los ojos!\nLa paleta de Vintage contiene 18 tonos entre mates y satinados.\nSon perfectas para maquillajes cálidos y coquetos.\nSus tonos magentas, vino, marrones rojizos y rosa de acabado matte, otros satinados de alta pigmentación en tonos dorados, rosa y un pigmento tipo glitter tono vino.\nTienen una pigmentación increíble.",
  category_new: "Nueva colección"
},
{
  id: "C07",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Frutas Fresa - C07",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/C07.jpg",
  description: "Paleta Monocromática en Tonos Rojizos\n- Una explosión de color en una paleta compacta y poderosa.\n- Perfecta para crear looks en tonos rojizos y fucsias, con una mezcla que te permitirá lograr desde un maquillaje suave hasta uno vibrante e impactante.\n\nIncluye 9 tonos: Acabados mate, metálico y satinado.\n- Alta pigmentación y fácil de difuminar.\n- Ideal para quienes aman los tonos cálidos y atrevidos.\n- Empaque compacto, perfecto para llevar a todas partes.",
  category_new: "Nueva colección"
},
{
  id: "C06",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Frutas Coco - C06",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/C06.jpg",
  description: "Paleta monocromática en tonos tierra.\n\n- Descubre esta paleta de 9 tonos neutros con la combinación ideal para crear maquillajes suaves o intensos en tonos cálidos y cafés.\n- Sombras mate, metálicas y satinadas.\n- Alta pigmentación y fácil difuminación.\n- Tonos versátiles perfectos para el día o la noche.\n- Empaque compacto, ideal para llevar a todas partes",
  category_new: "Nueva colección"
},
{
  id: "Srt1287",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Rock - Srt1287",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/Srt1287.jpg",
  description: "¡La línea Rock es indispensable para looks hermosos en tus ojos!\n\n- Llega en dos referencias surtidas, ambas con tonos ideales para elevar tus looks.\n- Incluye 8 sombras en cada paleta: Tonos mates y satinados.\n- Uno de ellos puede usarse como iluminador para dar ese toque de luz especial.\n- Su textura es ultra suave al tacto y se difumina fácilmente.\n- Tamaño práctico y compacto, perfecto para llevar en tu bolso o cosmetiquera.\n- Combina los tonos entre sí y añade un toque satinado para un efecto más impactante.\n- Paleta súper práctica para llevar contigo a todas partes.",
  category_new: "Nueva colección"
},
{
  id: "FE5",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Pestañina Fortalecedora Fresh - FE5",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/FE5.jpg",
  description: "Si te gusta tener tus pestañas lindas pero sin sentir pesadez, necesitas este producto. El rímel o pestañina transparente es un gel multipropósito ideal para looks naturales. Sirve para definir y levantar las pestañas sin aportar color; además, un tip es que funciona para fijar las cejas levemente, y funciona como prebase para aumentar el volumen de tu rímel habitual. No maltrata tus pestañas. Su fórmula ligera ayuda a mantenerlas en su lugar con un acabado natural y cómodo. Llegó con nueva imagen, nuevo empaque, práctico y moderno, perfecto para tu rutina diaria."
},
{
  id: "St23",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Terra Trendy - St23",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/St23.jpg",
  description: "- Es una paleta ideal para looks diarios.\n- Tiene 9 tonos entre mates, tierras, rojizos y rosas.\n- Incluye sombras satinadas semi cremosas y compactas.\n- Son suaves al tacto y se difuminan muy bien.\n- Perfectas para llevarlas de viaje.\n- Se envían surtidas.",
  category_new: "Nueva colección"
},
{
  id: "PSL1374",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Pestañina Super Look - PSL1374",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/PSL1374.jpg",
  description: "Luce una mirada intensa y llena de volumen con la máscara de pestañas Super Look. Su fórmula lavable ofrece excelente duración durante el día además permite un desmaquillado mucho más fácil y suave. Cuenta con un cepillo de silicona diseñado para separar, peinar y aportar volumen a cada pestaña. Sus cerdas alcanzan incluso las pestañas más cortas, ayudando a crear una apariencia más definida, abundante e impactante desde la raíz. Además, su fórmula no forma grumos, permitiendo aplicar capa tras capa sin perder la definición y logrando unas pestañas más largas, voluminosas y con un acabado uniforme."
},
{
  id: "SST1879",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Sunset - SST1879",
  price: 25000,
  image: "images/productos/Maquillaje/Ojos/SST1879.jpg",
  description: "Seguro te ha pasado que abres tu cosmetiquera y te encuentras con sombras que apenas pintan, que se caen a pedazos en tus ojeras o que te exigen llevar tres paletas diferentes solo para armar un look básico de diario. ¡Es hora de transformar ese momento de estrés en tu espacio favorito del día! Al abrir tu paleta Sunset, te recibirá un hermoso mensaje en su tapa interna diseñado para recordarte lo especial que eres mientras creas magia en tu mirada. Esta paleta es la combinación cálida perfecta que estabas buscando: reúne los tonos mate tierra infaltables para dar profundidad, el poderoso café oscuro que toda mujer necesita para dar fuerza y una selección de tonos satinados que varían entre dorados claros, dorados más oscuros y rosas espectaculares. Lo mejor de todo es que algunos de sus tonos brillantes vienen con un diseño único que te da un efecto duocromático divino, cambiando de color según la luz. Su excelente pigmentación y alta adherencia te aseguran que el color se quede en tu párpado y no en tus mejillas, logrando que maquillarte sea ultra fácil, rápido y súper divertido."
},
{
  id: "SCT1327",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Cookies - SCT1327",
  price: 20000,
  image: "images/productos/Maquillaje/Ojos/SCT1327.jpg",
  description: "Un look de ojos para el día a día, esta paleta queda chequeada para lograrlo de la mejor manera.\n- Contiene 9 tonos tierra entre mates y satinados, puedes lograr maquillajes de día y de noche.\n¡Es muy completa!\n- Su pigmentación es de excelente calidad y puedes saturar el color según tu necesidad.\n- Encuentras tonos de transición, de profundidad y el plus: ¡El pop de brillo!"
},
{
  id: "PK15",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Puppy Collection - PK15",
  price: 25000,
  image: "images/productos/Maquillaje/Ojos/PK15.jpg",
  description: "¡Todo lo que necesitas en una sola paleta!\nOlvídate de cargar una cosmetiquera pesada. Esta paleta tiene todo lo necesario para lograr un look completo y radiante.\n\nIncluye:\n16 sombras en tonos cálidos (mates y satinadas).\n2 iluminadores en tonos champaña y plateado.\n1 contorno en tono cálido.\n1 rubor con acabado mate.\n\nIncreíble pigmentación.\nTextura muy suave y fácil de difuminar.\nIdeal para crear desde looks naturales hasta maquillajes más elaborados.\nPerfecta para llevar en tu bolso y crear un full face en cualquier momento."
},
{
  id: "MCR1861",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Color Rosa - MCR1861",
  price: 25000,
  image: "images/productos/Maquillaje/Ojos/MCR1861.jpg",
  description: "¡Un producto pensado para las aficionadas a lo pinky!\n\n- En Trendy queremos traerte diseños cada vez más completos y hermosos, esta paleta es una de ellas.\n- Al abrirla encontrarás un mensaje especial para ti.\n- Su empaque es de calidad premium, con un diseño que amarás.\n- Contiene 9 tonos cálidos entre rosas y rojizos.\n- Es una paleta completa con sombras de acabados mates y satinados.\n- Su pigmentación es de calidad profesional y excelente adherencia."
},
{
  id: "SSB1867",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Safari Boom - SSB1867",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/SSB1867.jpg",
  description: "Seguro te ha pasado: terminas tu sombreado mate de diario, te miras al espejo y sientes que a tu mirada le falta ese glow o esa chispa especial para resaltar. O peor aún, compras una sombra brillante que se siente arenosa, te llena la ojera de escarcha suelta y se desvanece a las dos horas de haber salido de casa. ¡Es momento de despedirse de los ojos sin brillo y darle la bienvenida al destello más espectacular! Esta paleta de sombras es un verdadero tesoro compacto que llegó para salvar tus looks. Contiene 6 tonos completamente satinados con una gama cálida hermosa que varía entre dorados claros, oscuros y un tono terracota que es una absoluta bomba. Su textura ligeramente cremosa es un sueño total, haciendo que aplicarla sea ultra fácil y rápido, logrando que los pigmentos se fundan en tus ojos como seda desde la primera pasada. Tiene una excelente pigmentación y adherencia que mantiene ese glow intacto, todo en un tamaño ideal y súper práctico para llevar en cualquier cosmetiquera o bolso. ¡Es el secreto infalible para brillar con estilo estés donde estés!"
},
{
  id: "PD08",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Dreams Pro - PD08",
  price: 50000,
  image: "images/productos/Maquillaje/Ojos/PD08.jpg",
  description: "¡La paleta de tus sueños si existe!\n\n- Paleta Dreams Pro de calidad profesional.\n- Tiene 30 sombras en tonos mates y satinados.\n- Ultra pigmentadas y de larga duración.\n- Son suaves al tacto con la brocha.\n- Perfectas para crear muchas técnicas de maquillaje."
},
{
  id: "SMT1657",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Meow - SMT1657",
  price: 12000,
  image: "images/productos/Maquillaje/Ojos/SMT1657.jpg",
  description: "¡Ya no hay excusas para el glitter en tus maquillajes!\nPaleta con ese brillo que tanto te gusta.\nVienen 3 glitters en gel prensado con destellos en forma de estrella y 3 satinadas.\nMucho glowy en tu piel.\nSon ultra pigmentadas y de alta adherencia. Viene en un empaque hermoso y funcional."
},
{
  id: "SRP1860",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombras Retro Phone - SRP1860",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/SRP1860.jpg",
  description: "Salir de casa a las carreras y darte cuenta de que olvidaste empacar el rubor o que para retocar tu maquillaje debes cargar una paleta gigante. ¡Es hora de ganarle el juego a los looks express con un toque de nostalgia pura! Esta paleta con diseño de celular vintage es la combinación perfecta para lograr un look delicado y hermoso en cualquier lugar. Incluye 4 tonos de sombras satinadas (plateada, rosada y dos tonos dorados, uno intenso y otro claro) de textura semi cremosa que se difumina suavemente por tus párpados sin dejar pliegues. Además, viene con un rubor en polvo de excelente pigmentación en un tono universal que le da vida a tus mejillas de inmediato. Es el combo infalible para llevar en tu cosmetiquera y ganarte todos los halagos por tu maquillaje y por el empaque más lindo de todos."
},
{
  id: "SLC1369",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Líquida Champagne - SLC1369",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/SLC1369.jpg",
  description: "Si estás cansada de las sombras aburridas que pierden su brillo a los cinco minutos o de los glitters sueltos que terminan regados por toda tu cara, ¡este producto es tu salvación! Te presentamos nuestras sombras en dúo diseñadas estratégicamente para darle ese pop de glitter y luz a tus looks sin complicarte la vida. Viene por un lado en un color tornasol mágico, y por el otro un tono oro rosa espectacular con destellos de glitter que se roban todas las miradas. Se adhieren en la piel fácilmente gracias a su fórmula cremosa de secado inteligente y tienen una excelente durabilidad para que bailes, trabajes y disfrutes sin preocuparte por retoques. Es el toque de glamour que tu cosmetiquera estaba pidiendo a gritos."
},
{
  id: "SPG176",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Escarcha Party Glitter - SPG176",
  price: 5000,
  image: "images/productos/Maquillaje/Ojos/SPG176.jpg",
  description: "Brillar ya no es un problema! Los Party Glitter son el alido más conveniente si te vas de fiesta.\nGlitter de excelente pigmentación y calidad.\nContiene 6 tonos diferentes.\nSus tonos son entre rosas, dorados y violetas tornasol.\nLlevar tus looks a otro nivel con estos glitters serán tu nueva personalidad.\nRecuerda: Los glitters prensados contienen partículas más grandes que las de los iluminadores normales, lo que te da un acabado más potente y con más textura."
},
{
  id: "Sct1767",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Chocolate - Sct1767",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/Sct1767.jpg",
  description: "- Los tonos tierra nunca pasan de moda y lo mejor:\n- Favorecen a todos los tonos de piel y te permiten crear desde maquillajes suaves para el día hasta looks impactantes y sofisticados.\n- Incluye 8 sombras esenciales:\n- 4 tonos mate\n- 4 tonos satinados\n- Su pigmentación es construible, lo que te permite lograr un acabado natural o de calidad profesional, según tu estilo.\n- Además, su tamaño compacto la hace perfecta para llevar en el bolso y retocar tu maquillaje donde estés.\n- Diseño práctico, hermoso y perfecto para acompañarte en tu rutina diaria.",
  category_new: "Nueva colección"
},
{
  id: "Sct1471",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Glitter Circus - Sct1471",
  price: 20000,
  image: "images/productos/Maquillaje/Ojos/Sct1471.jpg",
  description: "Olvídate de los maquillajes planos y aburridos que se apagan a mitad del día; llegó el momento de brillar con luz propia. Dale todo el poder satinado a tus maquillajes diarios con estas sombras e iluminadores tipo gel que son una completa locura. Contiene 9 tonos brillantes para que luzcas una mirada hermosa y magnética en cualquier ocasión. Lo mejor de todo es que dos de los tonos tienen una fórmula tipo gel innovadora, lo que les da mayor adherencia a tu párpado y un acabado con más textura, además tienen un efecto bicromático precioso que cambia de color según como te pegue la luz. Su pigmentación y calidad te encantarán desde la primera pasada. Es una paleta principalmente cálida, con tonos dorados y rosas perfectos para resaltar la calidez de tu piel y sintonizar con tu lado más Trendy.",
  category_new: "Nueva colección"
},
{
  id: "Ac30",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Delineador Plumon Artist - Ac30",
  price: 20000,
  image: "images/productos/Maquillaje/Ojos/Ac30.jpg",
  description: "¡Pigmento y duración que impacta!\nDelineador individual con fórmula premium, tan bueno como los de alta gama.\nPigmentos súper intenso en color negro.\nFácil de usar.\nSecado rápido con acabado matte total.\nFormula aprueba de agua.\n¡Ideal para crear looks creativos, atrevidos y duraderos!",
  category_new: "Nueva colección",
  tonos: ["Negro"]
},
{
  id: "EY15",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Lápiz de Ojos Trendy - EY15",
  price: 10000,
  image: "images/productos/Maquillaje/Ojos/EY15.jpg",
  description: "Salir a la calle feliz con un delineado espectacular y descubrir a mitad del día que el producto se corrió hacia abajo, dejándote ojos de panda y un aspecto cansado, es una de las peores batallas del maquillaje diario. ¡Es hora de ganarle la guerra a los ojos manchados con un toque de magia y nostalgia! Este increíble lápiz de ojos, inspirado en Woody y Buzz Lightyear de Toy Story, es colorido, divertido y está lleno de personalidad. Su fórmula profesional cuenta con una textura súper suave y cremosa que se desliza como seda sin necesidad de jalar el párpado ni causar lágrimas, depositando un color negro ultra pigmentado desde la primera pasada. Gracias a su material resistente y tamaño práctico, podrás usarlo diariamente mientras complementas tus looks con un detalle original y llamativo. Además, su práctico sistema de fijación te permite mantener tu delineado seguro siempre, convirtiéndose en el secreto infalible para un look intacto y perfecto que resiste todo tu día."
},
{
  id: "LCD2284",
  category: "maquillaje",
  subcategory: "Cejas",
  name: "Lápiz De Cejas Dreams - LCD2284",
  price: 15000,
  image: "images/productos/Maquillaje/Cejas/LCD2284.jpg",
  description: "- Sus dos tipos de punta resuelven en un solo producto lo que antes requería dos herramientas: la punta gruesa biselada rellena y da forma rápidamente a toda la ceja con trazos amplios y uniformes; la punta delgada traza líneas finas que simulan vellos individuales para ese efecto \"\"microblading casero\"\" que hace que la ceja se vea llena y completamente natural.\n- Está disponible en dos tonos versátiles diseñados para adaptarse a diferentes estilos y tonos de cabello: café claro para un acabado suave y natural, y gris oscuro para una ceja más definida y elegante.",
  tonos: ["01", "02"]
},
{
  id: "KHT2503",
  category: "maquillaje",
  subcategory: "Cejas",
  name: "Kit Herramientas Básicas Luxé - KHT2503",
  price: 25000,
  image: "images/productos/Maquillaje/Cejas/KHT2503.jpg",
  description: "- Incluye las herramientas esenciales para definir y perfilar las cejas con precisión, retirar el vello facial de forma rápida y limpia, y mantener la piel cuidada sin depender de una cosmetiquera completa.\n- Su diseño funcional, con la calidad característica de la línea Luxé de Trendy, hace que cada herramienta sea precisa y duradera para el uso diario y los retoques rápidos en cualquier momento.\n- El paso previo que marca la diferencia: con las cejas bien definidas y la piel preparada, cualquier producto de maquillaje que apliques después queda significativamente mejor.\n- Ideal para principiantes que están definiendo su técnica y para quienes ya tienen una forma establecida y quieren mantenerla con retoques eficientes."
},
{
  id: "DT25",
  category: "maquillaje",
  subcategory: "Cejas",
  name: "Kit De Cejas Basic Brows - DT25",
  price: 15000,
  image: "images/productos/Maquillaje/Cejas/DT25.jpg",
  description: "Terminar tu maquillaje, mirarte al espejo y sentir que tu rostro se ve sin fuerza porque tus cejas están despobladas, rebeldes o mal enmarcadas ya no será un problema. Ya no vas a salir de casa y notar a mitad del día que un huequito quedó sin rellenar y no tienes cómo solucionarlo en el camino. ¡Es momento de despedirse de las cejas invisibles y darle la bienvenida a unas cejas de microblanding pero hechas por ti! Este práctico kit está diseñado para ayudarte a lograr unas cejas perfectamente definidas y naturales, estés donde estés. Incluye todo lo que necesitas en un solo estuche compacto: 3 tonalidades de sombras para cejas en tonos universales que se adaptan a todo tipo de piel, 1 sombra satinada plateada para iluminar debajo del arco de la ceja y 1 brocha angular pequeña para una aplicación precisa. Es la combinación de tonos adaptables ideal para crear un efecto degradado, suave y sin líneas duras, haciéndolo perfecto para llevar en tu cosmetiquera o bolso y retocar en cualquier lugar o momento del día."
},
{
  id: "B69",
  category: "maquillaje",
  subcategory: "Cejas",
  name: "Lápiz Para Cejas Beauty Glazed - B69",
  price: 10000,
  image: "images/productos/Maquillaje/Cejas/B69.jpg",
  description: "Salir de casa con unas cejas divinas y notar a mitad del día que el calor, el sudor o la grasita de la piel borraron la mitad del diseño, dejándote parches o una mirada sin fuerza, es una verdadera pesadilla. ¡Es hora de ganarle la batalla al clima y lucir unas cejas impecables sin estresarte por retoques! Este lápiz doble punta es la solución definitiva para lograr un nivel de detalle único con un aspecto súper natural. Por un lado, cuenta con una punta delgada perfecta para pintar y simular vellitos pelo por pelo en las zonas más despobladas. Por el otro costado, su lado angular más ancho te permite rellenar los espacios grandes con total facilidad y rapidez. Su fórmula profesional es ultra suave al momento de aplicar pero se sella con un poder de larga duración increíble. Es totalmente a prueba de agua, sudor, calor y piel grasa, manteniendo su acabado intacto hasta por 12 horas para que disfrutes tu rutina con total tranquilidad.",
  tonos: ["04"]
},
{
  id: "MT2384",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Kit Niñas Mascotas Barbie - MT2384",
  price: 10000,
  image: "images/productos/Maquillaje/Rostro/MT2384.jpg",
  description: "Regala un momento lleno de color, creatividad y brillo diseñado especialmente para las más pequeñas. Inspirado en Barbie, este kit reúne varios productos para decorar las uñas y complementar cualquier estilo: incluye una hoja de stickers, dos esmaltes con destellos en tonos azul y rosado, un separador de dedos, una lima, un hidratante de labios sin color de aroma suave y un gloss con toque de tono rosado. Lima suavemente las uñas, coloca el separador para aplicar los esmaltes sin manchar, decora con los stickers y finaliza aplicando el hidratante y el gloss sobre la boca. Deja secar por completo la primera capa de esmalte antes de pegar los stickers para asegurarte de que se adhieran muy bien a la uña. ¡Un súper tip: cuida tu Kit Niñas Mascotas Barbie de la luz solar directa guardándolo en un sitio fresco y seco para que te rinda al máximo y te dure muchísimo tiempo!",
  colaboracion: "Mattel",
  category_age: "Para niñas",
  category_new: "Nueva colección"
},
{
  id: "DY2289",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Collar Dorado Princesas - DY2289",
  price: 4000,
  image: "images/productos/Maquillaje/Accesorios/DY2289.jpg",
  description: "El accesorio chic infaltable para elevar tus looks. Este collar cuenta con una cadena delgada pero altamente resistente en tono dorado y un dije redondo de material firme con una impresión de alta resolución de tu princesa favorita. Es la pieza perfecta para añadir un detalle brillante y divertido a cualquier atuendo. Colócalo alrededor del cuello y asegura el cierre de forma correcta. Tip de Experta: Elige el dije de tu princesa preferida para combinarlo con tus prendas de tonos neutros o pastel.\n\n¡Un súper tip: cuida tu Collar Dorado Princesas de fuentes de calor o de olor para que te rinda al máximo y te dure muchísimo tiempo!",
  colaboracion: "Disney",
  category_age: "Para niñas",
  tonos: ["Ariel", "Bella", "Rapunzel"]
},
{
  id: "DY2290",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Collar Niñas Princesas - DY2290",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2290.jpg",
  description: "El accesorio soñado para complementar los atuendos infantiles y fomentar el juego creativo de tu Mini Trendylover. Este kit incluye 2 pulseras con hermosos detalles en forma de flores, corazones o estrellas y 1 collar a juego; cada pieza lleva el dije de su princesa favorita de Disney (puedes escoger entre Bella, Cenicienta o Rapunzel). Los dijes están elaborados en un material resistente con impresiones de alta calidad sobre plástico y cauchos de nylon. Utiliza el collar y las pulseras directamente sobre sus atuendos. Tip de Experta: Escoge la versión de su princesa preferida y combina las pulseras con sus vestidos favoritos.\n\n¡Un súper tip: cuida tu Kit Collar Niñas Princesas almacenándolo en un lugar limpio, fresco y libre de contaminación, y no lo guardes cerca de fuentes de calor ni de olor para que te rinda al máximo y te dure muchísimo tiempo!",
  colaboracion: "Disney",
  category_age: "Para niñas",
  tonos: ["Bella", "Blanca Niueves", "Cenicienta", "Rapunzel"]
},
{
  id: "DY2299",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pulsera Plateada - DY2299",
  price: 4000,
  image: "images/productos/Maquillaje/Accesorios/DY2299.jpg",
  description: "La opción más tierna y versátil para complementar tu estilo diario. Esta cadena plateada resistente destaca por incluir 5 dijes impresos a alta calidad con colores y siluetas del personaje Stitch en diferentes formas. Su largo adaptable te permite lucirla como pulsera en la muñeca o usarla como tobillera para looks frescos y relajados. Ubica la cadena en la muñeca o tobillo y asegura el cierre. Tip de Experta: Llévala junto a tus prendas casuales favoritas para resaltar los dijes a color.",
  colaboracion: "Disney",
  category_age: "Para niñas"
},
{
  id: "DY2292",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pulsera Plateada Princesas - DY2292",
  price: 4000,
  image: "images/productos/Maquillaje/Accesorios/DY2292.jpg",
  description: "El toque único para resaltar cualquier prenda y lucir fabulosa. Esta cadena plateada resistente incluye 5 dijes con colores vivos de princesas y siluetas en varias formas y tamaños, elaborados en materiales resistentes de alta calidad. Gracias a su diseño adaptable, puedes usarla cómodamente en la muñeca como pulsera o en el tobillo como tobillera casual. Ajusta el cierre de la cadena al tamaño deseado. Tip de Experta: Ajusta el cierre más holgado si decides usarla como tobillera durante días de sol.\n\n¡Un súper tip: cuida tu Pulsera Plateada Princesas de fuentes de calor o de olor para que te rinda al máximo y te dure muchísimo tiempo!",
  colaboracion: "Disney",
  category_age: "Para niñas"
},
{
  id: "DY2297",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Maleta Rapunzel - DY2297",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/DY2297.jpg",
  description: "El kit ideal para llevar peinados lindos, divertidos y accesorios de moda a todos lados. Incluye un cepillo para mantener el cabello hermoso, 2 hebillas, 4 moñas y 2 ganchos para crear peinados espectaculares, además de una manilla con 2 dijes y un anillo a juego. Todo viene empacado en una práctica maletica con tiras fácil de transportar. Utiliza los accesorios en tu rutina diaria y guárdalos en la maleta al terminar. Tip de Experta: Usa la maletica para guardar tus juguetes o accesorios pequeños favoritos cuando salgas de paseo.",
  colaboracion: "Disney",
  category_age: "Para niñas"
},
{
  id: "DY2298",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Maleta Corazón Stitch - DY2298",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/DY2298.jpg",
  description: "Todo lo que una Mini Trendylover necesita para ir a la moda viene en este fabuloso kit inspirado en Stitch. Incluye un kit de 6 ligas de colores, 2 pulseras en espiral (que también sirven para atar el pelo), 1 bandana con caucho y moñito, 1 scrunchy de seda, 4 ganchitos invisibles (dos forrados en tela con pin y dos metálicos) y 2 mini caimanes. Todo viene en un hermoso bolso de plástico en forma de corazón perfecto para transportar los accesorios o decorar el tocador. Abre la maleta, utiliza sus accesorios y guárdalos nuevamente tras su uso. Tip de Experta: Usa la bandana de moñito para despejar su rostro mientras realiza sus peinados favoritos.",
  colaboracion: "Disney",
  category_age: "Para niñas"
},
{
  id: "DY2293",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Pulseras Intercambiable Princesas - DY2293",
  price: 4000,
  image: "images/productos/Maquillaje/Accesorios/DY2293.jpg",
  description: "Las más pequeñitas de casa ahora tendrán mucho más estilo.\n- Ya no tienes que escoger, con estas pulseras de dije intercambiable llevarán las princesas a todas partes.\n- Cada empaque incluye 2 pulseras de diferentes tonalidades y 5 dijes intercambiables.\n- Son 3 referencias disponibles para que elijas tu color preferido.\n- Cada dije tiene forma de corazón, brillitos y el diseño de tu Princesa Disney favorita.\nModo de uso: Elige a tu princesa favorita y coloca el dije en la pulsera con ayuda del ganchito metálico.",
  colaboracion: "Disney",
  category_age: "Para niñas"
},
{
  id: "DY2294",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Moño Y Hebilla Princesas - DY2294",
  price: 4000,
  image: "images/productos/Maquillaje/Accesorios/DY2294.jpg",
  description: "Los adornos perfectos para lograr peinados hermosos, coquetos y prolijos sin maltratar el cabello. Este kit combina un moñito de tela rosa que da un acabado impecable con 2 hebillas decoradas con princesas, ideales para armar coletas altas o sujetar cabellitos rebeldes. Coloca el moño o las hebillas directamente sobre la sección de cabello según el estilo que quieras lucir. Tip de Experta: Usa las dos hebillas a los laterales para despejar la cara de forma súper coqueta.\n\n¡Un súper tip: cuida tu Kit Moño Y Hebilla Princesas de fuentes de calor o de olor para que te rinda al máximo y te dure muchísimo tiempo!",
  colaboracion: "Disney",
  category_age: "Para niñas",
  tonos: ["Morado", "Rosado"]
},
{
  id: "DY2291",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Hebillas Princesas - DY2291",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2291.jpg",
  description: "Crea peinados lindos y coquetos con los diseños de tus princesas favoritas luciendo en primer plano.\nEste kit x 10 de hebillas es perfecto para llevar en la cosmetiquera o bolso y retocar tus peinados o darle un plus en cualquier momento.\nSon 5 pares de hebillas con diseños de Blancanieves, Rapunzel, Cenicienta, Ariel y Bella.\nCombínalas a tu gusto y mantén en su lugar esos cabellitos rebeldes.\nExcelente agarre, suaves con tu cabello.\nMaterial: Plástico.",
  colaboracion: "Disney",
  category_age: "Para niñas"
},
{
  id: "KBT2157",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Kit Niñas Tutti Frutti - KBT2157",
  price: 20000,
  image: "images/productos/Maquillaje/Rostro/KBT2157.jpg",
  description: "¡Un kit práctico y divertido para tu mini Trendy lover! Tiene todo lo necesario para un look de maquillaje completo y para decorar sus uñas de forma sencilla. Incluye 4 hojas de stickers con diseños divertidos para personalizar uñas, 2 brillos con aromas deliciosos a sandía y fresa que dejan un toque de color suave en tonos rojizo y rosa, y 1 paleta de sombras de pigmentación media en tonos naranja, morado y rosado con su aplicador de esponjita. Aplica los brillos sobre los labios limpios y secos, distribuye las sombras en los párpados con el aplicador y finaliza decorando las uñas con los stickers sobre una superficie limpia. Aplica primero el color de sombra preferido y combina los stickers en las uñas para una tarde de juegos temática.",
  category_age: "Para niñas"
},
{
  id: "KMA2156",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Niñas Magia - KMA2156",
  price: 20000,
  image: "images/productos/Maquillaje/Accesorios/KMA2156.jpg",
  description: "Tu mini Trendy lover hará magia con este kit creado especialmente para el uso diario. Incluye una libreta argollada con hojas rayadas ideal para que escriba o dibuje sus sueños y metas, un bálsamo labial sin color que aporta una sensación suave sobre los labios, y una paleta de sombras en tonos lila, rosa y amarillo de pigmentación baja formulada especialmente para cuidar su piel. Incluye un aplicador de esponjita para distribuir el color. Escribe en la libreta cuando quieras, aplica el bálsamo sobre labios limpios y distribuye las sombras en los párpados. La libreta es del tamaño perfecto para que la lleve en su morral junto a sus brillitos diarios.",
  category_age: "Para niñas"
},
{
  id: "KMW2155",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Niñas Osito - KMW2155",
  price: 20000,
  image: "images/productos/Maquillaje/Accesorios/KMW2155.jpg",
  description: "El kit perfecto y adorable para las mini Trendy lovers. Incluye un lindo monedero, dos hebillas para el cabello y dos brillos de formulación suave pensados especialmente para ellas. Los brillos aportan un toque de tono muy sutil sin dejar sensación pesada ni pegajosa sobre sus labios. Las hebillas le dan ese detalle lindo a cualquier peinado y el monedero es ideal para llevar sus brillitos o dinero a todas partes. Utiliza las hebillas en el cabello, aplica el brillo sobre los labios limpios y guarda todo en el monedero. Usa el monedero para guardar las dos hebillas al final del día y evitar que se pierdan.",
  category_age: "Para niñas"
},
{
  id: "KPB1850",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Kit De Maquillaje Para Niñas Party Balloons - KPB1850",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/KPB1850.jpg",
  description: "Tu mini trendylover será la más feliz con este kit de maquillaje súper completo. Pensado especialmente para ellas y el cuidado de su piel, incluye 3 mini labiales en tonos muy sutiles, 1 gloss transparente de textura suave, 1 kit de 4 sombras en hermosos tonos pastel (amarillo, lila, rosa y verde) con su aplicador en espuma, y 2 lindas pinzas para el cabello en forma de flor. Es la opción ideal para crear looks divertidos. Para usarlo, aplícalo sobre la piel limpia y retíralo fácilmente con agua y jabón. Usa las pinzas de flor para recoger los mechones delanteros mientras aplican los tonos pastel.",
  category_age: "Para niñas"
},
{
  id: "BDC1848",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Para Niñas Dolly Chic - BDC1848",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/BDC1848.jpg",
  description: "Brillos Dolly Chic para las más pequeñas de la casa. Este kit x 2 brillitos es perfecto para que sus labios luzcan hermosos con un toque de brillo y color suave. Incluye dos tonos, uno lila y otro rosa, ambos cargados con destellitos sutiles y acompañados de un delicioso aroma muy suave que les encantará. Aplícalo directamente sobre los labios para un acabado lindo e instantáneo. Pueden alternar el tono rosa o el lila según sus prendas favoritas del día.",
  category_age: "Para niñas"
},
{
  id: "SNH1845",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Sombra Para Niñas Celular - SNH1845",
  price: 10000,
  image: "images/productos/Maquillaje/Ojos/SNH1845.jpg",
  description: "Maquillaje pensado exclusivamente para las más pequeñas. Estas sombras vienen en un hermoso empaque en forma de teléfono con un detalle de espejo de pegatina al abrirlo que las hará sentir como toda una diva. El kit contiene 3 tonos de sombra (lila, rosada y azul) con pigmentación baja para un color suave en los párpados, un aplicador de espuma y un mini labial rojizo que pigmenta delicadamente. Añade color aplicando con los dedos o con el aplicador incluido. Usa el aplicador de espuma para depositar las sombras a toques sobre el párpado móvil.",
  category_age: "Para niñas"
},
{
  id: "DYT2675",
  category: "maquillaje",
  subcategory: "Corporal",
  name: "Malteada Bronceadora Body Shine Toy Story - DYT2675",
  price: 15000,
  image: "images/productos/Maquillaje/Corporal/DYT2675.jpg",
  description: "Luce una piel con apariencia naturalmente bronceada y radiante durante todo el año con el Bronceador Líquido Toy Story.\nSu textura ligera se desliza fácilmente sobre la piel, aportando un tono cálido y un acabado luminoso que realza su apariencia al instante.\nIdeal para resaltar piernas, brazos, hombros y escote con un efecto saludable y lleno de brillo.\nPuedes usarlo solo o combinarlo con tu crema favorita.",
  colaboracion: "Disney",
  tonos: ["01", "02"]
},
{
  id: "CMW2400",
  category: "maquillaje",
  subcategory: "Corporal",
  name: "Crema Mantequilla Rosas - CMW2400",
  price: 28000,
  image: "images/productos/Maquillaje/Corporal/CMW2400.jpg",
  description: "Una nueva fragancia se une a la familia de mantequillas. ¡Un aroma que te fascinará! Aporta frescura y luminosidad a tu piel con un suave aroma a rosas y brillos dorados que realzan el aspecto natural. Contiene componentes que ayudan a conservar la hidratación, dejando la piel suave, ligera y con un glow sutil. Su olor y destellos se mantienen por más tiempo, brindando una sensación agradable y duradera."
},
{
  id: "MT2397",
  category: "maquillaje",
  subcategory: "Corporal",
  name: "Kit Corporal Polly Pocket Morado - MT2397",
  price: 20000,
  image: "images/productos/Maquillaje/Corporal/MT2397.jpg",
  description: "El secreto perfecto para sentirte sofisticada, romántica y femenina al salir de la ducha. Este kit morado posee una fragancia encantadora que combina notas dulces con un toque floral envolvente: contiene un body splash que perfuma suavemente la piel y una mantequilla corporal enriquecida con brillitos que la nutre mientras le aporta un glow delicado que resalta su luminosidad natural. Aplica la mantequilla sobre la piel limpia y seca hasta su completa absorción y luego rocía el body splash corporal. Tip de Experta: Rocía el splash en las muñecas y detrás de las orejas para dejar una estela floral sofisticada."
},
{
  id: "MT2396",
  category: "maquillaje",
  subcategory: "Corporal",
  name: "Kit Corporal Polly Pocket Rosado - MT2396",
  price: 20000,
  image: "images/productos/Maquillaje/Corporal/MT2396.jpg",
  description: "El secreto perfecto para sentirte sofisticada, romántica y femenina al salir de la ducha. Este kit morado posee una fragancia encantadora que combina notas dulces con un toque floral envolvente: contiene un body splash que perfuma suavemente la piel y una mantequilla corporal enriquecida con brillitos que la nutre mientras le aporta un glow delicado que resalta su luminosidad natural. Aplica la mantequilla sobre la piel limpia y seca hasta su completa absorción y luego rocía el body splash corporal. Tip de Experta: Rocía el splash en las muñecas y detrás de las orejas para dejar una estela floral sofisticada."
},
{
  id: "MT2398",
  category: "maquillaje",
  subcategory: "Corporal",
  name: "Kit Corporal Polly Pocket Aguamarina - MT2398",
  price: 20000,
  image: "images/productos/Maquillaje/Corporal/MT2398.jpg",
  description: "Una experiencia divertida, alegre y llena de personalidad para destacar todos los días. Este kit aguamarina combina un aroma frutal delicioso y dulce con notas frescas: incluye un body splash ligero que brinda una sensación refrescante al instante y una mantequilla corporal con brillitos que nutre intensamente dejando tu piel suave, luminosa y con un brillo encantador. Extiende la mantequilla corporal sobre la piel limpia y seca hasta absorberla por completo y finaliza rociando el body splash corporal. Tip de Experta: Úsalo después de salir de la ducha para sellar la humedad e intensificar el aroma dulce."
},
{
  id: "CMO2402",
  category: "maquillaje",
  subcategory: "Corporal",
  name: "Crema Mantequilla Orange - CMO2402",
  price: 20000,
  image: "images/productos/Maquillaje/Corporal/CMO2402.jpg",
  description: "Disfruta una experiencia sensorial con su delicioso aroma a naranja y sutiles brillos dorados que iluminan la piel. Su fórmula contiene componentes que ayudan a mantener la hidratación, dejando una sensación suave, fresca y luminosa. Los destellos y su fragancia tienen excelente durabilidad, ideales para resaltar la piel durante el día."
},
{
  id: "CMF2399",
  category: "maquillaje",
  subcategory: "Corporal",
  name: "Crema Mantequilla Fresh - CMF2399",
  price: 20000,
  image: "images/productos/Maquillaje/Corporal/CMF2399.jpg",
  description: "Aporta frescura y luminosidad a tu piel con su aroma fresco y brillos dorados que realzan el aspecto natural.\nContiene componentes que ayudan a conservar la hidratación, deja la piel suave, ligera y con un glow sutil. Su aroma y destellos se mantienen por más tiempo, brindando una sensación agradable y duradera."
},
{
  id: "PMP1931",
  category: "maquillaje",
  subcategory: "Corporal",
  name: "Kit Splash Y Crema The Perfect - PMP1931",
  price: 15000,
  image: "images/productos/Maquillaje/Corporal/PMP1931.jpg",
  description: "Fragancia Floral Cautivadora\n- Descubre una experiencia sensorial única con nuestra fragancia floral, una combinación exquisita de jazmín de agua, mandarina y flor de jengibre.\n- Este bouquet fresco y vibrante se complementa con toques dulces y una base amaderada de sándalo, creando una esencia que resalta la frescura y el empoderamiento de la mujer moderna.\n- Esta fragancia está diseñada para la mujer femenina y cautivadora que busca una sensación olfativa distintiva. Con cada aplicación, sentirás cómo te envuelve un aura de confianza y elegancia.\n- Es ideal para cualquier ocasión, ya sea un día de trabajo o una salida nocturna.\n- La crema de manos complementa perfectamente el perfume con un aroma suave y delicado.\n- Formulada para aportar una hidratación profunda sin dejar una sensación grasosa, pero con unos destellos sutiles que aportan luminosidad a la piel."
},
{
  id: "KNB1929",
  category: "maquillaje",
  subcategory: "Corporal",
  name: "Kit Niñas Splash Y Crema Ballet - KNB1929",
  price: 25000,
  image: "images/productos/Maquillaje/Corporal/KNB1929.jpg",
  description: "- Descubre nuestra encantadora fragancia frutal-floral, diseñada especialmente para las jóvenes modernas que buscan expresar su estilo único.\n- Con notas frescas de kiwi, orquídea y jazmín, esta fragancia despierta los sentidos y aporta una frescura vibrante. En su corazón, los deliciosos aromas de chocolate blanco y cupcake añaden un toque dulce y divertido.\n- Esta fragancia es la compañera perfecta para el día a día. Ya sea en la escuela, una salida con amigos o un evento especial, su suave mezcla de aromas hace que cada momento sea memorable. - ¡Es la elección perfecta para las mini Trendy lovers!\n- Complementa tu fragancia con nuestra crema de manos, que cuenta con un aroma neutro.\n- Formulada para proporcionar hidratación y luminosidad.",
  category_age: "Para niñas"
},
{
  id: "Deb2487",
  category: "maquillaje",
  subcategory: "Cuidado Facial",
  name: "Duo Exfoliante Mascarilla de Labios Bob Esponja - Deb2487",
  price: 10000,
  image: "images/productos/Maquillaje/Cuidado_Facial/Deb2487.jpg",
  description: "Con un diseño exclusivo de la colección de Bob Esponja, este dúo reparador es perfecto para mantener tus labios suaves, renovados y listos para cualquier maquillaje.\nIncluye un exfoliante labial que ayuda a remover suavemente la resequedad y las células muertas, dejando los labios más lisos y uniformes.\nAdemás, cuenta con una mascarilla reparadora que ayuda a acondicionarlos y aportarles una sensación de suavidad y confort.\nEs ideal para usar antes de labiales o glosses, o simplemente como parte de tu rutina diaria de cuidado.",
  colaboracion: "Paramount"
},
{
  id: "TDP2729",
  category: "maquillaje",
  subcategory: "Cuidado Facial",
  name: "Toallas Desmaquillantes Pool Party Pequeñas - TDP2729",
  price: 10000,
  image: "images/productos/Maquillaje/Cuidado_Facial/TDP2729.jpg",
  description: "¡Tus toallas desmaquillantes favoritas ahora en versión mini! Perfectas para llevar de viaje, en tu cosmetiquera o en el bolso y tenerlas siempre a la mano. Limpian, refrescan y ayudan a remover maquillaje, impurezas y exceso de grasa de forma rápida y práctica, dejando una agradable sensación de frescura en la piel. Su textura suave las hace ideales para el uso diario y para esos momentos en los que necesitas desmaquillarte sin complicaciones."
},
{
  id: "TDP1940",
  category: "maquillaje",
  subcategory: "Cuidado Facial",
  name: "Toallas Desmaquillantes Pool Party - TDP1940",
  price: 15000,
  image: "images/productos/Maquillaje/Cuidado_Facial/TDP1940.jpg",
  description: "¡Limpia, refresca y cuida tu piel en un solo paso!\n\n- Estas toallas desmaquillantes ayudan a remover maquillaje, impurezas y exceso de grasa de manera suave y práctica, dejando la piel fresca e hidratada.\n- Su textura delicada es ideal para usar diariamente y, gracias a su práctico empaque, podrás llevarlas contigo a cualquier lugar."
},
{
  id: "DBB2485",
  category: "maquillaje",
  subcategory: "Cuidado Facial",
  name: "Desmaquillante Bifasico Bob Esponja - DBB2485",
  price: 25000,
  image: "images/productos/Maquillaje/Cuidado_Facial/DBB2485.jpg",
  description: "¡Desmaquillarte nunca fue tan fácil!\n\nEste desmaquillante bifásico combina una fase acuosa y una fase oleosa que, al agitarse, trabajan juntas para remover eficazmente el maquillaje, incluso aquellos productos de larga duración o resistentes al agua.\n\nSu fórmula ayuda a retirar impurezas sin necesidad de frotar excesivamente la piel, dejando una sensación cómoda y limpia después de cada uso.\nEs ideal para el rostro, ojos y labios, convirtiéndose en un básico infaltable en tu rutina de limpieza facial.",
  colaboracion: "Paramount"
},
{
  id: "Pmb2486",
  category: "maquillaje",
  subcategory: "Cuidado Facial",
  name: "Papeletas Matificantes Bob Esponja - Pmb2486",
  price: 10000,
  image: "images/productos/Maquillaje/Cuidado_Facial/Pmb2486.jpg",
  description: "Mantén tu piel fresca y libre de brillo en segundos con estas papeletas quita grasa para el rostro. Elaboradas con aloe vera y té verde, ayudan a absorber el exceso de oleosidad sin resecar la piel, sin dañar el maquillaje y sin alterar su acabado.\nSon perfectas para controlar el brillo de la zona T durante el día y mantener una apariencia más fresca y natural, sin necesidad de aplicar más producto.\nSu práctico tamaño te permite llevarlas en el bolso, la cosmetiquera o incluso en el bolsillo para usarlas cuando las necesites.",
  colaboracion: "Paramount"
},
{
  id: "SP2",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Serum Crecimiento De Pestañas Trendy - SP2",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/SP2.jpg",
  description: "¡Logra las pestañas de tus sueños con nuestro Serum Para Pestañas Trendy! Refuerza la estructura capilar y previene la caída de tus pestañas. Estimula la síntesis de queratina, aportando elasticidad, resistencia y brillo. Textura en gel."
},
{
  id: "MAT1314",
  category: "maquillaje",
  subcategory: "Cuidado Facial",
  name: "Mascarilla Aloe Trendy - MAT1314",
  price: 15000,
  image: "images/productos/Maquillaje/Cuidado_Facial/MAT1314.jpg",
  description: "¡La frescura que tu rostro necesita! Es una mascarilla perfecta para usar cuando sientas la piel reseca o acartonada. Tiene componentes que ayudan a mantener la sensación de hidratación en tu piel, como el ácido hialurónico. Su textura es en gel y se absorbe rápidamente en la piel. Sus componentes ayudan a mejorar la apariencia de las imperfecciones. Puedes usarla 3 veces por semana para mejorar la apariencia del rostro y lograr mejores acabados en el maquillaje."
},
{
  id: "Hc16",
  category: "maquillaje",
  subcategory: "Cuidado Facial",
  name: "Sobre Mascarilla Stickers Para Acné Happy Clean - Hc16",
  price: 15000,
  image: "images/productos/Maquillaje/Cuidado_Facial/Hc16.jpg",
  description: "Estos stickers son la solución perfecta para esos molestos granitos y te ayudan a reducirlos rápidamente. Se venden por sobre con 60 stickers cuya efectividad los convierte en un best seller. Sus componentes actúan como un formador de película que sella el granito, protegiéndolo del ambiente externo y manteniendo los ingredientes en contacto con la piel. Funciona como un mini apósito que absorbe la humedad y secreciones para que el pus salga naturalmente sin dañar la piel ni dejar marcas, disminuyendo la inflamación de barritos. Aplica sobre la piel limpia y seca, sin maquillaje ni cremas debajo. Se notan un poco por su apariencia semi transparente opaca. Úsalos por la noche con la cara lavada para dejar actuar la película protectora mientras duermes.",
  category_new: "Nueva colección"
},
{
  id: "DSH1761",
  category: "maquillaje",
  subcategory: "Cuidado Facial",
  name: "Doypack Serum Hidratante Morado - DSH1761",
  price: 10000,
  image: "images/productos/Maquillaje/Cuidado_Facial/DSH1761.jpg",
  description: "¡Tu suero hidratante favorito ahora en sachet!\n\n- La fórmula es exactamente igual a la presentación que ya conoces.\n- Su textura es en gel.\n- Es de absorción rápida."
},
{
  id: "P103",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Base - P103",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/P103.jpg",
  description: "Olvídate de esos días frustrantes donde te aplicas la base con los dedos y te quedan las manos pegajosas, o peor aún, usando herramientas que te dejan el rostro lleno de rayas, parches y líneas marcadas que arruinan por completo tu look. Lograr un lienzo perfecto, liso y súper natural ahora es una realidad que te tomará muy pocos minutos. Su tamaño ideal y su calidad premium la convertirán en tu favorita desde la primera pasada, haciendo que tu base favorita rinda muchísimo más. Es una herramienta de calidad profesional, y sus colores en negro con detalles dorados la hacen ver muy luxury, aportándole ese toque chic y costoso que tu tocador se merece. Sentirás cómo se desliza como una caricia mientras distribuye el maquillaje de forma homogénea por todo tu rostro."
},
{
  id: "P209",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Cejas Y Pestañas - P209",
  price: 8000,
  image: "images/productos/Maquillaje/Accesorios/P209.jpg",
  description: "No hay nada que arruine más un maquillaje hermoso que unas cejas despeinadas con parches de producto o unas pestañas llenas de grumos pegajosos que te hacen ver la mirada pesada y cansada. ¡Es hora de unirte al club de las miradas de impacto! Nuestra brocha 2 en 1 es el secreto mejor guardado que necesitas para que mantengas impecables todos los días tus cejas y pestañas sin esfuerzo. Por un lado, tienes una brocha angular ultra precisa ideal para rellenar y diseñar, y por el otro, un cepillo espectacular para peinar y difuminar. Es una herramienta de calidad profesional, y sus colores en negro con detalles dorados la hacen ver muy luxury, aportando todo el glamour y la elegancia que tu cosmetiquera se merece."
},
{
  id: "P208",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Cejas - P208",
  price: 8000,
  image: "images/productos/Maquillaje/Accesorios/P208.jpg",
  description: "Si estás cansada de esos días caóticos donde intentas arreglar tus cejas con lápices toscos que te dejan un bloque oscuro, o peor aún, ver que los pelitos se despeinan a mitad del día haciéndote lucir cansada. ¡Llegó el momento de liberar tu mirada! Nuestra brocha 2 en 1 es perfecta para que mantengas tus cejas impecables todos los días sin pasar horas frente al espejo. Por un extremo, tienes una brocha angular con el corte perfecto y ultra delgado para diseñar trazos precisos, y por el otro, un cepillo espectacular para peinar y difuminar los excesos. Es una herramienta de calidad profesional, y sus colores en negro con detalles dorados la hacen ver muy luxury, convirtiéndose en el accesorio más sofisticado, elegante y chic de toda tu cosmetiquera."
},
{
  id: "P108",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Doble Angular y Gota - P108",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/P108.jpg",
  description: "¿Cansada de abrir tu bolso de maquillaje y encontrar un desorden eterno de herramientas que te quitan espacio, o de tener que cargar mil brochas diferentes cuando viajas o sales de fiesta solo para un retoque express?. ¡Es hora de facilitarte la vida con inteligencia! Las brochas dobles siempre serán una alternativa que optimiza el espacio en tu cosmetiquera y te da los mejores acabados. Por un extremo tienes un cabezal en forma de gota perfecto para sellar y unificar zonas delicadas, y por el otro, un corte angular ideal para dar color y definir. Es una herramienta de calidad profesional, y es tan increíblemente suave al tacto con el rostro que sentirás una caricia deliciosa cada vez que la pases. Sus colores en negro y dorado la hacen ver muy luxury, aportando todo el estilo y glamour que te mereces en tu rutina diaria."
},
{
  id: "P104",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Base Kabuki - P104",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/P104.jpg",
  description: "Comprar una base espectacular, ir a aplicártela por la mañana y ver que te queda el rostro lleno de rayas, líneas marcadas o parches pesados que te hacen ver acartonada y te arruinan todo el look. ¡Es hora de unirte al club de la piel de porcelana! Te presentamos tu nueva aliada infalible de diario. Esta brocha tipo kabuki es súper tupida y suave al tacto con el rostro, diseñada estratégicamente para pulir el maquillaje en segundos. Olvídate de batallar con esponjas que se tragan la mitad de tus productos; sus fibras premium distribuyen el maquillaje de forma homogénea sin dejar parches. Es una herramienta de calidad profesional, y sus hermosos colores en negro con detalles dorados la hacen ver muy luxury, aportando todo el glamour y la elegancia que tu tocador se merece."
},
{
  id: "P215",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Kabuki Rubor - P215",
  price: 10000,
  image: "images/productos/Maquillaje/Accesorios/P215.jpg",
  description: "No hay nada más frustrante que comprar un rubor divino, ir a aplicártelo a las carreras por la mañana y terminar con un manchón súper marcado en la mejilla que arruina todo tu maquillaje y te hace ver acalorada. ¡Diles adiós a las batallas con el color! Te presentamos la brocha kabuki definitiva, diseñada estratégicamente para lograr acabados naturales, difuminados y ultra limpios en un abrir y cerrar de ojos. Al ser tipo kabuki, cuenta con una densidad perfecta de cerdas ultra suaves que atrapan la cantidad exacta de pigmento y lo esparcen de forma aérea, fundiéndolo con tu piel como por arte de magia. Es una herramienta de calidad profesional, y sus colores en negro con detalles dorados la hacen ver muy luxury, aportando ese toque sofisticado, costoso y chic que tu cosmetiquera se merece. Sentirás una caricia deliciosa en tu rostro mientras consigues ese 'glow' saludable que te acompaña todo el día."
},
{
  id: "P214",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Doble Kabuki Angular - P214",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/P214.jpg",
  description: "Dile adiós a esos días frustrantes donde abres tu cosmetiquera en medio de una emergencia y pasas minutos buscando entre un mar de herramientas sueltas que solo te quitan espacio, o peor aún, terminar con la piel llena de rayas y parches porque no tienes el aplicador correcto a la mano. ¡Es hora de simplificar tus mañanas! Te presentamos una infaltable para maquillajes increíbles en segundos. Esta brocha doble junta lo mejor de dos mundos: por un extremo tienes un cabezal kabuki recto ideal para unificar tu piel, y por el otro, un corte angular perfecto para dar dimensión. Es de calidad profesional, y sus colores en negro y plateado la hacen ver muy luxury, aportando todo el glamour y elegancia a tu tocador. Sentirás cómo se desliza como una nube mientras pule tus productos favoritos sin esfuerzo."
},
{
  id: "P100",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Polvo Gigante - P100",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/P100.jpg",
  description: "Si estás cansada de que pasar media hora logrando una piel de porcelana con tu base líquida para que, al momento de sellar, uses una herramienta pequeña o tosca que te deje un manchón blanco, parches secos o que termine barriendo el maquillaje de abajo. ¡Es hora de cambiar las reglas del juego y experimentar un sellado de nube! Esta brocha gigante es una verdadera caricia gigante para tu rostro, diseñada con el tamaño XL perfecto para cubrir grandes zonas en un par de pasadas express. Su cabezal súper esponjoso es de calidad profesional y es extremadamente suave al tacto con el rostro, lo que evita rozaduras o texturas pesadas. Lo mejor de todo es que no vas a desperdiciar producto con ella; distribuye tus polvos de manera tan aérea y homogénea que tu maquillaje rendirá una eternidad. Sus colores en negro y dorado le dan ese toque luxury y costoso que tu tocador se merece."
},
{
  id: "P111",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Kabuki Corrector - P111",
  price: 10000,
  image: "images/productos/Maquillaje/Accesorios/P111.jpg",
  description: "Olvídate de esos días frustrantes donde te aplicas el corrector o tus contornos húmedos y terminas con líneas marcadas, zonas acumuladas o parches fatales que arruinan tu base. Te presentamos la brocha kabuki definitiva para aplicar y difuminar productos cremosos de forma impecable. Olvídate de batallar con esponjas que se tragan todo tu maquillaje; sus cerdas son ultra suaves, densas y tupidas, diseñadas estratégicamente para que no absorban producto, sino que te ayuden a distribuirlo y fundirlo correctamente con tu piel. Te deja un acabado aterciopelado divino y una cobertura media-alta digna de pasarela sin tanto esfuerzo. Además, es de calidad profesional y sus colores en negro con detalles dorados la hacen ver muy luxury, convirtiéndose en la joya más elegante de tu tocador."
},
{
  id: "P102",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Polvo Detalle - P102",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/P102.jpg",
  description: "¡Aplicación de productos como base, corrector y polvos con acabado perfecto!Es muy suave y precisa, ¡Eso te va a encantar! Mantendrás tu maquillaje impecable gracias a la función y forma de la brocha. Es de calidad profesional. Sus colores en negro y dorado la hacen ver muy luxury. Te funciona perfectamente si quieres hacer baking, una piel con acabado mate o para sellar tu maquillaje."
},
{
  id: "P106",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Contorno - P106",
  price: 10000,
  image: "images/productos/Maquillaje/Accesorios/P106.jpg",
  description: "No hay nada más frustrante que intentar marcar tus pómulos para verte súper estilizada y terminar con un rayón café oscuro o un parche grisáceo que arruina por completo tu base de maquillaje y te hace ver cansada. ¡Olvídate de sufrir por las mañanas! Te presentamos la herramienta definitiva para definir tu rostro en un dos por tres. Gracias a su ultra suavidad se difumina muy fácil en el rostro sin dejar parches ni líneas marcadas que delaten el maquillaje. Es una brocha en forma biselada perfecta para aplicar contorno o bronzer, ya que abraza tus facciones de manera natural y precisa. Es de calidad profesional, y sus colores en negro con detalles dorados la hacen ver muy luxury, convirtiéndose en esa joya elegante, chic y costosa que te va a encantar presumir en tu tocador."
},
{
  id: "P101",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Polvo Ancha - P101",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/P101.jpg",
  description: "No hay nada más aburrido que terminar tu maquillaje, aplicar tus polvos con un pomo viejo o una brocha tosca y terminar con la cara blanca, pesada o llena de parches secos que te hacen ver acartonada y con diez años más. ¡Es hora de cambiar las reglas del juego! Te presentamos tu nueva aliada infalible para mantener los brillos a raya. Esta brocha ancha es una maravilla de calidad profesional, diseñada con un cabezal esponjoso que distribuye el producto de forma ultra ligera. Es extremadamente suave al tacto con el rostro, sintiéndose como una caricia de nubes cada vez que la pasas. Además, sus hermosos colores en negro con detalles dorados la hacen ver muy luxury, aportando elegancia y un toque costoso a tu tocador o a tu cosmetiquera de diario."
},
{
  id: "P109",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Kabuki Pequeña - P109",
  price: 10000,
  image: "images/productos/Maquillaje/Accesorios/P109.jpg",
  description: "Nada más frustrante que intentar usar esos rubores o contornos en crema que se ven divinos en redes, y que al aplicártelos con los dedos termines levantando la base que ya tenías abajo, o peor aún, que te quede un manchón súper marcado que arruina todo tu look. ¡Es hora de cambiar el drama por una piel de porcelana! Te presentamos a tu nueva mejor amiga para las texturas húmedas. Es ideal para difuminar rubor o contorno en crema gracias a su cabezal denso que absorbe el producto y lo funde con tu cutis al instante. Deja un acabado mate con cobertura alta pero sin pesadez, logrando ocultar imperfecciones mientras esculpes tus facciones. Es de calidad profesional, y sus colores en negro con detalles dorados la hacen ver muy luxury, dándole ese toque costoso y sofisticado que tu cosmetiquera se merece. ¡Sentirás que estás en manos de una maquilladora experta todas las mañanas!"
},
{
  id: "P212",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Gota Fluffy - P212",
  price: 10000,
  image: "images/productos/Maquillaje/Accesorios/P212.jpg",
  description: "Logra un acabado ligero y uniforme con esta brocha fluffy de calidad profesional. Está diseñada para aplicar y difuminar productos en polvo (como polvos traslúcidos e iluminador) para un resultado natural y luminoso. Su forma de gota con corte angular facilita llegar con precisión a zonas de relieve como el contorno de los ojos o los pómulos, logrando un acabado ligero y natural. Sus cerdas ultrasuaves brindan una aplicación cómoda, mientras que su elegante diseño en negro y dorado aporta un toque sofisticado a tu colección de maquillaje."
},
{
  id: "P202",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Difuminadora Mini - P202",
  price: 4000,
  image: "images/productos/Maquillaje/Accesorios/P202.jpg",
  description: "No hay nada más frustrante que intentar dar profundidad a tus ojos y terminar con un manchón oscuro que te hace ver la mirada pesada, cansada o mal difuminada porque tu brocha es demasiado grande y esparce el color por todos lados. ¡Olvídate de las batallas en tus párpados! La brocha difuminadora mini llegó para salvar tus looks, permitiéndote aplicar tus sombras con mayor precisión para crear profundidades y maquillajes de la mejor calidad sin morir en el intento. Su tamaño reducido es ideal para trabajar con control absoluto en áreas pequeñas. Es una herramienta de calidad profesional, y sus colores en negro con detalles dorados la hacen ver muy luxury, aportándole ese toque chic, elegante y costoso que tu cosmetiquera se merece. Sentirás cómo se desliza como una nube mientras hace todo el trabajo duro por ti."
},
{
  id: "P220",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Doble Piel - P220",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/P220.jpg",
  description: "En Trendy te tenemos la solución definitiva para que dejes de encartarte con mil herramientas en el bolso. Esta brocha individual doble es perfecta para que realices un maquillaje de rostro completo con una sola herramienta, optimizando espacio y tiempo en tus mañanas. Olvídate de batallar cargando peso extra; su diseño inteligente te permite aplicar tus texturas líquidas, cremosas o en polvo dejando un acabado profesional sin tanto esfuerzo. Es el accesorio perfecto para el día a día de una Trendy lover que ama la practicidad pero no negocia un cutis perfecto. Disfruta de su calidad profesional con fibras ultra suaves que se sienten como una caricia en tu piel mientras logras una difuminación impecable."
},
{
  id: "P113",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Contorno Nariz - P113",
  price: 8000,
  image: "images/productos/Maquillaje/Accesorios/P113.jpg",
  description: "¡Dale definición a tu rostro de forma precisa! Brocha perfecta para realizar contorno de nariz. Sirve para aplicar y difuminar productos de contorno en polvo o crema con total precisión en zonas estrechas de la cara. Su diseño permite crear sombras estilizadas a lo largo del tabique nasal para afinar, respingar o enderezar la nariz de manera natural. Depende de cómo apliques el producto; lograrás: Afinar y definir, un efecto respingado o una definición muy sutil. Es de calidad profesional. Sus colores en negro y dorado la hacen ver muy luxury."
},
{
  id: "Kmr2567",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Mini X 6 Rugrats - Kmr2567",
  price: 40000,
  image: "images/productos/Maquillaje/Accesorios/Kmr2567.jpg",
  description: "Salir corriendo de casa por las mañanas y darte cuenta a mitad del día de que necesitas un retoque urgente de polvo, rubor o sombras, pero notar que dejaste tus brochas profesionales en el tocador porque son gigantes y pesadas, es una verdadera batalla. Terminas improvisando con los dedos, dejando parches o arruinando la base que con tanto amor aplicaste. ¡Es momento de decirle adiós a las carteras colapsadas y darle la bienvenida a la solución más hermosa del planeta! Este kit inspirado en tus personajes favoritos de los Rugrats reúne 6 herramientas esenciales en formato mini que resuelven tu rutina completa. Son ideales tanto para aplicar polvos sueltos como para fundir productos en crema. Además, cada brocha viene marcada con su función en el mango para que no pases horas adivinando cuál usar, e incluye una brocha difuminadora de ojos para lograr transiciones suaves y llenas de encanto. ¡Y agárrate, porque viene con una mini cosmetiquera en forma de mochila que es una absoluta coquetería para guardar todo con onda!",
  colaboracion: "Paramount"
},
{
  id: "Kpb2570",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Brochas Piña Bob Esponja - Kpb2570",
  price: 60000,
  image: "images/productos/Maquillaje/Accesorios/Kpb2570.jpg",
  description: "Sentarte a maquillarte por la mañana y terminar frustrada porque usas la misma brocha vieja para el rubor, el polvo y el contorno, dejando tu piel manchada, parchada o cargada de producto, es una verdadera batalla. Peor aún es abrir una cosmetiquera llena de pinceles idénticos y no tener ni idea de cuál sirve para los ojos y cuál para el corrector. ¡Es momento de ganarle el juego a la confusión con tus nuevos personajes favoritos! Este kit inspirado en el universo de Bob Esponja incluye los tamaños y cortes esenciales de rostro y ojos para resolver un maquillaje completo. Cada brocha viene marcada con su función en el mango para que identifiques al instante cuál usar. Sus cerdas premium son un absoluto sueño de suavidad, deslizan los polvos y las cremas de forma uniforme y son perfectas tanto si estás aprendiendo como si ya eres toda una pro. Además, incluye su propia cosmetiquera semitranslúcida para que las guardes con onda y las lleves impecables a donde vayas.",
  colaboracion: "Paramount"
},
{
  id: "BRT2287",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Brocha X10 Rosa Terciopelo - BRT2287",
  price: 80000,
  image: "images/productos/Maquillaje/Accesorios/BRT2287.jpg",
  description: "Despertarte con ganas de hacerte un maquillaje espectacular y terminar frustrada porque la única brocha vieja que tienes te deja la base llena de rayas, o notar que tus sombras quedaron como un manchón oscuro porque no tienes con qué difuminarlas, es una verdadera pesadilla. ¡Es momento de ganarle la batalla a los looks parchados y darle a tu rostro el acabado profesional que te gusta! Este kit de alta calidad incluye 10 brochas espectaculares diseñadas estratégicamente para resolver cada paso de tu rutina: 7 brochas perfectas para el rostro (ideales para base, corrector, rubor, contorno, iluminador y polvos), 2 brochas precisas para ojos que aplican y mezclan sombras como un sueño, y 1 brocha especial de cejas para peinar y definir con pulso de experta. Sus cerdas son tan extremadamente suaves que se sienten como terciopelo en la piel, permitiéndote difuminar texturas en crema y polvo con total facilidad. Además, viene con una cosmetiquera hermosa que mantiene tus herramientas limpias, ordenadas y listas para llevar contigo a donde vayas. ¡Es el regalo ideal para consentirte o sorprender a tu persona favorita!"
},
{
  id: "BT015",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Brocha Trendy Ojos x 6 Generica - BT015",
  price: 20000,
  image: "images/productos/Maquillaje/Accesorios/BT015.jpg",
  description: "Intentar hacer un sombreado espectacular para esa ocasión especial y terminar con un parche oscuro en el párpado o un delineado grueso y torcido porque estás usando la misma brocha gigante de rostro es el mayor miedo de todas. ¡Es momento de dejar de improvisar y darle a tus ojos las herramientas que se merecen! Este set reúne las 6 piezas clave que necesitas para crear cualquier look desde cero y como toda una profesional. Contiene 6 brochas de pelo sintético premium que son un absoluto sueño por su suavidad, lo que significa que no van a pullar tus párpados ni a levantar tus productos en crema. El kit incluye: 1 brocha dual para cejas, 1 brocha fina para delineador, 1 brocha difuminadora grande para integrar colores, 1 brocha plana pequeña para cortes de cuenca milimétricos, 1 brocha plana grande para depositar pigmento con fuerza y 1 brocha en punta para máxima precisión en el lagrimal. Recuerda que son libres de crueldad animal."
},
{
  id: "KG5",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Brochas Ojos Metalica Oro Rosa - KG5",
  price: 25000,
  image: "images/productos/Maquillaje/Accesorios/KG5.jpg",
  description: "Lleva este kit a donde quiera que vayas sin ocupar mucho espacio en tu bolso o cosmetiquera diaria. Incluye las brochas básicas para maquillar tus ojos y sacarte de cualquier apuro: difuminadoras para crear transiciones suaves, una lengua de gato para depositar color y una brocha para cejas que te dará una definición de impacto. Su empaque metálico es premium, súper sofisticado y resistente, diseñado para proteger tus herramientas y con la versatilidad de que puedes darle diferentes usos según tu estilo de vida. Disfruta de una calidad profesional que mima tus párpados y hace que aplicar tus sombras sea una experiencia ultra suave y divertida."
},
{
  id: "Ept2411",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Esponja Panda - Ept2411",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/Ept2411.jpg",
  description: "- Su set de dos tamaños cubre toda la rutina sin necesitar herramientas adicionales: la esponja grande, de textura ultra suave y flexible, difumina bases líquidas, correctores en crema y polvos en mejillas y frente sin dejar marcas ni líneas; la esponja pequeña trabaja las zonas de precisión: ojeras, contorno de ojos, nariz.\n- Donde la exactitud hace toda la diferencia. La clave del resultado perfecto está en usarlas húmedas para productos líquidos: el agua suaviza la textura, reduce la absorción del producto y genera el efecto \"segunda piel\" que hace que la base parezca que no existe.\n- Compatible con todos los formatos (líquidos, cremas y polvos), son la herramienta complementaria perfecta para la Base Aura Trendy y para cualquier base o corrector del portafolio.",
  category_new: "Nueva colección"
},
{
  id: "AHM1142",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit X 2 Almohaditas De Maquillaje - AHM1142",
  price: 6000,
  image: "images/productos/Maquillaje/Accesorios/AHM1142.jpg",
  description: "¡Las almohaditas que necesitas para un acabado perfecto en tu maquillaje!\n\nKit de dos almohaditas de maquillaje Trendy.\nAportan un acabado de mayor cobertura.\nNo te dejan manchas ni parches. Son ultra suaves.\nSon perfectas para llevarlas en tu comestiquera."
},
{
  id: "Pega15",
  category: "maquillaje",
  subcategory: "Ojos",
  name: "Pegante De Pestañas Doble Trendy - Pega15",
  price: 15000,
  image: "images/productos/Maquillaje/Ojos/Pega15.jpg",
  description: "Adiós a esos momentos de pánico donde la pestaña postiza se te empieza a despegar en la esquina del ojo a mitad de la fiesta o donde el pegante blanco te arruina un delineado perfecto dejando un manchón extraño. La aplicación de tus pestañas y piedritas con un solo producto de forma fácil ya es una realidad. El aplicador de este producto es un pincel ultradelgado diseñado estratégicamente para que tengas mayor precisión en tus trazos y deposites la cantidad ideal de pegamento para lucir tus mejores maquillajes sin desperdiciar una sola gota. Su empaque es superpráctico y versátil: viene un pegamento negro para que apliques tus pestañas sobre un delineado precioso simulando continuidad, y uno completamente transparente si buscas un acabado ultra natural o no quieres que se note nada de nada. Es la solución infalible que tu kit necesitaba para que te olvides de cargar mil tubitos pegajosos.",
  category_new: "Nueva colección"
},
{
  id: "Dy2336",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Woody Y Buzz - Dy2336",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/Dy2336.jpg",
  description: "Lleva la aventura, la diversión y la amistad a todas partes con este accesorio colorido y lleno de personalidad. Inspirado en Woody y Buzz Lightyear de Toy Story, este pin es la opción perfecta para darle un toque auténtico y llamativo a tus bolsos, chaquetas, cosmetiqueras o cartucheras. Su material resistente y tamaño práctico te permiten usarlo diariamente, mientras que su sistema de broche mantiene la pieza firme sobre cualquier tela. Coloca el pin en la superficie elegida y ajusta el broche posterior. Tip de Experta: Llévalo en tu cartuchera o mochila para resaltar tu estilo con el dúo icónico de Disney.",
  colaboracion: "Disney"
},
{
  id: "Lct2387",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Luxe Clean Trendy - Lct2387",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/Lct2387.jpg",
  description: "- Este spray es tu mejor aliado para eliminar esas manchas inesperadas especialmente de maquillaje sin arruinar tu prenda favorita.\n- Práctico y muy fácil de usar, es perfecto para esos momentos en los que necesitas una solución rápida y efectiva.\n- Remueve desde base y labial hasta pequeños accidentes del día a día, LuxeClean actúa sin complicaciones, ayudándote a mantener tu ropa como nueva.\nLo vas a amar porque:"
},
{
  id: "DY2349",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Stitch Angel - DY2349",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2349.jpg",
  description: "El detalle más dulce, romántico y encantador para llevar en tus pertenencias. Este pin coleccionable muestra a Stitch y Angel juntos, convirtiéndose en el accesorio perfecto para quienes aman los detalles con personalidad chic. Coloca el pin sobre la superficie deseada de tu bolso o chaqueta y asegura el broche. Tip de Experta: Es el regalo perfecto para compartir o llevar junto a tu persona favorita.",
  colaboracion: "Disney"
},
{
  id: "DY2347",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Stitch Abrazo - DY2347",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2347.jpg",
  description: "El detalle más dulce y emotivo para expresar tu personalidad con ternura. Este pin coleccionable enamora por su tierno diseño de Stitch en un abrazo, perfecto para personalizar chaquetas, bolsos o mochilas con un estilo cute pero chic. Coloca el pin en la prenda o accesorio que prefieras y asegura el broche por detrás. Tip de Experta: Regálalo a tu persona favorita como un detalle lindo que recuerde un abrazo constante.",
  colaboracion: "Disney"
},
{
  id: "DY2333",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Woody Toy Story - DY2333",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2333.jpg",
  description: "El accesorio ideal para darle un toque increíble de aventura a tu look diario. Este pin inspirado en el vaquero más querido del viejo oeste cuenta con acabados metalizados de alta calidad que destacan a simple vista. Es la opción perfecta para personalizar chaquetas, mochilas, bolsos o estuches con un estilo alegre y valiente. Fija el pin en la superficie elegida y ajusta el broche posterior. Tip de Experta: Combínalo con otros pines de la colección Toy Story para crear un conjunto temático en tu estuche.",
  colaboracion: "Disney"
},
{
  id: "DY2426",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Buzz - DY2426",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2426.jpg",
  description: "Este pin de Buzz te encantará por su diseño clásico, que transmite fuerza y toda la magia de Toy Story y de este personaje.\n\nUn detalle lleno de nostalgia que aporta un toque divertido y chic a cualquier accesorio. Dile adiós a los bolsos, prendas o accesorios aburridos.\nLos pines más lindos y coleccionables llegaron para darle vida a tu estilo.\nDecora tus prendas o accesorios favoritos con este hermoso pin, inspirado en una de las películas de Disney más queridas.\nIdeal para fans que aman los detalles con historia.",
  colaboracion: "Disney"
},
{
  id: "DY2345",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Stitch Hawa - DY2345",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2345.jpg",
  description: "Lleva la frescura, la alegría y la vibra tropical del verano a donde vayas. Este pin coleccionable muestra a Stitch en un estilo hawaiano súper colorido, siendo el accesorio ideal para transformar gorras, mochilas o chaquetas con un aire relajado y chic. Fija el pin en la superficie de tu preferencia y ajusta el broche en la parte posterior. Tip de Experta: Ponlo en una gorra o vicera de tela para tus salidas de fin de semana.",
  colaboracion: "Disney"
},
{
  id: "DY2343",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Marcianito Taco Toy Story - DY2343",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2343.jpg",
  description: "Una combinación súper original que refleja humor, estilo y amor por el universo de Toy Story. Este pin coleccionable destaca por su diseño divertido del clásico Marcianito sosteniendo un taco, perfecto para quienes buscan darle un toque cool y moderno a sus prendas favoritas. Coloca el pin sobre la prenda o accesorio seleccionado y asegura el broche posterior. Tip de Experta: Adórnalo en tu cartuchera o cosmetiquera para sacarle una sonrisa a todos.",
  colaboracion: "Disney"
},
{
  id: "DY2348",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Stitch Helado - DY2348",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2348.jpg",
  description: "Transmite alegría, frescura y diversión en cada uno de tus atuendos. Con un diseño colorido de Stitch disfrutando de un helado, este pin es la opción perfecta para darle un toque dulce, fresco y juvenil a tus chaquetas, bolsos o mochilas. Fija el pin sobre la superficie que prefieras y asegura el broche en la parte trasera. Tip de Experta: Agrégalo al asa de tu estuche favorito para darle vida a tu escritorio.",
  colaboracion: "Disney"
},
{
  id: "DY2350",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Stitch Sandia - DY2350",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2350.jpg",
  description: "Llena de color, ternura y alegría tus prendas y accesorios favoritos. Este pin coleccionable destaca por su divertido diseño de Stitch disfrazado de sandía, convirtiéndose en el detalle ideal para acompañar looks relajados pero cargados de estilo. Simplemente coloca el pin sobre la tela del accesorio seleccionado y asegúralo. Tip de Experta: Llévalo en gorras o mochilas de tela en días soleados para un toque veraniego.",
  colaboracion: "Disney"
},
{
  id: "DY2369",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin 3312 Monsters - DY2369",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2369.jpg",
  description: "Llena de vida, color y recuerdos divertidos cualquiera de tus accesorios favoritos. Inspirado en una de las escenas más famosas de Monsters Inc, este pin coleccionable destaca por sus tonos alegres, siendo la opción ideal para personalizar chaquetas, estuches o mochilas. Fija el pin en el lugar deseado utilizando el broche posterior. Tip de Experta: Combínalo con prendas de color neutro para que los tonos vivos del código 3312 resalten de inmediato.",
  colaboracion: "Disney"
},
{
  id: "DY2300",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Collar Plateado Stitch - DY2300",
  price: 4000,
  image: "images/productos/Maquillaje/Accesorios/DY2300.jpg",
  description: "Eleva cualquier look con el encanto de Disney. Esta cadena inspirada en Stitch es perfecta para darle un toque moderno, delicado y único a tus outfits. Su diseño delgado, elegante, ligero y cómodo la convierte en la pieza chic ideal para usar a diario. Ofrece una impresión de alta calidad que le aporta ese toque final perfecto a tu ropa. Solo colócalo alrededor del cuello y ajusta el cierre. Llévalo con prendas de escote sencillo para que el dije de Stitch sea el centro de atención.",
  colaboracion: "Disney",
  category_age: "Para niñas"
},
{
  id: "DY2371",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Dormidos Monsters Inc - DY2371",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2371.jpg",
  description: "Captura el momento más tierno y tranquilo de tus personajes favoritos para acompañarte en tus días de descanso. Este pin coleccionable de Monsters Inc cuenta con una impresión y grabado de alta calidad sobre Aleación de Zinc, destacando por su diseño único inspirado en Disney. Olvídate de los bolsos sencillos: su cierre de plástico duro te asegura una fijación ligera, firme y resistente sin maltratar tus prendas. Simplemente fija el pin sobre el accesorio deseado y asegura su broche posterior. Tip de Experta: Agrégalo a tu estuche o cosmetiquera favorita para personalizar tus esenciales de belleza.",
  colaboracion: "Disney"
},
{
  id: "DY2367",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Sullivan - DY2367",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2367.jpg",
  description: "Haz que tu estilo se robe todas las miradas con la ternura gigante y el inconfundible pelaje azul de Sullivan. Este pin coleccionable inspirado en Monsters Inc de Disney combina la mejor calidad de grabado sobre Aleación de Zinc con un acabado lleno de color. Incluye un sistema de cierre en plástico duro que garantiza una sujeción firme, ligera y muy resistente sobre tus prendas o bolsos preferidos. Simplemente fija el pin sobre la tela o accesorio seleccionado y asegura el broche. Tip de Experta: Úsalo en tu mochila escolar o de trabajo para llevar a Sullivan a todas partes.",
  colaboracion: "Disney"
},
{
  id: "DY2335",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Marcianito - DY2335",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2335.jpg",
  description: "Recuerda a uno de los personajes más icónicos de Toy Story con un pin lleno de nostalgia y magia. La carita adorable y el traje verde del Marcianito están capturados con una impresión y grabado de alta calidad sobre Aleación de Zinc. Este pin coleccionable de Disney incluye un cierre de plástico duro de ajuste ligero, firme y muy resistente para personalizar tus prendas o mochilas. Fija el pin sobre el accesorio deseado y asegura su broche. Tip de Experta: Junta varios pines de la colección de Disney en tu chaqueta para armar un look temático increíble.",
  colaboracion: "Disney"
},
{
  id: "DY2366",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Puerta Monsters Inc - DY2366",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2366.jpg",
  description: "Este pin Monsters Inc te va a encantar porque te transporta al mundo lleno de aventuras, risas y recuerdos tras las puertas.",
  colaboracion: "Disney"
},
{
  id: "DY2338",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Vaqueros Toy Story - DY2338",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2338.jpg",
  description: "Trae toda la energía del Viejo Oeste con el espíritu valiente y alegre de los personajes principales de Toy Story. Este pin coleccionable de Disney es perfecto para personalizar prendas o bolsos, destacando por su grabado e impresión de alta calidad. Está fabricado en Aleación de Zinc y cuenta con un sistema de cierre en plástico duro que te garantiza un ajuste firme, ligero y resistente sin que se caiga. Fija el pin sobre la prenda o accesorio que prefieras. Tip de Experta: Agrégalo al bolsillo de tu chaqueta de mezclilla para darle un toque vaquero y divertido.",
  colaboracion: "Disney"
},
{
  id: "DY2344",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Marcianito Pizza - DY2344",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2344.jpg",
  description: "Este pin de Marcianito Pizza te va a encantar porque combina lo mejor del universo y la pizza en un diseño muy divertido y coleccionable.",
  colaboracion: "Disney"
},
{
  id: "DY2370",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Hangry Monsters Inc - DY2370",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2370.jpg",
  description: "Muestra el lado más divertido e icónico de tus monstruos preferidos en tus atuendos diarios. Este pin coleccionable de Disney destaca por su estilo cómico, contando con un grabado e impresión de alta resolución sobre Aleación de Zinc. Su sistema de cierre de plástico duro te ofrece una sujeción firme, ligera y muy resistente sobre cualquier accesorio para que no tengas que preocuparte por extraviarlo. Fija el pin sobre la prenda o accesorio que elijas y asegura su broche por detrás. Tip de Experta: Llévalo en la solapa de tu abrigo para agregar un toque de humor a tu look del día.",
  colaboracion: "Disney"
},
{
  id: "DY2339",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Pin Rectangular Buzz - DY2339",
  price: 5000,
  image: "images/productos/Maquillaje/Accesorios/DY2339.jpg",
  description: "Reúne a los personajes más icónicos de Toy Story en un solo accesorio lleno de color, estilo y diversión. Este pin de formato rectangular incluye a Buzz, el Marcianito, Ducky y Bunny en un diseño coleccionable de Disney. Está fabricado en Aleación de Zinc con grabado e impresión de alta calidad, contando con un cierre de plástico duro que brinda un ajuste firme, ligero y muy resistente. Fija el pin sobre la prenda o accesorio deseado. Tip de Experta: Engánchalo en la correa de tu bolso o cosmetiquera para presumir a tus personajes favoritos.",
  colaboracion: "Disney"
},
{
  id: "Lmt2256",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Libreta Emprendedora - Lmt2256",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/Lmt2256.jpg",
  description: "¡Mayorista, esta libreta llegó para hacerte la vida más fácil! Es la herramienta ideal para organizar presupuestos, llevar cuenta de tus pedidos y clientes sobre tu negocio con mucha practicidad y estilo. Su tamaño es ideal y su material resistente permite llevarla en el bolso. Trae impresión a full color, argolla rosada de excelente calidad y 80 hojas microperforadas con diferentes diseños. Incluye calendario 2025 y 2026 con festivos, lista para anotación de productos más vendidos y agotados, registro de recompras e inversión, 20 hojas para crear facturas y 10 hojas extra para fidelizar clientes. Además, te ayuda a programar e idear tu contenido para redes sociales. Escribe tus apuntes utilizando bolígrafo o lápiz. Arranca las facturas fácilmente gracias a su borde microperforado cuando realices un envío."
},
{
  id: "Edt660",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Encrespador Oro Rosa - Edt660",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/Edt660.jpg",
  description: "¡Las pestañas rizadas son un paso fundamental en cualquier rutina de maquillaje! Eleva tu mirada con nuestro encrespador de calidad profesional, diseñado para darle a tus pestañas una curva hermosa, natural y duradera sin maltratarlas. Su lindo acabado viene disponible en color oro rosa. Úsalo siempre antes de aplicar tu pestañina para abrir la mirada al instante. Coloca las pestañas suavemente entre las almohadillas y presiona con cuidado por unos segundos. Riza tus pestañas en dos toques, uno en la base y otro en el medio, para un rizo curvo y abierto.",
  category_new: "Nueva colección"
},
{
  id: "Pfs1593",
  category: "maquillaje",
  subcategory: "Cuidado Facial",
  name: "Papeletas Antigrasa Forget Shine - Pfs1593",
  price: 10000,
  image: "images/productos/Maquillaje/Cuidado_Facial/Pfs1593.jpg",
  description: "¡Lleva el control del brillo en tu rostro a todo lado! Estas papeletas quita grasa hechas a base de Aloe Vera y Té Verde absorben el exceso de grasa y dejan tu piel con un lindo acabado mate. Cada cajita trae 100 unidades y las puedes usar en cualquier momento del día sin miedo a retirar tu maquillaje, ya que solo absorben la grasa. Tienen el tamaño perfecto para llevar a donde vayas. Presiona suavemente una hoja sobre la zona con brillo. Presiona con toques suaves en la zona T a mitad del día para refrescar tu look.",
  category_new: "Nueva colección"
},
{
  id: "DYT2513",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Accesorios Pelo Lotso - DYT2513",
  price: 8000,
  image: "images/productos/Maquillaje/Accesorios/DYT2513.jpg",
  description: "Un kit ideal para tener tu cabello en el mejor mood.\nDale un toque adorable a cada peinado con el Kit de Cabello Lotso.\nDiseñado para combinar funcionalidad y estilo, incluye accesorios ideales para crear looks prácticos, divertidos y llenos de personalidad.\nEl complemento perfecto para quienes aman destacar hasta en los pequeños detalles.\n\nIncluye:\n4 Hebillas. 3 Ligas. 2 Scrunchies. 1 Cartuchera.",
  colaboracion: "Disney"
},
{
  id: "HCM2330",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Hairclips Mini X8 - HCM2330",
  price: 3000,
  image: "images/productos/Maquillaje/Accesorios/HCM2330.jpg",
  description: "Sujeta pequeñas secciones de cabello y dale un toque coqueto y moderno a tus peinados. Este set de mini pinzas incluye 4 pares con diseños y tonos versátiles para cada mood: Negro, Miel, Café claro y Nude. Son supercómodas, suaves y combinan con todo, siendo ideales para usar a diario en detalles pequeños como coletas o moñitos. Coloca las mini pinzas directamente sobre los mechones de cabello según el peinado que quieras armar. Usa dos tonos diferentes en el mismo peinado para lograr un contraste súper coqueto."
},
{
  id: "Dyt2517",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Cartuchera Metálica Toy Story - Dyt2517",
  price: 20000,
  image: "images/productos/Maquillaje/Accesorios/Dyt2517.jpg",
  description: "Lo necesitas para un peinado muy tierno. Transforma cada peinado en una aventura con el Kit de Cabello Toy Story. Inspirado en los personajes más queridos de la película, incluye accesorios ideales para crear looks divertidos, prácticos y llenos de personalidad. El complemento perfecto para quienes aman destacar en cada detalle, su empaque es metálico perfecto para coleccionar. Incluye: 2 Scrunchies. 2 Hebillas. 2 Pinzas.",
  colaboracion: "Disney"
},
{
  id: "Kfp2288",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Kit Pelo Fabulosa - Kfp2288",
  price: 10000,
  image: "images/productos/Maquillaje/Accesorios/Kfp2288.jpg",
  description: "¡Domina cada look con precisión y estilo!\n- Este Kit de Cepillos Trendy es el aliado perfecto para lograr desde peinados pulidos hasta estilos más elaborados.\n- Este set completo incluye herramientas claves para un acabado impecable:\n- 1 Cepillo pulidor mediano: ideal para alisar, dar forma y controlar el frizz en secciones más amplias de cabello.\n- 1 Cepillo pulidor pequeño doble + peinilla pequeña: perfecto para detalles, retoques en bordes y peinados definidos como trenzas o baby hairs.\n- 1 Peinilla con cabo metálico: facilita una partición precisa del cabello, esencial para peinados con secciones bien marcadas.\n- Este kit será tu mejor amigo todas las mañanas, controla y da estilo a tu cabello."
},
{
  id: "Hmg2327",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Hair Clip Mariposa Grande - Hmg2327",
  price: 10000,
  image: "images/productos/Maquillaje/Accesorios/Hmg2327.jpg",
  description: "Sujeta todo tu cabello con total firmeza y un diseño que se robará todas las miradas. Esta pinza en formato grande con silueta de mariposa está pensada para recoger melenas abundantes o hacer moños completos de manera rápida, segura y sin halar el cuero cabelludo. Enrolla tu cabello, abre la pinza y engánchala en el centro del recogido. Haz un giro suave en tu cabello hacia arriba y sujétalo completo con la mariposa para un peinado veraniego en segundos."
},
{
  id: "Hct2329",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Hair Clip X2 - Hct2329",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/Hct2329.jpg",
  description: "Dale un detalle especial a tu peinado con este dúo de pinzas que combinan perfectamente. El kit incluye 2 hair clips prácticos para sujetar el flequillo, despejar el rostro o decorar cualquier look en pocos segundos. Se deslizan y abren con facilidad para brindarte comodidad durante todo el día. Coloca cada clip en el mechón de cabello seleccionado y presiona para asegurar. Úsalos juntos en un mismo lateral del cabello para un estilo moderno y en tendencia."
},
{
  id: "Ctt2270",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Cepillo Pulidor Clean Look - Ctt2270",
  price: 12000,
  image: "images/productos/Maquillaje/Accesorios/Ctt2270.jpg",
  description: "¡Tu aliado perfecto para lograr un look sofisticado! Este cepillo profesional es lo que necesitas para alisar, pulir y fijar tu cabello con total precisión. Cuenta con cerdas suaves y compactas que ayudan a reducir el frizz dejando un acabado impecable en peinados recogidos o sueltos. Su mango ergonómico ofrece un agarre muy cómodo para darte mejor control sobre cada mechón de pelo. Simplemente utilízalo cepillando directamente sobre el cabello seco o húmedo según el peinado que desees. Úsalo junto a tu cera o fijador favorito para pulir los vellitos rebeldes de la frente y los laterales."
},
{
  id: "Cet1985",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Cepillo Espiral - Cet1985",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/Cet1985.jpg",
  description: "¡Un cabello saludable! La parte más importante es: ¿Con qué y cómo lo peinas? Este cepillo controlará el frizz y no maltratará tu cabello.\nSus cerdas especiales ayudan a peinar el cabello, aportando un acabado suave y manejable.\nEs de un material ligero y flexible.\nPeina suavemente cualquier tipo de cabello sin maltratarlo.\nPuede ser usado en cabello seco o mojado.",
  category_new: "Nueva colección"
},
{
  id: "Dy2082",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Tote Bag Intensamente - Dy2082",
  price: 12000,
  image: "images/productos/Maquillaje/Accesorios/Dy2082.jpg",
  description: "Luce y lleva con comodidad todos tus artículos personales con estilo Disney. Esta tote bag te ayuda a dejar el plástico atrás para unirte a un estilo relajado con gran capacidad de almacenamiento y costuras muy resistentes. Está fabricada en material 100% poliéster sin forro interno, destacando por un diseño exclusivo con tonos vibrantes y llamativos del personaje de la película. Sus medidas son de 36 cm de alto por 31 cm de ancho aproximadamente. Guarda tus pertenencias e introduce tus hombros o manos en las asas para transportarla. Para lavarla correctamente y mantener sus colores vivos, lávala a mano utilizando agua fría o a temperatura ambiente.",
  colaboracion: "Disney"
},
{
  id: "Dyt2514",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Tote Bag Aliens Toy Story - Dyt2514",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/Dyt2514.jpg",
  description: "La compañera perfecta para llevar todo lo que necesitas con estilo.\nEsta tote bag inspirada en los aliens de Toy Story combina diseño, comodidad y practicidad en un solo accesorio.\nCuenta con amplio espacio interior y una bolsa independiente con gancho, ideal para doblarla, guardarla y transportarla fácilmente a donde vayas.",
  colaboracion: "Disney"
},
{
  id: "Dy2180",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Espejo Villanas - Dy2180",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/Dy2180.jpg",
  description: "- Este espejo está diseñado para acompañarte a donde vayas, combinando funcionalidad, calidad y estilo en un solo accesorio.\n- Incluye dos espejos de alta calidad óptica:\n- Uno con reflejo estándar, ideal para una visión general nítida.\n- Otro con aumento, perfecto para trabajar con precisión en los detalles más delicados de tu maquillaje, como delineados, cejas o aplicación de pestañas postizas.\n- Su diseño no pasa desapercibido, inspirado en una de las villanas más icónicas de Disney, este espejo combina elegancia y un aire de rebeldía encantadora.\n- Compacto, resistente, absolutamente encantador y luxury.\n- Será tu nuevo favorito en la cosmetiquera.",
  colaboracion: "Disney"
},
{
  id: "MT2393",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Kit Gloss + Mascarilla Labios Barbie Malibu - MT2393",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/MT2393.jpg",
  description: "- Lo necesitas para el cuidado de tus labios.\n- Logra unos labios suaves, saludables y de impacto.\n- Con este kit lograrás hidratación con un toque de brillo.\n- Incluye una mascarilla/bálsamo labial diseñada para nutrir, suavizar y proteger los labios, ayudando a mantenerlos cómodos y con apariencia saludable.\n- Se complementa con un brillo de textura ligera que aporta un acabado luminoso y natural, perfecto para usar solo o sobre el bálsamo.\n- Un dúo práctico muy ideal para el uso diario.",
  colaboracion: "Mattel"
},
{
  id: "Cpt1891",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Cepillo Pulidor Trendy - Cpt1891",
  price: 8000,
  image: "images/productos/Maquillaje/Accesorios/Cpt1891.jpg",
  description: "El secreto del clean look. Consigue el estilo clean look y pulido que siempre has querido con nuestro cepillo pulidor.\nEstá diseñado para lograr un acabado elegante y sofisticado en tus peinados.\nSus cerdas suaves y densas permiten que el cabello tome forma y una textura lisa al momento de peinar, disminuyendo el frizz y logrando una apariencia pulida.\nEs muy versátil, perfecto para todo tipo de cabello.\nSu diseño es liviano y cómodo, esto lo hace de fácil manejo.\nPor un costado encuentras las cerdas gruesas para pulir y por el otro encuentras un cabo metálico que facilitará la separación del cabello para crear distintos peinados."
},
{
  id: "Cst1977",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Cepillo Snake - Cst1977",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/Cst1977.jpg",
  description: "¡Mantén tu cabello perfecto siempre! Trendy un cepillo especialmente diseñado para facilitar tu rutina capilar.\nSu material y sus cerdas desenreda el cabello de una forma suave, aportando un acabado brillante.\nSu tamaño es perfecto para llevar a todas partes, es ligero y flexible.\nSus cerdas son suaves y gracias a su flexibilidad se deslizan fácilmente sobre cualquier tipo de cabello.",
  category_new: "Nueva colección"
},
{
  id: "Pht1588",
  category: "maquillaje",
  subcategory: "Cuidado Facial",
  name: "Papeletas Anti Grasa Hombre - Pht1588",
  price: 15000,
  image: "images/productos/Maquillaje/Cuidado_Facial/Pht1588.jpg",
  description: "¡La solución ideal para controlar la grasa facial en hombres! Son las mismas papeletas efectivas de siempre hechas a base de Aloe Vera y Té Verde, pero en una presentación renovada para que tu novio las lleve con él a todo lado. Controlan el brillo y absorben el exceso de grasa en cualquier momento del día. Su cajita con 100 unidades tiene el tamaño perfecto para cargar sin estorbar. Presiona una hoja sobre el rostro según sea necesario. Guardarlas en el bolsillo del abrigo o en el carro ayuda a tenerlas a la mano antes de cualquier reunión importante.",
  category_new: "Nueva colección"
},
{
  id: "Dpt1778",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Depilador Individual - Dpt1778",
  price: 6000,
  image: "images/productos/Maquillaje/Accesorios/Dpt1778.jpg",
  description: "Cejas on point con nuestro nuevo depilador: Check. Depilador de punta fina y delgada para más precisión al depilar las cejas.",
  category_new: "Nueva colección"
},
{
  id: "Pft1779",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Perfilador Facial Con Repuestos - Pft1779",
  price: 6000,
  image: "images/productos/Maquillaje/Accesorios/Pft1779.jpg",
  description: "¡Dile adiós a los vellitos de sobra! Este perfilador facial es el complemento ideal para lograr unas cejas perfectas con comodidad y practicidad. Cuenta con cuchilla intercambiable, cabezal removible y trae tres cuchillas extra como repuesto para renovarlo cuando lo necesites. Su diseño funcional y materiales de buena calidad facilitan tu rutina. Deslízalo suavemente sobre la piel limpia (puedes usarlo sobre un gel) para retirar los vellos. No utilizar sobre piel irritada, con heridas o lesiones, y mantener fuera del alcance de los niños. Inclina el perfilador en un ángulo de 45 grados y realiza trazos cortos en dirección al crecimiento del vello.",
  category_new: "Nueva colección"
},
{
  id: "Spt2435",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Separador De Pestañas - Spt2435",
  price: 10000,
  image: "images/productos/Maquillaje/Accesorios/Spt2435.jpg",
  description: "La mejor herramienta para unas pestañas perfectas. El separador de pestañas (o peine para pestañas) sirve para peinar, definir y eliminar los grumos de la pestañina después de su aplicación. Garantiza un acabado limpio, separa los vellos pegados evitando grumos, dando máximo alargamiento y volume, además logra un efecto de abanico profesional en la mirada sin necesidad de agregar más maquillaje. Una vez lo pruebas, se convierte en tu aliado. Hecho en acero quirúrgico de excelente calidad. Notas el cambio apenas lo usas.",
  category_new: "Nueva colección"
},
{
  id: "Om20",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Organizador Brochas Redondo - Om20",
  price: 15000,
  image: "images/productos/Maquillaje/Accesorios/Om20.jpg",
  description: "Mantén tu espacio ordenado y elegante con este organizador acrílico de 3 compartimentos.\n\nDiseño giratorio: Accede fácilmente a tus productos desde cualquier ángulo.\nVersátil y práctico: Ideal para brochas, pestañinas, delineadores, lápices y más.\nAhorra espacio: Perfecto para mantener tu tocador limpio y organizado.\nMaterial resistente: Acrílico transparente que combina con cualquier estilo.\n\n¡Una solución funcional y con estilo para espacios más organizados!",
  category_new: "Nueva colección"
},
{
  id: "Psl2133",
  category: "maquillaje",
  subcategory: "Cuidado Facial",
  name: "Papeletas Sky Lover - Psl2133",
  price: 10000,
  image: "images/productos/Maquillaje/Cuidado_Facial/Psl2133.jpg",
  description: "El infaltable anti grasa que borra el exceso de brillo del rostro sin afectar ni un milímetro el maquillaje que llevas puesto.\n\n- Diseñadas específicamente para la zona T frente, nariz y mentón, donde la piel produce más sebo, funcionan con el gesto más simple: presiona sobre la zona brillante, la papeleta absorbe el sebo en 2-3 segundos y retiras.\n- Sin arrastrar, sin frotar, sin perder cobertura de base ni corrector.\n- El resultado es un rostro fresco, mate y con apariencia de maquillaje recién aplicado, en cualquier momento del día.\n- Son superiores al papel tissue o los pañuelos porque su material específico captura el sebo sin dejar pelusa ni alterar la superficie del maquillaje.",
  category_new: "Nueva colección"
},
{
  id: "Orr2390",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Organizador Retro Rock - Orr2390",
  price: 25000,
  image: "images/productos/Maquillaje/Accesorios/Orr2390.jpg",
  description: "Organiza tus cosméticos favoritos y dale un toque único a tu tocador. El Organizador Retro Rock está pensado para solucionar el desorden en tu mesa, permitiéndote clasificar tus productos para tenerlos siempre a la mano. Fabricado en un material resistente, cuenta con el espacio ideal para mantener todo en su lugar de forma práctica. Coloca tus cosméticos en los compartimentos según tus necesidades. Clasifica tus labiales y brochas de uso diario en la zona frontal para alistarte mucho más rápido.",
  category_new: "Nueva colección"
},
{
  id: "BAT2272",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Base Aura - BAT2272",
  price: 30000,
  image: "images/productos/Maquillaje/Rostro/BAT2272.jpg",
  description: "La base de maquillaje que logra lo que pocas consiguen: acabado mate profesional y cobertura buildable sin sensación grasa ni pesada durante todo el día\n\n- Su fórmula está desarrollada para pieles mixtas a grasas que necesitan control del brillo sin sacrificar comodidad.\n- El acabado mate mantiene la piel pulida durante horas sin que necesites retocar constantemente.\n- La cobertura es buildable: una capa da un resultado de piel unificada y natural; dos capas en zonas específicas dan mayor intensidad sin el efecto \"máscara\" que dan las bases de cobertura plana.\n- La sensación en la piel es ligera y cómoda — el maquillaje que se olvida que se lleva puesto hasta que te ves al espejo.\n- Disponible en varios tonos para la diversidad de pieles colombianas.",
  category_new: "Nueva colección",
  tonos: ["00", "01", "02"]
},
];
