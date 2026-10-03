const principles = [
  {
    title: "Practical over flashy",
    body: "Every solution has to earn its place by saving time, reducing friction or creating measurable business value.",
    icon: "practical",
  },
  {
    title: "Built to be used",
    body: "The best systems are the ones your team actually wants to use every day.",
    icon: "usable",
  },
  {
    title: "Partners, not vendors",
    body: "We work closely with clients to build solutions that fit how their business actually operates.",
    icon: "partners",
  },
] as const;

function ValueIcon({ icon }: { icon: (typeof principles)[number]["icon"] }) {
  return (
    <svg
      className="think-icon"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon === "practical" ? (
        <>
          <path d="M3 17 9 11 13 15 21 7" />
          <path d="M21 13V7h-6" />
        </>
      ) : null}
      {icon === "usable" ? (
        <>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </>
      ) : null}
      {icon === "partners" ? (
        <>
          <circle cx="8.5" cy="10" r="3.5" />
          <circle cx="16" cy="9" r="3" />
          <path d="M2.5 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M16.5 13.5c2.6 0.4 4 2.4 4 6.5" />
        </>
      ) : null}
    </svg>
  );
}

export function HowWeThink() {
  return (
    <section className="think-sec sec">
      <div className="wrap">
        <div className="think-intro reveal">
          <div className="sec-tag">How we think</div>
          <h2 className="think-title">
            We build software that works for <span className="em">real businesses</span>
          </h2>
          <p className="think-lead">
            We focus on practical outcomes, intuitive experiences and long-term partnerships. Everything we
            build should create measurable value for the business using it.
          </p>
        </div>
        <div className="think-grid reveal">
          {principles.map((item) => (
            <div className="think-item" key={item.title}>
              <ValueIcon icon={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
