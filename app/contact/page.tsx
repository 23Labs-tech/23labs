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
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="preconnect" href="https://calendly.com" />
      <link rel="dns-prefetch" href="//assets.calendly.com" />
      <link rel="dns-prefetch" href="//calendly.com" />

      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about "
        highlight="your business"
        body="Tell us about your business, your goals, and the challenges you're looking to solve. We'll get back to you within one business day."
      />

      <ContactSection
        variant="page"
        eyebrow="Why reach out"
        title="Let's fix what's slowing your business down."
        body={[
          "Whether you're looking to improve operations, automate manual processes, connect disconnected systems or build custom software, we can help you work out the right next step.",
          "Pick a time that works for you and we'll talk through what's slowing things down, what you're currently using and where automation or software could make the biggest difference.",
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
