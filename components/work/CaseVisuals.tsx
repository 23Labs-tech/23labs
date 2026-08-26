function DarkFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 640 360" fill="none" aria-hidden="true" style={{ width: "100%", height: "100%" }}>
      <rect x="0" y="0" width="640" height="360" fill="#17181a" />
      {children}
    </svg>
  );
}

const LINE = "rgba(245,245,247,0.28)";
const LINE_SOFT = "rgba(245,245,247,0.14)";
const TEXT = "rgba(245,245,247,0.62)";
const ACCENT = "#f14e2d";

export function HayloVisual() {
  return (
    <DarkFrame>
      {/* phone */}
      <rect x="60" y="60" width="130" height="240" rx="20" fill="none" stroke={LINE} strokeWidth="1.4" />
      <line x1="60" y1="90" x2="190" y2="90" stroke={LINE_SOFT} strokeWidth="1.2" />
      <path
        d="M84 200 L96 200 L102 176 L112 224 L120 190 L128 210 L136 200 L166 200"
        stroke={ACCENT}
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="125" cy="270" r="12" fill="none" stroke={LINE} strokeWidth="1.4" />

      {/* connecting line */}
      <path d="M190 150 C 250 150, 260 130, 310 130" stroke={LINE_SOFT} strokeWidth="1.2" fill="none" />
      <path d="M190 220 C 250 220, 260 250, 310 250" stroke={LINE_SOFT} strokeWidth="1.2" fill="none" />

      {/* booking calendar card */}
      <rect x="310" y="76" width="220" height="120" rx="14" fill="none" stroke={LINE} strokeWidth="1.4" />
      <line x1="310" y1="104" x2="530" y2="104" stroke={LINE_SOFT} strokeWidth="1.2" />
      <g stroke={LINE_SOFT} strokeWidth="1.1">
        {[0, 1, 2, 3, 4, 5].map((col) => (
          <line key={col} x1={334 + col * 32} y1={122} x2={334 + col * 32} y2={182} />
        ))}
      </g>
      <rect x="366" y="140" width="24" height="18" rx="4" fill={ACCENT} opacity="0.85" />

      {/* call summary card */}
      <rect x="310" y="206" width="220" height="110" rx="14" fill="none" stroke={LINE} strokeWidth="1.4" />
      <line x1="310" y1="234" x2="530" y2="234" stroke={LINE_SOFT} strokeWidth="1.2" />
      <line x1="330" y1="252" x2="480" y2="252" stroke={LINE_SOFT} strokeWidth="1.2" />
      <line x1="330" y1="268" x2="510" y2="268" stroke={LINE_SOFT} strokeWidth="1.2" />
      <line x1="330" y1="284" x2="440" y2="284" stroke={LINE_SOFT} strokeWidth="1.2" />
      <circle cx="330" cy="234" r="3" fill={ACCENT} />

      <text x="60" y="330" fill={TEXT} fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="1">
        CALL → QUALIFY → BOOK
      </text>
    </DarkFrame>
  );
}

function FlowDiagram({ steps }: { steps: string[] }) {
  const width = 640;
  const margin = 48;
  const gap = (width - margin * 2) / (steps.length - 1);
  const y = 180;

  return (
    <DarkFrame>
      <line x1={margin} y1={y} x2={width - margin} y2={y} stroke={LINE_SOFT} strokeWidth="1.2" />
      {steps.map((step, index) => {
        const x = margin + gap * index;
        return (
          <g key={step}>
            <circle
              cx={x}
              cy={y}
              r={index === 0 || index === steps.length - 1 ? 7 : 6}
              fill={index === Math.floor(steps.length / 2) ? ACCENT : "#17181a"}
              stroke={LINE}
              strokeWidth="1.4"
            />
            <text
              x={x}
              y={y - 24}
              fill={TEXT}
              fontSize="11"
              fontFamily="ui-monospace, monospace"
              textAnchor="middle"
              letterSpacing="0.4"
            >
              {String(index + 1).padStart(2, "0")}
            </text>
            <foreignObject x={x - 62} y={y + 20} width="124" height="60">
              <div
                style={{
                  color: TEXT,
                  fontSize: 12,
                  lineHeight: 1.35,
                  textAlign: "center",
                  fontFamily: "inherit",
                }}
              >
                {step}
              </div>
            </foreignObject>
          </g>
        );
      })}
    </DarkFrame>
  );
}

export function CoritVisual() {
  return <FlowDiagram steps={["CRM", "Automation", "Accounting", "Provisioning", "Notification"]} />;
}

export function FirstNationalVisual() {
  return (
    <FlowDiagram
      steps={["Enquiry received", "Categorised", "CRM updated", "Assigned", "Reporting"]}
    />
  );
}
