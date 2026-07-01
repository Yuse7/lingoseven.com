/**
 * Reading-app comparison data for the "best apps to read books in {lang}" pages
 * and the "Lingo7 vs X" comparison pages.
 *
 * Every fact here is web-verified against each app's own store listing / site as of
 * the AS_OF stamp below, with honest strengths AND limits (including Lingo7's).
 * Sources kept in docs/marketing/seo-lingoseven.md (see the "best-apps / compare" note).
 * Do not add a claim you cannot verify. Feature values: true / false / 'partial'.
 *
 * Language coverage lists the TARGET (learnable/readable) languages, intersected at
 * render time with our 49 enabled languages. EWA's "35 languages" and Beelinguapp's
 * higher counts are interface localizations, not learnable content — excluded on purpose.
 */
import { getEnabledLanguages } from './languages';

export type Feat = true | false | 'partial';

/** "as of" stamp shown on every comparison table (GEO freshness signal). */
export const AS_OF = 'July 2026';

export function featLabel(f: Feat): string {
  return f === true ? 'Yes' : f === 'partial' ? 'Limited' : 'No';
}

export interface VsLingo7 {
  /** 40 to 60 word honest verdict, used as the compare-page direct answer. */
  verdict: string;
  chooseUsIf: string[];
  chooseThemIf: string[];
  theyDoWell: string;
  weDiffer: string;
}

export interface ReadingApp {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  /** How reading works / what you can read (the key differentiator). */
  catalog: string;
  feats: {
    importBooks: Feat; // read your own uploaded books
    parallel: Feat; // side-by-side original + full translation
    tapWord: Feat; // tap-a-word dictionary
    sentence: Feat; // sentence-level translation
    audio: Feat; // narration synced to text
    srs: Feat; // spaced-repetition vocabulary
    speaking: Feat; // AI conversation / speaking practice
    offline: Feat;
  };
  /** Target (learnable) language codes; intersected with our enabled set at render. */
  languages: string[];
  languageNote: string; // human display of coverage
  pricing: string; // full sentence, for prose
  priceShort: string; // for table cells
  freeTier: string;
  platforms: string[];
  strengths: string[]; // honest, most important first
  limits: string[]; // honest, most important first
  bestFor: string;
  /** Present only for apps that get a dedicated "Lingo7 vs X" page. */
  vs?: VsLingo7;
}

// All enabled target languages (kept in sync with languages.ts).
const ALL_LANGS = getEnabledLanguages().map((l) => l.code);

export const LINGO7: ReadingApp = {
  slug: 'lingo7',
  name: 'Lingo7',
  url: 'https://lingoseven.com/',
  tagline:
    'Read any book in your target language with a sentence-by-sentence parallel translation, native-narrated audio and a built-in vocabulary trainer.',
  catalog: 'Any book: built-in catalog plus your own uploads (EPUB, PDF, FB2, TXT, DOCX, HTML)',
  feats: {
    importBooks: true,
    parallel: true,
    tapWord: true,
    sentence: true,
    audio: true,
    srs: true,
    speaking: true,
    offline: 'partial',
  },
  languages: ALL_LANGS,
  languageNote: '49 languages',
  pricing: 'free to start, with an optional premium subscription',
  priceShort: 'Free + premium',
  freeTier: 'Yes, free to start',
  platforms: ['iOS', 'Android'],
  strengths: [
    'Reads any book, the built-in catalog or your own upload (EPUB, PDF, FB2, TXT, DOCX, HTML), with the original and a full translation side by side',
    'Native-narrated audio with sentence-synced highlighting on catalog books, so you read and listen at once',
    'Tap a word for a dictionary card, then send it to a spaced-repetition trainer; a Practice tab adds AI conversation',
  ],
  limits: [
    'Pronunciation scoring covers English, Spanish and French only',
    'Mobile app only (iOS and Android); there is no web reader',
    'Some lower-resource languages have a thinner built-in catalog, so you upload your own book to fill it',
  ],
  bestFor: 'Reading real books, yours or ours, with parallel translation and audio, across 49 languages',
};

