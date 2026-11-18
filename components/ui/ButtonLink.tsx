import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
  onClick,
}: ButtonLinkProps) {
  const variantClass =
    variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-ghost" : "btn-light";
  const classes = `btn ${variantClass} ${className}`.trim();
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel} rel="noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </Link>
  );
}
