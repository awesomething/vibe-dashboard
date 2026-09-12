import { COLORS, GALLERY_1, GALLERY_2, GALLERY_3 } from "./constants";

export function Gallery() {
  const imgs = [
    { src: GALLERY_1, alt: "A barber cutting a client's hair with scissors" },
    { src: GALLERY_2, alt: "Warmly lit barbershop interior with pendant lamps" },
    { src: GALLERY_3, alt: "Clippers, scissors, and a comb laid out on a slate board" },
  ];
  return (
    <section id="gallery" className="w-full scroll-mt-20" style={{ backgroundColor: COLORS.cream }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.goldDeep, fontSize: "0.8rem", letterSpacing: "0.14em" }} className="mb-3">
          INSIDE THE SHOP
        </p>
        <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 600, color: COLORS.ink, letterSpacing: "-0.01em" }} className="text-3xl md:text-5xl mb-10">
          The space, the tools, the work.
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {imgs.map((img, i) => (
            <div key={i} className="overflow-hidden rounded">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
