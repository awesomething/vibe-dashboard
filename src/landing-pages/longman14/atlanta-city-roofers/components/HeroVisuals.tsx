import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

const HeroVisuals = () => {
  return (
    <div className="relative h-165 hidden lg:block animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
      <div className="absolute right-3 top-1/2 h-140 w-127.5 -translate-y-1/2 rotate-[-4deg] rounded-[4rem] bg-[#c1ea98]" />

      <figure className="absolute right-10 top-1/2 h-150 w-125 -translate-y-1/2 overflow-hidden rounded-[4rem] border-10 border-white bg-[#f4fbf0] shadow-[0_28px_60px_-24px_rgba(26,61,28,0.35)]">
        <img
          src="https://media.istockphoto.com/id/2185404700/photo/man-with-hard-hat-standing-on-steps-inspecting-house-roof.jpg?s=612x612&w=0&k=20&c=FRd13qZP-Qnc8PrR97GKhvy7OEzYhraSQXijh2KsogY="
          alt="Roofer inspecting a home's roof"
          className="h-full w-full object-cover object-center"
        />
        <figcaption className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-[#1a3d1c]/90 px-5 py-4 text-white backdrop-blur-sm">
          <span className="text-sm font-semibold">Careful work starts at the roofline.</span>
          <span className="rounded-full bg-[#7cc129] px-3 py-1 text-xs font-bold text-[#1a3d1c]">Atlanta, GA</span>
        </figcaption>
      </figure>

      {/* Floating Card 1: Total Clients */}
      <div className="absolute right-0 top-16 flex items-center gap-3 rounded-2xl bg-[#32612D] p-4 text-white shadow-xl animate-bounce-slow" style={{ animationDuration: '4s' }}>
          <div className="bg-white/20 p-2 rounded-full">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-xl font-bold">5.8k+</p>
            <p className="text-xs font-medium opacity-80">Total Clients</p>
          </div>
      </div>

      {/* Floating Card 2: Rating */}
      <div className="absolute -left-4 top-1/3 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl animate-bounce-slow" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          <div className="bg-[#ffb800]/20 p-2 rounded-full text-[#ffb800]">
            <Star size={24} fill="currentColor" />
          </div>
          <div>
            <p className="text-xl font-bold text-[#1a3d1c]">4.9</p>
            <p className="text-xs font-medium text-[#1a3d1c]/60">Avg Rating</p>
          </div>
      </div>

      {/* Floating Card 3: Fast Response */}
      <div className="absolute bottom-16 right-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl animate-bounce-slow" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}>
          <div className="relative">
            <img src="https://i.pravatar.cc/100?img=11" alt="Worker" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
            <div className="absolute -bottom-1 -right-1 bg-[#7cc129] w-4 h-4 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <p className="text-sm font-bold text-[#1a3d1c]">Local Experts</p>
            <p className="text-xs font-medium text-[#7cc129]">Atlanta, GA</p>
          </div>
      </div>
    </div>
  );
};

export default HeroVisuals;