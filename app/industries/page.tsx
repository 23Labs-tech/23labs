import type { Metadata } from "next";
import { IndustriesOverviewPage } from "@/components/industries/IndustryPages";
import { industryOverview } from "@/lib/industries";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  absoluteTitle: industryOverview.metadataTitle,
  path: "/industries",
  description: industryOverview.description,
});

export default function IndustriesPage() {
  return <IndustriesOverviewPage />;
}
