"use client";
import React from "react";

/**
 * StatCard — a single metric: big figure + mono label.
 */
export function StatCard({ figure, label, sublabel, accent = "green", icon = null, style = {}, ...rest }) {
  const colors = { green: "var(--green)", magenta: "var(--magenta)", blue: "var(--blue)" };
  const c = colors[accent] || colors.green;
  return (
    <div
      style={{
        display: "flex", flexDirection: "column", gap: "6px",
        padding: "22px 24px", borderRadius: "var(--radius-md)",
        background: "var(--bg-surface)", border: "1px solid var(--border-hairline)",
        boxShadow: "var(--shadow-sm)", ...style,
      }}
      {...rest}
    >
      {icon && <div style={{ color: c, marginBottom: "4px" }}>{icon}</div>}
      <div style={{ fontFamily: "var(--font-grotesk)", fontSize: "40px", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: c }}>{figure}</div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-2)", marginTop: "4px" }}>{label}</div>
      {sublabel && <div style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--fg-3)" }}>{sublabel}</div>}
    </div>
  );
}
