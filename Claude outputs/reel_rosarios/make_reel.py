"""Genera el reel vertical (1080x1920) de la colección de Rosarios de Alerick Glam."""
import math
import os
import subprocess

import imageio_ffmpeg
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "fotos")
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
LOGO = os.path.join(ROOT, "images", "favicon-512.png")
OUT = os.path.join(HERE, "reel_rosarios.mp4")

W, H, FPS = 1080, 1920, 30

# Colores de marca (css/styles.css)
BG = (251, 240, 236)
BG_ALT = (246, 226, 218)
INK = (43, 22, 32)
INK_SOFT = (107, 76, 86)
ROSE = (194, 65, 107)
ROSE_DEEP = (142, 47, 82)
GOLD = (184, 147, 90)
AQUA = (42, 157, 143)
WHITE = (255, 251, 249)

FONTS = "C:/Windows/Fonts/"
def font(name, size):
    return ImageFont.truetype(FONTS + name, size)

SERIF_I = lambda s: font("georgiai.ttf", s)
SERIF_BI = lambda s: font("georgiaz.ttf", s)
SANS = lambda s: font("segoeui.ttf", s)
SANS_B = lambda s: font("segoeuib.ttf", s)
SANS_L = lambda s: font("segoeuil.ttf", s)

ORDER = [3, 1, 8, 2, 5, 7, 6, 4, 9]

INTRO = 3.2
SLIDE = 1.9
FADE = 0.35
OUTRO = 4.6


def ease(t):
    t = max(0.0, min(1.0, t))
    return 1 - (1 - t) ** 3


def text_center(draw, y, txt, fnt, fill, spacing=0):
    if spacing:
        # letter-spacing manual
        widths = [draw.textlength(c, font=fnt) for c in txt]
        total = sum(widths) + spacing * (len(txt) - 1)
        x = (W - total) / 2
        for c, w in zip(txt, widths):
            draw.text((x, y), c, font=fnt, fill=fill)
            x += w + spacing
    else:
        w = draw.textlength(txt, font=fnt)
        draw.text(((W - w) / 2, y), txt, font=fnt, fill=fill)


def rounded_mask(size, r):
    m = Image.new("L", size, 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), r, fill=255)
    return m


def pill(draw, cx, cy, txt, fnt, fg, bg, padx=44, pady=22):
    w = draw.textlength(txt, font=fnt)
    bbox = fnt.getbbox(txt)
    h = bbox[3] - bbox[1]
    x0, y0 = cx - w / 2 - padx, cy - h / 2 - pady
    x1, y1 = cx + w / 2 + padx, cy + h / 2 + pady
    draw.rounded_rectangle((x0, y0, x1, y1), (y1 - y0) / 2, fill=bg)
    draw.text((cx - w / 2, cy - h / 2 - bbox[1]), txt, font=fnt, fill=fg)


def with_alpha(layer, a):
    if a >= 1:
        return layer
    l = layer.copy()
    l.putalpha(l.getchannel("A").point(lambda v: int(v * a)))
    return l


# ---------- recursos precalculados ----------
logo = Image.open(LOGO).convert("RGBA")

