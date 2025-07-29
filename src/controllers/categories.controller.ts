import { Request, Response } from "express";
import { Categories } from "../models/categories.model";

let categories: Categories[] = [
  { id: 1, name: "T-Shirt", productCount: 499, status: true },
  { id: 2, name: "Shoes", productCount: 1299, status: true },
];

export const getCategories = (_req: Request, res: Response) => {
  res.json(categories);
};

export const addCategories = (req: Request, res: Response) => {
  const newCategories: Categories = {
    id: categories.length + 1,
    ...req.body,
  };
  categories.push(newCategories);
  res.status(201).json(newCategories);
};
