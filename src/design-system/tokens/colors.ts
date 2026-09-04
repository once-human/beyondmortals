/**
 * BEYOND MORTALS — Color System Tokens
 * 
 * Palette Rules:
 * Primary Canvas: Matte Black (#080808 / #0A0A0A)
 * Surface Layers: Charcoal (#171717 / #222222)
 * Primary Text / Line Evidence: Pale Bone (#E6E4DD)
 * Single Accent: Saturated Crimson (#C81E1E) — Reserved exclusively for the 5th broken stroke of the tally mark & story-tier details
 */

export const colors = {
  canvas: {
    dark: "#080808",
    pure: "#0A0A0A",
    surface: "#171717",
    elevated: "#222222",
  },
  bone: {
    primary: "#E6E4DD",
    secondary: "#C4C2BB",
    muted: "#A1A09A",
    dim: "#666560",
    faint: "rgba(230, 228, 221, 0.06)",
  },
  crimson: {
    accent: "#C81E1E",
    deep: "#9E1B1B",
    glow: "rgba(200, 30, 30, 0.15)",
  },
  border: {
    hairline: "rgba(230, 228, 221, 0.1)",
    subtle: "rgba(230, 228, 221, 0.05)",
    crimson: "rgba(200, 30, 30, 0.3)",
  },
} as const;

export type ColorTokens = typeof colors;
