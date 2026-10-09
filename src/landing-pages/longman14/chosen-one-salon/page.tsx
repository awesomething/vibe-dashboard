import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  MapPin,
  Phone,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import styles from "./chosen-one-salon.module.css";

export { meta } from "./meta";

const phone = "+16787876758";
const mapsUrl =
  "https://maps.google.com/?cid=2069428551886246289&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA";
const address = "452 Flat Shoals Ave SE, Atlanta, GA 30316";

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=85",
    alt: "A bright, welcoming salon interior",
    label: "A little room to reset",
    number: "01",
    className: "galleryWide",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85",
    alt: "A barber carefully shaping a haircut",
    label: "The art of the detail",
    number: "02",
    className: "galleryTall",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85",
    alt: "A stylist working with a client's hair",
    label: "Your next good-hair day",
    number: "03",
    className: "gallerySmall",
  },
];

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "Give the salon a call at (678) 787-6758. The team can help you find a time and answer questions before you visit.",
  },
  {
    question: "Where is Chosen One Beauty & Barber Salon?",
    answer: `${address}, in Atlanta's East Atlanta area. Use the directions link below to plan your route.`,
  },
  {
    question: "What services are available?",
    answer:
      "The salon brings beauty and barbering together. Call ahead to ask about a specific service and the best appointment time.",
  },
  {
    question: "Can I walk in?",
    answer:
      "Please call the salon to check current availability before heading over.",
  },
];

const sampleReviews = [
  {
    quote:
      "A welcoming spot, a fresh look, and a team that makes you feel right at home.",
    byline: "A Chosen One guest",
  },
  {
    quote:
      "Love having beauty and barbering in one neighborhood salon. I'll definitely be back.",
    byline: "A local Atlanta guest",
  },
  {
    quote:
      "Came in ready for a change and left feeling like the best version of myself.",
    byline: "A happy guest",
  },
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.sectionLabel}>
      <span>{number}</span>
      <span className={styles.labelLine} />
      <span>{children}</span>
    </div>
  );
}

