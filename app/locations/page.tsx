import type { Metadata } from "next";
import { LocationsHubPage } from "@/components/locations/LocationsHubPage";
import { createMetadata } from "@/lib/seo";
import { locationsHub } from "@/lib/locations";

export const metadata: Metadata = createMetadata({
  absoluteTitle: locationsHub.metadataTitle,
  description: locationsHub.description,
  path: locationsHub.path,
});

export default function LocationsPage() {
  return <LocationsHubPage />;
}
