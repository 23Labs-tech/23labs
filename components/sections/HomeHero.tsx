import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HomeHero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-in">
        <div className="reveal in hero-copy">
          <div className="hero-eyebrow">Automation &amp; Software Studio</div>
          <h1>
            Modern systems for
            <br />
            growing businesses.
          </h1>
          <p className="hero-lead">
            We build business automation, custom software and connected systems that reduce manual
            work, improve operations and help growing businesses scale.
          </p>
          <div className="hero-cta-row">
            <ButtonLink href="/contact" className="hero-cta" arrow>
              Start a conversation
            </ButtonLink>
            <div className="hero-trust">
              <div className="hero-trust-avatars">
                <span className="hero-trust-avatar tone-ink" aria-hidden="true" />
                <span className="hero-trust-avatar tone-mint" aria-hidden="true" />
                <span className="hero-trust-avatar tone-lilac" aria-hidden="true" />
              </div>
              <span className="hero-trust-label">Built for growing businesses</span>
            </div>
          </div>
        </div>

        <div className="reveal in hero-visual">
          <Image
            src="/home-hero-header.jpeg"
            alt="Abstract connected glass panels representing modern systems"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 54vw"
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
