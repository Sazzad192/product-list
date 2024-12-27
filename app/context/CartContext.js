"use client";

import { createContext, useContext } from "react";
import cartStore from "../stores/cartStore";

const CartContext = createContext(cartStore);

export const useCartStore = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={cartStore}>{children}</CartContext.Provider>
  );
};
