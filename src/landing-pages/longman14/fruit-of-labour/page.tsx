"use client";

import React from "react";
import { Header } from "./components/Header";
import { ContactForm } from "./components/ContactForm";
import { FaqSection } from "./components/FaqSection";
import {
  ArrowRight,
  Bath,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Droplets,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Thermometer,
  Wrench,
} from "lucide-react";
const styles = {
  page: "page",
  header: "header",
  brand: "brand",
  brandMark: "brandMark",
  brandName: "brandName",
  nav: "nav",
  headerCall: "headerCall",
  hero: "hero",
  heroInner: "heroInner",
  heroCopy: "heroCopy",
  heroAside: "heroAside",
  heroServices: "heroServices",
  heroService: "heroService",
  heroCta: "heroCta",
  eyebrow: "eyebrow",
  heroIntro: "heroIntro",
  heroActions: "heroActions",
  primaryButton: "primaryButton",
  heroCall: "heroCall",
  heroTrust: "heroTrust",
  formPanel: "formPanel",
  formSection: "formSection",
  formHeading: "formHeading",
  formEyebrow: "formEyebrow",
  successState: "successState",
  requestForm: "requestForm",
  submitButton: "submitButton",
  formPrivacy: "formPrivacy",
  promiseBand: "promiseBand",
  promise: "promise",
  servicesSection: "servicesSection",
  sectionIntro: "sectionIntro",
  sectionEyebrow: "sectionEyebrow",
  serviceGrid: "serviceGrid",
  serviceItem: "serviceItem",
  serviceMeta: "serviceMeta",
  processSection: "processSection",
  processIntro: "processIntro",
  steps: "steps",
  step: "step",
  standardSection: "standardSection",
  detailImage: "detailImage",
  standardCopy: "standardCopy",
  standardLead: "standardLead",
  finalCta: "finalCta",
  finalCtaInner: "finalCtaInner",
  finalCtaActions: "finalCtaActions",
  finalCtaButton: "finalCtaButton",
  faqSection: "faqSection",
  faqIntro: "faqIntro",
  faqList: "faqList",
  footer: "footer",
  footerTop: "footerTop",
  footerCta: "footerCta",
  footerInfo: "footerInfo",
  footerBottom: "footerBottom",
};

const heroImage =
  "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1800&q=88";
const detailImage =
  "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=85";

const services = [
  [
    "Emergency plumbing",
    "Leaks, backups, burst pipes, and problems that cannot wait.",
    Droplets,
  ],
  [
    "Water heaters",
    "Repairs, replacement, and practical advice for reliable hot water.",
    Thermometer,
  ],
  [
    "Drain clearing",
    "Get stubborn sinks, showers, and main lines moving cleanly again.",
    Wrench,
  ],
  [
    "Fixture installation",
    "Faucets, toilets, disposals, and fixtures with a clean finish.",
    Bath,
  ],
  [
    "Leak detection",
    "Find the source behind the wall, under the slab, or in the cabinet.",
    ShieldCheck,
  ],
  [
    "Home improvements",
    "Thoughtful plumbing updates that make everyday life work better.",
    Home,
  ],
] as const;

