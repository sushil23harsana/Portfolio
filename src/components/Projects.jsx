"use client";
import { ProjectCard, SectionHeading } from "./ds";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const GH = "https://github.com/sushil23harsana";

const projects = [
  { index: "01", accent: "magenta", title: "AI Billing Reconciliation", blurb: "A SaaS platform that automates billing reconciliation at scale — with an AI-driven discrepancy engine that detects, classifies and surfaces mismatches that once took manual, line-by-line audits.", tags: ["Python", "Next.js", "GenAI"], links: [{ label: "Altrd AI", href: "#" }] },
  { index: "02", accent: "green", title: "Real-Estate Lead Intelligence", blurb: "A full-fledged real-estate SaaS built around an intelligent lead pipeline that scores and qualifies inbound leads — plus an AI voice agent that automates first-touch outreach and follow-ups.", tags: ["Next.js", "AI Agents", "SaaS"], links: [{ label: "Altrd AI", href: "#" }] },
  { index: "03", accent: "blue", title: "AI Gateway · LLMOps", blurb: "A high-throughput reverse proxy in front of LLM providers, giving teams what they fly blind without: semantic response caching in Redis to cut token spend, per-team cost / latency / token analytics, rate limiting, and automatic multi-provider failover — behind a real-time Next.js dashboard.", tags: ["Go", "Redis", "LLMOps"], links: [{ label: "GitHub", href: GH }] },
  { index: "04", accent: "magenta", title: "BitTorrent Client", blurb: "A peer-to-peer file-sharing client built from scratch in Go — bencode parser, tracker protocol and concurrent, piece-based downloads with SHA-1 integrity checks.", tags: ["Go", "P2P", "Concurrency"], links: [{ label: "GitHub", href: GH }] },
  { index: "05", accent: "green", title: "Personal Finance Manager", blurb: "Backend for a finance-insight system using GenAI-assisted retrieval — LLM-backed summarization and insight generation over user data, built on FastAPI.", tags: ["Python", "FastAPI", "RAG"], links: [{ label: "GitHub", href: GH }] },
];

export function Projects() {
  return (
    <Section id="work" max={1180}>
      <Reveal>
        <SectionHeading eyebrow="Case Studies" title="Selected work" italicWord="work" lead="A few products and systems I have designed, built and shipped — backend, AI infrastructure and full-stack SaaS." />
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "18px", marginTop: "48px" }}>
        {projects.map((p, i) => (
          <Reveal key={p.index} delay={0.05 * i}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
