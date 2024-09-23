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
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="product"
        className="w-full object-contain"
      />
      <div className="flex flex-col items-center gap-8 px-10">
        <p className="text-heading3-bold text-grey-2">{collectionDetails.title}</p>
        <p className="text-body-normal text-grey-2 text-center max-w-[900px]">{collectionDetails.description}</p>
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