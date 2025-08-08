import { Request, Response } from "express";
import * as productService from "../services/product.service";

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const allCategories = await productService.getProducts();
    res.json(allCategories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

export const addProduct = (req: Request, res: Response) => {
  const product = productService.createProduct(req.body);
  res.status(201).json(product);
};
