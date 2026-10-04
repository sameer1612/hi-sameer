/**
 * One-time import of blog posts from dev.to into src/content/blog/<slug>/.
 *
 * Each post becomes an index.md with frontmatter, and every image (cover, body
 * images, YouTube thumbnails) is downloaded into the post's assets/ folder as WebP so
 * nothing depends on dev.to's CDN. Gists are inlined as code blocks.
 *
 * Usage: bun scripts/import-devto.ts
 * (On networks that intercept TLS, prefix with NODE_USE_SYSTEM_CA=1.)
 *
 * Re-running overwrites index.md and assets/ for every imported post, so any
 * hand edits to those posts will be lost.
 */
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { blogs } from '../src/data/blogs';

const USERNAME = 'sameer1612';
const OUT_DIR = join(import.meta.dir, '../src/content/blog');

type ListArticle = { id: number; title: string; canonical_url: string; published_at: string; reading_time_minutes: number };
type Article = ListArticle & { body_markdown: string; cover_image: string | null; tags: string[] };

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchWithRetry(url: string, init?: RequestInit): Promise<Response> {
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(url, init);
    if (res.status !== 429 && res.status < 500) return res;
    await sleep(1000 * (attempt + 1));
  }
  throw new Error(`Gave up on ${url}`);
}

const json = async <T>(url: string): Promise<T> => {
  const res = await fetchWithRetry(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json() as Promise<T>;
};

const slugify = (title: string) =>
  title
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, '-');

/** dev.to wraps uploads in a resizing proxy; unwrap it to get the original file. */
function originalImageUrl(url: string): string {
  const match = url.match(/\/(https?%3A%2F%2F.+)$/);
  return match ? decodeURIComponent(match[1]) : url;
}

const EXT_BY_TYPE: Record<string, string> = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/gif': '.gif',
  'image/webp': '.webp',
  'image/svg+xml': '.svg',
  'image/avif': '.avif',
};

/** Twice the article column, so images stay sharp on high-density screens. */
const MAX_IMAGE_WIDTH = 1600;
const WEBP_QUALITY = 82;

/**
 * Downloads an image into dir/assets/ and returns the relative path.
 * Raster images are converted to WebP (and downscaled if wider than MAX_IMAGE_WIDTH) with
 * Bun.Image. GIFs and SVGs are kept as-is: Bun.Image keeps only the first frame of an
 * animated GIF, and SVG is already compact.
 */
async function downloadImage(url: string, dir: string, name: string): Promise<string> {
  const res = await fetchWithRetry(originalImageUrl(url));
  if (!res.ok) throw new Error(`HTTP ${res.status} for image ${url}`);
  const type = (res.headers.get('content-type') ?? '').split(';')[0].trim();
  const ext = EXT_BY_TYPE[type] ?? (extname(new URL(originalImageUrl(url)).pathname).toLowerCase() || '.png');
  const bytes = new Uint8Array(await res.arrayBuffer());

  if (ext === '.gif' || ext === '.svg') {
    await writeFile(join(dir, 'assets', `${name}${ext}`), bytes);
    return `./assets/${name}${ext}`;
  }

  let image = new Bun.Image(bytes);
  // resize() also enlarges, so only call it for images that are too wide.
  if ((await image.metadata()).width > MAX_IMAGE_WIDTH) image = image.resize(MAX_IMAGE_WIDTH);
  await writeFile(join(dir, 'assets', `${name}.webp`), await image.webp({ quality: WEBP_QUALITY }).bytes());
  return `./assets/${name}.webp`;
}

async function gistToMarkdown(url: string, onlyFile?: string): Promise<string> {
  const id = url.replace(/\/$/, '').split('/').pop();
  const gist = await json<{ files: Record<string, { filename: string; language: string | null; content: string }> }>(
    `https://api.github.com/gists/${id}`,
  );
  return Object.values(gist.files)
    .filter(file => !onlyFile || file.filename === onlyFile)
    .map(file => `\`\`\`${(file.language ?? '').toLowerCase()}\n${file.content.trimEnd()}\n\`\`\``)
    .join('\n\n');
}

/**
 * Posts imported into dev.to from Medium carry formatting damage in code:
 * back-to-back blocks merged into a single ``````  line, markdown escapes like \[ and \*
 * inside code, and two trailing spaces on every line (Medium's line breaks).
 */
