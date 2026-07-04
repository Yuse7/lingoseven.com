import { getCollection } from 'astro:content';

// RSS feed for the English blog (the only indexable blog locale). Hand-rolled
// XML so the site keeps zero extra dependencies; escape everything user-visible.
const escapeXml = (s) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export async function GET(context) {
  const site = (context.site?.toString() ?? 'https://lingoseven.com/').replace(/\/$/, '');
  const posts = (
    await getCollection('blog', (p) => p.data.locale === 'en' && !p.data.draft)
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const items = posts
    .map((post) => {
      const slug = post.id.split('/').pop();
      const url = `${site}/en/blog/${slug}/`;
      return [
        '<item>',
        `<title>${escapeXml(post.data.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<pubDate>${post.data.pubDate.toUTCString()}</pubDate>`,
        `<description>${escapeXml(post.data.description)}</description>`,
        '</item>',
      ].join('');
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Lingo7 Blog</title>
<link>${site}/en/blog/</link>
<atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
<description>Learning languages through reading: honest guides, book lists by level, and methodology.</description>
<language>en</language>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
