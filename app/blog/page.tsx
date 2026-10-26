import type { Metadata } from "next";
import { BlogList } from "@/components/blog/BlogList";
import { CtaSection } from "@/components/sections/CtaSection";
import { BreadcrumbJsonLd } from "@/components/site/BreadcrumbJsonLd";
import { getAllPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Automation & Custom Software Insights | 23Labs",
  path: "/blog",
  description:
    "Practical articles on business process automation, custom software and system integration, written from the projects 23Labs delivers for clients.",
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
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
    </>
  );
}
