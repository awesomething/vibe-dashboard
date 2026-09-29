import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const ServiceForm = () => {
  return (
    <div className="bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 animate-fade-in-up" style={{ animationDelay: '150ms', animationFillMode: 'both' }}>
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <ShieldCheck size={20} className="text-[#7cc129]" />
        Request a Free Quote
      </h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full bg-[#f4fbf0] border-transparent focus:border-[#7cc129] focus:ring-2 focus:ring-[#7cc129]/20 rounded-xl px-4 py-3 outline-none transition-all"
          />
        </div>
        <div>
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full bg-[#f4fbf0] border-transparent focus:border-[#7cc129] focus:ring-2 focus:ring-[#7cc129]/20 rounded-xl px-4 py-3 outline-none transition-all"
          />
        </div>
        <div>
          <select className="w-full bg-[#f4fbf0] border-transparent focus:border-[#7cc129] focus:ring-2 focus:ring-[#7cc129]/20 rounded-xl px-4 py-3 outline-none transition-all text-gray-700 appearance-none" defaultValue="">
            <option value="" disabled>Select Service</option>
            <option value="repair">Roof Repair</option>
            <option value="replacement">Roof Replacement</option>
            <option value="inspection">Free Inspection</option>
          </select>
        </div>
        <div className="col-span-2 mt-2">
          <button 
            type="button"
            className="w-full bg-[#7cc129] text-white rounded-xl px-4 py-3.5 font-bold flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(124,193,41,0.3)] hover:shadow-[0_6px_20px_rgba(124,193,41,0.25)] hover:bg-[#6eb122] transition-all active:scale-[0.98]"
          >
            Get Your Estimate <ArrowRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;