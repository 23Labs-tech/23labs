import type { Metadata } from "next";
import { ServicesHubPage } from "@/components/services/ServicesHubPage";
import { servicesHub } from "@/lib/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  absoluteTitle: servicesHub.metadataTitle,
  path: servicesHub.path,
  description: servicesHub.description,
});

export default function ServicesPage() {
  return <ServicesHubPage />;
}
