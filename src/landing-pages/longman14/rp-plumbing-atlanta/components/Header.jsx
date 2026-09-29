"use client"
import React, { useState } from "react";
import { Phone, Droplet, Menu, X } from "lucide-react";
import { heading, PHONE_DISPLAY, PHONE_TEL } from "./constants";

export function Header({ scrollToRequest }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#34302B] bg-[#141210] text-[#F6F1E6]">
      <div className="mx-auto flex max-w-300 items-center justify-between px-6 py-3.5">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center bg-[#FF4A1E]">
            <Droplet className="h-4 w-4 text-[#141210]" strokeWidth={2.75} />
          </span>
          <span className={`${heading} text-base font-800 uppercase`}>
            RP / Plumbing Atlanta
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-[11px] font-700 uppercase tracking-[0.12em] text-[#B7B2A6] md:flex">
          <a href="#services" className="nav-link transition-colors hover:text-[#F6F1E6]">Services</a>
          <a href="#why" className="nav-link transition-colors hover:text-[#F6F1E6]">Why us</a>
          <a href="#process" className="nav-link transition-colors hover:text-[#F6F1E6]">Process</a>
          <a href="#request" className="nav-link transition-colors hover:text-[#F6F1E6]">Atlanta</a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 text-xs font-700 transition-colors hover:text-[#FF7A4E]"
          >
            <Phone className="h-4 w-4 text-[#FF4A1E]" strokeWidth={2.25} />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#request"
            onClick={scrollToRequest}
            className="bg-[#FF4A1E] px-4 py-2.5 text-xs font-800 uppercase tracking-[0.08em] text-[#141210] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF7A4E]"
          >
            Book a visit
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setNavOpen((v) => !v)}
          className="text-[#F6F1E6] md:hidden"
        >
          {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {navOpen && (
        <div className="flex flex-col gap-4 border-t border-[#34302B] px-6 py-5 text-xs font-700 uppercase tracking-[0.12em] md:hidden">
          <a href="#services" onClick={() => setNavOpen(false)}>
            Services
          </a>
          <a href="#why" onClick={() => setNavOpen(false)}>
            Why Us
          </a>
          <a href="#process" onClick={() => setNavOpen(false)}>
            How It Works
          </a>
          <a href="#request" onClick={() => setNavOpen(false)}>
            Service Area
          </a>
          <a href="#contact" onClick={() => setNavOpen(false)}>
            Contact
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-2 flex items-center gap-2 text-[#FF7A4E]"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}