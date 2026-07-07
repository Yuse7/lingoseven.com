/**
 * Aggregate app rating data from App Store and Google Play.
 * Update these values periodically from store listings.
 * Last updated: 2026-07-07
 * Sources: Google Play aggregateRating 4.56 x 136 (store page JSON-LD),
 * App Store US 5.0 x 4 (iTunes lookup id 6471030440). Weighted average.
 */
export const appRating = {
  /** Weighted average rating across both stores */
  ratingValue: 4.6,
  /** Total number of ratings across both stores */
  ratingCount: 140,
  /** Best possible rating */
  bestRating: 5,
  /** Worst possible rating */
  worstRating: 1,
} as const;

export type AppRating = typeof appRating;
