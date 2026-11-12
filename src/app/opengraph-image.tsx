import { ImageResponse } from "next/og";
import { site } from "@/data/content";

export const alt = `${site.name} — Backend Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0F",
          padding: 72,
        }}
      >
        {/* Gradient glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.28) 0%, rgba(139,92,246,0.16) 45%, rgba(10,10,15,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 16,
              background: "linear-gradient(135deg, #22D3EE, #8B5CF6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            JH
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#A1A1AA",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 86,
              fontWeight: 700,
              color: "#F4F4F5",
              lineHeight: 1.05,
              letterSpacing: -2.5,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 500,
              color: "#22D3EE",
            }}
          >
            Backend Engineer
          </div>
          <div
            style={{
              fontSize: 25,
              color: "#A1A1AA",
              maxWidth: 900,
              lineHeight: 1.45,
            }}
          >
            Event-driven microservices with Spring Boot, Kafka and Redis. ICPC
            finalist and Codeforces Expert.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Spring Boot", "Kafka", "Redis", "Microservices", "PostgreSQL"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "9px 18px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  color: "#A1A1AA",
                  fontSize: 19,
                }}
              >
                {tag}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
