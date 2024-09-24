import { getCollections } from "@/lib/actions"
import Image from "next/image"
import Link from "next/link";

const MenuPage = async () => {
  const collections = await getCollections();

  return (
    <section className="w-full">
      <div className="flex flex-col gap-3 items-center justify-center h-96 bg-cover bg-fixed bg-parallax w-full">
        <h1 className="text-heading1-bold text-white">All Collections</h1>
      </div>
      <div className="border-b -mx-10 border-gray-500" />
      <div className="px-10 max-sm:px-3 mt-10">
        {/* <p className="text-heading3-bold my-10">Collections</p> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {collections.map((collection: TCollection) => (
            <Link href={`/collections/${collection._id}`} key={collection._id} className="flex flex-col gap-10 mb-5">
              <Image
                src={collection.image}
                alt={collection.title}
                width={200}
                height={200}
                className="w-full rounded-lg border border-gray-500"
              />
              <div className="flex flex-col gap-2">
                <p className="text-heading4-bold">{collection.title}</p>
                <p className="text-body-medium">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuPage