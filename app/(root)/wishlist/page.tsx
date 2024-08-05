"use client"

import Loader from "@/components/custom-ui/loader"
import ProductCard from "@/components/frontend/cards/product-card"
import { getProductDetails } from "@/lib/actions"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

const WishList = () => {
  const { user } = useUser();

  const [ loading, setLoading ] = useState(false)
  const [ signedInUser, setSignedInUser ] = useState<TUser | null>(null)
  const [ wishlist, setWishlist ] = useState<TProduct[]>([])

  const getUser = async () => {
    try {
      const res = await fetch("/api/users")
      const data = await res.json()
      setSignedInUser(data)
      setLoading(false)
    } catch (err) {
      console.log("[users_GET", err)
    }
  }

  useEffect(() => {
    if (user) {
      getUser()
    }
  }, [ user ])

  const getWishlistProducts = useCallback(async () => {
    setLoading(true)

    if (!signedInUser) return

    const wishlistProducts = await Promise.all(signedInUser.wishList.map(async (productId) => {
      const res = await getProductDetails(productId)
      return res;
    }));

    setWishlist(wishlistProducts)
    setLoading(false)
  }, [ signedInUser ])

  useEffect(() => {
    if (signedInUser) {
      getWishlistProducts()
    }
  }, [ signedInUser, getWishlistProducts ])

  const updateSignedInUser = (updatedUser: TUser) => {
    setSignedInUser(updatedUser)
  }


  return loading ? <Loader /> : (
    <div className="px-10">
      <Image
        src="/images/slides/slide-1.png"
        width={1500}
        height={1000}
        alt="menu"
        className="w-full h-60 object-cover object-top"
      />
      <div className="border-b -mx-10 border-gray-500" />
      <p className="text-heading3-bold my-10">Your Wishlist</p>
      {wishlist.length === 0 && (
        <p>No items in your wishlist</p>
      )}

      <div className="flex flex-wrap justify-center gap-16">
        {wishlist.map((product) => (
          <ProductCard key={product._id} product={product} updateSignedInUser={updateSignedInUser} />
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default WishList