import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

const FALLBACK_BLOG_IMAGE = "/23labs-logo-dark.png";

function formatBlogDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

type RelatedArticlesProps = {
  posts: BlogPost[];
};

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (!posts.length) return null;

  return (
    <section className="home-sec">
      <div className="wrap home-wrap">
        <div className="home-sec-head reveal">
          <div className="home-sec-head-row">
            <h2>From the blog</h2>
            <Link href="/blog" className="text-link">
              View all articles
            </Link>
          </div>
          <p className="lead">
            Practical insights on business automation, software and making everyday operations run
            better.
          </p>
        </div>
        <div className="home-cell-grid cols-3 related-content-grid reveal">
          {posts.map((post) => {
            const hasImage = post.featuredImage !== FALLBACK_BLOG_IMAGE;
            return (
              <Link
                href={`/blog/${post.slug}`}
                className={`home-cell home-blog-cell${hasImage ? "" : " no-image"}`}
                key={post.slug}
              >
                {hasImage ? (
                  <div className="home-work-media">
                    <Image
                      src={post.featuredImage}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 760px) 100vw, 33vw"
                    />
                  </div>
                ) : null}
                <div className="home-blog-body">
                  <time className="home-blog-date" dateTime={post.date}>
                    {formatBlogDate(post.date)}
                  </time>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <span className="text-link">Read article</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
