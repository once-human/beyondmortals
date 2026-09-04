import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Font stack for Beyond Mortals.
 *
 * Serif  — Cormorant Garamond: high-contrast editorial serif.
 *          Used for hero text, display headlines, pull quotes.
 *          Light weight (300) at large sizes for elegance;
 *          regular (400) for titles.
 *
 * Sans   — Inter: invisible, functional. Body text, navigation, UI.
 *          Never competes with the serif for attention.
 *
 * Mono   — JetBrains Mono: archive labels, metadata, captions.
 *          Documentary register — cataloguing, not decorating.
 */

export const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

/** Combined CSS variable class string for <html>. */
export const fontVariables = `${fontSerif.variable} ${fontSans.variable} ${fontMono.variable}`;
