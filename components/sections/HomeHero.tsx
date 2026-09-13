import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HomeHero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-in">
        <div className="reveal in hero-copy">
          <div className="sec-tag">Automation &amp; Software Studio</div>
          <h1>Modern Systems for Growing Businesses</h1>
          <p className="lead">
            We build business automation, custom software and connected systems that reduce manual
            work, improve operations and help growing businesses scale.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact" arrow={false}>
              Talk to us
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary">
              See our work
            </ButtonLink>
          </div>
        </div>

        <div className="reveal in hero-visual">
          <Image
            src="/home-hero-header.jpeg"
            alt="Abstract connected glass panels representing modern systems"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 55vw"
          />
          <div className="hero-float-card">
            <span className="mono">Custom software</span>
            <p>Built around the business, not the other way around.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
