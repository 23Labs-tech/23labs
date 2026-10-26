import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroVisual } from "@/components/ui/HeroVisual";

export function HomeHero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-in reveal in">
        <h1>
          Custom software and automation
          <br />
          for businesses that have outgrown manual work
        </h1>
        <p className="hero-kicker">Modern systems for growing businesses.</p>
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
      <div className="hero-visual" aria-hidden="true">
        <HeroVisual />
      </div>
    </header>
  );
}
