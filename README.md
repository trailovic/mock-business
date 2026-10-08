# Klar Regnskap · Mock Business

A reusable Norwegian accounting-company demo built with SvelteKit 2, Svelte 5, TypeScript, and Tailwind CSS 4. Fictional brand, no fabricated customers, credentials, or testimonials.

## Run locally

Install Node.js 22.12 or newer (Node 22 LTS recommended) and Git. Then:

```bash
git clone https://github.com/trailovic/mock-business.git
cd mock-business
git switch --track origin/feature/accounting-foundation
npm ci
npm run dev -- --open
```

If already cloned, run `git status` first and commit or stash your work before changing branches:

```bash
git fetch origin
git switch --track origin/feature/accounting-foundation
npm ci
npm run dev -- --open
```

If the branch already exists locally, use `git switch feature/accounting-foundation`, then `git pull --ff-only`.

Vite prints the local URL, normally http://localhost:5173. Keep that terminal running; Ctrl+C stops it. Edit in your editor (for example `code .` in a second terminal) and the browser updates automatically.

## Pages

- `/`: home, services, introduction, process, call to action
- `/tjenester/`: service overview
- `/tjenester/regnskap/`, `/tjenester/lonn/`, `/tjenester/radgivning/`: data-driven detail pages
- `/om-oss/`: story and values
- `/kontakt/`: client-side demo form with native validation and accessible feedback

## Where to edit

| File | Purpose |
| --- | --- |
| `src/lib/config/site.ts` | Brand, description, navigation, demo flag |
| `src/lib/data/services.ts` | Service names, copy, slugs, detail-page content |
| `src/app.css` | Tailwind theme tokens and shared button/layout styles |
| `src/lib/components/` | Header, footer, SEO, service cards, CTA |
| `src/routes/+page.svelte` | Homepage content and layout |
| `src/routes/om-oss/+page.svelte` | Company story and values |
| `src/routes/kontakt/+page.svelte` | Demo contact form |

Page copy is Norwegian Bokmål. Page-specific text is intentionally in its page component; service content is centralized. The small header descriptor and favicon should also be updated when changing industries. No stock images or external font services are required.

## Validation and preview

```bash
npm run check
npm run build
npm run preview -- --open
```

`npm run check` regenerates SvelteKit's generated types before checking. Keep `tsconfig.json` extending `./.svelte-kit/tsconfig.json`; do not replace it with `$app/tsconfig`. Tailwind is connected through the Vite plugin and `@import "tailwindcss"` in `src/app.css`.

The static adapter generates HTML for every route in `build/`. No backend, database, API key, or environment variable is needed. Your eventual static host must serve directory index files and a suitable 404 page. Hosting/deployment is not configured in this foundation.

## Demo boundary and customer launch

The form does not send requests, emails, or store data. Test only with fictional information. Its success text explicitly says nothing was sent. Before a customer launch:

- Replace fictional copy and add verified company information.
- Connect a real form endpoint, add server-side validation, anti-spam, and real success/error states.
- Add a privacy notice appropriate to the actual data processing.
- Configure the production domain, canonical URLs, sitemap, and social image.
- Remove the demo notices, set `site.demo` to false, and replace the demo `robots.txt` that blocks crawling.
- Verify keyboard use, responsive layouts, and real form delivery on the deployed host.

No tracking or analytics is included. This is a visual and structural foundation, not a live accounting business.

## Working on the branch

```bash
git status
git add src README.md
git commit -m "feat: refine accounting website"
git push
```

Review the pull request before merging. After it is merged, switch to main and pull before starting the next feature branch. Avoid deleting your local feature branch until you have confirmed all work is preserved on main (squash merges may need manual verification).
