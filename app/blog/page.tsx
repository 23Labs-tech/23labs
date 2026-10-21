import type { Metadata } from "next";
import { BlogList } from "@/components/blog/BlogList";
import { CtaSection } from "@/components/sections/CtaSection";
import { getAllPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  path: "/blog",
  description:
    "Practical notes on automation, software, and AI from inside 23Labs' own projects.",
  keywords: ["automation blog", "software insights", "AI systems", "business operations"],
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BlogList posts={posts} />

      <CtaSection
        title="Want to talk about your own project?"
        body="Tell us where the friction is and we'll show you a practical path forward, no obligation."
        href="/contact"
        label="Talk to us"
      />
    </>
  );
}
