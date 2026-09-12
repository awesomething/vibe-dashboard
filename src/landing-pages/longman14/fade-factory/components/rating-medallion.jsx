import { COLORS, RATING, REVIEW_COUNT } from "./constants";
import { Stars } from "./stars";

export function RatingMedallion({ animateIn }) {
  return (
    <div
      className="flex items-center gap-4 rounded-full pl-3 pr-6 py-3"
      style={{
        backgroundColor: "rgba(27,23,18,0.85)",
        border: `1px solid ${COLORS.gold}`,
        backdropFilter: "blur(6px)",
        opacity: animateIn ? 1 : 0,
        transform: animateIn ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
      }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
        style={{ border: `1.5px solid ${COLORS.gold}` }}
      >
        <span style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, color: COLORS.gold, fontSize: "1.1rem" }}>
          {RATING}
        </span>
      </div>
      <div>
        <Stars size={12} />
        <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.cream, fontSize: "0.78rem", marginTop: "0.15rem" }}>
          {REVIEW_COUNT} Google reviews
        </p>
      </div>
    </div>
  );
}
