"use client"
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 sm:py-24 bg-[#ebe7dc]" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#202322] sm:text-4xl mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-[#6f746e] mb-8">
              Need a plumber right away? Call us directly. For general inquiries or to schedule an appointment, fill out the form or use the contact details below.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[#c65340] mt-1" />
                <div>
                  <h4 className="text-base font-semibold text-[#202322]">Phone</h4>
                  <p className="mt-1 text-[#6f746e]">(404) 636-5033</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#c65340] mt-1" />
                <div>
                  <h4 className="text-base font-semibold text-[#202322]">Location</h4>
                  <p className="mt-1 text-[#6f746e]">
                    1710 Donald Lee Hollowell Pkwy NW<br />
                    Atlanta, GA 30318, USA
                  </p>
                  <a 
                    href="https://maps.google.com/?cid=2056796906591022456&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-[#c65340] hover:text-[#202322]"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-[#c65340] mt-1" />
                <div>
                  <h4 className="text-base font-semibold text-[#202322]">Hours</h4>
                  <p className="mt-1 text-[#6f746e]">Available for regular and emergency service.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#fffdf7] rounded-2xl p-8 border border-[#d8d5cb] shadow-sm" id="booking">
            <h3 className="text-2xl font-semibold text-[#202322] mb-6">Book a Service Online</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#3d433f]">First Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-[#202322] shadow-sm ring-1 ring-inset ring-[#b8b8ae] focus:ring-2 focus:ring-[#f47d65] sm:text-sm" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3d433f]">Last Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-[#202322] shadow-sm ring-1 ring-inset ring-[#b8b8ae] focus:ring-2 focus:ring-[#f47d65] sm:text-sm" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3d433f]">Phone Number</label>
                <input type="tel" className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-[#202322] shadow-sm ring-1 ring-inset ring-[#b8b8ae] focus:ring-2 focus:ring-[#f47d65] sm:text-sm" placeholder="(404) 555-0123" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3d433f]">Service Needed</label>
                <select className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-[#202322] shadow-sm ring-1 ring-inset ring-[#b8b8ae] focus:ring-2 focus:ring-[#f47d65] sm:text-sm bg-[#fffdf7]">
                  <option>Emergency Plumbing</option>
                  <option>Water Heater Repair/Install</option>
                  <option>Drain Cleaning</option>
                  <option>Pipe Leak Repair</option>
                  <option>Bathroom/Kitchen Plumbing</option>
                  <option>General Inspection</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#3d433f]">Preferred Date</label>
                  <input type="date" className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-[#202322] shadow-sm ring-1 ring-inset ring-[#b8b8ae] focus:ring-2 focus:ring-[#f47d65] sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3d433f]">Preferred Time</label>
                  <select className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-[#202322] shadow-sm ring-1 ring-inset ring-[#b8b8ae] focus:ring-2 focus:ring-[#f47d65] sm:text-sm bg-[#fffdf7]">
                    <option>Morning (8AM - 12PM)</option>
                    <option>Afternoon (12PM - 4PM)</option>
                    <option>Evening (4PM - 8PM)</option>
                    <option>Emergency (ASAP)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3d433f]">Issue Description</label>
                <textarea rows={3} className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-[#202322] shadow-sm ring-1 ring-inset ring-[#b8b8ae] focus:ring-2 focus:ring-[#f47d65] sm:text-sm" placeholder="Please briefly describe the plumbing issue..."></textarea>
              </div>

              <button type="submit" className="w-full rounded-md bg-[#202322] px-3.5 py-3 mt-2 text-center text-sm font-semibold text-[#f4f1e9] shadow-sm hover:bg-[#f47d65] hover:text-[#202322] transition-colors">
                Book Appointment
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