const LINGQ: ReadingApp = {
  slug: 'lingq',
  name: 'LingQ',
  url: 'https://www.lingq.com/',
  tagline:
    'A comprehensible-input reader: import books or lessons, tap every unknown word to save it, and track what you know across everything you read.',
  catalog: 'Any content, including imported EPUB, PDF, DOCX, TXT and MOBI, plus a large lesson library',
  feats: {
    importBooks: true,
    parallel: false,
    tapWord: true,
    sentence: true,
    audio: true,
    srs: true,
    speaking: 'partial',
    offline: true,
  },
  // LingQ ∩ our 49 (excludes bs, lv, et, az, gl, kk, uz, mn, sq, eu, zu, ky, which LingQ lacks).
  languages: [
    'en', 'de', 'fr', 'es', 'it', 'pt', 'ru', 'sr', 'nl', 'sv', 'no', 'da', 'ro', 'uk', 'pl',
    'cs', 'sk', 'hr', 'bg', 'mk', 'sl', 'lt', 'fi', 'hu', 'tr', 'el', 'vi', 'id', 'ms', 'is',
    'af', 'ca', 'tl', 'ka', 'hy', 'sw', 'be',
  ],
  languageNote: '50+ (some in beta)',
  pricing: 'a free trial, then Premium at about $10 to $15 per month',
  priceShort: '~$10-15/mo',
  freeTier: 'Trial only (20 words, 5 imports)',
  platforms: ['iOS', 'Android', 'Web'],
  strengths: [
    'Imports and reads full books (EPUB, PDF, DOCX, TXT, MOBI), auto-split into chapters, so you can read your own library',
    'Tracks known and unknown words across everything you read and auto-feeds them into spaced-repetition review',
    'Wide language coverage (50+), a full web app, and read-while-listen with a karaoke highlight',
  ],
  limits: [
    'No continuous side-by-side parallel translation; you tap words or read one sentence at a time, so dense text means a lot of tapping',
    'The free tier is effectively a trial for reading (20 saved words, 5 imports), so reading books at length needs a paid plan',
    'Dictionary hints are crowd-sourced and vary by language; beta languages have thin content; weak for speaking',
  ],
  bestFor: 'Importing and mining your own content in many languages, if you like tracking every word you know',
  vs: {
    verdict:
      'Both Lingo7 and LingQ let you read your own imported books in many languages. The difference is how you read: LingQ colour-codes words and you tap each unknown one, or read a sentence at a time, while Lingo7 shows the original and a full translation side by side, adds native-narrated audio, and includes a vocabulary trainer and speaking practice. LingQ has the bigger library and a web app; Lingo7 is calmer for reading long stretches.',
    chooseUsIf: [
      'You want a continuous side-by-side translation, so you rarely stop to tap',
      'You want native audio, a vocabulary trainer and speaking practice in one app',
      'You want a usable free start rather than a 20-word trial',
    ],
    chooseThemIf: [
      'You want to track every word you know across everything you read',
      'You need a full web app and browser importer for desktop reading',
      'You import a lot of varied content, such as articles, video captions and podcasts',
    ],
    theyDoWell:
      'LingQ is built around comprehensible input and does it thoroughly. It imports full books and almost any other content, colour-codes every word by how well you know it, and carries that knowledge across your whole library, so your sense of progress is concrete. It has a proper web app, a browser importer, a large multi-language library and graded Mini Stories, plus read-while-listen with a karaoke highlight. For learners who enjoy tracking and mining vocabulary at scale, it is excellent.',
    weDiffer:
      'Lingo7 optimises for actually reading. Instead of tapping each unknown word, you see the original and a full translation side by side, so you keep moving through the text; audio with sentence-synced highlighting lets you read and listen at once; and a tapped word still saves to a spaced-repetition trainer. Lingo7 also adds a Practice tab for AI conversation, and it is free to start rather than a 20-word trial. LingQ has the larger content library and a web app; Lingo7 is the calmer way to read a book end to end on your phone.',
  },
};

