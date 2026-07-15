import Image from "next/image";

interface Props {
  src: string;
}

export default function CarouselImage({ src }: Props) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg">
      <Image
        src={src}
        alt=""
        fill
        className="object-contain"
        sizes="50vw"
        loading="eager"
        unoptimized
      />
    </div>
  );
}