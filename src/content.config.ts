import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  // One folder per post: src/content/blog/<slug>/index.md, with images in assets/.
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string(),
      /** Search and link-preview description, about 120–155 characters. Falls back to the summary. */
      description: z.string().optional(),
      tags: z.array(z.string()).default([]),
      readingTime: z.number(),
      cover: image().optional(),
      /** Where an older post was first published (Medium, dev.to, …). This site is now the canonical copy. */
      originalUrl: z.url().optional(),
    }),
});

export const collections = { blog };
