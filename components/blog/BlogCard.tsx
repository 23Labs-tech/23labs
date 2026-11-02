import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { BlogPost } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`} className="blog-thumb" aria-label={post.title}>
        <Image
          src={post.featuredImage}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 33vw"
          className="blog-thumb-img"
        />
      </Link>
      <div className="blog-body">
        <h3>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.description}</p>
        <ButtonLink href={`/blog/${post.slug}`} variant="secondary" className="blog-card-btn">
          Read more
        </ButtonLink>
      </div>
    </article>
  );
}
