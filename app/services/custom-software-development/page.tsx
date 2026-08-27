import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { getServiceLandingPage } from "@/lib/services";
import { createMetadata } from "@/lib/seo";

const service = getServiceLandingPage("custom-software-development")!;

export const metadata: Metadata = createMetadata({
  absoluteTitle: service.metadataTitle,
  path: service.href,
  description: service.description,
});

export default function CustomSoftwareDevelopmentPage() {
  return <ServiceLandingPage service={service} />;
}
