"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import lightGray from "../../public/LightGray.png";
import blacklogo from "../../public/blacklogo.png";

export default function Navbar() {
  const [scrollState, setScrollState] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      if (scrollY === 0) {
        setScrollState("top");
      } else if (scrollY > 0 && scrollY < heroHeight) {
        setScrollState("glass");
      } else {
        setScrollState("solid");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Property Types" },
    { href: "/gallery", label: "Gallery" },
    { href: "/floorplans", label: "Floor Plans" },
    { href: "/contact", label: "FAQs" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full fixed top-0 z-50">
        <div
          className={`
            flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-3 border-b
            transition-all duration-500 ease-in-out

            ${
              scrollState === "top"
                ? "bg-[#3b1a0e] border-white/20"
                : scrollState === "glass"
                ? "bg-white/10 backdrop-blur-md backdrop-saturate-150 border-white/20"
                : "bg-white border-gray-200 shadow-md"
            }
          `}
        >
          {/* Logo */}
          <Image
            src={scrollState === "solid" ? blacklogo : lightGray}
            alt="logo"
            className=" pl-3 h-10 w-auto transition-all duration-500"
          />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  transition-colors duration-500
                  ${
                    scrollState === "solid"
                      ? "text-black"
                      : "text-white"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block ">
            <Button
              text="Contact Us"
              href="/contact"
              className={`h-8
                transition-all duration-500
                ${
                  scrollState === "solid"
                    ? "bg-white text-black border-black"
                    : "bg-transparent text-white border-white"
                }
              `}
            />
          </div>

          {/* Mobile Hamburger */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-[2px] ${
                  scrollState === "solid" ? "bg-black" : "bg-white"
                }`}
              />
              <span
                className={`h-[2px] ${
                  scrollState === "solid" ? "bg-black" : "bg-white"
                }`}
              />
              <span
                className={`h-[2px] ${
                  scrollState === "solid" ? "bg-black" : "bg-white"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex flex-col transition-all duration-500">
          
          {/* Top Bar */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
            <Image src={lightGray} alt="logo" className="h-8 w-auto" />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center justify-center flex-1 gap-8 text-white text-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="transition hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}

            <Button
              text="Contact Us"
              href="/contact"
              className="mt-4 bg-white text-black border-0"
            />
          </div>
        </div>
      )}
    </>
  );
}