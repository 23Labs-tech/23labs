import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCta() {
  return (
    <section className="sec final-cta">
      <div className="wrap final-cta-in reveal">
        <h2>Have something worth fixing?</h2>
        <p className="lead">
          Tell us where the team is losing time. We will tell you what we would build, and whether it
          is worth building.
        </p>
        <ButtonLink href="/contact">Start a conversation</ButtonLink>
      </div>
    </section>
  );
}
