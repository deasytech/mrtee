import ProductCard from "@/components/frontend/cards/product-card";
import { getCollectionDetails } from "@/lib/actions";
import Image from "next/image";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-3 items-center justify-center h-96 bg-cover bg-fixed bg-parallax w-full">
        <h1 className="text-heading1-bold text-white">{collectionDetails.title}</h1>
        <p className="text-body-normal text-gray-100 text-center max-w-[900px]">{collectionDetails.description}</p>
      </div>
      <div className="flex flex-col items-center gap-8 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {collectionDetails && collectionDetails?.products.length > 0 && (
            collectionDetails?.products.map((product: TProduct) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
        {collectionDetails && collectionDetails.length === 0 &&
          <p className="text-body-bold flex w-full h-full justify-center items-center">
            No products found in this category
          </p>
        }
      </div>
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";