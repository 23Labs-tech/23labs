import type { Metadata } from "next";
import { IndustryDetailPage } from "@/components/industries/IndustryPages";
import { getIndustryPage } from "@/lib/industries";
import { createMetadata } from "@/lib/seo";

/**
 * Draft growth page, Part 4 of the growth/SEO workstream. Not linked from
 * nav, footer, the industries hub or app/sitemap.ts - see the comment above
 * this industry's entry in lib/industries.ts. noindex below is a safety
 * net in case the URL is found directly before this page is approved.
 */
const industry = getIndustryPage("property-maintenance");

export const metadata: Metadata = createMetadata({
  absoluteTitle: industry?.metadataTitle,
  path: "/property-maintenance",
  description: industry?.description,
  noindex: true,
});

export default function PropertyMaintenancePage() {
  if (!industry) return null;
  return <IndustryDetailPage industry={industry} />;
}
