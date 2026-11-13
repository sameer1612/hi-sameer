# hi-sameer

My personal site and blog, live at **https://hi-sameer.web.app**.

Home, About, Contact, and a blog with posts going back to 2021, some of them originally published on Medium and dev.to and now living here as the canonical copy.

## Stack

- [Astro](https://astro.build) 7, fully static
- [Tailwind CSS](https://tailwindcss.com) 4
- [Bun](https://bun.sh) 1.4.4 as the package manager and runtime
- Firebase Hosting

## Running it

```bash
bun install
bun run dev       # http://localhost:3000
bun run build     # static build into dist/
bun run preview   # serve the build
bun run format    # bun fmt
```

There are no tests. If `bun run build` passes, the site is fine.

## Where things live

| Path                              | What                                                   |
| --------------------------------- | ------------------------------------------------------ |
| `src/pages/`                      | Routes, including `blog/[slug].astro` and the sitemap  |
| `src/layouts/Layout.astro`        | Wraps every page: head, theme script, header, footer   |
| `src/content/blog/<slug>/index.md` | One folder per post, images in `assets/`               |
| `src/content.config.ts`           | Blog frontmatter schema                                |
| `src/data/`                       | Career journey and testimonials for the About page     |
| `src/styles/theme.css`            | Colour variables for the light and dark themes         |
| `src/styles/global.css`           | Everything else, including code block colours          |
| `public/`                         | Favicon, images, résumé, `robots.txt`                  |

## Writing a post

Create `src/content/blog/<slug>/index.md`:

```md
---
title: "Post title"
date: 2026-11-13
summary: "Shown on the blog list and at the top of the post."
description: "Search and link-preview text, about 120–155 characters."
tags: ["go", "databases"]
readingTime: 8
cover: "./assets/cover.webp" # optional
originalUrl: "https://..."   # optional, for posts first published elsewhere
---
```

Only `title`, `date`, `summary` and `readingTime` are required. Posts are hand-written, so `bun fmt` leaves them alone.

## Theme

Light and dark follow your browser's `prefers-color-scheme`. The toggle in the footer overrides it for 5 minutes (kept in `sessionStorage`), then the browser setting wins again.

## Deploying

GitHub Actions builds and deploys to Firebase Hosting:

- every push to `main` goes live
- every pull request gets a preview channel

## License

MIT
