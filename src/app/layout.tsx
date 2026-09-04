import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "@/design-system/styles/globals.css";
import { FrameLayout } from "@/design-system";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEYOND MORTALS — Found Mythology",
  description:
    "Those who came from humanity but outlived humanity's definition of itself. Luxury archival apparel.",
  keywords: ["Beyond Mortals", "High Fashion", "Luxury Apparel", "The Record"],
  icons: {
    icon: "/assets/brand/wordmark_production.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-brand-canvas text-brand-bone antialiased selection:bg-brand-crimson selection:text-white">
        <FrameLayout>{children}</FrameLayout>
      </body>
    </html>
  );
}
