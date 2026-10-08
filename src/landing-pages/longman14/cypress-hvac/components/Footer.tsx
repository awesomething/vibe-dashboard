import { Phone } from "lucide-react";
import { site } from "../utils";

export function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-10 text-sm text-white/60 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:px-6 md:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="text-center">
          {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
        </p>
        <a href={`tel:${site.tel}`} className="inline-flex items-center gap-2 font-semibold text-white">
          <Phone className="size-4" /> {site.phone}
        </a>
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 bg-white/90 p-3 shadow-[0_-8px_30px_rgb(11_31_56/0.12)] backdrop-blur-xl md:hidden">
      <a
        href={`tel:${site.tel}`}
        className="flex items-center justify-center gap-2 rounded-xl bg-navy py-3 font-semibold text-white"
      >
        <Phone className="size-4" /> Call now
      </a>
      <a href="#book" className="flex items-center justify-center rounded-xl bg-brand py-3 font-semibold text-white">
        Book online
      </a>
    </div>
  );
}
