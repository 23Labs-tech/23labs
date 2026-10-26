function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 440 280" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="439" height="279" fill="#ffffff" />
      {children}
    </svg>
  );
}

const LINE = "#c6d2e2";
const LINE_SOFT = "#dde4ee";
const ACCENT = "#1769e0";

export function AutomationVisual() {
  return (
    <Frame>
      <g stroke={LINE} strokeWidth="1.4" fill="none">
        <rect x="32" y="44" width="96" height="56" rx="10" />
        <rect x="312" y="44" width="96" height="56" rx="10" />
        <rect x="172" y="178" width="96" height="56" rx="10" />
        <path d="M128 72 C 170 72, 170 72, 196 178" />
        <path d="M312 72 C 270 72, 270 72, 244 178" />
      </g>
      <circle cx="220" cy="206" r="4.5" fill={ACCENT} />
      <g stroke={LINE} strokeWidth="1.2">
        <line x1="50" y1="64" x2="100" y2="64" />
        <line x1="50" y1="78" x2="88" y2="78" />
        <line x1="330" y1="64" x2="380" y2="64" />
        <line x1="330" y1="78" x2="368" y2="78" />
        <line x1="190" y1="198" x2="240" y2="198" />
        <line x1="190" y1="212" x2="228" y2="212" />
      </g>
    </Frame>
  );
}

export function DocumentVisual() {
  return (
    <Frame>
      <rect x="34" y="36" width="160" height="208" rx="12" fill="#ffffff" stroke={LINE_SOFT} />
      <line x1="34" y1="68" x2="194" y2="68" stroke={LINE_SOFT} />
      <g stroke={LINE} strokeWidth="1.3" fill="none">
        <rect x="52" y="86" width="60" height="9" rx="4.5" />
        <rect x="52" y="104" width="124" height="9" rx="4.5" />
        <rect x="52" y="122" width="100" height="9" rx="4.5" />
        <rect x="52" y="150" width="124" height="60" rx="6" />
      </g>
      <g transform="translate(238,70)">
        <rect x="0" y="0" width="166" height="150" rx="12" fill="#eef4fc" stroke={LINE_SOFT} />
        <g stroke={ACCENT} strokeWidth="1.6" fill="none">
          <path d="M26 40 H140" />
          <path d="M26 70 H110" />
          <path d="M26 100 H126" />
        </g>
        <circle cx="140" cy="100" r="5" fill={ACCENT} />
      </g>
      <path
        d="M198 110 L232 110"
        stroke={ACCENT}
        strokeWidth="1.6"
        markerEnd="url(#arrow)"
        fill="none"
      />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={ACCENT} />
        </marker>
      </defs>
    </Frame>
  );
}

export function SoftwareVisual() {
  return (
    <Frame>
      <rect x="32" y="30" width="376" height="220" rx="14" fill="#ffffff" stroke={LINE_SOFT} strokeWidth="1.4" />
      <line x1="32" y1="66" x2="408" y2="66" stroke={LINE_SOFT} strokeWidth="1.2" />
      <circle cx="52" cy="48" r="4" fill={LINE_SOFT} />
      <circle cx="68" cy="48" r="4" fill={LINE_SOFT} />
      <circle cx="84" cy="48" r="4" fill={LINE_SOFT} />
      <g stroke={LINE} strokeWidth="1.3" fill="none">
        <rect x="54" y="90" width="98" height="118" rx="8" />
        <rect x="168" y="90" width="236" height="50" rx="8" />
        <rect x="168" y="156" width="112" height="52" rx="8" />
        <rect x="292" y="156" width="112" height="52" rx="8" />
      </g>
      <polyline
        points="64,186 82,160 100,172 118,128 136,148"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.8"
      />
      <circle cx="136" cy="148" r="3.5" fill={ACCENT} />
    </Frame>
  );
}

export function AgentVisual() {
  return (
    <Frame>
      <rect x="110" y="30" width="220" height="220" rx="20" fill="#ffffff" stroke={LINE_SOFT} strokeWidth="1.4" />
      <line x1="110" y1="68" x2="330" y2="68" stroke={LINE_SOFT} />
      <circle cx="132" cy="49" r="10" fill="#eef4fc" stroke={ACCENT} strokeWidth="1.6" />
      <g stroke={LINE} strokeWidth="1.3" fill="none">
        <rect x="150" y="42" width="110" height="9" rx="4.5" />
        <rect x="128" y="90" width="150" height="34" rx="10" />
        <rect x="150" y="136" width="128" height="34" rx="10" />
      </g>
      <g>
        <rect x="140" y="182" width="160" height="40" rx="20" fill="#eef4fc" stroke={ACCENT} strokeWidth="1.4" />
        <circle cx="160" cy="202" r="4" fill={ACCENT} />
        <circle cx="178" cy="202" r="4" fill={ACCENT} opacity="0.6" />
        <circle cx="196" cy="202" r="4" fill={ACCENT} opacity="0.3" />
      </g>
    </Frame>
  );
}
