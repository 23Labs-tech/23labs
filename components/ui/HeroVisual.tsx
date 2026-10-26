export function HeroVisual() {
  return (
    <svg
      className="hero-visual-svg"
      viewBox="0 0 1200 620"
      fill="none"
      role="img"
      aria-label="Abstract composition of connected business system panels: a workflow board, a live dashboard, and a data sync card linked by thin lines"
    >
      <defs>
        <linearGradient id="panelFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f3f7fc" />
        </linearGradient>
        <radialGradient id="heroGlow" cx="50%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#e3effd" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e3effd" stopOpacity="0" />
        </radialGradient>
        <filter id="heroShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="20" stdDeviation="26" floodColor="#0b1f3a" floodOpacity="0.14" />
        </filter>
        <filter id="heroShadowSm" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0b1f3a" floodOpacity="0.12" />
        </filter>
      </defs>

      <ellipse cx="600" cy="280" rx="520" ry="260" fill="url(#heroGlow)" />

      <g stroke="#b9cae0" strokeWidth="1.3" fill="none">
        <path d="M300 190 C 410 150, 470 190, 548 250" />
        <path d="M900 170 C 800 150, 740 210, 672 262" />
        <path d="M330 470 C 430 420, 520 420, 600 380" />
        <path d="M860 450 C 770 420, 700 400, 636 372" />
      </g>
      <g fill="#1769e0">
        <circle cx="300" cy="190" r="3.5" />
        <circle cx="900" cy="170" r="3.5" />
        <circle cx="330" cy="470" r="3.5" />
        <circle cx="860" cy="450" r="3.5" />
      </g>

      {/* left panel: workflow board */}
      <g filter="url(#heroShadow)">
        <rect x="110" y="120" width="340" height="220" rx="18" fill="url(#panelFill)" stroke="#dde4ee" />
      </g>
      <g transform="translate(140,152)" stroke="#c6d2e2" strokeWidth="1.4" fill="none">
        <rect x="0" y="0" width="140" height="16" rx="8" />
        <rect x="0" y="36" width="280" height="1" />
        <circle cx="16" cy="78" r="11" fill="#eef4fc" stroke="#1769e0" strokeWidth="1.8" />
        <path d="M27 78 H120" />
        <circle cx="136" cy="78" r="11" fill="#eef4fc" stroke="#c6d2e2" />
        <path d="M147 78 H240" />
        <circle cx="256" cy="78" r="11" fill="#eef4fc" stroke="#c6d2e2" />
        <rect x="0" y="118" width="130" height="10" rx="5" />
        <rect x="0" y="140" width="90" height="10" rx="5" />
        <rect x="0" y="162" width="110" height="10" rx="5" />
      </g>

      {/* right panel: live dashboard */}
      <g filter="url(#heroShadow)">
        <rect x="620" y="230" width="420" height="270" rx="18" fill="url(#panelFill)" stroke="#dde4ee" />
      </g>
      <g transform="translate(650,258)" stroke="#c6d2e2" strokeWidth="1.4" fill="none">
        <rect x="0" y="0" width="120" height="14" rx="7" />
        <rect x="310" y="0" width="40" height="40" rx="10" />
        <line x1="0" y1="42" x2="360" y2="42" />
        <polyline points="0,160 60,120 120,140 180,74 240,100 300,44 360,66" strokeWidth="2" stroke="#1769e0" />
        <rect x="0" y="186" width="94" height="36" rx="7" />
        <rect x="108" y="186" width="94" height="36" rx="7" />
        <rect x="216" y="186" width="144" height="36" rx="7" />
      </g>

      {/* floating card: sync */}
      <g filter="url(#heroShadowSm)">
        <rect x="470" y="380" width="210" height="140" rx="16" fill="#ffffff" stroke="#dde4ee" />
      </g>
      <g transform="translate(496,410)" stroke="#c6d2e2" strokeWidth="1.4" fill="none">
        <circle cx="12" cy="12" r="10" />
        <circle cx="146" cy="12" r="10" />
        <path d="M22 12 H136" />
        <circle cx="79" cy="56" r="10" fill="#eef4fc" stroke="#1769e0" strokeWidth="1.8" />
        <path d="M79 22 V46 M12 22 C12 42, 79 42, 79 46 M146 22 C146 42, 79 42, 79 46" />
        <rect x="0" y="86" width="158" height="9" rx="4.5" />
        <rect x="0" y="104" width="108" height="9" rx="4.5" />
      </g>
    </svg>
  );
}
