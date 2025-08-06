import express from "express";
import {
  addCategory,
  getCategories,
} from "./../controllers/categories.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { createCategoriesSchema } from "../schemas/categories.schema";

const router = express.Router();

router.get("/", getCategories);
router.post("/", validateRequest(createCategoriesSchema), addCategory);

export default router;
