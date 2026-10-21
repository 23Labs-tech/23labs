import type { Metadata } from "next";
import { CaseStudyGrid } from "@/components/work/CaseStudyGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Case Studies",
  path: "/work",
  description:
    "Case studies from 23Labs: real systems we've connected, automated and built for clients, with the practical outcomes behind each one.",
  keywords: ["23Labs case studies", "automation case studies", "software case studies", "system integration"],
});

export default function WorkPage() {
  return (
    <>
      <section className="sec cs-sec">
        <div className="wrap">
          <CaseStudyGrid />
        </div>
      </section>

      <CtaSection
        title="Want to be the next case study?"
        body="Tell us where the friction is and we'll show you a practical path forward, no obligation."
        href="/contact"
        label="Talk to us"
      />
    </>
  );
}
