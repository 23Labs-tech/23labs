import type { Metadata } from "next";
import { IndustryDetailPage } from "@/components/industries/IndustryPages";
import { getIndustryPage } from "@/lib/industries";
import { createMetadata } from "@/lib/seo";

const industry = getIndustryPage("property-maintenance");

export const metadata: Metadata = createMetadata({
  absoluteTitle: industry?.metadataTitle,
  path: "/property-maintenance",
  description: industry?.description,
});

export default function PropertyMaintenancePage() {
  if (!industry) return null;
  return <IndustryDetailPage industry={industry} />;
}
