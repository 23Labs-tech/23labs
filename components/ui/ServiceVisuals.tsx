const LINE = "#c6d2e2";
const LINE_SOFT = "#dde4ee";
const ACCENT = "#1769e0";
const ACCENT_SOFT = "#5b9df5";

function Field({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 480 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <rect width="480" height="400" fill="#eef4fc" />
      <ellipse cx="240" cy="160" rx="230" ry="170" fill="#ffffff" opacity="0.6" />
      {children}
    </svg>
  );
}

export function WorkflowField({ className }: { className?: string }) {
  return (
    <Field className={className}>
      <g stroke={LINE} strokeWidth="1.6" fill="none">
        <rect x="90" y="90" width="110" height="64" rx="12" fill="#ffffff" />
        <rect x="280" y="90" width="110" height="64" rx="12" fill="#ffffff" />
        <rect x="185" y="226" width="110" height="64" rx="12" fill="#ffffff" />
        <path d="M200 122 C 230 122, 230 122, 240 226" />
        <path d="M280 122 C 250 122, 250 122, 240 226" />
      </g>
      <circle cx="240" cy="258" r="6" fill={ACCENT} />
      <g stroke={LINE} strokeWidth="1.3">
        <line x1="112" y1="112" x2="168" y2="112" />
        <line x1="112" y1="130" x2="152" y2="130" />
        <line x1="302" y1="112" x2="358" y2="112" />
        <line x1="302" y1="130" x2="342" y2="130" />
      </g>
    </Field>
  );
}

export function DocumentField({ className }: { className?: string }) {
  return (
    <Field className={className}>
      <rect x="130" y="80" width="150" height="200" rx="14" fill="#ffffff" stroke={LINE_SOFT} />
      <line x1="130" y1="118" x2="280" y2="118" stroke={LINE_SOFT} />
      <g stroke={LINE} strokeWidth="1.4" fill="none">
        <rect x="150" y="140" width="60" height="9" rx="4.5" />
        <rect x="150" y="160" width="110" height="9" rx="4.5" />
        <rect x="150" y="180" width="90" height="9" rx="4.5" />
      </g>
      <rect x="300" y="130" width="70" height="140" rx="12" fill="#ffffff" stroke={ACCENT} strokeWidth="1.6" />
      <g stroke={ACCENT} strokeWidth="1.6">
        <line x1="316" y1="160" x2="354" y2="160" />
        <line x1="316" y1="184" x2="340" y2="184" />
      </g>
      <circle cx="335" cy="214" r="10" fill="none" stroke={ACCENT} strokeWidth="1.6" />
      <path d="M284 180 L296 180" stroke={ACCENT} strokeWidth="1.6" />
    </Field>
  );
}

export function DashboardField({ className }: { className?: string }) {
  return (
    <Field className={className}>
      <rect x="110" y="80" width="260" height="190" rx="16" fill="#ffffff" stroke={LINE_SOFT} strokeWidth="1.4" />
      <line x1="110" y1="118" x2="370" y2="118" stroke={LINE_SOFT} strokeWidth="1.2" />
      <circle cx="132" cy="99" r="4" fill={LINE_SOFT} />
      <circle cx="148" cy="99" r="4" fill={LINE_SOFT} />
      <g stroke={LINE} strokeWidth="1.3" fill="none">
        <rect x="132" y="138" width="80" height="94" rx="8" />
        <rect x="226" y="138" width="124" height="40" rx="8" />
        <rect x="226" y="192" width="60" height="40" rx="8" />
        <rect x="294" y="192" width="56" height="40" rx="8" />
      </g>
      <polyline points="144,206 160,178 176,190 192,154 206,170" fill="none" stroke={ACCENT} strokeWidth="2" />
      <circle cx="206" cy="170" r="4" fill={ACCENT} />
    </Field>
  );
}

export function AgentField({ className }: { className?: string }) {
  return (
    <Field className={className}>
      <rect x="150" y="70" width="180" height="210" rx="20" fill="#ffffff" stroke={LINE_SOFT} strokeWidth="1.4" />
      <line x1="150" y1="110" x2="330" y2="110" stroke={LINE_SOFT} />
      <circle cx="172" cy="90" r="10" fill="#eef4fc" stroke={ACCENT} strokeWidth="1.6" />
      <g stroke={LINE} strokeWidth="1.3" fill="none">
        <rect x="192" y="83" width="96" height="9" rx="4.5" />
        <rect x="168" y="130" width="140" height="32" rx="10" />
        <rect x="188" y="172" width="120" height="32" rx="10" />
      </g>
      <rect x="178" y="214" width="150" height="38" rx="19" fill="#eef4fc" stroke={ACCENT} strokeWidth="1.4" />
      <circle cx="198" cy="233" r="4" fill={ACCENT} />
      <circle cx="216" cy="233" r="4" fill={ACCENT} opacity="0.6" />
      <circle cx="234" cy="233" r="4" fill={ACCENT} opacity="0.3" />
    </Field>
  );
}

