import { Request, Response } from "express";
import * as productService from "../services/product.service";

export const getProducts = (_req: Request, res: Response) => {
  res.json(productService.getAllProducts());
};

export const addProduct = (req: Request, res: Response) => {
  const product = productService.createProduct(req.body);
  res.status(201).json(product);
};