const BEELINGUAPP: ReadingApp = {
  slug: 'beelinguapp',
  name: 'Beelinguapp',
  url: 'https://beelinguapp.com/',
  tagline:
    'Read short bilingual stories, news and audiobooks with the two languages side by side and karaoke-style audio.',
  catalog: 'A fixed catalog of graded stories, news and audiobooks (no imports)',
  feats: {
    importBooks: false,
    parallel: true,
    tapWord: true,
    sentence: 'partial',
    audio: true,
    srs: 'partial',
    speaking: false,
    offline: true,
  },
  // Beelinguapp ∩ our 49 (content languages only; JA/ZH/HI/KO/AR excluded as not enabled here).
  languages: ['en', 'es', 'pt', 'fr', 'it', 'de', 'ru', 'tr', 'sv', 'pl', 'nl', 'no', 'el', 'id', 'uk', 'tl', 'vi', 'fi'],
  languageNote: 'About 20 languages',
  pricing: 'a free tier with ads, then Premium at about $7 per month',
  priceShort: 'Free + ~$7/mo',
  freeTier: 'Yes, limited stories with ads',
  platforms: ['iOS', 'Android'],
  strengths: [
    'Side-by-side parallel text with karaoke audio highlighting is genuinely good for read-while-listen practice',
    'Large, leveled catalog of stories, news and songs across many genres',
    'Downloaded texts read fully offline, and you can tap a word for a translation while reading',
  ],
  limits: [
    'You cannot import your own books; you are limited to the fixed catalog, and classics appear as short adaptations, not full novels',
    'Vocabulary review is a basic flashcard game with no confirmed spaced repetition, and there is no speaking practice',
    'Content is short stories and news rather than book-length reading',
  ],
  bestFor: 'Beginner and intermediate read-while-listen practice on short graded stories',
  vs: {
    verdict:
      'Beelinguapp and Lingo7 both show two languages side by side with audio, but they aim at different things. Beelinguapp gives you a fixed catalog of short graded stories and news, which is great for beginners; Lingo7 lets you read full books, yours or ours, adds a vocabulary trainer and speaking practice, and covers far more languages. If you want to read a specific book, Lingo7 is the one that can.',
    chooseUsIf: [
      'You want to read full books, including your own uploads, not just short stories',
      'You want a vocabulary trainer and speaking practice, not only reading',
      'Your language is outside Beelinguapp’s roughly twenty',
    ],
    chooseThemIf: [
      'You are a beginner who wants short, leveled stories to start with',
      'You mainly want read-while-listen practice and are happy with a fixed catalog',
      'You want a polished, gentle on-ramp before moving to full books',
    ],
    theyDoWell:
      'Beelinguapp is a polished, approachable way into reading. Its side-by-side view with karaoke audio is well made, the catalog of short stories, news and songs is large and clearly leveled, and downloaded texts work offline. For a beginner who wants bite-sized, structured read-and-listen practice without the friction of choosing and importing a book, it is a friendly place to start.',
    weDiffer:
      'Lingo7 is built for reading whole books rather than a fixed catalog of short pieces. You can open any book from the catalog or upload your own (EPUB, PDF and more) and read it with the original and a full translation side by side and native audio. Tapped words go to a spaced-repetition trainer, and a Practice tab adds AI conversation, so reading turns into vocabulary and speaking. Lingo7 also covers many more languages. Beelinguapp is the gentler beginner catalog; Lingo7 is where you read the actual book you want.',
  },
};

const READLANG: ReadingApp = {
  slug: 'readlang',
  name: 'Readlang',
  url: 'https://readlang.com/',
  tagline:
    'A browser-based reader: import a text or ebook, click any word or phrase for a translation, and every lookup becomes a review card.',
  catalog: 'Any text or ebook you import (EPUB or TXT), plus a shared community library; web-based',
  feats: {
    importBooks: 'partial',
    parallel: false,
    tapWord: true,
    sentence: 'partial',
    audio: 'partial',
    srs: true,
    speaking: false,
    offline: false,
  },
  // Web reader backed by machine translation; covers 100+ languages, so all of our set.
  languages: ALL_LANGS,
  languageNote: '100+ (web-based)',
  pricing: 'a free tier, then Premium at about $6 per month',
  priceShort: 'Free + ~$6/mo',
  freeTier: 'Yes, with daily phrase limits',
  platforms: ['Web'],
  strengths: [
    'Reads your own imported texts and ebooks in 100+ languages, with a click-to-translate that works on almost any language',
    'Every word or phrase you look up automatically becomes a spaced-repetition flashcard',
    'Free to try, and works in the browser on any computer',
  ],
  limits: [
    'Web-based only, with no native mobile app, and it imports EPUB or plain text but not PDF',
    'Tuned for articles and shorter texts; phrase lookups are throttled on the free tier and audio is text-to-speech, on the paid tier',
    'No side-by-side parallel view and no graded catalog; you bring your own material',
  ],
  bestFor: 'Reading your own imported texts in almost any language, from a desktop browser',
};

