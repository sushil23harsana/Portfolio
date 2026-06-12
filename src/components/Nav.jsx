"use client";
import React from "react";
import { Button } from "./ds";

/* Script signature wordmark */
export function Signature({ size = 26, sub = "HARSANA" }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-script)", fontSize: size, color: "var(--green)", lineHeight: 1, transform: "translateY(2px)" }}>Sushil</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: size * 0.42, fontWeight: 600, letterSpacing: "0.22em", color: "var(--fg-2)" }}>{sub}</span>
    </span>
  );
}

/* Top navigation — scroll-spy active item, signature, contact chip */
export function Nav() {
  const [active, setActive] = React.useState("about");

  React.useEffect(() => {
    const ids = ["about", "work"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const link = (id, label) =>
    active === id
      ? <Button key={id} variant="bracket" size="sm" as="a" href={`#${id}`}>{label}</Button>
      : <Button key={id} variant="ghost" size="sm" as="a" href={`#${id}`}>{label}</Button>;

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(14px)", background: "rgba(0,0,0,.6)", borderBottom: "1px solid var(--border-hairline)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "16px clamp(1.25rem,5vw,3rem)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
          <Signature />
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em", color: "var(--fg-3)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-xs)", padding: "3px 8px", width: "fit-content" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 8px var(--green)" }} />
            +91 91060 14404
          </span>
        </div>
        <div className="nav-center" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {link("about", "About Me")}
          {link("work", "Case Studies")}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Button variant="outline" size="sm" as="a" href="/Sushil_Harsana_CV.pdf" target="_blank" rel="noopener" className="nav-cv">Download CV</Button>
          <Button variant="outline" size="sm" dot as="a" href="#contact">Contact</Button>
        </div>
      </div>
    </nav>
  );
}
