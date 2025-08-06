import { z } from "zod";

export const createCategoriesSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  image: z.string().url().optional(),
  slug: z.string().min(1),
  status: z.boolean(),
});
