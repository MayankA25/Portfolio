"use client";

import { useState } from "react";
import CarouselImage from "./CarouselImage";
import CarouselButton from "./CarouselButton";
import CarouselDots from "./CarouselDots";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      <div className="relative mx-auto md:w-[80%] overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full shrink-0">
              <CarouselImage src={image} />
            </div>
          ))}
        </div>
      </div>

      <CarouselButton direction="left" onClick={previous} />

      <CarouselButton direction="right" onClick={next} />

      <CarouselDots
        total={images.length}
        current={current}
        onSelect={setCurrent}
      />
    </div>
  );
}
