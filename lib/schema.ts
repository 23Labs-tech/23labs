import { absoluteUrl } from "@/lib/seo";
import { getBaseUrl, siteConfig } from "@/lib/site";

export function organizationId() {
  return `${getBaseUrl()}/#organization`;
}

export function websiteId() {
  return `${getBaseUrl()}/#website`;
}

const areaServed = [
  { "@type": "Country", name: "Australia" },
  { "@type": "Country", name: "New Zealand" },
];

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": organizationId(),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: `${getBaseUrl()}/`,
    logo: absoluteUrl("/23labs-logo-dark.png"),
    email: siteConfig.email,
    description: siteConfig.description,
    areaServed,
    sameAs: [siteConfig.socials.linkedin, siteConfig.socials.instagram],
    knowsAbout: [
      "Custom Software Development",
      "Business Process Automation",
      "Systems Integration",
      "API Integration",
      "AI Workflow Automation",
      "AI Agents",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": websiteId(),
    name: siteConfig.name,
    url: `${getBaseUrl()}/`,
    inLanguage: "en-AU",
    publisher: { "@id": organizationId() },
  };
}

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service: { name: string; description: string; path: string }) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(service.path)}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: absoluteUrl(service.path),
    provider: { "@id": organizationId() },
    areaServed,
  };
}
