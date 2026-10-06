"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, Scissors, X } from "lucide-react";
import { BUSINESS, NAV_LEFT, NAV_RIGHT } from "./data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link =
    "text-[13px] uppercase tracking-[0.2em] text-[#f5efe6]/80 transition hover:text-[#c9a24b]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-stone-950/95 shadow-xl backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-[72px] max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 md:px-8">
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LEFT.map((item) => (
            <a key={item.href} href={item.href} className={link}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center text-[#f5efe6] lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <a
          href="#top"
          className="flex items-center justify-center gap-2.5 text-[#f5efe6]"
        >
          <Scissors className="h-5 w-5 text-[#c9a24b]" />
          <span className="font-serif text-xl tracking-wide md:text-2xl">
            {BUSINESS.name}
          </span>
        </a>

        <div className="flex items-center justify-end gap-8">
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_RIGHT.map((item) => (
              <a key={item.href} href={item.href} className={link}>
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#book"
            className="hidden rounded-sm bg-[#c9a24b] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:bg-[#dcb862] sm:block"
          >
            Book
          </a>
          <a
            href={`tel:${BUSINESS.tel}`}
            aria-label="Call"
            className="flex h-10 w-10 items-center justify-center text-[#c9a24b] sm:hidden"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-stone-950 px-5 pb-6 pt-3 lg:hidden">
          {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-[#f5efe6]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-sm bg-[#c9a24b] py-3 text-center text-sm font-semibold uppercase tracking-widest text-stone-950"
          >
            Book your chair
          </a>
        </div>
      )}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[#c9a24b] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </header>
  );
}
