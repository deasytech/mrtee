"use client"

import useCart from "@/lib/hooks/use-cart"
import { cn, naira } from "@/lib/utils"
import { UserButton, useUser } from "@clerk/nextjs"
import { CircleUserRound, Menu, Search, ShoppingCart, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { MainMenu } from "./menu"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [ dropdownMenu, setDropdownMenu ] = useState(false);
  const [ cartDropdown, setCartDropdown ] = useState(false);
  const [ query, setQuery ] = useState("");

  return (
    <div className="sticky inset-x-0 top-0 z-10 py-4 px-10 bg-black shadow-lg max-sm:px-2">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={130} height={59} />
          </Link>
          <div className="flex gap-4 text-base-bold max-lg:hidden text-white">
            <MainMenu />
          </div>
        </div>
        <div className="relative flex items-center gap-3 text-white">
          <div className="flex gap-3 bg-white border border-gray-300 px-3 py-1 items-center rounded-full">
            <input
              className="outline-none max-sm:max-w-[120px] bg-transparent text-black/75"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              disabled={query === ""}
              onClick={() => router.push(`/search/${query}`)}
            >
              <Search className="cursor-pointer h-4 w-4 text-black/75 hover:text-gold" />
            </button>
          </div>
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
                              {item.quantity} X {naira(item.item.price)}
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
                      <Link href="/cart" className="w-full">
                        <Button className="rounded-none text-[14px]">View Cart</Button>
                      </Link>
                      <Link href="/checkout" className="w-full">
                        <Button variant="outline" className="rounded-none border border-gold hover:bg-white text-[14px] text-gold hover:text-gold">Checkout</Button>
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
          <Menu className="cursor-pointer lg:hidden" onClick={() => setDropdownMenu(!dropdownMenu)} />
          {dropdownMenu && (
            <div className="absolute top-10 right-5 flex flex-col gap-2 p-3 rounded-lg border bg-black text-base-bold">
              <Link href="/" className="hover:text-gold px-2">Home</Link>
              <Link href={cn(user ? "/wishlist" : "/sign-in")} className="hover:text-gold px-2">Wishlist</Link>
              <Link href={cn(user ? "/orders" : "/sign-in")} className="hover:text-gold px-2">Orders</Link>
              <Link
                href="/cart"
                className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:text-gold"
              >
                <ShoppingCart />
                <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
              </Link>
            </div>
          )}
          {user ? <UserButton afterSignOutUrl="/sign-in" /> : <Link href="/sign-in"><CircleUserRound className="text-white" /></Link>}
        </div>
      </div>
    </div>
  )
}

export default Navbar