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

export function articleJsonLd(article: {
  headline: string;
  description: string;
  datePublished: string;
  image?: string;
  about: string;
  path: string;
}) {
  return {
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    ...(article.image ? { image: absoluteUrl(article.image) } : {}),
    author: { "@id": organizationId() },
    publisher: { "@id": organizationId() },
    about: article.about,
    mainEntityOfPage: absoluteUrl(article.path),
    inLanguage: "en-AU",
  };
}

export function serviceJsonLd(service: {
  name: string;
  description: string;
  path: string;
  areaServed?: { "@type": string; name: string }[];
}) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(service.path)}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: absoluteUrl(service.path),
    provider: { "@id": organizationId() },
    areaServed: service.areaServed ?? areaServed,
  };
}

export function faqPageJsonLd(path: string, faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
