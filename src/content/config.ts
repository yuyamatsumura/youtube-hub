import { defineCollection, z } from "astro:content";

const shorts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    youtubeId: z.string().optional(), // ★ optional に変更
    publishedAt: z.date(),
  }),
});

export const collections = {
  shorts,
};
