"use client"

import { UserButton, useUser } from "@clerk/nextjs"
import { CircleUserRound } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MainMenu } from "./menu"
import MobileNavbar from "./mobile-navbar"
import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import("@/components/frontend/layout/search-bar"), { ssr: false });
const CartDropdown = dynamic(() => import("@/components/frontend/layout/cart-dropdown"), { ssr: false });

const Navbar = () => {
  const { user } = useUser();

  return (
    <div className="sticky inset-x-0 top-0 z-10 py-4 px-10 bg-black shadow-lg max-sm:px-2">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileNavbar />
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={130} height={59} />
          </Link>
          <div className="flex gap-4 text-base-bold max-lg:hidden text-white">
            <MainMenu />
          </div>
        </div>
        <div className="relative flex items-center gap-3 text-white">
          <div className="max-lg:hidden">
            <SearchBar />
          </div>
          <CartDropdown />
          {/* <Menu className="cursor-pointer lg:hidden" onClick={() => setDropdownMenu(!dropdownMenu)} /> */}
          {/* {dropdownMenu && (
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
          )} */}
          {user ? (
            <UserButton afterSignOutUrl="/sign-in" />
          ) : (
            <Link href="/sign-in"><CircleUserRound className="text-white" /></Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar