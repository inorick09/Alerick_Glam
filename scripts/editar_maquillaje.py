#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
editar_maquillaje.py
====================

Asistente en la terminal para AGREGAR o EDITAR productos del archivo
js/products.maquillaje.js sin tener que tocar el código a mano.

COMO USARLO
-----------
1. Abre una terminal en la carpeta del sitio (Web_site) y corre:
       python scripts/editar_maquillaje.py
   (no necesita instalar nada, solo Python 3)
2. Escribe el ID del producto (ej: MT2418):
     - Si EXISTE   -> te muestra el producto y te deja editar sus campos.
     - Si NO EXISTE -> te pregunta si lo quieres agregar como nuevo.
3. Antes de guardar SIEMPRE te muestra los cambios (antes -> después)
   y te pide confirmación. Si dices que no, no se toca el archivo.

QUE HACE EXACTAMENTE
--------------------
- Lee el arreglo PRODUCTS_MAQUILLAJE y ubica cada producto { ... }.
- Al editar, reescribe SOLO el bloque de ese producto; al agregar,
  inserta el bloque nuevo al inicio o al final del arreglo. El resto
  del archivo (comentarios, orden, otros productos) queda igual.
- Antes de la primera escritura de la sesión guarda un respaldo en
  scripts/_respaldos/ (por si algo sale mal, copias ese archivo de vuelta).
- Después de guardar vuelve a leer el archivo para verificar que quedó
  bien formado.

TECLAS UTILES MIENTRAS LLENAS UN CAMPO
--------------------------------------
  Enter vacío  -> deja el valor actual (al editar) / omite el campo opcional
  -            -> (un guion solo) BORRA un campo opcional
  FIN          -> termina la descripción (que puede tener varias líneas)
