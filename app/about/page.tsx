import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values, workflowFramework } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  path: "/about",
  description:
    "23Labs is a studio building automation, software, and AI tools that remove busywork and help businesses scale with confidence.",
  keywords: ["23Labs", "technology studio", "AI automation team", "software development partner"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About 23Labs"
        title="Practical technology, built around "
        highlight="your business"
        body="We are a studio building automation, software, and AI tools that remove busywork and help businesses scale with confidence."
      />

      <section className="sec no-top">
        <div className="wrap">
          <div className="story-grid reveal">
            <h2>
              Our <span className="em">story</span>
            </h2>
            <div className="story-copy">
              <p>
                23Labs started with a simple belief: most businesses do not need more software, they need
                the right systems working together. Too often teams are stuck doing repetitive manual work,
                copying information between tools, and chasing tasks that technology should be handling
                quietly in the background.
              </p>
              <p>
                We partner with growing businesses to find where the friction is and build practical
                solutions that actually get used, from automating day-to-day operations to designing custom
                platforms and AI tools. We also build our own products, like Haylo, so we know first-hand
                what it takes to ship software that scales.
              </p>
              <p>
                Whatever the project, the goal is always the same: smarter systems that save time, reduce
                errors, and give your team confidence to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec no-top">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we stand for"
            title="Built on a few things we won't "
            highlight="compromise"
          />
          <div className="values-grid reveal">
            {values.map((value, index) => (
              <article className="value-card" key={value.title}>
                <div className="value-k">{String(index + 1).padStart(2, "0")}</div>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatsBand noTop />

      <section className="sec">
        <div className="wrap">
          <SectionHeading
            eyebrow="Our approach"
            title="How 23Labs Helps Clients "
            highlight="Work Smarter"
            body="We find the manual work slowing the business down, then build practical systems that save time, connect tools, and improve how work gets done."
          />
          <h3 className="framework-h">The 23Labs Client Workflow Framework</h3>
          <div className="ai-grid reveal">
            {workflowFramework.map((item, index) => (
              <article className="ai-card" key={item.step}>
                <div className="ai-card-head">
                  <FrameworkIcon index={index} />
                  <div>
                    <span className="ai-card-step">{item.step}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to remove the busywork?"
        body="Tell us where the friction is and we'll show you a practical path forward, no obligation."
        href="/#contact"
        label="Talk to us"
      />
    </>
  );
}

function FrameworkIcon({ index }: { index: number }) {
  const icons = [
    <g key="search">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </g>,
    <g key="map">
      <path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </g>,
    <g key="build">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </g>,
    <g key="optimise">
      <path d="M3 17 9 11 13 15 21 7" />
      <path d="M21 13V7h-6" />
    </g>,
  ];

  return (
    <div className="ai-card-ico">
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {icons[index]}
      </svg>
    </div>
  );
}
