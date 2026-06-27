import { PlaceholderArt } from "@/components/ui/PlaceholderArt";

type ReferenceBlogPost = {
  slug: string;
  category: string;
  date: string;
  title: string;
  description: string;
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
      <div className="blog-thumb" aria-hidden="true">
        <PlaceholderArt />
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
