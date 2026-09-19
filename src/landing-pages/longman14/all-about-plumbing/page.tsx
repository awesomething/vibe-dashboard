
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

import Footer from './components/Footer';
import Contact from './components/Contact';

export const meta = {
    slug: "all-about-plumbing",
    title: "All About Plumbing the best & most reliable plumbing service provider in Atlanta, GA",
    author: { name: "Techilola", github: "Longman14" },
    tags: ["local-business", "services", "plumbing",  "conversion"],
    description:
      "Reliable Plumbing Services in Atlanta, GA",
  };
  


export default function AllAboutPlumbing() {
  return (
    <div className="min-h-screen bg-[#f4f1e9] font-sans text-[#202322]">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}
