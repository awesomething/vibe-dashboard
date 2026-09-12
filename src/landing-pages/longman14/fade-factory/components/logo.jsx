import { Scissors } from "lucide-react";
import { COLORS } from "./constants";

export function Logo({ dark }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
        style={{ border: `1.5px solid ${COLORS.gold}` }}
      >
        <Scissors size={16} color={COLORS.gold} />
      </div>
      <span
        style={{
          fontFamily: "'Bodoni Moda', serif",
          fontWeight: 700,
          fontSize: "1.05rem",
          letterSpacing: "0.01em",
          color: dark ? COLORS.ink : COLORS.cream,
        }}
      >
        Fade Factory{" "}
        <span style={{ color: COLORS.gold, fontStyle: "italic" }}>ATL</span>
      </span>
    </div>
  );
}
