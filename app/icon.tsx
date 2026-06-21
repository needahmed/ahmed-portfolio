import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

// Monogram favicon — mint "A", neutral "P" on near-black.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          borderRadius: 14,
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: -1,
          fontFamily: "sans-serif",
        }}
      >
        <span style={{ color: "#5ee6b5" }}>A</span>
        <span style={{ color: "#ededed" }}>P</span>
      </div>
    ),
    { ...size },
  )
}
