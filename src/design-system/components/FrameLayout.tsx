import React from "react";
import Link from "next/link";
import { TallyMark } from "../symbols/TallyMark";
import { Wordmark } from "../symbols/Wordmark";

interface FrameLayoutProps {
  children: React.ReactNode;
}

/**
 * BEYOND MORTALS — FrameLayout
 * High-fashion minimalist shell wrapper providing consistent document header,
 * background texture, grid guidelines, and archive footer.
 */
export const FrameLayout: React.FC<FrameLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-brand-canvas text-brand-bone flex flex-col font-sans selection:bg-brand-crimson selection:text-white">
      {/* Background Film Noise Layer */}
      <div className="fixed inset-0 pointer-events-none bg-noise opacity-40 z-0" />

      {/* Top Header Frame Anchor */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-brand-canvas/80 border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          {/* Left Brand Anchor */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-crimson"
          >
            <TallyMark size={22} className="transition-transform group-hover:scale-105" />
            <Wordmark size="sm" />
          </Link>

          {/* Right Navigation / Archive Metadata */}
          <nav className="flex items-center gap-8 text-xs font-mono tracking-[0.18em] uppercase text-brand-bone-muted">
            <Link
              href="/the-record"
              className="hover:text-brand-bone transition-colors focus:outline-none hover:underline underline-offset-4 decoration-brand-crimson"
            >
              The Record
            </Link>
            <span className="hidden sm:inline-block text-brand-hairline">|</span>
            <span className="hidden sm:inline-block text-[10px] text-brand-bone-dim tracking-widest">
              [CATALOGUE V3.0]
            </span>
          </nav>
        </div>
      </header>

      {/* Main Content Viewport */}
      <main className="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-5 md:px-10">
        {children}
      </main>

      {/* Archive Footer Anchor */}
      <footer className="relative z-10 w-full border-t border-brand-hairline py-12 bg-brand-black/60">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-brand-bone-dim">
          <div className="flex items-center gap-4">
            <TallyMark size={16} boneColor="#666560" showCrimsonBreak={true} />
            <span className="tracking-[0.15em] uppercase">
              BEYOND MORTALS — ARCHIVAL FOUNDATION
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 tracking-widest text-[11px]">
            <span>LOC: 18.5204° N, 73.8567° E</span>
            <span>STATUS: RECORD UNCLOSED</span>
            <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
