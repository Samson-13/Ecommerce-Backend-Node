import { Request, Response } from "express";
import { Banner } from "../models/banner.model";

interface MulterRequest extends Request {
  file: Express.Multer.File;
}

let banners: Banner[] = [];
let currentId = 1;

export const getBanner = (req: Request, res: Response) => {
  res.json(banners);
};

export const addBanner = (req: Request, res: Response) => {
  const { location, status } = req.body;
  const image = req.file;

  if (!location || !image) {
    return res.status(400).json({ error: "Location and image are required" });
  }

  const newBanner: Banner = {
    id: currentId++,
    location,
    status: status === "true",
    imageUrl: `/uploads/${image.filename}`,
  };

  banners.push(newBanner);
  res.status(201).json(newBanner);
};
