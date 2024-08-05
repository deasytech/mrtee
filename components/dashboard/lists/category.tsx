"use client"

import { useEffect, useState, useCallback } from "react"
import Loader from "@/components/custom-ui/loader"
import CategoryForm from "@/components/dashboard/forms/category-form"

const CategoryDetails = ({ categoryId }: { categoryId: string }) => {
  const [ loading, setLoading ] = useState(true)
  const [ categoryDetails, setCategoryDetails ] = useState<TCategory | null>(null)

  const getCategoryDetails = useCallback(async () => {
    try {
      const res = await fetch(`/api/categories/${categoryId}`, {
        method: "GET"
      })
      const data = await res.json()
      setCategoryDetails(data)
      setLoading(false)
    } catch (err) {
      console.log("[categoryId_GET]", err)
      setLoading(false)
    }
  }, [ categoryId ])

  useEffect(() => {
    getCategoryDetails()
  }, [ getCategoryDetails ])

  return loading ? <Loader /> : (
    <CategoryForm initialData={categoryDetails} />
  )
}

export default CategoryDetails
