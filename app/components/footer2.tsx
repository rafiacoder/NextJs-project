import Link from "next/link";
import { FaInstagram } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer2() {
  return (
    <footer className="w-full bg-[#0b0b0b] pt-12 pb-4 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-gray-300">
          
          {/* PROPERTIES */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-wide text-[#FFFFFF]/40">PROPERTIES</h2>
            <Link href="/properties" className="block text-sm text-white/80  transition">
              Property Listings
            </Link>
            <Link href="/developments" className="block text-sm text-white/80  transition">
              Developments
            </Link>
          </div>

          {/* INVESTMENTS */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-wide text-[#FFFFFF]/40">INVESTMENTS</h2>
            <Link href="/hospitality" className="block text-sm text-white/80  transition">
              Hospitality
            </Link>
            <Link href="/residential" className="block text-sm text-white/80 transition">
              Residential
            </Link>
            <Link href="/commercial" className="block text-sm text-white/80  transition">
              Retail/Commercial
            </Link>
            <Link href="/strategic" className="block text-sm text-white/80  transition">
              Strategic
            </Link>
          </div>

          {/* COMPANY */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-wide  text-[#FFFFFF]/40">COMPANY</h2>
            <Link href="/overview" className="block text-sm text-white/80 transition">
              Overview
            </Link>
            <Link href="/journey" className="block text-sm text-white/80  transition">
              Our Journey
            </Link>
            <Link href="/team" className="block text-sm text-white/80  transition">
              The Team
            </Link>
            <Link href="/faqs" className="block text-sm text-white/80  transition">
              FAQs
            </Link>
          </div>

          {/* NEWS */}
          <div className="space-y-2">
            <h2  className="text-sm font-semibold tracking-wide  text-[#FFFFFF]/40">NEWS</h2>
            <Link href="/blog" className="block text-sm text-white/80  transition">
              Blog
            </Link>
            <Link href="/media" className="block text-sm text-white/80  transition">
              Media
            </Link>
          </div>

          {/* ENGAGE */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-wide  text-[#FFFFFF]/40">ENGAGE</h2>
            <Link href="/contact" className="block text-sm text-white/80  transition">
              Contact
            </Link>
            <Link href="/customer-care" className="block text-sm text-white/80  transition">
              Customer Care
            </Link>
            <Link href="/broker" className="block text-sm text-white/80  transition">
              Broker Enquiries
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col gap-2 md:flex-row md:justify-between text-white/80 text-sm">
          <div className="flex flex-row  gap-6 md:flex-row md:items-center md:justify-start md:gap-6">
              <div>© 2023 Select Group. All rights reserved.</div>

              <Link href="/privacy-policy" className="underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="underline">
                Terms of Service
              </Link>
          </div>

            {/* Social Icons (External Links) */}
            <div className="flex justify-end gap-3 ">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
              <FaYoutube />

            </div>
          </div>
        </div>
    
    </footer>
  );
}