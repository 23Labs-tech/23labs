"use client";

import { useEffect, useRef, useState } from "react";
import { stats as defaultStats } from "@/lib/data";

type Stat = {
  value: string;
  label: string;
};

type StatsBandProps = {
  stats?: Stat[];
  noTop?: boolean;
};

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      const frame = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(frame);
    }

    const duration = 1200;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function Stat({ value, label }: Stat) {
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(numeric, active);

  return (
    <div className="stat" ref={ref}>
      <div className="n">
        {count}
        <span className="plus">{suffix}</span>
      </div>
      <div className="l">{label}</div>
    </div>
  );
}

export function StatsBand({ stats = defaultStats, noTop = false }: StatsBandProps) {
  return (
    <section className={`sec stats-section${noTop ? " no-top" : ""}`}>
      <div className="wrap stats-band" aria-label="23Labs project statistics">
        {stats.map((stat) => (
          <Stat value={stat.value} label={stat.label} key={stat.label} />
        ))}
      </div>
    </section>
  );
}
