/**
 * Aggregate app rating data from App Store and Google Play.
 * Update these values periodically from store listings.
 * Last updated: 2026-05-04
 */
export const appRating = {
  /** Weighted average rating across both stores */
  ratingValue: 4.8,
  /** Total number of ratings across both stores */
  ratingCount: 127,
  /** Best possible rating */
  bestRating: 5,
  /** Worst possible rating */
  worstRating: 1,
} as const;

export type AppRating = typeof appRating;
