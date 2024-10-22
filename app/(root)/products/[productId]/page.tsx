import ProductCard from '@/components/frontend/cards/product-card';
import ProductInfo from '@/components/frontend/product-info';
import Gallery from '@/components/frontend/gallery';
import { getProductDetails, getRelatedProducts } from '@/lib/actions'

const Page = async ({ params }: { params: { productId: string } }) => {
  const productDetails = await getProductDetails(params.productId);
  const relatedProducts = await getRelatedProducts(params.productId);

  return (
    <>
      <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={productDetails.media} />
        <ProductInfo productInfo={productDetails} />
      </div>

      <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
        <p className="text-heading3-bold">Similar Products</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((product: TProduct) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="text-center">No related products found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
