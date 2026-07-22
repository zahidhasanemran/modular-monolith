import { Product } from "@/modules/catalog/domain/catalog.types";

export const products: Product[] = [
  {
    id: "1",
    name: "Sample Product",
    sku: "SP-001",
    category: "Sample Category",
    description: "This is a sample product.",
    imageUrl: null,
    price: 19.99,
  },
  {
    id: "2",
    name: "Another Product",
    sku: "AP-002",
    category: "Another Category",
    description: "This is another product.",
    imageUrl: null,
    price: 29.99,
  },
  {
    id: "3",
    name: "Yet Another Product",
    sku: "YAP-003",
    category: "Yet Another Category",
    description: "This is yet another product.",
    imageUrl: null,
    price: 39.99,
  },
];
