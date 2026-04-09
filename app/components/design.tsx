import design from "../../public/design.png";
import Image from "next/image";

export default function Design() {
  return (
    <div className="w-full h-auto px-4 sm:px-6 md:px-8 lg:px-10 bg-[#E2DED2] py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-7xl">
        
        {/* Image */}
        <Image
          src={design}
          alt="design"
          className="w-full max-w-[540px] h-72 rounded-xl object-cover"
        />

        {/* Text */}
        <div className=" max-w-xl h-auto space-y-4 text-left">
          <h1 className="text-[24px] lg:text-[38px]  font-extrabold">
            A DISTRICT DEFINED BY DESIGN
          </h1>
          <div className="flex flex-col gap-2">
          <p className="text-gray-600 lg:text-[16px] ">
            Envisioned as a global nexus for design, fashion, art, and innovation, Dubai Design District (d3) is set to become a destination where ideas take form and creativity finds belonging. Promenades, pathways, and waterfront vistas will cultivate a vibrant community enriched by creative energy.
          </p>

          <p className="text-gray-600 lg:text-[14.5px]">
            Designed for walkability and interaction, every street and public
            space will celebrate artistic spirit.
          </p>
          </div>
        </div>

      </div>
    </div>
  );
}