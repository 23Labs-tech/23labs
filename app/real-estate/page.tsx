import type { Metadata } from "next";
import { IndustryDetailPage } from "@/components/industries/IndustryPages";
import { getIndustryPage } from "@/lib/industries";
import { createMetadata } from "@/lib/seo";

const industry = getIndustryPage("real-estate");

export const metadata: Metadata = createMetadata({
  absoluteTitle: industry?.metadataTitle,
  path: "/real-estate",
  description: industry?.description,
});

export default function RealEstatePage() {
  if (!industry) return null;
  return <IndustryDetailPage industry={industry} />;
}
