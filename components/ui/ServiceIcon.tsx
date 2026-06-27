type ServiceIconProps = {
  slug: string;
  className?: string;
};

export function ServiceIcon({ slug, className = "svc-ico" }: ServiceIconProps) {
  return (
    <div className={className}>
      {slug === "ai-automation" ? (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
        </svg>
      ) : null}
      {slug === "web-development" ? (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      ) : null}
      {slug === "software-development" ? (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ) : null}
      {slug === "data-integration" ? (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <path d="M8.5 7.5 10 16M15.5 7.5 14 16" />
        </svg>
      ) : null}
    </div>
  );
}
