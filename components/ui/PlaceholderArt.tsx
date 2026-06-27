type PlaceholderArtProps = {
  className?: string;
  label?: boolean;
};

export function PlaceholderArt({ className = "", label = true }: PlaceholderArtProps) {
  return (
    <div className={`thumb-ph ${className}`.trim()}>
      <svg
        viewBox="0 0 64 64"
        width="30"
        height="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="8" width="56" height="48" rx="6" />
        <circle cx="22" cy="24" r="6" />
        <path d="M4 46 20 32 30 40 44 24 60 42" />
      </svg>
      {label ? <span className="mono">Image placeholder</span> : null}
    </div>
  );
}
