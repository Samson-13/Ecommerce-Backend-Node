import { Request, Response } from "express";
import * as categoryService from "../services/category.service";
import { Category } from "../models/category.model";

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const allCategories = await categoryService.getCategories();
    res.json(allCategories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

export const addCategory = async (
  req: Request<{}, {}, Omit<Category, "id">>,
  res: Response
) => {
  try {
    const newCategory = await categoryService.addCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ error: "Failed to add category" });
  }
};
