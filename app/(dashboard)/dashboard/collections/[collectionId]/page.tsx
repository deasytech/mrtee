import CollectionsDetails from "@/components/dashboard/lists/collection"
import { getCollections } from "@/lib/actions";

export async function generateStaticParams() {
  const collections = await getCollections();

  return collections.map((category: any) => ({
    categoryId: category._id,
  }));
}

const Page = ({ params }: { params: { collectionId: string } }) => {
  return (
    <CollectionsDetails collectionId={params.collectionId} />
  )
}

export default Page