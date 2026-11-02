import { ButtonLink } from "@/components/ui/ButtonLink";
import { stats } from "@/lib/data";

const heroStatLabels: Record<string, string> = {
  "60+": "projects shipped",
  "100+": "automations in production",
  "12+": "years building software",
};

export function HomeHero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-in reveal in">
        <h1>Custom software and automation for businesses that have outgrown manual work</h1>
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
        <div className="hero-stats" aria-label="23Labs project statistics">
          {stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{heroStatLabels[stat.value] ?? stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
