"use client";

import React, { useEffect, useState } from "react";
import { CalendarCheck, Fan, MapPin, Menu, Phone, X } from "lucide-react";
import { BUSINESS, NAV, useTheme, ModeToggle } from "../Shared";

export function Navbar() {
  const { t } = useTheme();
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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all p-2 md:p-4 duration-300 ${scrolled ? "bg-slate-950/95 shadow-xl backdrop-blur-md" : "bg-slate-950/25 backdrop-blur-sm"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-white!">
          <span className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-500 ${t.fill}`}>
            <Fan className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-[14px] font-semibold tracking-tight">Heating &amp; Air Conditioning</span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-white/60">Atlanta City</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.slice(0, 6).map((n) => (
            <a key={n.href} href={n.href} className="text-[13px] text-white/75! transition hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ModeToggle compact />
          </div>
          <a href={`tel:${BUSINESS.tel}`} className={`hidden items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors duration-500 md:flex ${t.btn}`}>
            <Phone className="h-4 w-4" /> {BUSINESS.phone}
          </a>
          <button aria-label="Toggle menu" onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center text-white xl:hidden">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-5 pb-6 pt-3 xl:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-white/90!">
              {n.label}
            </a>
          ))}
          <div className="mt-4 sm:hidden">
            <ModeToggle />
          </div>
        </div>
      )}

      
    </header>
  );
}

export function Footer() {
  const { t } = useTheme();

  return (
    <footer className="bg-slate-950 px-5 pb-24 pt-16 text-white/60 sm:pb-8 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="#top" className="flex items-center gap-2.5 text-white">
            <span className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-500 ${t.fill}`}>
              <Fan className="h-5 w-5" />
            </span>
            <span className="font-semibold">{BUSINESS.name}</span>
          </a>
          <p className="mt-4 max-w-sm leading-relaxed">Heating and cooling repair, installation and maintenance for Atlanta homes and businesses.</p>
        </div>

        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-white">Explore</h4>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-white">Contact</h4>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`tel:${BUSINESS.tel}`} className="hover:text-white">
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{BUSINESS.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-2 border-t border-white/10 pt-6 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
        <p>Serving Atlanta, GA</p>
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  const { t } = useTheme();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-slate-950/95 backdrop-blur sm:hidden">
      <a href={`tel:${BUSINESS.tel}`} className={`flex items-center justify-center gap-2 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-500 ${t.btn}`}>
        <Phone className="h-4 w-4" /> Call now
      </a>
      <a href="#book" className="flex items-center justify-center gap-2 py-3.5 text-xs font-semibold uppercase tracking-widest text-white">
        <CalendarCheck className="h-4 w-4" /> Book
      </a>
    </div>
  );
}
