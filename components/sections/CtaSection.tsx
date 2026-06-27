import { ButtonLink } from "@/components/ui/ButtonLink";

type CtaSectionProps = {
  title: string;
  body: string;
  href: string;
  label: string;
};

export function CtaSection({ title, body, href, label }: CtaSectionProps) {
  return (
    <section className="sec">
      <div className="wrap cta-band reveal">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="hero-actions">
          <ButtonLink href={href}>{label}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
