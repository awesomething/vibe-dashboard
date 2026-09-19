import React from 'react';
import { slab } from './constants';

export function Footer() {
  return (
    <footer className="bg-[#1B1B1A] text-[#8A8C86]">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-baseline gap-2">
          <span className={`${slab} text-lg font-700 text-[#E6E7E4]`}>
            Home Forge Roofing Inc
          </span>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm">
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
        <p className="text-xs">© {new Date().getFullYear()} Home Forge Roofing Inc.</p>
      </div>
    </footer>
  );
}