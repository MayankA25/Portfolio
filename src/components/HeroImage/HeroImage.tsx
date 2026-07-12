import React from "react";
// import image from "./hero-image.jpg";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="sticky top-0 z-[-1] h-80 w-full shadow-2xl">
      <div className="absolute h-full w-full">
        <Image
          src={"/images/hero-image.jpg"}
          fill
          alt=""
          className="mask-[radial-gradient(circle_at_center,black_70%,transparent_100%)] object-cover [-webkit-mask-image:radial-gradient(circle_at_center,black_70%,transparent_100%)]"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="eager"
        />
      </div>
      <div className="absolute h-full w-full bg-linear-to-b from-transparent to-black"></div>
    </div>
  );
}
