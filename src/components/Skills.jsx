"use client";
import { Tag, SectionHeading } from "./ds";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const dev = (s) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s}.svg`;

const groups = [
  { label: "Languages", items: [["Golang", "go/go-original"], ["Python", "python/python-original"], ["TypeScript", "typescript/typescript-original"], ["JavaScript", "javascript/javascript-original"], ["SQL", "postgresql/postgresql-original"]] },
  { label: "Backend & Infra", items: [["FastAPI", "fastapi/fastapi-original"], ["Django", "django/django-plain"], ["Node.js", "nodejs/nodejs-original"], ["Docker", "docker/docker-original"], ["RabbitMQ", "rabbitmq/rabbitmq-original"], ["Redis", "redis/redis-original"], ["AWS", "amazonwebservices/amazonwebservices-original-wordmark"], ["Linux", "linux/linux-original"]] },
  { label: "AI & Data", items: [["LangChain", null], ["RAG", null], ["Generative AI", null], ["PostgreSQL", "postgresql/postgresql-original"], ["MySQL", "mysql/mysql-original"], ["MongoDB", "mongodb/mongodb-original"], ["Next.js", "nextjs/nextjs-original"]] },
];

export function Skills() {
  return (
    <Section id="skills" max={1180}>
      <Reveal>
        <SectionHeading eyebrow="Toolkit" title="What I build with" italicWord="build" />
      </Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: "30px", marginTop: "44px" }}>
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={0.05 * i}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "20px", alignItems: "start" }} className="skill-row">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)", paddingTop: "8px" }}>{g.label}</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {g.items.map(([name, ic]) => <Tag key={name} logo={ic ? dev(ic) : null}>{name}</Tag>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
