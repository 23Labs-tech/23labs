import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  path: "/about",
  description:
    "Learn about 23Labs, a Melbourne-based technology studio building practical automation, software, and AI systems for growing businesses.",
  keywords: ["23Labs", "technology studio Melbourne", "AI automation team", "software development partner"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About 23Labs"
        title="Practical technology, built around "
        highlight="your business"
        body="We are a Melbourne-based studio building automation, software, and AI tools that remove busywork and help businesses scale with confidence."
      />

      <section className="section">
        <div className="container split">
          <SectionHeading title="Our " highlight="story" />
          <div className="prose-block">
            <p>
              23Labs started with a simple belief: most businesses do not need more software, they
              need the right systems working together. Too often teams are stuck doing repetitive
              manual work, copying information between tools, and chasing tasks that technology
              should be handling quietly in the background.
            </p>
            <p>
              We partner with growing businesses to find where the friction is and build practical
              solutions that actually get used, from automating day-to-day operations to designing
              custom platforms and AI tools. We also build our own products, like Haylo, so we know
              first-hand what it takes to ship software that scales.
            </p>
            <p>
              Whatever the project, the goal is always the same: smarter systems that save time,
              reduce errors, and give your team confidence to grow.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Values" title="What we " highlight="stand for" />
          <div className="value-grid">
            {values.map((value, index) => (
              <article className="value-card" key={value.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      <CtaSection
        title="Ready to remove the busywork?"
        body="Tell us where the friction is and we will show you a practical path forward."
        href="/contact"
        label="Talk to us"
      />
    </>
  );
}
