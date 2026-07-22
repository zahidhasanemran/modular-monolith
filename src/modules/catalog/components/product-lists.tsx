import type { Product } from "@/modules/catalog/domain/catalog.types";
import { ProductCard } from "@/modules/catalog";

export const ProductLists = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
