type IndustryIconProps = {
  icon: string;
  className?: string;
};

export function IndustryIcon({ icon, className = "industry-ico" }: IndustryIconProps) {
  return (
    <div className={className}>
      <IconSvg icon={icon} />
    </div>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconSvg({ icon }: { icon: string }) {
  if (icon === "construction") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18a8 8 0 0 1 16 0" />
        <path d="M2 18h20" />
        <path d="M12 18v-7" />
        <path d="M9 11a3 3 0 0 1 6 0" />
      </svg>
    );
  }

  if (icon === "freight") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h11v8H3z" />
        <path d="M14 11h4l3 3v1h-7z" />
        <circle cx="7.5" cy="18" r="1.6" />
        <circle cx="17.5" cy="18" r="1.6" />
      </svg>
    );
  }

  if (icon === "professional") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </svg>
    );
  }

  if (icon === "health") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.35-9.4-8.5C.8 9 2.2 5 5.8 5c2 0 3.4 1.4 4.4 2.9C11.2 6.4 12.6 5 14.6 5c3.6 0 5 4 3.2 7.5C19.4 16.65 12 21 12 21z" />
      </svg>
    );
  }

  if (icon === "real-estate") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11 12 4l9 7" />
        <path d="M5 10v9h14v-9" />
        <path d="M10 19v-5h4v5" />
      </svg>
    );
  }

  if (icon === "trades") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a4 4 0 0 1-4.8 4.8L4.3 22.6a1.5 1.5 0 0 1-2.1-2.1L13.7 8.9a4 4 0 0 1 4.8-4.8z" />
      </svg>
    );
  }

  if (icon === "automation") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
      </svg>
    );
  }

  if (icon === "software" || icon === "dashboard" || icon === "portal") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    );
  }

  if (icon === "integration") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <path d="M8.5 7.5 10 16M15.5 7.5 14 16" />
      </svg>
    );
  }

  if (icon === "ai") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="16" height="11" rx="3" />
        <circle cx="8.5" cy="13.5" r="1.2" />
        <circle cx="15.5" cy="13.5" r="1.2" />
        <path d="M12 8V5" />
        <circle cx="12" cy="4" r="1" />
        <path d="M2 13h2M20 13h2" />
      </svg>
    );
  }

  if (icon === "document") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
    );
  }

  if (icon === "bell") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    );
  }

  if (icon === "eye") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  if (icon === "message" || icon === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    );
  }

  if (icon === "user") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  }

  if (icon === "chart") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 16v-5M12 16V8M16 16v-8" />
      </svg>
    );
  }

  if (icon === "calendar") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 11h18" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v6h-6" />
    </svg>
  );
}
