import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().optional(),
  price: z.number().min(0, "Price must be non-negative"),
  discount: z.number().min(0).max(100).optional(),
  inStock: z.boolean(),
  stock: z.number().min(0, "Stock must be at least 0"),
  categoryId: z.string().min(1, "Category ID is required"),
  images: z.array(z.string().min(1)).optional(),
  tags: z.array(z.string()).optional(),
  rating: z.number().min(0).max(5).optional(),
});

export const updateProductSchema = createProductSchema.partial();

export const productIdSchema = z.object({
  id: z.string().min(1, "Product ID is required"),
});
