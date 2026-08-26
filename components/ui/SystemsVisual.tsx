export function SystemsVisual() {
  return (
    <svg
      className="systems-visual"
      viewBox="0 0 1200 680"
      fill="none"
      role="img"
      aria-label="Abstract composition of translucent system panels connected by thin lines, representing software, automation, and data moving between business systems"
    >
      <defs>
        <linearGradient id="panelA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f2f2f4" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="panelB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#eceef0" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#e8e8ea" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e8e8ea" stopOpacity="0" />
        </radialGradient>
        <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="18" stdDeviation="24" floodColor="#1d1d1f" floodOpacity="0.12" />
        </filter>
        <filter id="soft-sm" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#1d1d1f" floodOpacity="0.1" />
        </filter>
      </defs>

      <ellipse cx="600" cy="300" rx="480" ry="260" fill="url(#glow)" />

      {/* connecting lines */}
      <g stroke="#c9c9cd" strokeWidth="1.2" fill="none">
        <path d="M300 200 C 420 150, 480 200, 560 260" />
        <path d="M900 180 C 800 160, 740 220, 680 280" />
        <path d="M340 470 C 440 420, 520 420, 600 380" />
        <path d="M840 460 C 760 420, 700 400, 640 370" />
      </g>
      <g fill="#9a9a9e">
        <circle cx="300" cy="200" r="3.5" />
        <circle cx="900" cy="180" r="3.5" />
        <circle cx="340" cy="470" r="3.5" />
        <circle cx="840" cy="460" r="3.5" />
      </g>

      {/* back panel: automation / workflow */}
      <g filter="url(#soft)">
        <rect x="120" y="130" width="330" height="210" rx="18" fill="url(#panelA)" stroke="#dcdce0" />
      </g>
      <g transform="translate(150,165)" stroke="#c4c4c8" strokeWidth="1.4" fill="none">
        <rect x="0" y="0" width="150" height="18" rx="9" />
        <rect x="0" y="40" width="270" height="1" />
        <circle cx="16" cy="80" r="10" fill="#f2f2f4" stroke="#c4c4c8" />
        <path d="M26 80 H120" />
        <circle cx="150" cy="80" r="10" fill="#f2f2f4" stroke="#c4c4c8" />
        <path d="M160 80 H254" />
        <circle cx="270" cy="80" r="10" fill="#fff" stroke="#f14e2d" strokeWidth="1.8" />
        <rect x="0" y="118" width="120" height="10" rx="5" />
        <rect x="0" y="140" width="80" height="10" rx="5" />
      </g>

      {/* front-right panel: dashboard */}
      <g filter="url(#soft)">
        <rect x="640" y="240" width="400" height="260" rx="18" fill="url(#panelB)" stroke="#dcdce0" />
      </g>
      <g transform="translate(670,268)" stroke="#c4c4c8" strokeWidth="1.4" fill="none">
        <rect x="0" y="0" width="120" height="14" rx="7" />
        <rect x="300" y="0" width="40" height="40" rx="10" />
        <line x1="0" y1="42" x2="340" y2="42" />
        <polyline points="0,150 60,110 120,130 180,70 240,95 300,40 340,60" strokeWidth="2" />
        <rect x="0" y="176" width="90" height="34" rx="6" />
        <rect x="104" y="176" width="90" height="34" rx="6" />
        <rect x="208" y="176" width="132" height="34" rx="6" />
      </g>

      {/* small floating card: integrations */}
      <g filter="url(#soft-sm)">
        <rect x="470" y="380" width="200" height="130" rx="16" fill="#ffffff" stroke="#dcdce0" />
      </g>
      <g transform="translate(494,408)" stroke="#c4c4c8" strokeWidth="1.4" fill="none">
        <circle cx="12" cy="12" r="10" />
        <circle cx="140" cy="12" r="10" />
        <path d="M22 12 H130" />
        <circle cx="76" cy="52" r="10" fill="#fff" />
        <path d="M76 22 V42 M12 22 C12 40, 76 40, 76 42 M140 22 C140 40, 76 40, 76 42" />
        <rect x="0" y="78" width="152" height="9" rx="4.5" />
        <rect x="0" y="96" width="104" height="9" rx="4.5" />
      </g>
    </svg>
  );
}
