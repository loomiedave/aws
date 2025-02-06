
import HeroSection from "./components/HeroSection";
import HomeLocationDiv from "./components/HomeLocationDiv";
import Treatmentgrid from "./components/Treatmentgrid";
import PromiseDiv from "./components/PromiseDiv";
import HomeBottomDiv from "./components/HomeBottomDiv";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
        <HomeLocationDiv />
        <div className="flex flex-col mb-6 text-center">
         <hr className="border-t-1 border-double mx-auto w-3/4 border-gray-500 mb-6" />
         <h1 className='text-indigo-900 text-5xl font-bold'>Treatments</h1>
         <h1 className="text-indigo-800 text-xl">Guiding You Through Recovery</h1>
        </div>
       <Treatmentgrid />
       <PromiseDiv />
       <hr className="border-t-1 border-double mx-auto w-3/4 border-gray-500 mb-6" />
       <HomeBottomDiv /> 
    </div>
  ); 
}
