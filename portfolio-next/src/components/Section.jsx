/**
 * Section — consistent vertical rhythm + max width shell.
 */
export function Section({ id, children, pad = "clamp(5rem,11vh,9rem)", max = 1180, style = {} }) {
  return (
    <section id={id} style={{ padding: `${pad} clamp(1.25rem,5vw,3rem)`, ...style }}>
      <div style={{ maxWidth: max, margin: "0 auto" }}>{children}</div>
    </section>
  );
}
