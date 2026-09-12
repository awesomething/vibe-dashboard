import { COLORS } from "./components/constants";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Marquee } from "./components/marquee";
import { Services } from "./components/services";
import { CraftSection } from "./components/craft-section";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { BookSection } from "./components/book-section";
import { Visit } from "./components/visit";
import { FAQSection } from "./components/faq-section";
import { FinalCTA } from "./components/final-cta";
import { Footer } from "./components/footer";

export const meta = {
  slug: "fade-factory",
  title: "Fade Factory ATL - barbershop marketing landing page.",
  author: { name: "Techilola", github: "Longman14" },
  tags: ["local-business", "services", "barbershop", "beauty and lifestyle", "conversion"],
  description:
    "Fade Factory ATL is where regulars come back for the same clean line-up every time - and where first-timers find out why.",
};

export default function FadeFactoryPage() {
  return (
    <div style={{ backgroundColor: COLORS.ink, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Jost:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        button { font: inherit; cursor: pointer; }
        select { cursor: pointer; }
        input:focus, select:focus, textarea:focus, button:focus-visible {
          outline: 2px solid ${COLORS.gold};
          outline-offset: 1px;
        }
        .marquee-track {
          animation: marquee 26s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
          * { transition: none !important; }
        }
      `}</style>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <CraftSection />
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
