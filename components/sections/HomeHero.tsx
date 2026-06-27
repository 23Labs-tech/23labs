import { ButtonLink } from "@/components/ui/ButtonLink";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";

export function HomeHero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="reveal in">
          <div className="sec-tag">Automation &amp; Software Studio</div>
          <h1>Modern Systems for Growing Businesses</h1>
          <p className="lead">
            We design and build the automation, custom software, and AI tools that remove busywork
            quietly in the background, so your team can focus on the work that actually grows the business.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#contact">Talk To Us</ButtonLink>
            <ButtonLink href="/work" variant="secondary">
              See our work
            </ButtonLink>
          </div>
        </div>

        <div className="reveal in hero-visual">
          <div className="hero-art">
            <PlaceholderArt className="placeholder-art" />
          </div>
          <div className="hero-card">
            <span className="mono">Built around your business</span>
            <p>Practical technology, designed to fit how your team already works.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
