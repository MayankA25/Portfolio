import React from "react";
// import image from "./hero-image.jpg";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="sticky top-0 h-80 w-full shadow-2xl z-[-1]">
      <div className="absolute h-full w-full">
        <Image
          src={"/hero-image.jpg"}
          fill
          alt=""
          className="object-cover
        [mask-image:radial-gradient(circle_at_center,black_70%,transparent_100%)]
        [-webkit-mask-image:radial-gradient(circle_at_center,black_70%,transparent_100%)]
        "
          loading="eager"
        />
      </div>
      <div className="bg-linear-to-b from-transparent to-black absolute w-full h-full"></div>
    </div>
  );
}
