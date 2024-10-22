import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ProductCard from "@/components/frontend/cards/product-card"
import { getProductsByCategory } from "@/lib/actions";
import { ChevronRight } from "lucide-react";
import { removeHyphenAndCapitalize } from "@/lib/utils";

const Page = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const productCategories = await getProductsByCategory(params.slug);

  return (
    <section className="w-full flex flex-col">
      <div className="w-full py-16 bg-gray-100 text-center space-y-2">
        <h1 className="text-heading1">{removeHyphenAndCapitalize(params.slug)}</h1>
        <p className="text-gold text-heading4">Category</p>
      </div>

      <Breadcrumb className="px-10 py-3 border-b border-gray-200">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Sneakers</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="px-10 flex gap-8 mt-4">
        <div className="w-1/4">
          <div className="border-r border-gray-200 pr-2 min-h-full">
            <h3 className="mb-4 text-heading4">Category</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/category/sweatshirt" className="flex items-center justify-between">
                  Sweat Shirt
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link href="/category/flannel" className="flex items-center justify-between">
                  Flannel
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link href="/category/round-necks" className="flex items-center justify-between">
                  Round Necks
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link href="/category/cargo-pants" className="flex items-center justify-between">
                  Cargo Pants
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link href="/category/jean-flare-pants" className="flex items-center justify-between">
                  Jean Flare Pants
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link href="/category/sneakers" className="flex items-center justify-between">
                  Sneakers
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link href="/category/corporate-shoes" className="flex items-center justify-between">
                  Corporate Shoes
                  <ChevronRight size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productCategories && productCategories.length > 0 && (
              productCategories.map((product: TProduct) => (
                <ProductCard key={product._id} product={product} />
              ))
            )}
          </div>
          {productCategories && productCategories.length === 0 &&
            <p className="text-body-bold flex w-full h-full justify-center items-center">
              No products found in this category
            </p>
          }
        </div>
      </div>
    </section>
  )
}

export default Page;