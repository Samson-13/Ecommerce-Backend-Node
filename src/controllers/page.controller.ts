import { Request, Response } from "express";
import * as pageService from "../services/page.service";

export const getPages = async (_req: Request, res: Response) => {
  const pages = await pageService.getPages();
  res.json(pages);
};

export const getPageBySlug = async (req: Request, res: Response) => {
  const { slug } = req.params;
  const page = await pageService.getPageBySlug(slug);
  if (!page) {
    return res.status(404).json({ message: "Page not found" });
  }
  res.json(page);
};

export const createPage = async (req: Request, res: Response) => {
  const page = await pageService.addPage(req.body);
  res.status(201).json(page);
};

export const updatePage = async (req: Request, res: Response) => {
  const { slug } = req.params;
  const updatedPage = await pageService.updatePage(slug, req.body);
  if (!updatedPage) {
    return res.status(404).json({ message: "Page not found" });
  }
  res.json(updatedPage);
};

export const deletePage = async (req: Request, res: Response) => {
  const { slug } = req.params;
  const success = await pageService.deletePage(slug);
  if (!success) {
    return res.status(404).json({ message: "Page not found" });
  }
  res.json({ message: "Page deleted successfully" });
};
