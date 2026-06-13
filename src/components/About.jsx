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
                Shipped an AI billing-reconciliation SaaS that collapsed days of manual, line-by-line auditing into near-instant, explainable reconciliation — plus a real-estate lead-intelligence platform with lead scoring and an AI voice agent for automated outreach. Python &amp; Next.js, owning both product and AI infrastructure.
              </TimelineItem>
            </Reveal>
            <Reveal delay={0.1}>
              <TimelineItem company="Seller Setu" role="Software Engineer" period="Oct 2025 – Mar 2026">
                Re-architected the core API gateway from Django to Golang — cutting p99 latency and unlocking concurrent request handling that kept the seller platform stable at peak — with rate limiting and RabbitMQ across distributed services on AWS.
              </TimelineItem>
            </Reveal>
            <Reveal delay={0.15}>
              <TimelineItem company="Resollect" role="Software Engineer · SDE-1" period="Jun 2025 – Sep 2025" last>
                Built a lawyer-operations platform whose case data sat behind a confidential server we couldn't reach directly — designed a webhook ingestion pipeline to securely pull it in, unblocking the integration the product depended on. Async processing with Django &amp; Celery.
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
