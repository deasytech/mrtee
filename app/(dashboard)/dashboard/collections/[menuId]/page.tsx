import CollectionsDetails from "@/components/dashboard/lists/collection"

const Page = ({ params }: { params: { collectionId: string } }) => {
  return (
    <CollectionsDetails collectionId={params.collectionId} />
  )
}

export default Page