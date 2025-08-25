import express from "express";
import {
  addCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/categories.controller";
import { validateRequest } from "../middlewares/validateRequest";
import {
  createCategoriesSchema,
  updateCategorySchema,
} from "../schemas/categories.schema";

const router = express.Router();

router.get("/", getCategories);
router.post("/", validateRequest(createCategoriesSchema), addCategory);

router.get("/:id", getCategoryById);

router.put("/:id", validateRequest(updateCategorySchema), updateCategory);

router.delete("/:id", deleteCategory);
export default router;
