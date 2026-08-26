import { ButtonLink } from "@/components/ui/ButtonLink";
import { SystemsVisual } from "@/components/ui/SystemsVisual";

export function HomeHero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-in">
        <div className="reveal in hero-copy">
          <div className="sec-tag">Automation &amp; Software Studio</div>
          <h1>
            Modern Systems
            <br />
            for Growing Businesses
          </h1>
          <p className="lead">
            We design and build the automation, custom software, and systems that remove busywork
            quietly in the background, so your team can focus on the work that actually grows the
            business.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#contact" arrow={false}>
              Talk to us
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary">
              See our work
            </ButtonLink>
          </div>
        </div>

        <div className="reveal in hero-visual" aria-hidden="true">
          <SystemsVisual />
        </div>
      </div>
    </header>
  );
}
