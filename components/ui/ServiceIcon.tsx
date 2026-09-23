type ServiceIconProps = {
  slug: string;
  className?: string;
};

export function ServiceIcon({ slug, className = "svc-ico" }: ServiceIconProps) {
  return (
    <div className={className}>
      {slug === "business-process-automation" ? (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
        </svg>
      ) : null}
      {slug === "ai-workflow-automation" ? (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M7 9h4M7 13h7M12 21v-4" />
        </svg>
      ) : null}
      {slug === "full-stack-software-development" ? (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ) : null}
      {slug === "ai-agents" ? (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="8" width="16" height="11" rx="3" />
          <circle cx="8.5" cy="13.5" r="1.2" />
          <circle cx="15.5" cy="13.5" r="1.2" />
          <path d="M12 8V5" />
          <circle cx="12" cy="4" r="1" />
          <path d="M2 13h2M20 13h2" />
        </svg>
      ) : null}
    </div>
  );
}
