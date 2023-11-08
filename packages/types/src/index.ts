export interface Credentials {
  name: string;
  email: string;
  password: string;
}

export interface Product {
  description?: string;
  id: string;
  inStock?: boolean;
  price?: number;
  titleLong?: string;
  title?: string;
}

type ProductLite = Pick<Product, "id" | "inStock" | "price" | "title">;

export interface CartProduct extends ProductLite {
  quantity: number;
}

export type Workspace = {
  name: string;
  version: string;
};
