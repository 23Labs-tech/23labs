const principles = [
  {
    title: "Practical over flashy",
    body: "Every solution has to earn its place by saving time, reducing friction or creating measurable business value.",
  },
  {
    title: "Built to be used",
    body: "The best systems are the ones your team actually wants to use every day.",
  },
  {
    title: "Partners, not vendors",
    body: "We work closely with clients to build solutions that fit how their business actually operates.",
  },
];

export function HowWeThink() {
  return (
    <section className="think-sec sec">
      <div className="wrap think-intro reveal">
        <div className="sec-tag" style={{ justifyContent: "center" }}>
          How we think
        </div>
        <h2 className="think-title">
          We build software that works for <span className="em">real businesses</span>
        </h2>
        <p className="think-lead">
          We focus on practical outcomes, intuitive experiences and long-term partnerships. Everything we
          build should create measurable value for the business using it.
        </p>
      </div>
      <div className="wrap">
        <div className="think-grid reveal">
          {principles.map((item) => (
            <div className="think-item" key={item.title}>
              <div className="think-divider" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
