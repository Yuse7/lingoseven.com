import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Lingo7 Team'),
    ogImage: z.string().optional(),
    category: z.enum([
      'book-lists',
      'getting-started',
      'difficulty-guides',
      'tips',
      'methodology',
    ]),
    tags: z.array(z.string()).default([]),
    targetLang: z.string().optional(),
    locale: z.string().default('en'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
