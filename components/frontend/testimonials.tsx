"use client"

import { useState } from "react";
import { Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "The level of craftsmanship and attention to detail in Mr Tee's clothing is unmatched. I purchased a suit for a corporate event, and the compliments were endless. This is luxury at its finest!",
    name: "Damola Abolarin",
  },
  {
    quote: "Shopping at Mr Tee was a seamless experience. The quality of the fabric and the fit were absolutely perfect. I've never felt more confident in my style. I'll definitely be coming back for more.",
    name: "Amina Jide",
  },
  {
    quote: "I was skeptical about online shopping for luxury clothing, but Mr Tee exceeded my expectations. The customer service was top-notch, and the clothes fit like they were made just for me.",
    name: "Chinedu Okeke",
  },
];

const Testimonials = () => {
  const [ activeIndex, setActiveIndex ] = useState(0);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col gap-6 justify-center text-center items-center pt-16 text-gray-800">
      <h1 className="text-heading2-bold uppercase">Our Customers Say</h1>

      <div className="relative w-full max-w-xl">
        <>
          <div className="border border-gold p-2 rounded-full w-fit mx-auto">
            <div className="flex items-center justify-center w-11 h-11 bg-gold rounded-full">
              <Quote className="text-transparent fill-white rotate-180" size={18} />
            </div>
          </div>
          <div className="mt-4">
            <p>"{testimonials[ activeIndex ].quote}"</p>
            <p className="uppercase mt-4 font-bold">{testimonials[ activeIndex ].name}</p>
            <p className="text-gray-600">Customer</p>
          </div>
        </>
      </div>

      <div className="flex gap-2 mt-6">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-gold" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
