"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/23labs/30min";

function CalendlySkeleton() {
  return (
    <div className="calendly-skeleton" aria-hidden="true">
      <div className="cal-sk-bar cal-sk-header" />
      <div className="cal-sk-bar cal-sk-title" />
      <div className="cal-sk-bar cal-sk-row" />
      <div className="cal-sk-bar cal-sk-row short" />
      <div className="cal-sk-bar cal-sk-row short" />
      <div className="cal-sk-bar cal-sk-cal-heading" />
      <div className="cal-sk-grid">
        {Array.from({ length: 28 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}

export function CalendlyWidget() {
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const markReady = () => setIsReady(true);

    function onMessage(event: MessageEvent) {
      const data = event.data;
      if (
        data &&
        typeof data === "object" &&
        typeof data.event === "string" &&
        data.event.indexOf("calendly.") === 0
      ) {
        markReady();
      }
    }
    window.addEventListener("message", onMessage);

    const container = containerRef.current;
    let observer: MutationObserver | null = null;

    if (container) {
      observer = new MutationObserver(() => {
        const iframe = container.querySelector("iframe");
        if (iframe) {
          iframe.addEventListener("load", markReady, { once: true });
          observer?.disconnect();
        }
      });
      observer.observe(container, { childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener("message", onMessage);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="contact-calendly">
      {!isReady ? <CalendlySkeleton /> : null}
      <div ref={containerRef} className="calendly-inline-widget" data-url={CALENDLY_URL} />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </div>
  );
}
