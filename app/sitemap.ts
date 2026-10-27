import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllCaseStudies } from "@/lib/caseStudies";
import { industryRoutePaths } from "@/lib/industries";
import { serviceLandingPages } from "@/lib/services";
import { solutionPages, solutionPath } from "@/lib/solutions";
import { getBaseUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const staticPaths = [
    "",
    "/about",
    "/services",
    ...serviceLandingPages.map((service) => service.href),
    "/solutions",
    ...solutionPages.map((page) => solutionPath(page.slug)),
    "/security",
    "/new-zealand",
    "/work",
    "/contact",
    "/privacy-policy",
    "/blog",
    ...industryRoutePaths,
  ];

  const staticRoutes = staticPaths.map((path) => ({
    url: `${baseUrl}${path || "/"}`,
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updated || post.date,
  }));

  const caseStudyRoutes = getAllCaseStudies().map((caseStudy) => ({
    url: `${baseUrl}/case-studies/${caseStudy.slug}`,
    lastModified: caseStudy.date,
  }));

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];
}
