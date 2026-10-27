import type { Metadata } from "next";
import { getBaseUrl, siteConfig } from "@/lib/site";

type SeoInput = {
  title?: string;
  absoluteTitle?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${getBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

function stripBrandSuffix(value?: string) {
  return value?.replace(/\s*[|\u2013\u2014-]\s*23Labs\s*$/i, "").trim();
}

const industryPaths = new Set([
  "/freight-logistics",
  "/recruitment",
  "/professional-services",
  "/construction",
  "/allied-health",
  "/real-estate",
  "/trades-field-services",
]);

function ogEyebrow(path: string) {
  if (path === "/" || path === "") return "Automation and software studio";
  if (path.startsWith("/services")) return "Services";
  if (path.startsWith("/industries") || industryPaths.has(path)) return "Industries";
  if (path.startsWith("/blog")) return "Guides";
  if (path.startsWith("/case-studies") || path.startsWith("/work")) return "Case studies";
  if (path.startsWith("/new-zealand")) return "New Zealand";
  return "23Labs";
}

/** Branded per-page card rendered by app/og/route.tsx. */
export function ogCardPath(title: string, path = "/") {
  const params = new URLSearchParams({ title, eyebrow: ogEyebrow(path) });
  return `/og?${params.toString()}`;
}

export function createMetadata({
  title,
  absoluteTitle,
  description = siteConfig.description,
  ogTitle,
  ogDescription,
  path = "/",
  image,
  imageAlt,
  imageWidth = 1200,
  imageHeight = 630,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: SeoInput = {}): Metadata {
  const fullTitle = absoluteTitle
    ? absoluteTitle
    : title
      ? `${title} | ${siteConfig.name}`
      : `${siteConfig.name} | Automation and Software Studio`;
  const url = absoluteUrl(path);
  const cardTitle = ogTitle || title || stripBrandSuffix(absoluteTitle) || siteConfig.tagline;
  const imageUrl = absoluteUrl(image ?? ogCardPath(cardTitle, path));
  const imageAltText = imageAlt ?? (image ? siteConfig.name : `${cardTitle} | ${siteConfig.name}`);

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(getBaseUrl()),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle || fullTitle,
      description: ogDescription || description,
      url,
      siteName: siteConfig.name,
      type,
      publishedTime,
      modifiedTime,
      authors,
      images: [
        {
          url: imageUrl,
          width: imageWidth,
          height: imageHeight,
          alt: imageAltText,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle || fullTitle,
      description: ogDescription || description,
      images: [imageUrl],
    },
  };
}
