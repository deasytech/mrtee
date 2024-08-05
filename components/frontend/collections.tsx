import Image from "next/image";
import Link from "next/link";

import { getCollections } from "@/lib/actions"

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Collections</p>
      <div className="flex flex-wrap justify-center gap-8">
        {collections.length > 0 ? collections.map((collection: TCollection) => (
          <Link key={collection._id} href={`/collections/${collection._id}`}>
            <Image
              src={collection.image}
              alt={collection.title}
              width={400}
              height={200}
              className="rounded-lg border border-gray-500"
            />
          </Link>
        )) : (<p className="text-body-bold">No collection found!</p>)}
      </div>
    </div>
  )
}

export default Collections