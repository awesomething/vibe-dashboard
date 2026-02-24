# Vibe Coding Dashboard

A simple open-source Next.js app that showcases developer-contributed landing pages.

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
