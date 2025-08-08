import express from "express";
import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller";
import { validateRequest } from "../middlewares/validateRequest";
import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/product.schema";
import { getProductById } from "../services/product.service";

const router = express.Router();

router.get("/", getProducts);
router.post("/", validateRequest(createProductSchema), addProduct);

router.get("/:id", getProductById);

router.put("/:id", validateRequest(updateProductSchema), updateProduct);

router.delete("/:id", deleteProduct);

export default router;
