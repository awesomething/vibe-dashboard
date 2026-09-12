"use client"
import { Calendar, Phone } from "lucide-react";
import { COLORS, PHONE_TEL, PHONE_DISPLAY, scrollToId } from "./constants";

export function FinalCTA() {
  return (
    <section className="w-full" style={{ backgroundColor: COLORS.oxblood }}>
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
        <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 600, color: COLORS.cream, letterSpacing: "-0.01em" }} className="text-3xl md:text-4xl mb-4">
          Your next fade is one booking away.
        </h2>
        <p style={{ fontFamily: "'Jost', sans-serif", color: "#EAD9D9", lineHeight: 1.6 }} className="mb-8 max-w-md mx-auto">
          Join the 300+ clients who trust Fade Factory ATL with every cut.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => scrollToId("book")}
            className="inline-flex items-center justify-center gap-2 rounded-full"
            style={{ backgroundColor: COLORS.cream, color: COLORS.oxblood, fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: "0.98rem", padding: "0.9rem 1.8rem" }}
          >
            <Calendar size={16} />
            Book Appointment
          </button>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded-full"
            style={{ border: "1.5px solid rgba(245,239,227,0.5)", color: COLORS.cream, fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: "0.98rem", padding: "0.9rem 1.8rem" }}
          >
            <Phone size={16} />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
