import express from "express";
import { getProducts, addProduct } from "../controllers/product.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { createProductSchema } from "../schemas/product.schema";

const router = express.Router();

router.get("/", getProducts);
router.post("/", validateRequest(createProductSchema), addProduct);

export default router;
