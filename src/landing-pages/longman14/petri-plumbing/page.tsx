
import TestimonialCarousel from "./TestimonialCarousel";
export const meta = {
  slug: "petri-plumbing",
  title: "Petri Plumbing - Expert HVAC Company & Plumber in New York",
  author: { name: "Techilola", github: "Longman14" },
  tags: ["local-business", "services", "plumbing", "hvac", "conversion"],
  description:
    "A clean, lead-focused landing page for Petri Plumbing, highlighting heating, cooling, and drain cleaning services across Brooklyn and New York.",
} as const;


const theme = {
    navy: "#0B2545",
    navyLight: "#134074",
    blue: "#1B5EA6",
    blueLight: "#2D7DD2",
    sky: "#EBF4FF",
    white: "#FFFFFF",
    offWhite: "#F7F9FC",
    slate: "#4A5568",
    slateLight: "#718096",
    border: "rgba(11, 37, 69, 0.12)",
    gold: "#E8A020",
    goldLight: "#FFF3DC",
    red: "#C0392B",
  };

  const services = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
          <circle cx="24" cy="24" r="22" fill={theme.sky} />
          <path d="M16 32V20c0-4.4 3.6-8 8-8s8 3.6 8 8v12" stroke={theme.navy} strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="13" y="30" width="22" height="5" rx="2" fill={theme.navy}/>
          <path d="M24 12v-4M20 13l-2-3M28 13l2-3" stroke={theme.blue} strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="22" r="3" fill={theme.blue}/>
        </svg>
      ),
      title: "Heating Repair & Replacement",
      desc: "No heat in Brooklyn winter? We diagnose fast and restore warmth the same day.",
      badge: "Most Urgent",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
          <circle cx="24" cy="24" r="22" fill={theme.sky} />
          <path d="M24 14c0 0-8 8-8 14a8 8 0 0016 0c0-6-8-14-8-14z" fill={theme.blueLight} opacity="0.3" stroke={theme.navy} strokeWidth="2.5"/>
          <path d="M20 30c1 2 4 3 6 2" stroke={theme.white} strokeWidth="2" strokeLinecap="round"/>
          <path d="M28 24c1 1 1 3 0 4" stroke={theme.navy} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Drain Cleaning",
      desc: "From kitchen backups to stubborn main line blockages — fully cleared, fast.",
      badge: "High Demand",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
          <circle cx="24" cy="24" r="22" fill={theme.sky} />
          <rect x="12" y="20" width="24" height="14" rx="3" stroke={theme.navy} strokeWidth="2.5"/>
          <path d="M18 20v-4a6 6 0 0112 0v4" stroke={theme.navy} strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="24" cy="27" r="3" fill={theme.blue}/>
          <path d="M24 22v2" stroke={theme.blue} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Cooling & HVAC",
      desc: "Expert installation, seasonal tune-ups, and AC repairs you can count on.",
      badge: "",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
          <circle cx="24" cy="24" r="22" fill={theme.sky} />
          <path d="M15 33l6-6M21 27l3-8 3 8M27 27l6 6" stroke={theme.navy} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="19" r="4" stroke={theme.navy} strokeWidth="2.5"/>
          <path d="M31 20c2 1 3 3 3 5" stroke={theme.blue} strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 20c-2 1-3 3-3 5" stroke={theme.blue} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "General Plumbing",
      desc: "Leaks, fixtures, pipes, and everything in between — handled with care.",
      badge: "",
    },
  ];
   
  
  const stats = [
    { value: "1906", label: "Est. in Brooklyn" },
    { value: "100+", label: "Years of service" },
    { value: "24/7", label: "Emergency response" },
    { value: "5★", label: "Guaranteed work" },
  ];


const highlights = [
  "Serving Brooklyn and New York since 1906",
  "Fast, reliable, guaranteed service",
  "Heating, cooling, plumbing, and drains under one roof",
];

const testimonials = [
  {
    quote: "Called at 7am with no heat — technician was here by 9. Furnace fixed before lunch. Incredible service.",
    name: "Maria T.",
    location: "Park Slope, Brooklyn",
  },
  {
    quote: "Three drains backed up at once. Petri came out same day and had everything flowing in 90 minutes.",
    name: "James K.",
    location: "Bay Ridge, Brooklyn",
  },
  {
    quote: "I've used Petri for 12 years. They're honest, fast, and they actually explain what they're doing.",
    name: "Sandra M.",
    location: "Carroll Gardens, Brooklyn",
  },
];
 

