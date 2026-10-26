import type { Metadata } from "next";
import { IndustryDetailPage } from "@/components/industries/IndustryPages";
import { getIndustryPage } from "@/lib/industries";
import { createMetadata } from "@/lib/seo";

const industry = getIndustryPage("recruitment");

export const metadata: Metadata = createMetadata({
  absoluteTitle: industry?.metadataTitle,
  path: "/recruitment",
  description: industry?.description,
});

export default function RecruitmentPage() {
  if (!industry) return null;
  return <IndustryDetailPage industry={industry} />;
}
