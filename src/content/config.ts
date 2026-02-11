
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date().optional(),
        tags: z.array(z.string()).default([]),
        link: z.string().url().optional(),
        github: z.string().url().optional(), // Repo link
        articleLink: z.string().url().optional(), // Link to related article
        heroImage: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

const articles = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

export const collections = { projects, articles };
