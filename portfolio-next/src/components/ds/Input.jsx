"use client";
import React from "react";

/**
 * Input — flat-black field with a mono uppercase label and emerald focus.
 * Single-line or textarea.
 */
export function Input({
  label, type = "text", placeholder = "", value, defaultValue, onChange,
  multiline = false, rows = 4, name, required = false, style = {}, ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const field = {
    width: "100%", padding: "13px 15px",
    fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--fg-1)",
    background: focused ? "var(--bg-surface-2)" : "var(--bg-surface)",
    border: `1px solid ${focused ? "var(--green)" : "var(--border-soft)"}`,
    borderRadius: "var(--radius-sm)", outline: "none",
    boxShadow: focused ? "var(--focus-ring)" : "none",
    transition: "all var(--dur-base) var(--ease-out)",
    resize: multiline ? "vertical" : "none", boxSizing: "border-box",
  };
  const common = {
    placeholder, value, defaultValue, onChange, name, required,
    onFocus: () => setFocused(true), onBlur: () => setFocused(false),
    style: field, ...rest,
  };
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "8px", ...style }}>
      {label && (
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: focused ? "var(--green)" : "var(--fg-3)", transition: "color var(--dur-base) var(--ease-out)" }}>
          {label}
        </span>
      )}
      {multiline ? <textarea rows={rows} {...common} /> : <input type={type} {...common} />}
    </label>
  );
}
