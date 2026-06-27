import type { Metadata } from "next";
import { getBaseUrl, siteConfig } from "@/lib/site";

type SeoInput = {
  title?: string;
  description?: string;
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

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/og-image.png",
  imageAlt = siteConfig.name,
  imageWidth = 1200,
  imageHeight = 630,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: SeoInput = {}): Metadata {
  const fullTitle = title
    ? `${title} — ${siteConfig.name}`
    : `${siteConfig.name} — Automation, Software & AI for Ambitious Businesses`;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(getBaseUrl()),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
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
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
