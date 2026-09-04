import React from "react";
import Link from "next/link";
import { TallyMark, Fragment, MarkedFace, Wordmark } from "@/design-system";

/**
 * BEYOND MORTALS — Main Homepage Template
 * 
 * Clean, high-fashion boilerplate canvas ready for future page composition.
 * Demonstrates centralized design system token & symbol integration from `@/design-system`.
 */
export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center items-center py-20">
      {/* Central Archival Template Container */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-12 px-4">
        {/* Symbol Trio Anchor */}
        <div className="flex items-center gap-6 text-brand-bone-dim">
          <Fragment size={24} className="opacity-40" />
          <TallyMark size={40} className="text-brand-bone" />
          <MarkedFace size={24} className="opacity-40" />
        </div>

        {/* Brand Wordmark Stamped */}
        <div className="space-y-4">
          <Wordmark size="xl" />
          <p className="font-mono text-xs text-brand-bone-dim tracking-[0.25em] uppercase">
            [ ARCHIVAL TEMPLATE & DESIGN SYSTEM READY ]
          </p>
        </div>

        {/* Minimal High-Fashion Boundary Line */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-brand-crimson to-transparent my-6" />

        {/* Design System Access Demo Card */}
        <div className="w-full p-8 rounded border border-brand-hairline bg-brand-surface/30 backdrop-blur-sm text-left space-y-6">
          <div className="flex items-center justify-between border-b border-brand-hairline pb-4">
            <span className="font-mono text-xs tracking-widest text-brand-bone-muted uppercase">
              DESIGN SYSTEM STATUS
            </span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-brand-crimson/20 text-brand-crimson border border-brand-crimson/30">
              INITIALIZED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-brand-bone-muted">
            <div className="p-3 rounded bg-brand-black/60 border border-brand-hairline">
              <span className="block text-brand-bone font-medium mb-1">TOKENS</span>
              <span className="text-[11px] text-brand-bone-dim">@/design-system/tokens</span>
            </div>
            <div className="p-3 rounded bg-brand-black/60 border border-brand-hairline">
              <span className="block text-brand-bone font-medium mb-1">SYMBOLS</span>
              <span className="text-[11px] text-brand-bone-dim">@/design-system/symbols</span>
            </div>
            <div className="p-3 rounded bg-brand-black/60 border border-brand-hairline">
              <span className="block text-brand-bone font-medium mb-1">LAYOUT</span>
              <span className="text-[11px] text-brand-bone-dim">@/design-system/components</span>
            </div>
          </div>

          <div className="pt-2 flex justify-between items-center text-xs font-mono text-brand-bone-dim">
            <span>Route: / (Canvas Ready)</span>
            <Link
              href="/the-record"
              className="text-brand-bone hover:text-brand-crimson transition-colors underline underline-offset-4 decoration-brand-crimson/50"
            >
              Inspect /the-record →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
