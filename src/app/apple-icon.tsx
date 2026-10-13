import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b5a42",
          borderRadius: 38,
        }}
      >
        <svg width="112" height="132" viewBox="0 0 64 76" fill="none">
          <path d="M36.4 8.5 17.2 34.1c-.8 1.1 0 2.6 1.4 2.6h11.8l-2.2 18.8 19.1-26.1c.8-1.1 0-2.6-1.4-2.6H34.2z" fill="#fff" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