export default function ChosenOneSalonPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a href="#top" className={styles.wordmark} aria-label="Chosen One Salon home">
          <span className={styles.brandIcon} aria-hidden="true">
            <Scissors />
          </span>
          <span>
            CHOSEN ONE
            <small>BEAUTY &amp; BARBER SALON</small>
          </span>
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          <a href="#about">Our story</a>
          <a href="#gallery">The space</a>
          <a href="#faq">Good to know</a>
        </nav>
        <a className={styles.headerCta} href={`tel:${phone}`}>
          <span>Call to book</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            EAST ATLANTA · BEAUTY MEETS BARBERING
          </div>
          <h1>
            Come as
            <br />
            you are.
            <br />
            <em>Leave chosen.</em>
          </h1>
          <p className={styles.heroText}>
            Your neighborhood spot for a little self-expression, a fresh
            perspective, and feeling like the best version of you.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={`tel:${phone}`}>
              <Phone aria-hidden="true" />
              Call to book
              <ArrowRight aria-hidden="true" />
            </a>
            <a className={styles.textLink} href={mapsUrl} target="_blank" rel="noreferrer">
              Find us in Atlanta <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className={styles.heroDetails}>
            <MapPin aria-hidden="true" />
            <span>{address}</span>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImage}>
            <div className={styles.heroImageOverlay} />
            <span className={styles.imageNote}>YOUR NEIGHBORHOOD, YOUR LOOK</span>
          </div>
          <div className={styles.heroSeal} aria-label="Beauty and barbering">
            <span className={styles.sealOrbit}>BEAUTY · BARBER · ATLANTA ·</span>
            <Sparkles aria-hidden="true" />
            <span className={styles.sealCaption}>ALL<br />YOU</span>
          </div>
          <div className={styles.photoCredit}>A GOOD DAY STARTS IN THE CHAIR</div>
        </div>
        <a className={styles.scrollCue} href="#about" aria-label="Scroll to about us">
          <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <div className={styles.marquee} aria-label="Beauty, barbering, and good energy">
        <div className={styles.marqueeTrack} aria-hidden="true">
          {Array.from({ length: 2 }, (_, i) => (
            <span key={i}>
              BEAUTY <i>✳</i> BARBERING <i>✳</i> GOOD ENERGY <i>✳</i> EAST ATLANTA <i>✳</i>{" "}
            </span>
          ))}
        </div>
      </div>

      <section className={styles.whySection} id="why-us">
        <SectionLabel number="01">WHY CHOSEN ONE</SectionLabel>
        <div className={styles.whyGrid}>
          <h2>
            Not just a
            <br />
            fresh look.
            <br />
            <em>A feeling.</em>
          </h2>
          <p className={styles.whyLead}>
            A good look can change your whole day. Find a team that listens,
            a space that feels welcoming, and a style that feels like you.
          </p>
          <div className={styles.whyNote}>
            <span className={styles.noteStar}>✳</span>
            <p>
              One Atlanta salon for your beauty and barber needs, with the
              space to make your next look feel like your own.
            </p>
          </div>
        </div>
        <div className={styles.values}>
          <article className={styles.value}>
            <span>01 / YOUR KIND OF PLACE</span>
            <h3>Come on in.</h3>
            <p>A neighborhood salon with room for everybody and every style.</p>
          </article>
          <article className={styles.value}>
            <span>02 / TWO WORLDS, ONE ROOF</span>
            <h3>Beauty + barber.</h3>
            <p>Two crafts come together so you can find your own kind of fresh.</p>
          </article>
          <article className={styles.value}>
            <span>03 / RIGHT HERE IN ATL</span>
            <h3>Close to home.</h3>
            <p>Find us on Flat Shoals Avenue, in the heart of East Atlanta.</p>
          </article>
        </div>
      </section>

      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutPhoto} role="img" aria-label="Salon chair and styling station" />
        <div className={styles.aboutCopy}>
          <SectionLabel number="02">A LITTLE ABOUT US</SectionLabel>
          <p className={styles.scriptNote}>Your seat is waiting.</p>
          <h2>
            This is your
            <br />
            <em>kind of salon.</em>
          </h2>
          <p>
            Chosen One Beauty &amp; Barber Salon is where beauty and barbering
            meet a warm neighborhood welcome. Bring your signature look, a
            brand-new idea, or just a little curiosity. We&apos;re here to help
            you feel at ease, talk through what you want, and leave with a look
            that feels like you.
          </p>
          <a className={styles.underlinedLink} href={`tel:${phone}`}>
            Let&apos;s find your time <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <span className={styles.aboutStamp}>EST. FOR<br />YOUR NEXT<br />CHAPTER</span>
      </section>

      <section className={styles.bookingSection} id="booking">
        <div className={styles.bookingTop}>
          <SectionLabel number="03">YOUR NEXT GOOD HAIR DAY</SectionLabel>
          <span className={styles.bookingAside}>NO FORMS. JUST A FRIENDLY CALL.</span>
        </div>
        <div className={styles.bookingBody}>
          <div>
            <h2>
              Save yourself
              <br />
              <em>a seat.</em>
            </h2>
            <p>
              Tell us what you have in mind. We&apos;ll help you figure out the
              best time to come by.
            </p>
          </div>
          <a className={styles.bookingCard} href={`tel:${phone}`}>
            <span className={styles.bookingIcon}><CalendarDays aria-hidden="true" /></span>
            <span className={styles.bookingCardLabel}>READY WHEN YOU ARE</span>
            <strong>(678) 787-6758</strong>
            <span className={styles.bookingCardAction}>Call the salon <ArrowUpRight aria-hidden="true" /></span>
          </a>
        </div>
        <div className={styles.bookingFoot}>
          <Check aria-hidden="true" />
          <span>Call ahead to ask about services and current availability.</span>
          <span className={styles.bookingFootRule} />
        </div>
      </section>

      <section className={styles.gallerySection} id="gallery">
        <div className={styles.galleryHeading}>
          <div>
            <SectionLabel number="04">A FEEL FOR THE PLACE</SectionLabel>
            <h2>
              Good things
              <br />
              <em>are in the details.</em>
            </h2>
          </div>
          <p>
            A little inspiration for your next visit. Call us and tell us what
            you&apos;re picturing.
          </p>
        </div>
        <div className={styles.galleryGrid}>
          {gallery.map((item) => (
            <figure className={`${styles.galleryItem} ${styles[item.className]}`} key={item.number}>
              <div className={styles.galleryImageWrap}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className={styles.galleryNumber}>{item.number}</span>
                <span className={styles.galleryArrow}><ArrowUpRight aria-hidden="true" /></span>
              </div>
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <p className={styles.galleryDisclaimer}>STYLE INSPIRATION · IMAGES ARE NOT REPRESENTATIVE OF SALON CLIENT WORK</p>
      </section>

      <section className={styles.reviewsSection} id="reviews">
        <div className={styles.reviewMark}><Star fill="currentColor" aria-hidden="true" /></div>
        <SectionLabel number="05">KIND WORDS LIVE ON GOOGLE</SectionLabel>
        <h2>
          Come in for the look.
          <br />
          Leave with <em>a story.</em>
        </h2>
        <p>
          A good salon visit is worth talking about. Here&apos;s the feeling
          we hope you take with you.
        </p>
        <div className={styles.reviewCards}>
          {sampleReviews.map((review) => (
            <blockquote className={styles.reviewCard} key={review.quote}>
              <span className={styles.reviewStars} aria-label="Five stars">
                ★★★★★
              </span>
              <p>&ldquo;{review.quote}&rdquo;</p>
              <cite>{review.byline}</cite>
            </blockquote>
          ))}
        </div>
        <p className={styles.reviewDisclaimer}>
          SAMPLE REVIEW COPY — REPLACE WITH VERIFIED CUSTOMER REVIEWS BEFORE PUBLISHING
        </p>
        <a className={styles.reviewButton} href={mapsUrl} target="_blank" rel="noreferrer">
          See real reviews on Google <ArrowUpRight aria-hidden="true" />
        </a>
      </section>

      <section className={styles.faqSection} id="faq">
        <div className={styles.faqIntro}>
          <SectionLabel number="06">GOOD TO KNOW</SectionLabel>
          <h2>
            A few quick
            <br />
            <em>answers.</em>
          </h2>
          <p>Still wondering about something? Give us a call—we&apos;re happy to help.</p>
          <a className={styles.underlinedLink} href={`tel:${phone}`}>
            (678) 787-6758 <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <details className={styles.faqItem} key={faq.question}>
              <summary>
                <span className={styles.faqNumber}>0{index + 1}</span>
                <span>{faq.question}</span>
                <span className={styles.faqPlus} aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.visitSection} id="visit">
        <div className={styles.visitCopy}>
          <SectionLabel number="07">COME FIND US</SectionLabel>
          <h2>
            Right around
            <br />
            <em>the corner.</em>
          </h2>
          <a className={styles.addressLink} href={mapsUrl} target="_blank" rel="noreferrer">
            <span className={styles.addressIcon}><MapPin aria-hidden="true" /></span>
            <span>{address}<small>Get directions <ArrowUpRight aria-hidden="true" /></small></span>
          </a>
          <a className={styles.visitPhone} href={`tel:${phone}`}><Phone aria-hidden="true" /> (678) 787-6758</a>
        </div>
        <div className={styles.mapFrame}>
          <iframe
            title="Map showing Chosen One Beauty & Barber Salon in Atlanta"
            src="https://maps.google.com/maps?q=452%20Flat%20Shoals%20Ave%20SE%2C%20Atlanta%2C%20GA%20303016&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a href={mapsUrl} className={styles.mapDirections} target="_blank" rel="noreferrer">
            OPEN IN MAPS <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className={styles.finalCta}>
        <span className={styles.finalSparkle} aria-hidden="true">✳</span>
        <SectionLabel number="08">YOUR CHAIR. YOUR CALL.</SectionLabel>
        <h2>
          You were the
          <br />
          <em>chosen one</em>
          <br />
          all along.
        </h2>
        <a className={styles.finalButton} href={`tel:${phone}`}>
          Call to book <Phone aria-hidden="true" />
        </a>
        <span className={styles.finalPhone}>OR CALL (678) 787-6758</span>
      </section>

      <footer className={styles.footer}>
        <a href="#top" className={styles.footerBrand}>CHOSEN ONE <span>BEAUTY &amp; BARBER SALON</span></a>
        <span>452 FLAT SHOALS AVE SE · ATLANTA, GA</span>
        <a href={mapsUrl} target="_blank" rel="noreferrer">FIND YOUR WAY <ArrowUpRight aria-hidden="true" /></a>
        <span>© CHOSEN ONE SALON</span>
      </footer>
    </main>
  );
}
