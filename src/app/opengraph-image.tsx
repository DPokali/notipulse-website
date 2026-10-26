import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} - notification history for Android`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background:
            "linear-gradient(145deg, #0c1222 0%, #111827 55%, #0f172a 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#0c1222",
              border: "3px solid #6ee7b7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
            }}
          >
            🔔
          </div>
          <span style={{ fontSize: 52, fontWeight: 700 }}>{siteConfig.name}</span>
        </div>
        <p style={{ fontSize: 34, lineHeight: 1.35, maxWidth: 900, color: "#cbd5e1" }}>
          Save and search your Android notification history
        </p>
        <p style={{ fontSize: 24, marginTop: 24, color: "#6ee7b7" }}>{siteConfig.domain}</p>
      </div>
    ),
    { ...size },
  );
}
