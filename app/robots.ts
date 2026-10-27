import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/site";

/**
 * AI assistants and answer engines are explicitly welcome: being cited by
 * ChatGPT, Claude, Perplexity, Gemini, Copilot, Grok and others is a
 * visibility channel for 23Labs. A bot that matches a named group ignores
 * the "*" group, so each group repeats the /api/ block.
 *
 * xAI has not published an official crawler token for Grok. xAI-SearchBot and
 * GrokBot are the agents reported in the wild, so they are listed too.
 */
const aiCrawlers = [
  // OpenAI (ChatGPT search, training, user-triggered browsing)
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  // Anthropic (Claude search, training, user-triggered browsing)
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google Gemini and AI Overviews training control
  "Google-Extended",
  // Apple Intelligence
  "Applebot",
  "Applebot-Extended",
  // Microsoft Copilot runs on Bing's index
  "Bingbot",
  // xAI Grok (reported, not officially documented)
  "xAI-SearchBot",
  "GrokBot",
  // Meta AI
  "Meta-WebIndexer",
  "meta-externalagent",
  // Others
  "Amazonbot",
  "DuckAssistBot",
  "MistralAI-User",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: aiCrawlers,
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
