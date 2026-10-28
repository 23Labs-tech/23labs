import { ButtonLink } from "@/components/ui/ButtonLink";

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
          <ButtonLink href="/contact" className="hero-cta">
            Start a conversation
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
