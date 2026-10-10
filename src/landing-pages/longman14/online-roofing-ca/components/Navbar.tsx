"use client";

import { useEffect, useState } from "react";
import { Home, Menu, Phone, X } from "lucide-react";
import { BUSINESS, NAV } from "./data";

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

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 py-4 ${scrolled ? "bg-zinc-950/95 shadow-xl backdrop-blur-md" : "bg-zinc-950/30 backdrop-blur-sm"}`}>
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-white!">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-white">
            <Home className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold tracking-tight">{BUSINESS.short}</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-white/60">Contractor Atlanta</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
          {NAV.map((item) => <a key={item.href} href={item.href} className="text-sm text-white/75! transition hover:text-white">{item.label}</a>)}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`tel:${BUSINESS.tel}`} className="hidden items-center gap-2 text-sm font-medium text-white! md:flex">
            <Phone className="h-4 w-4 text-orange-400" /> {BUSINESS.phone}
          </a>
          <a href="#inspection" className="hidden rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 sm:block">Free inspection</a>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center text-white xl:hidden">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-zinc-950 px-5 pb-6 pt-3 xl:hidden">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-white/90">{item.label}</a>
          ))}
          <a href={`tel:${BUSINESS.tel}`} className="mt-4 flex items-center justify-center gap-2 rounded-md bg-orange-500 py-3 font-semibold text-white">
            <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
          </a>
        </div>
      )}
      <div className="absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </header>
  );
}