import { Product } from "../models/product.model";

let products: Product[] = [
  {
    id: 1,
    name: "T-Shirt",
    description: "Cotton regular fit t-shirt",
    price: 499,
    discount: 10,
    inStock: true,
    stock: 100,
    categoryId: 1,
    images: [
      "https://i.pinimg.com/736x/9a/f2/e4/9af2e4c518e239b29edced9b5bb36992.jpg",
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Shoes",
    description: "Running shoes with air cushion",
    price: 1299,
    inStock: true,
    stock: 50,
    categoryId: 2,
    images: [
      "https://i.pinimg.com/736x/55/91/d6/5591d6e7e9d8d8ffe4866182b5801218.jpg",
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const getAllProducts = () => products;

export const createProduct = (product: Omit<Product, "id">): Product => {
  const newProduct: Product = {
    id: products.length + 1,
    ...product,
  };
  products.push(newProduct);
  return newProduct;
};
