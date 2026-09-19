import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d8d5cb] bg-[#f4f1e9]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f4f1e9]/80">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#202322] text-[#d8f26a]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-droplets"
            >
              <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7 7.5 7 7.5s-1.14 1.56-2.29 2.56C3.57 11 3 12.1 3 13.25c0 2.22 1.8 4.05 4 4.05z" />
              <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#202322] sm:text-2xl">
            All About Plumbing
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href="https://maps.google.com/?cid=2056796906591022456&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-[#6f746e] hover:text-[#202322] transition-colors"
          >
            <MapPin className="h-4 w-4" />
            <span>Atlanta, GA</span>
          </a>
          
          <a
            href="tel:4046365033"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#f47d65] px-6 py-2 text-sm font-medium text-[#202322] shadow-sm transition-colors hover:text-white"
          >
            <Phone className="mr-2 h-4 w-4" />
            (404) 636-5033
          </a>
        </div>
      </div>
    </header>
  );
}
