import { Calendar } from "lucide-react";
import { COLORS, scrollToId } from "./constants";

export function BookButton({ full, size = "md" }) {
  return (
    <button
      onClick={() => scrollToId("book")}
      className={`inline-flex items-center justify-center gap-2 rounded-full transition-transform ${full ? "w-full" : ""}`}
      style={{
        backgroundColor: COLORS.oxblood,
        color: COLORS.cream,
        fontFamily: "'Jost', sans-serif",
        fontWeight: 600,
        letterSpacing: "0.02em",
        fontSize: size === "lg" ? "0.98rem" : "0.88rem",
        padding: size === "lg" ? "0.95rem 2rem" : "0.65rem 1.4rem",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.oxbloodDeep)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.oxblood)}
    >
      <Calendar size={15} />
      Book Appointment
    </button>
  );
}
