export const meta = {
  slug: "demo",
  title: "Awesomething — Demo Landing",
  author: {
    name: "Awesome Something",
    github: "awesomething",
  },
  tags: ["clean", "minimal", "nextjs"],
  description: "A sample landing page. Replace this with your own vibe.",
} as const;

export default function AwesomethingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "48px 20px",
        background:
          "radial-gradient(900px 500px at 10% 10%, rgba(34,197,94,0.18), transparent 55%), radial-gradient(900px 500px at 90% 10%, rgba(59,130,246,0.18), transparent 55%), #070a12",
        color: "#e5e7eb",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <div style={{ opacity: 0.8 }}>VibeShow</div>
          <a
            href="/"
            style={{ color: "#93c5fd", textDecoration: "none", opacity: 0.9 }}
          >
            Back
          </a>
        </div>

        <h1 style={{ fontSize: 56, margin: "24px 0 8px", lineHeight: 1.05 }}>
          Build something that feels alive.
        </h1>
        <p style={{ maxWidth: 720, opacity: 0.8, fontSize: 18, lineHeight: 1.6 }}>
          This is a starter page. Swap it for your own landing page design. Keep it simple, keep it
          fast, and show your taste.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
          <a
            href="https://github.com/awesomething/vibe-dashboard/"
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              color: "#e5e7eb",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>
          <a
            href="/p/awesomething/demo"
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              background: "#2563eb",
              color: "white",
              textDecoration: "none",
            }}
          >
            View route
          </a>
        </div>

        <div
          style={{
            marginTop: 32,
            borderRadius: 18,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(17, 24, 39, 0.45)",
            padding: 18,
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Contributing</div>
          <ol style={{ margin: 0, paddingLeft: 18, opacity: 0.85, lineHeight: 1.7 }}>
            <li>
              Create <code>src/landing-pages/&lt;your-github&gt;/&lt;your-slug&gt;/page.tsx</code>
            </li>
            <li>
              Export <code>meta</code> and a default React component
            </li>
            <li>
              Register it in <code>src/lib/landingPages.ts</code>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
