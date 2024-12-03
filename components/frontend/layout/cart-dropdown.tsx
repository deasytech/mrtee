"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCart from "@/lib/hooks/use-cart";
import { naira } from "@/lib/utils";

const CartDropdown = () => {
  const cart = useCart();
  const [ cartDropdown, setCartDropdown ] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setCartDropdown((prev) => !prev)}
        className="flex items-center gap-2 px-2 py-1"
      >
        <ShoppingCart />
        <p className="flex items-center justify-center text-[12px] rounded-full bg-gold w-5 h-5">
          {cart.cartItems.length}
        </p>
      </button>

      {cartDropdown && (
        <div className="absolute right-0 mt-2 w-64 bg-white border shadow-lg text-black">
          {cart.cartItems.length > 0 ? (
            <ul className="p-3">
              {cart.cartItems.map((item) => (
                <li
                  key={item.item._id}
                  className="flex items-center justify-between p-2 border-b border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.item.media[ 0 ]}
                      alt={item.item.title}
                      width={50}
                      height={50}
                      className="border border-gray-200"
                    />
                    <div>
                      <p className="font-bold text-[14px]">{item.item.title}</p>
                      <p className="text-[12px] text-gray-400">
                        {item.quantity} × {naira(item.item.price)}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => cart.removeItem(item.item._id)}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </li>
              ))}
              <li className="flex gap-2 w-full mt-3">
                <Link
                  href="/cart"
                  className="w-full"
                  onClick={() => setCartDropdown(false)}
                >
                  <Button className="rounded-none text-[14px]">View Cart</Button>
                </Link>
                <Link
                  href="/checkout"
                  className="w-full"
                  onClick={() => setCartDropdown(false)}
                >
                  <Button
                    variant="outline"
                    className="rounded-none border border-gold hover:bg-white text-[14px] text-gold hover:text-gold"
                  >
                    Checkout
                  </Button>
                </Link>
              </li>
            </ul>
          ) : (
            <div className="p-3 text-center">
              <p className="text-gray-400">Your cart is empty.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
