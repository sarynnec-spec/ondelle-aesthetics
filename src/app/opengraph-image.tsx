import { ImageResponse } from "next/og";
import { brand } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${brand.name} — ${brand.tagline}`;

/** Bordo e dourado medidos no logótipo real. */
const BORDO = "#3b0112";
const OURO = "#d6ac60";
const CREME = "#f3efe7";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: `radial-gradient(60% 55% at 50% 105%, #49041a 0%, transparent 70%), linear-gradient(168deg, ${BORDO} 25%, #2a0007 100%)`,
          color: CREME,
        }}
      >
        <div style={{ display: "flex", letterSpacing: "0.3em", fontSize: 26, color: OURO }}>
          {brand.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 78, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Beleza avançada.
          </div>
          <div style={{ fontSize: 78, lineHeight: 1.05, letterSpacing: "-0.03em", color: OURO }}>
            Resultados naturais.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 21,
            letterSpacing: "0.16em",
            color: "rgba(243,239,231,0.6)",
          }}
        >
          <span>CLÍNICA DE ESTÉTICA AVANÇADA</span>
          <span>{brand.city.toUpperCase()}</span>
        </div>
      </div>
    ),
    size,
  );
}
