import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HomeHero() {
  return (
    <section className="hero hero-home">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Automation and software studio</p>
          <h1>
            Helping businesses scale with <span>confidence</span>
          </h1>
          <p className="hero-lead">
            We design and build the automation, custom software, and AI tools that remove busywork
            quietly in the background, so your team can focus on the work that actually grows the business.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Talk to us</ButtonLink>
            <ButtonLink href="/work" variant="secondary">
              See our work
            </ButtonLink>
          </div>
        </div>

        <div className="hero-art-wrap">
          <div className="hero-art" aria-label="23Labs workflow dashboard illustration">
            <div className="hero-window">
              <div className="hero-window-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-window-grid">
                <div className="hero-window-panel hero-window-panel-large">
                  <span>Automation flow</span>
                  <strong>4 live workflows</strong>
                </div>
                <div className="hero-window-panel">
                  <span>Lead response</span>
                  <strong>2m</strong>
                </div>
                <div className="hero-window-panel">
                  <span>Admin saved</span>
                  <strong>12.5h</strong>
                </div>
                <div className="hero-window-list">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <Image src="/23labs-brand-mark.png" alt="" width={180} height={180} className="hero-art-mark" />
          </div>
          <div className="hero-card">
            <span>Built around your business</span>
            <p>Practical technology designed to fit how your team already works.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
