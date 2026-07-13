import React from "react";
// import image from "./hero-image.jpg";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="sticky top-0 z-[-1] h-85 w-full md:h-[28rem] lg:h-[30rem]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.jpg"
          fill
          alt="Hero"
          priority
          className="mask-[radial-gradient(circle_at_center,black_70%,transparent_100%)] object-cover [-webkit-mask-image:radial-gradient(circle_at_center,black_70%,transparent_100%)]"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-50 transition-colors duration-300 dark:to-neutral-950" />
    </div>
  );
}
