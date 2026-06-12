"use client";
import { Button, TechMarquee } from "./ds";
import { Reveal } from "./Reveal";

const dev = (s) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s}.svg`;

export function Hero() {
  return (
    <header style={{ position: "relative", overflow: "hidden" }}>
      {/* faint top-center green glow + corner magenta */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "var(--bg-glow-green)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "var(--bg-glow-corner)", pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "clamp(4rem,11vh,8rem) clamp(1.25rem,5vw,3rem) clamp(2.5rem,6vh,4rem)" }}>
        <Reveal>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: "28px" }}>
            <span style={{ width: 24, height: 1, background: "var(--green)" }} />
            Software Developer · Backend &amp; Generative AI
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "var(--text-display)", lineHeight: 0.98, letterSpacing: "-0.01em", color: "var(--fg-1)", margin: 0, maxWidth: "16ch" }}>
            Engineered by Logic,<br />
            <em style={{ fontStyle: "italic", color: "var(--green)" }}>Scaled</em> by Craft
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lead)", lineHeight: 1.6, color: "var(--fg-2)", maxWidth: "54ch", marginTop: "28px" }}>
            Product-minded engineer building full-fledged SaaS products end-to-end — owning the backend architecture, distributed systems, and the Generative-AI infrastructure behind them.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "36px" }}>
            <Button variant="solid" size="lg" as="a" href="#work">View Case Studies</Button>
            <Button variant="outline" size="lg" as="a" href="#contact">Get in Touch</Button>
          </div>
        </Reveal>
      </div>

      {/* THE gliding tech-stack conveyor */}
      <Reveal delay={0.3}>
        <TechMarquee
          speed={40}
          items={[
            { name: "Golang", label: "Backend", logo: dev("go/go-original") },
            { name: "Python", label: "AI / ML", logo: dev("python/python-original") },
            { name: "Next.js", label: "Product", logo: dev("nextjs/nextjs-original") },
            { name: "FastAPI", label: "AI Platform", logo: dev("fastapi/fastapi-original") },
            { label: "Distributed Systems" },
            { name: "Django", label: "Backend", logo: dev("django/django-plain") },
            { name: "PostgreSQL", label: "Database", logo: dev("postgresql/postgresql-original") },
            { name: "Redis", label: "Cache", logo: dev("redis/redis-original") },
            { name: "RabbitMQ", label: "Messaging", logo: dev("rabbitmq/rabbitmq-original") },
            { name: "Docker", logo: dev("docker/docker-original") },
            { name: "AWS", label: "Cloud", logo: dev("amazonwebservices/amazonwebservices-original-wordmark") },
            { label: "Generative AI" },
          ]}
        />
      </Reveal>
    </header>
  );
}
