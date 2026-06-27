import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { WorkCases } from "@/components/work/WorkCases";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Work",
  path: "/work",
  description:
    "Case studies from 23Labs: products, platforms, and website rebuilds we've shipped for clients and for ourselves.",
  keywords: ["23Labs work", "automation case studies", "software case studies", "website rebuilds"],
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Real systems, built for "
        highlight="real businesses"
        body="A few of the products, platforms, and rebuilds we've shipped recently. Tap any project to see how it actually came together."
        className="work-hero"
      />

      <section className="sec no-top">
        <div className="wrap">
          <WorkCases />
        </div>
      </section>

      <CtaSection
        title="Want to be the next case study?"
        body="Tell us where the friction is and we'll show you a practical path forward, no obligation."
        href="/#contact"
        label="Talk to us"
      />
    </>
  );
}
