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
    // GEO: a 40-60 word direct answer to the post's core question, definitional
    // first sentence. Rendered as a "Quick answer" callout at the top of the post.
    summary: z.string().optional(),
    // GEO: FAQ phrased as real AI prompts. Rendered as a visible accordion and
    // emitted as FAQPage JSON-LD. Answers may contain inline HTML (<strong>, <a>).
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .optional(),
  }),
});

export const collections = { blog };
