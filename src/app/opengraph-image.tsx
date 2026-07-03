import { ImageResponse } from "next/og";

export const alt = "North Group - Rekruttering, HR og sikkerhetskurs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e2c3d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Subtle gradient accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            background:
              "linear-gradient(135deg, transparent 0%, rgba(0,208,132,0.15) 100%)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            width="64"
            height="64"
          >
            <circle cx="50" cy="50" r="48" fill="#4B8FC7" />
            <path d="M 8 92 L 30 42 L 52 92 Z" fill="rgba(255,255,255,0.92)" />
            <path d="M 58 92 L 72 40 L 92 92 Z" fill="rgba(255,255,255,0.92)" />
            <path d="M 20 92 L 50 18 L 80 92 Z" fill="#ffffff" />
          </svg>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1,
            letterSpacing: "-2px",
            marginBottom: "16px",
          }}
        >
          North Group
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.4,
          }}
        >
          Rekruttering &middot; HR-tjenester &middot; Sikkerhetskurs
        </div>

        {/* Green accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#00d084",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
