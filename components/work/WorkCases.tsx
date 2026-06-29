"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
        const ctaHref = "ctaHref" in item ? item.ctaHref : undefined;
        const ctaLabel = "ctaLabel" in item ? item.ctaLabel : undefined;

        return (
          <article className="case" id={item.slug} data-open={isOpen ? "true" : "false"} key={item.slug}>
            <button
              className="case-trigger"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenCases((current) => ({ ...current, [item.slug]: !current[item.slug] }))}
            >
              <div className="case-thumb">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 780px) 84px, 140px"
                  className="work-thumb-img"
                />
              </div>
              <div className="case-heading">
                <span className="work-tag">{item.type}</span>
                <h3>{item.name}</h3>
                <p>{item.problem}</p>
              </div>
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
                {ctaHref ? (
                  <div className="case-cta">
                    <a href={ctaHref} target="_blank" rel="noreferrer" className="work-link">
                      {ctaLabel} <span aria-hidden="true">{"\u2192"}</span>
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
