# Cleaning raw posts into site content

Source: `raw/blog/<slug>.md` — the post exactly as dev.to returned it. Never edit these.
Target: `src/content/blog/<slug>/index.md` — the cleaned post the site renders.

**Clean each post by hand.** Read the raw file top to bottom, then write the cleaned file yourself
(Write/Edit). Do not write or run scripts, sed/awk/regex passes, or any other automated transform
over the Markdown. Fetching a gist's code with `curl` to paste it in is fine.

Change formatting only. Keep the author's wording, spelling and tone exactly as written — no
rewording, no typo fixes, no added or removed sentences (except the footer rule below).

## Frontmatter

Keep the frontmatter already in the target file (title, date, summary, tags, readingTime, cover,
originalUrl) unchanged. Only the body below it is replaced.

## Body rules

**Headings.** The page renders the title as the only `<h1>`. The body starts at `##`.
- Underlined headings (`Title` + `=====`) become `## Title`; (`Title` + `-----`) become `### Title`.
- If a post uses `#` for sections, shift every heading down one level.
- Remove bold/italic wrapped around a whole heading (`## **UMD**` → `## UMD`).
- A heading that is already `## X` with a stray `====` line under it: keep `## X`, drop the line.
- A `-----`/`*****` line between blocks with blank lines around it is a section break: keep it as `---`.
- Don't repeat the post title as the first heading.

**Code blocks.**
- Every fenced block gets a language: `js`, `jsx`, `ts`, `tsx`, `ruby`, `python`, `html`, `css`,
  `scss`, `json`, `yaml`, `sql`, `bash` (commands), `console` (prompt + output), `erb`, `text`.
  Pick from the code itself and the post's topic.
- Medium import damage, fix by hand:
  - ` `````` ` on one line = the end of one block and start of the next: split into two blocks.
  - Backslash escapes inside code (`\[`, `\]`, `\*`, `\_`, `` \` ``): remove the backslash.
  - Two trailing spaces at the end of code lines: remove them.
  - Leading/trailing blank lines inside a block: remove.
- Keep a filename comment (`// lib/ninja.js`) as the first line of the block, as the author wrote it.
- Never leave a fence unclosed.

**Images.** All images are already downloaded into `src/content/blog/<slug>/assets/`:
- `cover.webp` is the cover (frontmatter only — don't also put it in the body).
- `image-01`, `image-02`, … are the body images, numbered in the order their URLs first appear in
  the raw post (Markdown images first, then any raw HTML `<img>` tags). The same URL used twice
  shares one file. Extensions are `.webp`,
  except animated GIFs which stay `.gif`. Check with `ls`.
- `youtube-<id>.webp` are video thumbnails.
- If you're unsure an image matches, open it (Read the file) and compare with the surrounding text.

Write images as `![Alt text](./assets/image-01.webp)`.
- Replace dev.to's placeholder alt `Image description` (or empty alt) with a short, real description
  of what the image shows (open the image if needed). Memes: describe the meme in a few words.
- A caption (`<figcaption>…</figcaption>`, or a short line right under the image that labels it)
  becomes an italic line directly under the image, with no blank line between:

  ```md
  ![Terminal showing the build output](./assets/image-05.webp)
  _yarn build_
  ```
  A caption that is only a URL becomes a link: `_[vitejs.dev](https://vitejs.dev)_`.

**Embeds (`{% … %}` liquid tags).**
- `{% gist URL %}` (also `{% embed <gist URL> %}`): fetch each file's raw code and paste it as a fenced
  block with the right language. `curl -s https://gist.github.com/<owner>/<id>.json` lists the files;
  `curl -s https://gist.githubusercontent.com/<owner>/<id>/raw/<filename>` returns one file.
- `{% youtube ID %}` / `{% embed <youtube URL> %}`: a linked thumbnail on its own line:
  `[![Video: <short description>](./assets/youtube-ID.webp)](https://www.youtube.com/watch?v=ID)`
- Anything else (LinkedIn, Twitter, links): a plain link on its own line, with readable link text,
  e.g. `[Sameer on coding standards (LinkedIn)](https://www.linkedin.com/posts/...)`.

**Other Markdown fixes.**
- Lists need a blank line before them; renumbered/broken lists should be valid Markdown lists.
- Escaped characters in prose that dev.to shows literally (`\>>>`, `\[`) → unescape where it was
  clearly import damage.
- A blockquote that swallowed the next sentence (e.g. a quote ending in "Folder structure:"):
  split the quote from the sentence.
- Turn bare URLs written as `[https://x.com](https://x.com/)` into readable text where obvious.
- Remove empty HTML like `<br>` runs; keep meaningful inline HTML only if Markdown can't express it.

**Footer.** Remove trailing "Want to connect?" / "To connect" / social-link blocks (LinkedIn,
Website, Twitter links to the author) at the end of a post — the site has its own About and Contact
pages. Keep a "full code at this link" style line; that's content.

## When you're done with a post

- No remote image URLs remain (`grep -n 'https://dev-to-uploads\|media2.dev.to' index.md` is empty).
- Every image path you wrote exists in `assets/`.
- Code fences are balanced and every block has a language.
- Don't run `bun run build` (other agents share the folder); the coordinator builds at the end.
- Don't commit.
