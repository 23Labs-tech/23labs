import type { Metadata } from "next";
import { BlogFilterList } from "@/components/blog/BlogFilterList";
import { CtaSection } from "@/components/sections/CtaSection";
import { referenceBlogPosts } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  path: "/blog",
  description:
    "Practical notes on automation, software, and AI from inside 23Labs' own projects.",
  keywords: ["automation blog", "software insights", "AI systems", "business operations"],
});

export default function BlogPage() {
  return (
    <>
      <BlogFilterList posts={referenceBlogPosts} />

      <CtaSection
        title="Want to talk about your own project?"
        body="Tell us where the friction is and we'll show you a practical path forward, no obligation."
        href="/#contact"
        label="Talk to us"
      />
    </>
  );
}
