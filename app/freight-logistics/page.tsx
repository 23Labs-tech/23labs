import type { Metadata } from "next";
import { IndustryDetailPage } from "@/components/industries/IndustryPages";
import { getIndustryPage } from "@/lib/industries";
import { createMetadata } from "@/lib/seo";

const industry = getIndustryPage("freight-logistics");

export const metadata: Metadata = createMetadata({
  absoluteTitle: industry?.metadataTitle,
  path: "/freight-logistics",
  description: industry?.description,
});

export default function FreightLogisticsPage() {
  if (!industry) return null;
  return <IndustryDetailPage industry={industry} />;
}
