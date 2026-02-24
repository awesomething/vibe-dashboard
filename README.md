# VibeShow

A simple open-source Next.js app that showcases developer-contributed landing pages.

Production: https://vibeshow.vercel.app

## How to add your landing page (2 minutes)

1. Create a folder:

```bash
mkdir -p src/landing-pages/<your-github>/<your-slug>
```

2. Add your page at `src/landing-pages/<your-github>/<your-slug>/page.tsx`:

```tsx
export const meta = {
  slug: "<your-slug>",
  title: "Your page title",
  author: { name: "Your Name", github: "<your-github>" },
  tags: ["tag1", "tag2"],
  description: "One line about your landing page",
} as const;

export default function LandingPage() {
  return <main style={{ padding: 40 }}>Hello world</main>;
}
```

3. Register it in `src/lib/landingPages.ts` (add an import + add to the `landingPages` array).

4. Create a branch, commit, and open a PR (don’t push to `main`):

```bash
git checkout -b add-landing-<your-github>
git add src/landing-pages/<your-github>/<your-slug> src/lib/landingPages.ts
git commit -m "Add landing page: <your-github>"
git push -u origin add-landing-<your-github>
```

Then open a Pull Request on GitHub and wait for review/merge.

5. Run locally:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and your page at `/p/<your-github>/<your-slug>`. (You can add a new landing page anytime by choosing a new slug.)

## How it works

- Each contributor adds a page under `src/landing-pages/<github>/index.tsx`.
- They export:
  - `meta` (title/author/tags/description)
  - a default React component (the landing page)
- Then they register it in `src/lib/landingPages.ts`.

Routes:
- `/` — gallery
- `/p/<slug>` — individual landing page
- `/CONTRIBUTING` — contribution guide

## Local dev

```bash
npm install
npm run dev
```

### Vercel token

Do **not** commit tokens. Use `VERCEL_TOKEN` as an environment variable only.


