# CLAUDE.md

Personal site and blog for Sameer Kumar, deployed to Firebase Hosting at https://hi-sameer.web.app. Astro 7, Tailwind 4, Bun.

## Commands

```bash
bun run dev       # astro dev on port 3000
bun run build     # static build into dist/
bun run preview
```

There is no test or lint script. Verify changes with `bun run build`. Don't start the dev server unless asked.

## Layout

- `src/pages/`: routes. `src/layouts/Layout.astro` wraps every page (head, theme script, header, footer).
- `src/content/blog/<slug>/index.md`: blog posts, schema in `src/content.config.ts`. `scripts/fetch-devto.ts` pulls posts from dev.to.
- `src/data/`: journey and testimonial data. `src/styles/theme.css` holds the colour variables, `global.css` the rest.

## Conventions

- Colours come from CSS variables (`alpha`, `beta`, `gamma`, `delta`, `accent`) defined per theme in `theme.css`. Use the Tailwind tokens, not raw colours.
- Theme follows the browser's `prefers-color-scheme`. The footer toggle is kept in `sessionStorage` (`theme-override`) with a 5 minute expiry, after which the browser setting wins again. A change to the browser setting clears it. Never use localStorage or cookies for it.
- Code block colours are per theme in `global.css` (shiki dual themes in `astro.config.mjs`).

## Git

- Commit after each self-contained change without waiting to be asked.
- Match the existing log: a sentence-case imperative subject ("Add a sitemap"), no type prefix, with a short body when the why isn't obvious.
- Check with the user before pushing or doing anything history-changing (rebase, amend, force-push, reset).
