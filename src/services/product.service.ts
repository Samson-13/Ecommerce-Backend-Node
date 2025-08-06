// src/services/product.service.ts
import prisma from "../lib/prisma";
import { Prisma } from "../generated/prisma";

export const getAllProducts = async () => {
  return await prisma.product.findMany();
};

export const createProduct = async (
  product: Omit<Prisma.ProductCreateInput, "id">
) => {
  return await prisma.product.create({
    data: product,
  });
};
