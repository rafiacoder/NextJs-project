import Image from "next/image";
import logowhite from "../../public/logowhite.png"
import Footer2 from "./footer2";
export default function Footer1() {
    return (
    
        <div className="w-full bg-[#1a1a1a] py-16 px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start lg:items-center justify-between gap-10">
                {/* Logo Section */}
                <div className="flex flex-col gap-4">
                    <Image src={logowhite} alt="Logo" className="object-contain" />
                </div>

                {/* Newsletter Section */}
                <div className="flex flex-col gap-2 ">
                    <h2 className="text-white/40 text-lg font-normal tracking-wide">
                        JOIN MAILING LIST
                    </h2>
                    <p className="text-white/80 text-sm text-balance">
                        Subscribe to our newsletter to receive all the latest news about our current and upcoming project launches.
                    </p>
                </div>

                {/* Subscription Form */}
                <div className="flex flex-col gap-3 w-full md:w-auto">
                    <div className="flex gap-2 w-full ">
                        <input 
                            type="email" 
                            placeholder="Enter your Email" 
                            className="bg-transparent border border-white/80 text-white px-4 py-2 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400 w-2/3 "
                        />
                        <button className="bg-transparent border border-white/80 text-white px-6 py-3 rounded-md text-sm font-medium w-1/3">
                            Subscribe 
                        </button> 
                    </div>
                    <div>
                        <p className="text-white/80 text-xs ">
                        By subscribing you agree to our <span className="text-gray-400 underline cursor-pointer ">Privacy Policy</span> and provide consent to receive updates from our company.
                    </p>
                    </div>
                   
                  
                </div>
            </div>
         </div> 
         
         
    );
}