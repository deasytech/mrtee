import ProductDetails from "@/components/dashboard/lists/product"

const Page = ({ params }: { params: { productId: string } }) => {
  return (
    <ProductDetails productId={params.productId} />
  )
}

export default Page