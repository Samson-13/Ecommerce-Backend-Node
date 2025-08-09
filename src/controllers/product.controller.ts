import { Request, Response } from "express";
import * as productService from "../services/product.service";
import { z } from "zod";

const flexibleIdSchema = z
  .string()
  .min(1)
  .refine(
    (id) => {
      const uuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      const objectIdRegex = /^[0-9a-f]{24}$/i;
      const alphanumericRegex = /^[a-zA-Z0-9]{20,}$/;

      return (
        uuidRegex.test(id) ||
        objectIdRegex.test(id) ||
        alphanumericRegex.test(id)
      );
    },
    {
      message:
        "Invalid ID format. Must be a valid UUID, ObjectId, or alphanumeric string",
    }
  );

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Failed to create product" });
  }
};

export const getProductById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    flexibleIdSchema.parse(req.params.id);
    const product = await productService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid product ID format" });
    }
    console.error(error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    flexibleIdSchema.parse(req.params.id);
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid product ID format" });
    }
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Failed to update product" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    flexibleIdSchema.parse(req.params.id);
    const deleted = await productService.deleteProduct(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(204).send();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid product ID format" });
    }
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
};
