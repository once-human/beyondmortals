import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/design-system/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          canvas: "#080808",
          black: "#0A0A0A",
          charcoal: "#171717",
          surface: "#222222",
          bone: {
            DEFAULT: "#E6E4DD",
            muted: "#A1A09A",
            dim: "#666560",
          },
          crimson: {
            DEFAULT: "#C81E1E",
            deep: "#9E1B1B",
            bright: "#E52222",
          },
          hairline: "rgba(230, 228, 221, 0.1)",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      letterSpacing: {
        documentary: "0.2em",
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
