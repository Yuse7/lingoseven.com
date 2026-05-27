// Target languages that have a dedicated Google Play custom store listing.
// The listing id equals the language code (e.g. ?listing=ru).
const PLAY_CUSTOM_LISTINGS = new Set([
  'de', 'en', 'es', 'fr', 'it', 'pt', 'ru', 'sr',
  'nl', 'sv', 'no', 'da', 'ro', 'uk', 'pl', 'cs', 'sk', 'hr',
  'bs', 'bg', 'mk', 'sl', 'lv', 'lt', 'fi', 'hu', 'et', 'tr',
]);

// Returns the custom-listing id for a learn page's target language, or
// undefined when that language has no dedicated listing (fall back to default).
export function getPlayListing(targetCode?: string): string | undefined {
  return targetCode && PLAY_CUSTOM_LISTINGS.has(targetCode) ? targetCode : undefined;
}
