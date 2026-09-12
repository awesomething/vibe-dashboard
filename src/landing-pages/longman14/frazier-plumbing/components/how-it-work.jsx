import { COLORS } from "../../lib/utils";
import { steps } from "../../lib/utils";

export function HowItWorks() {
    return (
      <section className="w-full" style={{ backgroundColor: COLORS.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <h2
            style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, color: COLORS.ink, letterSpacing: "-0.01em" }}
            className="text-3xl md:text-4xl mb-10 max-w-lg"
          >
            Getting help is simple.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative pl-0">
                <div className="flex items-center gap-4 mb-3">
                  <span
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.5rem",
                      color: COLORS.blue,
                    }}
                  >
                    {step.n}
                  </span>
                  <div className="h-px flex-1" style={{ backgroundColor: COLORS.border }} />
                </div>
                <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: COLORS.ink, fontSize: "1.05rem" }} className="mb-2">
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", color: COLORS.inkSoft, fontSize: "0.9rem", lineHeight: 1.55 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }