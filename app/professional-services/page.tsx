import type { Metadata } from "next";
import { IndustryDetailPage } from "@/components/industries/IndustryPages";
import { getIndustryPage } from "@/lib/industries";
import { createMetadata } from "@/lib/seo";

const industry = getIndustryPage("professional-services");

export const metadata: Metadata = createMetadata({
  absoluteTitle: industry?.metadataTitle,
  path: "/professional-services",
  description: industry?.description,
});

export default function ProfessionalServicesPage() {
  if (!industry) return null;
  return <IndustryDetailPage industry={industry} />;
}
