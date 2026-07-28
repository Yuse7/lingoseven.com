#!/usr/bin/env python3
"""Generate Open Graph cards (1200x630 PNG) for lingoseven.com.

Outputs into public/images/og/:
  default.png             site-wide default card
  learn/{slug}.png        one per enabled language (slug from languageSlugs.ts)
  blog/{slug}.png         one per English blog post (title from frontmatter)

Deterministic and re-runnable: python3 scripts/og/generate_og.py
Fonts: Inter TTFs in scripts/og/fonts/ (see README.md).
"""
import os
import re
import sys

from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(os.path.dirname(HERE))
OUT = os.path.join(SITE, 'public', 'images', 'og')
FONTS = os.path.join(HERE, 'fonts')

W, H = 1200, 630
BG_TOP = (26, 35, 50)      # #1a2332
BG_BOTTOM = (17, 23, 34)   # #111722
GREEN = (74, 222, 128)     # #4ade80
TEXT = (248, 250, 252)     # #f8fafc
MUTED = (148, 163, 184)    # #94a3b8

FONT_BOLD = os.path.join(FONTS, 'Inter-Bold.ttf')
FONT_SEMI = os.path.join(FONTS, 'Inter-SemiBold.ttf')
FONT_REG = os.path.join(FONTS, 'Inter-Regular.ttf')

MARGIN = 64
MASCOT_H = 460


def font(path, size):
    return ImageFont.truetype(path, size)


def load_mascot():
    m = Image.open(os.path.join(SITE, 'public', 'images', 'pic.png')).convert('RGBA')
    w = round(m.width * MASCOT_H / m.height)
    return m.resize((w, MASCOT_H), Image.LANCZOS)


def base_card(mascot):
    img = Image.new('RGB', (W, H))
    px = img.load()
    for y in range(H):
        t = y / (H - 1)
        r = round(BG_TOP[0] + (BG_BOTTOM[0] - BG_TOP[0]) * t)
        g = round(BG_TOP[1] + (BG_BOTTOM[1] - BG_TOP[1]) * t)
        b = round(BG_TOP[2] + (BG_BOTTOM[2] - BG_TOP[2]) * t)
        for x in range(W):
            px[x, y] = (r, g, b)

    mx = W - mascot.width - 56
    my = (H - mascot.height) // 2

    # Faint green glow behind the mascot.
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    cx, cy = mx + mascot.width // 2, my + mascot.height // 2
    gd.ellipse([cx - 300, cy - 260, cx + 300, cy + 260], fill=GREEN + (28,))
    glow = glow.filter(ImageFilter.GaussianBlur(110))
    img = Image.alpha_composite(img.convert('RGBA'), glow)

    img.paste(mascot, (mx, my), mascot)

    d = ImageDraw.Draw(img)
    d.text((MARGIN, 44), 'Lingo7', font=font(FONT_BOLD, 42), fill=GREEN)
    d.text((MARGIN, H - 70), 'lingoseven.com', font=font(FONT_REG, 24), fill=MUTED)
    return img, mx


def wrap_to_width(draw, text, fnt, max_width):
    words = text.split()
    lines, cur = [], ''
    for w_ in words:
        trial = f'{cur} {w_}'.strip()
        if draw.textlength(trial, font=fnt) <= max_width or not cur:
            cur = trial
        else:
            lines.append(cur)
            cur = w_
    if cur:
        lines.append(cur)
    return lines


def fit_text(draw, text, font_path, max_width, max_lines, size_max, size_min):
    for size in range(size_max, size_min - 1, -2):
        fnt = font(font_path, size)
        lines = wrap_to_width(draw, text, fnt, max_width)
        if len(lines) <= max_lines and all(draw.textlength(l, font=fnt) <= max_width for l in lines):
            return fnt, lines, size
    fnt = font(font_path, size_min)
    return fnt, wrap_to_width(draw, text, fnt, max_width)[:max_lines], size_min


