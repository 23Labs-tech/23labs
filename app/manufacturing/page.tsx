import type { Metadata } from "next";
import { IndustryDetailPage } from "@/components/industries/IndustryPages";
import { getIndustryPage } from "@/lib/industries";
import { createMetadata } from "@/lib/seo";

const industry = getIndustryPage("manufacturing");

export const metadata: Metadata = createMetadata({
  absoluteTitle: industry?.metadataTitle,
  path: "/manufacturing",
  description: industry?.description,
});

export default function ManufacturingPage() {
  if (!industry) return null;
  return <IndustryDetailPage industry={industry} />;
}
