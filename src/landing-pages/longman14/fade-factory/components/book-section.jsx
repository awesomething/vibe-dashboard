import { Phone } from "lucide-react";
import { COLORS, PHONE_TEL, PHONE_DISPLAY } from "./constants";
import { BookingForm } from "./booking-form";

export function BookSection() {
  return (
    <section id="book" className="w-full scroll-mt-20" style={{ backgroundColor: COLORS.ink }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="md:sticky md:top-28">
          <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.gold, fontSize: "0.8rem", letterSpacing: "0.14em" }} className="mb-3">
            RESERVE YOUR CHAIR
          </p>
          <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 600, color: COLORS.cream, letterSpacing: "-0.01em" }} className="text-3xl md:text-4xl mb-5">
            Book your next cut.
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.creamSoft, lineHeight: 1.65 }} className="mb-6 max-w-sm">
            Pick a service, share a few details, and the shop will confirm your time.
          </p>
          <a href={PHONE_TEL} style={{ fontFamily: "'Jost', sans-serif", color: COLORS.gold, fontSize: "0.9rem" }} className="inline-flex items-center gap-2">
            <Phone size={15} /> Or call {PHONE_DISPLAY}
          </a>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
