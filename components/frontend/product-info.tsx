"use client"

import { cn, naira } from "@/lib/utils";
import LikeItem from "./like-item";
import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCart from "@/lib/hooks/use-cart";

const ProductInfo = ({ productInfo }: { productInfo: TProduct }) => {
  const [ price, setPrice ] = useState(productInfo.price);
  const [ selectedSize, setSelectedSize ] = useState<string>(productInfo.sizes[ 0 ]);
  const [ selectedColor, setSelectedColor ] = useState<string>(productInfo.colors[ 0 ]);
  const [ quantity, setQuantity ] = useState(1);
  const cart = useCart();

  return (
    <div className="w-full max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">{productInfo.title}</p>
        <LikeItem productId={productInfo._id} />
      </div>

      <div className="flex gap-2">
        <p className="text-base-medium text-gray-400">Category:</p>
        <p className="text-small-bold">{productInfo.category}</p>
      </div>

      <p className="text-heading3-bold">{naira(price)}</p>

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-gray-400">Description:</p>
        <p className="text-small-medium leading-6">{productInfo.description}</p>
      </div>

      {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Colors:</p>
          <div className="flex gap-2">
            {productInfo.colors.map((color, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${selectedColor === color && "bg-black text-white"
                  }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )}

      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Sizes:</p>
          <div className="flex gap-2">
            {productInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${selectedSize === size && "bg-black text-white"
                  }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-gray-400">Quantity</p>
        <div className="flex gap-4 items-center">
          <MinusCircle
            className="hover:text-gold cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="text-body-bold">{quantity}</p>
          <PlusCircle className="hover:text-gold cursor-pointer" onClick={() => setQuantity(quantity + 1)} />
        </div>
      </div>

      <Button onClick={() => cart.addItem({ item: productInfo, quantity, size: selectedSize })}>Add to Cart</Button>
    </div>
  )
}

export default ProductInfo