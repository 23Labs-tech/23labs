type ValueIconProps = {
  icon: "practical" | "usable" | "partners" | "impact";
  className?: string;
};

export function ValueIcon({ icon, className = "think-icon" }: ValueIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon === "practical" ? (
        <>
          <path d="M3 17 9 11 13 15 21 7" />
          <path d="M21 13V7h-6" />
        </>
      ) : null}
      {icon === "usable" ? (
        <>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </>
      ) : null}
      {icon === "partners" ? (
        <>
          <circle cx="8.5" cy="10" r="3.5" />
          <circle cx="16" cy="9" r="3" />
          <path d="M2.5 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M16.5 13.5c2.6 0.4 4 2.4 4 6.5" />
        </>
      ) : null}
      {icon === "impact" ? (
        <>
          <path d="M4 20v-5" />
          <path d="M11 20v-9" />
          <path d="M18 20V7" />
          <path d="M2.5 20h19" />
        </>
      ) : null}
    </svg>
  );
}
