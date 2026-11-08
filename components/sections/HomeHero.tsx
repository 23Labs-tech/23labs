import { ButtonLink } from "@/components/ui/ButtonLink";

export function HomeHero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-in reveal in">
        <h1>
          Custom software and automation for businesses that have{" "}
          <span className="hero-accent">outgrown manual work</span>
        </h1>
        <p className="hero-lead">
          Business automation, custom software and system integrations for Australian and New
          Zealand businesses still running on spreadsheets and manual handoffs.
        </p>
        <div className="hero-cta-row">
          <ButtonLink href="/contact" className="hero-cta">
            Start a conversation
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary">
            See client work
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
