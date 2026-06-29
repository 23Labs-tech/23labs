import type { Metadata } from "next";
import { IndustryDetailPage } from "@/components/industries/IndustryPages";
import { getIndustryPage } from "@/lib/industries";
import { createMetadata } from "@/lib/seo";

const industry = getIndustryPage("trades-field-services");

export const metadata: Metadata = createMetadata({
  absoluteTitle: industry?.metadataTitle,
  path: "/trades-field-services",
  description: industry?.description,
});

export default function TradesFieldServicesPage() {
  if (!industry) return null;
  return <IndustryDetailPage industry={industry} />;
}
