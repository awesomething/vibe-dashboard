"use client";

import { Phone } from "lucide-react";
import {PHONE_DISPLAY} from "../../lib/utils"
import {PHONE_TEL} from "../../lib/utils"
import { scrollToId } from "../../lib/utils";
import { COLORS } from "../../lib/utils";

export function FinalCTA() {
    return (
      <section className="w-full" style={{ backgroundColor: COLORS.ember }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <h2
            style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}
            className="text-3xl md:text-4xl mb-4"
          >
            Got a plumbing problem? Let's get it sorted.
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#FBE3D6", lineHeight: 1.6 }} className="mb-8 max-w-md mx-auto">
            Call Frazier Plumbing Service of Atlanta or send a service request online.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded"
              style={{
                backgroundColor: "#fff",
                color: COLORS.ember,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "0.9rem 1.6rem",
              }}
            >
              <Phone size={16} strokeWidth={2.5} />
              Call {PHONE_DISPLAY}
            </a>
            <button
              onClick={() => scrollToId("request-service")}
              className="inline-flex items-center justify-center rounded"
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.6)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "0.9rem 1.6rem",
              }}
            >
              Request Service
            </button>
          </div>
        </div>
      </section>
    );
  }