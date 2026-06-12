"use client";
import React from "react";
import { Sparkle } from "./Sparkle.jsx";

/**
 * TechMarquee — the gliding tech-stack conveyor from the hero. Chips glide
 * horizontally forever, separated by sparkles. Pauses on hover; edges fade.
 */
export function TechMarquee({
  items = [],
  speed = 38,
  direction = "left",
  sparkleColor = "var(--green)",
  style = {},
  ...rest
}) {
  const Row = ({ ariaHidden }) => (
    <div aria-hidden={ariaHidden} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "0 30px" }}>
            {it.logo && (
              <span style={{ width: 34, height: 34, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-sm)", background: "var(--bg-surface-2)", border: "1px solid var(--border-soft)", flexShrink: 0 }}>
                <img src={it.logo} alt="" aria-hidden="true" style={{ width: 19, height: 19, objectFit: "contain" }} />
              </span>
            )}
            {it.name && (
              <span style={{ fontFamily: "var(--font-grotesk)", fontWeight: 600, fontSize: "18px", color: "var(--fg-1)", whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>
                {it.name}
              </span>
            )}
            {it.label && (
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)", padding: "5px 10px", border: "1px solid var(--border-soft)", borderRadius: "var(--radius-xs)", whiteSpace: "nowrap" }}>
                {it.label}
              </span>
            )}
          </div>
          <Sparkle size={14} color={sparkleColor} />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div
      style={{
        position: "relative", overflow: "hidden",
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-soft)",
        borderBottom: "1px solid var(--border-soft)",
        padding: "20px 0",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent)",
        maskImage: "linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent)",
        ...style,
      }}
      {...rest}
    >
      <div
        onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = "paused"; }}
        onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = "running"; }}
        style={{
          display: "flex", width: "max-content",
          animation: `nb-marquee ${speed}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        <Row ariaHidden={false} />
        <Row ariaHidden={true} />
      </div>
    </div>
  );
}
