import Image from "next/image";

type ReferenceBlogPost = {
  slug: string;
  category: string;
  date: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

type ReferenceBlogCardProps = {
  post: ReferenceBlogPost;
  hrefBase?: string;
  anchored?: boolean;
};

export function ReferenceBlogCard({ post, hrefBase = "", anchored = true }: ReferenceBlogCardProps) {
  return (
    <article
      className="blog-card"
      id={anchored ? post.slug : undefined}
      data-category={anchored ? post.category : undefined}
    >
      <div className="blog-thumb">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes="(max-width: 780px) 100vw, 33vw"
          className="blog-thumb-img"
        />
      </div>
      <div className="blog-body">
        <span className="blog-meta">
          <span className="work-tag">{post.category}</span>
          <span className="blog-date">{post.date}</span>
        </span>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <a href={`${hrefBase}#${post.slug}`} className="work-link">
          Read the guide <span aria-hidden="true">{"\u2192"}</span>
        </a>
      </div>
    </article>
  );
}
