"use client";
import { Panel, Badge, SectionLabel } from "./ds";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const items = [
  { d: "B.Tech — Computer Science", s: "Graphic Era University, Dehradun · GPA 7.6 / 10", y: "2021 – 2025" },
  { d: "Tata Crucible Campus Quiz", s: "Cluster Level Finalist among thousands of participants", y: "2024" },
  { d: "Tech Team Lead — Designovation Hub", s: "Led tech ops & organized hackathons for 300+ students", y: "2023 – 2024" },
];

export function Education() {
  return (
    <Section id="education" max={1180}>
      <Reveal>
        <SectionLabel style={{ marginBottom: "44px" }}>Education &amp; Recognition</SectionLabel>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: "18px" }}>
        {items.map((it, i) => (
          <Reveal key={i} delay={0.06 * i}>
            <Panel padding="28px 26px" style={{ height: "100%" }}>
              <div style={{ width: 44, height: 44, borderRadius: "var(--radius-sm)", border: "1px solid var(--border-soft)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: "var(--green)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></svg>
              </div>
              <Badge variant="neutral" style={{ marginBottom: "14px" }}>{it.y}</Badge>
              <h3 style={{ fontFamily: "var(--font-grotesk)", fontSize: "19px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--fg-1)", margin: "0 0 6px" }}>{it.d}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--fg-3)", margin: 0 }}>{it.s}</p>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
