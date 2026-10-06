import { BookingSection } from "./Booking";
import { FAQSection } from "./FAQ";
import { Footer, MobileCallBar } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import {
  AboutSection,
  GallerySection,
  Marquee,
  ReviewsSection,
  ServicesSection,
} from "./Sections";
import { VisitSection } from "./Visit";

export function ArinaLandingPage() {
  return (
    <main className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Marquee />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <ReviewsSection />
      <BookingSection />
      <FAQSection />
      <VisitSection />
      <Footer />
      <MobileCallBar />
    </main>
  );
}
