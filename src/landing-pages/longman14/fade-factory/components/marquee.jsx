import { COLORS } from "./constants";

export function Marquee() {
  const words = ["FADES", "TAPERS", "LINE-UPS", "BEARD TRIMS", "HOT TOWEL SHAVES", "GREY BLENDING"];
  const track = [...words, ...words, ...words];
  return (
    <div className="w-full overflow-hidden py-4" style={{ backgroundColor: COLORS.oxblood, borderTop: `1px solid ${COLORS.line}`, borderBottom: `1px solid ${COLORS.line}` }}>
      <div className="marquee-track flex items-center gap-8 whitespace-nowrap w-max">
        {track.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600, color: COLORS.cream, fontSize: "0.85rem", letterSpacing: "0.12em" }}>
              {w}
            </span>
            <span style={{ color: COLORS.gold }}>&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
