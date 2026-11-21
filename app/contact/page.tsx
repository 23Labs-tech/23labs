import type { Metadata } from "next";
import { BookingSection } from "@/components/contact/BookingSection";
import { ContactHero } from "@/components/contact/ContactHero";
import { EnquirySection } from "@/components/contact/EnquirySection";
import { BreadcrumbJsonLd } from "@/components/site/BreadcrumbJsonLd";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Contact 23Labs | Talk to Us About Your Current Process",
  path: "/contact",
  description:
    "Tell us what your team is doing manually, or which systems do not talk to each other, and we'll help work out a practical next step.",
  keywords: ["contact 23Labs", "book automation discovery call", "software project enquiry"],
});

type ContactPageProps = {
  searchParams: Promise<{ service?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const defaultService = typeof params.service === "string" ? params.service : "";

  return (
    <>
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="preconnect" href="https://calendly.com" />
      <link rel="dns-prefetch" href="//assets.calendly.com" />
      <link rel="dns-prefetch" href="//calendly.com" />

      <ContactHero />

      <EnquirySection defaultService={defaultService} />
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
