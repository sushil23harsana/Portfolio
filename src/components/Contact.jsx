"use client";
import React from "react";
import { Button, Panel, Input, SectionHeading } from "./ds";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const EMAIL = "sushil23harsana@gmail.com";

export function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio — message from ${form.name || "someone"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" max={1180}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "center" }} className="contact-grid">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Let us build something that scales" italicWord="scales" lead="Open to backend / AI engineering roles and collaborations. The fastest way to reach me is email." />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "30px" }}>
            <Button variant="solid" size="md" as="a" href={`mailto:${EMAIL}`}>{EMAIL}</Button>
            <Button variant="outline" size="md" as="a" href="https://github.com/sushil23harsana" target="_blank" rel="noopener">GitHub</Button>
            <Button variant="outline" size="md" as="a" href="https://www.linkedin.com/in/sushil-harsana-2b604b258" target="_blank" rel="noopener">LinkedIn</Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Panel padding="30px" border="soft">
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <Input label="Name" placeholder="Your name" value={form.name} onChange={set("name")} required />
              <Input label="Email" type="email" placeholder="you@domain.com" value={form.email} onChange={set("email")} />
              <Input label="Message" multiline rows={4} placeholder="Tell me about the role or project…" value={form.message} onChange={set("message")} required />
              <Button variant="solid" size="md" style={{ alignSelf: "flex-start" }}>Send Message</Button>
            </form>
          </Panel>
        </Reveal>
      </div>
    </Section>
  );
}
