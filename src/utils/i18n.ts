export type Translations = Record<string, string>;

/**
 * Loads translations for a given language code from src/i18n/{code}.json.
 * Uses Vite's import.meta.glob to load all translation files at build time.
 */
const translationModules = import.meta.glob<{ default: Translations }>('/src/i18n/*.json', { eager: true });

export function getTranslations(langCode: string): Translations {
  const path = `/src/i18n/${langCode}.json`;
  const mod = translationModules[path];
  if (!mod) {
    // Fallback to English
    const enMod = translationModules['/src/i18n/en.json'];
    if (!enMod) throw new Error('English translations not found');
    return enMod.default ?? (enMod as unknown as Translations);
  }
  return mod.default ?? (mod as unknown as Translations);
}

/**
 * Gets a translation value by key with optional replacements.
 *
 * @example
 * t(translations, 'hero_title', { targetLang: 'French' })
 */
export function t(
  translations: Translations,
  key: string,
  replacements?: Record<string, string>,
): string {
  let result = translations[key] ?? key;

  if (replacements) {
    for (const [placeholder, value] of Object.entries(replacements)) {
      result = result.replaceAll(`{${placeholder}}`, value);
    }
  }

  return result;
}
