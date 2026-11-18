"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { trackCtaClick } from "@/lib/analytics";

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function HomeHero() {
  return (
    <header className="hero" id="top">
      <div className="wrap home-wrap hero-in reveal in">
        <h1>We solve business problems with technology</h1>
        <p className="hero-intro">
          We help businesses automate repetitive tasks, connect their existing systems and build
          custom software that makes everyday operations simpler and more efficient.
        </p>
        <div className="hero-cta-row">
          <ButtonLink
            href="/contact"
            variant="secondary"
            className="hero-cta"
            onClick={() => trackCtaClick("home-hero-primary")}
          >
            Let&apos;s Talk
          </ButtonLink>
          <Link href="/work" className="hero-text-link" onClick={() => trackCtaClick("home-hero-secondary")}>
            See Our Work
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
