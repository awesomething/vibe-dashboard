import { ArrowLeft, ArrowUpRight, Check, GitBranch, Terminal } from "lucide-react";

const metaExample = `export const meta = {
  slug: "<your-slug>",
  title: "Your page title",
  author: { name: "Your Name", github: "<your-github>" },
  tags: ["tag1", "tag2"],
  description: "One line about your landing page",
} as const;

export default function LandingPage() {
  return <main style={{ padding: 40 }}>Hello world</main>;
}`;

const gitCommands = `git checkout -b add-landing-<your-github>
git add src/landing-pages/<your-github>/<your-slug> src/lib/landingPages.ts
git commit -m "Add landing page: <your-github>"
git push -u origin add-landing-<your-github>`;

export default function ContributingPage() {
  return (
    <main className="site-shell contribution-shell mb-4">
      <header className="site-header">
        <a className="brand" href="/"><span className="brand-mark">V</span><span>VibeShow</span></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="/">Showcase</a>
          <a className="nav-action" href="/CONTRIBUTING" aria-current="page">Contribute <ArrowUpRight size={15} aria-hidden="true" /></a>
        </nav>
      </header>

      <section className="contribution-hero" aria-labelledby="contribution-title">
        <div>
          <div className="eyebrow mt-4"><span className="eyebrow-dot" /> Open source / contribution guide</div>
          <h1 id="contribution-title">Put your work<br /><em>in the showcase.</em></h1>
          <p>Add a landing page in about two minutes. Build something with a point of view, register it, and open a pull request for the community to discover.</p>
        </div>
        
      </section>

      <section className="guide-section" aria-labelledby="steps-title">
        <div className="section-heading guide-heading">
          <div><div className="eyebrow">The workflow</div><h2 id="steps-title">Five steps to ship.</h2></div>
          <p>Everything you need to add<br />your page to VibeShow.</p>
        </div>
        <div className="steps-list">
          <article className="guide-step"><div className="step-number underline">01</div><div className="step-content"><h3>Create a folder</h3><p>Use your GitHub username and a unique slug. This folder becomes the page&apos;s permanent home.</p><CodeBlock icon={<Terminal size={14} aria-hidden="true" />} label="Terminal" code={`mkdir -p src/landing-pages/<your-github>/<your-slug>`} /></div></article>
          <article className="guide-step"><div className="step-number">02</div><div className="step-content"><h3>Add your landing page</h3><p>Create <code>page.tsx</code> in the new folder. Export the metadata VibeShow uses to describe your work, plus your default React component.</p><CodeBlock icon={<span className="code-label">TSX</span>} label="page.tsx" code={metaExample} /></div></article>
          <article className="guide-step"><div className="step-number">03</div><div className="step-content"><h3>Register your page</h3><p>Add an import and include the page in the <code>landingPages</code> array inside <code>src/lib/landingPages.ts</code>. Without this step, the gallery cannot find it.</p></div></article>
          <article className="guide-step"><div className="step-number">04</div><div className="step-content"><h3>Open a pull request</h3><p>Work on a branch and ask for review. Please do not push contributions directly to <code>main</code>.</p><CodeBlock icon={<GitBranch size={14} aria-hidden="true" />} label="Git" code={gitCommands} /><p className="step-note"><Check size={14} aria-hidden="true" /> Then open a Pull Request on GitHub and wait for review and merge.</p></div></article>
          <article className="guide-step"><div className="step-number">05</div><div className="step-content"><h3>Run it locally</h3><p>Install dependencies, start the development server, and open your new route in the browser.</p><CodeBlock icon={<Terminal size={14} aria-hidden="true" />} label="Terminal" code={`npm install\nnpm run dev`} /><p>Your page will be available at <code>http://localhost:3000/p/&lt;your-github&gt;/&lt;your-slug&gt;</code>. You can add another page anytime with a new slug.</p></div></article>
        </div>
      </section>

      <section className="guide-details">
        <div className="detail-panel"><div className="eyebrow">Under the hood</div><h2>How it works</h2><ul className="detail-list"><li>Each contributor adds a page under <code>src/landing-pages/&lt;github&gt;/&lt;slug&gt;/page.tsx</code>.</li><li>Each page exports <code>meta</code> (title, author, tags, and description) and a default React component.</li><li>Pages become visible after they are registered in <code>src/lib/landingPages.ts</code>.</li></ul></div>
        <div className="detail-panel routes-panel"><div className="eyebrow">Keep exploring</div><h2>Routes</h2><div className="route-list"><a href="/"><code>/</code><span>Gallery <ArrowUpRight size={14} /></span></a><a href="/CONTRIBUTING"><code>/CONTRIBUTING</code><span>Contribution guide <ArrowUpRight size={14} /></span></a><div><code>/p/&lt;github&gt;/&lt;slug&gt;</code><span>Individual landing page</span></div></div></div>
      </section>

      <section className="contribution-footer" aria-labelledby="local-title"><div><div className="eyebrow">Ready when you are</div><h2 id="local-title">Ship locally.<br /><em>Share openly.</em></h2></div><div className="footer-notes"><p><strong>Local dev</strong><br /><code>npm install</code> then <code>npm run dev</code></p><p><strong>Vercel token</strong><br />Never commit tokens. Use <code>VERCEL_TOKEN</code> as an environment variable only.</p></div></section>
      <footer className="site-footer"><span>VibeShow / A home for developer-made web.</span><span>Open source <span aria-hidden="true">·</span> Built with Next.js</span></footer>
    </main>
  );
}

function CodeBlock({ icon, label, code }: { icon: React.ReactNode; label: string; code: string }) {
  return <div className="code-block"><div className="code-toolbar">{icon}<span>{label}</span></div><pre><code>{code}</code></pre></div>;
}
