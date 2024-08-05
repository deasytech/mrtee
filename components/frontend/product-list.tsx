import { getLatestProducts } from "@/lib/actions";
import ProductCard from "./cards/product-card";

const ProductList = async () => {
  const products = await getLatestProducts(5);

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Products</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No product found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {products.map((product: TProduct) => (
            <ProductCard key={product._id} product={products} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList