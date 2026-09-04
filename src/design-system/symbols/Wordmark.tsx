import React from "react";

interface WordmarkProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  subtle?: boolean;
}

/**
 * BEYOND MORTALS — Wordmark Component
 * Clean, high-fashion typographic wordmark stamped in documentary style.
 */
export const Wordmark: React.FC<WordmarkProps> = ({
  size = "md",
  subtle = false,
  className = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "text-xs tracking-[0.25em]",
    md: "text-sm tracking-[0.3em]",
    lg: "text-lg tracking-[0.35em]",
    xl: "text-2xl tracking-[0.4em]",
  };

  return (
    <div
      className={`font-mono uppercase select-none ${sizeClasses[size]} ${
        subtle ? "text-brand-bone-muted" : "text-brand-bone"
      } ${className}`}
      aria-label="Beyond Mortals"
      {...props}
    >
      <span className="font-semibold">BEYOND</span>
      <span className="inline-block mx-2 text-brand-crimson font-light">•</span>
      <span className="font-light opacity-90">MORTALS</span>
    </div>
  );
};
