import information from "../../public/information.png"
import Image from "next/image";
import Button from "./button";
export default function Information(){
    return(
        <div className="relative w-full h-full  overflow-hidden ">
            <Image src={information} alt="information" className=" w-full h-[300px]
             lg:h-full  "/>
            <div className=" flex items-center justify-center  absolute inset-0 px-4 sm:px-6 md:px-8 lg:px-10 ">
            <div className="container mx-auto  flex flex-col items-center justify-center gap-6 max-w-4xl h-full m-10">
                <h1 className="w-92 p-3 text-balance text-white text-lg lg:text-3xl font-extrabold lg:w-201.25 text-center uppercase  ">
                   Don't miss out, register today for more information
                </h1>
                <div className="flex flex-row px-4 lg:px-0 text-nowrap gap-2  lg:gap-4">
                  <Button text="Register Now" href="/register" className="border-0" />
                  <Button text="Contact Us" href="/contact" className=" border-white bg-transparent text-white " />
                </div>
            </div>
        </div>
        </div>
        
    
    );
}