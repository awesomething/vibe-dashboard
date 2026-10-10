"use client";
import React, { useState } from "react";
import { ThemeCtx, THEMES, type Mode } from "./components/Shared";
import { Navbar, Hero, Stats, Services, Diagnose, Advisor, Seasonal, WhyUs, Projects, Reviews, Booking, FAQ, Visit, Footer, MobileCallBar } from "./components/Components";
import "./page.module.css";
export  {meta}  from "./meta";

export default function HacacPage() {
  const [mode, setMode] = useState<Mode>("cool");
  return (
    <ThemeCtx.Provider value={{ mode, setMode, t: THEMES[mode] }}>
      <main className="font-sans antialiased">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Diagnose />
        <Advisor />
        <Seasonal />
        <WhyUs />
        <Projects />
        <Reviews />
        <Booking />
        <FAQ />
        <Visit />
        <Footer />
        <MobileCallBar />
      </main>
    </ThemeCtx.Provider>
  );
}

