import { Request, Response } from "express";
import * as categoryService from "../services/categories.service";
import { Category } from "../models/category.model";
export const getCategories = (_req: Request, res: Response) => {
  const allCategories = categoryService.getCategories();
  res.json(allCategories);
};

export const addCategory = (
  req: Request<{}, {}, Omit<Category, "id">>,
  res: Response
) => {
  const newCategory = categoryService.addCategory(req.body);
  res.status(201).json(newCategory);
};
