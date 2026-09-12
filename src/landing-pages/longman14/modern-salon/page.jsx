"use client";

import React, { useEffect } from 'react';
import { COLORS } from './components/constants';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AboutBrandon } from './components/AboutBrandon';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { BookSection } from './components/BookSection';
import { Visit } from './components/Visit';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
export { meta } from './meta';

export default function ModernSalonPage() {
 
  return (
    <div style={{ backgroundColor: COLORS.cream, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Manrope:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        button { font: inherit; cursor: pointer; }
        select { cursor: pointer; }
        input:focus, select:focus, textarea:focus, button:focus-visible {
          outline: 2px solid ${COLORS.rose};
          outline-offset: 1px;
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; }
        }
      `}</style>
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutBrandon />
        <Gallery />
        <Testimonials />
        <BookSection />
        <Visit />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}