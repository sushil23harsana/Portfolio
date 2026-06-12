"use client";
import React from "react";

/**
 * SectionHeading — editorial opener. Mono eyebrow + big Instrument-Serif title
 * with optional italic-emphasis word.
 */
export function SectionHeading({
  eyebrow,
  title,
  italicWord,
  accentItalic = true,
  lead,
  align = "left",
  style = {},
  ...rest
}) {
  let titleNode = title;
  if (italicWord && typeof title === "string" && title.includes(italicWord)) {
    const [before, after] = title.split(italicWord);
    titleNode = (
      <>
        {before}
        <em style={{ fontStyle: "italic", color: accentItalic ? "var(--green)" : "var(--fg-1)" }}>{italicWord}</em>
        {after}
      </>
    );
  }
  return (
    <div
      style={{
        display: "flex", flexDirection: "column", gap: "18px",
        textAlign: align, alignItems: align === "center" ? "center" : "flex-start",
        maxWidth: align === "center" ? "760px" : "none",
        margin: align === "center" ? "0 auto" : "0",
        ...style,
      }}
      {...rest}
    >
      {eyebrow && (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--fg-3)" }}>
          <span style={{ width: 24, height: 1, background: "var(--green)" }} />
          {eyebrow}
        </span>
      )}
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", fontWeight: 400, letterSpacing: "var(--ls-display)", lineHeight: 1.0, color: "var(--fg-1)", margin: 0 }}>
        {titleNode}
      </h2>
      {lead && (
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lead)", color: "var(--fg-3)", lineHeight: 1.6, maxWidth: "620px", margin: 0 }}>{lead}</p>
      )}
    </div>
  );
}
