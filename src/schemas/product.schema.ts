import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string(),
  price: z.number().min(0),
  inStock: z.boolean(),
});
