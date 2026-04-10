'use client';

import { useState } from 'react';
import Image from 'next/image';
import exterior from "../../public/exterior.png";
import interior from "../../public/interior.png";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('exteriors');

  return (
    <section id="gallery" className="w-full px-4 sm:px-6 md:px-10 lg:px-14">
  <div className="mx-auto max-w-6xl flex flex-col items-center">
    
    <h1 className="text-center text-4xl tracking-wide">GALLERY</h1>

    <div className="mt-8 flex w-full max-w-md gap-0 rounded-lg bg-[#F4F1EB] p-2">
      <button
        onClick={() => setActiveTab('exteriors')}
        className={`flex-1 py-2 text-center font-medium whitespace-nowrap transition ${
          activeTab === 'exteriors'
            ? 'bg-[#FFFFFF]/30 text-[#4B2417]'
            : 'bg-transparent text-black hover:text-black'
        }`}
      >
        Exteriors
      </button>
      <button
        onClick={() => setActiveTab('interiors')}
        className={`flex-1 py-2 text-center font-medium whitespace-nowrap transition ${
          activeTab === 'interiors'
            ? 'bg-[#FFFFFF]/30 text-[#4B2417]'
            : 'bg-transparent text-black hover:text-black'
        }`}
      >
        Interiors
      </button>
    </div>

    <div className="relative mt-10 w-full overflow-hidden rounded-xl">
      <Image
        src={activeTab === 'exteriors' ? exterior : interior}
        alt={activeTab === 'exteriors' ? 'Exterior view' : 'Interior view'}
        width={900}
        height={500}
        className="w-full h-auto max-h-125 object-cover rounded-xl"
      />
    </div>
  </div>
</section>
  );
}