// Registry of the per-language tool pages, used for same-language cross-linking
// (the "More free {language} tools" block on every tool page).
//
// Each entry mirrors the availability filter of that tool's getStaticPaths so we
// never link to a page that was not built. Keep the two in sync when a tool's
// language coverage changes.

import { codeToSlug } from './languageSlugs';
import { CEFR_LANG_CODES, cefrTest } from './cefrTest';
import { idioms, IDIOM_LANGS } from './idioms';
import { FALSE_FRIENDS_LANGS } from './falseFriends';
import { FLASHCARD_LANGS } from './flashcards';
import { languageFacts } from './languageFacts';
import { IPA_LANGS } from './ipaExamples';
import { READING_LANG_CODES } from './readingBooks';
import { TRAVEL_LANGS } from './travelPhrases';
import { CONJ_LANGS } from './conjugations';
import { VOCAB_LANG_CODES } from './vocabWords';

export interface LanguageTool {
  /** tool slug, also the /tools/{id}/ path segment and the currentId key */
  id: string;
  /** link label for a given language display name */
  label: (name: string) => string;
  /** language codes this tool has a built page for */
  codes: Set<string>;
}

const withSlug = (codes: string[]) => new Set(codes.filter((c) => codeToSlug[c]));

export const LANGUAGE_TOOLS: LanguageTool[] = [
  {
    id: 'cefr-level-test',
    label: (name) => `${name} CEFR level test`,
    codes: withSlug(CEFR_LANG_CODES.filter((c) => cefrTest[c])),
  },
  {
    id: 'common-idioms',
    label: (name) => `Common ${name} idioms`,
    codes: withSlug(IDIOM_LANGS.filter((c) => idioms[c]?.length)),
  },
  {
    id: 'false-friends',
    label: (name) => `${name} false friends`,
    codes: withSlug(FALSE_FRIENDS_LANGS),
  },
  {
    id: 'flashcards',
    label: (name) => `${name} starter flashcards`,
    codes: withSlug(FLASHCARD_LANGS),
  },
  {
    id: 'how-long-to-learn-a-language',
    label: (name) => `How long to learn ${name}`,
    codes: withSlug(
      Object.values(languageFacts)
        .filter((f) => f.fsiHours > 0)
        .map((f) => f.code),
    ),
  },
  {
    id: 'ipa-translator',
    label: (name) => `${name} IPA translator`,
    codes: withSlug(IPA_LANGS),
  },
  {
    id: 'reading-level-recommender',
    label: (name) => `${name} books by level`,
    codes: withSlug(READING_LANG_CODES),
  },
  {
    id: 'travel-phrases',
    label: (name) => `${name} travel phrases`,
    codes: withSlug(TRAVEL_LANGS),
  },
  {
    id: 'verb-conjugator',
    label: (name) => `${name} verb conjugator`,
    codes: withSlug(CONJ_LANGS),
  },
  {
    id: 'vocabulary-size-estimator',
    label: (name) => `${name} vocabulary size test`,
    codes: withSlug(VOCAB_LANG_CODES),
  },
];

/** The other tools that have a page for this language, in registry order. */
export function toolsForLanguage(code: string, currentId: string): LanguageTool[] {
  return LANGUAGE_TOOLS.filter((t) => t.id !== currentId && t.codes.has(code));
}
