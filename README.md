# VibeShow

A simple open-source Next.js app that showcases developer-contributed landing pages.

Production: https://vibeshow.vercel.app

## How to add your landing page (2 minutes)

1. Create a folder:

```bash
mkdir -p src/landing-pages/<your-github>
```

2. Add your page at `src/landing-pages/<your-github>/index.tsx`:

```tsx
export const meta = {
  slug: "<your-github>",
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

4. Run locally:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and your page at `/p/<your-github>`.

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

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import to Vercel.
3. Deploy.

### Vercel token

Do **not** commit tokens. Use `VERCEL_TOKEN` as an environment variable only.

## License

MIT (add a LICENSE file if you want).
