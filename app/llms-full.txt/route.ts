import { getAllPosts } from "@/lib/blog";
import { getAllCaseStudies } from "@/lib/caseStudies";
import { getIndustryPage, industryLinks } from "@/lib/industries";
import { industryProjectCostAnswer } from "@/lib/industryPricing";
import { securityAiPractices, securityFaqs, securityPractices } from "@/lib/security";
import { absoluteUrl } from "@/lib/seo";
import { serviceLandingPages } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { solutionPages, solutionPath } from "@/lib/solutions";

/**
 * /llms-full.txt: the full text of the site's key content in one Markdown file,
 * so AI assistants can read services, solutions, governance and every guide
 * without crawling page by page. Companion to /llms.txt.
 */

type QA = { question: string; answer: string };
type Item = { title: string; description?: string; body?: string };

const clean = (value: string) => value.replace(/\s+/g, " ").trim();

function items(list: readonly Item[]) {
  return list.map((item) => `- **${item.title}**${item.description || item.body ? `: ${clean(item.description ?? item.body ?? "")}` : ""}`).join("\n");
}

function faqs(list: readonly QA[]) {
  return list.map((faq) => `**Q: ${clean(faq.question)}**\nA: ${clean(faq.answer)}`).join("\n\n");
}

function buildFullText() {
  const parts: string[] = [
    `# ${siteConfig.name}: full content`,
    `> ${siteConfig.description} Pricing: ${industryProjectCostAnswer} Contact: ${siteConfig.email}. Index of pages: ${absoluteUrl("/llms.txt")}`,
  ];

  parts.push("# Services");
  for (const service of serviceLandingPages) {
    parts.push(
      [
        `## ${service.navLabel}`,
        `URL: ${absoluteUrl(service.href)}`,
        clean(service.hero.lead),
        `### ${service.audience.heading}`,
        items(service.audience.items),
        `### ${service.problem.heading}`,
        items(service.problem.items),
        `### FAQ`,
        faqs(service.faqs),
      ].join("\n\n"),
    );
  }

  parts.push("# Solutions by problem");
  for (const solution of solutionPages) {
    parts.push(
      [
        `## ${solution.hero.title}`,
        `URL: ${absoluteUrl(solutionPath(solution.slug))}`,
        clean(solution.hero.lead),
        `### ${solution.problem.heading}`,
        items(solution.problem.items),
        `### ${solution.impact.heading}`,
        items(solution.impact.items),
        `### ${solution.approach.heading}`,
        solution.approach.steps.map((step, index) => `${index + 1}. **${step.title}**: ${clean(step.body)}`).join("\n"),
        `Result: ${solution.result}`,
        `### FAQ`,
        faqs(solution.faqs),
      ].join("\n\n"),
    );
  }

  parts.push(
    [
      "# Security, data handling and AI governance",
      `URL: ${absoluteUrl("/security")}`,
      "## How we build",
      items(securityPractices),
      "## How we use AI",
      items(securityAiPractices),
      "## FAQ",
      faqs(securityFaqs),
    ].join("\n\n"),
  );

  parts.push("# Industries");
  for (const link of industryLinks) {
    const page = getIndustryPage(link.slug);
    parts.push(
      [
        `## ${link.label}`,
        `URL: ${absoluteUrl(link.href)}`,
        clean(link.description),
        page?.faq?.length ? `### FAQ\n\n${faqs(page.faq)}` : "",
      ]
        .filter(Boolean)
        .join("\n\n"),
    );
  }

  parts.push("# Case studies");
  for (const study of getAllCaseStudies()) {
    parts.push(
      [
        `## ${study.name}`,
        `URL: ${absoluteUrl(`/case-studies/${study.slug}`)}`,
        clean(study.summary),
        clean(study.description),
        study.cardResults.length ? study.cardResults.map((chip) => `- ${chip.value}: ${chip.label}`).join("\n") : "",
      ]
        .filter(Boolean)
        .join("\n\n"),
    );
  }

  parts.push("# Guides");
  for (const post of getAllPosts()) {
    parts.push([`## ${post.title}`, `URL: ${absoluteUrl(`/blog/${post.slug}`)} (published ${post.date})`, post.content.trim()].join("\n\n"));
  }

  return `${parts.join("\n\n")}\n`;
}

export function GET() {
  return new Response(buildFullText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
