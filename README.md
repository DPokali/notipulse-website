# NotiPulse Website

English landing site for the NotiPulse Android app.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Optional: set `NEXT_PUBLIC_SITE_URL` in `.env.local` to your production domain (canonical URLs and sitemap).

In `src/lib/site-config.ts`:

- `supportEmail` — support address shown on the site
- Set `playStorePublished: true` when the app is on Google Play
- Add `preLaunchUrl` for a waitlist before launch

Contact is email-only (`mailto:`). No API keys required.

## Deploy

```bash
npm run build
npm start
```

Works on Vercel, Netlify, or any Node host with Next.js App Router support.
