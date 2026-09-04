import React from "react";

interface MarkedFaceProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  accentColor?: string;
}

/**
 * THE MARKED FACE — Reserve Mark for Beyond Mortals
 * 
 * Lore: A minimal, stark face contour with a third eye slightly out of place.
 * Reads as "still human, but something's altered." Used sparingly on hero pieces.
 */
export const MarkedFace: React.FC<MarkedFaceProps> = ({
  size = 32,
  color = "currentColor",
  accentColor = "#C81E1E",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Beyond Mortals Marked Face Symbol"
      role="img"
      {...props}
    >
      {/* Outer stark oval face silhouette */}
      <ellipse
        cx="50"
        cy="52"
        rx="28"
        ry="36"
        stroke={color}
        strokeWidth="3.5"
        fill="none"
      />
      {/* Left Eye */}
      <circle cx="40" cy="46" r="3" fill={color} />
      {/* Right Eye */}
      <circle cx="60" cy="46" r="3" fill={color} />
      {/* Offset Third Eye (Crimson) */}
      <circle cx="53" cy="32" r="2.5" fill={accentColor} />
      {/* Subtle Mouth Line */}
      <line
        x1="44"
        y1="68"
        x2="56"
        y2="68"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="square"
      />
    </svg>
  );
};
