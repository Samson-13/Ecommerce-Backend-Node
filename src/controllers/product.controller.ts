import { Request, Response } from "express";
import { Product } from "../models/product.model";

let products: Product[] = [
  { id: 1, name: "T-Shirt", price: 499, inStock: true },
  { id: 2, name: "Shoes", price: 1299, inStock: true },
];

export const getProducts = (_req: Request, res: Response) => {
  res.json(products);
};

export const addProduct = (req: Request, res: Response) => {
  const newProduct: Product = {
    id: products.length + 1,
    ...req.body,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};
