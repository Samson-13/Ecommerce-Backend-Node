import express from "express";
import {
  addCategories,
  getCategories,
} from "./../controllers/categories.controller";

const router = express.Router();

router.get("/", getCategories);
router.post("/", addCategories);

export default router;
