import { Router } from "express";
import * as pageController from "../controllers/page.controller";
import { validateRequest } from "../middlewares/validateRequest";
import {
  createPageSchema,
  updatePageSchema,
  getPageSchema,
  deletePageSchema,
} from "../schemas/page.schema";

const router = Router();

router.get("/", pageController.getPages);
router.get(
  "/:slug",
  validateRequest(getPageSchema),
  pageController.getPageBySlug
);
router.post("/", validateRequest(createPageSchema), pageController.createPage);
router.put(
  "/:slug",
  validateRequest(updatePageSchema),
  pageController.updatePage
);
router.delete(
  "/:slug",
  validateRequest(deletePageSchema),
  pageController.deletePage
);

export default router;
