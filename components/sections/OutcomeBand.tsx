const outcomes = [
  {
    tag: "Less manual work",
    title: "Automate the repetitive steps",
    body: "Automate repetitive steps that consume valuable time, so your team can focus on the work that actually grows the business.",
    tone: "sec-alt",
  },
  {
    tag: "Connected systems",
    title: "Make information move on its own",
    body: "Make information move between platforms automatically, removing duplicate entry and the gaps where things get missed.",
    tone: "tone-mint",
  },
  {
    tag: "Built to scale",
    title: "Infrastructure that holds up",
    body: "Create infrastructure that does not collapse as volume grows, so the systems you build today still work next year.",
    tone: "tone-lilac",
  },
] as const;

export function OutcomeBand() {
  return (
    <section className="sec">
      <div className="wrap intro-copy">
        <div className="sec-tag sec-tag-plain sec-tag-accent" style={{ justifyContent: "center" }}>
          Why it matters
        </div>
        <h2>
          Better systems give your team <span className="em">more time to grow the business</span>
        </h2>
        <p className="lead">
          The goal is not more software for its own sake. It is less manual work, fewer disconnected
          tools and systems that keep working as the business gets bigger.
        </p>
      </div>
      <div className="wrap">
        <div className="outcome-grid reveal">
          {outcomes.map((outcome) => (
            <article className={`outcome-block ${outcome.tone}`} key={outcome.title}>
              <span className="mono">{outcome.tag}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
