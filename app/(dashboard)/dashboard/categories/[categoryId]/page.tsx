import CategoryDetails from "@/components/dashboard/lists/category"
import { getCategories } from "@/lib/actions";

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category: any) => ({
    categoryId: category._id,
  }));
}

const Page = ({ params }: { params: { categoryId: string } }) => {
  return (
    <CategoryDetails categoryId={params.categoryId} />
  )
}

export default Page