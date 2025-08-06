import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validateRequest =
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error.format() });
    }
    next();
  };
