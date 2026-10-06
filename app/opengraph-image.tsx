import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt =
  "Funngro revamp — earn online with India's biggest brands";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "#FAF7F2",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "64px",
            right: "96px",
            width: "180px",
            height: "180px",
            borderRadius: "999px",
            background: "#FFD84D",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "72px",
            right: "220px",
            width: "96px",
            height: "96px",
            borderRadius: "999px",
            background: "#FF6B4A",
          }}
        />
        <div
          style={{
            fontSize: 28,
            letterSpacing: "4px",
            color: "#4F46E5",
            fontFamily: "sans-serif",
            fontWeight: 700,
          }}
        >
          FOR YOUNG INDIA · 14 TO 25
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: 92,
            lineHeight: 1.02,
            fontWeight: 800,
            color: "#14121F",
            fontFamily: "sans-serif",
            maxWidth: "820px",
          }}
        >
          Your skills deserve more than likes.
        </div>
        <div
          style={{
            marginTop: "36px",
            fontSize: 32,
            color: "#5E5A6B",
            fontFamily: "sans-serif",
          }}
        >
          70 lakh earners · 5,000+ brands · UPI payouts
        </div>
      </div>
    ),
    { ...size },
  );
}
