export const meta = {
  slug: "nonstop-plumbers-water-heater-installation",
  title: "NONSTOP PLUMBERS CORP — Water Heater Installation (Brooklyn, NY)",
  author: {
    name: "Awesome Something",
    github: "awesomething",
  },
  tags: ["local-business", "services", "plumbing", "conversion"],
  description:
    "A fast, trust-first landing page for a Brooklyn water-heater installer: clear services, emergency availability, and a frictionless call-to-action.",
} as const;

const theme = {
  bg: "#070a12",
  panel: "rgba(17, 24, 39, 0.45)",
  border: "rgba(255,255,255,0.12)",
  text: "#e5e7eb",
  muted: "rgba(229,231,235,0.78)",
  accent: "#2563eb",
  good: "#22c55e",
  warn: "#f59e0b",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 10px",
        borderRadius: 999,
        border: `1px solid ${theme.border}`,
        background: "rgba(255,255,255,0.06)",
        color: theme.text,
        fontSize: 13,
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        borderRadius: 18,
        border: `1px solid ${theme.border}`,
        background: theme.panel,
        padding: 18,
      }}
    >
      <div style={{ fontWeight: 650, marginBottom: 10, letterSpacing: 0.2 }}>{title}</div>
      <div style={{ color: theme.muted, lineHeight: 1.7 }}>{children}</div>
    </section>
  );
}

