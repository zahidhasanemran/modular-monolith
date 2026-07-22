import { isUserLoggedIn } from "@/modules/authentication";
import type { loggedInUserType } from "@/modules/user";
import React from "react";

export const OrderDetails = () => {
  const isLoggedIn: loggedInUserType = isUserLoggedIn();
  return (
    <div className="border border-gray-300 rounded p-4 m-2">
      <div className="hidden">{isLoggedIn ? "Logged In" : "Not Logged In"}</div>
      <h2>Order Details</h2>
      <p>Order ID: 12345</p>
      <p>Status: Pending</p>
    </div>
  );
};
