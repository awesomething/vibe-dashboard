import { COLORS } from "../../lib/utils";

export function TrustBar() {
    const items = [
      { title: "Fast Response", desc: "Get help without unnecessary delays." },
      { title: "Professional Service", desc: "Straightforward service focused on solving the problem." },
      { title: "Atlanta & Surrounding Areas", desc: "Local plumbing service for customers in the Atlanta area." },
    ];
    return (
      <section style={{ backgroundColor: COLORS.navy }} className="w-full">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 grid sm:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex gap-3">
              <div
                className="w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: COLORS.blue }}
              />
              <div>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#fff", fontSize: "1rem" }} className="mb-1">
                  {item.title}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#AEB9CC", fontSize: "0.88rem", lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }