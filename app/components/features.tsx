import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

type FeaturesProps = {
  title: string;
  description: string[];
  image: StaticImageData;
  alt: string;
  reverse?: boolean;
  className?: string;
};

export default function Features({
  title,
  description,
  image,
  alt,
  reverse = false,
  className,
}: FeaturesProps) {
  return (
    <section
      className={twMerge(
        "flex flex-col gap-8 rounded-3xl bg-white p-10 shadow-sm md:flex-row md:items-center",
        reverse && "md:flex-row-reverse",
        className
      )}
    >
      {/* Text */}
      <div className="md:w-1/2">
        <h1 className="text-3xl font-semibold tracking-wide">{title}</h1>

        {description.map((para, index) => (
          <p
            key={index}
            className="mt-4  text-[#252525]/80 text-sm leading-6"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <Image
          src={image}
          alt={alt}
          className="w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}