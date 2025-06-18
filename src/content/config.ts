import { defineCollection, z } from 'astro:content';

const cards = defineCollection({
    schema: z.object({
        badgeTitle: z.string(),
        cardsTitle: z.string(),
        cardsContent: z.string(),
    }),
})

export const collections = {
    cards,
};