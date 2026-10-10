import { ArrowRight, Home, MapPin, Phone } from "lucide-react";
import { BUSINESS, NAV } from "./data";

export function Footer() {
  return (
    <footer className="bg-zinc-950 px-5 pb-8 pt-16 text-white/65 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="#top" className="flex items-center gap-2.5 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500"><Home className="h-5 w-5" /></span>
            <span className="font-semibold">{BUSINESS.name}</span>
          </a>
          <p className="mt-4 max-w-sm leading-relaxed">Residential and commercial roofing across Atlanta. Honest advice, premium materials and workmanship that lasts.</p>
          <a href="#inspection" className="mt-6 inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">Free roof inspection <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div>
          <h2 className="text-sm font-medium uppercase tracking-widest text-white">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => <li key={item.href}><a href={item.href} className="transition hover:text-white">{item.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium uppercase tracking-widest text-white">Contact</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" /><a href={`tel:${BUSINESS.tel}`} className="hover:text-white">{BUSINESS.phone}</a></li>
            <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" /><span>{BUSINESS.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-2 border-t border-white/10 pt-6 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
        <p>Licensed &amp; insured roofing services in Atlanta, GA.</p>
      </div>
    </footer>
  );
}