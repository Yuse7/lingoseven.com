/**
 * Install actions: a page declares deferred actions the app performs on its
 * first launch after install (docs/marketing/site-attribution.md, "Install actions").
 *
 * The dictionary in install-actions.config.json is canonical and shared with
 * the app (drift test on the Dart side). Everything here is pure and
 * build-time: no network, no runtime config loading.
 */
import config from './install-actions.config.json';

export type InstallActions = Record<string, string>;

export const INSTALL_ACTIONS_META_NAME: string = config.metaName;

const ACTION_KEYS: string[] = Object.keys(config.actions);
const ACTION_PATTERNS: Record<string, RegExp> = Object.fromEntries(
  Object.entries(config.actions as Record<string, { name: string; value: string }>)
    .map(([key, spec]) => [key, new RegExp(spec.value)]),
);

/**
 * Parses a meta-tag content (query string) into known actions with valid
 * values. Unknown keys and invalid values are dropped silently: the token is
 * untrusted input and old builds must ignore what they do not know.
 */
export function parseInstallActionsContent(content: string): InstallActions {
  const params = new URLSearchParams(content ?? '');
  const actions: InstallActions = {};
  for (const key of ACTION_KEYS) {
    const value = params.get(key);
    if (value !== null && ACTION_PATTERNS[key].test(value)) actions[key] = value;
  }
  return actions;
}

/**
 * Build-time validation of the page prop: an unknown key or an invalid value
 * is an authoring mistake and must break the build, not reach production.
 */
export function validateInstallActions(actions: InstallActions): void {
  for (const [key, value] of Object.entries(actions)) {
    const pattern = ACTION_PATTERNS[key];
    if (!pattern) {
      throw new Error(
        `installActions: unknown key "${key}". Known keys: ${ACTION_KEYS.join(', ')}`,
      );
    }
    if (typeof value !== 'string' || !pattern.test(value)) {
      throw new Error(
        `installActions: invalid value "${value}" for key "${key}", expected ${pattern.source}`,
      );
    }
  }
}

/** Serializes actions into meta-tag content. Key order follows the dictionary. */
export function serializeInstallActions(actions: InstallActions): string {
  const params = new URLSearchParams();
  for (const key of ACTION_KEYS) {
    const value = actions[key];
    if (value !== undefined) params.set(key, value);
  }
  return params.toString();
}

/**
 * Contract test vectors from the canonical config, run by both sides (site on
 * build, app in unit tests). Catches dictionary drift and a different reading
 * of the format (case, unknown keys, invalid values).
 */
export function runInstallActionsVectors(): void {
  for (const vector of config.vectors as Array<{ content: string; parsed: InstallActions }>) {
    const actual = parseInstallActionsContent(vector.content);
    const expected = vector.parsed;
    const sameSize = Object.keys(actual).length === Object.keys(expected).length;
    const sameValues = Object.entries(expected).every(([key, value]) => actual[key] === value);
    if (!sameSize || !sameValues) {
      throw new Error(
        `install-actions vector failed for content "${vector.content}": `
        + `expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`,
      );
    }
  }
}
