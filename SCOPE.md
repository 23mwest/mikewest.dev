# Scope: mikewest.dev (repo root)

## Purpose
Personal website: portfolio, resume, links, and a playground for "vibe coding" experiments (a snake game, a theme switcher). Static site built with Astro 5 and Tailwind 4 + DaisyUI, rendered to static HTML with vanilla JS only for interactivity. The prime directive is to stay minimal and lightweight — see [CLAUDE.md](CLAUDE.md) before making changes.

## Public interface
This ships a static site to `./dist`; there is no code-level public API today. The "contract" is the set of routes under `src/pages/` (file-based routing):
- `/` (`index.astro`) — About / resume landing page
- `/apps` (`apps.astro`) — projects / experiments index
- `/links` (`links.astro`) — links page
- `/snake` (`snake.astro`) — snake game experiment
- `/theme-switcher` (`theme-switcher.astro`) — theme demo
- `src/layouts/Header.astro` — shared nav, consumed by pages; imports `src/styles/global.css`
- `public/` — served as-is at the site root (`main.js` theme logic, `styles.css`, resume PDFs, `robots.txt`)

## Depends on
- **Astro 5** (`@tailwindcss/vite` wired in `astro.config.mjs`)
- **Tailwind CSS 4** + **DaisyUI** — themes declared in `src/styles/global.css` (`light --default`, `night --prefersdark`); `tailwind.config.js` sets `darkMode: 'class'` and scans only `src/pages/*.astro` and `src/layouts/*.astro`.
- **TypeScript** — extends `astro/tsconfigs/base`.
- Fragile bits: theming is split between `global.css` (DaisyUI theme config) and `public/main.js` (client-side `localStorage` theme mode + `prefers-color-scheme`). The Tailwind `content` globs are shallow (`*.astro`, not `**`) — new nested component dirs won't be scanned unless the globs are updated.

## Testing
No test runner is configured yet. Verification today is `yarn build` plus a manual `yarn preview`. If/when tests are added, co-locate them with the code and wire a `yarn test` script.

## Off-limits
- Generated / not checked in: `dist/`, `node_modules/`, `.astro/` (all gitignored).
- Local overrides: `.claude/settings.local.json` (gitignored).
- Human-review before changing: `public/Resume-MichaelJWest.pdf`, `public/Resume_MichaelJWest_EM.pdf` (personal documents), `yarn.lock` (don't hand-edit; don't introduce `package-lock.json`).

## Conventions specific to this area
- Package manager is **yarn**.
- Vanilla JS only — no React/Vue/Svelte/Alpine/htmx or state libraries.
- Ask before adding any dependency or heavy asset.
- This single root `SCOPE.md` covers the whole repo — there are no nested scope files. Otherwise follow repo [CLAUDE.md](CLAUDE.md).
