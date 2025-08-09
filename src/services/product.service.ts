// src/services/product.service.ts
import prisma from "../lib/prisma";
import { Prisma } from "../generated/prisma";

export const getProducts = async () => {
  return await prisma.product.findMany();
};

export const createProduct = async (
  product: Omit<Prisma.ProductCreateInput, "id">
) => {
  return await prisma.product.create({
    data: product,
  });
};

export const getProductById = async (id: string) => {
  return await prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });
};

export const updateProduct = async (
  id: string,
  data: Partial<Omit<Prisma.ProductUpdateInput, "id">>
) => {
  try {
    return await prisma.product.update({
      where: { id },
      data,
    });
  } catch (error) {
    return null;
  }
};

export const deleteProduct = async (id: string) => {
  try {
    await prisma.product.delete({
      where: { id },
    });
    return true;
  } catch (error) {
    return false;
  }
};
