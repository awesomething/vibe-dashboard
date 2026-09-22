import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { display, PHONE_DISPLAY, PHONE_TEL } from './constants';

export function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0E1B22] text-[#EDF0EE]">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className={`${display} text-2xl font-800 leading-none tracking-tight`}>
            ProXpress
          </span>
          <span className="text-[11px] uppercase tracking-[0.14em] text-[#B9803F]">
            Plumbing · Atlanta
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#C7D0CD] md:flex">
          <a href="#services" className="hover:text-[#EDF0EE]">
            Services
          </a>
          <a href="#process" className="hover:text-[#EDF0EE]">
            How it works
          </a>
          <a href="#reviews" className="hover:text-[#EDF0EE]">
            Reviews
          </a>
          <a href="#request" className="hover:text-[#EDF0EE]">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 text-sm font-600 text-[#EDF0EE]"
          >
            <Phone className="h-4 w-4 text-[#B9803F]" strokeWidth={2.25} />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#request"
            className="rounded-[2px] bg-[#B9803F] px-4 py-2 text-sm font-700 text-[#0E1B22] hover:bg-[#c98f4c]"
          >
            Book service
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setNavOpen((v) => !v)}
          className="text-[#EDF0EE] md:hidden"
        >
          {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {navOpen && (
        <div className="flex flex-col gap-4 border-t border-[#1F3D4D] px-6 py-5 text-sm text-[#C7D0CD] md:hidden">
          <a href="#services" onClick={() => setNavOpen(false)}>
            Services
          </a>
          <a href="#process" onClick={() => setNavOpen(false)}>
            How it works
          </a>
          <a href="#reviews" onClick={() => setNavOpen(false)}>
            Reviews
          </a>
          <a href="#request" onClick={() => setNavOpen(false)}>
            Contact
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-2 flex items-center gap-2 font-600 text-[#EDF0EE]"
          >
            <Phone className="h-4 w-4 text-[#B9803F]" />
            {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}