"use client";
import React from "react";

/**
 * Badge — mono uppercase pill. Bordered date/status chip, or a solid filled tag.
 *  variants: neutral · green · magenta · blue · solid
 */
export function Badge({ children, variant = "neutral", dot = false, style = {}, ...rest }) {
  const map = {
    neutral: { color: "var(--fg-3)", bg: "var(--bg-surface-2)", bd: "var(--border-soft)", dotC: "var(--fg-3)", glow: "none" },
    green: { color: "var(--green)", bg: "var(--green-08)", bd: "var(--border-green)", dotC: "var(--green)", glow: "0 0 18px rgba(31,224,162,.18)" },
    magenta: { color: "var(--magenta-soft)", bg: "var(--magenta-10)", bd: "var(--border-magenta)", dotC: "var(--magenta)", glow: "0 0 18px rgba(210,76,240,.20)" },
    blue: { color: "var(--blue-soft)", bg: "var(--blue-12)", bd: "rgba(77,124,254,.4)", dotC: "var(--blue)", glow: "none" },
    solid: { color: "var(--green-ink)", bg: "var(--green)", bd: "var(--green-bright)", dotC: "var(--green-ink)", glow: "0 0 22px rgba(31,224,162,.3)" },
  };
  const c = map[variant] || map.neutral;
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: "7px",
        padding: "5px 11px",
        fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 600,
        letterSpacing: "0.14em", textTransform: "uppercase", lineHeight: 1,
        color: c.color, background: c.bg,
        border: `1px solid ${c.bd}`, borderRadius: "var(--radius-sm)",
        boxShadow: c.glow, whiteSpace: "nowrap", ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.dotC, boxShadow: `0 0 8px ${c.dotC}` }} />}
      {children}
    </span>
  );
}
