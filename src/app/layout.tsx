import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/design-system";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beyond Mortals",
  description:
    "Those who came from humanity but outlived humanity's definition of itself.",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