const READLE: ReadingApp = {
  slug: 'readle',
  name: 'Readle',
  url: 'https://readle-app.com/',
  tagline:
    'Short daily graded stories (A1 to B2) with tap-to-translate, native audio and vocabulary flashcards.',
  catalog: 'A fixed catalog of short graded stories (A1 to B2), no imports',
  feats: {
    importBooks: false,
    parallel: false,
    tapWord: true,
    sentence: true,
    audio: true,
    srs: true,
    speaking: false,
    offline: 'partial',
  },
  // Readle ∩ our 49 (only en/de/fr/es; its other two, Japanese and Chinese, are not enabled here).
  languages: ['en', 'de', 'fr', 'es'],
  languageNote: '6 languages',
  pricing: 'a rotating set of free stories, then Premium at about $10 to $15 per month',
  priceShort: '~$10-15/mo',
  freeTier: 'Yes, a rotating set of free stories',
  platforms: ['iOS', 'Android', 'Web'],
  strengths: [
    'Consistent CEFR leveling (A1 to B2, C1 for German) across a large library of short stories',
    'Every story bundles native sentence-by-sentence audio, tap-to-translate and in-context grammar',
    'Built-in flashcards seeded from the words you tap, with a clean daily-habit design',
  ],
  limits: [
    'No real books: you cannot import EPUB or PDF, and reading is limited to short graded stories, not full-length books',
    'Only six languages (English, German, French, Spanish, Japanese, Chinese)',
    'No side-by-side parallel translation, and among these apps it is the priciest',
  ],
  bestFor: 'A structured daily graded-reading habit in one of its six languages',
  vs: {
    verdict:
      'Readle and Lingo7 both pair reading with native audio, but Readle gives you a fixed catalog of short graded stories in six languages, while Lingo7 lets you read full books, yours or ours, with a side-by-side translation, in 49 languages. Readle is a polished daily-habit app up to about B2; Lingo7 is for reading actual books and covers far more languages.',
    chooseUsIf: [
      'You want to read full books, including your own uploads, not short stories',
      'You want a side-by-side parallel translation and 49 languages',
      'You want a free start plus a vocabulary trainer and speaking practice',
    ],
    chooseThemIf: [
      'You want a structured daily graded-story habit in one of its six languages',
      'You like tightly leveled A1 to B2 content and do not need full books',
      'You prefer a fixed curriculum over choosing your own material',
    ],
    theyDoWell:
      'Readle (formerly Langster) is a well-made daily-reading habit. Its stories are consistently graded from A1 to B2 (C1 for German), each with native sentence-by-sentence audio, tap-to-translate and grammar notes, and the words you tap feed a flashcard deck. The design is clean and low on gamification, which makes it easy to read a little every day. For a structured on-ramp in one of its six languages, it is genuinely good.',
    weDiffer:
      'Lingo7 is built for reading real books rather than a fixed catalog of short stories. You can read any book from the catalog or upload your own, with the original and a full translation side by side and native audio, and there is no B2 ceiling because you choose the material. Tapped words go to a spaced-repetition trainer and a Practice tab adds conversation. Lingo7 also supports 49 languages to Readle’s six, and it is free to start. Readle is the tidier daily-story habit; Lingo7 is for reading the books you actually want.',
  },
};

