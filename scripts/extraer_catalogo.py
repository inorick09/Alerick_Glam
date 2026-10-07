#!/usr/bin/env python3
"""
Extractor de catálogo desde PDF
================================

Recorre un PDF de catálogo (como el de aretes/bisutería), y para cada
producto:

  1. Detecta las imágenes que son CUADRADAS (ignora banners, logos u
     otras imágenes que no lo sean).
  2. Recorta y guarda cada imagen cuadrada como PNG, usando como nombre
     el código del producto (ej: LR500.png). La imagen se recorta
     exactamente al tamaño de la foto, SIN el texto que aparece debajo.
  3. Busca el texto que está justo debajo de cada imagen (código,
     descripción y precio) y arma un archivo CSV con esos datos.

Requisitos:
    pip3 install pymupdf --break-system-packages
    (el flag --break-system-packages es necesario en Ubuntu moderno porque
    el sistema protege el Python global; si usas un entorno virtual (venv)
    no lo necesitas)

Uso:
    python3 extraer_catalogo.py
    El script te va a preguntar la ruta del PDF y la carpeta destino.
"""

import csv
import os
import re
import sys

try:
    import fitz  # PyMuPDF
except ImportError:
    print("Falta la librería PyMuPDF. Instálala con:")
    print("    pip3 install pymupdf --break-system-packages")
    sys.exit(1)

# Tolerancia para considerar una imagen "cuadrada": diferencia máxima
# permitida entre ancho y alto, como proporción (0.03 = 3%).
TOLERANCIA_CUADRADO = 0.03

# Cuántos puntos (pt) por debajo de la imagen se buscan las líneas de texto
# del código / descripción / precio.
ALTO_MAX_PIE = 80
# Margen horizontal (pt) que se permite a cada lado de la imagen para
# seguir considerando que un texto "pertenece" a esa imagen.
MARGEN_X_PIE = 40


def es_cuadrada(bbox):
    """bbox = (x0, y0, x1, y1) del rectángulo donde se dibuja la imagen en la página."""
    ancho = bbox[2] - bbox[0]
    alto = bbox[3] - bbox[1]
    if alto == 0:
        return False
    return abs(ancho / alto - 1) <= TOLERANCIA_CUADRADO


def limpiar_precio(texto):
    """'$ 19.900' -> '19900' (deja solo dígitos)."""
    return re.sub(r"[^\d]", "", texto)


def extraer_codigo(primera_linea):
    """'LR500 - Rodio -' -> 'LR500' (todo lo que va antes del primer ' - ')."""
    return primera_linea.split(" - ")[0].strip()


def nombre_archivo_valido(nombre):
    """Reemplaza caracteres que no son válidos en nombres de archivo."""
    return re.sub(r'[\\/*?:"<>|]', "_", nombre) or "sin_nombre"


def obtener_lineas_texto(pagina):
    """Devuelve [(bbox_de_la_linea, texto), ...] para toda la página."""
    lineas = []
    datos = pagina.get_text("dict")
    for bloque in datos["blocks"]:
        if bloque["type"] != 0:  # 0 = bloque de texto (se ignoran imágenes, etc.)
            continue
        for linea in bloque["lines"]:
            texto = "".join(span["text"] for span in linea["spans"]).strip()
            if texto:
                lineas.append((linea["bbox"], texto))
    return lineas


def encontrar_pie_de_imagen(bbox_imagen, lineas_pagina):
    """
    Busca las líneas de texto que quedan justo debajo del rectángulo de la
    imagen (mismo rango horizontal aprox., y a pocos puntos por debajo del
    borde inferior). Las devuelve en orden de arriba hacia abajo.
    """
    x0, y0, x1, y1 = bbox_imagen
    candidatas = [
        (lb, t)
        for (lb, t) in lineas_pagina
        if y1 - 2 <= lb[1] <= y1 + ALTO_MAX_PIE
        and x0 - MARGEN_X_PIE <= lb[0] <= x1 + MARGEN_X_PIE
    ]
    candidatas.sort(key=lambda item: item[0][1])
    return [t for (_, t) in candidatas]


