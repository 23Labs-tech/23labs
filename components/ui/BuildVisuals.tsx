function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 250" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="399" height="249" fill="#ffffff" />
      {children}
    </svg>
  );
}

export function AutomationVisual() {
  return (
    <Frame>
      <g stroke="#d3d3d7" strokeWidth="1.4" fill="none">
        <rect x="30" y="40" width="86" height="52" rx="10" />
        <rect x="284" y="40" width="86" height="52" rx="10" />
        <rect x="157" y="158" width="86" height="52" rx="10" />
        <path d="M116 66 C 150 66, 150 66, 168 158" />
        <path d="M284 66 C 250 66, 250 66, 232 158" />
      </g>
      <g fill="#b9b9be">
        <circle cx="73" cy="66" r="3" />
        <circle cx="327" cy="66" r="3" />
      </g>
      <circle cx="200" cy="184" r="4" fill="#f14e2d" />
      <g stroke="#c4c4c8" strokeWidth="1.2">
        <line x1="49" y1="58" x2="97" y2="58" />
        <line x1="49" y1="70" x2="85" y2="70" />
        <line x1="303" y1="58" x2="351" y2="58" />
        <line x1="303" y1="70" x2="339" y2="70" />
        <line x1="176" y1="176" x2="224" y2="176" />
        <line x1="176" y1="188" x2="212" y2="188" />
      </g>
    </Frame>
  );
}

export function SoftwareVisual() {
  return (
    <Frame>
      <rect x="30" y="34" width="340" height="182" rx="12" fill="#ffffff" stroke="#d3d3d7" strokeWidth="1.4" />
      <line x1="30" y1="66" x2="370" y2="66" stroke="#e4e4e7" strokeWidth="1.2" />
      <circle cx="48" cy="50" r="4" fill="#e4e4e7" />
      <circle cx="64" cy="50" r="4" fill="#e4e4e7" />
      <circle cx="80" cy="50" r="4" fill="#e4e4e7" />
      <g stroke="#c9c9cd" strokeWidth="1.3" fill="none">
        <rect x="50" y="86" width="90" height="106" rx="6" />
        <rect x="156" y="86" width="214" height="46" rx="6" />
        <rect x="156" y="146" width="102" height="46" rx="6" />
        <rect x="268" y="146" width="102" height="46" rx="6" />
      </g>
      <polyline points="60,170 78,148 96,158 114,120 128,138" fill="none" stroke="#f14e2d" strokeWidth="1.6" />
    </Frame>
  );
}

export function IntegrationVisual() {
  return (
    <Frame>
      <g stroke="#d3d3d7" strokeWidth="1.4" fill="none">
        <circle cx="76" cy="70" r="26" />
        <circle cx="76" cy="180" r="26" />
        <circle cx="324" cy="70" r="26" />
        <circle cx="324" cy="180" r="26" />
        <rect x="166" y="99" width="68" height="52" rx="12" />
      </g>
      <g stroke="#c4c4c8" strokeWidth="1.2" fill="none">
        <path d="M100 78 C 140 90, 150 100, 166 112" />
        <path d="M100 172 C 140 158, 150 148, 166 138" />
        <path d="M298 78 C 260 90, 250 100, 234 112" />
        <path d="M298 172 C 260 158, 250 148, 234 138" />
      </g>
      <circle cx="200" cy="125" r="4" fill="#f14e2d" />
      <g stroke="#c9c9cd" strokeWidth="1.2">
        <line x1="64" y1="70" x2="88" y2="70" />
        <line x1="64" y1="180" x2="88" y2="180" />
        <line x1="312" y1="70" x2="336" y2="70" />
        <line x1="312" y1="180" x2="336" y2="180" />
      </g>
    </Frame>
  );
}

export function DigitalVisual() {
  return (
    <Frame>
      <rect x="40" y="30" width="230" height="150" rx="10" fill="#ffffff" stroke="#d3d3d7" strokeWidth="1.4" />
      <line x1="40" y1="56" x2="270" y2="56" stroke="#e4e4e7" strokeWidth="1.2" />
      <g stroke="#c9c9cd" strokeWidth="1.3" fill="none">
        <rect x="58" y="72" width="90" height="10" rx="5" />
        <rect x="58" y="92" width="140" height="60" rx="6" />
      </g>
      <rect x="292" y="58" width="70" height="140" rx="14" fill="#ffffff" stroke="#d3d3d7" strokeWidth="1.4" />
      <line x1="292" y1="76" x2="362" y2="76" stroke="#e4e4e7" strokeWidth="1.2" />
      <g stroke="#c9c9cd" strokeWidth="1.2" fill="none">
        <rect x="304" y="90" width="46" height="30" rx="5" />
        <line x1="304" y1="132" x2="350" y2="132" />
        <line x1="304" y1="144" x2="336" y2="144" />
      </g>
      <circle cx="327" cy="182" r="4" fill="#f14e2d" />
    </Frame>
  );
}
