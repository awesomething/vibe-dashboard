export default function ContributingPage() {
  return (
    <main style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
      <h1>Contributing</h1>
      <p>
        Add a new landing page by creating a folder under <code>src/landing-pages</code> and
        registering it. You can add multiple pages over time by using different slugs.
      </p>
      <h2>Steps</h2>
      <ol>
        <li>
          Create <code>src/landing-pages/&lt;github-username&gt;/&lt;slug&gt;/page.tsx</code>
        </li>
        <li>
          Export <code>meta</code>:
          <pre>{`export const meta = {
  slug: "my-landing-v2",
  title: "Your page title",
  author: { name: "Your Name", github: "your-github" },
  tags: ["tag1", "tag2"],
  description: "One-liner about this landing page",
} as const;`}</pre>
        </li>
        <li>
          Default export a React component (your landing page).
        </li>
        <li>
          Register it in <code>src/lib/landingPages.ts</code>.
        </li>
      </ol>
      <h2>Rules</h2>
      <ul>
        <li>No secrets, tokens, or API keys in pages.</li>
        <li>Keep it fast. Avoid huge images and heavy libraries.</li>
        <li>Be respectful. No hateful or illegal content.</li>
      </ul>
    </main>
  );
}
