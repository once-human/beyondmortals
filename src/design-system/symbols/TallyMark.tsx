import React from "react";

interface TallyMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  boneColor?: string;
  crimsonColor?: string;
  showCrimsonBreak?: boolean;
}

/**
 * THE TALLY — Primary / System Mark for Beyond Mortals
 * 
 * Lore: Four strikes carved, a fifth left incomplete in crimson.
 * Represents a record that never closes — the count that won't complete.
 */
export const TallyMark: React.FC<TallyMarkProps> = ({
  size = 32,
  boneColor = "currentColor",
  crimsonColor = "#C81E1E",
  showCrimsonBreak = true,
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
      aria-label="Beyond Mortals Tally Mark"
      role="img"
      {...props}
    >
      {/* Strike 1 */}
      <line
        x1="22"
        y1="20"
        x2="22"
        y2="80"
        stroke={boneColor}
        strokeWidth="4"
        strokeLinecap="square"
      />

      {/* Strike 2 */}
      <line
        x1="38"
        y1="20"
        x2="38"
        y2="80"
        stroke={boneColor}
        strokeWidth="4"
        strokeLinecap="square"
      />

      {/* Strike 3 */}
      <line
        x1="54"
        y1="20"
        x2="54"
        y2="80"
        stroke={boneColor}
        strokeWidth="4"
        strokeLinecap="square"
      />

      {/* Strike 4 */}
      <line
        x1="70"
        y1="20"
        x2="70"
        y2="80"
        stroke={boneColor}
        strokeWidth="4"
        strokeLinecap="square"
      />

      {/* Strike 5 (Incomplete / Broken Crimson Diagonal) */}
      {showCrimsonBreak ? (
        <>
          {/* Main stroke segment */}
          <line
            x1="12"
            y1="76"
            x2="65"
            y2="30"
            stroke={crimsonColor}
            strokeWidth="4.5"
            strokeLinecap="square"
          />
          {/* Intentionally broken gap fragment representing the unclosed count */}
          <line
            x1="73"
            y1="23"
            x2="85"
            y2="13"
            stroke={crimsonColor}
            strokeWidth="4.5"
            strokeLinecap="square"
            strokeDasharray="2 3"
          />
        </>
      ) : (
        <line
          x1="12"
          y1="76"
          x2="84"
          y2="15"
          stroke={boneColor}
          strokeWidth="4"
          strokeLinecap="square"
        />
      )}
    </svg>
  );
};
