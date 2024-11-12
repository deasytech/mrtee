"use client"

import { useState } from "react";
import { Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "I recently bought a pair of shoes from Mr Tee, and I couldn't be happier with the experience. The customer service was 100% and my shoes arrived within two days. The shoes themselves are perfect and I got great value for my money. Highly recommend!",
    name: "Anonymous",
  },
  {
    quote: "I got these boots from Mr. Tee and I don’t regret it. High quality and fast delivery 😁",
    name: "Anonymous",
  },
  {
    quote: "I'm a lady with big feet and it has been a hassle getting shoes that fit AND that I like. With Mr Tee, I get comfortable shoes that are my size and that I absolutely love. 5 stars from me.",
    name: "Anonymous",
  },
  {
    quote: "I wanted to get a pair of shoes as a surprise for my man and was initially confused as to what I should get. Mr Tee was very helpful with his recommendation. I got the shoes delivered the very next day for the surprise. He loved it! A million stars, if possible 😁 ✨",
    name: "Violet",
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
