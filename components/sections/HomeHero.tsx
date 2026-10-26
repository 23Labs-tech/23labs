import { ButtonLink } from "@/components/ui/ButtonLink";

export function HomeHero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-in reveal in">
        <h1>
          Modern systems
          <br />
          for growing businesses.
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
    </header>
  );
}
