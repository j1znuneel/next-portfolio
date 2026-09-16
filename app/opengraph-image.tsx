import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Jishnu PN — Web Developer & UI/UX Designer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#09090b",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#10b981",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              color: "#71717a",
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            Available for work
          </span>
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Jishnu PN
        </h1>

        <p
          style={{
            fontSize: "32px",
            color: "#a1a1aa",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            marginTop: "16px",
          }}
        >
          Web Developer & UI/UX Designer
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"].map(
            (tech) => (
              <span
                key={tech}
                style={{
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  border: "1px solid #27272a",
                  color: "#a1a1aa",
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                {tech}
              </span>
            )
          )}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "#52525b",
              fontWeight: 500,
            }}
          >
            Kerala, India • j1znu-portfolio.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
