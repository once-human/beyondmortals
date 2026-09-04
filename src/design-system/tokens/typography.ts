/**
 * BEYOND MORTALS — Typography System Tokens
 * 
 * Documentary register: cataloguing accounts, generous whitespace, stark contrast.
 */

export const typography = {
  fonts: {
    display: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
    sans: "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
  },
  scale: {
    hero: {
      fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
      lineHeight: "1.05",
      letterSpacing: "-0.03em",
      fontWeight: "400",
    },
    display: {
      fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
      lineHeight: "1.1",
      letterSpacing: "-0.02em",
      fontWeight: "400",
    },
    title: {
      fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
      fontWeight: "400",
    },
    heading: {
      fontSize: "1.125rem",
      lineHeight: "1.4",
      letterSpacing: "0.02em",
      fontWeight: "500",
    },
    body: {
      fontSize: "0.9375rem",
      lineHeight: "1.65",
      letterSpacing: "0.01em",
      fontWeight: "400",
    },
    meta: {
      fontSize: "0.75rem",
      lineHeight: "1.5",
      letterSpacing: "0.15em",
      fontWeight: "400",
      textTransform: "uppercase",
    },
    archiveLabel: {
      fontSize: "0.6875rem",
      lineHeight: "1.4",
      letterSpacing: "0.2em",
      fontWeight: "500",
      textTransform: "uppercase",
    },
  },
} as const;

export type TypographyTokens = typeof typography;
