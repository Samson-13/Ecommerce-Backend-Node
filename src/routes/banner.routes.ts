import express from "express";
import multer from "multer";
import { addBanner, getBanner } from "../controllers/banner.controller";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", upload.single("image"), getBanner);
router.post("/", upload.single("image"), addBanner);

export default router;
