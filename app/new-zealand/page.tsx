import type { Metadata } from "next";
import { NewZealandPage } from "@/components/markets/NewZealandPage";
import { newZealandPage } from "@/lib/newZealand";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  absoluteTitle: newZealandPage.metadataTitle,
  path: newZealandPage.path,
  description: newZealandPage.description,
});

export default function NewZealandRoute() {
  return <NewZealandPage />;
}
