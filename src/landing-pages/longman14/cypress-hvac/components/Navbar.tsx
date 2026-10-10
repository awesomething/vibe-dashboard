"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, Snowflake, X } from "lucide-react";
import { site } from "../utils";


const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#why", label: "Why us" },
  { href: "#areas", label: "Areas" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-4 lg:py-6 pt-3 sm:px-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4  py-2.5 md:py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white/85! shadow-[0_8px_30px_rgb(11_31_56/0.12)] backdrop-blur-xl"
            : "bg-white/70! backdrop-blur-md"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-brand text-white">
            <Snowflake className="size-5" strokeWidth={2.4} />
          </span>
          <span className="font-display text-lg font-bold leading-none">
            Cypress<span className="text-brand"> HVAC</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/80! md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-brand">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.tel}`}
            className="hidden items-center gap-2 px-2 text-sm font-semibold hover:text-brand md:flex"
          >
            <Phone className="size-4 text-brand" />
            {site.phone}
          </a>
          <a
            href="#book"
            className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand/30 transition hover:bg-brand-600"
          >
            Book online
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-xl border border-ink/10 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl bg-white p-3 shadow-xl lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 font-medium hover:bg-ice"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${site.tel}`}
            className="mt-1 flex items-center gap-2 rounded-xl bg-ice px-4 py-3 font-semibold"
          >
            <Phone className="size-4 text-brand" /> {site.phone}
          </a>
        </div>
      )}
    </header>
  );
}
