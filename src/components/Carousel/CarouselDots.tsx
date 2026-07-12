interface Props {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export default function CarouselDots({
  total,
  current,
  onSelect,
}: Props) {
  return (
    <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={` ${ current == index ? "w-6 h-1.25" : "w-1.5 h-1.25" }  rounded-full transition-all duration-300 ${
            current === index
              ? "bg-white scale-125"
              : "bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}