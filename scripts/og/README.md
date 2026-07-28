# OG card generator

Generates the 1200x630 Open Graph PNGs in `public/images/og/`
(default.png, learn/{slug}.png per enabled language, blog/{slug}.png per EN post).

Run: `python3 scripts/og/generate_og.py` (needs Pillow and the Inter TTFs in
`scripts/og/fonts/`: Inter-Regular.ttf, Inter-SemiBold.ttf, Inter-Bold.ttf).
Re-run after adding a language or a blog post; output is deterministic.
