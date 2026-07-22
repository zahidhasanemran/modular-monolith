import { subtotal } from "@/modules/cart"

export const totalPrice = () => {
  const tax = 0.1; // 10% tax
  const shipping = 5;
  return subtotal() * (1 + tax) + shipping;
}