import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { getEnabledLanguages } from './src/data/languages';

export default defineConfig({
  site: 'https://lingoseven.com',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [
    sitemap({
      // Emit hreflang <xhtml:link> alternates for the 49-locale learn pages so
      // Google sees each `/{uiLang}/learn/{slug}/` as one page in N languages,
      // not N near-duplicates. The integration groups pages by path-minus-locale
      // and only links locales that actually exist in the (already filtered)
      // page list, so home (`/`) and the English-only blog get no bogus
      // alternates. Keep in sync with the in-page hreflang in
      // src/pages/[uiLang]/learn/[targetLang].astro (both trailing-slash).
      i18n: {
        defaultLocale: 'en',
        locales: Object.fromEntries(getEnabledLanguages().map((l) => [l.code, l.code])),
      },
      // Keep noindex pages out of the sitemap (they render `noindex,follow`),
      // so Search Console doesn't flag "indexed, though blocked"/"excluded" noise
      // and crawl budget isn't spent on them.
      filter: (page) => {
        const seg = new URL(page).pathname.split('/').filter(Boolean);
        // Legal pages (root-level, always noindex)
        if (seg[0] === 'privacypolicy' || seg[0] === 'terms') return false;
        // English-only blog policy: every non-English blog page (index + posts)
        // renders noindex,follow. Revisit this rule if blog translations ship
        // (see docs/marketing/seo-lingoseven.md, Next Step #2).
        if (seg[1] === 'blog' && seg[0] !== 'en') return false;
        return true;
      },
    }),
  ],
});
