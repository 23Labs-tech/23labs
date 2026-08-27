import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { getServiceLandingPage } from "@/lib/services";
import { createMetadata } from "@/lib/seo";

const service = getServiceLandingPage("systems-integrations")!;

export const metadata: Metadata = createMetadata({
  absoluteTitle: service.metadataTitle,
  path: service.href,
  description: service.description,
});

export default function SystemsIntegrationsPage() {
  return <ServiceLandingPage service={service} />;
}
