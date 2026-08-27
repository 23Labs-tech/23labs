import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { industryRoutePaths } from "@/lib/industries";
import { serviceLandingPages } from "@/lib/services";
import { getBaseUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const servicePaths = serviceLandingPages.map((service) => service.href);
  const staticRoutes = [
    "",
    "/about",
    "/services",
    ...servicePaths,
    "/work",
    "/contact",
    "/blog",
    ...industryRoutePaths,
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
