import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { blogAuthor, getAllPosts, getPostBySlug } from "@/lib/blog";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import { breadcrumbList, organizationId } from "@/lib/schema";
import { getBaseUrl } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return createMetadata({ title: "Blog post", path: "/blog" });

  return createMetadata({
    absoluteTitle: post.seoTitle || `${post.title} | 23Labs`,
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
            <p className="blog-author-bio">{blogAuthor.bio}</p>
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
              preload
              sizes="(max-width: 900px) 100vw, 1100px"
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
              "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`,
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              dateModified: post.updated || post.date,
              image: absoluteUrl(post.featuredImage),
              author: {
                "@type": "Organization",
                name: blogAuthor.name,
                description: blogAuthor.bio,
                url: `${getBaseUrl()}/`,
                parentOrganization: { "@id": organizationId() },
              },
              publisher: { "@id": organizationId() },
              articleSection: post.categories,
              mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
              inLanguage: "en-AU",
            },
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]),
          ],
        }}
      />
    </>
  );
}
