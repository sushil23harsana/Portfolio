"use client";
import React from "react";

/**
 * StampPhoto — a portrait framed like a postage stamp: perforated dotted edge,
 * optional corner tag, a terminal caption chip, and scattered sparkles.
 */
export function StampPhoto({
  src,
  alt = "",
  tag,
  caption,
  footer,
  width = 360,
  ratio = "3 / 4",
  sparkles = true,
  style = {},
  ...rest
}) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", gap: "16px", width, ...style }} {...rest}>
      <div style={{
        position: "relative",
        padding: "14px",
        background: "var(--bg-surface)",
        borderRadius: "var(--radius-xs)",
        boxShadow: "0 0 0 6px var(--bg-void), 0 0 0 7px var(--border-soft), var(--shadow-lg)",
      }}>
        {/* perforation dots */}
        <span aria-hidden="true" style={{
          position: "absolute", inset: "-1px", borderRadius: "var(--radius-xs)",
          background: "radial-gradient(circle, var(--bg-void) 2.4px, transparent 2.6px) 0 0 / 13px 13px",
          maskImage: "linear-gradient(#000,#000)",
          pointerEvents: "none", mixBlendMode: "normal",
        }} />
        <div style={{ position: "relative", width: "100%", aspectRatio: ratio, borderRadius: "2px", overflow: "hidden", background: "var(--bg-surface-3)" }}>
          {src
            ? <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-4)" }}>Portrait</div>}

          {tag && (
            <span style={{ position: "absolute", top: 12, left: 12, whiteSpace: "pre-line", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--green-ink)", background: "var(--green)", padding: "6px 9px", borderRadius: "var(--radius-xs)", boxShadow: "0 0 18px rgba(31,224,162,.35)", lineHeight: 1.1, textAlign: "center" }}>
              {tag}
            </span>
          )}
          {caption && (
            <span style={{ position: "absolute", bottom: 12, right: 12, display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", color: "var(--green)", background: "rgba(0,0,0,.72)", border: "1px solid var(--border-green)", padding: "5px 8px", borderRadius: "var(--radius-xs)", backdropFilter: "blur(4px)" }}>
              <span style={{ color: "var(--green-bright)" }}>▸</span>{caption}
            </span>
          )}

          {sparkles && (
            <>
              <Spark x="18%" y="26%" s={16} d="0s" />
              <Spark x="78%" y="16%" s={11} d="1.1s" />
              <Spark x="64%" y="62%" s={20} d="0.5s" />
              <Spark x="30%" y="80%" s={13} d="1.6s" />
            </>
          )}
        </div>
      </div>
      {footer && (
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-3)", textAlign: "center" }}>
          {footer}
        </div>
      )}
    </div>
  );
}

function Spark({ x, y, s, d }) {
  return (
    <svg viewBox="0 0 24 24" width={s} height={s} style={{ position: "absolute", left: x, top: y, animation: `nb-twinkle 3.4s ${d} var(--ease-in-out) infinite`, filter: "drop-shadow(0 0 6px rgba(255,255,255,.5))" }} aria-hidden="true">
      <path d="M12 0 C12.6 6.4 17.6 11.4 24 12 C17.6 12.6 12.6 17.6 12 24 C11.4 17.6 6.4 12.6 0 12 C6.4 11.4 11.4 6.4 12 0 Z" fill="#fff" />
    </svg>
  );
}
