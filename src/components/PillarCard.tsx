import { useState } from "react";


type PillarCardProps = {
  title: string;
  image: string;
  description: string;
};

export function PillarCard({
  title,
  image,
  description,
}: PillarCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-80 w-full perspective-1000 cursor-pointer
                 transition-transform duration-300 hover:scale-[1.02]"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700
        transform-style-preserve-3d
        ${flipped ? "rotate-y-180" : ""}`}
      >

        {/* FRONT — IMAGE */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col justify-between p-5">
            <h3 className="text-white text-lg font-semibold">
              {title}
            </h3>
            <span className="text-xs text-white/70">
              Tap / Hover to explore →
            </span>
          </div>
        </div>

        {/* BACK — TEXT */}
        <div
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl
                     bg-gradient-to-br from-[#0B1220] to-[#0E1628]
                     border border-white/10
                     p-6 flex items-center text-center"
        >
          <p className="text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}

  
  