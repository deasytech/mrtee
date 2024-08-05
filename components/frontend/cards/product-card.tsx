import { naira } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import LikeItem from "@/components/frontend/like-item";

interface ProductCardProps {
  product: TProduct;
  updateSignedInUser?: (updatedUser: TUser) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <Link href={`/products/${product._id}`} className="w-full flex flex-col">
      <Image
        src={product.media[ 0 ]}
        alt={product.title}
        width={288}
        height={288}
        className="h-[288px] w-full object-cover"
      />
      <div className="bg-white p-3 space-y-3">
        <div className="text-center space-y-2">
          <p className="text-base-bold font-light overflow-hidden text-ellipsis whitespace-nowrap">
            {product.title}
          </p>
          <p className="text-body-bold">{naira(product.price)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base-medium">{product.category}</p>
          <LikeItem productId={product._id} updateSignedInUser={updateSignedInUser} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