export default function NonstopPlumbersWaterHeaterInstallation() {
  // NOTE: Phone + hours are placeholders for demo purposes.
  const phoneDisplay = "(718) 555-0123";
  const phoneHref = "tel:+17185550123";

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px 20px",
        background:
          "radial-gradient(900px 500px at 10% 10%, rgba(245,158,11,0.16), transparent 55%), radial-gradient(900px 500px at 90% 10%, rgba(37,99,235,0.20), transparent 55%), #070a12",
        color: theme.text,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ opacity: 0.75, fontSize: 13 }}>VibeShow • Landing Page</div>
            <div style={{ fontWeight: 700, letterSpacing: 0.2 }}>NONSTOP PLUMBERS CORP</div>
          </div>

          <a
            href="/"
            style={{
              color: "#93c5fd",
              textDecoration: "none",
              opacity: 0.9,
              padding: "8px 10px",
              borderRadius: 10,
              border: `1px solid ${theme.border}`,
              background: "rgba(255,255,255,0.04)",
            }}
          >
            Back to gallery
          </a>
        </header>

        <div style={{ marginTop: 26, display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 18 }}>
          <section>
            <h1 style={{ fontSize: 48, lineHeight: 1.05, margin: "0 0 10px" }}>
              Water heater installation in Brooklyn — done right, done fast.
            </h1>
            <p style={{ margin: 0, maxWidth: 740, color: theme.muted, fontSize: 18, lineHeight: 1.7 }}>
              Upfront pricing. Clean workmanship. Same-day options when available. If your hot water went out,
              we’ll help you get back to normal — without the runaround.
            </p>

            <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
              <Pill>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: theme.good }} />
                Licensed & insured (placeholder)
              </Pill>
              <Pill>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: theme.warn }} />
                24/7 emergency availability (placeholder)
              </Pill>
              <Pill>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: theme.accent }} />
                Serving Brooklyn, NY
              </Pill>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
              <a
                href={phoneHref}
                style={{
                  padding: "12px 16px",
                  borderRadius: 14,
                  background: theme.accent,
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 650,
                }}
              >
                Call now: {phoneDisplay}
              </a>
              <a
                href="#estimate"
                style={{
                  padding: "12px 16px",
                  borderRadius: 14,
                  border: `1px solid ${theme.border}`,
                  background: "rgba(255,255,255,0.06)",
                  color: theme.text,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Get a quick estimate
              </a>
              <a
                href="#services"
                style={{
                  padding: "12px 16px",
                  borderRadius: 14,
                  border: `1px solid ${theme.border}`,
                  background: "transparent",
                  color: "#93c5fd",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                See services
              </a>
            </div>

            <div
              style={{
                marginTop: 22,
                borderRadius: 18,
                border: `1px dashed ${theme.border}`,
                padding: 14,
                color: "rgba(229,231,235,0.72)",
                fontSize: 13,
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: theme.text }}>Demo note:</strong> phone, hours, and review quotes below are
              placeholders. Swap with real details before using this for a real business.
            </div>
          </section>

          <aside
            style={{
              borderRadius: 18,
              border: `1px solid ${theme.border}`,
              background: "rgba(255,255,255,0.04)",
              padding: 18,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Emergency? No hot water?</div>
            <div style={{ color: theme.muted, lineHeight: 1.7, fontSize: 14 }}>
              If you have leaks, gas smell, or water near electrical panels, shut off power/water if safe and
              call a professional immediately.
            </div>

            <div style={{ height: 14 }} />

            <div style={{ display: "grid", gap: 10 }}>
              <div
                style={{
                  borderRadius: 14,
                  border: `1px solid ${theme.border}`,
                  background: theme.panel,
                  padding: 14,
                }}
              >
                <div style={{ fontWeight: 650 }}>Typical installs</div>
                <div style={{ color: theme.muted, fontSize: 14, lineHeight: 1.6 }}>
                  Gas • Electric • Tankless (availability varies)
                </div>
              </div>

              <div
                style={{
                  borderRadius: 14,
                  border: `1px solid ${theme.border}`,
                  background: theme.panel,
                  padding: 14,
                }}
              >
                <div style={{ fontWeight: 650 }}>What you get</div>
                <ul style={{ margin: "8px 0 0", paddingLeft: 18, color: theme.muted, lineHeight: 1.7 }}>
                  <li>Clean install + haul-away (if applicable)</li>
                  <li>Permit guidance (when required)</li>
                  <li>Warranty-friendly documentation</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        <div
          style={{
            marginTop: 22,
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 14,
          }}
        >
          <Card title="1) Tell us what’s happening">
            A quick description + photos (if you have them) helps us quote accurately.
          </Card>
          <Card title="2) Pick a time">
            Same-day and next-day options depending on parts and schedule.
          </Card>
          <Card title="3) Get hot water back">
            We install, test, and clean up — then you’re back in business.
          </Card>
        </div>

        <div style={{ height: 18 }} />

        <div
          id="services"
          style={{
            marginTop: 8,
            borderRadius: 18,
            border: `1px solid ${theme.border}`,
            background: theme.panel,
            padding: 18,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
            <h2 style={{ margin: 0, fontSize: 22 }}>Services</h2>
            <div style={{ color: theme.muted, fontSize: 13 }}>Brooklyn • Same-day when available</div>
          </div>

          <div
            style={{
              marginTop: 12,
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 12,
            }}
          >
            <div style={{ padding: 14, borderRadius: 16, border: `1px solid ${theme.border}` }}>
              <div style={{ fontWeight: 650 }}>Water heater installation</div>
              <div style={{ color: theme.muted, lineHeight: 1.7, fontSize: 14, marginTop: 6 }}>
                Right-size the unit, protect the warranty, and install to code.
              </div>
            </div>
            <div style={{ padding: 14, borderRadius: 16, border: `1px solid ${theme.border}` }}>
              <div style={{ fontWeight: 650 }}>Replacement + haul-away</div>
              <div style={{ color: theme.muted, lineHeight: 1.7, fontSize: 14, marginTop: 6 }}>
                Remove the old tank safely and keep your space clean.
              </div>
            </div>
            <div style={{ padding: 14, borderRadius: 16, border: `1px solid ${theme.border}` }}>
              <div style={{ fontWeight: 650 }}>Tankless upgrades (quote)</div>
              <div style={{ color: theme.muted, lineHeight: 1.7, fontSize: 14, marginTop: 6 }}>
                Evaluate gas line, venting, and flow needs before recommending.
              </div>
            </div>
            <div style={{ padding: 14, borderRadius: 16, border: `1px solid ${theme.border}` }}>
              <div style={{ fontWeight: 650 }}>Emergency service (24/7)</div>
              <div style={{ color: theme.muted, lineHeight: 1.7, fontSize: 14, marginTop: 6 }}>
                No hot water, leaks, or failed units — rapid triage and fix.
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
          }}
        >
          <Card title="Why customers choose us">
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>
                <strong style={{ color: theme.text }}>Straight answers.</strong> We’ll tell you what’s required vs.
                optional.
              </li>
              <li>
                <strong style={{ color: theme.text }}>Transparent pricing.</strong> No mystery add-ons after we arrive.
              </li>
              <li>
                <strong style={{ color: theme.text }}>Respect your home.</strong> Shoe covers, drop cloths, clean exit.
              </li>
            </ul>
          </Card>

          <Card title="Reviews (placeholders)">
            <div style={{ display: "grid", gap: 10 }}>
              <div style={{ padding: 12, borderRadius: 14, border: `1px solid ${theme.border}` }}>
                “They explained every option and had hot water running the same day.”
                <div style={{ marginTop: 6, fontSize: 13, opacity: 0.8 }}>— Brooklyn homeowner</div>
              </div>
              <div style={{ padding: 12, borderRadius: 14, border: `1px solid ${theme.border}` }}>
                “Clean install, no surprises, and the price matched the quote.”
                <div style={{ marginTop: 6, fontSize: 13, opacity: 0.8 }}>— Local customer</div>
              </div>
            </div>
          </Card>
        </div>

        <div style={{ height: 18 }} />

        <section
          id="estimate"
          style={{
            borderRadius: 18,
            border: `1px solid ${theme.border}`,
            background: "rgba(255,255,255,0.04)",
            padding: 18,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 22 }}>Get a quick estimate</h2>
          <p style={{ margin: "10px 0 0", color: theme.muted, lineHeight: 1.7 }}>
            Send the details below and we’ll reply with a ballpark and next available times.
          </p>

          <div
            style={{
              marginTop: 12,
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 12,
            }}
          >
            <div style={{ padding: 14, borderRadius: 16, border: `1px solid ${theme.border}` }}>
              <div style={{ fontWeight: 650 }}>1) Address / neighborhood</div>
              <div style={{ color: theme.muted, fontSize: 14, marginTop: 6 }}>So we can confirm service area.</div>
            </div>
            <div style={{ padding: 14, borderRadius: 16, border: `1px solid ${theme.border}` }}>
              <div style={{ fontWeight: 650 }}>2) Heater type</div>
              <div style={{ color: theme.muted, fontSize: 14, marginTop: 6 }}>Gas / electric / tankless (if known).</div>
            </div>
            <div style={{ padding: 14, borderRadius: 16, border: `1px solid ${theme.border}` }}>
              <div style={{ fontWeight: 650 }}>3) Timeline</div>
              <div style={{ color: theme.muted, fontSize: 14, marginTop: 6 }}>Emergency today vs planned upgrade.</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
            <a
              href={phoneHref}
              style={{
                padding: "12px 16px",
                borderRadius: 14,
                background: theme.accent,
                color: "white",
                textDecoration: "none",
                fontWeight: 650,
              }}
            >
              Call for a quote
            </a>
            <a
              href="mailto:info@example.com?subject=Water%20Heater%20Installation%20Quote%20(Brooklyn)"
              style={{
                padding: "12px 16px",
                borderRadius: 14,
                border: `1px solid ${theme.border}`,
                background: "rgba(255,255,255,0.06)",
                color: theme.text,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Email details (placeholder)
            </a>
          </div>
        </section>

        <footer style={{ marginTop: 26, color: "rgba(229,231,235,0.6)", fontSize: 12, lineHeight: 1.6 }}>
          <div>
            Built for VibeShow. Route: <code>/p/awesomething/{meta.slug}</code>
          </div>
        </footer>
      </div>
    </main>
  );
}
