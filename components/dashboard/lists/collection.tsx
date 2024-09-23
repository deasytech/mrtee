"use client"

import { useEffect, useState, useCallback } from "react"
import Loader from "@/components/custom-ui/loader"
import MenuForm from "@/components/dashboard/forms/collection-form"

const CollectionDetails = ({ collectionId }: { collectionId: string }) => {
  const [ loading, setLoading ] = useState(true)
  const [ collectionDetails, setCollectionDetails ] = useState<TCollection | null>(null)

  const getCollectionDetails = useCallback(async () => {
    try {
      const res = await fetch(`/api/collections/${collectionId}`, {
        method: "GET"
      })
      const data = await res.json()
      setCollectionDetails(data)
      setLoading(false)
    } catch (err) {
      console.error("[collectionId_GET]", err)
      setLoading(false)
    }
  }, [ collectionId ])

  useEffect(() => {
    getCollectionDetails()
  }, [ getCollectionDetails ])

  return loading ? <Loader /> : (
    <MenuForm initialData={collectionDetails} />
  )
}

export default CollectionDetails
