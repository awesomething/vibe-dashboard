"use client"
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServiceStrip } from "./components/ServiceStrip";
import { ColoredPanels } from "./components/ColoredPanels";
import { Highlights } from "./components/Highlights";
import { WhyUs } from "./components/WhyUs";
import { Process } from "./components/Process";
import { TrustSection } from "./components/TrustSection";
import { FAQ } from "./components/FAQ";
import { RequestForm } from "./components/RequestForm";
import { CTABand } from "./components/CTABand";
import { Footer } from "./components/Footer";

export {meta} from "./meta"


export default function RpPlumbingAtlantaLanding() {
  function scrollToRequest(e) {
    if (e && e.preventDefault) e.preventDefault();
    document.getElementById("request")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="bg-[#F6F1E6] text-[#141210]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-badge { animation: float 3.5s ease-in-out infinite; }
        .nav-link { position: relative; }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 2px;
          width: 0%;
          background: #FF4A1E;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
      `}</style>
      
      <Header scrollToRequest={scrollToRequest} />
      <Hero scrollToRequest={scrollToRequest} />
      <ServiceStrip />
      <ColoredPanels scrollToRequest={scrollToRequest} />
      <Highlights />
      <WhyUs />
      <Process />
      <TrustSection />
      <FAQ />
      <RequestForm />
      <CTABand />
      <Footer />
    </div>
  );
}