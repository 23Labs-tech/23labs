import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogPost } from "@/lib/blog";

type BlogListProps = {
  posts: BlogPost[];
};

export function BlogList({ posts }: BlogListProps) {
  return (
    <>
      <header className="page-hero blog-hero">
        <div className="wrap reveal in">
          <div className="sec-tag">From the blog</div>
          <h1>
            Practical notes from inside our <span className="em">own projects</span>
          </h1>
          <p className="lead">
            Short, honest write-ups on automation, software, and AI, no fluff, written from what we actually
            run into building this stuff for clients.
          </p>
        </div>
      </header>
      <section className="sec no-top">
        <div className="wrap">
          <div className="blog-grid-full reveal" id="blogGrid">
            {posts.map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
