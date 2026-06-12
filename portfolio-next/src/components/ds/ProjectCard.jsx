"use client";
import React from "react";

/**
 * ProjectCard — featured project tile. Flat-black panel with a lit accent edge,
 * pointer tilt, a two-digit mono index, tech chips, and a links footer that
 * reveals on hover.
 */
export function ProjectCard({
  index = "01",
  title,
  blurb,
  tags = [],
  links = [],
  accent = "magenta",
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  const [hover, setHover] = React.useState(false);
  const accents = {
    green: { c: "var(--green)", bd: "var(--border-green)", glow: "0 0 44px rgba(31,224,162,.16)" },
    magenta: { c: "var(--magenta)", bd: "var(--border-magenta)", glow: "0 0 48px rgba(210,76,240,.18)" },
    blue: { c: "var(--blue)", bd: "rgba(77,124,254,.45)", glow: "0 0 44px rgba(77,124,254,.16)" },
  };
  const a = accents[accent] || accents.magenta;

  const move = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(1100px) rotateX(${(-py * 3.5).toFixed(2)}deg) rotateY(${(px * 3.5).toFixed(2)}deg) translateY(-4px)`;
  };
  const leave = () => {
    setHover(false);
    if (ref.current) ref.current.style.transform = "perspective(1100px) rotateX(0) rotateY(0) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={leave}
      style={{
        position: "relative", display: "flex", flexDirection: "column",
        padding: "26px", minHeight: "230px", borderRadius: "var(--radius-lg)",
        background: hover ? "var(--bg-surface-2)" : "var(--bg-surface)",
        border: `1px solid ${hover ? a.bd : "var(--border-hairline)"}`,
        boxShadow: hover ? `var(--shadow-lg), ${a.glow}` : "var(--shadow-md)",
        transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
        transformStyle: "preserve-3d", cursor: "default",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "14px", marginBottom: "16px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: a.c }}>{index}</span>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: a.c, boxShadow: `0 0 10px ${a.c}`, opacity: hover ? 1 : 0.5, transition: "opacity var(--dur-base)" }} />
      </div>

      <h3 style={{ fontFamily: "var(--font-grotesk)", fontSize: "22px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--fg-1)", margin: "0 0 10px" }}>{title}</h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "14.5px", lineHeight: 1.6, color: "var(--fg-2)", margin: 0, flex: 1 }}>{blurb}</p>

      {tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "18px" }}>
          {tags.map((t, i) => (
            <span key={i} style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-3)", padding: "4px 9px", border: "1px solid var(--border-soft)", borderRadius: "var(--radius-xs)" }}>{t}</span>
          ))}
        </div>
      )}

      {links.length > 0 && (
        <div style={{ display: "flex", gap: "16px", marginTop: "18px", paddingTop: "16px", borderTop: "1px solid var(--border-hairline)", maxHeight: hover ? "40px" : "0", opacity: hover ? 1 : 0, overflow: "hidden", transition: "max-height var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)" }}>
          {links.map((l, i) => (
            <a key={i} href={l.href} target={l.href && l.href.startsWith("http") ? "_blank" : undefined} rel="noopener" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: a.c }}>{l.label} ↗</a>
          ))}
        </div>
      )}
    </div>
  );
}
