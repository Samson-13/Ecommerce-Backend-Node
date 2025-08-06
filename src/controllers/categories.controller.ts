import { Request, Response } from "express";
import * as categoryService from "../services/category.service";
import { z } from "zod";
import { createCategoriesSchema } from "../schemas/categories.schema";

type CreateCategoryInput = z.infer<typeof createCategoriesSchema>;

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
  req: Request<{}, {}, CreateCategoryInput>,
  res: Response
) => {
  try {
    const { name, description, image, status } = req.body;

    const slug = name.trim().toLowerCase().replace(/\s+/g, "-");

    const newCategory = await categoryService.addCategory({
      name,
      description,
      image,
      status,
      slug,
    });

    res.status(201).json({ message: "Category created", data: newCategory });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ error: "Failed to add category" });
  }
};
