import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  path: "/blog",
  description:
    "23Labs insights on automation, software, AI systems, data integration, and building better operating systems for growing businesses.",
  keywords: ["automation blog", "software insights", "AI systems", "business operations", "SEO website checklist"],
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.flatMap((post) => post.categories)));

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical notes on systems, automation, and "
        highlight="growth"
        body="SEO-ready articles and operational thinking for businesses improving the way work gets done."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Latest posts"
            title="Ideas you can "
            highlight="act on"
            body={categories.length ? `Topics: ${categories.join(", ")}` : undefined}
          />
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
