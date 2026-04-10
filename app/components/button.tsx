'use client';
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  text?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  scrollTo?: string; // ← pass section id e.g. "contact"
};

export default function Button({ href = "/", text, className, onClick, scrollTo }: ButtonProps) {
  
  const handleClick = (e: React.MouseEvent) => {
    if (scrollTo) {
      e.preventDefault();
      const el = document.getElementById(scrollTo);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    if (onClick) onClick();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={twMerge(
        "avenir-bold text-black w-auto h-6 bg-white px-8 py-4.75 rounded-md border border-black flex items-center justify-center gap-2 font-bold text-[13.5px]",
        className
      )}
    >
      {text}
      <ArrowRightIcon className="w-4 h-4" />
    </Link>
  );
}