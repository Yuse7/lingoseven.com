// Per-book store CTA for the 49 "best books to learn X" posts (frontmatter
// category: book-lists + targetLang). After each book section (### heading
// inside a CEFR ## section) whose heading matches a book in readingBooks.ts,
// insert a compact App Store / Google Play line. Matching against the curated
// data instead of parsing headings keeps notes like "A blunt note on graded
// readers" CTA-free; a missed match only means no CTA for that book. One CTA
// per book title per post: repeat mentions ("Saint-Exupéry Beyond Le Petit
// Prince") stay clean. Store hrefs are the standard ones, so main.ts click
// tracking (GA4 + Ads conversion + Metrika) applies with no extra wiring.
import { readingBooks } from '../data/readingBooks';

const APP_STORE_URL = 'https://apps.apple.com/app/id6471030440?pt=126721951&ct=lingoseven&mt=8';
const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.doublereading&utm_source=lingoseven&utm_campaign=website';
const CEFR_SECTION = /\b(A1|A2|B1|B2|C1|C2)\b/;

const norm = (s) =>
  s
    .toLowerCase()
    .replace(/[*_"«»„“”'’ʼ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const text = (node) => {
  if (node.type === 'text') return node.value;
  return (node.children ?? []).map(text).join('');
};

const link = (href, label) => ({
  type: 'element',
  tagName: 'a',
  properties: { href },
  children: [{ type: 'text', value: label }],
});

const ctaNode = (title) => ({
  type: 'element',
  tagName: 'aside',
  properties: { className: ['book-cta'] },
  children: [
    {
      type: 'element',
      tagName: 'p',
      properties: { className: ['book-cta-text'] },
      children: [
        {
          type: 'element',
          tagName: 'strong',
          properties: {},
          children: [{ type: 'text', value: `Read “${title}” in Lingo7` }],
        },
        { type: 'text', value: ' with parallel translation' },
      ],
    },
    {
      type: 'element',
      tagName: 'p',
      properties: { className: ['book-cta-links'] },
      children: [
        link(APP_STORE_URL, 'App Store'),
        { type: 'text', value: ' · ' },
        link(GOOGLE_PLAY_URL, 'Google Play'),
      ],
    },
  ],
});

export function rehypeBookCta() {
  return (tree, file) => {
    const fm = file.data?.astro?.frontmatter;
    if (!fm || fm.category !== 'book-lists' || !fm.targetLang) return;
    const books = readingBooks[fm.targetLang]?.books;
    if (!books?.length) return;

    const used = new Set();
    let inCefrSection = false;
    let pendingTitle = null;
    const out = [];

    const flush = () => {
      if (pendingTitle) out.push(ctaNode(pendingTitle));
      pendingTitle = null;
    };

    for (const node of tree.children) {
      if (node.type === 'element' && node.tagName === 'h2') {
        flush();
        inCefrSection = CEFR_SECTION.test(text(node));
      } else if (node.type === 'element' && node.tagName === 'h3') {
        flush();
        if (inCefrSection) {
          const h = norm(text(node));
          const hit = books.find((b) => {
            const t = norm(b.title);
            return (h.includes(t) || t.includes(h)) && !used.has(b.title);
          });
          if (hit) {
            used.add(hit.title);
            pendingTitle = hit.title;
          }
        }
      }
      out.push(node);
    }
    flush();
    tree.children = out;
  };
}
