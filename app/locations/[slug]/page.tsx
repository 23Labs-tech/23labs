import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationLandingPage } from "@/components/locations/LocationLandingPage";
import { createMetadata } from "@/lib/seo";
import { getLocationPage, locationPages } from "@/lib/locations";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locationPages.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationPage(slug);
  if (!location) return createMetadata({ title: "Locations", path: "/locations" });

  return createMetadata({
    absoluteTitle: location.metadataTitle,
    description: location.description,
    path: location.path,
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationPage(slug);
  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}
