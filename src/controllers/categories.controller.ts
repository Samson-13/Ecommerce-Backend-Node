import { Request, Response } from "express";
import * as categoryService from "../services/category.service";
import { z } from "zod";
import { createCategoriesSchema } from "../schemas/categories.schema";

type CreateCategoryInput = z.infer<typeof createCategoriesSchema>;

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

export const getCategoryById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    flexibleIdSchema.parse(req.params.id);
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid category ID format" });
    }
    console.error(error);
    res.status(500).json({ error: "Failed to fetch category" });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    flexibleIdSchema.parse(req.params.id);
    const updatedCategory = await categoryService.updateCategory(
      req.params.id,
      req.body
    );

    if (!updatedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(updatedCategory);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid Category ID format" });
    }
    console.error("Error updating Category:", error);
    res.status(500).json({ error: "Failed to update Category" });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    flexibleIdSchema.parse(req.params.id);
    const deleted = await categoryService.deleteCategory(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(204).send();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid Category ID format" });
    }
    console.error("Error deleting Category:", error);
    res.status(500).json({ error: "Failed to delete Category" });
  }
};
