/**
 * Fetches every dev.to post as raw Markdown into raw/blog/<slug>.md.
 *
 * The body is saved exactly as dev.to returns it; nothing is rewritten. The cleaned,
 * published versions live in src/content/blog/<slug>/ and are edited by hand from these.
 *
 * Usage: bun scripts/fetch-devto.ts
 * (On networks that intercept TLS, prefix with NODE_USE_SYSTEM_CA=1.)
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const USERNAME = 'sameer1612';
const OUT_DIR = join(import.meta.dir, '../raw/blog');

type ListArticle = { id: number };
type Article = {
  id: number;
  title: string;
  url: string;
  canonical_url: string;
  published_at: string;
  reading_time_minutes: number;
  cover_image: string | null;
  tags: string[];
  body_markdown: string;
};

async function getJson<T>(url: string): Promise<T> {
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(url);
    if (res.ok) return res.json() as Promise<T>;
    if (res.status !== 429 && res.status < 500) throw new Error(`HTTP ${res.status} for ${url}`);
    await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
  }
  throw new Error(`Gave up on ${url}`);
}

const slugify = (title: string) =>
  title
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, '-');

await mkdir(OUT_DIR, { recursive: true });
const list = await getJson<ListArticle[]>(`https://dev.to/api/articles/latest?username=${USERNAME}&per_page=100`);

for (const { id } of list) {
  const a = await getJson<Article>(`https://dev.to/api/articles/${id}`);
  const meta = {
    id: a.id,
    title: a.title,
    published_at: a.published_at,
    tags: a.tags,
    reading_time_minutes: a.reading_time_minutes,
    cover_image: a.cover_image,
    canonical_url: a.canonical_url,
    devto_url: a.url,
  };
  const frontmatter = Object.entries(meta).map(([key, value]) => `${key}: ${JSON.stringify(value)}`);
  await writeFile(join(OUT_DIR, `${slugify(a.title)}.md`), `---\n${frontmatter.join('\n')}\n---\n\n${a.body_markdown}`);
  console.log(`✓ ${slugify(a.title)}`);
}

console.log(`\nSaved ${list.length} raw posts to raw/blog/`);
