import { getAllPosts } from "@/lib/blog";
import { getAllCaseStudies } from "@/lib/caseStudies";
import { industryLinks } from "@/lib/industries";
import { industryProjectCostAnswer } from "@/lib/industryPricing";
import { absoluteUrl } from "@/lib/seo";
import { serviceLandingPages } from "@/lib/services";
import { siteConfig } from "@/lib/site";

/**
 * /llms.txt: a plain-text map of the site for AI assistants and answer engines
 * (https://llmstxt.org). Built from the same data as the sitemap, so new
 * services, industries, case studies and posts appear here automatically.
 */

const SUMMARY =
  "23Labs is a Melbourne-based automation and software studio. We build business process automation, " +
  "system integrations, custom software, AI workflow automation and AI agents for service businesses " +
  "in Australia and New Zealand that have outgrown spreadsheets, manual processes and disconnected tools. " +
  "We work remotely, start every project by mapping how the business actually runs, and prefer connecting " +
  "or automating existing systems before building new ones.";

function line(label: string, path: string, description?: string) {
  const text = description?.replace(/\s+/g, " ").trim();
  return `- [${label}](${absoluteUrl(path)})${text ? `: ${text}` : ""}`;
}

function buildLlmsTxt() {
  const posts = getAllPosts();
  const caseStudies = getAllCaseStudies();

  const sections = [
    `# ${siteConfig.name}`,
    `> ${SUMMARY}`,
    [
      `- Location: ${siteConfig.location} (remote delivery across Australia and New Zealand)`,
      `- Contact: ${siteConfig.email} or ${absoluteUrl("/contact")}`,
      `- Pricing: ${industryProjectCostAnswer}`,
    ].join("\n"),
    [
      "## Services",
      ...serviceLandingPages.map((service) => line(service.navLabel, service.href, service.description)),
    ].join("\n"),
    [
      "## Industries",
      ...industryLinks.map((industry) => line(industry.label, industry.href, industry.description)),
    ].join("\n"),
    [
      "## Case studies",
      ...caseStudies.map((study) => line(study.name, `/case-studies/${study.slug}`, study.description)),
    ].join("\n"),
    [
      "## Guides and articles",
      ...posts.map((post) => line(post.title, `/blog/${post.slug}`, post.description)),
    ].join("\n"),
    [
      "## Company",
      line("About 23Labs", "/about"),
      line("New Zealand", "/new-zealand", "How 23Labs works with New Zealand businesses."),
      line("All work", "/work"),
      line("Contact", "/contact"),
    ].join("\n"),
  ];

  return `${sections.join("\n\n")}\n`;
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
