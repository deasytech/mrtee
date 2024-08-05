import ProductCard from "@/components/frontend/cards/product-card";
import { getProductDetails } from "@/lib/actions";
import Image from "next/image";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productDetails = await getProductDetails(params.productId);

  return (
    <div className="flex flex-col items-center gap-8">
      <Image
        src={productDetails.image}
        width={1500}
        height={1000}
        alt="product"
        className="w-full object-contain"
      />
      <div className="flex flex-col items-center gap-8 px-10">
        <p className="text-heading3-bold text-grey-2">{productDetails.title}</p>
        <p className="text-body-normal text-grey-2 text-center max-w-[900px]">{productDetails.description}</p>
        <div className="flex flex-wrap gap-16 justify-center">
          {productDetails.products.map((product: TProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const dynamic = "force-dynamic";