def procesar_pdf(ruta_pdf, carpeta_destino):
    doc = fitz.open(ruta_pdf)
    os.makedirs(carpeta_destino, exist_ok=True)

    filas_csv = []
    nombres_usados = {}
    total_imagenes = 0
    total_sin_pie = 0

    for num_pagina in range(len(doc)):
        pagina = doc[num_pagina]
        # xrefs=False: mucho más rápido, y ya trae ancho/alto nativos en píxeles.
        imagenes = pagina.get_image_info(xrefs=False)
        lineas_pagina = obtener_lineas_texto(pagina)

        for info in imagenes:
            bbox = info["bbox"]
            if not es_cuadrada(bbox):
                continue

            total_imagenes += 1
            pie = encontrar_pie_de_imagen(bbox, lineas_pagina)

            if len(pie) < 3:
                total_sin_pie += 1
                codigo = f"sin_codigo_p{num_pagina + 1}_{total_imagenes}"
                descripcion = ""
                precio = ""
                print(
                    f"  Aviso: no se encontró el texto completo (código/descripción/"
                    f"precio) debajo de una imagen en la página {num_pagina + 1}; "
                    f"se guardó como '{codigo}.png'"
                )
            else:
                codigo = extraer_codigo(pie[0])
                descripcion = pie[1]
                precio = limpiar_precio(pie[2])

            nombre_base = nombre_archivo_valido(codigo)
            if nombre_base in nombres_usados:
                nombres_usados[nombre_base] += 1
                nombre_archivo = f"{nombre_base}_{nombres_usados[nombre_base]}.png"
            else:
                nombres_usados[nombre_base] = 0
                nombre_archivo = f"{nombre_base}.png"

            # Renderiza SOLO el rectángulo de la imagen (clip=bbox), a su
            # resolución nativa aprox., para que no salga el texto de abajo
            # y la calidad no se pierda.
            ancho_pt = bbox[2] - bbox[0]
            zoom = max(1.0, info.get("width", ancho_pt) / ancho_pt)
            matriz = fitz.Matrix(zoom, zoom)
            clip = fitz.Rect(bbox)
            pixmap = pagina.get_pixmap(matrix=matriz, clip=clip)

            ruta_imagen = os.path.join(carpeta_destino, nombre_archivo)
            pixmap.save(ruta_imagen)

            filas_csv.append(
                {"codigo": codigo, "descripcion": descripcion, "precio": precio}
            )

    ruta_csv = os.path.join(carpeta_destino, "catalogo.csv")
    with open(ruta_csv, "w", newline="", encoding="utf-8") as f:
        escritor = csv.DictWriter(f, fieldnames=["codigo", "descripcion", "precio"])
        escritor.writeheader()
        escritor.writerows(filas_csv)

    doc.close()
    return total_imagenes, total_sin_pie, ruta_csv


def pedir_ruta_pdf():
    while True:
        ruta = input("Ruta completa del PDF a procesar: ").strip().strip('"').strip("'")
        ruta = os.path.expanduser(ruta)
        if os.path.isfile(ruta) and ruta.lower().endswith(".pdf"):
            return ruta
        print(f"  No se encontró un archivo PDF en: {ruta}\n  Intenta de nuevo.\n")


def pedir_carpeta_destino():
    ruta = input("Carpeta donde guardar las imágenes y el CSV: ").strip().strip('"').strip("'")
    return os.path.expanduser(ruta)


def main():
    print("=== Extractor de catálogo (imágenes cuadradas + CSV) ===\n")
    ruta_pdf = pedir_ruta_pdf()
    carpeta_destino = pedir_carpeta_destino()

    print(f"\nProcesando '{ruta_pdf}'...")
    total, sin_pie, ruta_csv = procesar_pdf(ruta_pdf, carpeta_destino)

    print("\nListo.")
    print(f"  Imágenes cuadradas encontradas y extraídas: {total}")
    if sin_pie:
        print(f"  De esas, {sin_pie} no tenían el texto completo debajo (revisa esos nombres).")
    print(f"  CSV generado en: {ruta_csv}")
    print(f"  Imágenes guardadas en: {carpeta_destino}")


if __name__ == "__main__":
    main()
