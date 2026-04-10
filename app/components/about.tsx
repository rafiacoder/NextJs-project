import Button from "./button"
import Image from "next/image";
import selectgroup from "../../public/selectgroup.png"
import lightGray from "../../public/LightGray.png"
export default function About() {
  return (
        <div id="about" className="flex flex-col lg:flex-row  gap-4 w-full bg-[#4B2417] overflow-hidden">

          <Image
            src={selectgroup} alt="selectgroup" className="w-full lg:w-1/3 h-auto object-cover"/>

          <div className="flex flex-col gap-6 p-6 md:p-10 w-full lg:w-2/3">

            <h1 className="text-3xl md:text-5xl text-white uppercase">
              About Select Group
            </h1>
              <p className="text-[16px] leading-6 text-white/80 font-normal max-w-167 ">
                Founded in 2002, Select Group is a dynamic and diverse corporation with premium property development at its core. Select Group operates a portfolio of investments in various sectors across the Middle East, the United Kingdom and Europe, supported by a global talent pool of over 750 employees. Select Group's development portfolio comprises over 20 million square feet of award-winning residential, commercial, hospitality and retail developments, delivering over 7,000 homes, with another 5,000 units in the pipeline, a combined Gross Development Value (GDV) of over AED 20 billion. Diversification has been a critical strategy for sustainable growth for Select Group with several other investment ventures within the fitness, wellness, technology and asset management sectors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button text="Register Your Interest" href="/contact" scrollTo="contact" className="border-0 py-5.5  px-14" />
              <Button text="View More Developments" href="/floorplans" scrollTo="floorplans" className="bg-[#4B2417] border border-white text-white px-14 py-5" />
            </div>

            <div className="flex justify-end w-full">
              <Image
                src={lightGray}
                alt="logo"
                className="w-30 md:w-40.75 h-auto"
              />
            </div>

          </div>
        </div>
  );
}