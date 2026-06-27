import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/work/WorkCard";
import { caseStudies } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Work",
  path: "/work",
  description:
    "Explore selected 23Labs case studies across AI automation, custom software, websites, and workflow improvement.",
  keywords: ["23Labs work", "automation case studies", "software case studies", "website rebuilds"],
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Real systems, built for "
        highlight="real businesses"
        body="A look at the products, platforms, automations, and rebuilds we have shipped for teams that need practical technology."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Case studies"
            title="Built around the "
            highlight="workflow"
            body="Every project starts with the business process, then becomes the smallest useful system that can remove friction and create measurable value."
          />
          <div className="work-grid work-grid-full">
            {caseStudies.map((item) => (
              <WorkCard {...item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Have a workflow worth improving?"
        body="Tell us what is slowing the team down and we will help you map the right next system."
        href="/contact"
        label="Talk to us"
      />
    </>
  );
}
