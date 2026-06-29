"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogPost } from "@/lib/blog";

type BlogFilterListProps = {
  posts: BlogPost[];
};

export function BlogFilterList({ posts }: BlogFilterListProps) {
  const [active, setActive] = useState("All posts");
  const filters = useMemo(
    () => ["All posts", ...Array.from(new Set(posts.flatMap((post) => post.categories)))],
    [posts]
  );
  const visiblePosts = useMemo(
    () => (active === "All posts" ? posts : posts.filter((post) => post.categories.includes(active))),
    [active, posts]
  );

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
          <div className="filter-row" id="filterRow">
            {filters.map((filter) => (
              <button
                className={`filter-pill${active === filter ? " active" : ""}`}
                data-filter={filter === "All posts" ? "all" : filter}
                type="button"
                key={filter}
                onClick={() => setActive(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </header>
      <section className="sec no-top">
        <div className="wrap">
          <div className="blog-grid-full reveal" id="blogGrid">
            {visiblePosts.map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>
          <div className={`empty-state${visiblePosts.length === 0 ? " show" : ""}`} id="emptyState">
            No posts in this category yet. Check back soon.
          </div>
        </div>
      </section>
    </>
  );
}
