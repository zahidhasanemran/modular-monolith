import { isUserLoggedIn } from "@/modules/authentication";
import type { loggedInUserType } from "@/modules/user";

export const ProductCart = () => {
  const isLoggedIn: loggedInUserType = isUserLoggedIn();
  return (
    <div className="border border-gray-300 rounded p-4 m-2">
      <div className="hidden">{isLoggedIn ? "Logged In" : "Not Logged In"}</div>
      <h2>Shopping Cart</h2>
      <p>Your cart is empty.</p>
    </div>
  );
};
