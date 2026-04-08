import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  text?: string;
  href?: string;
  className?: string;
};

export default function Button({ href = "/", text, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        "avenir-bold text-black  w-auto h-10.5 bg-white px-8 py-5 rounded-md border border-black flex items-center justify-center gap-2 font-bold text-[14px]",
        
        className
      )}
    >
      {text}
      <ArrowRightIcon className="w-4 h-4" />
    </Link>
  );
}