import prisma from "../lib/prisma";
import { Prisma } from "../generated/prisma";

export const getPages = async () => {
  return await prisma.page.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const addPage = async (data: Prisma.PageCreateInput) => {
  return await prisma.page.create({ data });
};

export const getPageBySlug = async (slug: string) => {
  return await prisma.page.findUnique({
    where: { slug },
  });
};

export const updatePage = async (
  slug: string,
  data: Partial<Omit<Prisma.PageUpdateInput, "slug">>
) => {
  try {
    return await prisma.page.update({
      where: { slug },
      data,
    });
  } catch (error) {
    return null;
  }
};

export const deletePage = async (slug: string) => {
  try {
    await prisma.page.delete({
      where: { slug },
    });
    return true;
  } catch (error) {
    return false;
  }
};
