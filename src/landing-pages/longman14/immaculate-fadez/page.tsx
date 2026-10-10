import type { ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  Scissors,
  Star,
} from "lucide-react";
import Reveal from "./reveal";
import styles from "./page.module.css";

export { meta } from "./meta";

const phoneNumber = "(404) 637-7134";
const phoneLink = "tel:+14046377134";
const mapsLink =
  "https://maps.google.com/?cid=2510962144339322636&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1100&q=85",
    alt: "Barber shaping a fresh haircut in the shop",
    className: "galleryWide",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=850&q=85",
    alt: "Close-up of a clean fade haircut",
    className: "galleryTall",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=850&q=85",
    alt: "Barber tools ready for a cut",
    className: "galleryShort",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1100&q=85",
    alt: "Barber carefully detailing a client's haircut",
    className: "galleryWide",
  },
];

function SectionHeading({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className={styles.sectionHeading}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default function ImmaculateFadezPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.wordmark} href="#top" aria-label="Immaculate Fadez home">
          <span className={styles.brandIcon}><Scissors size={18} strokeWidth={1.8} /></span>
          <span>IMMACULATE<span className={styles.wordmarkLight}> FADEZ</span></span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#about">The shop</a>
          <a href="#gallery">Cuts</a>
          <a href="#reviews">Reviews</a>
          <a className={styles.navCta} href={phoneLink}>Call to book <ArrowUpRight size={15} /></a>
        </nav>
      </header>
      <section className={styles.hero} id="top">
        <div className={styles.heroImage} aria-hidden="true" />
        <div className={styles.heroContent}>
          <Reveal>
            <p className={styles.heroEyebrow}>ATLANTA, GEORGIA · CHESHIRE BRIDGE</p>
            <h1>Sharp lines.<br />Fresh <span>feeling.</span></h1>
            <p className={styles.heroDescription}>
              Come through for a cut that feels like you, only sharper.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.buttonPrimary} href={phoneLink}>
                Call to book <ArrowUpRight size={17} />
              </a>
              <a className={styles.textLink} href={mapsLink} target="_blank" rel="noreferrer">
                Find the shop <ArrowDownRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
        <a className={styles.heroLocation} href={mapsLink} target="_blank" rel="noreferrer">
          <MapPin size={15} /> 2198 Cheshire Bridge Rd NE, Atlanta
        </a>
        <div className={styles.heroIndex} aria-hidden="true">IF / ATL</div>
      </section>

      <div className={styles.ticker} aria-label="Immaculate Fadez, Atlanta">
        <span>GOOD CUTS. GOOD ENERGY.</span><i /><span>CHESHIRE BRIDGE, ATLANTA</span><i /><span>GOOD CUTS. GOOD ENERGY.</span>
      </div>

      <section className={styles.about} id="about">
        <Reveal className={styles.aboutImageWrap}>
          <img
            className={styles.aboutImage}
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85"
            alt="A barber at work in a neighborhood barbershop"
          />
          <div className={styles.imageCaption}>A good cut changes the whole day.</div>
        </Reveal>
        <Reveal className={styles.aboutCopy}>
          <p className={styles.eyebrow}>YOUR NEIGHBORHOOD BARBER</p>
          <SectionHeading title="The fresh-cut feeling, right around the corner.">
            <p>
              Immaculate Fadez is a place to settle in, get cleaned up, and leave
              feeling like yourself. Pull up on Cheshire Bridge and let’s get
              you right.
            </p>
          </SectionHeading>
          <a className={styles.underlinedLink} href={mapsLink} target="_blank" rel="noreferrer">
            Get directions <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </section>

      <section className={styles.why} id="why-us">
        <Reveal className={styles.whyIntro}>
          <p className={styles.eyebrow}>THE IMMACULATE DIFFERENCE</p>
          <SectionHeading title="It’s all in the details.">
            <p>Good cuts come down to care, a steady hand, and listening to what you want.</p>
          </SectionHeading>
        </Reveal>
        <div className={styles.reasons}>
          <Reveal className={styles.reason}>
            <span className={styles.reasonNumber}>01</span>
            <div><h3>Your cut, your call.</h3><p>Bring a reference or tell us what you have in mind. We’ll work with you to get the look right.</p></div>
          </Reveal>
          <Reveal className={styles.reason}>
            <span className={styles.reasonNumber}>02</span>
            <div><h3>Details matter.</h3><p>Clean lines and a considered finish make the difference between a cut and your cut.</p></div>
          </Reveal>
          <Reveal className={styles.reason}>
            <span className={styles.reasonNumber}>03</span>
            <div><h3>Easy to get to.</h3><p>Find us on Cheshire Bridge Road NE, a neighborhood stop in the heart of Atlanta.</p></div>
          </Reveal>
        </div>
      </section>

      <section className={styles.gallery} id="gallery">
        <Reveal className={styles.galleryHeader}>
          <p className={styles.eyebrow}>THE WORK</p>
          <SectionHeading title="Fresh from the chair." />
          <p>Come in with an idea. Leave with a look that feels like yours.</p>
        </Reveal>
        <div className={styles.galleryGrid}>
          {gallery.map((image, index) => (
            <Reveal className={`${styles.galleryItem} ${styles[image.className]}`} key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span className={styles.galleryNumber}>0{index + 1}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.booking} id="booking">
        <Reveal className={styles.bookingCopy}>
          <p className={styles.eyebrow}>MAKE YOUR MOVE</p>
          <SectionHeading title="Your chair is waiting.">
            <p>Give us a call to book your visit and check the latest availability.</p>
          </SectionHeading>
          <a className={styles.buttonPrimary} href={phoneLink}>
            Call to book <ArrowUpRight size={17} />
          </a>
        </Reveal>
        <Reveal className={styles.bookingDetails}>
          <div className={styles.detailRow}>
            <span className={styles.detailIcon}><MapPin size={19} /></span>
            <div><span className={styles.detailLabel}>FIND THE SHOP</span><a href={mapsLink} target="_blank" rel="noreferrer">2198 Cheshire Bridge Rd NE<br />Atlanta, GA 30324 <ArrowUpRight size={14} /></a></div>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailIcon}><Scissors size={19} /></span>
            <div><span className={styles.detailLabel}>BOOK BY PHONE</span><a href={phoneLink}>{phoneNumber} <ArrowUpRight size={14} /></a></div>
          </div>
        </Reveal>
      </section>

      <section className={styles.reviews} id="reviews">
        <Reveal className={styles.reviewMark}><Star size={22} fill="currentColor" /></Reveal>
        <Reveal className={styles.reviewCopy}>
          <p className={styles.eyebrow}>DON’T JUST TAKE OUR WORD FOR IT</p>
          <SectionHeading title="See what the neighborhood says.">
            <p>Read the latest customer reviews on Google before you stop by.</p>
          </SectionHeading>
          <a className={styles.underlinedLink} href={mapsLink} target="_blank" rel="noreferrer">
            Read Google reviews <ArrowUpRight size={16} />
          </a>
        </Reveal>
        <a className={styles.reviewArrow} href={mapsLink} target="_blank" rel="noreferrer" aria-label="Open Immaculate Fadez on Google Maps">
          <ArrowUpRight size={26} />
        </a>
      </section>

      <section className={styles.faq} id="faq">
        <Reveal className={styles.faqIntro}>
          <p className={styles.eyebrow}>GOOD TO KNOW</p>
          <SectionHeading title="Before you pull up." />
        </Reveal>
        <div className={styles.faqList}>
          <details>
            <summary>How do I book a haircut?<span /></summary>
            <p>Call us at <a href={phoneLink}>{phoneNumber}</a> to book your visit and check availability.</p>
          </details>
          <details>
            <summary>Where is Immaculate Fadez?<span /></summary>
            <p>We’re at 2198 Cheshire Bridge Rd NE, Atlanta, GA 30324. <a href={mapsLink} target="_blank" rel="noreferrer">Get directions on Google Maps.</a></p>
          </details>
          <details>
            <summary>Can I check for same-day availability?<span /></summary>
            <p>Give us a call and ask what’s open. We’ll let you know what we can do.</p>
          </details>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalTexture} aria-hidden="true" />
        <Reveal className={styles.finalCtaContent}>
          <p className={styles.eyebrow}>IMMACULATE FADEZ · ATLANTA</p>
          <h2>Walk out feeling<br />like <span>yourself.</span></h2>
          <a className={styles.buttonLight} href={phoneLink}>
            Call to book <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </section>

      <footer className={styles.footer}>
        <a className={styles.wordmark} href="#top">
          <span className={styles.brandIcon}><Scissors size={18} strokeWidth={1.8} /></span>
          <span>IMMACULATE<span className={styles.wordmarkLight}> FADEZ</span></span>
        </a>
        <a className={styles.footerAddress} href={mapsLink} target="_blank" rel="noreferrer">
          2198 Cheshire Bridge Rd NE, Atlanta, GA 30324
        </a>
        <a className={styles.footerPhone} href={phoneLink}>{phoneNumber} <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  );
}
