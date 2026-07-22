import type { Product } from "@/modules/catalog/domain/catalog.types";
import type { loggedInUserType } from "@/modules/user";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border border-gray-300 rounded p-4 m-2">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};
