export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount?: number;
  inStock: boolean;
  stock: number;
  categoryId: number;
  images: string[];
  tags?: string[];
  rating?: number;
  createdAt: string;
  updatedAt: string;
}