export default function FruitOfLabourPage() {
  return (
    <main className={styles.page} id="top">
      <section
        className={styles.hero}
        aria-label="Fruits of Labor plumbing services in Atlanta"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10, 38, 28, .92) 0%, rgba(10, 38, 28, .75) 46%, rgba(10, 38, 28, .28) 100%), linear-gradient(0deg, rgba(8, 31, 22, .76), transparent 50%), url(${heroImage})`,
        }}
      >
        <Header styles={styles} />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
               Atlanta, Georgia · Plumbing &amp; home care
            </p>
            <h1>
              Fruits of
              <br />
              <span>Labor Plumbing</span>
             
            </h1>
            <p className="text-lg md:text-2xl">& Home Improvements LLC</p>
            <p className={styles.heroIntro}>
              Good work. Straight answers. A home that works the way it should.
            </p>
            <div className={styles.heroTrust}>
              <span>
                <BadgeCheck size={17} /> Detail-driven work
              </span>
              <span>
                <Clock3 size={17} /> Responsive local service
              </span>
            </div>
          </div>
          <aside className={styles.heroAside} aria-label="Featured services">
            <ol className={styles.heroServices}>
              {services.slice(0, 4).map(([title], index) => (
                <li className={styles.heroService} key={title}>
                  <span>0{index + 1}</span>
                  <a href="#services">{title}</a>
                </li>
              ))}
            </ol>
            <a href="#contact" className={styles.heroCta}>
              <span>Request service</span>
              <ArrowRight size={20} />
            </a>
            <a href="tel:+19432662092" className={styles.heroCall}>
              <Phone size={17} /> (943) 266-2092
            </a>
          </aside>
        </div>
      </section>

      <section
        className={styles.promiseBand}
        aria-label="Our service commitments"
      >
        {[
          [
            "Clear recommendations",
            "Know what is happening and what it takes to fix it.",
            CheckCircle2,
          ],
          [
            "Respectful workmanship",
            "Care for your home is part of every job.",
            Wrench,
          ],
          [
            "Built for Atlanta",
            "Local service for the homes and people around us.",
            MapPin,
          ],
        ].map(([title, text, Icon]) => (
          <div className={styles.promise} key={title as string}>
            <Icon size={23} />
            <div>
              <h2>{title as string}</h2>
              <p>{text as string}</p>
            </div>
          </div>
        ))}
      </section>

      
      <section
        className={styles.servicesSection}
        id="services"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8, 30, 22, .94), rgba(10, 38, 28, .76)), url(${heroImage})`,
        }}
      >
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.sectionEyebrow}>
              Here when your home needs us
            </p>
            <h2>
              Plumbing that
              <br />
              keeps life moving.
            </h2>
          </div>
          <p>
            From the urgent call to the finishing details, get practical help
            from a team that takes pride in the work.
          </p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map(([title, text, Icon], index) => (
            <article className={styles.serviceItem} key={title}>
              <div className={styles.serviceMeta}>
                <span>0{index + 1}</span>
                <Icon size={25} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact" aria-label={`Request ${title.toLowerCase()}`}>
                Request service <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.processSection} id="process">
        <div className={styles.processIntro}>
          <p className={styles.sectionEyebrow}>The way work should feel</p>
          <h2>
            Good work.
            <br />
            <span>No guesswork.</span>
          </h2>
          <p>
            Know the plan, feel good about the work, and get on with your day.
          </p>
        </div>
        <div className={styles.steps}>
          {[
            [
              "01",
              "Listen first",
              "We start with the symptoms, your priorities, and the home around the problem.",
            ],
            [
              "02",
              "Make a plan",
              "You get a clear recommendation before the work begins.",
            ],
            [
              "03",
              "Leave it better",
              "We finish the details, clean the space, and walk you through it.",
            ],
          ].map(([number, title, text]) => (
            <div className={styles.step} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className={styles.standardSection}
        aria-label="About Fruits of Labor"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(12, 37, 27, .35), rgba(12, 37, 27, .9) 58%), url(${detailImage})`,
        }}
      >
        <div className={styles.standardCopy}>
          <p className={styles.sectionEyebrow}>About Fruits of Labor</p>
          <h2>Dependable is a feeling.</h2>
          <p className={styles.standardLead}>
            The quiet faucet. The drain that finally clears. The hot shower that
            works when you need it. We focus on details that make a home
            dependable again.
          </p>
          <ul>
            <li>
              <CheckCircle2 size={18} /> Honest scope before work begins
            </li>
            <li>
              <CheckCircle2 size={18} /> Clean, respectful job sites
            </li>
            <li>
              <CheckCircle2 size={18} /> A final walkthrough you understand
            </li>
          </ul>
        </div>
      </section>

      <FaqSection styles={styles} />
      <section className={styles.formSection} aria-label="Request plumbing service">
        <ContactForm styles={styles} />
      </section>


      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div className={styles.finalCtaInner}>
          <h2 id="final-cta-title">
            Ready to get your
            <br />
            home fixed?
          </h2>
          <p>Tell us what is going on and let’s find the right next step.</p>
          <div className={styles.finalCtaActions}>
            <a href="#contact" className={styles.finalCtaButton}>
              Request service <ArrowRight size={18} />
            </a>
            <a href="tel:+19432662092">Call (943) 266-2092</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerCta}>
            <p className={styles.sectionEyebrow}>Ready when you are</p>
            <h2>
              Let’s get your
              <br />
              home back on track.
            </h2>
            <a href="tel:+19432662092">
              <Phone size={17} /> (943) 266-2092
            </a>
          </div>
          <div className={styles.footerInfo}>
            <div>
              <h3>Visit</h3>
              <address>
                4525 Birdie Ln SW
                <br />
                Atlanta, GA 30331, USA
              </address>
            </div>
            <nav aria-label="Footer navigation">
              <h3>Explore</h3>
              <a href="#services">Services</a>
              <a href="#process">Our approach</a>
              <a href="#contact">Request service</a>
            </nav>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <a href="#top">Fruits of Labor Plumbing + Home Improvements</a>
          <span>© {new Date().getFullYear()} · Atlanta, Georgia</span>
        </div>
      </footer>
      <style jsx global>{`
        .page {
          --ink: #17343a;
          --ink-soft: #24484c;
          --paper: #f5f7f5;
          --white: #fff;
          --muted: #657775;
          --line: #dce5e1;
          --green: #287b63;
          --green-dark: #1e654f;
          --mint: #d9e9df;
          min-height: 100vh;
          overflow: hidden;
          background: var(--paper);
          color: var(--ink);
          font-family: "Manrope", sans-serif;
        }

        .page * {
          box-sizing: border-box;
        }
        .page a {
          color: inherit;
          text-decoration: none;
        }
        .page a:focus-visible,
        .page button:focus-visible,
        .page input:focus-visible,
        .page select:focus-visible,
        .page summary:focus-visible {
          outline: 3px solid #69a98a;
          outline-offset: 4px;
        }

        .header {
          position: relative;
          z-index: 2;
          display: flex;
          width: min(100%, 1440px);
          min-height: 86px;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin: 0 auto;
          padding: 16px clamp(24px, 5.5vw, 80px);
          background: var(--white);
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }
        .brandMark {
          display: grid;
          width: 43px;
          aspect-ratio: 1;
          place-items: center;
          background: var(--green);
          color: var(--white);
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 16px;
          font-weight: 700;
        }
        .brandName {
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 19px;
          font-weight: 700;
          line-height: 1;
        }
        .brandName small {
          display: block;
          margin-top: 6px;
          color: var(--muted);
          font-family: "Manrope", sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .nav {
          display: flex;
          align-items: center;
          gap: clamp(20px, 3vw, 42px);
          color: #536765;
          font-size: 12px;
          font-weight: 700;
        }
        .nav a,
        .headerCall,
        .heroCall,
        .serviceItem a,
        .footer a {
          transition:
            color 180ms ease,
            background-color 180ms ease,
            transform 180ms ease;
        }
        .nav a:hover {
          color: var(--green);
        }
        .headerCall {
          display: inline-flex;
          min-height: 43px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 14px;
          border: 1px solid var(--line);
          color: var(--green-dark);
          font-size: 12px;
          font-weight: 800;
        }
        .headerCall:hover {
          border-color: var(--green);
          background: var(--green);
          color: var(--white);
        }

        .hero {
          display: flex;
          min-height: 700px;
          align-items: center;
          background-color: var(--ink);
          background-position: center;
          background-size: cover;
          color: var(--white);
        }
        .heroInner {
          display: grid;
          width: min(100%, 1440px);
          grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.75fr);
          align-items: center;
          gap: clamp(44px, 8vw, 118px);
          margin: 0 auto;
          padding: 82px clamp(24px, 5.5vw, 80px);
        }
        .heroCopy {
          animation: rise 700ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
        }
        .eyebrow,
        .sectionEyebrow,
        .formEyebrow {
          margin: 0;
          color: #a9caba;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.13em;
          line-height: 1.5;
          text-transform: uppercase;
        }
        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .eyebrow span {
          width: 22px;
          height: 2px;
          background: #79bc98;
        }
        .hero h1 {
          margin: 28px 0 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: clamp(5rem, 9.2vw, 8.7rem);
          font-weight: 700;
          letter-spacing: 0;
          line-height: 0.8;
        }
        .hero h1 span {
          color: #8ac6a3;
        }
        .heroIntro {
          max-width: 410px;
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 16px;
          line-height: 1.7;
        }
        .heroActions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 24px;
          margin-top: 28px;
        }
        .primaryButton,
        .submitButton {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: space-between;
          gap: 26px;
          padding: 0 18px;
          background: var(--green);
          color: var(--white);
          font-size: 12px;
          font-weight: 800;
          transition:
            background-color 180ms ease,
            transform 180ms ease;
        }
        .primaryButton:hover,
        .submitButton:hover {
          transform: translateY(-2px);
          background: var(--green-dark);
        }
        .heroCall {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--white);
          font-size: 13px;
          font-weight: 700;
        }
        .heroCall:hover {
          color: #a9d4b9;
        }
        .heroTrust {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 42px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.24);
        }
        .heroTrust span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 11px;
          font-weight: 600;
        }
        .heroTrust svg {
          color: #8ac6a3;
        }

        .formPanel {
          padding: clamp(23px, 3vw, 34px);
          background: var(--white);
          color: var(--ink);
          box-shadow: 0 22px 70px rgba(4, 22, 23, 0.2);
          animation: rise 800ms 100ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
        }
        .formHeading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--line);
        }
        .formHeading > svg {
          flex: 0 0 auto;
          color: var(--green);
        }
        .formEyebrow {
          color: var(--green);
          font-size: 9px;
        }
        .formHeading h2 {
          margin: 9px 0 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: clamp(27px, 3vw, 36px);
          font-weight: 700;
          letter-spacing: 0;
          line-height: 0.98;
        }
        .requestForm {
          display: grid;
          gap: 15px;
          margin-top: 22px;
        }
        .requestForm label {
          display: grid;
          gap: 7px;
          color: #435956;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .requestForm input,
        .requestForm select {
          width: 100%;
          min-height: 46px;
          padding: 0 12px;
          border: 1px solid #d8e1dd;
          border-radius: 0;
          background: #fbfcfb;
          color: var(--ink);
          font:
            500 13px "Manrope",
            sans-serif;
          letter-spacing: 0;
          text-transform: none;
        }
        .requestForm input::placeholder {
          color: #899692;
        }
        .submitButton {
          width: 100%;
          margin-top: 3px;
          border: 0;
          cursor: pointer;
          font-family: "Manrope", sans-serif;
        }
        .formPrivacy {
          display: flex;
          align-items: center;
          gap: 7px;
          margin: 17px 0 0;
          color: #71817d;
          font-size: 9px;
          line-height: 1.5;
        }
        .formPrivacy svg {
          flex: 0 0 auto;
          color: var(--green);
        }
        .successState {
          display: flex;
          min-height: 300px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .successState > svg {
          color: var(--green);
        }
        .successState h3 {
          margin: 15px 0 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 28px;
        }
        .successState p {
          max-width: 320px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.7;
        }
        .successState button {
          padding: 0;
          border: 0;
          background: none;
          color: var(--green);
          cursor: pointer;
          font:
            800 10px "Manrope",
            sans-serif;
          text-transform: uppercase;
        }

        .promiseBand {
          display: grid;
          width: min(100%, 1440px);
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin: 0 auto;
          padding: 31px clamp(24px, 5.5vw, 80px);
          background: var(--white);
          border-bottom: 1px solid var(--line);
        }
        .promise {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .promise > svg {
          flex: 0 0 auto;
          color: var(--green);
        }
        .promise h2 {
          margin: 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 16px;
          font-weight: 700;
        }
        .promise p {
          max-width: 270px;
          margin: 5px 0 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.6;
        }

        .servicesSection {
          width: min(100%, 1440px);
          margin: 0 auto;
          padding: 100px clamp(24px, 7vw, 100px) 110px;
        }
        .sectionIntro {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 39px;
        }
        .sectionEyebrow {
          color: var(--green);
          font-size: 9px;
        }
        .sectionIntro h2,
        .processIntro h2,
        .standardCopy h2,
        .faqIntro h2,
        .footerCta h2 {
          margin: 13px 0 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: clamp(38px, 5vw, 60px);
          font-weight: 700;
          letter-spacing: 0;
          line-height: 0.98;
        }
        .sectionIntro > p {
          max-width: 375px;
          margin: 0 0 4px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.75;
        }
        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }
        .serviceItem {
          min-height: 235px;
          padding: 23px 24px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: var(--white);
          transition: background-color 180ms ease;
        }
        .serviceItem:hover {
          background: #edf4ef;
        }
        .serviceMeta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--green);
        }
        .serviceMeta span {
          font-size: 10px;
          font-weight: 800;
        }
        .serviceItem h3 {
          margin: 26px 0 8px;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 21px;
          font-weight: 700;
        }
        .serviceItem > p {
          max-width: 285px;
          min-height: 44px;
          margin: 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.65;
        }
        .serviceItem a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 17px;
          color: var(--green-dark);
          font-size: 10px;
          font-weight: 800;
        }
        .serviceItem a:hover {
          color: var(--ink);
          transform: translateX(3px);
        }

        .processSection {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          align-items: center;
          gap: 70px;
          padding: 88px max(calc((100vw - 1240px) / 2), 7vw);
          background: var(--ink);
          color: var(--white);
        }
        .processIntro .sectionEyebrow {
          color: #a9d4b9;
        }
        .processIntro h2 {
          font-size: clamp(42px, 5vw, 62px);
        }
        .processIntro h2 span {
          color: #8ac6a3;
        }
        .processIntro > p:last-child {
          max-width: 340px;
          margin: 19px 0 0;
          color: rgba(255, 255, 255, 0.67);
          font-size: 13px;
          line-height: 1.7;
        }
        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }
        .step {
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.3);
        }
        .step > span {
          color: #8ac6a3;
          font-size: 11px;
          font-weight: 800;
        }
        .step h3 {
          margin: 27px 0 9px;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 20px;
          font-weight: 700;
        }
        .step p {
          margin: 0;
          color: rgba(255, 255, 255, 0.64);
          font-size: 11px;
          line-height: 1.7;
        }

        .standardSection {
          display: grid;
          width: min(100%, 1240px);
          grid-template-columns: 1fr 0.9fr;
          align-items: center;
          gap: clamp(44px, 8vw, 105px);
          margin: 0 auto;
          padding: 104px 24px;
        }
        .detailImage {
          position: relative;
          min-height: 440px;
          background-color: var(--mint);
          background-position: center;
          background-size: cover;
        }
        .detailImage::after {
          position: absolute;
          inset: 35% 0 0;
          background: linear-gradient(transparent, rgba(13, 35, 40, 0.6));
          content: "";
        }
        .detailImage span {
          position: absolute;
          z-index: 1;
          bottom: 22px;
          left: 24px;
          color: var(--white);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .standardCopy h2 {
          max-width: 440px;
          font-size: clamp(40px, 5vw, 58px);
        }
        .standardLead {
          margin: 20px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }
        .standardCopy ul {
          display: grid;
          gap: 13px;
          margin: 24px 0 0;
          padding: 0;
          list-style: none;
        }
        .standardCopy li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #3e5550;
          font-size: 11px;
          font-weight: 700;
        }
        .standardCopy li svg {
          flex: 0 0 auto;
          color: var(--green);
        }

        .faqSection {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 80px;
          padding: 82px max(calc((100vw - 1240px) / 2), 7vw);
          background: #e9f0eb;
        }
        .faqIntro h2 {
          font-size: clamp(40px, 5vw, 58px);
        }
        .faqIntro > a {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 23px;
          color: var(--green-dark);
          font-size: 11px;
          font-weight: 800;
        }
        .faqList {
          border-top: 1px solid #cbd9d1;
        }
        .faqList details {
          border-bottom: 1px solid #cbd9d1;
        }
        .faqList summary {
          display: flex;
          min-height: 66px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          cursor: pointer;
          list-style: none;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 17px;
          font-weight: 700;
        }
        .faqList summary::-webkit-details-marker {
          display: none;
        }
        .faqList summary svg {
          flex: 0 0 auto;
          color: var(--green);
          transition: transform 180ms ease;
        }
        .faqList details[open] summary svg {
          transform: rotate(180deg);
        }
        .faqList details > p {
          max-width: 620px;
          margin: -2px 35px 19px 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .footer {
          padding: 71px max(calc((100vw - 1240px) / 2), 7vw) 23px;
          background: #173c39;
          color: var(--white);
        }
        .footerTop {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          padding-bottom: 56px;
        }
        .footerCta .sectionEyebrow {
          color: #a9d4b9;
        }
        .footerCta h2 {
          max-width: 560px;
          font-size: clamp(43px, 5.5vw, 68px);
        }
        .footerCta > a {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          gap: 10px;
          margin-top: 24px;
          padding: 0 15px;
          background: #8ac6a3;
          color: #173c39;
          font-size: 12px;
          font-weight: 800;
        }
        .footerCta > a:hover {
          background: var(--white);
        }
        .footerInfo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          padding-top: 14px;
        }
        .footerInfo h3 {
          margin: 0 0 15px;
          color: #a9d4b9;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .footerInfo address,
        .footerInfo nav > a {
          display: block;
          color: rgba(255, 255, 255, 0.76);
          font-size: 11px;
          font-style: normal;
          line-height: 1.9;
        }
        .footerInfo nav > a:hover,
        .footerBottom a:hover {
          color: #a9d4b9;
        }
        .footerBottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-top: 17px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.65);
          font-size: 9px;
        }

        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        @media (max-width: 900px) {
          .hero {
            min-height: 0;
          }
          .heroInner {
            grid-template-columns: minmax(0, 1fr) minmax(300px, 0.8fr);
            gap: 34px;
            padding-top: 66px;
            padding-bottom: 66px;
          }
          .hero h1 {
            font-size: clamp(4.6rem, 10vw, 6.5rem);
          }
          .processSection {
            grid-template-columns: 1fr;
            gap: 42px;
            padding: 75px 7vw;
          }
          .faqSection {
            gap: 45px;
            padding: 72px 7vw;
          }
          .standardSection {
            gap: 45px;
          }
          .detailImage {
            min-height: 390px;
          }
          .footer {
            padding-right: 7vw;
            padding-left: 7vw;
          }
        }
        @media (max-width: 680px) {
          .header {
            min-height: 76px;
            gap: 12px;
            padding-right: 20px;
            padding-left: 20px;
          }
          .brand {
            gap: 9px;
          }
          .brandMark {
            width: 37px;
            font-size: 14px;
          }
          .brandName {
            font-size: 16px;
          }
          .brandName small {
            font-size: 7px;
          }
          .nav {
            order: 3;
            width: 100%;
            justify-content: space-between;
            padding-top: 9px;
          }
          .headerCall {
            min-height: 38px;
            padding: 0 9px;
            font-size: 0;
          }
          .headerCall svg {
            width: 17px;
          }
          .heroInner {
            grid-template-columns: 1fr;
            gap: 42px;
            padding: 62px 22px 50px;
          }
          .hero h1 {
            margin-top: 24px;
            font-size: clamp(5.1rem, 17vw, 7rem);
          }
          .heroIntro {
            margin-top: 23px;
          }
          .heroTrust {
            gap: 13px 20px;
            margin-top: 31px;
          }
          .formPanel {
            padding: 23px;
          }
          .promiseBand {
            grid-template-columns: 1fr;
            gap: 23px;
            padding: 27px 23px;
          }
          .promise p {
            max-width: none;
          }
          .servicesSection {
            padding: 72px 22px 78px;
          }
          .sectionIntro {
            display: grid;
            gap: 16px;
            margin-bottom: 27px;
          }
          .sectionIntro h2 {
            font-size: clamp(38px, 11vw, 52px);
          }
          .sectionIntro > p {
            max-width: 460px;
          }
          .serviceGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .serviceItem {
            min-height: 230px;
            padding: 18px 15px;
          }
          .serviceItem h3 {
            margin-top: 22px;
            font-size: 18px;
          }
          .serviceItem > p {
            font-size: 10px;
          }
          .processSection {
            gap: 33px;
            padding: 65px 22px;
          }
          .steps {
            gap: 16px;
          }
          .step h3 {
            margin-top: 20px;
            font-size: 17px;
          }
          .step p {
            font-size: 10px;
          }
          .standardSection {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 70px 22px;
          }
          .detailImage {
            min-height: 330px;
          }
          .standardCopy h2 {
            font-size: 44px;
          }
          .faqSection {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 65px 22px;
          }
          .faqIntro h2 {
            font-size: 47px;
          }
          .footer {
            padding: 62px 22px 20px;
          }
          .footerTop {
            grid-template-columns: 1fr;
            gap: 39px;
            padding-bottom: 38px;
          }
          .footerCta h2 {
            font-size: 47px;
          }
          .footerInfo {
            gap: 20px;
          }
          .footerBottom {
            flex-direction: column;
            gap: 8px;
          }
        }
        @media (max-width: 390px) {
          .brandName {
            font-size: 14px;
          }
          .brandName small {
            font-size: 6px;
          }
          .nav {
            gap: 10px;
            font-size: 10px;
          }
          .heroTrust {
            align-items: flex-start;
            flex-direction: column;
          }
          .serviceGrid {
            grid-template-columns: 1fr;
          }
          .serviceItem {
            min-height: 205px;
          }
          .steps {
            grid-template-columns: 1fr;
          }
          .step h3 {
            margin-top: 12px;
          }
          .footerInfo {
            grid-template-columns: 1fr;
          }
        }
        .page {
          --ink: #142b22;
          --ink-soft: #203d30;
          --paper: #f3f5ef;
          --white: #fff;
          --muted: #596c60;
          --line: #cbd6cc;
          --green: #4b8b53;
          --green-dark: #285e3b;
          --mint: #dce9dc;
          background: var(--paper);
          color: var(--ink);
          scrollbar-color: #6d936f #e2e9e1;
        }
        .page ::selection {
          background: #b5d4a5;
          color: #10251b;
        }
        .page a:focus-visible,
        .page button:focus-visible,
        .page input:focus-visible,
        .page select:focus-visible,
        .page summary:focus-visible {
          outline-color: #90bd7e;
        }
        .sectionEyebrow {
          display: none;
        }
        .hero {
          position: relative;
          min-height: 760px;
          align-items: stretch;
          background-position: center 56%;
        }
        .hero > .header {
          position: absolute;
          top: 0;
          left: 50%;
          z-index: 3;
          width: min(100%, 1440px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.26);
          background: transparent;
          color: var(--white);
          transform: translateX(-50%);
        }
        .hero .brandName,
        .hero .nav,
        .hero .heroCall {
          color: var(--white);
        }
        .hero .brandName small {
          color: rgba(255, 255, 255, 0.7);
        }
        .hero .nav a:hover,
        .hero .heroCall:hover {
          color: #c2dfb2;
        }
        .hero .headerCall {
          border-color: rgba(255, 255, 255, 0.56);
          color: var(--white);
        }
        .hero .headerCall:hover {
          border-color: #a5cf91;
          background: #a5cf91;
          color: #10251b;
        }
        .heroInner {
          min-height: 760px;
          grid-template-columns: minmax(0, 1.2fr) minmax(270px, 0.65fr);
          align-items: end;
          gap: clamp(44px, 7vw, 110px);
          padding: 145px clamp(24px, 5.5vw, 80px) 64px;
        }
        .heroCopy {
          max-width: 780px;
        }
        .eyebrow {
          color: #d0e4ca;
          font-size: 11px;
          letter-spacing: 0.08em;
        }
        .eyebrow span {
          background: #b7d99d;
        }
        .hero h1 {
          max-width: 790px;
          margin: 27px 0 0;
          font-size: 96px;
          line-height: 0.86;
          letter-spacing: 0;
          text-transform: uppercase;
        }
        .hero h1 span {
          color: #b4d69e;
        }
        .heroIntro {
          max-width: 420px;
          margin-top: 25px;
          color: rgba(255, 255, 255, 0.88);
          font-size: 16px;
          line-height: 1.65;
        }
        .heroActions {
          margin-top: 24px;
        }
        .heroTrust {
          gap: 18px 24px;
          margin-top: 42px;
          border-color: rgba(255, 255, 255, 0.34);
        }
        .heroTrust span {
          color: rgba(255, 255, 255, 0.88);
        }
        .heroTrust svg {
          color: #b4d69e;
        }
        .heroAside {
          width: 100%;
          max-width: 390px;
          justify-self: end;
          padding-bottom: 8px;
          animation: rise 800ms 120ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
        }
        .heroServices {
          margin: 0;
          padding: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.46);
          list-style: none;
        }
        .heroService {
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr);
          align-items: center;
          gap: 12px;
          min-height: 50px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }
        .heroService > span {
          color: #c5dabe;
          font-size: 11px;
          font-variant-numeric: tabular-nums;
        }
        .heroService > a {
          color: rgba(255, 255, 255, 0.94);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          transition: color 180ms ease;
        }
        .heroService > a:hover {
          color: #b9dcaa;
        }
        .heroCta {
          display: flex;
          min-height: 54px;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 20px;
          padding: 0 6px 0 18px;
          background: #a8d28d;
          color: #10251b;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          transition: background-color 180ms ease;
        }
        .page a.heroCta {
          color: #10251b;
        }
        .heroCta svg {
          width: 40px;
          height: 40px;
          padding: 10px;
          background: #f5f7f1;
        }
        .heroCta:hover {
          background: #c0dfa9;
        }
        .heroAside > .heroCall {
          margin-top: 16px;
          font-size: 12px;
        }
        .formSection {
          display: flex;
          justify-content: center;
          padding: 68px 24px;
          background: #e7eee6;
        }
        .formPanel {
          width: min(100%, 680px);
          padding: clamp(25px, 4vw, 42px);
          box-shadow: 0 18px 48px rgba(20, 43, 34, 0.1);
        }
        .formHeading h2 {
          margin-top: 0;
          font-size: 34px;
          line-height: 1.05;
        }
        .promiseBand {
          width: 100%;
          max-width: none;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
          padding: 32px max(calc((100vw - 1240px) / 2), 7vw);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: #f6f7f3;
        }
        .promise {
          gap: 13px;
        }
        .promise > svg {
          color: var(--green-dark);
        }
        .promise h2 {
          font-size: 16px;
        }
        .promise p {
          color: #52665a;
          font-size: 12px;
        }
        .servicesSection {
          padding-top: 108px;
          padding-bottom: 112px;
        }
        .sectionIntro {
          align-items: end;
          margin-bottom: 42px;
        }
        .sectionIntro h2,
        .processIntro h2,
        .standardCopy h2,
        .faqIntro h2,
        .footerCta h2 {
          letter-spacing: 0;
          text-transform: uppercase;
        }
        .sectionIntro h2 {
          max-width: 720px;
          font-size: 62px;
          line-height: 0.94;
        }
        .sectionIntro > p {
          max-width: 360px;
          color: #52665a;
        }
        .serviceGrid {
          border: 0;
          border-bottom: 1px solid var(--line);
        }
        .serviceItem {
          min-height: 218px;
          padding: 22px 24px 25px;
          border: 0;
          border-top: 1px solid var(--line);
          background: transparent;
          transition: background-color 180ms ease;
        }
        .serviceItem:hover {
          background: #e8eee6;
        }
        .serviceMeta {
          color: var(--green-dark);
        }
        .serviceMeta span {
          font-variant-numeric: tabular-nums;
        }
        .serviceItem h3 {
          margin-top: 25px;
          font-size: 24px;
        }
        .serviceItem > p {
          min-height: 0;
          color: #52665a;
          font-size: 12px;
        }
        .serviceItem a {
          color: var(--green-dark);
        }
        .processSection {
          background: #17392c;
        }
        .processIntro .sectionEyebrow,
        .footerCta .sectionEyebrow {
          display: none;
        }
        .processIntro h2 {
          font-size: 58px;
        }
        .processIntro h2 span {
          color: #b4d69e;
        }
        .steps {
          gap: 28px;
        }
        .step {
          border-color: rgba(255, 255, 255, 0.38);
        }
        .step > span {
          color: #b4d69e;
          font-variant-numeric: tabular-nums;
        }
        .standardSection {
          width: min(100%, 1320px);
        }
        .detailImage {
          min-height: 500px;
        }
        .standardCopy h2,
        .faqIntro h2 {
          font-size: 52px;
        }
        .standardLead,
        .standardCopy li {
          color: #52665a;
        }
        .faqSection {
          background: #e7eee6;
        }
        .faqList,
        .faqList details {
          border-color: #c4d2c5;
        }
        .faqList summary svg,
        .faqIntro > a {
          color: var(--green-dark);
        }
        .footer {
          background: #112d22;
        }
        .footerCta h2 {
          font-size: 60px;
        }
        .footerCta > a {
          background: #a8d28d;
          color: #10251b;
        }
        .footerInfo h3 {
          color: #b4d69e;
        }
        .footerBottom {
          border-color: rgba(255, 255, 255, 0.3);
        }
        @media (max-width: 900px) {
          .hero,
          .heroInner {
            min-height: 720px;
          }
          .heroInner {
            grid-template-columns: minmax(0, 1.1fr) minmax(240px, 0.8fr);
            gap: 34px;
            padding-right: 7vw;
            padding-left: 7vw;
          }
          .hero h1 {
            font-size: 78px;
          }
          .heroAside {
            max-width: 330px;
          }
          .promiseBand {
            padding-right: 6vw;
            padding-left: 6vw;
          }
          .sectionIntro h2 {
            font-size: 52px;
          }
        }
        @media (max-width: 680px) {
          .hero,
          .heroInner {
            min-height: 0;
          }
          .hero {
            background-position: 58% center;
          }
          .hero > .header {
            left: 0;
            width: 100%;
            flex-wrap: wrap;
            row-gap: 9px;
            padding: 15px 20px 12px;
            transform: none;
          }
          .hero .nav {
            order: 3;
            width: 100%;
            justify-content: space-between;
            padding-top: 0;
            font-size: 11px;
          }
          .heroInner {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 157px 22px 42px;
          }
          .hero h1 {
            margin-top: 22px;
            font-size: 64px;
          }
          .heroIntro {
            max-width: 360px;
            margin-top: 22px;
            font-size: 14px;
          }
          .heroTrust {
            gap: 12px 18px;
            margin-top: 27px;
          }
          .heroAside {
            max-width: none;
            padding: 0;
          }
          .heroService {
            min-height: 45px;
          }
          .formSection {
            padding: 42px 18px;
          }
          .formPanel {
            padding: 23px;
          }
          .promiseBand {
            grid-template-columns: 1fr;
            gap: 22px;
            padding: 27px 22px;
          }
          .servicesSection {
            padding: 72px 22px 78px;
          }
          .sectionIntro {
            display: grid;
            gap: 17px;
            margin-bottom: 29px;
          }
          .sectionIntro h2 {
            font-size: 44px;
          }
          .serviceGrid {
            grid-template-columns: 1fr;
          }
          .serviceItem {
            min-height: 0;
            padding: 22px 12px 24px;
          }
          .serviceItem h3 {
            margin-top: 17px;
            font-size: 22px;
          }
          .processIntro h2,
          .standardCopy h2,
          .faqIntro h2,
          .footerCta h2 {
            font-size: 42px;
          }
          .processSection {
            gap: 34px;
            padding: 64px 22px;
          }
          .steps {
            grid-template-columns: 1fr;
            gap: 22px;
          }
          .step h3 {
            margin-top: 15px;
          }
          .standardSection {
            gap: 29px;
            padding: 70px 22px;
          }
          .detailImage {
            min-height: 340px;
          }
          .faqSection {
            gap: 27px;
            padding: 64px 22px;
          }
          .footerCta h2 {
            font-size: 43px;
          }
        }
        @media (max-width: 390px) {
          .hero h1 {
            font-size: 56px;
          }
          .hero .nav {
            gap: 9px;
            font-size: 10px;
          }
          .hero .headerCall {
            min-height: 36px;
          }
        }
        .servicesSection {
          width: 100%;
          max-width: none;
          margin: 0;
          padding: 104px max(calc((100vw - 1240px) / 2), 7vw);
          background-position: center;
          background-size: cover;
          color: var(--white);
        }
        .servicesSection .sectionIntro,
        .servicesSection .serviceGrid {
          width: min(100%, 1240px);
          margin-right: auto;
          margin-left: auto;
        }
        .servicesSection .sectionIntro {
          margin-bottom: 42px;
        }
        .servicesSection .sectionIntro h2 {
          max-width: 720px;
          color: var(--white);
          font-size: 62px;
          line-height: 0.94;
        }
        .servicesSection .sectionIntro > p {
          color: rgba(255, 255, 255, 0.82);
        }
        .servicesSection .serviceGrid {
          grid-template-columns: 1fr;
          border: 0;
        }
        .servicesSection .serviceItem {
          display: grid;
          grid-template-columns: 56px minmax(0, 1fr) auto;
          grid-template-rows: auto auto;
          align-items: center;
          gap: 5px 24px;
          min-height: 112px;
          padding: 17px 0;
          border: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          background: transparent;
        }
        .servicesSection .serviceItem:last-child {
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }
        .servicesSection .serviceItem:hover {
          background: rgba(255, 255, 255, 0.045);
        }
        .servicesSection .serviceMeta {
          grid-column: 1;
          grid-row: 1 / 3;
          flex-direction: column;
          justify-content: center;
          gap: 7px;
          color: #c1ddaF;
        }
        .servicesSection .serviceMeta svg {
          width: 19px;
          height: 19px;
        }
        .servicesSection .serviceMeta span {
          font-size: 11px;
        }
        .servicesSection .serviceItem h3 {
          grid-column: 2;
          grid-row: 1;
          margin: 0;
          color: var(--white);
          font-size: 22px;
          text-transform: uppercase;
        }
        .servicesSection .serviceItem > p {
          grid-column: 2;
          grid-row: 2;
          max-width: 55ch;
          min-height: 0;
          color: rgba(255, 255, 255, 0.77);
          font-size: 12px;
        }
        .servicesSection .serviceItem > a {
          grid-column: 3;
          grid-row: 1 / 3;
          align-self: center;
          margin: 0;
          color: #c6e2b5;
          white-space: nowrap;
        }
        .standardSection {
          width: 100%;
          max-width: none;
          min-height: 650px;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          padding: 100px max(calc((100vw - 1240px) / 2), 7vw);
          background-position: center;
          background-size: cover;
          color: var(--white);
        }
        .standardCopy {
          grid-column: 2;
          width: 100%;
          max-width: 570px;
          justify-self: end;
        }
        .standardCopy .sectionEyebrow {
          display: block;
          margin-bottom: 12px;
          color: #c4e2b4;
        }
        .standardCopy h2 {
          color: var(--white);
        }
        .standardCopy .standardLead {
          color: rgba(255, 255, 255, 0.86);
        }
        .standardCopy li {
          color: rgba(255, 255, 255, 0.9);
        }
        .standardCopy li svg {
          color: #b4d69e;
        }
        .finalCta {
          position: relative;
          isolation: isolate;
          display: grid;
          min-height: 490px;
          place-items: center;
          overflow: hidden;
          padding: 82px 22px;
          background: #102b20;
          color: var(--white);
          text-align: center;
        }
        .finalCta::before {
          position: absolute;
          z-index: -1;
          inset: -30% -15%;
          background:
            radial-gradient(ellipse at 50% 75%, rgba(150, 202, 152, 0.27), transparent 34%),
            linear-gradient(132deg, transparent 40%, rgba(145, 198, 146, 0.14) 47%, transparent 53%),
            linear-gradient(148deg, transparent 47%, rgba(145, 198, 146, 0.1) 52%, transparent 59%),
            linear-gradient(112deg, transparent 44%, rgba(115, 174, 130, 0.12) 49%, transparent 55%);
          content: "";
        }
        .finalCtaInner {
          width: min(100%, 920px);
        }
        .finalCta h2 {
          margin: 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 68px;
          font-weight: 700;
          line-height: 0.94;
          text-transform: uppercase;
        }
        .finalCta p {
          margin: 20px 0 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: 15px;
          line-height: 1.6;
        }
        .finalCtaActions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 20px 28px;
          margin-top: 26px;
        }
        .finalCtaButton {
          display: inline-flex;
          min-width: 280px;
          min-height: 52px;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 0 17px;
          background: #f4f6f0;
          color: #142b22;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          transition: background-color 180ms ease;
        }
        .page a.finalCtaButton {
          color: #142b22;
        }
        .finalCtaButton:hover {
          background: #c5e1b4;
        }
        .finalCtaActions > a:last-child {
          color: rgba(255, 255, 255, 0.9);
          font-size: 13px;
          font-weight: 700;
          text-underline-offset: 4px;
        }
        @media (max-width: 900px) {
          .servicesSection,
          .standardSection {
            padding-right: 7vw;
            padding-left: 7vw;
          }
          .servicesSection .sectionIntro h2 {
            font-size: 52px;
          }
          .standardSection {
            min-height: 600px;
          }
          .finalCta h2 {
            font-size: 58px;
          }
        }
        @media (max-width: 680px) {
          .servicesSection {
            padding: 76px 22px;
          }
          .servicesSection .sectionIntro {
            display: grid;
            gap: 17px;
            margin-bottom: 30px;
          }
          .servicesSection .sectionIntro h2 {
            font-size: 43px;
          }
          .servicesSection .serviceItem {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 6px 14px;
            min-height: 120px;
            padding: 17px 0;
          }
          .servicesSection .serviceMeta {
            align-items: flex-start;
          }
          .servicesSection .serviceItem h3 {
            font-size: 19px;
          }
          .servicesSection .serviceItem > p {
            font-size: 11px;
          }
          .servicesSection .serviceItem > a {
            grid-column: 2;
            grid-row: 3;
            justify-self: start;
            margin-top: 4px;
          }
          .standardSection {
            min-height: 0;
            grid-template-columns: 1fr;
            padding: 76px 22px;
            background-position: 36% center;
          }
          .standardCopy {
            grid-column: 1;
            max-width: 560px;
          }
          .standardCopy h2 {
            font-size: 43px;
          }
          .finalCta {
            min-height: 390px;
            padding: 66px 22px;
          }
          .finalCta h2 {
            font-size: 44px;
          }
          .finalCta p {
            font-size: 13px;
          }
          .finalCtaActions {
            flex-direction: column;
            gap: 17px;
          }
          .finalCtaButton {
            width: min(100%, 340px);
            min-width: 0;
          }
        }
        @media (max-width: 390px) {
          .servicesSection .sectionIntro h2,
          .standardCopy h2,
          .finalCta h2 {
            font-size: 38px;
          }
          .servicesSection .serviceItem h3 {
            font-size: 17px;
          }
        }
      `}</style>
    </main>
  );
}
