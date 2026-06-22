import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return createMetadata({ title: "Blog post", path: "/blog" });

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.featuredImage,
    imageAlt: post.imageAlt,
    imageWidth: 1200,
    imageHeight: 1200,
    keywords: post.categories,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated || post.date,
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <>
      <article className="blog-post">
        <header className="blog-post-hero">
          <div className="container narrow">
            <div className="blog-meta">
              <time dateTime={post.date}>{formattedDate}</time>
              <span>{post.readingTime}</span>
              <span>{post.author}</span>
            </div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div className="tag-list">
              {post.categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>
          <div className="container">
            <Image
              src={post.featuredImage}
              alt={post.imageAlt}
              width={1200}
              height={640}
              priority
              className="blog-post-image"
            />
          </div>
        </header>
        <div className="container narrow">
          <div className="article-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              dateModified: post.updated || post.date,
              author: {
                "@type": "Organization",
                name: post.author,
              },
              publisher: {
                "@type": "Organization",
                name: siteConfig.name,
              },
              image: {
                "@type": "ImageObject",
                url: absoluteUrl(post.featuredImage),
                caption: post.imageAlt,
              },
              articleSection: post.categories,
              keywords: post.categories.join(", "),
              mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: absoluteUrl("/"),
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: absoluteUrl("/blog"),
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: absoluteUrl(`/blog/${post.slug}`),
                },
              ],
            },
          ],
        }}
      />
    </>
  );
}
