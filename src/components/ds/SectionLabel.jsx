"use client";
import React from "react";

/**
 * SectionLabel — small centered mono uppercase label with flanking rules.
 */
export function SectionLabel({ children, rules = true, style = {}, ...rest }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", ...style }} {...rest}>
      {rules && <span style={{ flex: "0 0 56px", height: 1, background: "linear-gradient(90deg, transparent, var(--border-soft))" }} />}
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--fg-3)", whiteSpace: "nowrap" }}>
        {children}
      </span>
      {rules && <span style={{ flex: "0 0 56px", height: 1, background: "linear-gradient(270deg, transparent, var(--border-soft))" }} />}
    </div>
  );
}
