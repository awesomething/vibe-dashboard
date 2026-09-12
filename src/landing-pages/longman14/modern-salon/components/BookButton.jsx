import React from 'react';
import { Calendar } from 'lucide-react';
import { COLORS } from './constants';
import { scrollToId } from './utils';

export function BookButton({ full, size = "md" }) {
  return (
    <button
      onClick={() => scrollToId("book")}
      className={`inline-flex items-center justify-center gap-2 rounded transition-colors ${full ? "w-full" : ""}`}
      style={{
        backgroundColor: COLORS.rose,
        color: "#fff",
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 600,
        fontSize: size === "lg" ? "0.95rem" : "0.85rem",
        padding: size === "lg" ? "0.95rem 2rem" : "0.65rem 1.3rem",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.roseDeep)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.rose)}
    >
      <Calendar size={15} />
      Book Appointment
    </button>
  );
}