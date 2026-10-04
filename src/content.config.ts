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
      tags: z.array(z.string()).default([]),
      readingTime: z.number(),
      cover: image().optional(),
      /** Where the post was first published; used as its canonical URL. */
      originalUrl: z.url(),
    }),
});

export const collections = { blog };