def draw_block(img, text_x, max_width, title, title_max, title_min, max_lines,
               subtitle=None, tag=None):
    d = ImageDraw.Draw(img)
    tfnt, tlines, tsize = fit_text(d, title, FONT_BOLD, max_width, max_lines, title_max, title_min)
    line_h = round(tsize * 1.22)

    parts_h = len(tlines) * line_h
    tag_h = 44 if tag else 0
    sub_lines, sfnt = [], None
    if subtitle:
        sfnt = font(FONT_REG, 29)
        sub_lines = wrap_to_width(d, subtitle, sfnt, max_width)
        parts_h += 18 + len(sub_lines) * 40
    total = parts_h + tag_h
    y = (H - total) // 2 + 8

    if tag:
        d.text((text_x, y), tag, font=font(FONT_SEMI, 26), fill=GREEN)
        y += tag_h
    for line in tlines:
        d.text((text_x, y), line, font=tfnt, fill=TEXT)
        y += line_h
    if subtitle:
        y += 18
        for line in sub_lines:
            d.text((text_x, y), line, font=sfnt, fill=MUTED)
            y += 40
    return img


def save(img, path):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    q = img.convert('RGB').quantize(colors=256, method=Image.MEDIANCUT,
                                    dither=Image.Dither.FLOYDSTEINBERG)
    q.save(path, optimize=True)


def enabled_slugs():
    with open(os.path.join(SITE, 'src', 'data', 'languageSlugs.ts'), encoding='utf-8') as f:
        ts = f.read()
    pairs = re.findall(r"'([a-z0-9-]+)':\s*'([a-z]{2})'", ts.split('slugToCode')[1].split('};')[0])
    code_to_slug = {code: slug for slug, code in pairs}
    codes = sorted(f_[:-5] for f_ in os.listdir(os.path.join(SITE, 'src', 'i18n')) if f_.endswith('.json'))
    missing = [c for c in codes if c not in code_to_slug]
    if missing:
        sys.exit(f'ERROR: no slug for enabled codes: {missing}')
    return [(c, code_to_slug[c]) for c in codes]


def blog_posts():
    d = os.path.join(SITE, 'src', 'content', 'blog', 'en')
    posts = []
    for name in sorted(os.listdir(d)):
        if not name.endswith('.md'):
            continue
        with open(os.path.join(d, name), encoding='utf-8') as f:
            head = f.read(4000)
        m = re.search(r'^title:\s*"((?:[^"\\]|\\.)*)"', head, re.M) or \
            re.search(r"^title:\s*'((?:[^'\\]|\\.)*)'", head, re.M) or \
            re.search(r'^title:\s*(.+)$', head, re.M)
        if not m:
            sys.exit(f'ERROR: no title in {name}')
        title = m.group(1).replace('\\"', '"').strip()
        posts.append((name[:-3], title))
    return posts


def main():
    for p in (FONT_BOLD, FONT_SEMI, FONT_REG):
        if not os.path.exists(p):
            sys.exit(f'ERROR: missing font {p} (see scripts/og/README.md)')

    mascot = load_mascot()
    langs = enabled_slugs()
    posts = blog_posts()
    print(f'{len(langs)} languages, {len(posts)} posts')

    img, mascot_x = base_card(mascot)
    max_w = mascot_x - MARGIN - 48
    draw_block(img, MARGIN, max_w, 'Read books in 49 languages', 66, 48, 2,
               subtitle='Parallel translation, audio and a one tap dictionary')
    save(img, os.path.join(OUT, 'default.png'))

    for _code, slug in langs:
        name = ' '.join(part.capitalize() for part in slug.split('-'))
        img, mascot_x = base_card(mascot)
        max_w = mascot_x - MARGIN - 48
        draw_block(img, MARGIN, max_w, f'Learn {name} by reading', 62, 44, 2,
                   subtitle='Books with parallel translation and audio')
        save(img, os.path.join(OUT, 'learn', f'{slug}.png'))

    for slug, title in posts:
        img, mascot_x = base_card(mascot)
        max_w = mascot_x - MARGIN - 48
        draw_block(img, MARGIN, max_w, title, 56, 38, 3, tag='Lingo7 Blog')
        save(img, os.path.join(OUT, 'blog', f'{slug}.png'))

    n = sum(len(fs) for _, _, fs in os.walk(OUT))
    print(f'wrote {n} files into {OUT}')


if __name__ == '__main__':
    main()
