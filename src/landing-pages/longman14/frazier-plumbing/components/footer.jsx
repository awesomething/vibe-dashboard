"use client";

import { COLORS } from "../../lib/utils";
import { scrollToId } from "../../lib/utils";
import {PHONE_DISPLAY} from "../../lib/utils"
import {PHONE_TEL} from "../../lib/utils"
import { Logo } from "./logo";
export function Footer() {
    return (
      <footer className="w-full" style={{ backgroundColor: COLORS.navy, borderTop: `1px solid ${COLORS.borderDark}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Logo light />
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              ["services", "Services"],
              ["request-service", "Request Service"],
              ["faq", "FAQ"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                style={{ fontFamily: "'Inter', sans-serif", color: "#AEB9CC", fontSize: "0.88rem" }}
                className="hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
            <a href={PHONE_TEL} style={{ fontFamily: "'Inter', sans-serif", color: "#AEB9CC", fontSize: "0.88rem" }} className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
        <div style={{ borderTop: `1px solid ${COLORS.borderDark}` }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p style={{ fontFamily: "'Inter', sans-serif", color: "#7C889E", fontSize: "0.78rem" }}>
              © 2026 Frazier Plumbing Service of Atlanta. All rights reserved.
            </p>
            <a href={PHONE_TEL} style={{ fontFamily: "'Inter', sans-serif", color: "#AEB9CC", fontSize: "0.78rem" }}>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </footer>
    );
  }