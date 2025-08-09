import prisma from "../lib/prisma";
import { Prisma } from "../generated/prisma";

export const getCategories = async () => {
  return await prisma.category.findMany();
};

export const addCategory = async (data: Prisma.CategoryCreateInput) => {
  return await prisma.category.create({ data });
};

export const getCategoryById = async (id: string) => {
  return await prisma.category.findUnique({
    where: { id },
  });
};

export const updateCategory = async (
  id: string,
  data: Partial<Omit<Prisma.CategoryUpdateInput, "id">>
) => {
  try {
    return await prisma.category.update({
      where: { id },
      data,
    });
  } catch (error) {
    return null;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    await prisma.category.delete({
      where: { id },
    });
    return true;
  } catch (error) {
    return false;
  }
};
