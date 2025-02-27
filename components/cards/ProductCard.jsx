import Image from "next/image";
import DiscountBadge from "./DiscountBadge";
import { observer } from "mobx-react";
import { useCartStore } from "@/app/context/CartContext";
import Button from "../buttons/Button";
import { LuEye } from "react-icons/lu";
import { BsCartPlus } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

function ProductCard({ item }) {
  const cartStore = useCartStore();

  const discountAmount = item.price * (item.discountPercentage / 100);
  const priceAfterDiscount = item.price * (1 - item.discountPercentage / 100);

  const isInCart = cartStore.isInCart(item.id);
  const cartItem = cartStore.cart.find((cartItem) => cartItem.id === item.id);

  return (
    <div
      className={`relative group flex flex-col gap-2 max-w-[209px] p-1 rounded-lg ${
        isInCart ? "border rounded-lg shadow-md" : ""
      } hover:border lg:hover:rounded-lg hover:shadow-md cursor-pointer`}
    >
      <div className="relative">
        <Image
          width={250}
          height={250}
          src={item.thumbnail || "/placeholder.jpg"}
          alt={item.title}
          className="w-28 md:w-52 h-[175px] md:h-[210px] object-fill transform transition-transform duration-300 rounded-lg"
          priority
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-0 ${
            isInCart ? "bg-opacity-50" : ""
          } group-hover:bg-opacity-50 transition-all duration-300 rounded-lg`}
        ></div>

        <IoHeartOutline className="absolute top-4 right-[10px] text-white w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div
          className={`absolute bottom-3 opacity-0 ${
            isInCart ? "opacity-100" : ""
          } group-hover:opacity-100 px-3 w-full space-y-2`}
        >
          {isInCart ? (
            <div className="flex justify-between items-center bg-green-500 text-white py-2 px-1 md:px-3 rounded-lg">
              <button
                className="font-bold text-xl"
                onClick={() => cartStore.decrementQuantity(item.id)}
              >
                {cartItem?.quantity > 1 ? (
                  "-"
                ) : (
                  <RiDeleteBin6Line className="w-4 h-4" />
                )}
              </button>
              <p className="text-[11px] md:text-sm">
                {cartItem?.quantity} Added in Cart
              </p>
              <button
                className="font-bold text-xl"
                onClick={() => cartStore.incrementQuantity(item.id)}
              >
                +
              </button>
            </div>
          ) : (
            <Button
              variant="whiteOpacity"
              className={`w-full gap-1 ${
                isInCart
                  ? "bg-green-500 text-white bg-opacity-100 border-none"
                  : "bg-white text-white"
              }`}
              onClick={() => {
                if (!isInCart) {
                  cartStore.addToCart(item);
                }
              }}
            >
              <BsCartPlus className="text-white w-5 h-5" /> Add to Cart
            </Button>
          )}

          <Button variant="whiteOpacity" className="w-full gap-1">
            <LuEye className="text-white w-5 h-5" /> Quick View
          </Button>
        </div>
      </div>

      <div className="absolute top-3 -left-2">
        <DiscountBadge amount={discountAmount.toFixed(2)} />
      </div>

      <div className="p-2">
        <div className="space-y-1">
          <p className="text-sm text-dark-700">{item.title}</p>
          <p className="font-medium truncate text-dark-900">
            {item.description}
          </p>
        </div>
        <div className="flex justify-start items-center gap-4">
          <p className="font-medium text-base md:text-xl text-primary-500">
            ৳ {priceAfterDiscount.toFixed(2)}{" "}
          </p>
          <p className="text-sm text-dark-500 line-through font-normal">
            ৳ {item.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default observer(ProductCard);
