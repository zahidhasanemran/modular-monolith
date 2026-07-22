import { isUserLoggedIn } from "@/modules/authentication";
import type { Product } from "@/modules/catalog/domain/catalog.types";
import type { loggedInUserType } from "@/modules/user";

export const ProductCard = ({ product }: { product: Product }) => {
  const isLoggedIn: loggedInUserType = isUserLoggedIn();
  return (
    <div className="border border-gray-300 rounded p-4 m-2">
      <div className="hidden">{isLoggedIn ? "Logged In" : "Not Logged In"}</div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};
