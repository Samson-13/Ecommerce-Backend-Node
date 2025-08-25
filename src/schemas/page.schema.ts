import { z } from "zod";

export const createPageSchema = z.object({
  body: z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    content: z.string().optional(),
    slug: z.string().min(3, "Slug must be at least 3 characters"),
  }),
});

export const updatePageSchema = z.object({
  params: z.object({
    slug: z.string(),
  }),
  body: z.object({
    name: z.string().min(3).optional(),
    content: z.string().optional(),
  }),
});

export const getPageSchema = z.object({
  params: z.object({
    slug: z.string(),
  }),
});

export const deletePageSchema = z.object({
  params: z.object({
    slug: z.string(),
  }),
});

export type CreatePageInput = z.infer<typeof createPageSchema>["body"];
export type UpdatePageInput = z.infer<typeof updatePageSchema>["body"];
