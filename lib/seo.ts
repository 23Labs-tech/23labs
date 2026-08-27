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

export function createMetadata({
  title,
  absoluteTitle,
  description = siteConfig.description,
  ogTitle,
  ogDescription,
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
  const fullTitle = absoluteTitle
    ? absoluteTitle
    : title
      ? `${title} — ${siteConfig.name}`
      : `${siteConfig.name} — Automation & Software Studio`;
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
          alt: imageAlt,
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
