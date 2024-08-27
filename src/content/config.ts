import { defineCollection, z } from 'astro:content'

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      }).optional(),
  }),
})

const blog = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    supervisor: z
      .array(
        z.object({
          name: z.string(), // The supervisor's name
          url: z.string().url(), // The supervisor's URL, validated as a proper URL
        }),
      )
      .optional(), // Now allowing supervisor to be an array of objects
    timeDuartion: z.string().optional(),
    duration: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      }).optional(),
    date: z
      .string()
      .or(z.date())
      .transform((val: string | number | Date) => new Date(val).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })).optional(),
    draft: z.boolean().default(false).optional(),
    lang: z.string().default('en-US').optional(),
    tag: z.string().optional().optional(),
    redirect: z.string().optional(),
    video: z.boolean().default(false).optional(),
  }),
})

export const collections = { pages, blog }
