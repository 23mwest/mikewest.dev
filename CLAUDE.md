# Team handbook

Project conventions for humans and AI agents. Read this before starting work.

## What this is

A personal website: portfolio, resume, and a playground for personal projects and "vibe coding" experiments. Built with **Astro 5**, **TypeScript**, styled with **Tailwind CSS 4** (+ DaisyUI), interactivity in **vanilla JavaScript**.

## Prime directive: stay minimal and lightweight

This is the most important rule. Every change should keep the site fast, small, and simple. When in doubt, do less.

- **No frameworks for interactivity.** Vanilla JS only. Do not add React, Vue, Svelte, jQuery, Alpine, htmx, or any component/state library — even if it would be convenient.
- **No new dependencies without a strong reason.** Prefer the platform (native HTML/CSS/JS, Astro built-ins, Tailwind/DaisyUI utilities) over a package. If a dependency seems necessary, flag the tradeoff and ask before adding it.
- **Ship less JavaScript.** Astro renders to static HTML by default — keep it that way. Only send JS to the browser where an interaction genuinely needs it, scoped to that component.
- **No client-side hydration frameworks or heavy islands** unless explicitly requested.
- **Watch the bundle.** Prefer CSS solutions over JS ones. Prefer system fonts or a single self-hosted font over multiple web fonts. Optimize images.

## Tech stack

- **Astro 5** — static site generation, file-based routing, `.astro` components.
- **TypeScript** — extends `astro/tsconfigs/base`.
- **Tailwind CSS 4** (via `@tailwindcss/vite`) + **DaisyUI** — utility-first styling. Use utilities in markup; avoid writing custom CSS unless a utility genuinely can't do it.
- **Vanilla JavaScript** — for any interactivity, written in plain JS inside `<script>` tags or small `.js` modules.

## Commands

Package manager is **yarn** (`yarn.lock` is the source of truth — don't introduce `package-lock.json`).

- `yarn install` — install dependencies
- `yarn dev` — local dev server (http://localhost:4321)
- `yarn build` — production build to `./dist`
- `yarn preview` — preview the production build locally
- `yarn format` — Prettier

## Workflow

1. **Pick up work** — `/start-task` or describe the task; link a Notion ticket when one exists.
2. **Plan** — `/plan` for non-trivial changes; get alignment before coding.
3. **Implement** — `/tdd` when behavior is testable; keep diffs focused.
4. **Verify** — `/dod-check` before opening a PR.
5. **Preview** — `/preview` to validate in a running environment.
6. **Ship** — `/submit-pr` when DoD passes; `/notion-update` to sync ticket status.

## Test-driven development (TDD)

- Write a failing test that expresses the desired behavior.
- Implement the minimum code to pass.
- Refactor while keeping tests green.
- Prefer behavior tests over implementation details.
- Run the full test suite before commit (`yarn test`, once a test runner is added — none is configured yet).

## Definition of done (DoD)

A task is done when all of the following are true:

- [ ] Requirements from the ticket/plan are met
- [ ] Tests added or updated for changed behavior (where a test runner exists)
- [ ] `yarn build` succeeds
- [ ] No unrelated files changed
- [ ] No new dependency, framework, or large asset slipped in unintentionally
- [ ] PR description explains *why*, not just *what*
- [ ] Notion ticket updated (if applicable)

## Code style

- Match existing patterns in the touched area; read neighboring files first.
- Keep changes minimal — solve the problem, don't refactor adjacent code.
- Use Prettier: `yarn format` before commit.
- **Styling:** Reach for Tailwind/DaisyUI utilities first. Keep `tailwind.config.js` lean — only extend the theme when a value is reused. Avoid one-off custom CSS files.
- **JavaScript:** Keep scripts small and colocated with the component that needs them. Use modern browser APIs directly; no polyfills unless targeting something specific.
- **Components:** Favor `.astro` components for structure and reuse. Don't over-abstract — a bit of repetition is fine on a site this small.
- **Content:** Portfolio/project/resume content should be easy to edit. Prefer plain data (Markdown, Astro content collections, or simple data files) over hardcoding markup where it reduces friction.
- **Accessibility & semantics:** Use semantic HTML. Keep it keyboard-navigable and readable.

## When adding experiments / "vibe coding" projects

This site is a place to try fun things, so experiments are welcome — but keep them contained:

- Isolate each experiment to its own route/page (`src/pages/`) so it can't bloat the rest of the site.
- Keep experiment-specific dependencies out of the global bundle; load them only on that page.
- If an experiment needs something heavy, say so and confirm before pulling it in.

## Area scope

This is a small project, so there's a single root [`SCOPE.md`](SCOPE.md) covering the whole repo — what it is, the routes, dependencies, and what's off-limits. Read it before starting work.

## Git

- Never force-push to `main`.
- Never commit secrets (`.env`, tokens, keys).
- Hooks block pushes to `main` and run tests before commit.

## MCP

Notion and GitHub MCP servers are configured in `.mcp.json`. Use them for ticket lookup and PR operations instead of guessing URLs.
