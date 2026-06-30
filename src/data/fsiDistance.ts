/**
 * Linguistic-distance helpers shared by the FSI-based tools
 * (language-difficulty-ranker + how-long-to-learn-a-language).
 *
 * `languageFacts` only stores a coarse top-level `family` ("Indo-European"
 * covers Spanish, Russian and German alike), which is too broad to estimate
 * how hard one language is for a speaker of another. The finer sub-family
 * BRANCH map powers a "for your native language" closeness estimate.
 *
 * Pure data + functions, no Astro: usable both in page frontmatter (server)
 * and in client `<script>` blocks (Astro bundles those imports).
 */

export const BRANCH: Record<string, string> = {
  // Indo-European
  fr: 'Romance', es: 'Romance', it: 'Romance', pt: 'Romance', ro: 'Romance', ca: 'Romance', gl: 'Romance',
  en: 'Germanic', de: 'Germanic', nl: 'Germanic', sv: 'Germanic', no: 'Germanic', da: 'Germanic', is: 'Germanic', af: 'Germanic',
  ru: 'Slavic', uk: 'Slavic', be: 'Slavic', pl: 'Slavic', cs: 'Slavic', sk: 'Slavic', hr: 'Slavic',
  bs: 'Slavic', sr: 'Slavic', bg: 'Slavic', mk: 'Slavic', sl: 'Slavic',
  lv: 'Baltic', lt: 'Baltic',
  el: 'Hellenic', sq: 'Albanian', hy: 'Armenian',
  // Other families
  fi: 'Finno-Ugric', hu: 'Finno-Ugric', et: 'Finno-Ugric',
  tr: 'Turkic', az: 'Turkic', kk: 'Turkic', uz: 'Turkic', ky: 'Turkic',
  id: 'Malayo-Polynesian', ms: 'Malayo-Polynesian', tl: 'Malayo-Polynesian',
  vi: 'Vietic', ka: 'Kartvelian', mn: 'Mongolic', eu: 'Isolate',
  sw: 'Bantu', zu: 'Bantu',
};

export const FSI_HOURS_LABEL: Record<string, string> = {
  I: 'Easiest (Cat. I)',
  II: 'Easy (Cat. II)',
  III: 'Hard (Cat. III)',
  IV: 'Hardest (Cat. IV)',
};

export type LangProfile = { family: string; branch: string; writingSystem: string };

/** Notional native-English baseline used to normalise the closeness factor. */
export const EN_PROFILE: LangProfile = { family: 'Indo-European', branch: 'Germanic', writingSystem: 'Latin' };

const scripts = (w: string) => w.split(',').map((s) => s.trim());
const shareScript = (a: string, b: string) => scripts(a).some((s) => scripts(b).includes(s));

/**
 * Closeness factor (lower = easier) of learning target `t` for a speaker of
 * `n`, from shared sub-family branch, family and writing system. Calibrated so
 * a native-English speaker sits near 1.0.
 */
export function closenessFactor(n: LangProfile, t: LangProfile): number {
  const sameBranch = n.branch === t.branch;
  const sameFamily = n.family === t.family;
  const sameScript = shareScript(n.writingSystem, t.writingSystem);
  if (sameBranch && sameScript) return 0.55;
  if (sameBranch) return 0.7;
  if (sameFamily && sameScript) return 0.85;
  if (sameScript) return 0.95;
  if (sameFamily) return 1.05;
  return 1.2;
}

/**
 * Adjust the English-speaker FSI study-hour figure for a different native
 * language. English natives get the raw FSI hours; others scale by how close
 * the target is to their language relative to the English baseline. Clamped to
 * a 300h floor and rounded to the nearest 25h.
 */
export function estHoursForNative(
  native: (LangProfile & { code: string }) | null,
  target: LangProfile,
  fsiHours: number,
): number {
  if (!native || native.code === 'en') return fsiHours;
  const adj = closenessFactor(native, target) / closenessFactor(EN_PROFILE, target);
  return Math.max(300, Math.round((fsiHours * adj) / 25) * 25);
}
