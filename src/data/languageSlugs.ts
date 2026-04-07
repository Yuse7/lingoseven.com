/**
 * Mappings between URL slugs (English names, lowercase, hyphenated) and language codes.
 * Generated from backend languages.config.json.
 */

export const slugToCode: Record<string, string> = {
  'english': 'en',
  'german': 'de',
  'french': 'fr',
  'spanish': 'es',
  'italian': 'it',
  'portuguese': 'pt',
  'russian': 'ru',
  'serbian': 'sr',
  'dutch': 'nl',
  'swedish': 'sv',
  'norwegian': 'no',
  'danish': 'da',
  'romanian': 'ro',
  'ukrainian': 'uk',
  'polish': 'pl',
  'czech': 'cs',
  'slovak': 'sk',
  'croatian': 'hr',
  'bosnian': 'bs',
  'bulgarian': 'bg',
  'macedonian': 'mk',
  'slovenian': 'sl',
  'latvian': 'lv',
  'lithuanian': 'lt',
  'finnish': 'fi',
  'hungarian': 'hu',
  'estonian': 'et',
  'turkish': 'tr',
  'azerbaijani': 'az',
  'greek': 'el',
  'vietnamese': 'vi',
  'indonesian': 'id',
  'malay': 'ms',
  'icelandic': 'is',
  'afrikaans': 'af',
  'catalan': 'ca',
  'galician': 'gl',
  'kazakh': 'kk',
  'uzbek': 'uz',
  'filipino': 'tl',
  'mongolian': 'mn',
  'georgian': 'ka',
  'armenian': 'hy',
  'albanian': 'sq',
  'basque': 'eu',
  'swahili': 'sw',
  'zulu': 'zu',
  'belarusian': 'be',
  'kyrgyz': 'ky',
};

export const codeToSlug: Record<string, string> = Object.fromEntries(
  Object.entries(slugToCode).map(([slug, code]) => [code, slug])
);

export function getSlugFromCode(code: string): string | undefined {
  return codeToSlug[code];
}

export function getCodeFromSlug(slug: string): string | undefined {
  return slugToCode[slug];
}
