import { z } from "zod";

export const createCategoriesSchema = z.object({
  name: z.string(),
  productionCount: z.number().min(0),
  status: z.boolean(),
});
