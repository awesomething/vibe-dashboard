"use client"
import { PROBLEM_IMG } from "../../lib/utils";
import { COLORS } from "../../lib/utils";
import { CallButton } from "./call-button";
import { problems } from "../../lib/utils";
import { PHONE_DISPLAY } from "../../lib/utils";

export function ProblemSection() {
    return (
      <section className="w-full" style={{ backgroundColor: COLORS.bgAlt }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <img
            src={PROBLEM_IMG}
            alt="Plumber servicing a residential water heater"
            className="w-full h-[280px] md:h-[380px] object-cover rounded order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2
              style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, color: COLORS.ink, letterSpacing: "-0.01em" }}
              className="text-3xl md:text-4xl mb-4"
            >
              Plumbing problems don't wait. Neither should you.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: COLORS.inkSoft, lineHeight: 1.65 }} className="mb-6">
              A leaking pipe, clogged drain or broken fixture can quickly turn into a bigger headache. Instead of spending hours searching for someone to call, request service or speak directly with Frazier Plumbing Service of Atlanta.
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-7">
              {problems.map((p, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: COLORS.ember }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", color: COLORS.ink, fontSize: "0.9rem" }}>{p}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <CallButton size="lg" label={`Talk to a Plumber — ${PHONE_DISPLAY}`} />
            </div>
          </div>
        </div>
      </section>
    );
  }