import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import {
	BeforeAfter,
	FAQ,
	MapSection,
	Materials,
	Process,
	Projects,
	PromiseSection,
	Reviews,
	Services,
	StormCTA,
	TrustStrip,
} from "./components/Sections";

export { meta } from "./meta";

export default function OnlineRoofingPage() {
	return (
		<main className="min-h-screen font-sans antialiased">
			<Navbar />
			<Hero />
			<TrustStrip />
			<PromiseSection />
			<Services />
			<BeforeAfter />
			<Materials />
			<Projects />
			<StormCTA />
			<Process />
			<Reviews />
			<FAQ />
			<MapSection />
			<Footer />
		</main>
	);
}
