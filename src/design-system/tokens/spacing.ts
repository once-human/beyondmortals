/**
 * BEYOND MORTALS — Spacing & Layout Tokens
 * High-fashion layout boundaries: wide margins, generous vertical beats.
 */

export const spacing = {
  container: {
    maxWidth: "1440px",
    narrowWidth: "760px",
    paddingX: {
      mobile: "1.25rem",
      tablet: "2.5rem",
      desktop: "4rem",
    },
  },
  section: {
    paddingY: {
      compact: "4rem",
      default: "8rem",
      spacious: "12rem",
    },
  },
  grid: {
    gap: {
      sm: "1rem",
      md: "2rem",
      lg: "4rem",
    },
  },
} as const;

export type SpacingTokens = typeof spacing;