export function IntegrationField({ className }: { className?: string }) {
  return (
    <Field className={className}>
      <g stroke={LINE} strokeWidth="1.6" fill="none">
        <circle cx="130" cy="130" r="30" fill="#ffffff" />
        <circle cx="130" cy="260" r="30" fill="#ffffff" />
        <circle cx="350" cy="130" r="30" fill="#ffffff" />
        <circle cx="350" cy="260" r="30" fill="#ffffff" />
        <rect x="205" y="165" width="70" height="60" rx="14" fill="#ffffff" />
      </g>
      <g stroke={LINE} strokeWidth="1.3" fill="none">
        <path d="M156 142 C 180 150, 190 160, 205 175" />
        <path d="M156 248 C 180 240, 190 230, 205 215" />
        <path d="M324 142 C 300 150, 290 160, 275 175" />
        <path d="M324 248 C 300 240, 290 230, 275 215" />
      </g>
      <circle cx="240" cy="195" r="5" fill={ACCENT} />
      <g stroke={LINE} strokeWidth="1.2">
        <line x1="118" y1="130" x2="142" y2="130" />
        <line x1="118" y1="260" x2="142" y2="260" />
        <line x1="338" y1="130" x2="362" y2="130" />
        <line x1="338" y1="260" x2="362" y2="260" />
      </g>
    </Field>
  );
}

export function ApiField({ className }: { className?: string }) {
  return (
    <Field className={className}>
      <rect x="200" y="160" width="80" height="80" rx="12" fill="#ffffff" stroke={ACCENT} strokeWidth="1.8" />
      <g stroke={LINE} strokeWidth="1.4" fill="none">
        <path d="M240 160 V110 M240 240 V290 M200 200 H150 M280 200 H330" />
        <path d="M150 150 H150 M150 150 V150" />
        <circle cx="150" cy="110" r="6" />
        <circle cx="330" cy="110" r="6" />
        <circle cx="150" cy="290" r="6" />
        <circle cx="330" cy="290" r="6" />
        <path d="M150 116 V150 H200" />
        <path d="M330 116 V150 H280" />
        <path d="M150 284 V250 H200" />
        <path d="M330 284 V250 H280" />
      </g>
      <circle cx="240" cy="200" r="5" fill={ACCENT} />
    </Field>
  );
}

export function DataFlowField({ className }: { className?: string }) {
  return (
    <Field className={className}>
      <g stroke={LINE} strokeWidth="1.4" fill="none">
        <path d="M70 140 C 160 150, 220 180, 300 190" />
        <path d="M70 200 C 160 195, 220 195, 300 200" />
        <path d="M70 260 C 160 250, 220 220, 300 210" />
      </g>
      <g stroke={ACCENT} strokeWidth="1.8" fill="none">
        <path d="M300 190 C 340 192, 370 198, 400 200" />
        <path d="M300 200 C 340 200, 370 200, 400 200" />
        <path d="M300 210 C 340 208, 370 202, 400 200" />
      </g>
      <circle cx="400" cy="200" r="6" fill={ACCENT} />
      <circle cx="70" cy="140" r="4" fill={LINE} />
      <circle cx="70" cy="200" r="4" fill={LINE} />
      <circle cx="70" cy="260" r="4" fill={LINE} />
    </Field>
  );
}

export function PortalField({ className }: { className?: string }) {
  return (
    <Field className={className}>
      <rect x="110" y="90" width="260" height="190" rx="14" fill="#ffffff" stroke={LINE_SOFT} strokeWidth="1.4" />
      <line x1="110" y1="124" x2="370" y2="124" stroke={LINE_SOFT} />
      <circle cx="130" cy="107" r="4" fill={LINE_SOFT} />
      <circle cx="146" cy="107" r="4" fill={LINE_SOFT} />
      <circle cx="162" cy="107" r="4" fill={LINE_SOFT} />
      <g stroke={LINE} strokeWidth="1.3" fill="none">
        <rect x="132" y="146" width="90" height="12" rx="6" />
        <rect x="132" y="168" width="140" height="60" rx="8" />
        <rect x="282" y="146" width="68" height="82" rx="8" />
      </g>
      <rect x="132" y="244" width="100" height="18" rx="9" fill="#eef4fc" stroke={ACCENT} strokeWidth="1.4" />
    </Field>
  );
}

export function MonitorField({ className }: { className?: string }) {
  return (
    <Field className={className}>
      <rect x="120" y="90" width="240" height="160" rx="14" fill="#ffffff" stroke={LINE_SOFT} strokeWidth="1.4" />
      <line x1="120" y1="122" x2="360" y2="122" stroke={LINE_SOFT} />
      <g stroke={LINE} strokeWidth="1.3" fill="none">
        <circle cx="200" cy="190" r="36" />
        <path d="M200 160 A30 30 0 0 1 226 203" stroke={ACCENT} strokeWidth="2.4" />
        <rect x="256" y="160" width="84" height="12" rx="6" />
        <rect x="256" y="182" width="64" height="12" rx="6" />
        <rect x="256" y="204" width="74" height="12" rx="6" />
      </g>
      <text x="200" y="196" textAnchor="middle" fontSize="18" fill={ACCENT} fontFamily="sans-serif">
        ✓
      </text>
      <rect x="150" y="268" width="180" height="18" rx="9" fill="#eef4fc" stroke={ACCENT_SOFT} strokeWidth="1.2" />
    </Field>
  );
}
