import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  direction: "left" | "right";
  onClick: () => void;
}

export default function CarouselButton({
  direction,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white ${direction == "left" ? "hover:bg-linear-90 hover:from-neutral-800 hover:to-transparent" : "hover:bg-linear-90 hover:from-transparent"} to-neutral-800 transition-all duration-300 cursor-pointer ${
        direction === "left"
          ? "-left-6 md:left-4"
          : "-right-6 md:right-4"
      }`}
    >
      {direction === "left" ? <ChevronLeft/> : <ChevronRight/>}
    </button>
  );
}