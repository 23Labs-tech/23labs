import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StatsBand } from "@/components/sections/StatsBand";
import { WhatWeStandFor } from "@/components/sections/WhatWeStandFor";
import { workflowFramework } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "About 23Labs | Melbourne Automation & Software Studio",
  path: "/about",
  description:
    "23Labs is a Melbourne automation and software studio building custom software, business automation and connected systems for Australian businesses.",
  keywords: ["23Labs", "automation and software studio", "business automation Melbourne", "custom software development"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About 23Labs"
        title="Practical technology, built around "
        highlight="your business"
        body="23Labs is a Melbourne-based Automation & Software Studio. We design and build business automation, custom software and connected systems that make businesses easier to run."
      />

      <StatsBand noTop />

      <section className="sec">
        <div className="wrap">
          <div className="story-grid reveal">
            <h2>
              Our <span className="em">story</span>
            </h2>
            <div className="story-copy">
              <p>
                We work with businesses that have outgrown spreadsheets, manual processes and disconnected
                software, replacing unnecessary complexity with systems designed around how they actually
                operate.
              </p>
              <p>
                23Labs started with a simple belief: most businesses do not need more software, they need
                the right systems working together. Too often teams are stuck doing repetitive manual work,
                copying information between tools, and chasing tasks that technology should be handling
                quietly in the background.
              </p>
              <p>
                We partner with growing businesses to find where the friction is and build practical
                solutions that actually get used, from automating day-to-day operations to designing custom
                software and connected systems that are built to last.
              </p>
              <p>
                Whatever the project, the goal is always the same: smarter systems that save time, reduce
                errors, and give your team confidence to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatWeStandFor />

      <ProcessSection
        layout="split"
        eyebrow="How we work"
        heading={
          <>
            How 23Labs Helps Clients <span className="em">Work Smarter</span>
          </>
        }
        intro="We find the manual work slowing the business down, then build practical systems that save time, connect tools, and improve how work gets done."
        timelineLabel="The 23Labs Client Workflow Framework"
        steps={workflowFramework.map((item) => ({ label: item.step, title: item.title, body: item.body }))}
      />

      <CtaSection
        title="Ready to remove the busywork?"
        body="Tell us where the friction is and we'll show you a practical path forward, no obligation."
        href="/contact"
        label="Talk to us"
      />
    </>
  );
}
