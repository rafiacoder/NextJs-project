import design from "../../public/creativity.png"
import Image from "next/image";
import Button from "./button";
export default function Creativity() {
  return (
    <div className="w-full h-auto px-4 sm:px-6 md:px-8 lg:px-10 bg-[#E2DED2] py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12  max-w-6xl">
        <div className="max-w-xl space-y-4">
          <h1 className="text-2xl lg:text-4xl font-extrabold ">
              AT THE CROSSROADS
          </h1>
          <h1 className="text-2xl lg:text-4xl font-extrabold">
              OF CREATIVITY
          </h1>
          <p className="text-gray-600 text-[16px]">
           Dubai Design District (d3) is strategically positioned with seamless access to Business Bay, Downtown Dubai, the Burj Khalifa, Dubai Mall, DIFC, and major business and cultural destinations. The location offers effortless connectivity to Al Ain Road, Ras Al Khor Road, Al Khail Road and key transport links, providing convenient reach across the city.
          </p>
         <Button text="View on Google Maps " href="/contact" scrollTo="contact" className="w-full md:w-1/2 bg-[#4B2417] text-white border-0 " />
        </div>
        <Image src={design} alt="design" className="w-130 h-auto rounded-xl object-cover" />
      </div>
    </div>
  );
}