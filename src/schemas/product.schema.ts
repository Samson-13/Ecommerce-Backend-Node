import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().optional(),
  price: z.number().min(0, "Price must be non-negative"),
  discount: z.number().min(0).max(100).optional(),
  inStock: z.boolean(),
  stock: z.number().min(0, "Stock must be at least 0"),
  categoryId: z.number().int().positive("Category ID must be positive"),
  images: z.array(z.string().url({ message: "Invalid image URL" })),
  tags: z.array(z.string()).optional(),
  rating: z.number().min(0).max(5).optional(),
});
