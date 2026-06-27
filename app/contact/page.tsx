import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageHero } from "@/components/sections/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Get in touch with 23Labs. Tell us about your business and the challenges you want to solve, and we will get back to you within one business day.",
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
          "Share a few details below and a member of our team will follow up to set up a time to chat.",
        ]}
      />
    </>
  );
}
