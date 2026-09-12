import { PHONE_DISPLAY } from "../../lib/utils";
import { PHONE_TEL } from "../../lib/utils";
import { Phone } from "lucide-react";
import { COLORS } from "../../lib/utils";

export function CallButton({ variant = "primary", full = false, size = "md", label = `Call ${PHONE_DISPLAY}` }) {
    const isPrimary = variant === "primary";
    const pad = size === "lg" ? "0.9rem 1.6rem" : "0.65rem 1.15rem";
    const fontSize = size === "lg" ? "1.02rem" : "0.9rem";
    return (
      <a
        href={PHONE_TEL}
        className={`inline-flex items-center justify-center gap-2 rounded transition-transform ${full ? "w-full" : ""}`}
        style={{
          backgroundColor: isPrimary ? COLORS.ember : "transparent",
          color: isPrimary ? "#fff" : COLORS.ink,
          border: isPrimary ? "none" : `1.5px solid ${COLORS.border}`,
          padding: pad,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize,
        }}
        onMouseEnter={(e) => {
          if (isPrimary) e.currentTarget.style.backgroundColor = COLORS.emberDark;
        }}
        onMouseLeave={(e) => {
          if (isPrimary) e.currentTarget.style.backgroundColor = COLORS.ember;
        }}
      >
        <Phone size={16} strokeWidth={2.25} />
        {label}
      </a>
    );
  }