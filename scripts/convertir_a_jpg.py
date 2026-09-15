#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
convertir_a_jpg.py
===================

Recorre una carpeta y todas sus subcarpetas, encuentra las imagenes que
NO estan en formato .jpg y las convierte, dejando todo en .jpg al final.

COMO USARLO
-----------
1. Instala la libreria que hace el trabajo pesado (Pillow), una sola vez:
       pip install Pillow
2. Corre el script:
       python convertir_a_jpg.py
3. Te va a preguntar la ruta de la carpeta principal. Puedes escribirla
   a mano o arrastrar la carpeta desde el explorador de Windows a la
   ventana de la terminal (eso escribe la ruta solo).

QUE HACE EXACTAMENTE
---------------------
- Revisa cada archivo de imagen (.png, .webp, .bmp, .gif, .tiff, .jfif,
  .jpeg, .avif, etc.) en la carpeta y en todas sus subcarpetas.
- Si el archivo YA es un .jpg valido, no lo toca.
- Si el archivo es una imagen valida pero en otro formato (o es un
  .jpeg/.JPG con la extension mal escrita), lo convierte/renombra a
  .jpg con el mismo nombre.
- Los PNG/WEBP con fondo transparente se convierten sobre un fondo
  BLANCO (el formato .jpg no soporta transparencia).
- Si un archivo ya existe con el nombre final (mismo nombre + .jpg),
  no lo sobreescribe: le agrega "_1", "_2", etc. y te avisa.
- Al final te pregunta que hacer con los archivos originales que sí se
  convirtieron (el .png, .webp, etc. de origen):
    1) Dejarlos donde estan (no se borra nada)
    2) Moverlos a una subcarpeta "_originales_convertidos" (misma
       estructura de carpetas, por si los necesitas despues)
    3) Borrarlos definitivamente
  Si no escribes nada, se usa la opcion 1 (la mas segura).
- Muestra un resumen al final: cuantas imagenes ya estaban en .jpg,
  cuantas se convirtieron, cuantas se renombraron sin re-codificar, y
  si algo fallo (por ejemplo un archivo dañado).
