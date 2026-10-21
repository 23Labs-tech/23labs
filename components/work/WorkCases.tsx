"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/data";

export function WorkCases() {
  const [openCases, setOpenCases] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const openFromHash = () => {
      const slug = window.location.hash.replace("#", "");
      if (!slug) return;
      setOpenCases((current) => ({ ...current, [slug]: true }));
      window.setTimeout(() => {
        document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <div className="case-list reveal">
      {caseStudies.map((item) => {
        const isOpen = Boolean(openCases[item.slug]);

        const thumb = (
          <div className="case-thumb">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(max-width: 780px) 84px, 140px"
              className="work-thumb-img"
            />
          </div>
        );
        const heading = (
          <div className="case-heading">
            <span className="work-tag">{item.type}</span>
            <h3>{item.name}</h3>
            <p>{item.problem}</p>
          </div>
        );

        if (item.href) {
          return (
            <article className="case" id={item.slug} key={item.slug}>
              <Link className="case-trigger" href={item.href}>
                {thumb}
                {heading}
                <div className="case-toggle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </div>
              </Link>
            </article>
          );
        }

        return (
          <article className="case" id={item.slug} data-open={isOpen ? "true" : "false"} key={item.slug}>
            <button
              className="case-trigger"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenCases((current) => ({ ...current, [item.slug]: !current[item.slug] }))}
            >
              {thumb}
              {heading}
              <div className="case-toggle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </button>
            <div className="case-panel">
              <div className="case-panel-in">
                <div className="case-grid">
                  <div className="case-block">
                    <span className="tag">The challenge</span>
                    <p>{item.challenge}</p>
                  </div>
                  <div className="case-block">
                    <span className="tag">Our approach</span>
                    <p>{item.approach}</p>
                  </div>
                  <div className="case-block">
                    <span className="tag">The result</span>
                    <p>{item.result}</p>
                  </div>
                </div>
                <div className="case-stack">
                  {item.tags.map((tag) => (
                    <span className="case-chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
