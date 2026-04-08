import Image from "next/image";
import Navbar from "./components/navbar";
import Herosection from "./components/herosection";
import Residence from "./components/residence";
import Information from "./components/information";
import Design from "./components/design";
import Creativity from "./components/creativity";
import About from "./components/about";
import Gallery from "./components/gallery";
import Form from "./components/form";
import FAQs from "./components/FAQs";
import Footer from "./components/footer";
import Body from "./components/body";
import Property from "./components/property";
import FloorPlans from "./components/floorplans"
import KeyFloorPlans from "./components/keyfloorplans"
export default function Home() {
  return (
         <div className="flex flex-col  gap-20">
             <Herosection />
             <Residence />
            <Body /> 
            <Property />         
            <Design />
            <Gallery />
            <FloorPlans/>
            <Information /> 
            <KeyFloorPlans/>
            <Creativity />
            <FAQs/>
            <About />
            <Form/>
            <Footer/>
          </div>
          
            
      
  );
}
          
      