"""

import os
import shutil
import sys

try:
    from PIL import Image, ImageOps
except ImportError:
    print(
        "\nFalta instalar la libreria Pillow, que es la que convierte las imagenes.\n"
        "Corre este comando y vuelve a intentar:\n\n"
        "    pip install Pillow\n"
    )
    sys.exit(1)

# Extensiones que se consideran "imagen" y por lo tanto se revisan.
# (Todo en minuscula; la comparacion ignora mayusculas/minusculas.)
EXTENSIONES_IMAGEN = {
    ".png", ".webp", ".bmp", ".gif", ".tiff", ".tif",
    ".jfif", ".jpeg", ".jpg", ".avif", ".heic", ".heif",
}

CALIDAD_JPG = 90  # 0-100. Mas alto = mejor calidad y mas peso. 90 es un buen balance.


def pedir_carpeta():
    """Pide la ruta por teclado hasta que sea una carpeta valida."""
    while True:
        ruta = input("Ruta de la carpeta principal: ").strip().strip('"').strip("'")
        if not ruta:
            print("Escribe una ruta, no puede quedar vacia.\n")
            continue
        if not os.path.isdir(ruta):
            print(f'No encuentro una carpeta en: "{ruta}". Revisa la ruta e intenta de nuevo.\n')
            continue
        return os.path.abspath(ruta)


def pedir_modo_originales():
    print(
        "\nCuando una imagen SI se convierte (no cuando solo se renombra),\n"
        "que quieres hacer con el archivo original?\n"
        "  1) Dejarlo donde esta, sin tocarlo   (por defecto)\n"
        "  2) Moverlo a una subcarpeta '_originales_convertidos'\n"
        "  3) Borrarlo definitivamente\n"
    )
    opcion = input("Elige 1, 2 o 3 [1]: ").strip()
    return opcion if opcion in {"1", "2", "3"} else "1"


def nombre_disponible(ruta_deseada):
    """Si ruta_deseada ya existe, agrega _1, _2... hasta encontrar una libre."""
    if not os.path.exists(ruta_deseada):
        return ruta_deseada
    base, ext = os.path.splitext(ruta_deseada)
    contador = 1
    while True:
        candidata = f"{base}_{contador}{ext}"
        if not os.path.exists(candidata):
            return candidata
        contador += 1


def convertir_a_jpg(ruta_origen, ruta_destino):
    """Abre cualquier imagen soportada y la guarda como .jpg de calidad CALIDAD_JPG."""
    with Image.open(ruta_origen) as img:
        # Respeta la orientacion guardada en los metadatos EXIF (fotos de
        # celular que quedan "acostadas" si no se hace esto).
        img = ImageOps.exif_transpose(img)

        if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
            # Tiene transparencia: la aplanamos sobre fondo blanco, porque
            # .jpg no soporta canal alfa.
            fondo = Image.new("RGB", img.size, (255, 255, 255))
            img = img.convert("RGBA")
            fondo.paste(img, mask=img.split()[-1])
            img = fondo
        else:
            img = img.convert("RGB")

        img.save(ruta_destino, "JPEG", quality=CALIDAD_JPG, optimize=True)


def procesar_archivo_original(ruta_origen, carpeta_raiz, modo):
    """Aplica la decision del usuario (dejar / mover / borrar) sobre el original."""
    if modo == "1":
        return
    if modo == "3":
        os.remove(ruta_origen)
        return
    # modo == "2": mover a _originales_convertidos, conservando la
    # misma ubicacion relativa dentro de esa carpeta.
    relativa = os.path.relpath(ruta_origen, carpeta_raiz)
    destino = os.path.join(carpeta_raiz, "_originales_convertidos", relativa)
    os.makedirs(os.path.dirname(destino), exist_ok=True)
    shutil.move(ruta_origen, destino)


def main():
    print("=== Convertir imagenes a .jpg ===\n")
    carpeta_raiz = pedir_carpeta()

    # Primero recolectamos todos los archivos de imagen antes de tocar
    # nada, para no toparnos con la carpeta "_originales_convertidos"
    # que este mismo script podria crear a mitad de camino.
    archivos = []
    for carpeta_actual, _subcarpetas, nombres_archivo in os.walk(carpeta_raiz):
        if os.path.basename(carpeta_actual) == "_originales_convertidos":
            continue
        for nombre in nombres_archivo:
            ext = os.path.splitext(nombre)[1].lower()
            if ext in EXTENSIONES_IMAGEN:
                archivos.append(os.path.join(carpeta_actual, nombre))

    if not archivos:
        print("No encontre imagenes en esa carpeta ni en sus subcarpetas.")
        return

    print(f"Encontre {len(archivos)} imagen(es). Revisando formato de cada una...\n")

    ya_estaban_bien = []
    renombrados = []       # (origen, destino) — ya eran JPEG, solo cambio la extension
    convertidos = []       # (origen, destino) — se re-codificaron a JPEG
    fallidos = []          # (ruta, motivo)

    modo_originales = None  # se pregunta solo si hace falta (lazy)

    for ruta in archivos:
        carpeta, nombre = os.path.split(ruta)
        base, ext = os.path.splitext(nombre)

        try:
            with Image.open(ruta) as img:
                formato_real = img.format  # ej: "JPEG", "PNG", "WEBP"...
        except Exception as error:
            fallidos.append((ruta, f"no se pudo abrir como imagen ({error})"))
            continue

        ya_es_jpg_valido = formato_real == "JPEG" and ext == ".jpg"
        if ya_es_jpg_valido:
            ya_estaban_bien.append(ruta)
            continue

        destino = nombre_disponible(os.path.join(carpeta, base + ".jpg"))

        try:
            if formato_real == "JPEG":
                # Ya es JPEG de verdad, solo le falta el nombre correcto.
                shutil.copy2(ruta, destino)
                os.remove(ruta)
                renombrados.append((ruta, destino))
            else:
                convertir_a_jpg(ruta, destino)
                convertidos.append((ruta, destino))
                if modo_originales is None:
                    modo_originales = pedir_modo_originales()
                procesar_archivo_original(ruta, carpeta_raiz, modo_originales)
        except Exception as error:
            fallidos.append((ruta, f"fallo al convertir ({error})"))

    print("\n=== Resumen ===")
    print(f"Ya estaban en .jpg y no se tocaron: {len(ya_estaban_bien)}")
    print(f"Solo se renombraron (ya eran JPEG, mal escrita la extension): {len(renombrados)}")
    for origen, destino in renombrados:
        print(f"   {origen}  ->  {destino}")
    print(f"Convertidas a .jpg: {len(convertidos)}")
    for origen, destino in convertidos:
        print(f"   {origen}  ->  {destino}")
    if fallidos:
        print(f"No se pudieron procesar: {len(fallidos)}")
        for ruta, motivo in fallidos:
            print(f"   {ruta}  ->  {motivo}")
    print("\nListo.")


if __name__ == "__main__":
    main()