photos, blurs = [], []
for n in ORDER:
    im = Image.open(os.path.join(SRC, f"{n}.webp")).convert("RGB")
    sq = im.resize((1200, 1200), Image.LANCZOS)
    photos.append(sq)
    bg = im.resize((H, H), Image.LANCZOS).crop(((H - W) // 2, 0, (H - W) // 2 + W, H))
    bg = bg.filter(ImageFilter.GaussianBlur(40))
    bg = Image.blend(bg, Image.new("RGB", (W, H), BG), 0.45)
    blurs.append(bg)

PHOTO_SIZE = 940
PHOTO_Y = 470
photo_mask = rounded_mask((PHOTO_SIZE, PHOTO_SIZE), 44)


def sparkle(draw, cx, cy, r, fill):
    pts = []
    for i in range(8):
        ang = math.pi / 4 * i - math.pi / 2
        rr = r if i % 2 == 0 else r * 0.28
        pts.append((cx + rr * math.cos(ang), cy + rr * math.sin(ang)))
    draw.polygon(pts, fill=fill)


# ---------- escenas ----------
def intro_frame(t):
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    # arco decorativo
    d.ellipse((-260, 1180, W + 260, 2600), fill=BG_ALT)

    # logo
    a = ease(t / 0.8)
    s = int(380 * (0.85 + 0.15 * a))
    lg = with_alpha(logo.resize((s, s), Image.LANCZOS), a)
    img.paste(lg, ((W - s) // 2, 330 + (380 - s) // 2), lg)

    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    a1 = ease((t - 0.5) / 0.6)
    text_center(ld, 800 + 30 * (1 - a1), "NUEVA COLECCIÓN", SANS_B(40), AQUA + (int(255 * a1),), spacing=10)
    a2 = ease((t - 0.8) / 0.7)
    text_center(ld, 860 + 40 * (1 - a2), "Rosarios", SERIF_I(210), ROSE_DEEP + (int(255 * a2),))
    a3 = ease((t - 1.3) / 0.6)
    # línea dorada
    lw = int(320 * a3)
    ld.line(((W - lw) / 2, 1140, (W + lw) / 2, 1140), fill=GOLD + (255,), width=3)
    text_center(ld, 1175, "ya están en nuestra tienda", SERIF_I(54), INK_SOFT + (int(255 * a3),))
    a4 = ease((t - 1.7) / 0.6)
    for (x, y, r, c) in [(190, 880, 28, GOLD), (900, 820, 22, AQUA), (930, 1090, 30, ROSE), (150, 1150, 18, AQUA)]:
        sparkle(ld, x, y, r * a4, c + (int(230 * a4),))
    img.paste(layer, (0, 0), layer)
    return img


def slide_frame(i, t, dur):
    img = blurs[i].copy()
    # Ken Burns suave
    z = 1.0 + 0.07 * (t / dur)
    crop = 1200 / z
    off = (1200 - crop) / 2
    ph = photos[i].crop((off, off, off + crop, off + crop)).resize((PHOTO_SIZE, PHOTO_SIZE), Image.BILINEAR)
    x = (W - PHOTO_SIZE) // 2
    # sombra
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle((x + 6, PHOTO_Y + 22, x + PHOTO_SIZE + 6, PHOTO_Y + PHOTO_SIZE + 22), 44, fill=(60, 30, 40, 90))
    sh = sh.filter(ImageFilter.GaussianBlur(24))
    img.paste(sh, (0, 0), sh)
    # marco blanco
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((x - 14, PHOTO_Y - 14, x + PHOTO_SIZE + 14, PHOTO_Y + PHOTO_SIZE + 14), 56, fill=WHITE)
    img.paste(ph, (x, PHOTO_Y), photo_mask)
    return img


def overlay_slides(img):
    """Textos fijos sobre las fotos (no se desvanecen entre slides)."""
    d = ImageDraw.Draw(img)
    text_center(d, 290, "NUEVA COLECCIÓN", SANS_B(36), AQUA, spacing=9)
    text_center(d, 335, "Rosarios", SERIF_I(104), ROSE_DEEP)
    pill(d, W / 2, PHOTO_Y + PHOTO_SIZE + 110, "Disponibles en alerickglam.com", SANS_B(42), WHITE, ROSE)
    return img


def outro_frame(t):
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    d.ellipse((-260, -700, W + 260, 640), fill=BG_ALT)

    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)

    # collage de 3 fotos
    a0 = ease(t / 0.6)
    thumbs = [(0, -9, 250), (2, 0, 360), (4, 9, 250)]
    cs = 300
    for k, (pi, rot, cx) in enumerate([(0, -8, W / 2 - 290), (4, 0, W / 2), (2, 8, W / 2 + 290)]):
        ak = ease((t - 0.1 * k) / 0.6)
        th = photos[pi].resize((cs, cs), Image.LANCZOS)
        card = Image.new("RGBA", (cs + 24, cs + 24), WHITE + (255,))
        cm = rounded_mask(card.size, 28)
        card.putalpha(cm)
        card.paste(th, (12, 12), rounded_mask((cs, cs), 20))
        card = card.rotate(rot, resample=Image.BICUBIC, expand=True)
        card = with_alpha(card, ak)
        y = 330 + 60 * (1 - ak) + (0 if pi == 4 else 40)
        layer.paste(card, (int(cx - card.width / 2), int(y)), card)

    a1 = ease((t - 0.5) / 0.6)
    text_center(ld, 800 + 30 * (1 - a1), "Ya disponibles en", SERIF_I(70), INK + (int(255 * a1),))
    a2 = ease((t - 0.8) / 0.6)
    if a2 > 0:
        sub = Image.new("RGBA", (W, 200), (0, 0, 0, 0))
        pill(ImageDraw.Draw(sub), W / 2, 100, "alerickglam.com", SANS_B(70), WHITE, ROSE, padx=60, pady=30)
        sub = with_alpha(sub, a2)
        layer.paste(sub, (0, int(890 + 30 * (1 - a2))), sub)

    a3 = ease((t - 1.4) / 0.6)
    text_center(ld, 1150 + 30 * (1 - a3), "SÍGUENOS EN INSTAGRAM", SANS_B(38), AQUA + (int(255 * a3),), spacing=8)
    a4 = ease((t - 1.6) / 0.6)
    text_center(ld, 1205 + 30 * (1 - a4), "@alerickglam", SERIF_BI(104), ROSE_DEEP + (int(255 * a4),))

    a5 = ease((t - 2.1) / 0.6)
    s = 210
    lg = with_alpha(logo.resize((s, s), Image.LANCZOS), a5)
    layer.paste(lg, ((W - s) // 2, 1380), lg)

    img.paste(layer, (0, 0), layer)
    return img


# ---------- timeline ----------
def frame_at(t):
    if t < INTRO:
        f = intro_frame(t)
        if t > INTRO - FADE:
            nxt = overlay_slides(slide_frame(0, 0, SLIDE))
            f = Image.blend(f, nxt, (t - (INTRO - FADE)) / FADE)
        return f
    t2 = t - INTRO
    n = len(photos)
    if t2 < n * SLIDE:
        i = int(t2 // SLIDE)
        lt = t2 - i * SLIDE
        f = slide_frame(i, lt, SLIDE)
        if lt > SLIDE - FADE and i + 1 < n:
            f = Image.blend(f, slide_frame(i + 1, 0, SLIDE), (lt - (SLIDE - FADE)) / FADE)
        f = overlay_slides(f)
        if i == n - 1 and lt > SLIDE - FADE:
            f = Image.blend(f, outro_frame(0), (lt - (SLIDE - FADE)) / FADE)
        return f
    return outro_frame(t2 - n * SLIDE)


def main():
    total = INTRO + len(photos) * SLIDE + OUTRO
    nframes = int(total * FPS)
    ff = imageio_ffmpeg.get_ffmpeg_exe()
    cmd = [ff, "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
           "-f", "lavfi", "-i", "anullsrc=channel_layout=stereo:sample_rate=44100",
           "-shortest", "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-pix_fmt", "yuv420p",
           "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart", OUT]
    p = subprocess.Popen(cmd, stdin=subprocess.PIPE, stderr=subprocess.DEVNULL)
    for k in range(nframes):
        f = frame_at(k / FPS)
        p.stdin.write(np.asarray(f.convert("RGB"), dtype=np.uint8).tobytes())
        if k in (int(1.6 * FPS), int((INTRO + 1) * FPS), nframes - 5):
            f.save(os.path.join(HERE, f"preview_{k:04d}.png"))
    p.stdin.close()
    p.wait()
    print("OK", OUT, f"{total:.1f}s", nframes, "frames")


if __name__ == "__main__":
    main()
