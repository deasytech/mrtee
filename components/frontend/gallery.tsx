"use client";

import { cn } from '@/lib/utils';
import Image from 'next/image'
import React, { useState } from 'react'

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [ mainImage, setMainImage ] = useState(productMedia[ 0 ]);

  return (
    <div className="flex flex-col gap-3 max-w-[500px]">
      <Image
        src={mainImage}
        alt="product"
        width={500}
        height={500}
        className="rounded-lg w-96 h-96 shadow-xl object-cover"
      />
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {productMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            height={200}
            width={200}
            alt="dish"
            className={cn("w-20 h-20 rounded-lg object-cover cursor-pointer", mainImage === image ? "border-2 p-1 border-gold" : "")}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery