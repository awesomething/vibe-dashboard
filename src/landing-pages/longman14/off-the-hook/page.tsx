"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Star,
} from "lucide-react";
import styles from "./off-the-hook.module.css";


export {meta} from "./meta";

const business = {
  phone: "(404) 589-4625",
  tel: "+14045894625",
  address: "257 - A Peters St SW, Atlanta, GA 30313, USA",
  maps:
    "https://maps.google.com/?cid=4255173206835370460&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
};

const reviews = [
  {
    quote: "Great friendly environment best place in town for a haircut",
  },
  {
    quote: "Celebrities love this shop because of its great location, dope staff, and music.",
  },
  {
    quote: "Glad to have a shop to support with consistent service and a friendly staff.",
  },
];

const lookbook = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
    alt: "Barber carefully shaping a short haircut",
    title: "A close, careful finish",
    note: "REFERENCE IMAGE",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661380558859-40df8dd91dfd?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFyYmVyJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Barbering tools laid out on a wooden work surface",
    title: "The tools of the trade",
    note: "REFERENCE IMAGE",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVyJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Barber at work on a client's haircut",
    title: "Time in the chair",
    note: "REFERENCE IMAGE",
  },
  {
    src: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFyYmVyJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Barber carefully shaping a client's haircut",
    title: "Professional Touch",
    note: "REFERENCE IMAGE",
  }
];

const shopNotes = [
  { phrase: "Friendly environment", context: "A warm welcome matters." },
  { phrase: "Great location", context: "Right on Peters Street in Atlanta." },
  { phrase: "Dope staff, and music", context: "Good people. Good soundtrack." },
  { phrase: "Consistent service", context: "The reason to come back." },
];

function Rating({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? styles.ratingCompact : styles.rating}>
      <span className={styles.ratingValue}>4.8</span>
      <span className={styles.stars} aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} aria-hidden="true" fill="currentColor" />
        ))}
      </span>
      <span className={styles.ratingCaption}>from 289 Google reviews</span>
    </div>
  );
}

function ShopNotes() {
  return (
    <section className={styles.shopNotes} aria-labelledby="shop-notes-title">
      <div className={styles.shopNotesIntro}>
        <span className={styles.sectionIndex}>THE WORD AROUND THE SHOP</span>
        <h2 id="shop-notes-title">
          It&apos;s more than
          <br />
          <em>a fresh cut.</em>
        </h2>
        <p>
          A few things customers have called out in their reviews. Their words,
          not a house-made checklist.
        </p>
      </div>
      <ul className={styles.shopNotesList}>
        {shopNotes.map((item, index) => (
          <li className={styles.shopNote} key={item.phrase}>
            <span aria-hidden="true" className={styles.shopNoteNumber}>
              0{index + 1}
            </span>
            <div>
              <blockquote>&ldquo;{item.phrase}&rdquo;</blockquote>
              <p>{item.context}</p>
            </div>
          </li>
        ))}
        <li className={styles.shopNotesSource}>HIGHLIGHTS FROM THE SUPPLIED GOOGLE REVIEWS</li>
      </ul>
    </section>
  );
}

function Lookbook() {
  return (
    <section className={styles.lookbook} id="lookbook" aria-labelledby="lookbook-title">
      <div className={styles.lookbookHeading}>
        <div>
          <span className={styles.sectionIndex}>A LITTLE CUT INSPIRATION</span>
          <h2 id="lookbook-title">
            The barber&apos;s
            <br />
            <em>point of view.</em>
          </h2>
        </div>
        <p>
          A lookbook of barbering details to spark an idea before your visit.
          These are reference photos, not verified Off the Hook client work.
        </p>
      </div>
      <div className={styles.lookbookGrid}>
        {lookbook.map((item, index) => (
          <figure className={styles.lookbookItem} key={item.src}>
            <div className={styles.lookbookImageWrap}>
              <img
                alt={item.alt}
                className={styles.lookbookImage}
                loading="lazy"
                src={item.src}
              />
              <span className={styles.lookbookIndex}>0{index + 1}</span>
            </div>
            <figcaption>
              <span>{item.note}</span>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
     
    </section>
  );
}

function StreetMark() {
  return (
    <div className={styles.streetMark} aria-label="Located on Peters Street Southwest">
      <svg
        aria-hidden="true"
        className={styles.streetDrawing}
        viewBox="0 0 360 210"
        fill="none"
      >
        <path
          d="M-16 161C39 150 54 80 112 87c45 5 54 66 102 54 44-11 54-83 98-89 20-3 36 5 60 17"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M-8 182c63-14 79-77 121-75 35 1 56 58 97 48 39-9 57-69 96-76 24-5 42 1 66 14"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 7"
        />
        <path d="M168 0v210M174 0v210M0 38h360M0 44h360" stroke="currentColor" strokeWidth="1" opacity=".2" />
        <circle cx="214" cy="141" r="16" fill="currentColor" opacity=".12" />
        <circle cx="214" cy="141" r="7" fill="currentColor" />
        <circle cx="214" cy="141" r="2" fill="var(--oth-paper)" />
      </svg>
      <span className={styles.streetLabel}>Peters St SW</span>
      <span className={styles.streetCaption}>A good cut, right around the corner.</span>
      <span className={styles.streetCoords}>WAYFINDING SKETCH · NOT TO SCALE</span>
    </div>
  );
}

function BookingPreview() {
  const [message, setMessage] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(true);
  }

  return (
    <section className={styles.booking} id="book">
      <div className={styles.bookingIntro}>
        <span className={styles.sectionIndex}>A TIME IN THE CHAIR</span>
        <h2>
          Make a little
          <br />
          <em>room for yourself.</em>
        </h2>
        <p>
          Pick a day and time that suit you. Online booking is coming soon;
          nothing on this preview is sent or reserved.
        </p>
        <a className={styles.bookingPhone} href={`tel:${business.tel}`}>
          <Phone aria-hidden="true" />
          <span>For now, give us a call</span>
          <strong>{business.phone}</strong>
        </a>
      </div>

      <form className={styles.bookingForm} onSubmit={handleSubmit}>
        <div className={styles.formHeading}>
          <span>BOOKING PREVIEW</span>
          <span className={styles.previewStatus}>
            <i /> NOT CONNECTED
          </span>
        </div>
        <label>
          Preferred day
          <input aria-label="Preferred day" required type="date" />
        </label>
        <label>
          Preferred time
          <select aria-label="Preferred time" defaultValue="" required>
            <option disabled value="">
              Choose a time
            </option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </label>
        <label>
          A note for the barber <span>(optional)</span>
          <textarea
            aria-label="A note for the barber, optional"
            placeholder="What are you thinking?"
            rows={2}
          />
        </label>
        <button className={styles.submitButton} type="submit">
          Preview your visit <ArrowRight aria-hidden="true" />
        </button>
        <p aria-live="polite" className={styles.formNotice}>
          {message
            ? "This booking preview isn't connected. Your choices weren't sent or reserved. Call the shop to arrange a visit."
            : "This is a preview only. Your choices stay here; nothing is sent or reserved."}
        </p>
      </form>
    </section>
  );
}

function MapSection() {
  return (
    <section className={styles.mapSection} aria-label="Map to the shop">
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.067332306236!2d-84.401915!3d33.7486252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50380e227e57f%3A0x3b1c55bd13dd2f1c!2s257%20Peters%20St%20SW%2C%20Atlanta%2C%20GA%2030313!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
    </section>
  );
}

function CtaCard() {
  return (
    <section className={styles.ctaCardSection} aria-label="Call to action">
      <div className={styles.ctaCard}>
        <div className={styles.ctaCardContent}>
          <span className={styles.ctaEyebrow}>Walk-ins welcome</span>
          <h2>
            Ready for your
            <br />
            <em>next great cut?</em>
          </h2>
          <p>Join the Off the Hook family and experience the difference today.</p>
        </div>

        <div className={styles.ctaMeta}>
          <div className={styles.ctaMetaItem}>
            <span>Open</span>
            <strong>Tue–Sat · 9am–6pm</strong>
          </div>

          <div className={styles.ctaCardActions}>
            <a className={styles.ctaButton} href="#book">
              Book an appointment <ArrowUpRight aria-hidden="true" />
            </a>
            <a className={styles.ctaCall} href={`tel:${business.tel}`}>
              <Phone aria-hidden="true" /> {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function OffTheHookPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.wordmark} href="#top" aria-label="Off the Hook, home">
          <span className={styles.brandSymbol}>
            <Scissors aria-hidden="true" />
          </span>
          <span>
            OFF THE HOOK
            <small>BARBER SHOP · ATLANTA</small>
          </span>
        </a>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={styles.menuToggle}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <Menu aria-hidden="true" />
        </button>

        <nav className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ""}`}>
          <a href="#lookbook" onClick={() => setMenuOpen(false)}>LOOKBOOK</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>THE WORD</a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>FIND US</a>
          <a className={styles.navCall} href={`tel:${business.tel}`}>
            <Phone aria-hidden="true" /> CALL THE SHOP
          </a>
        </nav>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.heroLocation}>
            <MapPin aria-hidden="true" /> PETERS STREET · ATLANTA, GA
          </p>
          <h1>
            Find your
            <br />
            <em>good side.</em>
          </h1>
          <p className={styles.heroDescription}>
            A neighborhood barber shop on Peters Street, where the welcome is
            warm and the cut is yours.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryAction} href="#book">
              Find a time <ArrowUpRight aria-hidden="true" />
            </a>
            <a className={styles.secondaryAction} href={`tel:${business.tel}`}>
              <Phone aria-hidden="true" /> {business.phone}
            </a>
          </div>
          <a className={styles.scrollNote} href="#reviews">
            <ArrowDownRight aria-hidden="true" /> GOOD THINGS, AHEAD
          </a>
        </div>

        <div className={styles.heroVisual}>
          <img
            alt="A barber carefully shaping a client's haircut"
            className={styles.heroImage}
            fetchPriority="high"
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1400&q=85"
          />
          <div className={styles.imageStamp}>
            <Scissors aria-hidden="true" />
            <span>YOUR SEAT<br />IS WAITING</span>
          </div>
          <Rating compact />
          <span className={styles.imageCredit}>
            THE ART OF A GOOD CUT
          </span>
        </div>

        <div className={styles.heroFoot}>
          <span>257 - A PETERS ST SW</span>
          <span>ATLANTA, GEORGIA 30313</span>
          <a href="#visit">GET YOUR BEARINGS <ArrowDownRight aria-hidden="true" /></a>
        </div>
      </section>

      <ShopNotes />
      <Lookbook />

      <section className={styles.reviews} id="reviews">
        <div className={styles.reviewsHeading}>
          <div>
            <span className={styles.sectionIndex}>GOOD COMPANY, GOOD WORD</span>
            <h2>
              Don&apos;t just
              <br />
              <em>take our word.</em>
            </h2>
          </div>
          <Rating />
        </div>

        <div className={styles.reviewList}>
          {reviews.map((review, index) => (
            <article className={styles.review} key={review.quote}>
              <span className={styles.reviewNumber}>0{index + 1}</span>
              <div className={styles.reviewContent}>
                <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
              </div>
              <div className={styles.reviewAuthor}>
                <small>GOOGLE REVIEW</small>
              </div>
            </article>
          ))}
        </div>

        <a
          className={styles.allReviews}
          href={business.maps}
          rel="noreferrer"
          target="_blank"
        >
          See the shop on Google <ArrowUpRight aria-hidden="true" />
        </a>
      </section>

      <BookingPreview />

      <section className={styles.visit} id="visit">
        <div className={styles.visitCopy}>
          <span className={styles.sectionIndex}>PETERS STREET, ATLANTA</span>
          <h2>
            Easy to find.
            <br />
            <em>Hard to forget.</em>
          </h2>
          <p>{business.address}</p>
          <a
            className={styles.directionsButton}
            href={business.maps}
            rel="noreferrer"
            target="_blank"
          >
            Get directions <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <StreetMark />
      </section>

      <MapSection />
      <CtaCard />

      <footer className={styles.footer}>
        <a className={styles.wordmark} href="#top" aria-label="Back to top">
          <span className={styles.brandSymbol}>
            <Scissors aria-hidden="true" />
          </span>
          <span>
            OFF THE HOOK
            <small>BARBER SHOP · ATLANTA</small>
          </span>
        </a>
        <a href={`tel:${business.tel}`}>
          <Phone aria-hidden="true" /> {business.phone}
        </a>
        <span>257 - A PETERS ST SW · ATLANTA, GA</span>
      </footer>
    </main>
  );
}
