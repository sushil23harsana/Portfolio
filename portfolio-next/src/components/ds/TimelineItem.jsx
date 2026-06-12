"use client";
import React from "react";
import { Badge } from "./Badge.jsx";

/**
 * TimelineItem — one entry in the vertical experience timeline. Flat-black panel
 * beside a rail with a glowing node; the current role lights emerald.
 */
export function TimelineItem({
  company,
  role,
  period,
  current = false,
  children,
  last = false,
  style = {},
  ...rest
}) {
  return (
    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "auto 1fr", gap: "24px", ...style }} {...rest}>
      {/* rail + node */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span style={{
          width: 14, height: 14, borderRadius: "50%",
          background: current ? "var(--green)" : "var(--bg-surface-2)",
          border: current ? "none" : "1.5px solid var(--border-strong)",
          boxShadow: current ? "0 0 0 4px rgba(31,224,162,.12), 0 0 16px var(--green)" : "none",
          marginTop: "8px", flexShrink: 0, zIndex: 1,
        }} />
        {!last && <span style={{ flex: 1, width: 1.5, marginTop: "8px", background: "linear-gradient(180deg, var(--border-strong), transparent)" }} />}
      </div>

      {/* content */}
      <div style={{
        position: "relative", marginBottom: last ? 0 : "30px",
        padding: "22px 24px", borderRadius: "var(--radius-lg)",
        background: "var(--bg-surface)",
        border: `1px solid ${current ? "var(--border-green)" : "var(--border-hairline)"}`,
        boxShadow: current ? "var(--shadow-md), 0 0 30px rgba(31,224,162,.10)" : "var(--shadow-md)",
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "6px" }}>
          <h3 style={{ fontFamily: "var(--font-grotesk)", fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--fg-1)", margin: 0 }}>{company}</h3>
          <Badge variant={current ? "green" : "magenta"} dot={current}>{period}</Badge>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.08em", color: current ? "var(--green)" : "var(--fg-3)", marginBottom: "12px" }}>{role}</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: "14.5px", lineHeight: 1.65, color: "var(--fg-2)" }}>{children}</div>
      </div>
    </div>
  );
}
