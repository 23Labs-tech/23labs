import { ButtonLink } from "@/components/ui/ButtonLink";

type CtaAction = {
  href: string;
  label: string;
};

type CtaPairProps = {
  primary: CtaAction;
  secondary?: CtaAction;
  className?: string;
};

/**
 * Shared primary/secondary call-to-action row. Reuses the existing
 * .hero-actions class (already proven across case-study, service and
 * solution CTA bands, including its mobile stacking rule), rather than
 * introducing new CSS, so this matches whichever page it's dropped into
 * without further styling work.
 */
export function CtaPair({ primary, secondary, className = "" }: CtaPairProps) {
  return (
    <div className={`hero-actions ${className}`.trim()}>
      <ButtonLink href={primary.href} variant="primary">
        {primary.label}
      </ButtonLink>
      {secondary ? (
        <ButtonLink href={secondary.href} variant="secondary">
          {secondary.label}
        </ButtonLink>
      ) : null}
    </div>
  );
}
