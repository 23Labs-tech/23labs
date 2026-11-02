import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { stats } from "@/lib/data";

export function HomeHero() {
  return (
    <header className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-in reveal in">
        <div className="hero-copy">
          <span className="hero-badge">Software and automation for growing businesses</span>
          <h1>
            Custom software and automation for businesses that have{" "}
            <span className="em">outgrown manual work</span>
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
            <ButtonLink href="/work" variant="secondary">
              See client work
            </ButtonLink>
          </div>
          <div className="hero-stats" aria-label="23Labs project statistics">
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-media">
          <Image
            src="/site-images/industries/freight-logistics.jpg"
            alt="Freight truck travelling on a highway at sunset"
            fill
            sizes="(max-width: 860px) 100vw, 55vw"
            priority
          />
        </div>
      </div>
    </header>
  );
}
