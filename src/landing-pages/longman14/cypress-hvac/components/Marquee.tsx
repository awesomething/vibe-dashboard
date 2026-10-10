import { Star } from "lucide-react";
import { brands } from "../utils";

export function Marquee() {
  const items = [...brands, ...brands];
  return (
    <section aria-label="Brands we service" className="overflow-hidden bg-brand py-4 text-white">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {items.map((b, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg font-semibold">
            {b}
            <Star className="size-4 fill-white/80 text-white/80" />
          </span>
        ))}
      </div>
      <p className="sr-only">We service all major brands including {brands.join(", ")}.</p>
    </section>
  );
}
