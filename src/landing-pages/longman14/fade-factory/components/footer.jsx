"use client"
import { COLORS, PHONE_TEL, PHONE_DISPLAY, scrollToId } from "./constants";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: COLORS.ink, borderTop: `1px solid ${COLORS.line}` }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <Logo />
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {[["services", "Services"], ["gallery", "Gallery"], ["reviews", "Reviews"], ["book", "Book"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollToId(id)} style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: "0.86rem" }}>
              {label}
            </button>
          ))}
        </nav>
      </div>
      <div style={{ borderTop: `1px solid ${COLORS.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: "0.76rem" }}>
            © 2026 Fade Factory ATL. All rights reserved.
          </p>
          <a href={PHONE_TEL} style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: "0.76rem" }}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  );
}
