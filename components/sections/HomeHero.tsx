import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";

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
        <p className="hero-intro">
          Business automation, custom software and system integrations for Australian and New
          Zealand businesses still running on spreadsheets and manual handoffs.
        </p>
        <h1>
          Custom software and automation for businesses that have{" "}
          <span className="hero-accent">outgrown manual work</span>
        </h1>
        <div className="hero-cta-row">
          <ButtonLink href="/contact" variant="secondary" className="hero-cta">
            Start a conversation
          </ButtonLink>
          <Link href="/work" className="hero-text-link">
            See client work
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
