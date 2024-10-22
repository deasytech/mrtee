import ProductCard from "@/components/frontend/cards/product-card";
import { getCollectionDetails } from "@/lib/actions";
import Image from "next/image";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);
  // console.log(collectionDetails)
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-3 items-center justify-center h-96 bg-cover bg-fixed bg-parallax w-full">
        <h1 className="text-heading1-bold text-white">{collectionDetails.title}</h1>
        <p className="text-body-normal text-gray-100 text-center max-w-[900px]">{collectionDetails.description}</p>
      </div>
      <div className="flex flex-col items-center gap-8 px-10">
        <div className="flex flex-wrap gap-16 justify-center">
          {collectionDetails.products.map((product: TProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";