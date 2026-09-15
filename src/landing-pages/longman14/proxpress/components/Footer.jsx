import React from 'react';
import { display } from './constants';

export function Footer() {
  return (
    <footer className="bg-[#0E1B22] text-[#7E9099]">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-baseline gap-2">
          <span className={`${display} text-lg font-700 text-[#EDF0EE]`}>
            ProXpress Plumbing
          </span>
          <span className="text-xs uppercase tracking-[0.14em]">
            Atlanta &amp; Drain Cleaning
          </span>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm">
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
        <p className="text-xs">© {new Date().getFullYear()} ProXpress Plumbing.</p>
      </div>
    </footer>
  );
}