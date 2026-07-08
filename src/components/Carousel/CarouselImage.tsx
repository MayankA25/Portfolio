import Image from "next/image";

interface Props {
  src: string;
}

export default function CarouselImage({ src }: Props) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl">
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes="50vw"
        loading="eager"
      />
    </div>
  );
}