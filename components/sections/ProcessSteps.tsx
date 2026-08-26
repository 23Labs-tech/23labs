"use client";

import { useEffect, useRef } from "react";
import { homeProcessBrief } from "@/lib/data";

export function ProcessSteps() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rows = Array.from(listRef.current?.querySelectorAll<HTMLElement>(".process-row") ?? []);
    if (!rows.length) return;

    if (!("IntersectionObserver" in window)) {
      rows.forEach((row) => row.classList.add("is-active"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-active", entry.isIntersecting);
        });
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="process-list" ref={listRef}>
      {homeProcessBrief.map((step) => (
        <article className="process-row" key={step.number}>
          <div className="process-k">{step.number}</div>
          <div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
