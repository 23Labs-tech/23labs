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
  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`} className="blog-image" aria-label={post.title}>
        <span className="blog-image-label">{post.categories[0] || "Insights"}</span>
        <Image
          src={post.featuredImage}
          alt={post.imageAlt}
          width={900}
          height={520}
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      </Link>
      <div className="blog-card-body">
        <div className="blog-meta">
          <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
          <span>{post.readingTime}</span>
          <span>{post.author}</span>
        </div>
        <h2>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{post.description}</p>
        <div className="tag-list">
          {post.categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`} className="work-link">
          Read the guide <span aria-hidden="true">{"\u2192"}</span>
        </Link>
      </div>
    </article>
  );
}
