"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { CalendlyWidget } from "@/components/contact/CalendlyWidget";

type ContactSectionProps = {
  id?: string;
  variant?: "band" | "page";
  eyebrow: string;
  title: string;
  highlight?: string;
  body: string | string[];
  showSocials?: boolean;
};

const STACK_BREAKPOINT = 1080;

export function ContactSection({
  id,
  variant = "band",
  title,
  body,
}: ContactSectionProps) {
  const bodyItems = Array.isArray(body) ? body : [body];
  const sectionClass =
    variant === "page" ? "sec contact-page-section" : "sec sec-alt";

  const copyRef = useRef<HTMLDivElement>(null);
  const [matchHeight, setMatchHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = copyRef.current;
    if (!el) return;

    function measure() {
      if (!el) return;
      if (window.innerWidth <= STACK_BREAKPOINT) {
        setMatchHeight(null);
        return;
      }
      setMatchHeight(Math.round(el.getBoundingClientRect().height));
    }

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section id={id} className={sectionClass}>
      <div className="wrap">
        <div className="contact-grid reveal">
          <div className="contact-copy" ref={copyRef}>
            <h2 className="sec-title">{title}</h2>
            {bodyItems.map((item) => (
              <p className="lead" key={item}>
                {item}
              </p>
            ))}
          </div>
          <CalendlyWidget matchHeight={matchHeight} />
        </div>
      </div>
    </section>
  );
}
