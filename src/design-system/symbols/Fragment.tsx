import React from "react";

interface FragmentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  accentColor?: string;
}

/**
 * THE FRAGMENT — Secondary Mark for Beyond Mortals
 * 
 * Lore: An irregular, jagged shard shape.
 * "There are records. There are objects. There are fragments of writing."
 * Represents physical evidence recovered from unrecorded history.
 */
export const Fragment: React.FC<FragmentProps> = ({
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
      aria-label="Beyond Mortals Fragment Mark"
      role="img"
      {...props}
    >
      {/* Irregular Shard Geometry */}
      <path
        d="M 50 12 L 82 34 L 75 78 L 48 88 L 18 64 L 28 30 Z"
        stroke={color}
        strokeWidth="3.5"
        strokeLinejoin="bevel"
        fill="rgba(230, 228, 221, 0.03)"
      />
      {/* Fractured core strike */}
      <path
        d="M 38 32 L 52 50 L 46 72"
        stroke={accentColor}
        strokeWidth="2.5"
        strokeLinecap="square"
      />
    </svg>
  );
};
