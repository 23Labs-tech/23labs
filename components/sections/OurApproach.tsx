import { SectionHeading } from "@/components/ui/SectionHeading";

const approachItems = [
  {
    title: "Practical over flashy",
    body: "Every solution has to earn its place by saving time or making money.",
    icon: "practical",
  },
  {
    title: "Built to be used",
    body: "The best systems are the ones your team actually wants to use every day.",
    icon: "usable",
  },
  {
    title: "Partners, not vendors",
    body: "We work closely with clients to build solutions that fit the way their business actually operates.",
    icon: "partners",
  },
] as const;

function ApproachIcon({ icon }: { icon: (typeof approachItems)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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

export function OurApproach() {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHeading
          eyebrow="Our approach"
          title="We build software that works for "
          highlight="real business"
          body="At 23Labs, we focus on practical outcomes, intuitive experiences and long-term partnerships. Everything we build is designed to deliver measurable impact."
          align="center"
        />
        <div className="approach-grid reveal">
          {approachItems.map((item, index) => (
            <article className="approach-card" key={item.title}>
              <div className="approach-num">{String(index + 1).padStart(2, "0")}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="approach-ico" aria-hidden="true">
                <ApproachIcon icon={item.icon} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
