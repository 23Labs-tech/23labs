import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/site/Logo";

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta-texture" aria-hidden="true" />
      <div className="wrap final-cta-in reveal">
        <Logo href={undefined} tone="light" className="final-cta-mark" />
        <h2>
          Have something worth fixing? Let&apos;s build the system{" "}
          <span className="em">your business actually needs</span>
        </h2>
        <ButtonLink href="/contact" variant="light">
          Start a conversation
        </ButtonLink>
      </div>
    </section>
  );
}
