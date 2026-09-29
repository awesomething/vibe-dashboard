import React from 'react';
import { Home, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between border-b border-[#1a3d1c]/10 bg-[#e8f7db]/80 px-6 py-6 backdrop-blur-lg animate-fade-in-down">
      <div className="flex items-center gap-2">
        <div className="bg-[#7cc129] p-2 rounded-lg text-white">
          <Home size={24} strokeWidth={2.5} />
        </div>
        <span className="text-xl font-bold tracking-tight">Atlanta City Roofing</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
        <a href="#services" className="hover:text-[#7cc129] transition-colors">Services</a>
        <a href="#locations" className="hover:text-[#7cc129] transition-colors">Locations</a>
        <a href="#reviews" className="hover:text-[#7cc129] transition-colors">Reviews</a>
        <a href="#support" className="hover:text-[#7cc129] transition-colors">Support</a>
      </nav>
      
      <a 
        href="tel:4702987576"
        className="bg-[#7cc129] text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-[0_4px_14px_0_rgba(124,193,41,0.39)] hover:shadow-[0_6px_20px_rgba(124,193,41,0.23)] hover:bg-[#6eb122] transition-all active:scale-[0.97] flex items-center gap-2"
      >
        <Phone size={16} />
        <span>(470) 298-7576</span>
      </a>
    </header>
  );
};

export default Header;
