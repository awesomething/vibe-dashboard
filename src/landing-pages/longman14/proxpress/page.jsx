"use client";

import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Process } from "./components/Process";
import { Reviews } from "./components/Reviews";
import { RequestService } from "./components/RequestService";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";

export {meta} from "./meta"


export default function ProXpressPlumbingLanding() {
  return (
    <div
      className="bg-[#EDF0EE] text-[#16232B]"
      style={{ fontFamily: "'Source Sans 3', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap');
      `}</style>
      
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Reviews />
      <RequestService />
      <Location />
      <Footer />
    </div>
  );
}