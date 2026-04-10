'use client';

import Image from 'next/image';
import { useState } from 'react';

type Slide = { src: string };

const slides: Slide[] = [
  { src: '/floor1.png' },
  { src: '/floor2.png' },
  { src: '/floor3.png' },
  { src: '/floor4.png' },
  { src: '/floor5.png' },
  { src: '/floor6.png' },
];

function getVisibleSlides(slides: Slide[], index: number) {
  const result: Slide[] = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(slides[(index + i) % slides.length]);
  }
  return result;
}

export default function FloorPlans() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleSlides = getVisibleSlides(slides, activeIndex);
  const maxIndex = slides.length;

  return (
    <section id="floorplans" className="px-4 sm:px-6 md:px-8 lg:px-10  bg-[#FFFDFC]">
      <h1 className="text-center text-4xl font-bold uppercase mb-12">
        FLOOR PLANS
      </h1>

      <div className="relative ">
        <div className="grid gap-6 md:grid-cols-3 pl-3 pr-3 ">
          {visibleSlides.map((slide, i) => (
            <div
              key={`${slide.src}-${i}`}
              className="rounded-md border  border-[#F0EAE4] bg-white"
            >
              <div className="overflow-hidden rounded-md">
                <Image
                  src={slide.src}
                  alt="floor-plan"
                  width={1000}
                  height={1000}
                  className=" pl-3 h-55 md:h-80 w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Carousel buttons */}
        <button
          type="button"
          onClick={() => setActiveIndex((activeIndex - 1 + maxIndex) % maxIndex)}
          className="absolute left-2 top-1/2 -translate-y-1/2  -translate-x-1/2 h-11 w-11 rounded-full bg-[#4F2B12] text-white shadow-lg transition hover:opacity-90"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={() => setActiveIndex((activeIndex + 1) % maxIndex)}
          className="absolute right-2 top-1/2 -translate-y-1/2  translate-x-1/2 h-11 w-11 rounded-full bg-[#4F2B12] text-white shadow-lg transition hover:opacity-90"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-2">
        {slides.slice(0, 4).map((_, dotIndex) => (
          <button
            key={`dot-floor-${dotIndex}`}
            type="button"
            onClick={() => setActiveIndex(dotIndex)}
            className={`h-3 w-3 rounded-full transition ${
              activeIndex === dotIndex
                ? 'bg-[#4F2916]'
                : 'bg-[#D8C9BC] hover:bg-[#A38361]'
            }`}
          />
        ))}
      </div>
    </section>
  );
}