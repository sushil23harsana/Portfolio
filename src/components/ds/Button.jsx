"use client";
import React from "react";

/* Four corner brackets — the targeting/crosshair motif. */
function Brackets({ color }) {
  const b = { position: "absolute", width: 8, height: 8, border: `1.5px solid ${color}`, pointerEvents: "none" };
  return (
    <>
      <span style={{ ...b, top: -3, left: -3, borderRight: 0, borderBottom: 0 }} />
      <span style={{ ...b, top: -3, right: -3, borderLeft: 0, borderBottom: 0 }} />
      <span style={{ ...b, bottom: -3, left: -3, borderRight: 0, borderTop: 0 }} />
      <span style={{ ...b, bottom: -3, right: -3, borderLeft: 0, borderTop: 0 }} />
    </>
  );
}

/**
 * Button — neo-brutalist, full-black. Mono uppercase label.
 *  · solid · outline (default) · bracket (active-nav) · ghost
 * `dot` adds a trailing green status dot.
 */
export function Button({
  children,
  variant = "outline",
  size = "md",
  dot = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  as = "button",
  href,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "9px 14px", fontSize: "11px", radius: "5px" },
    md: { padding: "13px 20px", fontSize: "12px", radius: "6px" },
    lg: { padding: "17px 28px", fontSize: "13px", radius: "7px" },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    padding: s.padding,
    fontFamily: "var(--font-mono)",
    fontSize: s.fontSize,
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    lineHeight: 1,
    borderRadius: s.radius,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition:
      "transform var(--dur-fast) var(--ease-snappy), box-shadow var(--dur-fast) var(--ease-snappy), border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
  };

  const variants = {
    solid: { color: "var(--green-ink)", background: "var(--green)", border: "1.5px solid var(--green-bright)", boxShadow: "4px 4px 0 0 var(--green-deep)" },
    outline: { color: "var(--fg-2)", background: "var(--bg-surface)", border: "1.5px solid var(--border-soft)", boxShadow: "none" },
    bracket: { color: "var(--green)", background: "var(--bg-surface)", border: "1.5px solid var(--border-green)", boxShadow: "var(--glow-soft-green)" },
    ghost: { color: "var(--fg-3)", background: "transparent", border: "1.5px solid transparent", boxShadow: "none" },
  };
  const v = variants[variant] || variants.outline;

  const enter = (e) => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === "solid") {
      el.style.transform = "translate(2px,2px)";
      el.style.boxShadow = "2px 2px 0 0 var(--green-deep)";
    } else if (variant === "outline") {
      el.style.borderColor = "var(--green)";
      el.style.color = "var(--green)";
      el.style.background = "var(--bg-surface-2)";
    } else if (variant === "bracket") {
      el.style.boxShadow = "var(--glow-green)";
    } else {
      el.style.color = "var(--fg-1)";
    }
  };
  const leave = (e) => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.transform = "translate(0,0)";
    el.style.boxShadow = v.boxShadow;
    el.style.borderColor = v.border.split(" ").slice(2).join(" ");
    el.style.color = v.color;
    el.style.background = v.background;
  };
  const down = (e) => {
    if (!disabled && variant === "solid") {
      e.currentTarget.style.transform = "translate(4px,4px)";
      e.currentTarget.style.boxShadow = "0 0 0 0 var(--green-deep)";
    }
  };
  const up = (e) => {
    if (!disabled && variant === "solid") {
      e.currentTarget.style.transform = "translate(2px,2px)";
      e.currentTarget.style.boxShadow = "2px 2px 0 0 var(--green-deep)";
    }
  };

  const Tag = as === "a" || href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      disabled={Tag === "button" ? disabled : undefined}
      style={{ ...base, ...v, ...style }}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onMouseDown={down}
      onMouseUp={up}
      {...rest}
    >
      {variant === "bracket" && <Brackets color="var(--green)" />}
      {iconLeft}
      {children}
      {iconRight}
      {dot && <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 8px var(--green)", marginLeft: 2 }} />}
    </Tag>
  );
}
