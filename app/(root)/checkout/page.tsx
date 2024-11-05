import CheckoutForm from "@/components/frontend/checkout-form"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"

const Checkout = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="w-full py-16 bg-gray-100 text-center space-y-2">
        <h1 className="text-heading1">Checkout</h1>
        <p className="text-gold text-heading4">Shop</p>
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
            <BreadcrumbLink>
              <Link href="/collections">Collections</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Checkout</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="px-10 mt-4">
        <CheckoutForm />
      </div>
    </section>
  )
}

export default Checkout