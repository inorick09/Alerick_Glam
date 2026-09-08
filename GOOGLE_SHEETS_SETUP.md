# Conectar el carrito a Google Sheets

Cuando una clienta le da "Enviar pedido" en el carrito, el sitio manda los
productos elegidos + sus datos a una hoja de Google Sheets. Esto se hace con
un script gratuito de Google (Apps Script) — no hace falta servidor ni base
de datos. Sigue estos pasos una sola vez:

## 1. Crea la hoja

1. Ve a [sheets.google.com](https://sheets.google.com) y crea una hoja nueva.
2. Ponle de nombre, por ejemplo, **Pedidos Alerick Glam**.
3. En la primera fila escribe estos encabezados, una palabra por columna:

   `Fecha | Nombre | Teléfono | Ciudad | Notas | Productos | Total`

## 2. Crea el script

1. Dentro de esa misma hoja, ve al menú **Extensiones → Apps Script**.
2. Borra el código de ejemplo que aparece y pega este:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  var productos = (data.productos || [])
    .map(function (p) {
      return p.cantidad + "x " + p.nombre + " ($" + p.precio + ")";
    })
    .join("\n");

  sheet.appendRow([
    new Date(),
    data.nombre || "",
    data.telefono || "",
    data.ciudad || "",
    data.notas || "",
    productos,
    data.total || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Guarda el proyecto (ícono de disquete). Ponle un nombre como "Pedidos web".

## 3. Publícalo como aplicación web

1. Arriba a la derecha, botón azul **Implementar → Nueva implementación**.
2. En "Selecciona el tipo", elige **Aplicación web**.
3. Configura:
   - **Ejecutar como:** Yo (tu cuenta)
   - **Quién tiene acceso:** Cualquier usuario
4. Dale a **Implementar**. Google va a pedirte autorizar el script (es tuyo,
   así que puedes aceptar con confianza) — sigue el flujo de "Avanzado →
   Ir a Pedidos web (no seguro)" si aparece esa advertencia genérica de Google.
5. Copia la **URL de la aplicación web** que te entrega al final (termina en
   `/exec`).

## 4. Conéctala al sitio

1. Abre `js/cart.js`.
2. Busca esta línea cerca del inicio del archivo:

   ```javascript
   const ORDER_ENDPOINT = 'PENDIENTE_CONFIGURAR';
   ```

3. Reemplaza `'PENDIENTE_CONFIGURAR'` por la URL que copiaste, entre comillas.
4. Guarda y sube el cambio a GitHub.

Listo — desde ese momento cada pedido queda registrado como una fila nueva en
la hoja, y ambos (tú y Alejandra) pueden verla y editarla al tiempo desde el
celular o el computador, sin pisarse los cambios como pasaba con el Excel.

## Si algo falla

Si el envío automático falla por cualquier motivo (por ejemplo, si todavía no
has hecho este paso), el carrito no se queda trabado: le muestra a la clienta
un enlace para mandar el mismo pedido por WhatsApp, así el pedido no se
pierde mientras terminas de configurar esto.

## Cómo vuelves a editar el script después

Si necesitas cambiar algo (por ejemplo, agregar una columna), entra de nuevo
a la hoja → Extensiones → Apps Script, edita el código, guarda, y en
**Implementar → Gestionar implementaciones** edita la implementación
existente con el ícono de lápiz y sube una **Nueva versión** (la URL no
cambia, así que no hay que tocar `cart.js` de nuevo).
