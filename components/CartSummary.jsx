"use client";

import { observer } from "mobx-react";
import { useCartStore } from "@/app/context/CartContext";

function CartSummary() {
  const cartStore = useCartStore();

  const incrementQuantity = (itemId) => {
    cartStore.incrementQuantity(itemId);
  };

  const decrementQuantity = (itemId) => {
    cartStore.decrementQuantity(itemId);
  };

  const calculateTotalPrice = () => {
    return cartStore.cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="">
      <h2 className="text-lg font-bold text-primary-300 mb-4">Cart Summary</h2>
      <p className="text-sm text-dark-500 mb-4">
        Items in Cart: {cartStore.cartCount}
      </p>
      <ul className="space-y-4">
        {cartStore.cart.map((item) => (
          <li
            key={item.id}
            className="grid grid-cols-4 gap-2 items-center border-b pb-4 border-primary-200"
          >
            {/* Product Image */}
            <div className="flex items-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-16 h-16 rounded-lg object-cover border border-primary-200"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <p className="text-sm font-medium text-primary-500 truncate">
                {item.title}
              </p>
              <p className="text-xs text-dark-500">
                Price: ৳{item.price.toFixed(2)}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => decrementQuantity(item.id)}
                className="px-2 py-1 text-lg text-primary-500 bg-primary-100 rounded-md hover:bg-primary-300"
              >
                -
              </button>
              <span className="text-sm font-medium text-dark-500">
                {item.quantity}
              </span>
              <button
                onClick={() => incrementQuantity(item.id)}
                className="px-2 py-1 text-lg text-primary-500 bg-primary-100 rounded-md hover:bg-primary-300"
              >
                +
              </button>
            </div>

            {/* Total Price */}
            <div className="flex justify-end">
              <p className="text-sm font-medium text-green-500">
                ৳{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Total Price Section */}
      <div className="flex items-center justify-between border-primary-200">
        <p className="text-lg font-bold text-dark-500">Total:</p>
        <p className="text-lg font-bold text-orange-500">
          ৳{calculateTotalPrice()}
        </p>
      </div>
    </div>
  );
}

export default observer(CartSummary);
