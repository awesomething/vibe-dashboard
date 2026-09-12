import React from 'react'
import { COLORS } from '../lib/utils'
import Header from "./components/header"
import { TrustBar } from './components/trust-bar'
import { Services } from './components/service'

import { ProblemSection } from './components/problem-section';
import {HowItWorks} from "./components/how-it-work"
import { RequestServiceSection } from './components/request-service-section';
import { WhyChooseUs } from './components/why-choose-us';
import { ServiceAreas } from './components/service-area';
import { FAQSection } from './components/faq-section';
import { FinalCTA } from './components/final-cta';
import { Footer } from './components/footer';
import { MobileStickyCTA } from './components/mobile-sticky-cta';
import { Hero } from './components/hero'


export const meta = {
  slug: "frazier-plumbing",
  title: "Frazier Plumbing. The Best in the business",
  author: { name: "Techilola", github: "Longman14" },
  tags: ["local-business", "services", "plumbing", "conversion"],
  description:
    "A landing page for a plumbing website",
} 


const FrazierPage = () => {


  return (
    <div style={{ backgroundColor: COLORS.bg, minHeight: "100vh" }}>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800&family=Inter:wght@400;500;600;700&display=swap');
      * { box-sizing: border-box; }
      button { font: inherit; cursor: pointer; }
      select { cursor: pointer; }
      input:focus, select:focus, textarea:focus, button:focus-visible {
        outline: 2px solid ${COLORS.blue};
        outline-offset: 1px;
      }
    `}</style>
    <Header />
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <ProblemSection />
      <HowItWorks />
      <RequestServiceSection />
      <WhyChooseUs />
      <ServiceAreas />
      <FAQSection />
      <FinalCTA />
    </main>
    <Footer />
    <MobileStickyCTA />
    <div className="md:hidden h-16" />
  </div>
  )
}

export default FrazierPage