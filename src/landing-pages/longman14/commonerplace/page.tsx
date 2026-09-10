import { Fraunces, IBM_Plex_Sans } from "next/font/google";

import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Nav } from "./components/nav";
import { Services } from "./components/services";
import { Space } from "./components/space";
import { Story } from "./components/story";
import { Stylists } from "./components/stylists";
import styles from "./commonerplace.module.css";
import { Visit } from "./components/visit";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const meta = {
  slug: "commonerplace",
  title: "Commoner Place - Cozy Salon in Little Five Points",
  author: { name: "Techilola", github: "Longman14" },
  tags: ["local-business", "services", "beauty", "salon", "conversion"],
  description:
    "A warm and inviting landing page for Commoner Place, a cozy salon in Little Five Points offering hair styling and beauty services.",
} as const;

export default function CommonerplacePage() {
    return (
      <main
        className={`${styles.page} ${fraunces.variable} ${plexSans.variable} bg-white text-[#2B1D14]`}
      >
        <Nav />
        <Hero />
        <Story />
        <Stylists />
        <Space />
        <Services />
        {/* <Visit /> */}
        <Footer />
      </main>
    );
  }
  