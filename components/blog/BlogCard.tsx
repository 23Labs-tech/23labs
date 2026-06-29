import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
};

const dateFormatter = new Intl.DateTimeFormat("en-AU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function BlogCard({ post }: BlogCardProps) {
  const primaryCategory = post.categories[0] || "Insights";
  const formattedDate = dateFormatter.format(new Date(post.date));

  return (
    <article className="blog-card" data-category={primaryCategory}>
      <Link href={`/blog/${post.slug}`} className="blog-thumb" aria-label={post.title}>
        <Image
          src={post.featuredImage}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 780px) 100vw, 33vw"
          className="blog-thumb-img"
        />
      </Link>
      <div className="blog-body">
        <span className="blog-meta">
          <span className="work-tag">{primaryCategory}</span>
          <time className="blog-date" dateTime={post.date}>
            {formattedDate}
          </time>
        </span>
        <h3>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.description}</p>
        <Link href={`/blog/${post.slug}`} className="work-link">
          Read the guide <span aria-hidden="true">{"\u2192"}</span>
        </Link>
      </div>
    </article>
  );
}
