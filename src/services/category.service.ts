import prisma from "../lib/prisma";
import { Prisma } from "../generated/prisma";

export const getCategories = async () => {
  return await prisma.category.findMany();
};

export const addCategory = async (data: Prisma.CategoryCreateInput) => {
  return await prisma.category.create({ data });
};
