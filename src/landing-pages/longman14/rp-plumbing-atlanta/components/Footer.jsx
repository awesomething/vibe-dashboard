import React from "react";
import { Phone, MapPin, Droplet } from "lucide-react";
import { heading, PHONE_TEL, PHONE_DISPLAY, MAP_URL, ADDRESS } from "./constants";

export function Footer() {
  return (
    <footer className="bg-[#F6F1E6] text-[#141210]">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF4A1E]">
                <Droplet className="h-4 w-4 text-[#141210]" strokeWidth={2.5} />
              </span>
              <span className={`${heading} text-lg font-800`}>RP Plumbing Atlanta</span>
            </div>
            <p className="mt-3 text-sm text-[#5A564C]">
              Residential &amp; commercial plumbing across Atlanta.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-[#5A564C]">
            <span className="mb-1 text-xs font-700 uppercase tracking-wide text-[#141210]">
              Navigate
            </span>
            <a href="#services" className="hover:text-[#FF4A1E]">
              Services
            </a>
            <a href="#why" className="hover:text-[#FF4A1E]">
              Why Us
            </a>
            <a href="#process" className="hover:text-[#FF4A1E]">
              How It Works
            </a>
            <a href="#request" className="hover:text-[#FF4A1E]">
              Request Service
            </a>
          </div>

          <div className="flex flex-col gap-2 text-sm text-[#5A564C]">
            <span className="mb-1 text-xs font-700 uppercase tracking-wide text-[#141210]">
              Contact
            </span>
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-[#FF4A1E]">
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 hover:text-[#FF4A1E]"
            >
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
              {ADDRESS}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-[#E3DCCB] pt-6 text-xs text-[#8A857A]">
          © {new Date().getFullYear()} RP Plumbing Atlanta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}