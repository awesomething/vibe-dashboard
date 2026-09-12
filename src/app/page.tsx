
import { ArrowRight, ArrowUpRight, ArrowUpRightIcon } from "lucide-react";
import { landingPages } from "src/lib/landingPages";

export default function HomePage() {

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="/">
          <span className="brand-mark">V</span>
          <span>VibeShow</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#showcase" >Showcase</a>
          <a href="/CONTRIBUTING" className="nav-action">Contribute <ArrowUpRightIcon size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> ClassVisa-powered platform for showcasing tech talents </div>
          <h1 id="hero-title">Your websites<br /><em>deserve to be seen.</em></h1>
          <p className="hero-text">
            A living showcase of sharp landing pages made by developers. Browse the work,
            find your next collaborator, and get inspired to ship something with a point of view.
          </p>
          <a className="button button-dark" href="#showcase">Explore the showcase <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-note" aria-label="Showcase summary">
          <span className="note-number">{String(landingPages.length).padStart(2, "0")}</span>
          <span className="note-label">pages<br />in the showcase</span>
          <span className="note-rule" />
          <span className="note-label">Updated<br />as people ship</span>
        </div>
      </section>

      <section className="showcase-section" id="showcase" aria-labelledby="showcase-title">
        <div className="section-heading">
          <div>
            <div className="eyebrow">The collection</div>
            <h2 id="showcase-title">Fresh from the studio</h2>
          </div>
          <p>Real pages. Real people.<br />One place to find your next favorite.</p>
        </div>

        <div className="showcase-grid">

          
          {landingPages.map(({ meta }, index) => {
           
            const pageUrl = `/p/${meta.author.github}/${meta.slug}`;

            return (
              <a className={`showcase-card showcase-card-${index % 3}`} key={pageUrl} href={pageUrl}>
                <div className="preview-window">
                  <div className="preview-toolbar">
                    <span className="window-dots"><i /><i /><i /></span>
                    <span className="preview-url">vibeshow.vercel.app{pageUrl}</span>
                    <span className="preview-open" aria-hidden="true">↗</span>
                  </div>
                  <iframe
                    title={`${meta.title} preview`}
                    src={pageUrl}
                    loading="lazy"
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                  <div className="preview-shield" aria-hidden="true" />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="author-avatar">{meta.author.name.charAt(0)}</span>
                    <span>{meta.author.name}</span>
                    <span className="card-index">0{index + 1}</span>
                  </div>
                  <h3>{meta.title}</h3>
                  <p>{meta.description ?? "View the landing page."}</p>
                  <div className="tag-row">
                    {meta.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                    <span className="view-link">View project <ArrowRight size={10} className="ml-2" /></span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="contribute-banner">
        <div>
          <div className="eyebrow">Your work belongs here</div>
          <h2>Make something worth<br /><em>scrolling into.</em></h2>
        </div>
        <a className="button button-light nav-action py-6!" href="/CONTRIBUTING">Add your page <ArrowUpRight size={16} /></a>
      </section>

      <footer className="site-footer">
        <span>VibeShow / A home for developer-made web.</span>
        <span>Open source <span aria-hidden="true">·</span> Built with Next.js</span>
      </footer>
    </main>
  );
}
