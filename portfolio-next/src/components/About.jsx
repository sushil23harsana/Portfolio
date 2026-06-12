"use client";
import { StampPhoto, TimelineItem, StatCard, SectionHeading, SectionLabel } from "./ds";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" max={1180}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(300px, 380px) 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "start" }} className="about-grid">
        <Reveal>
          <StampPhoto
            src="/portrait.png"
            alt="Sushil Harsana"
            tag={"AI\nSaaS"}
            caption="ALTRD_AI"
            footer="Sushil Harsana · Engineer"
            width={360}
          />
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel rules={false} style={{ justifyContent: "flex-start", marginBottom: "18px" }}>// Signed for verification</SectionLabel>
            <SectionHeading eyebrow="Experience" title="Systems I have shipped" italicWord="shipped" />
          </Reveal>

          <div style={{ marginTop: "40px" }}>
            <Reveal delay={0.05}>
              <TimelineItem company="Altrd AI" role="Software Developer" period="Apr 2026 – Present" current>
                Building AI-native SaaS products end-to-end with Python &amp; Next.js — an AI billing-reconciliation platform with automated discrepancy detection, and a real-estate lead-intelligence platform with lead scoring and an AI voice agent.
              </TimelineItem>
            </Reveal>
            <Reveal delay={0.1}>
              <TimelineItem company="Seller Setu" role="Software Engineer" period="Oct 2025 – Mar 2026">
                Built and optimized Golang backend services and RESTful APIs — sharper request validation, error handling and response consistency — deployed and managed on AWS.
              </TimelineItem>
            </Reveal>
            <Reveal delay={0.15}>
              <TimelineItem company="Resollect" role="Software Engineer · SDE-1" period="Jun 2025 – Sep 2025">
                Architected core backend modules for a lawyer-operations platform using Django &amp; Celery, with asynchronous task processing for background jobs and third-party integrations.
              </TimelineItem>
            </Reveal>
            <Reveal delay={0.2}>
              <TimelineItem company="Seller Setu" role="Software Engineer · Intern" period="Mar 2025 – May 2025" last>
                Migrated the core API gateway from Django to Golang and added rate limiting with RabbitMQ messaging — cutting latency and unlocking concurrent request handling under high-traffic load.
              </TimelineItem>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))", gap: "12px", marginTop: "8px" }}>
              <StatCard figure="2" label="SaaS products" sublabel="shipped at Altrd AI" accent="green" />
              <StatCard figure="3" label="Companies" sublabel="backend & AI" accent="magenta" />
              <StatCard figure="300+" label="Concurrent peers" sublabel="BitTorrent client" accent="blue" />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
