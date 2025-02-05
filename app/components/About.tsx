'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="container mx-auto px-2 py-14">
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

        <div className="flex flex-col justify-start p-4 md:w-full">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-indigo-900">
            Absolute Wellness Treatment Services:  Integrative Healthcare for Substance Use Recovery and Mental Well-Being
          </h1>
          
          <div className="space-y-4 text-md text-gray-800">
            <p>
              Absolute Wellness Treatment Services is a comprehensive integrative healthcare 
              service that manages individuals with substance use disorder and other co-occurring 
              medical and mental health diagnoses. Our passion is to offer innovative, individualized,
               evidenced-based, proven, and effective treatment. We understand that our patient's struggle
                with substance use disorder is unique, and we are here to guide you toward achieving complete
                 remission with confidence in our evidence-based practices. 
            </p>

            {/* Conditionally rendered additional sections */}
            {isExpanded ? (
              <div className="space-y-6 lg:flex lg:flex-col">
                <div className="bg-indigo-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-900">Our Mission</h2>
                  <p>
                    To empower individuals suffering from the disease of addiction to live an
                    abstinence-based recovery and to become positive and productive members of
                     mainstream society, regardless of race, religion, national origin, socioeconomic 
                     status, mental health, gender, sexual orientation, or medical health status. 
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-900">Our Philosophy</h2>
                  <p>
                   Addiction is a disease caused by dependence or abuse of mood-altering and mind-altering chemicals.
                    Recovery can be achieved only through total abstinence; this requires treatment that focuses on 
                    attaining abstinence, maintaining abstinence, preventing relapse, and utilizing the twelve-step program approach. 
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-900">Our Goals</h2>
                  <p>
                    To identify and address the psychological and biological components of substance abuse/dependency by providing on-site psychotherapy and counseling to adults who suffer from the disease of addiction. 
                    <p>To increase the availability of treatment opportunities for community residents who suffer from the disease of addiction.</p> 
                    To serve as a liaison and educator to the concept of substance abuse treatment, the disease of addiction, and how addiction impacts the family, community, and society as a whole. 
                   </p>
                </div>
              </div>
            ) : null}

            <span 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-indigo-700 font-semibold hover:text-blue-400 transition-colors cursor-pointer"
            >
              {isExpanded ? 'Show Less <' : 'Read More >'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;