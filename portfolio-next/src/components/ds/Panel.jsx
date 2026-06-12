"use client";
import React from "react";

/**
 * Panel — the core flat-black surface. Crisp hairline border, optional accent
 * border + glow, optional hover lift and pointer tilt.
 */
export function Panel({
  children,
  padding = "26px",
  radius = "var(--radius-lg)",
  border = "hairline",
  glow = false,
  interactive = false,
  tilt = false,
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  const borders = {
    hairline: "var(--border-hairline)",
    soft: "var(--border-soft)",
    green: "var(--border-green)",
    magenta: "var(--border-magenta)",
  };
  const glows = {
    hairline: "var(--shadow-md)",
    soft: "var(--shadow-md)",
    green: "var(--shadow-md), 0 0 34px rgba(31,224,162,.14)",
    magenta: "var(--shadow-md), 0 0 38px rgba(210,76,240,.16)",
  };

  const move = (e) => {
    if (!tilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(1000px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 4).toFixed(2)}deg) translateY(-3px)`;
  };
  const enter = () => { if (interactive && ref.current) ref.current.style.background = "var(--bg-surface-2)"; };
  const leave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    if (interactive) ref.current.style.background = "var(--bg-surface)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseEnter={enter}
      onMouseLeave={leave}
      style={{
        position: "relative",
        padding,
        borderRadius: radius,
        background: "var(--bg-surface)",
        border: `1px solid ${borders[border] || borders.hairline}`,
        boxShadow: glow ? glows[border] || glows.hairline : "var(--shadow-md)",
        transition: "transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        transformStyle: "preserve-3d",
        willChange: tilt ? "transform" : "auto",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
