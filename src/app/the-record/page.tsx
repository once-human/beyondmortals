import React from "react";
import { TallyMark, Wordmark } from "@/design-system";
import { LORE_VIGNETTES } from "@/lib/brand/lore";

/**
 * BEYOND MORTALS — The Record Route (/the-record)
 * 
 * Scroll-based documentary timeline skeleton.
 */
export default function TheRecordPage() {
  return (
    <div className="py-16 md:py-24 space-y-24 max-w-4xl mx-auto">
      {/* Header Record Intro */}
      <div className="text-center space-y-6">
        <TallyMark size={48} className="mx-auto" />
        <Wordmark size="lg" />
        <h1 className="font-display text-4xl sm:text-6xl text-brand-bone tracking-tight font-normal">
          THE RECORD
        </h1>
        <p className="font-mono text-xs text-brand-bone-dim tracking-[0.2em] uppercase">
          [ UNCLOSED ARCHIVAL TIMELINE SKELETON ]
        </p>
      </div>

      {/* Vignettes Preview Skeleton */}
      <div className="space-y-16 border-l border-brand-hairline pl-6 sm:pl-10 ml-4 sm:ml-8">
        {LORE_VIGNETTES.slice(0, 3).map((vignette) => (
          <div key={vignette.id} className="space-y-4 relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-brand-surface border border-brand-hairline group-hover:border-brand-crimson group-hover:bg-brand-crimson transition-colors" />

            <div className="font-mono text-[10px] text-brand-crimson tracking-[0.2em]">
              [{vignette.archiveLabel}]
            </div>
            <h2 className="font-display text-2xl text-brand-bone">
              {vignette.number} — {vignette.title}
            </h2>
            <div className="space-y-2 text-sm text-brand-bone-muted font-sans leading-relaxed">
              {vignette.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
