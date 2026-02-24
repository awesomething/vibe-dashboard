import { landingPages } from "@/lib/landingPages";

export default function HomePage() {
  return (
    <main className="container">
      <div className="badge">open source • Next.js • deploy on Vercel</div>
      <h1 className="h1">Vibe Coding Dashboard</h1>
      <p className="p">
        A gallery of developer-contributed landing pages. Each contributor adds a page under
        <span className="kbd"> src/landing-pages/&lt;github&gt;</span> and registers it in
        <span className="kbd"> src/lib/landingPages.ts</span>.
      </p>

      <div className="grid">
        {landingPages.map(({ meta }) => (
          <a key={meta.slug} className="card" href={`/p/${meta.slug}`}>
            <div className="badge">@{meta.author.github}</div>
            <h2 style={{ margin: "10px 0 6px" }}>{meta.title}</h2>
            <p className="p" style={{ margin: 0 }}>
              {meta.description ?? "View the landing page."}
            </p>
            {meta.tags?.length ? (
              <p className="p" style={{ margin: "10px 0 0", fontSize: 12 }}>
                {meta.tags.join(" • ")}
              </p>
            ) : null}
          </a>
        ))}
      </div>

      <p className="p" style={{ marginTop: 24 }}>
        Want to contribute? Open <a href="/CONTRIBUTING">CONTRIBUTING</a>.
      </p>
    </main>
  );
}
