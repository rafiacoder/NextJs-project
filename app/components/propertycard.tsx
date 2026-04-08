import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

type PropertyCardProps = {
  title: string;
  living: string;
  price: string;
  image: StaticImageData;
  alt: string;
  className?: string;
};

export default function PropertyCard({
  title,
  living,
  price,
  image,
  alt,
  className,
}: PropertyCardProps) {
  return (
    <div className={twMerge("flex h-full flex-col rounded-md  shadow-sm bg-[#F4F1EB] ",className)}>
    
      <Image src={image} alt={alt} className="w-full h-52 object-cover p-6"/>

      <div className="mt-5 flex flex-col gap-4 px-6 py-4 bg-white">
        <h2 className="text-lg  text-nowrap avenir-bold ">
          {title}
        </h2>
        <div className=" flex flex-row justify-between text-sm text-balance">
          <div className="flex flex-col" >
            <div className="text-xs font-medium text-gray-500 medium">Living area</div>
            <div className="mt-1 text-16px font-semibold text-gray-800 medium">{living}</div>
          </div>
          <div className="flex flex-col  items-start ">
            <div className="text-xs font-medium text-gray-500 medium">Starting Price</div>
            <div className="mt-1 text-16px font-semibold text-gray-800 medium ">{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}