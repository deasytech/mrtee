import CategoryDetails from "@/components/dashboard/lists/category"

const Page = ({ params }: { params: { categoryId: string } }) => {
  return (
    <CategoryDetails categoryId={params.categoryId} />
  )
}

export default Page