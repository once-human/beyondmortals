/**
 * Beyond Mortals — Design Tokens
 *
 * Single source of truth for every visual decision in the system.
 * Palette derived from brand doc v3: matte black canvas, pale bone text,
 * saturated crimson reserved exclusively for the tally mark's broken fifth stroke.
 *
 * Reference points: Rick Owens, Yohji Yamamoto, Boris Bidjan Saberi.
 * Aesthetic register: raw, weathered, matte — reads as physical evidence,
 * not decoration.
 */

// ─── Palette ────────────────────────────────────────────────────────────────

export const palette = {
  black: "#0A0A0A",
  surface: {
    0: "#0A0A0A",
    1: "#111111",
    2: "#191919",
    3: "#222222",
  },
  bone: {
    DEFAULT: "#E8E6DF",
    secondary: "#B5B3AC",
    muted: "#7A7974",
    faint: "#3D3D3A",
  },
  crimson: "#C81E1E",
  white: "#FAFAF8",
} as const;

// ─── Typography ─────────────────────────────────────────────────────────────

export const typeface = {
  /** Display / editorial headlines — high-contrast serif with presence. */
  serif: "var(--font-serif)",
  /** Body / UI / navigation — neutral, disappears into the content. */
  sans: "var(--font-sans)",
  /** Metadata / archive labels / monospaced accents. */
  mono: "var(--font-mono)",
} as const;

export const type = {
  hero: {
    fontFamily: typeface.serif,
    fontSize: "clamp(3rem, 7vw, 7rem)",
    fontWeight: 300,
    lineHeight: 1.0,
    letterSpacing: "-0.025em",
  },
  display: {
    fontFamily: typeface.serif,
    fontSize: "clamp(2rem, 4vw, 3.5rem)",
    fontWeight: 300,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
  },
  title: {
    fontFamily: typeface.serif,
    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
    fontWeight: 400,
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
  },
  body: {
    fontFamily: typeface.sans,
    fontSize: "0.9375rem",
    fontWeight: 400,
    lineHeight: 1.7,
    letterSpacing: "0.005em",
  },
  caption: {
    fontFamily: typeface.mono,
    fontSize: "0.6875rem",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
  },
  nav: {
    fontFamily: typeface.sans,
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
  },
} as const;

// ─── Spacing / Layout ───────────────────────────────────────────────────────

export const layout = {
  maxWidth: "1200px",
  narrowWidth: "720px",
  gutter: {
    mobile: "1.5rem",
    desktop: "3rem",
  },
  sectionGap: "8rem",
} as const;

// ─── Motion ─────────────────────────────────────────────────────────────────

export const motion = {
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "600ms",
  },
} as const;
