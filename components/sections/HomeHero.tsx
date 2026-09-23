import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HomeHero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-in">
        <div className="reveal in hero-copy">
          <h1>
            <span className="hero-line">Modern systems</span>{" "}
            <span className="hero-line">for growing</span>{" "}
            <span className="hero-line">businesses.</span>
          </h1>
          <p className="hero-lead">
            We build business automation, custom software and connected systems that reduce manual
            work, improve operations and help growing businesses scale.
          </p>
          <div className="hero-cta-row">
            <ButtonLink href="/contact" className="hero-cta" arrow>
              Start a conversation
            </ButtonLink>
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
        </div>
      </div>
    </header>
  );
}
