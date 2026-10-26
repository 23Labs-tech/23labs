export const siteConfig = {
  name: "23Labs",
  legalName: "23Labs Technologies",
  url: "https://www.23labs.co",
  email: "hello@23labs.co",
  description:
    "23Labs serves clients across Australia and New Zealand remotely from Melbourne, building custom software, automation and system integrations.",
  tagline: "Automation, software and connected systems for growing businesses.",
  location: "Melbourne, Australia",
  socials: {
    linkedin: "https://au.linkedin.com/company/23labs",
    instagram: "https://www.instagram.com/_23labs.co_/",
  },
};

/**
 * Absolute origin for canonicals, sitemap, Open Graph and JSON-LD.
 * www is the primary host. The apex redirects to www in production.
 * A stale NEXT_PUBLIC_SITE_URL of https://23labs.co is rewritten to www
 * so preview hosts are left alone and the apex cannot republish canonicals.
 */
export function getBaseUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim() || siteConfig.url;
  const raw = configured.replace(/\/$/, "");

  try {
    const url = new URL(raw);
    if (url.hostname === "23labs.co") {
      url.hostname = "www.23labs.co";
    }
    return url.origin;
  } catch {
    return siteConfig.url;
  }
}
