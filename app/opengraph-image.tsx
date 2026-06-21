import { ImageResponse } from "next/og"
import { site } from "@/content/site"

export const alt = `${site.name}, ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(60% 60% at 18% 0%, rgba(94,230,181,0.18), transparent 60%)",
          padding: 80,
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600, letterSpacing: -1 }}>
            <span style={{ color: "#5ee6b5" }}>{site.brand[0]}</span>
            <span>{site.brand.slice(1)}</span>
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#5ee6b5",
              textTransform: "uppercase",
              letterSpacing: 4,
            }}
          >
            Fintech & Payments
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: -3, lineHeight: 1.05, maxWidth: 980 }}>
            I build software that ships, and holds up when it matters.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 34, fontWeight: 600 }}>{site.name}</div>
            <div style={{ fontSize: 24, color: "#a0a0a8" }}>{site.role}</div>
          </div>
          <div style={{ fontSize: 22, color: "#6e6e78" }}>{site.domain}</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
