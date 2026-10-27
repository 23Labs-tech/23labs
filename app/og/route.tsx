import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * Branded Open Graph card: /og?title=...&eyebrow=...
 * createMetadata() points pages here when they have no image of their own,
 * so every shared link shows the page it leads to instead of one generic image.
 */

const SIZE = { width: 1200, height: 630 };
const COLORS = {
  bg: "#0b1f3a",
  bg2: "#122a4d",
  ink: "#f3f7fc",
  inkSoft: "rgba(243, 247, 252, 0.64)",
  accent: "#5b9df5",
  line: "rgba(255, 255, 255, 0.14)",
};

function clean(value: string | null, fallback: string, max: number) {
  const text = (value ?? "").replace(/\s+/g, " ").trim() || fallback;
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

let fontsPromise: Promise<[Buffer, Buffer]> | null = null;
function loadFonts() {
  fontsPromise ??= Promise.all([
    readFile(join(process.cwd(), "assets/fonts/poppins-latin-500-normal.woff")),
    readFile(join(process.cwd(), "assets/fonts/poppins-latin-600-normal.woff")),
  ]);
  return fontsPromise;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = clean(searchParams.get("title"), "Automation, software and connected systems", 110);
  const eyebrow = clean(searchParams.get("eyebrow"), "23Labs", 48);
  const [medium, semibold] = await loadFonts();
  const titleSize = title.length > 70 ? 54 : title.length > 40 ? 64 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: `linear-gradient(135deg, ${COLORS.bg} 0%, ${COLORS.bg2} 100%)`,
          color: COLORS.ink,
          fontFamily: "Poppins",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: COLORS.accent }} />
          <div style={{ fontSize: 26, fontWeight: 500, color: COLORS.accent, letterSpacing: 1 }}>
            {eyebrow.toUpperCase()}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: titleSize, fontWeight: 600, lineHeight: 1.15, maxWidth: 1000 }}>
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${COLORS.line}`,
            paddingTop: 28,
            fontSize: 26,
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex", fontWeight: 600, fontSize: 34 }}>23Labs</div>
          <div style={{ display: "flex", color: COLORS.inkSoft }}>www.23labs.co</div>
        </div>
      </div>
    ),
    {
      ...SIZE,
      fonts: [
        { name: "Poppins", data: medium, style: "normal", weight: 500 },
        { name: "Poppins", data: semibold, style: "normal", weight: 600 },
      ],
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=31536000, immutable",
      },
    },
  );
}