const EWA: ReadingApp = {
  slug: 'ewa',
  name: 'EWA',
  url: 'https://appewa.com/',
  tagline:
    'Learn English, Spanish or French from adapted books and movie clips, with tap-to-translate, synced audio, flashcards and AI speaking practice.',
  catalog: 'A fixed catalog of adapted, licensed books and movie clips (no imports)',
  feats: {
    importBooks: false,
    parallel: false,
    tapWord: true,
    sentence: true,
    audio: true,
    srs: true,
    speaking: true,
    offline: 'partial',
  },
  // EWA ∩ our 49: only en/es/fr are confirmed learnable (the "35 languages" is UI localization).
  languages: ['en', 'es', 'fr'],
  languageNote: '3 languages (EN, ES, FR)',
  pricing: 'a free trial, then premium at about $4 to $16 per month depending on the plan and store',
  priceShort: '~$4-16/mo',
  freeTier: 'Limited, with daily caps',
  platforms: ['iOS', 'Android'],
  strengths: [
    'Large curated library with professional synced audio and karaoke-style highlighting',
    'Books are adapted and leveled, so beginners are not dropped into native-level text',
    'Bundles reading with movie and TV clips, spaced-repetition flashcards and an AI speaking partner',
  ],
  limits: [
    'Only three learnable languages (English, Spanish, French); the "35 languages" figure is interface translation, not content you can learn',
    'Closed catalog with no imports, and texts are adapted or abridged rather than full original works',
    'No side-by-side parallel translation, and the free tier is gated with daily caps',
  ],
  bestFor: 'Learning English, Spanish or French from adapted books and movies, with speaking practice',
  vs: {
    verdict:
      'EWA and Lingo7 both teach through reading with audio, but EWA is essentially an English-first app: you learn English, Spanish or French from its adapted, licensed catalog, plus movie clips and AI speaking. Lingo7 lets you read any book, including your own uploads, with a side-by-side translation, in 49 languages. If your target language is outside EWA’s three, or you want full books, Lingo7 fits.',
    chooseUsIf: [
      'You want to read full books, including your own uploads, not an adapted catalog',
      'Your target language is outside English, Spanish and French',
      'You want a side-by-side parallel translation across 49 languages',
    ],
    chooseThemIf: [
      'You are learning English, Spanish or French and like learning from movies and TV as well as books',
      'You want adapted, leveled texts so you are not dropped into native-level writing',
      'You want AI speaking practice built around movie dialogue',
    ],
    theyDoWell:
      'EWA is a polished, popular way to learn from media. Its catalog of adapted books comes with professional synced audio and karaoke-style highlighting, tap-to-translate keeps you in the flow, and it bundles thousands of movie and TV clips, spaced-repetition flashcards and an AI speaking partner into one app. For someone learning English, Spanish or French who wants a media-rich, guided experience, it is well made and inexpensive on the annual web plan.',
    weDiffer:
      'Lingo7 is built to read real books in a wide range of languages. EWA gives you an adapted, licensed catalog in three languages; Lingo7 lets you open any book from the catalog or upload your own (EPUB, PDF and more) and read the full, unabridged text with the original and a translation side by side and native audio. Tapped words feed a spaced-repetition trainer and a Practice tab adds conversation. Above all, Lingo7 supports 49 languages to EWA’s three, so it works whatever you are learning. EWA is the media-rich English-first app; Lingo7 is for reading the actual book you want in your language.',
  },
};

export const READING_APPS: ReadingApp[] = [LINGO7, LINGQ, BEELINGUAPP, READLANG, READLE, EWA];

/** The dedicated "Lingo7 vs X" comparison pages. */
export const COMPARISONS: { slug: string; competitorSlug: string }[] = [
  { slug: 'lingo7-vs-lingq', competitorSlug: 'lingq' },
  { slug: 'lingo7-vs-beelinguapp', competitorSlug: 'beelinguapp' },
  { slug: 'lingo7-vs-readle', competitorSlug: 'readle' },
  { slug: 'lingo7-vs-ewa', competitorSlug: 'ewa' },
];

// Transparent ranking for "reading real books": read-your-own-book weighted highest,
// then parallel translation, then audio, then the extension features.
const WEIGHT: Record<keyof ReadingApp['feats'], number> = {
  importBooks: 4,
  parallel: 3,
  audio: 2,
  speaking: 1,
  srs: 1,
  sentence: 1,
  tapWord: 1,
  offline: 0.5,
};

function featValue(f: Feat, w: number): number {
  return f === true ? w : f === 'partial' ? w / 2 : 0;
}

export function readingScore(a: ReadingApp): number {
  return (Object.keys(WEIGHT) as (keyof ReadingApp['feats'])[]).reduce(
    (sum, k) => sum + featValue(a.feats[k], WEIGHT[k]),
    0
  );
}

function byReadingFit(a: ReadingApp, b: ReadingApp): number {
  return (
    readingScore(b) - readingScore(a) ||
    Number(b.feats.importBooks === true) - Number(a.feats.importBooks === true) ||
    a.name.localeCompare(b.name)
  );
}

/** Apps that support reading in `code`, ranked by fit for reading real books. */
export function appsForLanguage(code: string): ReadingApp[] {
  return READING_APPS.filter((a) => a.languages.includes(code)).sort(byReadingFit);
}

/** All apps ranked (language-agnostic), for the hubs. */
export function rankedApps(): ReadingApp[] {
  return [...READING_APPS].sort(byReadingFit);
}

export function getApp(slug: string): ReadingApp | undefined {
  return READING_APPS.find((a) => a.slug === slug);
}
