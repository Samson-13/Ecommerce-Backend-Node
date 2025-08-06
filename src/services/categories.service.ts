import { Category } from "../models/category.model";

let categories: Category[] = [
  {
    id: 1,
    name: "Hoodie",
    slug: "hoodie",
    description: "Warm and comfortable hoodies for all seasons.",
    image:
      "https://i.pinimg.com/736x/de/dd/3d/dedd3d8f3ec58659e569f95cbdcb027f.jpg",
    status: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Shoes",
    slug: "shoes",
    description: "Stylish and comfortable shoes for every occasion.",
    image:
      "https://i.pinimg.com/736x/ef/62/2c/ef622cc489f83b6eefba054434b426be.jpg",
    status: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const getCategories = (): Category[] => {
  return categories;
};

export const addCategory = (data: Omit<Category, "id">): Category => {
  const newCategory: Category = {
    id: categories.length + 1,
    ...data,
  };
  categories.push(newCategory);
  return newCategory;
};
