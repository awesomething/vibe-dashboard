import { ContactSection, EmergencyCTA, FAQSection, GallerySection, ProcessSection, PromiseSection, ReviewsSection, ServicesSection, StatsSection, WhyUsSection } from "./Sections";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

export function AABuckleyLandingPage() {
  return <div className="font-sans antialiased"><Navbar /><Hero /><PromiseSection /><ServicesSection /><StatsSection /><WhyUsSection /><ProcessSection /><GallerySection /><ReviewsSection /><EmergencyCTA /><FAQSection /><ContactSection /><Footer /></div>;
}