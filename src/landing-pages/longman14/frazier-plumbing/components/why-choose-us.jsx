import {COLORS} from "../../lib/utils"
import { Check } from "lucide-react";
import { TRUST_IMG } from "../../lib/utils";
import { whyChoose } from "../../lib/utils";
export function WhyChooseUs() {
    return (
      <section id="why-choose-us" className="w-full scroll-mt-20" style={{ backgroundColor: COLORS.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <h2
              style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, color: COLORS.ink, letterSpacing: "-0.01em" }}
              className="text-3xl md:text-4xl mb-8"
            >
              A better way to handle plumbing problems.
            </h2>
            <div className="flex flex-col gap-6">
              {whyChoose.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: COLORS.blue }}
                  >
                    <Check size={14} color="#fff" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: COLORS.ink, fontSize: "1rem" }} className="mb-1">
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", color: COLORS.inkSoft, fontSize: "0.9rem", lineHeight: 1.55 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            src={TRUST_IMG}
            alt="Plumber inspecting residential pipes and valves"
            className="w-full h-[320px] md:h-[420px] object-cover rounded"
          />
        </div>
      </section>
    );
  }