"use client";

import { COLORS, scrollToId } from "../../lib/utils";

export function RequestButton({ full = false, variant = "solid" }) {
    const solid = variant === "solid";
    return (
      <button
        onClick={() => scrollToId("request-service")}
        className={`inline-flex items-center justify-center gap-2 rounded transition-colors ${full ? "w-full" : ""}`}
        style={{
          backgroundColor: solid ? COLORS.navy : "transparent",
          color: solid ? "#fff" : COLORS.navy,
          border: solid ? "none" : `1.5px solid ${COLORS.navy}`,
          padding: "0.9rem 1.6rem",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: "1.02rem",
        }}
      >
        Request Service
      </button>
    );
  }