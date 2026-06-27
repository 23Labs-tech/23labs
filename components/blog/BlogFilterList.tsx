"use client";

import { useMemo, useState } from "react";
import { ReferenceBlogCard } from "@/components/blog/ReferenceBlogCard";

type ReferenceBlogPost = {
  slug: string;
  category: string;
  date: string;
  title: string;
  description: string;
};

type BlogFilterListProps = {
  posts: ReferenceBlogPost[];
};

const filters = ["All posts", "Automation", "Haylo AI", "Web Development", "App & Software", "Data Integration"];

export function BlogFilterList({ posts }: BlogFilterListProps) {
  const [active, setActive] = useState("All posts");
  const visiblePosts = useMemo(
    () => (active === "All posts" ? posts : posts.filter((post) => post.category === active)),
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
              <ReferenceBlogCard post={post} key={post.slug} />
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
