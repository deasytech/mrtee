import ProductCard from "@/components/frontend/cards/product-card";
import { Button } from "@/components/ui/button";
import { getLatestProducts } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await getLatestProducts(10);

  return (
    <>
      <section className="">
        {/* <div className="w-full relative">
          <Image src="/images/banner-1.jpg" alt="Women luxury" width={880} height={500} className="w-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
            <p className="text-base-bold font-light">MR TEE LUXURY STORE</p>
            <h3 className="text-heading2-bold">SHOP WOMEN'S</h3>
            <Link href="#">
              <Button variant="outline" className="bg-transparent hover:bg-gold border-t-0 border-r-0 border-l-0 border-b border-white">Discover Now</Button>
            </Link>
          </div>
        </div> */}
        <div className="w-full relative">
          <Image src="/images/banner-2.jpg" alt="Women luxury" width={880} height={500} className="w-full object-cover max-h-[600px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
            <p className="text-base-bold font-light">MR TEE LUXURY STORE</p>
            <h3 className="text-heading2-bold">SHOP MEN'S</h3>
            <Link href="#">
              <Button variant="outline" className="bg-transparent hover:bg-gold border-t-0 border-r-0 border-l-0 border-b border-white">Discover Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="flex flex-col md:flex-row gap-5 py-4 mx-4">
        <div className="w-full flex">
          <Link href="#" className="w-full relative">
            <Image
              src="/images/banner-3.jpg"
              alt="flip flop"
              width={580}
              height={300}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col gap-3 items-end justify-center text-right p-4 text-white">
              <p className="uppercase text-base-medium font-light">FLIP FLOP</p>
              <h4 className="uppercase text-heading4-bold font-semibold">SUMMER<br /> SALE - 70% OFF</h4>
              <div>
                <Button variant="link" className="w-full uppercase px-0 text-white hover:text-gold">Shop Now</Button>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full flex gap-8">
          <Link href="#" className="w-full relative">
            <Image
              src="/images/banner-4.jpg"
              alt="Accessories"
              width={580}
              height={300}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col gap-3 items-start justify-center text-left p-4 text-black">
              <p className="uppercase text-base-medium font-light">Accessories</p>
              <h4 className="uppercase text-heading4-bold font-semibold">2024 Winter<br /> up to 50% off</h4>
              <div>
                <Button variant="link" className="w-full uppercase px-0 text-gray-500 hover:text-gold">Shop Now</Button>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full flex gap-8">
          <Link href="#" className="w-full relative">
            <Image
              src="/images/banner-5.jpg"
              alt="New in"
              width={580}
              height={300}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col gap-3 items-end justify-center text-right p-4 text-white">
              <p className="uppercase text-base-medium font-light">New in</p>
              <h4 className="uppercase text-heading4-bold font-semibold">Women's<br /> sports wear</h4>
              <div>
                <Button variant="link" className="w-full uppercase px-0 text-white hover:text-gold">Shop Now</Button>
              </div>
            </div>
          </Link>
        </div>

      </section> */}

      <section className="flex flex-col items-center gap-10 py-8 mx-4">
        <div className="flex flex-wrap justify-start gap-16">
          <div className="space-y-2">
            <h4 className="uppercase text-heading4-bold font-semibold">PAYMENT & DELIVERY</h4>
            <p className="text-gray-500">Free shipping for orders over ₦250,000</p>
          </div>
          <div className="space-y-2">
            <h4 className="uppercase text-heading4-bold font-semibold">RETURN & REFUND</h4>
            <p className="text-gray-500">Free 100% money back guarantee</p>
          </div>
          <div className="space-y-2">
            <h4 className="uppercase text-heading4-bold font-semibold">QUALITY SUPPORT</h4>
            <p className="text-gray-500">Alway online feedback 24/7</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start gap-6 py-12 px-4 bg-slate-100">
        <p className="text-heading4-bold font-light self-center">FEATURED PRODUCTS</p>
        {!products || products.length === 0 ? (
          <p className="text-body-bold self-center">No product found</p>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start gap-4">
            {products.map((product: TProduct) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
