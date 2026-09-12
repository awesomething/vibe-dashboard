"use client";

import { PHONE_TEL } from "../../lib/utils";
import { Phone } from "lucide-react";
import { scrollToId } from "../../lib/utils";
import { COLORS } from "../../lib/utils";
export function MobileStickyCTA() {
    return (
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex gap-2 px-4 py-3"
        style={{ backgroundColor: "#fff", borderTop: `1px solid ${COLORS.border}`, boxShadow: "0 -4px 16px rgba(0,0,0,0.06)" }}
      >
        <a
          href={PHONE_TEL}
          className="flex-1 flex items-center justify-center gap-2 rounded"
          style={{
            backgroundColor: COLORS.ember,
            color: "#fff",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "0.92rem",
            padding: "0.8rem",
          }}
        >
          <Phone size={16} strokeWidth={2.5} />
          Call Now
        </a>
        <button
          onClick={() => scrollToId("request-service")}
          className="flex-1 flex items-center justify-center rounded"
          style={{
            backgroundColor: COLORS.navy,
            color: "#fff",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "0.92rem",
            padding: "0.8rem",
          }}
        >
          Request Service
        </button>
      </div>
    );
  }
  