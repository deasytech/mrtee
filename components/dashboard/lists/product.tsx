"use client"

import { useEffect, useState, useCallback } from "react"
import Loader from "@/components/custom-ui/loader"
import ProductForm from "@/components/dashboard/forms/product-form"

const ProductDetails = ({ productId }: { productId: string }) => {
  const [ loading, setLoading ] = useState(true)
  const [ productDetails, setProductDetails ] = useState<TProduct | null>(null)

  const getProductDetails = useCallback(async () => {
    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: "GET"
      })
      const data = await res.json()
      setProductDetails(data)
      setLoading(false)
    } catch (err) {
      console.log("[product_GET]", err)
      setLoading(false)
    }
  }, [ productId ])

  useEffect(() => {
    getProductDetails()
  }, [ getProductDetails ])

  return loading ? <Loader /> : (
    <ProductForm initialData={productDetails} />
  )
}

export default ProductDetails
