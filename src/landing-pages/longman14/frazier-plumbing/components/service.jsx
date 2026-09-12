import { COLORS } from "../../lib/utils";
import { services } from "../../lib/utils";

export function Services() {
    return (
      <section id="services" className="w-full scroll-mt-20" style={{ backgroundColor: COLORS.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="max-w-xl mb-10">
            <h2
              style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, color: COLORS.ink, letterSpacing: "-0.01em" }}
              className="text-3xl md:text-4xl mb-3"
            >
              Plumbing services you can count on.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: COLORS.inkSoft, lineHeight: 1.6 }}>
              From small repairs to bigger plumbing problems, get the help you need without the hassle.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded"
                  style={{ border: `1px solid ${COLORS.border}`, backgroundColor: COLORS.cream }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded mb-4"
                    style={{ backgroundColor: COLORS.navy }}
                  >
                    <Icon size={19} color="#fff" strokeWidth={2} />
                  </div>
                  <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: COLORS.ink, fontSize: "1.02rem" }} className="mb-1.5">
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", color: COLORS.inkSoft, fontSize: "0.88rem", lineHeight: 1.55 }}>
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }