import Image from "next/image";
import residence from "../../public/residence.png"
export default function Residence(){
return(
    <div className=" px-4 sm:px-6 md:px-8 lg:px-10 w-full h-auto ">
        <div className="container mx-auto flex flex-col items-start lg:items-center justify-center  ">

            <h1 className="text-3xl pl-3 lg:text-4xl text-start lg:text-center ">
                ARTISTRY ONE RESIDENCES
            </h1>
            <div className="pl-3 ">
            <button className="bg-[#F4F1EB] rounded-sm p-2 font-body text-sm font-medium mt-5 w-42.75 "> 
                Available - Off Plan
            </button>
            </div>
            <h1 className="text-xl lg:text-3xl pl-3 font-medium text-center mt-4">
                LIVING AS AN ART FROM 
            </h1>
            <p className="text-start lg:text-center p-3.5 text-sm lg:text-lg  text-balanced text-gray-600 mt-4">
                Rising 36 storeys above the city, every residence is thoughtfully composed, balancing proportion and flow to create spaces that feel both expansive and intimate. Within, refined amenities weave together wellness, recreation, and lifestyle, reflecting a philosophy where design becomes a living art form.
            </p>
          <Image src={residence} alt="residence" className=" w-full h-auto p-3.5 " />
          </div>
        </div>

);
}
