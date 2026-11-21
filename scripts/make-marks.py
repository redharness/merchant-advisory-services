from PIL import Image

def derive(src, hexcolor, out):
    im = Image.open(src).convert("RGBA")
    im = im.crop(im.getbbox())
    r, g, b = (int(hexcolor[i : i + 2], 16) for i in (1, 3, 5))
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            a = px[x, y][3]
            px[x, y] = (r, g, b, a)
    im.save(out, optimize=True)
    return w, h

base = "public/brand/merchadserv-logo-512.png"
print("navy", derive(base, "#002266", "public/brand/mas-mark-navy.png"))
print("white", derive(base, "#ffffff", "public/brand/mas-mark-white.png"))
print("ink", derive(base, "#0a1633", "public/brand/mas-mark-ink.png"))
