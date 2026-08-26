import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  ariaLabel?: string;
  arrow?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
  arrow: showArrow = variant !== "light",
}: ButtonLinkProps) {
  const variantClass =
    variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-ghost" : "btn-light";
  const classes = `btn ${variantClass} ${className}`.trim();
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const arrow = showArrow ? (
    <span className="btn-arrow" aria-hidden="true">
      {"\u2192"}
    </span>
  ) : null;

  if (isExternal) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel} rel="noreferrer">
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} aria-label={ariaLabel}>
      {children}
      {arrow}
    </Link>
  );
}
