import { ButtonLink } from "@/components/ui/ButtonLink";

type DetailPageHeroCta = {
  label: string;
  href: string;
};

type DetailPageHeroProps = {
  eyebrow: string;
  title: string;
  subheading?: string;
  description: string;
  primaryCta: DetailPageHeroCta;
  secondaryCta?: DetailPageHeroCta;
};

export function DetailPageHero({
  eyebrow,
  title,
  subheading,
  description,
  primaryCta,
  secondaryCta,
}: DetailPageHeroProps) {
  return (
    <header className="detail-hero">
      <div className="wrap detail-hero-shell">
        <div className="detail-hero-content">
          <span className="mono">{eyebrow}</span>
          <h1>{title}</h1>
          {subheading ? <p className="detail-hero-sub">{subheading}</p> : null}
          <p className="lead">{description}</p>
          <div className="hero-actions">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
