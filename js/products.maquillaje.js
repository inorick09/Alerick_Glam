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
  id: "GCD2283",
  category: "maquillaje",
  subcategory: "Cejas",
  name: "Betún De Cejas Doble Dreams Trendy - GCD2283",
  price: 10000,
  image: "images/productos/Maquillaje/Cejas/GCD2283.jpg",
  description: "Nuestro betún es ideal para maquillar y definir tus cejas. Incluye dos tonos café para resaltar tu mirada con un acabado natural y armonioso. Modo de uso: Puedes usar ambos tonos: el más claro al inicio de la ceja y el más oscuro al final para crear un efecto degradé y obtener un acabado más natural y profesional."
},
{
  id: "BTT2162",
  category: "maquillaje",
  subcategory: "Cuidado Facial",
  name: "Bolrla Triangular Morada - BTT2162",
  price: 5000,
  image: "images/productos/Maquillaje/Cuidado_Facial/BTT2162.jpg",
  description: "Viene en forma triangular, lo que facilita llegar a zonas como el contorno de ojos y las comisuras de la nariz. Es perfecta para la aplicación de productos en polvo, como polvos sueltos y compactos. Su material es de una felpa suave y acolchada."
},
{
  id: "DY2140",
  category: "maquillaje",
  subcategory: "Cuidado Facial",
  name: "Borlas Intensamente - Alegria - DY2140",
  price: 8000,
  image: "images/productos/Maquillaje/Cuidado_Facial/DY2140.jpg",
  description: "Descubre la suavidad de nuestras borlas de maquillaje inspiradas en Intensamente 2, perfectas para aplicar y difuminar productos en polvo. Su diseño se adapta a la forma de tu rostro, estas borlas te permiten un acabado profesional en tu maquillaje, asegurando una aplicación uniforme."
},
{
  id: "BMT2271",
  category: "maquillaje",
  subcategory: "Rostro",
  name: "Borador de Maquillaje - BMT2271",
  price: 15000,
  image: "images/productos/Maquillaje/Rostro/BMT2271.jpg",
  description: "Borrar los errores del maquillaje, ahora sí se logra con un borrador. Arregla esos pequeños detalles de tu maquillaje que marcan la diferencia con este plumón borrador de maquillaje, retira hasta las fórmulas más resistentes con pocas pasadas."
},
{
  id: "BAM2430",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo de Labios Mocca Aura - BAM2430",
  price: 20000,
  image: "images/productos/Maquillaje/Labios/BAM2430.jpg",
  description: "Gloss Mocca llega para darle a tus labios un tono elegante, hermoso y en tendencia. Disponible en 6 tonos que van desde moccas claros hasta opciones más intensas y con matices rojizos. Son ideales para complementar cualquier look. Cada tono ofrece un acabado único que realza la belleza natural de los labios."
},
{
  id: "BAT1878",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo De Labios Aura - BAT1878",
  price: 20000,
  image: "images/productos/Maquillaje/Labios/BAT1878.jpg",
  description: "El gloss más viral de internet! El Brillo de Labios Aura Trendy está diseñado para quienes buscan unos labios perfectos con un acabado tipo espejo y son amates al acabado jugoso del gloss. Con su aplicador de gran tamaño y textura ligera, este brillo de labios se desliza suavemente sin dejar sensación pesada."
},
{
  id: "BHG1893",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo De Labios Hologlam - BHG1893",
  price: 5000,
  image: "images/productos/Maquillaje/Labios/BHG1893.jpg",
  description: "Hologlam es la mezcla perfecta entre glamour y brillo. Vienen 4 colores, el que te llegue, te encantará. Los tonos varían entre rosas, violetas y dorados que le dan un acabado tornasol y jugoso a cualquier maquillaje de labios. Contienen un leve aroma a chicle."
},
{
  id: "BPT1963",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo De Labios Lip Oil Pretty Things - BPT1963",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/BPT1963.jpg",
  description: "Su pigmentación es construible, así que entre más apliques más se notará el color. Tienen una textura suave y ligera, así que se difuminan suavemente sobre tus labios. Son 6 tonos diferentes, elige tu color favorito. Sus colores son rojizos y uno violeta, ideales para aportar un leve color. Su textura es espesa, así que se esparce sobre tus labios fácilmente."
},
{
  id: "HKS1551",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Lip Balm Kisses - HKS1551",
  price: 8000,
  image: "images/productos/Maquillaje/Labios/HKS1551.jpg",
  description: "Los lip balm Kisses son la clave para lograr unos labios suaves, brillantes y con ese acabado jugoso que nunca pasa de moda. Vienen en 2 referencias que no aportan color, realza la belleza natural de tus labios, aportando un brillo hermoso y una apariencia saludable. Su textura es cómoda, ligera y agradable de llevar durante el día, dejando los labios con una apariencia saludable y luminosa."
},
{
  id: "BLS2258",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Lip Oil Sandia - BLS2258",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/BLS2258.jpg",
  description: "Son de textura suave, ligera y dejan una fragancia a sandía que te encantará. Su aplicador de silicona es perfecto para utilizar sobre tus mejores lip combos, esto evita que ensucies o alteres el color del gloss. No dejan sensación pegajosa. Aportan una sensación de hidratación que mantiene tus labios suaves y luminosos."
},
{
  id: "HL15",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Magico Honey - HL15",
  price: 6000,
  image: "images/productos/Maquillaje/Labios/HL15.jpg",
  description: "abios hermosos, con color en segundos y una sensación hidratante desde la primera aplicación. Este brillo mágico reacciona al pH natural de tus labios, creando un tono único que se adapta a ti y realza tu color natural. Su fórmula enriquecida con aceites ayuda a mantener los labios suaves e hidratados, mientras aporta un acabado luminoso y fresco."
},
{
  id: "BDC1848",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Para Niñas Dolly Chic - BDC1848",
  price: 10000,
  image: "images/productos/Maquillaje/Labios/BDC1848.jpg",
  description: "Brillos Dolly Chic para las más pequeñas de la casa. Este kit x 2 brillitos es perfecto para que sus labios luzcan hermosos con un toque de brillo y color suave. Incluye dos tonos, uno lila y otro rosa, ambos cargados con destellitos sutiles y acompañados de un delicioso aroma muy suave que les encantará. Aplícalo directamente sobre los labios para un acabado lindo e instantáneo. Pueden alternar el tono rosa o el lila según sus prendas favoritas del día."
},
{
  id: "RLG1846",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Red Lips - RLG1846",
  price: 8000,
  image: "images/productos/Maquillaje/Labios/RLG1846.jpg",
  description: "Un gloss con color para darle protagonismo a tus labios. Es perfecto para complementar tus maquillajes. Vienen 6 tonos entre nudes, rojos y terracotas. Se envían surtidos. Son de una textura suave, se adhiere muy bien sin dejar sensación pesada o grasosa. Tienen un aroma deli!"
},
{
  id: "B177",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Retráctil Beauty Glazed - B177",
  price: 15000,
  image: "images/productos/Maquillaje/Labios/B177.jpg",
  description: "No sufras más porque tu labial favorito se rompió, Con el Lip Plump de Beauty Glazed podrás mantener a raya tu labial favorito evitando que se quiebre. Solo debes dar click a medida que vas gastando el producto y saldrá como nuevo. Esta fórmula cremosa y suave te dará un brillo y suavidad excepcional. Deja una sensación de hidratación inmediata y cero pegajosa. Mantiene su brillo durante horas. Tonos de excelente pigmentación y calidad."
},
{
  id: "BRK1406",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Retro Kisses - BRK1406",
  price: 8000,
  image: "images/productos/Maquillaje/Labios/BRK1406.jpg",
  description: "¡Labios irresistibles, besables y jugositos! El Gloss Retro Kisses es todo lo que buscas. Vienen en dos tonalidades, una con destellos tornasol y otra con destellos rosas. Su textura es suave y no se siente pesada. Sientes hidratados tus labios una vez lo aplicas. Tiene un aroma a dulce encantador. Aplícalo sobre labiales mates o solo, como lo prefieras."
},
{
  id: "SL13",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillo Voluminizador Smoothie Lips - SL13",
  price: 12000,
  image: "images/productos/Maquillaje/Labios/SL13.jpg",
  description: "Este producto ES NORMAL que sientas alguna picazón al aplicarlo, por eso debes ser muy cuidadoso en su aplicación y si es la primera vez que lo pruebas te recomendamos usar poco producto y esperar alrededor de un minuto, allí vas sintiendo la sensación y tus labios en transcurso de 5 minutos quedarán con el resultado final."
},
{
  id: "DY2099",
  category: "maquillaje",
  subcategory: "Labios",
  name: "Brillos De Los Recuerdos Intensamente - DY2099",
  price: 5000,
  image: "images/productos/Maquillaje/Labios/DY2099.jpg",
  description: "Nos inspiramos en Intensamente y en cada uno de sus icónicos personajes. Cada brillo representa una emoción, ¡Elige tu favorito! Su diferencia es que varían sus tonos entre rosaditos y transparentes con una leve escarchita. Su fragancia te encantará. Aporta un leve tono rosa a tus labios y viene con destellos dorados que le darán un plus a cualquier maquillaje. Perfecto para llevar en la cosmetiquera o bolso."
},
{
  id: "P213",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Doble Fibra - P213",
  price: 1000,
  image: "images/productos/Maquillaje/Accesorios/P213.jpg",
  description: "¡La brocha que hace un dúo excepcional con los productos en crema! Brocha de doble fibra para aplicar productos cremosos. Sus cerdas amplias te permitirán aplicar rubores e iluminadores líquidos para una piel luminosa efecto glowy. Funciona perfectamente para aplicar productos de skincare si no te gusta hacerlo con tus dedos como sueros o primers. Está fabricada con pelo sintético en fibra de Nylon y mango en madera."
},
{
  id: "P206",
  category: "maquillaje",
  subcategory: "Accesorios",
  name: "Brocha Individual Ojo Plana - P206",
  price: 6000,
  image: "images/productos/Maquillaje/Accesorios/P206.jpg",
  description: "¡Cortes de cuenca como toda una profesional en el makeup! Brocha para crear looks que requieren precisión. Gracias a la forma plana y delgada puedes realizar cortes de cuenca perfectos. Utilízalas para tus sombras satinadas aplicando a toquecitos y darle una mayor saturación al producto. Está fabricada con pelo sintético en fibra de Nylon y mango en madera."
},
];