function repairMediumCode(markdown: string): string {
  const lines = markdown.replace(/^``````\s*$/gm, '```\n\n```').split('\n');
  let inCode = false;
  return lines
    .map(line => {
      if (/^\s*```/.test(line)) {
        inCode = !inCode;
        return line;
      }
      return inCode ? line.replace(/\\([\\`*_{}[\]()#+\-.!<>|~])/g, '$1').replace(/\s+$/, '') : line;
    })
    .join('\n');
}

async function convertBody(markdown: string, dir: string, warnings: string[]): Promise<string> {
  let body = repairMediumCode(markdown.replace(/\r\n/g, '\n'));
  const downloaded = new Map<string, string>();
  let imageCount = 0;

  const localImage = async (url: string) => {
    if (!downloaded.has(url)) {
      imageCount += 1;
      downloaded.set(url, await downloadImage(url, dir, `image-${String(imageCount).padStart(2, '0')}`));
    }
    return downloaded.get(url)!;
  };

  // Liquid tags: {% gist ... %}, {% youtube ... %}, {% embed ... %}, etc.
  for (const match of [...body.matchAll(/\{%\s*(\w+)\s+([^%]*?)\s*%\}/g)]) {
    const [tag, name, rawArgs] = match;
    const [target, ...rest] = rawArgs.trim().split(/\s+/);
    // {% embed %} wraps any URL, so route gists and videos to their dedicated handling.
    const isGist = name === 'gist' || /^https?:\/\/gist\.github\.com\//.test(target);
    const isYouTube = name === 'youtube' || /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(target);
    let replacement: string;
    if (isGist) {
      const onlyFile = rest.find(arg => arg.startsWith('file='))?.slice(5);
      replacement = await gistToMarkdown(target, onlyFile);
    } else if (isYouTube) {
      const id = target.includes('/') ? new URL(target).searchParams.get('v') ?? target.split('/').pop()! : target;
      const thumb = await downloadImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`, dir, `youtube-${id}`);
      replacement = `[![Watch on YouTube](${thumb})](https://www.youtube.com/watch?v=${id})`;
    } else if (/^https?:\/\//.test(target)) {
      replacement = `<${target}>`;
    } else {
      warnings.push(`unhandled liquid tag: ${tag}`);
      continue;
    }
    body = body.replace(tag, () => replacement);
  }

  // Markdown images: ![alt](url "optional title")
  for (const match of [...body.matchAll(/!\[([^\]]*)\]\((\S+?)(\s+"[^"]*")?\)/g)]) {
    const [full, alt, url, title = ''] = match;
    if (!/^https?:\/\//.test(url)) continue;
    // dev.to's editor inserts "Image description" when no alt text was written.
    const cleanAlt = /^image description$/i.test(alt.trim()) ? '' : alt;
    const local = await localImage(url);
    body = body.replace(full, () => `![${cleanAlt}](${local}${title})`);
  }

  // Raw HTML images.
  for (const match of [...body.matchAll(/<img\b[^>]*\bsrc="(https?:\/\/[^"]+)"[^>]*>/g)]) {
    const local = await localImage(match[1]);
    body = body.replace(match[1], () => local);
  }

  const fences = (body.match(/^\s*```/gm) ?? []).length;
  if (fences % 2 !== 0) warnings.push(`odd number of code fences (${fences}); one block is probably unclosed`);

  return body.trim() + '\n';
}

const yaml = (value: unknown) => JSON.stringify(value);

const list = await json<ListArticle[]>(`https://dev.to/api/articles/latest?username=${USERNAME}&per_page=100`);
const summaries = new Map(blogs.map(post => [post.url, post.summary]));
const report: string[] = [];

for (const item of list) {
  const article = await json<Article>(`https://dev.to/api/articles/${item.id}`);
  const slug = slugify(article.title);
  const dir = join(OUT_DIR, slug);
  const warnings: string[] = [];

  await rm(dir, { recursive: true, force: true });
  await mkdir(join(dir, 'assets'), { recursive: true });

  const cover = article.cover_image ? await downloadImage(article.cover_image, dir, 'cover') : null;
  const body = await convertBody(article.body_markdown, dir, warnings);

  const frontmatter = [
    '---',
    `title: ${yaml(article.title.trim())}`,
    `date: ${article.published_at.slice(0, 10)}`,
    `summary: ${yaml(summaries.get(article.canonical_url) ?? '')}`,
    `tags: ${yaml(article.tags)}`,
    `readingTime: ${article.reading_time_minutes}`,
    cover ? `cover: ${yaml(cover)}` : null,
    `originalUrl: ${yaml(article.canonical_url)}`,
    '---',
  ].filter(line => line !== null);

  await writeFile(join(dir, 'index.md'), `${frontmatter.join('\n')}\n\n${body}`);
  report.push(`${slug}${warnings.length ? `\n  ! ${warnings.join('\n  ! ')}` : ''}`);
  console.log(`✓ ${slug}`);
}

console.log(`\nImported ${list.length} posts into src/content/blog/\n`);
console.log(report.filter(line => line.includes('!')).join('\n') || 'No warnings.');
