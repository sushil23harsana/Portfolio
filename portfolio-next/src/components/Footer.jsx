"use client";
import { Sparkle } from "./ds";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-hairline)", padding: "48px clamp(1.25rem,5vw,3rem)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ fontFamily: "var(--font-script)", fontSize: "34px", color: "var(--green)", lineHeight: 1 }}>Sushil Harsana</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--fg-4)" }}>// Engineered with logic &amp; craft</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Sparkle size={14} color="var(--green)" />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", color: "var(--fg-4)" }}>© 2026 · All systems operational</span>
        </div>
      </div>
    </footer>
  );
}
