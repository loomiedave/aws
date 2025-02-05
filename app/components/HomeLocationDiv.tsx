import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeLocationDiv = () => {
  return (
    <section className="container mx-auto px-4 py-14">
       <div className="flex flex-col mb-6 mt-6 text-center">
         <hr className="border-t-1 border-double mx-auto w-3/4 border-gray-500 mb-6" />
        </div>
      <div className="grid lg:grid-cols-2 gap-4 items-center">
        <div className="hidden lg:flex justify-center">
          <div className="relative w-72 h-72 lg:w-[500px] lg:h-[500px] transition-transform duration-300 hover:scale-105">
            <Image 
              src="/hero.jpg"
              alt="Absolute Wellness Services treatment facility"
              fill
              priority
              sizes="(max-width: 768px) 288px, 500px"
              className="rounded-sm shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 md:w-full">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-indigo-900">
            Individualized & Evidence-Based Care for Substance Use Recovery
          </h1>
          
          <div className="space-y-4 text-md text-gray-700">
            <p>
              At Absolute Wellness Services, we are committed to offering compassionate, 
              evidence-based care to individuals facing substance use disorders (SUD). Our team understands 
              that the journey of every individual to recovery is unique, which is why we tailor our approach to meet 
              specific needs. By utilizing proven treatment methods and a supportive environment, 
              we help individuals regain control of their lives with dignity and respect.
            </p>
            <p>
              We believe that access to care should be seamless and stress-free, 
              which is why we admit clients daily from Monday to Friday. Our intake process is designed to be efficient 
              and welcoming, ensuring that individuals seeking help can start their recovery without unnecessary delays.
              Whether you are taking the first step or continuing your journey, our dedicated team is here to support you every step of the way.
            </p>
            <p>
              We go beyond treatment—we create a space where you feel valued,
              understood, and empowered. We recognize the courage it takes to seek help, and we are dedicated to providing 
              the personalized attention needed to foster long-term healing. By addressing both the physical and emotional 
              aspects of substance use, we strive to help individuals build a foundation for lasting recovery and a healthier future.
            </p>
          </div>

          <div className="mt-6">
            <hr className="border-t-4 border-dashed border-gray-500 mb-6" />
            <p className="text-lg font-semibold text-gray-800">
              For drug and alcohol addiction treatment in Baltimore, call{" "}
              <Link 
                href="tel:4105129525" 
                className="text-blue-500 hover:text-blue-700 underline transition-colors"
                aria-label="Call us at 410-512-9525"
              >
                (410) 512-9525
              </Link>
              {" "}or{" "}
              <Link 
                href="/contact"
                className="text-blue-500 hover:text-blue-700 underline transition-colors"
              >
                get in touch with us online
              </Link>.
            </p>
            <hr className="border-t-4 border-dashed border-gray-500 my-6" />
            
            <Link href="/locations" className="inline-block">
              <button 
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-4 px-6 rounded-sm transition-colors"
                aria-label="View our locations"
              >
                OUR LOCATIONS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLocationDiv;