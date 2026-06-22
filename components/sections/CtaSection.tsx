import { ButtonLink } from "@/components/ui/ButtonLink";

type CtaSectionProps = {
  title: string;
  body: string;
  href: string;
  label: string;
};

export function CtaSection({ title, body, href, label }: CtaSectionProps) {
  return (
    <section className="section">
      <div className="container cta-panel">
        <h2>{title}</h2>
        <p>{body}</p>
        <ButtonLink href={href} variant="light">
          {label}
        </ButtonLink>
      </div>
    </section>
  );
}
