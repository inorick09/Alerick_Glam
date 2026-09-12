# Conectar el carrito a Google Sheets

Cuando una clienta le da "Enviar pedido" en el carrito, el sitio manda los
productos elegidos + sus datos a una hoja de Google Sheets. Esto se hace con
un script gratuito de Google (Apps Script) — no hace falta servidor ni base
de datos. Sigue estos pasos una sola vez:

**Nota de seguridad:** la URL de este script queda pública (cualquiera puede
verla en el código del sitio), así que el script de abajo exige una "clave"
antes de guardar cualquier pedido, revisa que no lleguen más de 20 pedidos
por minuto, y evita que un texto raro se interprete como fórmula dentro de
la hoja. No lo elimines ni lo simplifiques al copiarlo.

## 1. Crea la hoja

1. Ve a [sheets.google.com](https://sheets.google.com) y crea una hoja nueva.
2. Ponle de nombre, por ejemplo, **Pedidos Alerick Glam**.
3. En la primera fila escribe estos encabezados, una palabra por columna:

   `Fecha | Nombre | Teléfono | Ciudad | Notas | Productos | Total`

## 2. Crea el script

1. Dentro de esa misma hoja, ve al menú **Extensiones → Apps Script**.
2. Borra el código de ejemplo que aparece y pega este:

```javascript
// Debe ser IDÉNTICA a ORDER_TOKEN en js/cart.js — es lo que evita que
// cualquiera en internet le escriba directamente a esta hoja sin pasar
// por el sitio (la URL de este script es pública, así que esto es
// necesario, no opcional).
var SECRET_TOKEN = '5EJmuaJk2m_XfyP-4WJGBZ2Cv1AIfBKs';

// Máximo de pedidos que se aceptan por minuto entre todas las clientas,
// como freno básico si alguien intenta inundar la hoja de pedidos.
var MAX_PER_MINUTE = 20;

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (data.token !== SECRET_TOKEN) {
      return jsonResponse_({ ok: false, error: 'unauthorized' });
    }
    if (isRateLimited_()) {
      return jsonResponse_({ ok: false, error: 'rate_limited' });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    var productos = (data.productos || [])
      .map(function (p) {
        return sanitize_(p.cantidad) + "x " + sanitize_(p.nombre) + " ($" + sanitize_(p.precio) + ")";
      })
      .join("\n");

    sheet.appendRow([
      new Date(),
      sanitize_(data.nombre),
      sanitize_(data.telefono),
      sanitize_(data.ciudad),
      sanitize_(data.notas),
      productos,
      sanitize_(data.total)
    ]);

    return jsonResponse_({ ok: true });
  } catch (err) {
    return jsonResponse_({ ok: false, error: 'bad_request' });
  }
}

// Si un valor empieza por = + - @, Sheets podría interpretarlo como una
// fórmula al abrir la hoja. Anteponerle un apóstrofe lo deja como texto
// plano siempre, sin cambiar cómo se ve.
function sanitize_(value) {
  var text = (value === undefined || value === null) ? '' : String(value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

// Cuenta cuántos pedidos han llegado en el minuto actual usando la
// caché del script (no identifica de dónde viene cada uno, pero sí
// frena una inundación automatizada).
function isRateLimited_() {
  var cache = CacheService.getScriptCache();
  var bucket = 'orders_' + Math.floor(Date.now() / 60000);
  var count = Number(cache.get(bucket) || 0) + 1;
  cache.put(bucket, String(count), 90);
  return count > MAX_PER_MINUTE;
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
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

## Si alguna vez quieres cambiar la clave secreta

Por ejemplo, si sospechas que alguien más la vio. Solo tienes que:

1. Inventar un texto nuevo, largo y sin espacios (puede ser cualquier cosa,
   entre más raro mejor).
2. Reemplazar el valor de `SECRET_TOKEN` en el Apps Script por ese texto
   nuevo, guardar, y subir una **Nueva versión** de la implementación
   (paso anterior).
3. Reemplazar el valor de `ORDER_TOKEN` en `js/cart.js` por el mismo texto
   nuevo, y subir el cambio a GitHub.

Los dos valores tienen que quedar idénticos, o el sitio no podrá enviar
pedidos automáticamente (aunque, como siempre, la clienta va a poder
mandarlo igual por WhatsApp).
