"use client";


import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Process } from "./components/Process";
import { Estimate } from "./components/Estimate";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";

export {meta} from "./meta"

export default function HomeForgeRoofingLanding() {
  return (
    <div
      className="bg-[#E6E7E4] text-[#202020]"
      style={{ fontFamily: "'Work Sans', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@600;700&family=Work+Sans:wght@400;500;600;700&display=swap');
      `}</style>
      
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Estimate />
      <Location />
      <Footer />
    </div>
  );
}

