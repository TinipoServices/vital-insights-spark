import { useEffect, useState } from "react";
import banner1 from "@/assets/banner/banner1.png";
import banner2 from "@/assets/banner/Banner-2.jpg";
import banner3 from "@/assets/banner/Banner-3.jpg";
import banner5 from "@/assets/banner/Banner-5.jpeg";

const images = [
  banner1,banner2,banner3,banner5
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[90%] md:w-[70%] h-[350px] sm:h-[250px] md:h-[350px] overflow-hidden rounded-xl mx-auto">
  <div
    className="flex h-full transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`slide-${index}`}
        className="w-full h-full flex-shrink-0 object-cover"
      />
    ))}
  </div>

  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
    {images.map((_, index) => (
      <span
        key={index}
        className={`h-2 w-2 rounded-full ${
          currentIndex === index ? "bg-white" : "bg-white/50"
        }`}
      />
    ))}
  </div>
</div>

  );
}
