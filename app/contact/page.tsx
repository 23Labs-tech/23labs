import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Contact 23Labs to discuss automation, software, AI systems, data integration, or a production-ready website for your business.",
  keywords: ["contact 23Labs", "book automation discovery call", "software project enquiry"],
});

export default function ContactPage() {
  return (
    <ContactSection
      variant="page"
      eyebrow="Contact"
      title="Let us build something "
      highlight="worth using"
      body="Tell us a little about your business and what you are looking to achieve. We typically reply within one business day."
      showSocials
    />
  );
}
