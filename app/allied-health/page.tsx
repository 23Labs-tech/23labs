import type { Metadata } from "next";
import { IndustryDetailPage } from "@/components/industries/IndustryPages";
import { getIndustryPage } from "@/lib/industries";
import { createMetadata } from "@/lib/seo";

const industry = getIndustryPage("allied-health");

export const metadata: Metadata = createMetadata({
  absoluteTitle: industry?.metadataTitle,
  path: "/allied-health",
  description: industry?.description,
});

export default function AlliedHealthPage() {
  if (!industry) return null;
  return <IndustryDetailPage industry={industry} />;
}
