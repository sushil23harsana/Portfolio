"use client";
import React from "react";

/**
 * Tag — a skill chip with an optional logo, lights emerald on hover.
 */
export function Tag({ children, logo = null, active = false, style = {}, ...rest }) {
  const enter = (e) => {
    const el = e.currentTarget;
    el.style.borderColor = "var(--border-green)";
    el.style.color = "var(--green)";
    el.style.background = "var(--bg-surface-2)";
  };
  const leave = (e) => {
    const el = e.currentTarget;
    el.style.borderColor = active ? "var(--border-green)" : "var(--border-soft)";
    el.style.color = active ? "var(--green)" : "var(--fg-2)";
    el.style.background = active ? "var(--green-08)" : "var(--bg-surface)";
  };
  return (
    <span
      onMouseEnter={enter}
      onMouseLeave={leave}
      style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        padding: "8px 14px",
        fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 500,
        letterSpacing: "0.04em",
        color: active ? "var(--green)" : "var(--fg-2)",
        background: active ? "var(--green-08)" : "var(--bg-surface)",
        border: `1px solid ${active ? "var(--border-green)" : "var(--border-soft)"}`,
        borderRadius: "var(--radius-sm)", cursor: "default", lineHeight: 1,
        whiteSpace: "nowrap", transition: "all var(--dur-base) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >
      {logo && (
        <img src={logo} alt="" aria-hidden="true" style={{ width: 16, height: 16, objectFit: "contain" }} />
      )}
      {children}
    </span>
  );
}
