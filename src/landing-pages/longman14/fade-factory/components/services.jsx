import { COLORS, services } from "./constants";

export function Services() {
  return (
    <section id="services" className="w-full scroll-mt-20" style={{ backgroundColor: COLORS.cream }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-xl mb-12">
          <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.goldDeep, fontSize: "0.8rem", letterSpacing: "0.14em" }} className="mb-3">
            WHAT WE DO
          </p>
          <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 600, color: COLORS.ink, letterSpacing: "-0.01em" }} className="text-3xl md:text-5xl">
            Every service, dialed in.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: COLORS.lineOnCream }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="p-7" style={{ backgroundColor: COLORS.cream }}>
                <Icon size={22} color={COLORS.oxblood} strokeWidth={1.75} />
                <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 600, color: COLORS.ink, fontSize: "1.15rem" }} className="mt-4 mb-2">
                  {s.title}
                </h3>
                <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: "0.9rem", lineHeight: 1.55 }}>
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
