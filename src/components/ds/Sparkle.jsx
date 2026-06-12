"use client";
import React from "react";

/**
 * Sparkle — the 4-point star motif used as marquee dividers and scattered
 * decorative accents. Twinkles unless static.
 */
export function Sparkle({ size = 16, color = "var(--green)", twinkle = true, style = {}, ...rest }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block", width: size, height: size, lineHeight: 0,
        animation: twinkle ? "nb-twinkle 3.2s var(--ease-in-out) infinite" : "none",
        ...style,
      }}
      {...rest}
    >
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path
          d="M12 0 C12.6 6.4 17.6 11.4 24 12 C17.6 12.6 12.6 17.6 12 24 C11.4 17.6 6.4 12.6 0 12 C6.4 11.4 11.4 6.4 12 0 Z"
          fill={color}
        />
      </svg>
    </span>
  );
}
