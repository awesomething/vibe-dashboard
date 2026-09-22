import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { slab, PHONE_DISPLAY, PHONE_TEL } from './constants';

export function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1B1B1A] text-[#E6E7E4]">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className={`${slab} text-2xl font-700 leading-none tracking-tight`}>
            Home Forge
          </span>
          <span className="text-[11px] uppercase tracking-[0.14em] text-[#C9541F]">
            Roofing
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#B9BBB6] md:flex">
          <a href="#services" className="hover:text-[#E6E7E4]">
            Services
          </a>
          <a href="#process" className="hover:text-[#E6E7E4]">
            How it works
          </a>
          <a href="#estimate" className="hover:text-[#E6E7E4]">
            Get an estimate
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 text-sm font-600 text-[#E6E7E4]"
          >
            <Phone className="h-4 w-4 text-[#C9541F]" strokeWidth={2.25} />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#estimate"
            className="rounded-[2px] bg-[#C9541F] px-4 py-2 text-sm font-700 text-[#1B1B1A] hover:bg-[#d6672f]"
          >
            Get an estimate
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setNavOpen((v) => !v)}
          className="text-[#E6E7E4] md:hidden"
        >
          {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {navOpen && (
        <div className="flex flex-col gap-4 border-t border-[#33352F] px-6 py-5 text-sm text-[#B9BBB6] md:hidden">
          <a href="#services" onClick={() => setNavOpen(false)}>
            Services
          </a>
          <a href="#process" onClick={() => setNavOpen(false)}>
            How it works
          </a>
          <a href="#estimate" onClick={() => setNavOpen(false)}>
            Get an estimate
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-2 flex items-center gap-2 font-600 text-[#E6E7E4]"
          >
            <Phone className="h-4 w-4 text-[#C9541F]" />
            {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}