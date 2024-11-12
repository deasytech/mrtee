"use client"

import useCart from "@/lib/hooks/use-cart"
import { naira } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const CartSummary = () => {
  const cart = useCart();
  const router = useRouter();
  const { user } = useUser();

  const total = cart.cartItems.reduce((acc, item) => acc + item.item.price * item.quantity, 0);

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[ 0 ].emailAddress,
    name: user?.fullName,
  };

  const handleCheckout = async () => {
    if (!user) {
      router.push("sign-in");
    } else {
      router.push("/checkout");
    }
  };

  return (
    <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-gray-100 border border-dashed border-gray-300 px-4 py-5">
      <p className="text-heading4-bold pb-4">
        Summary <span>{`(${cart.cartItems.length} ${cart.cartItems.length > 1 ? "Items" : "Item"})`}</span>
      </p>
      <div className="flex flex-col gap-4 justify-between h-full">
        <div className="flex justify-between text-body-semibold">
          <span>Total: </span>
          <span>{naira(total)}</span>
        </div>
        <Button onClick={handleCheckout} variant="outline" className="hover:bg-gold rounded-none hover:text-white w-full text-gold border border-gold bg-transparent">Proceed to Checkout</Button>
      </div>
    </div>
  )
}

export default CartSummary