import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import ContactDiv from '../components/ContactDiv';

function page() {
    return (
        <div className='bg-white'>
          <div className="relative h-[50vh] md:h-[70vh] bg-cover bg-center"
            style={{
              backgroundImage: 'url("/insurance.jpg")', 
              backgroundPosition: 'center'
            }}
          >
          <div className="absolute inset-0 bg-indigo-800/80 md:bg-gradient-to-b from-white via-white/0 to-indigo-900/80 via-30% flex items-center justify-center">
            <div className="text-center text-white px-6 space-y-6 animate-[fadeIn_1s_ease-in_forwards]">
             <hr className="border-t-1 border-double mx-auto w-full border-white mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold animate-[fadeIn_1s_ease-in_forwards]">
                INSURANCE
              </h1>
            </div>
           </div>
          </div>
          <div className='md:w-full justify-start mx-auto px-4 py-12 md:px-16'>
            <hr className="border-t-1 border-double mx-auto md:mx-0 w-full md:w-2/4 border-gray-600 mb-8" />
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-indigo-900">
                 INSURANCE COVERAGE AT ABSOLUTE WELLNESS SERVICES (AWS) 
               </h2>
               <p className="text-md md:text-md text-gray-900 mb-4">
                 At AWS, we are committed to providing accessible and comprehensive care for those seeking recovery.  
                 We understand the struggles associated with addiction and offer seamless efforts to foster treatment compliance by working with major insurance companies to provide all the help needed in your recovery.  
                </p>
                <h3 className="text-2xl mb-3 text-indigo-900">
                 In-Network Insurance Plans 
                </h3>
                <p className="text-md md:text-md text-gray-900 mb-4">
                 Hygea Healthcare is proud to accept CareFirst in-network insurance plans, offering coverage for our specialized services, including detox. , behavioral health services, and wound care .
                </p>
                <Image 
                    src='/carefirst.png'
                    alt='carefirst'
                    width={500}
                    height={500}
                    />
                <h4 className="text-l mb-3 font-bold text-indigo-900">
                 Other insurance accepted include : 
                </h4>
                <ol className="text-md md:text-md text-gray-900 mb-4 list-disc pl-3 space-y-2">
                 <li>Medical/Health Choice</li>
                 <li>Medicare</li>
                 <li>Aetna</li>
                 <li>BlueCross BlueShield (all HMO ad PPO)</li>
                 <li>CareFirst (all HMO and PPO)</li>
                 <li>Cigna</li>
                </ol>
                <h3 className="text-2xl mb-3 font-bold text-indigo-900">
                 OUR PATIENT REFERRAL FORM 
                </h3>
                <h4 className="text-xl mb-3 text-indigo-900">
                 Out-of-Network Private Insurance 
                </h4>
                <p className="text-md md:text-md text-gray-900 mb-4">
                    If you have a private insurance plan that is not in-network, we can still help.  
                    We equally offer sliding scale fees for eligible individuals.  
                </p>
            <hr className="border-t-4 border-dashed border-gray-500 mb-6" />
                <p className="text-md text-center font-bold text-gray-800">
                  <Phone className="inline-block mr-2 text-green-600" /> Call us at{" "}
               <Link 
                    href="tel:+14437123202" 
                    className="text-blue-500 hover:text-blue-700 underline transition-colors"
                    aria-label="Call us at 410-512-9525"
                    >
                    (443) 712-3202
               </Link>
                 {" "}or fill out our contact form below.
              </p>
      <hr className="border-t-4 border-dashed border-gray-500 my-6" />
      <p className="text-sm text-center font-bold text-gray-800">
       Your healing journey is our top priority. Allow us to guide you toward a brighter, healthier future.
      </p>
    </div>
    <ContactDiv />
  </div>
 );
}

export default page