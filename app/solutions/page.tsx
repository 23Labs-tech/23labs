import type { Metadata } from "next";
import { SolutionsHubPage } from "@/components/solutions/SolutionsHubPage";
import { createMetadata } from "@/lib/seo";
import { solutionsHub } from "@/lib/solutions";

export const metadata: Metadata = createMetadata({
  absoluteTitle: solutionsHub.metadataTitle,
  description: solutionsHub.description,
  path: "/solutions",
});

export default function SolutionsPage() {
  return <SolutionsHubPage />;
}