"""

import datetime
import json
import os
import shutil
import sys

# ---------------------------------------------------------------------------
# Rutas: el script vive en Web_site/scripts/, el catálogo en Web_site/js/
# ---------------------------------------------------------------------------
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SITE_ROOT = os.path.dirname(SCRIPT_DIR)
PRODUCTS_FILE = os.path.join(SITE_ROOT, "js", "products.maquillaje.js")
BACKUP_DIR = os.path.join(SCRIPT_DIR, "_respaldos")
ARRAY_MARKER = "const PRODUCTS_MAQUILLAJE = ["

# Mismos valores (y orden) que SUBCATEGORY_ORDER en js/catalog.js
SUBCATEGORIES = [
    "Rostro", "Labios", "Cejas", "Ojos", "Colaboraciones",
    "Cuidado Facial", "Capilar", "Corporal", "Accesorios", "Brochas",
]

# Orden en el que se escriben los campos en un producto NUEVO
FIELD_ORDER = [
    "id", "category", "subcategory", "name", "price", "image",
    "description", "colaboracion", "category_new", "category_age", "tonos",
]
REQUIRED = {"id", "category", "subcategory", "name", "price", "image", "description"}
OPTIONAL = ["colaboracion", "category_new", "category_age", "tonos"]

# Campos que se pueden editar desde el menú (category siempre es "maquillaje")
EDITABLE = [
    "id", "subcategory", "name", "price", "image", "description",
    "colaboracion", "category_new", "category_age", "tonos",
]

# Ayuda que se muestra antes de pedir cada campo
HELP = {
    "id": (
        "Código único del producto, sin espacios. Normalmente es el código\n"
        "del proveedor y también el nombre de la foto.",
        'MT2418',
    ),
    "subcategory": (
        "Tipo de producto. Activa el filtro por tipo en la página.\n"
        "Elige el número de la lista.",
        '1  (= "Rostro")',
    ),
    "name": (
        'Nombre que se ve en la tarjeta. El script le agrega solo " - ID"\n'
        "al final (así se ve el código en el carrito y en WhatsApp), no lo\n"
        "escribas tú.",
        'Kit Brillo Y Monedero Amigas Barbie   ->  queda "... - MT2418"',
    ),
    "price": (
        "Precio en pesos, solo el número. Puedes escribirlo con puntos o\n"
        "con $; el script los quita.",
        "35000   (o 35.000 / $35.000)",
    ),
    "image": (
        "Ruta de la foto, relativa a la carpeta del sitio. Se sugiere\n"
        "images/productos/Maquillaje/<Tipo>/<ID>.jpg — Enter la acepta.\n"
        "Si la foto todavía no está ahí, te avisa (pero igual puedes seguir).",
        "images/productos/Maquillaje/Rostro/MT2418.jpg",
    ),
    "description": (
        "Texto largo del producto. Puede tener varias líneas y líneas en\n"
        "blanco. Cuando termines escribe FIN en una línea sola y Enter.",
        "Rubor cremoso de alta pigmentación.\n"
        "     Es de larga duración.\n"
        "     FIN",
    ),
    "colaboracion": (
        "(Opcional) Colección o licencia (Barbie, Disney...). Texto libre,\n"
        "pero escríbelo IGUAL (mayúsculas incluidas) en todos los productos\n"
        "de la misma colección para que el filtro los agrupe.",
        "Disney",
    ),
    "category_new": (
        "(Opcional) Chip de la fila \"Novedades\". OJO: \"Agotado\" OCULTA el\n"
        "producto del sitio (products.js lo filtra).",
        "Nueva colección",
    ),
    "category_age": (
        '(Opcional) Chip de la fila "Edad". Texto libre, igual en todos.',
        "Para niñas",
    ),
    "tonos": (
        '(Opcional) Lista de tonos separados por coma. Si el producto los\n'
        'tiene, el botón cambia a "Elegir tono" y la clienta debe escoger uno.',
        "Beige claro, Beige medio, Beige oscuro",
    ),
}


# ---------------------------------------------------------------------------
# Colores en la terminal (Windows 10+ los soporta tras os.system(""))
# ---------------------------------------------------------------------------
if os.name == "nt":
    os.system("")
try:
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stdin.reconfigure(encoding="utf-8")
except Exception:
    pass

C_RESET, C_BOLD, C_DIM = "\033[0m", "\033[1m", "\033[2m"
C_RED, C_GREEN, C_YELLOW, C_CYAN, C_MAG = (
    "\033[31m", "\033[32m", "\033[33m", "\033[36m", "\033[35m")


def color(text, c):
    return f"{c}{text}{C_RESET}"


# ---------------------------------------------------------------------------
# Lectura del archivo: mini-parser de los objetos JS del arreglo
# (los productos usan claves sin comillas, strings con "", números y
#  listas de strings — este parser entiende exactamente eso)
# ---------------------------------------------------------------------------
class ParseError(Exception):
    pass


class Parser:
    def __init__(self, text, pos):
        self.s = text
        self.i = pos

    def ws(self):
        s, n = self.s, len(self.s)
        while self.i < n:
            if s[self.i] in " \t\r\n":
                self.i += 1
            elif s.startswith("//", self.i):
                self.i = s.find("\n", self.i)
                if self.i == -1:
                    self.i = n
            elif s.startswith("/*", self.i):
                end = s.find("*/", self.i + 2)
                if end == -1:
                    raise ParseError("Comentario /* sin cerrar")
                self.i = end + 2
            else:
                break

    def error(self, msg):
        line = self.s.count("\n", 0, self.i) + 1
        raise ParseError(f"{msg} (línea {line} de products.maquillaje.js)")

    def value(self):
        self.ws()
        ch = self.s[self.i]
        if ch == '"':
            return self.string()
        if ch == "[":
            return self.array()
        if ch == "-" or ch.isdigit():
            return self.number()
        for word, val in (("true", True), ("false", False), ("null", None)):
            if self.s.startswith(word, self.i):
                self.i += len(word)
                return val
        self.error(f"Valor inesperado '{ch}'")

    def string(self):
        try:
            val, end = json.JSONDecoder().raw_decode(self.s, self.i)
        except json.JSONDecodeError:
            self.error("Texto entre comillas mal formado")
        self.i = end
        return val

    def number(self):
        start = self.i
        self.i += 1
        while self.i < len(self.s) and (self.s[self.i].isdigit() or self.s[self.i] == "."):
            self.i += 1
        txt = self.s[start:self.i]
        return float(txt) if "." in txt else int(txt)

    def array(self):
        self.i += 1
        out = []
        while True:
            self.ws()
            if self.s[self.i] == "]":
                self.i += 1
                return out
            out.append(self.value())
            self.ws()
            if self.s[self.i] == ",":
                self.i += 1

    def obj(self):
        """Lee { clave: valor, ... } y devuelve (dict, inicio, fin)."""
        start = self.i
        self.i += 1
        out = {}
        while True:
            self.ws()
            if self.s[self.i] == "}":
                self.i += 1
                return out, start, self.i
            k0 = self.i
            while self.s[self.i].isalnum() or self.s[self.i] == "_":
                self.i += 1
            key = self.s[k0:self.i]
            if not key:
                self.error("Se esperaba el nombre de un campo")
            self.ws()
            if self.s[self.i] != ":":
                self.error(f"Falta ':' después de '{key}'")
            self.i += 1
            out[key] = self.value()
            self.ws()
            if self.s[self.i] == ",":
                self.i += 1


def load_catalog():
    """Devuelve (texto, productos, pos_cierre). Cada producto es
    {'data': dict, 'start': int, 'end': int}; pos_cierre es el índice del ']'."""
    with open(PRODUCTS_FILE, encoding="utf-8", newline="") as f:
        text = f.read()
    idx = text.find(ARRAY_MARKER)
    if idx == -1:
        raise ParseError(f"No encontré '{ARRAY_MARKER}' en el archivo")
    p = Parser(text, idx + len(ARRAY_MARKER))
    products = []
    while True:
        p.ws()
        ch = p.s[p.i]
        if ch == "]":
            return text, products, p.i
        if ch == "{":
            data, start, end = p.obj()
            products.append({"data": data, "start": start, "end": end})
        elif ch == ",":
            p.i += 1
        else:
            p.error(f"Carácter inesperado '{ch}' dentro del arreglo")


# ---------------------------------------------------------------------------
# Escritura: mismo formato que ya tiene el archivo
# ---------------------------------------------------------------------------
def js_value(v):
    if isinstance(v, str):
        return json.dumps(v, ensure_ascii=False)
    if isinstance(v, list):
        return "[" + ", ".join(js_value(x) for x in v) + "]"
    if isinstance(v, bool):
        return "true" if v else "false"
    return str(v)


def render_block(data):
    lines = [f"  {k}: {js_value(v)}" for k, v in data.items()]
    return "{\n" + ",\n".join(lines) + "\n}"


def ordered_new(data):
    """Ordena los campos de un producto nuevo según FIELD_ORDER."""
    out = {k: data[k] for k in FIELD_ORDER if k in data}
    out.update({k: v for k, v in data.items() if k not in out})
    return out


_backup_done = False


def make_backup():
    global _backup_done
    if _backup_done:
        return
    os.makedirs(BACKUP_DIR, exist_ok=True)
    stamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    dest = os.path.join(BACKUP_DIR, f"products.maquillaje_{stamp}.js")
    shutil.copy2(PRODUCTS_FILE, dest)
    print(color(f"  Respaldo guardado en: scripts/_respaldos/{os.path.basename(dest)}", C_DIM))
    _backup_done = True


def write_text(new_text):
    make_backup()
    with open(PRODUCTS_FILE, "w", encoding="utf-8", newline="") as f:
        f.write(new_text)
    # Verificación: el archivo debe volver a leerse sin errores
    _, products, _ = load_catalog()
    return len(products)


def save_edit(product, new_data):
    text, _, _ = load_catalog()
    s, e = product["start"], product["end"]
    return write_text(text[:s] + render_block(new_data) + text[e:])


def save_new(new_data, at_start):
    text, products, close_pos = load_catalog()
    block = render_block(new_data)
    if at_start and products:
        pos = products[0]["start"]
        new_text = text[:pos] + block + ",\n" + text[pos:]
    elif products:
        # después del último producto (respetando si ya tenía coma final)
        last_end = products[-1]["end"]
        rest = text[last_end:close_pos]
        if rest.strip().startswith(","):
            # El último producto ya tiene coma final: el nuevo también la lleva
            insert_at = last_end + rest.index(",") + 1
            new_text = text[:insert_at] + "\n" + block + "," + text[insert_at:]
        else:
            new_text = text[:last_end] + ",\n" + block + text[last_end:]
    else:
        new_text = text[:close_pos] + "\n" + block + ",\n" + text[close_pos:]
    return write_text(new_text)


# ---------------------------------------------------------------------------
# Utilidades de entrada
# ---------------------------------------------------------------------------
def ask(prompt):
    try:
        return input(prompt)
    except EOFError:
        print()
        sys.exit(0)


def yes_no(prompt, default=False):
    hint = "[S/n]" if default else "[s/N]"
    while True:
        r = ask(f"{prompt} {hint}: ").strip().lower()
        if not r:
            return default
        if r in ("s", "si", "sí", "y", "yes"):
            return True
        if r in ("n", "no"):
            return False
        print(color("  Responde s o n.", C_YELLOW))


def show_help(field):
    desc, example = HELP[field]
    print()
    print(color(f"── {field} ", C_CYAN + C_BOLD) + color("─" * max(0, 50 - len(field)), C_CYAN))
    for line in desc.split("\n"):
        print(f"  {line}")
    print(color("  Ejemplo: ", C_MAG) + example)


def fmt(v, limit=90):
    if v is None:
        return color("(no tiene)", C_DIM)
    txt = js_value(v)
    return txt if len(txt) <= limit else txt[: limit - 3] + "..."


def base_name(name, pid):
    suffix = f" - {pid}"
    return name[: -len(suffix)] if name.endswith(suffix) else name


def image_folder(subcat):
    return subcat.replace(" ", "_")


def suggested_image(pid, subcat):
    return f"images/productos/Maquillaje/{image_folder(subcat)}/{pid}.jpg"


def check_image(path):
    full = os.path.join(SITE_ROOT, *path.split("/"))
    if not os.path.isfile(full):
        print(color(f"  Aviso: no encuentro la foto en {path}. "
                    "Recuerda guardarla ahí antes de subir a GitHub.", C_YELLOW))


def existing_values(products, field):
    seen = []
    for p in products:
        v = p["data"].get(field)
        if isinstance(v, str) and v not in seen:
            seen.append(v)
    return seen


# ---------------------------------------------------------------------------
# Preguntas por campo. Cada función recibe el valor actual (o None) y
# devuelve el nuevo valor; KEEP = no cambiar, REMOVE = borrar el campo.
# ---------------------------------------------------------------------------
KEEP = object()
REMOVE = object()


def input_id(current, products, own_index=None):
    show_help("id")
    while True:
        r = ask(f"  id{' [' + current + ']' if current else ''}: ").strip()
        if not r:
            if current:
                return KEEP
            print(color("  El id es obligatorio.", C_YELLOW))
            continue
        if " " in r:
            print(color("  El id no puede tener espacios.", C_YELLOW))
            continue
        clash = [i for i, p in enumerate(products)
                 if p["data"].get("id", "").lower() == r.lower() and i != own_index]
        if clash:
            print(color(f"  Ya existe un producto con id {r}. Usa otro.", C_RED))
            continue
        return r


def input_subcategory(current):
    show_help("subcategory")
    for n, s in enumerate(SUBCATEGORIES, 1):
        mark = color("  <- actual", C_DIM) if s == current else ""
        print(f"    {n:>2}) {s}{mark}")
    while True:
        r = ask(f"  subcategory (número){' [Enter = ' + current + ']' if current else ''}: ").strip()
        if not r and current:
            return KEEP
        if r.isdigit() and 1 <= int(r) <= len(SUBCATEGORIES):
            return SUBCATEGORIES[int(r) - 1]
        match = [s for s in SUBCATEGORIES if s.lower() == r.lower()]
        if match:
            return match[0]
        print(color("  Elige un número de la lista.", C_YELLOW))


def input_name(current_base, pid):
    show_help("name")
    while True:
        r = ask(f"  name (sin el ' - {pid}'){' [' + current_base + ']' if current_base else ''}: ").strip()
        if not r:
            if current_base:
                return KEEP
            print(color("  El nombre es obligatorio.", C_YELLOW))
            continue
        return base_name(r, pid)  # por si lo escribió con el " - ID"


def input_price(current):
    show_help("price")
    while True:
        r = ask(f"  price{' [' + str(current) + ']' if current is not None else ''}: ").strip()
        if not r and current is not None:
            return KEEP
        clean = r.replace("$", "").replace(".", "").replace(",", "").replace(" ", "")
        if clean.isdigit() and int(clean) > 0:
            return int(clean)
        print(color("  Escribe solo el número, ej: 35000", C_YELLOW))


def input_image(current, suggestion):
    show_help("image")
    default = current or suggestion
    if current and current != suggestion:
        print(color(f"  Sugerida según id/tipo: {suggestion}  (escribe S para usarla)", C_DIM))
    r = ask(f"  image [{default}]: ").strip().replace("\\", "/")
    if not r:
        val = default
    elif r.lower() == "s":
        val = suggestion
    else:
        val = r
    check_image(val)
    return KEEP if val == current else val


def input_description(current):
    show_help("description")
    if current:
        print(color("  Actual:", C_DIM))
        for line in current.split("\n"):
            print(color(f"    | {line}", C_DIM))
        print(color("  (Enter en la primera línea = dejar la actual)", C_DIM))
    lines = []
    while True:
        line = ask("  > ")
        if line.strip().upper() == "FIN":
            break
        if not lines and not line.strip():
            if current:
                return KEEP
            print(color("  La descripción es obligatoria. Escribe el texto y luego FIN.", C_YELLOW))
            continue
        lines.append(line.rstrip())
    while lines and not lines[-1].strip():
        lines.pop()
    return "\n".join(lines)


def input_optional_text(field, current, products):
    show_help(field)
    options = existing_values(products, field)
    if options:
        print("  Valores que ya usas (elige número o escribe uno nuevo):")
        for n, o in enumerate(options, 1):
            print(f"    {n}) {o}")
    extra = "Enter = dejar igual, - = quitar" if current else "Enter = no poner"
    r = ask(f"  {field}{' [' + current + ']' if current else ''} ({extra}): ").strip()
    if not r:
        return KEEP
    if r == "-":
        return REMOVE if current else KEEP
    if r.isdigit() and options and 1 <= int(r) <= len(options):
        return options[int(r) - 1]
    return r


def input_tonos(current):
    show_help("tonos")
    cur_txt = ", ".join(current) if current else ""
    extra = "Enter = dejar igual, - = quitar" if current else "Enter = no poner"
    r = ask(f"  tonos{' [' + cur_txt + ']' if cur_txt else ''} ({extra}): ").strip()
    if not r:
        return KEEP
    if r == "-":
        return REMOVE if current else KEEP
    tonos = [t.strip() for t in r.split(",") if t.strip()]
    return tonos or KEEP


# ---------------------------------------------------------------------------
# Mostrar cambios y confirmar
# ---------------------------------------------------------------------------
def show_product(data, title="Producto"):
    print()
    print(color(f"=== {title} ===", C_BOLD))
    for n, k in enumerate(EDITABLE, 1):
        print(f"  {n:>2}) {k:<13} {fmt(data.get(k))}")


def show_diff(old, new):
    print()
    print(color("=== Cambios que se van a guardar ===", C_BOLD))
    keys = [k for k in FIELD_ORDER if k in old or k in new]
    keys += [k for k in list(old) + list(new) if k not in keys]
    changed = 0
    for k in keys:
        a, b = old.get(k), new.get(k)
        if a == b:
            continue
        changed += 1
        print(color(f"  {k}:", C_BOLD))
        print(color(f"    - antes:   {fmt(a, 200)}", C_RED))
        print(color(f"    + después: {fmt(b, 200)}", C_GREEN))
    if not changed:
        print(color("  (no hay cambios)", C_DIM))
    return changed


def show_new_block(data):
    print()
    print(color("=== Producto nuevo que se va a agregar ===", C_BOLD))
    for line in render_block(data).split("\n"):
        print(color(f"  + {line}", C_GREEN))


# ---------------------------------------------------------------------------
# Flujos principales
# ---------------------------------------------------------------------------
def apply(data, key, value):
    if value is KEEP:
        return
    if value is REMOVE:
        data.pop(key, None)
    else:
        data[key] = value


def add_product(pid, products):
    print()
    print(color(f"Agregando producto nuevo con id {pid}", C_BOLD))
    print(color("Te voy a pedir cada campo con su explicación y un ejemplo.", C_DIM))
    data = {"id": pid, "category": "maquillaje"}

    data["subcategory"] = input_subcategory(None)
    data["name"] = f"{input_name('', pid)} - {pid}"
    data["price"] = input_price(None)
    img = input_image(None, suggested_image(pid, data["subcategory"]))
    data["image"] = img if img is not KEEP else suggested_image(pid, data["subcategory"])
    data["description"] = input_description(None)
    for field in ("colaboracion", "category_new", "category_age"):
        apply(data, field, input_optional_text(field, None, products))
    apply(data, "tonos", input_tonos(None))

    data = ordered_new(data)
    show_new_block(data)
    at_start = yes_no("\n¿Lo pongo al INICIO del catálogo? (si no, va al final)", default=False)
    if not yes_no("¿Confirmas agregar este producto?", default=False):
        print(color("Cancelado. No se guardó nada.", C_YELLOW))
        return
    total = save_new(data, at_start)
    print(color(f"✔ Producto {pid} agregado. El catálogo ahora tiene {total} productos.", C_GREEN))


def edit_product(index, products):
    original = products[index]
    old = dict(original["data"])
    new = dict(old)

    while True:
        show_product(new, f"Editando {new.get('id')}")
        print(color("\n  Número = editar ese campo · G = ver cambios y guardar · "
                    "C = cancelar", C_DIM))
        r = ask("  Opción: ").strip().lower()
        if r == "c":
            if new != old and not yes_no("Hay cambios sin guardar. ¿Descartarlos?", default=False):
                continue
            print(color("Cancelado. No se guardó nada.", C_YELLOW))
            return
        if r == "g":
            if not show_diff(old, new):
                return
            if yes_no("\n¿Confirmas guardar estos cambios?", default=False):
                total = save_edit(original, new)
                print(color(f"✔ Producto {new['id']} actualizado ({total} productos en total).", C_GREEN))
                return
            print(color("No se guardó. Sigues editando.", C_YELLOW))
            continue
        if not (r.isdigit() and 1 <= int(r) <= len(EDITABLE)):
            print(color("  Opción no válida.", C_YELLOW))
            continue

        field = EDITABLE[int(r) - 1]
        pid = new["id"]

        if field == "id":
            val = input_id(pid, products, own_index=index)
            if val is not KEEP:
                nb = base_name(new.get("name", ""), pid)
                new["id"] = val
                new["name"] = f"{nb} - {val}"
                print(color(f"  El name se actualizó a: {new['name']}", C_DIM))
                sug = suggested_image(val, new["subcategory"])
                if new.get("image") != sug and yes_no(f"  ¿Cambiar también image a {sug}?", default=True):
                    new["image"] = sug
                    check_image(sug)
        elif field == "subcategory":
            val = input_subcategory(new.get("subcategory"))
            if val is not KEEP:
                new["subcategory"] = val
                sug = suggested_image(pid, val)
                if new.get("image") != sug and yes_no(f"  ¿Cambiar también image a {sug}?", default=True):
                    new["image"] = sug
                    check_image(sug)
        elif field == "name":
            val = input_name(base_name(new.get("name", ""), pid), pid)
            if val is not KEEP:
                new["name"] = f"{val} - {pid}"
        elif field == "price":
            apply(new, "price", input_price(new.get("price")))
        elif field == "image":
            apply(new, "image", input_image(new.get("image"), suggested_image(pid, new["subcategory"])))
        elif field == "description":
            apply(new, "description", input_description(new.get("description")))
        elif field == "tonos":
            apply(new, "tonos", input_tonos(new.get("tonos")))
        else:
            apply(new, field, input_optional_text(field, new.get(field), products))


def main():
    print(color("\n  ALERICK GLAM — Editor de productos de Maquillaje", C_MAG + C_BOLD))
    print(color(f"  Archivo: {os.path.relpath(PRODUCTS_FILE, SITE_ROOT)}", C_DIM))

    while True:
        try:
            _, products, _ = load_catalog()
        except (OSError, ParseError) as e:
            print(color(f"\nNo pude leer el catálogo: {e}", C_RED))
            sys.exit(1)

        print(color(f"\n  {len(products)} productos cargados.", C_DIM))
        pid = ask("\nEscribe el ID del producto (Enter vacío para salir): ").strip()
        if not pid:
            print("¡Listo! Recuerda subir los cambios a GitHub.")
            return

        found = [i for i, p in enumerate(products)
                 if str(p["data"].get("id", "")).lower() == pid.lower()]
        if found:
            edit_product(found[0], products)
        else:
            print(color(f"No existe ningún producto con id {pid}.", C_YELLOW))
            if " " in pid:
                print(color("  (Ojo: el id no puede tener espacios.)", C_YELLOW))
                continue
            if yes_no("¿Quieres agregarlo como producto nuevo?", default=True):
                add_product(pid, products)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print(color("\nSalida con Ctrl+C. Lo que no confirmaste no se guardó.", C_YELLOW))
