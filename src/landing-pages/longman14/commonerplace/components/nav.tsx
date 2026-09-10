"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";



const links = [
  { href: "#story", label: "The building" },
  { href: "#stylists", label: "Stylists" },
  { href: "#services", label: "Services" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2B1D14]/10 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a
          href="#top"
          className="font-serif-display text-lg tracking-tight text-[#2B1D14] sm:text-xl"
        >
          Commoner
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#2B1D14]/70 transition-colors hover:text-[#2B1D14]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button>
          Book a chair
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center text-[#2B1D14] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#2B1D14]/10 bg-white px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#2B1D14]/10 py-4 text-base text-[#2B1D14]/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button className="mt-5 w-full">
            <a href="#visit" onClick={() => setOpen(false)}>
              Book a chair
            </a>
          </button>
        </div>
      )}
    </header>
  );
}
