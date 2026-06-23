import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  categories: string[];
  featuredImage: string;
  imageAlt: string;
  readingTime: string;
  content: string;
  html: string;
};

type Frontmatter = Record<string, string>;

function parseFrontmatter(file: string) {
  if (!file.startsWith("---")) {
    return { frontmatter: {}, content: file };
  }

  const end = file.indexOf("\n---", 3);
  if (end === -1) {
    return { frontmatter: {}, content: file };
  }

  const raw = file.slice(3, end).trim();
  const content = file.slice(end + 4).trim();
  const frontmatter: Frontmatter = {};

  for (const line of raw.split(/\r?\n/)) {
    const index = line.indexOf(":");
    if (index === -1) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim().replace(/^["']|["']$/g, "");
    frontmatter[key] = value;
  }

  return { frontmatter, content };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sanitizeHref(value: string) {
  if (value.startsWith("/") || value.startsWith("https://") || value.startsWith("http://")) {
    return value.replace(/"/g, "%22");
  }
  return "#";
}

function inlineMarkdown(value: string) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label: string, href: string) => {
      return `<a href="${sanitizeHref(href)}">${escapeHtml(label)}</a>`;
    });
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let paragraph: string[] = [];
  let listOpen = false;

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const closeList = () => {
    if (!listOpen) return;
    html.push("</ul>");
    listOpen = false;
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      closeList();
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      closeList();
      html.push(`<h3>${inlineMarkdown(trimmed.slice(4))}</h3>`);
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      closeList();
      html.push(`<h2>${inlineMarkdown(trimmed.slice(3))}</h2>`);
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      if (!listOpen) {
        html.push("<ul>");
        listOpen = true;
      }
      html.push(`<li>${inlineMarkdown(trimmed.slice(2))}</li>`);
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  closeList();
  return html.join("\n");
}

function getSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
    .filter((slug) => SLUG_RE.test(slug));
}

function readPost(slug: string): BlogPost | null {
  if (!SLUG_RE.test(slug)) return null;

  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = parseFrontmatter(file);
  const words = content.split(/\s+/).filter(Boolean).length;

  const featuredImage = frontmatter.featuredImage || frontmatter.image || "/23labs-logo-dark.png";

  return {
    slug,
    title: frontmatter.title || slug.replace(/-/g, " "),
    description: frontmatter.description || "",
    date: frontmatter.date || new Date().toISOString().slice(0, 10),
    updated: frontmatter.updated || undefined,
    author: frontmatter.author || "23Labs",
    categories: (frontmatter.categories || "Automation")
      .split(",")
      .map((category) => category.trim())
      .filter(Boolean),
    featuredImage,
    imageAlt:
      frontmatter.imageAlt ||
      `Featured image for ${frontmatter.title || slug.replace(/-/g, " ")} by 23Labs`,
    readingTime: `${Math.max(1, Math.ceil(words / 220))} min read`,
    content,
    html: markdownToHtml(content),
  };
}

export function getAllPosts() {
  return getSlugs()
    .map(readPost)
    .filter((post): post is BlogPost => Boolean(post))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string) {
  return readPost(slug);
}
