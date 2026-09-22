import React from 'react';
import { Wrench, Droplets, Flame, Bath, WrenchIcon, AlertTriangle } from 'lucide-react';

const services = [
  {
    title: 'Emergency Plumbing',
    description: '24/7 fast response for bursts, severe leaks, and major clogs to prevent water damage.',
    icon: AlertTriangle,
  },
  {
    title: 'Water Heaters',
    description: 'Installation, repair, and maintenance for traditional and tankless water heaters.',
    icon: Flame,
  },
  {
    title: 'Drain Cleaning',
    description: 'Professional clearing of stubborn clogs in sinks, toilets, and main sewer lines.',
    icon: Droplets,
  },
  {
    title: 'Pipe Repair & Replacement',
    description: 'Fixing leaky pipes or completely repiping aging systems for better water flow.',
    icon: Wrench,
  },
  {
    title: 'Bathroom & Kitchen',
    description: 'Fixture installation, sink repairs, toilet fixes, and complete plumbing remodels.',
    icon: Bath,
  },
  {
    title: 'General Maintenance',
    description: 'Routine inspections and tune-ups to keep your plumbing system running smoothly.',
    icon: WrenchIcon,
  },
];

export default function Services() {
  return (
    <section className="py-20 sm:py-24 bg-[#f4f1e9]" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#202322] sm:text-4xl">
            Our Plumbing Services
          </h2>
          <p className="mt-4 text-lg text-[#6f746e]">
            We handle everything from minor repairs to major installations with expertise and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group rounded-2xl border border-[#d8d5cb] bg-[#ebe7dc] p-8 hover:bg-[#fffdf7] hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f47d65]/20 text-[#c65340] group-hover:bg-[#f47d65] group-hover:text-[#202322] transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#202322] mb-3">{service.title}</h3>
              <p className="text-[#6f746e] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
