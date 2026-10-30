import type { Metadata } from "next";
import { CaseStudyGrid } from "@/components/work/CaseStudyGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { BreadcrumbJsonLd } from "@/components/site/BreadcrumbJsonLd";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Case Studies: Integration & Automation Projects | 23Labs",
  path: "/work",
  description:
    "How 23Labs connected Bullhorn and SEEK, automated client onboarding and linked enquiries to property records. Real projects, real workflows.",
  keywords: ["23Labs case studies", "automation case studies", "software case studies", "system integration"],
});

export default function WorkPage() {
  return (
    <>
      <section className="sec cs-sec">
        <CaseStudyGrid />
      </section>

      <CtaSection
        title="Want to be the next case study?"
        body="Tell us where the friction is and we'll show you a practical path forward, no obligation."
        href="/contact"
        label="Talk to us"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/work" },
        ]}
      />
    </>
  );
}
