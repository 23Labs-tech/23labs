import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageHero } from "@/components/sections/PageHero";
import { BreadcrumbJsonLd } from "@/components/site/BreadcrumbJsonLd";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Contact 23Labs | Talk to Us About Your Current Process",
  path: "/contact",
  description:
    "Tell us what your team is doing manually, or which systems do not talk to each other. We reply within one business day with a practical next step.",
  keywords: ["contact 23Labs", "book automation discovery call", "software project enquiry"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about "
        highlight="your business"
        body="Tell us about your business, your goals, and the challenges you're looking to solve. We'll get back to you within one business day."
      />

      <ContactSection
        variant="page"
        eyebrow="Why reach out"
        title="Helping businesses scale with confidence"
        body={[
          "Whether you're looking to improve operations, automate manual processes, build custom software, or create a better digital experience for your customers, we're here to help.",
          "Pick a time that works for you below and we'll talk it through on a call.",
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
    </>
  );
}
