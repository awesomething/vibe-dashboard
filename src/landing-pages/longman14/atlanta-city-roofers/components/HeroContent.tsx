import React from 'react';
import { Star, MapPin } from 'lucide-react';

const HeroContent = () => {
  return (
    <>
      <div className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '50ms', animationFillMode: 'both' }}>
        <div className="flex text-[#ffb800]">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={20} fill="currentColor" className="drop-shadow-sm" />
          ))}
        </div>
        <span className="text-sm font-semibold opacity-80">(4.2k) Customer Reviews</span>
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
          Professional <span className="text-[#32612D]">Roofing</span> Services.
        </h1>
        <p className="text-lg opacity-80 max-w-lg mb-4">
          Quality craftsmanship you can trust. From minor repairs to full replacements, Atlanta City Roofing ensures your home is protected.
        </p>
        <div className="flex items-start gap-2 text-sm opacity-70 mb-8">
          <MapPin size={16} className="shrink-0 mt-0.5 text-[#7cc129]" />
          <p>218 Pryor St SW, Atlanta, GA 30303, USA</p>
        </div>
      </div>
    </>
  );
};

export default HeroContent;