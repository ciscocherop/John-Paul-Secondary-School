# Friends of John Paul School

Next.js front end for [johnpaulschool.com](https://johnpaulschool.com), the donor site of the U.S. charity that funds John Paul Secondary School in Chelekura, Uganda.

## How it works

- **Content stays in WordPress.** Stories (posts) and any page without its own design are read from the WordPress REST API and refreshed about once an hour. Editors keep publishing in WordPress.
- **Key pages are designed here:** home, who we are, the school, scholarships, history, get involved, donate, contact.
- **Old URLs keep working.** `/2026/08/19/post-slug/` redirects to `/stories/post-slug`, and old page slugs redirect to their new pages (see `next.config.ts`).

## Where to change things

| What | Where |
|---|---|
| Links, contact details, announcement bar, photos | `src/lib/site.ts` |
| WordPress fetching and HTML clean-up | `src/lib/wp.ts` |
| Colours, type, the arch / wall / path motifs | `src/app/globals.css` |
| Pages | `src/app/*/page.tsx` |

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Environment

`WP_URL` — base URL of the WordPress install. Defaults to `https://johnpaulschool.com`. Set it when WordPress moves to a subdomain (for example `https://cms.johnpaulschool.com`) so this site can take over the main domain.
