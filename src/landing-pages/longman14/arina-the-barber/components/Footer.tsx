import { Calendar, MapPin, Phone, Scissors } from "lucide-react";
import { BUSINESS, NAV_LEFT, NAV_RIGHT } from "./data";
import { PoleStripe } from "./shared";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-stone-950 text-white/60">
      <PoleStripe />
      <div className="mx-auto max-w-7xl px-5 pt-16 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <a href="#top" className="flex items-center gap-2.5 text-[#f5efe6]">
              <Scissors className="h-5 w-5 text-[#c9a24b]" />
              <span className="font-serif text-2xl">{BUSINESS.name}</span>
            </a>
            <p className="mt-4 max-w-xs leading-relaxed">
              Precision cuts, sculpted beards and a chair you&apos;ll want to
              come back to.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm uppercase tracking-[0.18em]">
            {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[#c9a24b]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="space-y-3 text-sm">
            <a
              href={`tel:${BUSINESS.tel}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4 text-[#c9a24b]" /> {BUSINESS.phone}
            </a>
            <p className="flex max-w-[240px] items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a24b]" />{" "}
              {BUSINESS.address}
            </p>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-14 select-none text-center font-serif text-[clamp(3rem,14vw,12rem)] italic leading-none text-white/[0.06]"
        >
          {BUSINESS.name}
        </p>
        <div className="flex flex-col justify-between gap-2 border-t border-white/10 py-6 text-sm sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>Decatur, Georgia</p>
        </div>
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-stone-950/95 backdrop-blur sm:hidden">
      <a
        href={`tel:${BUSINESS.tel}`}
        className="flex items-center justify-center gap-2 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#f5efe6]"
      >
        <Phone className="h-4 w-4 text-[#c9a24b]" /> Call
      </a>
      <a
        href="#book"
        className="flex items-center justify-center gap-2 bg-[#c9a24b] py-3.5 text-xs font-semibold uppercase tracking-widest text-stone-950"
      >
        <Calendar className="h-4 w-4" /> Book
      </a>
    </div>
  );
}
