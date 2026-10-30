import Image from "next/image";
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
  backgroundImage: { src: string; alt: string };
  backgroundPosition?: string;
};

export function DetailPageHero({
  eyebrow,
  title,
  subheading,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  backgroundPosition,
}: DetailPageHeroProps) {
  return (
    <header className="detail-hero">
      <div className="detail-hero-media">
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          priority
          sizes="100vw"
          style={backgroundPosition ? { objectPosition: backgroundPosition } : undefined}
        />
        <div className="detail-hero-overlay" aria-hidden="true" />
      </div>
      <div className="hero-wide detail-hero-shell">
        <div className="detail-hero-content">
          <span className="mono">{eyebrow}</span>
          <h1>{title}</h1>
          {subheading ? <p className="detail-hero-sub">{subheading}</p> : null}
          <p className="lead">{description}</p>
          <div className="hero-actions">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="light">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
