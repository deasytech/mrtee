import { naira } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import LikeItem from "@/components/frontend/like-item";

interface DishCardProps {
  dish: TDish;
  updateSignedInUser?: (updatedUser: TUser) => void;
}

const DishCard = ({ dish, updateSignedInUser }: DishCardProps) => {
  return (
    <Link href={`/dishes/${dish._id}`} className="w-full flex flex-col">
      <Image
        src={dish.media[ 0 ]}
        alt={dish.title}
        width={288}
        height={288}
        className="h-[288px] w-full object-cover"
      />
      <div className="bg-white p-3 space-y-3">
        <div className="text-center space-y-2">
          <p className="text-base-bold font-light">{dish.title}</p>
          <p className="text-base-medium">{dish.category}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-body-bold">{naira(dish.price)}</p>
          <LikeItem dishId={dish._id} updateSignedInUser={updateSignedInUser} />
        </div>
      </div>
    </Link>
  )
}

export default DishCard