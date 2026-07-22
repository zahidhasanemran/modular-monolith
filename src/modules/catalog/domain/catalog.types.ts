export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  description: string;
  imageUrl?: string | null;
  price: number;
}