const trustBadges = [
    "Licensed & Insured",
    "Background-Checked Techs",
    "Satisfaction Guaranteed",
    "Upfront Pricing",
    "Serving All 5 Boroughs",
  ];





export default function LandingPage() {
  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: theme.white, color: theme.navy, overflowX: "hidden" }}>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Source+Sans+3:wght@400;500;600;700&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: 'Source Sans 3', sans-serif; }
      .display { font-family: 'Playfair Display', Georgia, serif; }
      
      .btn-primary {
        background: ${theme.gold};
        color: ${theme.navy};
        border: none;
        padding: 14px 28px;
        border-radius: 4px;
        font-family: 'Source Sans 3', sans-serif;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
        letter-spacing: 0.5px;
        transition: all 0.2s;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      .btn-primary:hover { background: #d4921a; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(232,160,32,0.4); }

      .btn-secondary {
        background: transparent;
        color: white;
        border: 2px solid rgba(255,255,255,0.6);
        padding: 13px 28px;
        border-radius: 4px;
        font-family: 'Source Sans 3', sans-serif;
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        transition: all 0.2s;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      .btn-secondary:hover { border-color: white; background: rgba(255,255,255,0.1); }

      .btn-navy {
        background: ${theme.navy};
        color: white;
        border: none;
        padding: 14px 28px;
        border-radius: 4px;
        font-family: 'Source Sans 3', sans-serif;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
        transition: all 0.2s;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      .btn-navy:hover { background: ${theme.navyLight}; transform: translateY(-1px); }

      .service-card {
        padding: 28px;
        border: 1px solid ${theme.border};
        border-radius: 8px;
        transition: all 0.25s;
        background: white;
        position: relative;
        overflow: hidden;
      }
      .service-card:hover {
        border-color: ${theme.blue};
        transform: translateY(-4px);
        box-shadow: 0 16px 40px rgba(27,94,166,0.12);
      }
      .service-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: ${theme.blue};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s;
      }
      .service-card:hover::before { transform: scaleX(1); }

      .nav-link {
        color: white;
        text-decoration: none;
        font-family: 'Source Sans 3', sans-serif;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        opacity: 0.85;
        transition: opacity 0.2s;
      }
      .nav-link:hover { opacity: 1; }

      .footer-link:hover { color: white !important; }

      .testimonial-btn {
        width: 10px; height: 10px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        transition: all 0.2s;
      }

      .trust-chip {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 7px 14px;
        background: rgba(255,255,255,0.12);
        border: 1px solid rgba(255,255,255,0.25);
        border-radius: 100px;
        color: white;
        font-family: 'Source Sans 3', sans-serif;
        font-size: 13px;
        font-weight: 600;
      }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .hero-text { animation: fadeUp 0.7s ease forwards; }
      .hero-text-2 { animation: fadeUp 0.7s 0.15s ease forwards; opacity: 0; }
      .hero-text-3 { animation: fadeUp 0.7s 0.3s ease forwards; opacity: 0; }
      .hero-text-4 { animation: fadeUp 0.7s 0.45s ease forwards; opacity: 0; }

      .pipe-divider {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .pipe-divider::before, .pipe-divider::after {
        content: '';
        flex: 1;
        height: 1px;
        background: ${theme.border};
      }

      @media (max-width: 768px) {
        .hero-grid { grid-template-columns: 1fr !important; }
        .services-grid { grid-template-columns: 1fr 1fr !important; }
        .stats-grid { grid-template-columns: 1fr 1fr !important; }
        .process-grid { grid-template-columns: 1fr !important; }
        .footer-grid { grid-template-columns: 1fr !important; }
        .hide-mobile { display: none !important; }
        .why-petri-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        .why-petri-year { font-size: 120px !important; top: -18px !important; left: 0 !important; }
        .why-petri-feature { padding: 28px 24px !important; }
        .why-petri-cards {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 14px !important;
        }
        .why-petri-card {
          width: 100%;
        }
        .testimonials-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
      }
      @media (max-width: 480px) {
        .services-grid { grid-template-columns: 1fr !important; }
        .stats-grid { grid-template-columns: 1fr 1fr !important; }
      }
    `}</style>

    {/* TOP BAR */}
    <div style={{ background: theme.navy, padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {[
            { icon: "📞", text: "(718) 555-0190", href: "tel:7185550190" },
            { icon: "✉️", text: "info@petri-plumbing.com", href: "mailto:info@petri-plumbing.com" },
          ].map((item) => (
            <a key={item.text} href={item.href} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 13, fontFamily: "'Source Sans 3', sans-serif", display: "flex", alignItems: "center", gap: 6 }}>
              <span>{item.icon}</span> {item.text}
            </a>
          ))}
        </div>
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontFamily: "'Source Sans 3', sans-serif", letterSpacing: 0.5 }}>
          🕐 Mon–Sat 7am–8pm · Emergency 24/7
        </div>
      </div>
    </div>

    {/* NAVBAR */}
    <nav style={{ background: theme.navyLight, position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.15)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", height: 68 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Logo mark */}
          <div style={{ width: 40, height: 40, background: theme.gold, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
              <path d="M12 2C8 6 6 9 6 12a6 6 0 0012 0c0-3-2-6-6-10z" fill={theme.navy}/>
              <path d="M12 8v6M9 11h6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className="display" style={{ color: "white", fontSize: 20, fontWeight: 800, lineHeight: 1.1, letterSpacing: -0.3 }}>
              Petri Plumbing
            </div>
            <div style={{ color: theme.gold, fontSize: 10, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", lineHeight: 1 }}>
              Est. 1906 · Brooklyn, NY
            </div>
          </div>
        </div>

        <div className="hide-mobile" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Services", "Why Petri", "Process", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="nav-link">{item}</a>
          ))}
          <a href="tel:7185550190" className="btn-primary" style={{ padding: "10px 20px", fontSize: 14 }}>
            📞 Get Service Now
          </a>
        </div>
      </div>
    </nav>

    {/* HERO */}
    <section style={{
      background: `linear-gradient(160deg, ${theme.navy} 0%, ${theme.navyLight} 55%, ${theme.blue} 100%)`,
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background pattern */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04 }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="pipes" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M10 0v60M0 10h60M50 0v60M0 50h60" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="10" cy="10" r="3" fill="white"/>
              <circle cx="50" cy="10" r="3" fill="white"/>
              <circle cx="10" cy="50" r="3" fill="white"/>
              <circle cx="50" cy="50" r="3" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pipes)"/>
        </svg>
      </div>

      {/* Glow */}
      <div style={{ position: "absolute", right: "-10%", top: "10%", width: 600, height: 600, background: `radial-gradient(circle, ${theme.blue}40 0%, transparent 70%)`, pointerEvents: "none" }}/>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1, width: "100%" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 60, alignItems: "center" }}>
          
          {/* Left */}
          <div>
            <div className="hero-text" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.4)", borderRadius: 100, padding: "6px 14px", marginBottom: 20 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: theme.gold, display: "block", boxShadow: "0 0 8px " + theme.gold }}/>
              <span style={{ color: theme.gold, fontSize: 12, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase" }}>Brooklyn's Most Trusted Since 1906</span>
            </div>

            <h1 className="display hero-text-2" style={{ color: "white", fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 1.05, fontWeight: 900, letterSpacing: -1.5, marginBottom: 20 }}>
              Expert Plumbing,<br/>
              <span style={{ color: theme.gold }}>Heating & HVAC</span><br/>
              in New York
            </h1>

            <p className="hero-text-3" style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, lineHeight: 1.75, maxWidth: 520, marginBottom: 32, fontFamily: "'Source Sans 3', sans-serif" }}>
              Fast, reliable, guaranteed service for Brooklyn homeowners. No heat, clogged drains, or broken plumbing — we show up and solve it.
            </p>

            <div className="hero-text-4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="tel:7185550190" className="btn-primary" style={{ fontSize: 16, padding: "15px 30px" }}>
                📞 Call for Service
              </a>
              <a href="#services" className="btn-secondary" style={{ fontSize: 16, padding: "15px 30px" }}>
                View Services →
              </a>
            </div>

            <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 10 }}>
              {trustBadges.map((b) => (
                <div key={b} className="trust-chip">
                  <span style={{ color: theme.gold }}>✓</span> {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual card */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Emergency card */}
            <div style={{ background: theme.gold, borderRadius: 12, padding: "24px 28px", boxShadow: "0 20px 50px rgba(0,0,0,0.25)" }}>
              <div style={{ fontSize: 13, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, color: theme.navy, opacity: 0.7, marginBottom: 6 }}>Emergency Services</div>
              <div className="display" style={{ fontSize: 32, fontWeight: 900, color: theme.navy, lineHeight: 1.1, marginBottom: 12 }}>
                No heat tonight?<br/>We answer 24/7.
              </div>
              <a href="tel:7185550190" className="btn-navy" style={{ width: "100%", justifyContent: "center", fontSize: 16 }}>
                (718) 555-0190
              </a>
            </div>

            {/* Stats row */}
            <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
              {stats.map((s) => (
                <div key={s.value} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "18px 20px", textAlign: "center" }}>
                  <div className="display" style={{ fontSize: 36, fontWeight: 900, color: "white", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, fontFamily: "'Source Sans 3', sans-serif", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ width: "100%", height: 60, display: "block" }}>
          <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill={theme.white}/>
        </svg>
      </div>
    </section>

    {/* TRUST BAR */}
    <section style={{ background: theme.offWhite, borderBottom: `1px solid ${theme.border}`, padding: "18px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        {[
          { icon: "🏆", text: "BBB Accredited Business" },
          { icon: "⚡", text: "Same-Day Service Available" },
          { icon: "🔒", text: "Licensed, Bonded & Insured" },
          { icon: "💬", text: "Free Estimates" },
        ].map((item) => (
          <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 20 }}>{item.icon}</span>
            <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 14, color: theme.navy }}>{item.text}</span>
          </div>
        ))}
      </div>
    </section>

    {/* SERVICES */}
    <section id="services" style={{ padding: "100px 0", background: theme.white }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ color: theme.blue, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10 }}>What We Do Best</div>
          <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 800, color: theme.navy, lineHeight: 1.1, marginBottom: 14 }}>
            Services Built Around<br/>Your Urgency
          </h2>
          <p style={{ color: theme.slate, fontSize: 17, maxWidth: 560, margin: "0 auto", fontFamily: "'Source Sans 3', sans-serif", lineHeight: 1.7 }}>
            From emergency heating repairs to routine plumbing — one call covers it all for Brooklyn and New York homeowners.
          </p>
        </div>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {services.map((s) => (
            <div key={s.title} className="service-card">
              {s.badge && (
                <div style={{ position: "absolute", top: 14, right: 14, background: theme.gold, color: theme.navy, fontSize: 10, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", padding: "3px 8px", borderRadius: 100 }}>
                  {s.badge}
                </div>
              )}
              <div style={{ marginBottom: 16 }}>{s.icon}</div>
              <h3 className="display" style={{ fontSize: 20, fontWeight: 800, color: theme.navy, marginBottom: 10, lineHeight: 1.25 }}>{s.title}</h3>
              <p style={{ color: theme.slate, fontSize: 14, lineHeight: 1.7, fontFamily: "'Source Sans 3', sans-serif", margin: 0 }}>{s.desc}</p>
              <div style={{ marginTop: 18, paddingTop: 16, borderTop: `1px solid ${theme.border}` }}>
                <a href="tel:7185550190" style={{ color: theme.blue, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                  Book this service <span style={{ fontSize: 16 }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency CTA strip */}
        <div style={{ marginTop: 36, background: `linear-gradient(90deg, ${theme.navy}, ${theme.navyLight})`, borderRadius: 10, padding: "22px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 44, height: 44, background: theme.gold, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>⚠️</div>
            <div>
              <div className="display" style={{ color: "white", fontSize: 20, fontWeight: 800 }}>Plumbing emergency? Don't wait.</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontFamily: "'Source Sans 3', sans-serif" }}>Our technicians are standing by 24 hours a day, 7 days a week.</div>
            </div>
          </div>
          <a href="tel:7185550190" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px", flexShrink: 0 }}>
            📞 (718) 555-0190
          </a>
        </div>
      </div>
    </section>

    {/* WHY PETRI — Visual feature section */}
    <section id="why-petri" style={{ background: theme.offWhite, padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="why-petri-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          
          {/* Left — Visual */}
          <div style={{ position: "relative" }}>
            {/* Big background number */}
            <div className="display why-petri-year" style={{ position: "absolute", top: -30, left: -10, fontSize: 200, fontWeight: 900, color: `${theme.navy}08`, lineHeight: 1, userSelect: "none", zIndex: 0 }}>
              1906
            </div>
            
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="why-petri-feature" style={{ background: theme.navy, borderRadius: 16, padding: "36px 32px", marginBottom: 16, boxShadow: "0 20px 50px rgba(11,37,69,0.15)" }}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ width: 56, height: 56, background: theme.gold, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>🏠</div>
                  <div>
                    <div className="display" style={{ color: "white", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Brooklyn Born & Bred</div>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Source Sans 3', sans-serif", lineHeight: 1.7, fontSize: 14 }}>
                      We live in the same neighborhoods we serve. When your heat goes out, we understand — we're your neighbors, not a call center.
                    </p>
                  </div>
                </div>
              </div>

              <div className="why-petri-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {[
                  { icon: "⚡", title: "Fast Response", body: "Most calls answered within the hour" },
                  { icon: "🛡️", title: "Guaranteed Work", body: "Every job backed by our service guarantee" },
                  { icon: "💰", title: "Fair Pricing", body: "Upfront quotes — no hidden fees, ever" },
                  { icon: "🎓", title: "Expert Techs", body: "Licensed, trained, and background-checked" },
                ].map((item) => (
                  <div className="why-petri-card" key={item.title} style={{ background: "white", border: `1px solid ${theme.border}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                    <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 14, color: theme.navy, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: theme.slateLight, fontSize: 13, fontFamily: "'Source Sans 3', sans-serif", lineHeight: 1.5 }}>{item.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Copy */}
          <div>
            <div style={{ color: theme.blue, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 14 }}>Why Petri</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 800, color: theme.navy, lineHeight: 1.1, marginBottom: 20 }}>
              Over a Century of Trust in Brooklyn
            </h2>
            <p style={{ color: theme.slate, fontSize: 17, lineHeight: 1.8, fontFamily: "'Source Sans 3', sans-serif", marginBottom: 28 }}>
              Petri Plumbing has been serving Brooklyn homeowners since 1906. That's four generations of families who've called us when the heat fails at midnight, when a pipe bursts on Sunday, when the drain backs up before a dinner party.
            </p>
            <p style={{ color: theme.slate, fontSize: 17, lineHeight: 1.8, fontFamily: "'Source Sans 3', sans-serif", marginBottom: 36 }}>
              We haven't lasted this long by cutting corners. Every technician we send to your home is someone we'd trust in our own homes.
            </p>

            <div style={{ borderLeft: `4px solid ${theme.gold}`, paddingLeft: 20, marginBottom: 36 }}>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 16, lineHeight: 1.7, color: theme.navy, fontStyle: "italic" }}>
                "Fast, reliable, guaranteed service — not just a promise on our website, but the standard we've held ourselves to for over 100 years."
              </p>
            </div>

            <a href="tel:7185550190" className="btn-navy" style={{ fontSize: 15 }}>
              Schedule a Service Call →
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section id="process" style={{ background: theme.navy, padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.03 }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="pipes2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect x="0" y="38" width="80" height="4" fill="white"/>
              <rect x="38" y="0" width="4" height="80" fill="white"/>
              <circle cx="40" cy="40" r="8" fill="none" stroke="white" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pipes2)"/>
        </svg>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: theme.gold, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10 }}>How It Works</div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "white", lineHeight: 1.1 }}>
            Service in 3 Simple Steps
          </h2>
        </div>

        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, alignItems: "start" }}>
          {[
            { num: "01", title: "Call or Request Online", body: "Describe the problem and your neighborhood. We'll confirm availability and give you an honest assessment." },
            { num: "02", title: "We Schedule, You Relax", body: "We match you with the right technician for your job and give you a clear arrival window — same day when possible." },
            { num: "03", title: "Problem Solved, Guaranteed", body: "Your tech arrives prepared, explains the work, and fixes it right. We stand behind every job, no exceptions." },
          ].map((step, i) => (
            <div key={step.num} style={{ textAlign: "center" }}>
              <div className="display" style={{ fontSize: 72, fontWeight: 900, color: theme.gold, lineHeight: 1, marginBottom: 16, opacity: 0.9 }}>{step.num}</div>
              <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.15)", margin: "0 auto 20px" }} />
              <h3 className="display" style={{ color: "white", fontSize: 24, fontWeight: 800, marginBottom: 12 }}>{step.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Source Sans 3', sans-serif", lineHeight: 1.75, fontSize: 15 }}>{step.body}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a href="tel:7185550190" className="btn-primary" style={{ fontSize: 16, padding: "16px 40px" }}>
            📞 Start with a Free Estimate
          </a>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section style={{ background: theme.white, padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ color: theme.blue, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 14 }}>Customer Reviews</div>
            <h2 className="display" style={{ fontSize: "clamp(30px, 3vw, 44px)", fontWeight: 800, color: theme.navy, lineHeight: 1.1, marginBottom: 20 }}>
              What Brooklyn<br/>Homeowners Say
            </h2>
            <p style={{ color: theme.slate, fontFamily: "'Source Sans 3', sans-serif", fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
              We've earned the trust of tens of thousands of families across Brooklyn and New York over the last century. Their words mean more than ours.
            </p>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div>
                <div className="display" style={{ fontSize: 48, fontWeight: 900, color: theme.navy, lineHeight: 1 }}>4.9</div>
                <div style={{ display: "flex", gap: 2, margin: "4px 0" }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: theme.gold, fontSize: 18 }}>★</span>)}
                </div>
                <div style={{ color: theme.slateLight, fontFamily: "'Source Sans 3', sans-serif", fontSize: 13 }}>Based on 2,400+ reviews</div>
              </div>
            </div>
          </div>

          {/* Testimonial carousel */}
          <TestimonialCarousel theme={theme} testimonials={testimonials} />
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section id="contact" style={{ background: `linear-gradient(135deg, ${theme.navy} 0%, ${theme.blue} 100%)`, padding: "100px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 50%, ${theme.blueLight}30, transparent 60%)` }}/>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
        <div style={{ width: 64, height: 64, background: theme.gold, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, margin: "0 auto 24px" }}>🔧</div>
        <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: 18 }}>
          Ready to Fix It?<br/>We're One Call Away.
        </h2>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, fontFamily: "'Source Sans 3', sans-serif", lineHeight: 1.75, marginBottom: 40 }}>
          Petri Plumbing has been solving Brooklyn's heating, cooling, plumbing, and drain problems for over 100 years. Let us take care of yours.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="tel:7185550190" className="btn-primary" style={{ fontSize: 17, padding: "17px 40px" }}>
            📞 (718) 555-0190
          </a>
          <a href="mailto:info@petri-plumbing.com" className="btn-secondary" style={{ fontSize: 17, padding: "17px 40px" }}>
            Request a Quote →
          </a>
        </div>
        <div style={{ marginTop: 36, color: "rgba(255,255,255,0.5)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 13 }}>
          📍 Serving Brooklyn, Manhattan, Queens, the Bronx & Staten Island
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer style={{ background: "#06172A", padding: "48px 24px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, background: theme.gold, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>💧</div>
              <div className="display" style={{ color: "white", fontSize: 18, fontWeight: 800 }}>Petri Plumbing</div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, lineHeight: 1.7 }}>
              Brooklyn's trusted plumbing, heating, cooling and drain cleaning experts since 1906.
            </p>
          </div>
          {[
            { heading: "Services", links: ["Heating Repair", "Drain Cleaning", "HVAC & Cooling", "General Plumbing"] },
            { heading: "Company", links: ["About Us", "Service Areas", "Reviews", "Careers"] },
            { heading: "Contact", links: ["(718) 555-0190", "info@petri-plumbing.com", "Emergency 24/7", "Free Estimates"] },
          ].map((col) => (
            <div key={col.heading}>
              <div style={{ color: theme.gold, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>{col.heading}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {col.links.map((l) => (
                  <a key={l} href="#" className="footer-link" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, textDecoration: "none", transition: "color 0.15s" }}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 13 }}>
            © {new Date().getFullYear()} Petri Plumbing, Heating, Cooling & Drain Cleaning. All rights reserved.
          </div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Source Sans 3', sans-serif", fontSize: 13 }}>
            Licensed & Insured · Serving All 5 Boroughs
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}
 
