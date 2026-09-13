const principles = [
  {
    title: "Built around the business",
    body: "Technology shaped around the way your team actually works.",
    tone: "mint",
    icon: "target",
  },
  {
    title: "Execution first",
    body: "We design, build and ship rather than stopping at recommendations.",
    tone: "lilac",
    icon: "bolt",
  },
  {
    title: "Long-term partner",
    body: "Systems designed to evolve as your operation grows.",
    tone: "sky",
    icon: "loop",
  },
] as const;

function PrincipleIcon({ icon }: { icon: (typeof principles)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {icon === "target" ? (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
        </>
      ) : null}
      {icon === "bolt" ? <path d="M13 2 4 14h7l-1 8 9-12h-7z" /> : null}
      {icon === "loop" ? (
        <>
          <path d="M3 12a9 9 0 0 1 15.3-6.4L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-15.3 6.4L3 16" />
          <path d="M3 21v-5h5" />
        </>
      ) : null}
    </svg>
  );
}

export function AboutIntro() {
  return (
    <section className="sec">
      <div className="wrap intro-copy">
        <div className="sec-tag" style={{ justifyContent: "center" }}>
          About 23Labs
        </div>
        <h2>
          23Labs builds the software, automation and systems businesses need once spreadsheets,
          disconnected tools and manual processes start getting in the way.
        </h2>
      </div>
      <div className="wrap">
        <div className="principle-row reveal">
          {principles.map((principle) => (
            <div className="principle" key={principle.title}>
              <div className={`principle-ico tone-${principle.tone}`}>
                <PrincipleIcon icon={principle.icon} />
              </div>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
