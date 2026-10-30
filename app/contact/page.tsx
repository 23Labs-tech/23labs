import type { Metadata } from "next";
import { BookingSection } from "@/components/contact/BookingSection";
import { ContactHero } from "@/components/contact/ContactHero";
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

      <ContactHero />

      <BookingSection />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
    </>
  );
}
