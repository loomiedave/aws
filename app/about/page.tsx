import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import About from '../components/About';

const AboutPage: React.FC = () => {
  const peopleDetails = [
    {
      name: 'Dr. Lawrence Afuecheta, DNP, MBA, APRN',
      role: 'CEO, ABSOLUTE WELLNESS SERVICES ',
      image: '/lawrence-afuecheta.jpg',
      bio: `Dr. Lawrence Afuecheta applies empathy, critical thinking, active listening,
       and other essential skills in delivering high-quality care to his clients.
       He believes in innovation, evidence-based practices, and shared decision-making when devising patient-centered treatment plans.
       Dr. Lawrence has been a registered psychiatric nurse for over 11 years and has been a Psychiatric nurse practitioner for over 5 years. 
       Dr. Lawrence has managed patients with diagnoses of schizophrenia spectrum, bipolar disorders, mood disorders, anxieties, personality disorders, 
       and many other mental health diagnoses both in the outpatient and in-patient settings.`,
      education: [
        `Academically, Dr. Lawrence Afuecheta has a Bachelor of Science in Geological Sciences, a Bachelor of Science in Nursing from the University of Maryland Baltimore`,
        `Master's in Business Administration (MBA) from the University of Wales in the United Kingdom`,
        `He also acquired his Master's in Nursing Practice from Walden University 
        and his Doctorate in Nursing Practice from the University of South Alabama, specializing in Psychiatric Mental Health`,
      ],
      additionalNote: `Outside of work, Dr. Lawrence Afuecheta enjoys traveling as a part of his self-care routine, reading, and making friends.`
    },
    {
      name: 'Dr. Survival Afuecheta, DNP, CRNP, FNP-B, FNP-BC, CWCN-AP',
      role: 'COO, MEDICAL DIRECTOR- ABSOLUTE WELLNESS SERVICES ',
      image: '/survival-afuecheta.png',
      bio: `Dr. Survival Afuecheta is highly compassionate and committed to fighting the war on drugs.
        Dr. Afuecheta has a wealth of knowledge that stems from her clinical background of working with high-severity-risk patients in Baltimore and its environs.
        As an advanced wound care provider, she utilized advanced therapies and evidence-based guidelines on her patients, which resulted in a higher healing rate. 
        Her passion for working with patients with complex wounds who have a history of substance use disorder fueled her interest in Addiction.  
        Dr. Survival Afuecheta has an immense wealth of knowledge from providing treatments to patients battling with Addiction at different levels of care ranging from Evaluation, 
        Crisis Stabilization, Maintenance, and Rehabilitation. Her job roles include managing patients with Addiction in diverse settings, including in-patient and out-patient settings.`,
      education: [
        `Dr. Survival Afuecheta has a Bachelor of Science in Geological Sciences;
         she developed an interest in healthcare and got into nursing 
         She completed her Bachelor of Science in Nursing at Coppin State University in Maryland.`,
        `She returned to Coppin State University for her advanced degree, where she earned her Master of Science and Family Nurse Practitioner degrees.
         She completed her doctorate at the University of South Alabama, Mobile, and obtained her certificate in addiction from the University of South Alabama.
         She also completed a certificate program in wound care at Emory University, Georgia.`,
        `She holds dual National Board Certification with the American Academy of Nurse Practitioners 
        (AANP) and the American Nurses Credentialing Center (ANCC) as a Family Nurse Practitioner.`,
        `She obtained her advanced practice wound care certification from the Wound, Ostomy, and Continence Nursing Certification Board (WOCNCB). `,
        `She is equally DOT certified. Dr. Survival Afuecheta adopts Myra Levines
         Conservation Model of Nursing model, which emphasizes holistic and individualized patient care.
        She enjoys conducting Quality improvement research geared towards improving patient outcomes.  `
      ],
      additionalNote: `Dr. Survival Afuecheta has over 11 years of nursing experience and an extensive background in specialties such as Neurology,
       Addiction, and wound care.Outside of work, Dr. Survival Afuecheta enjoys fashion, reading, cooking, and making friends.`
    },
    // Add more people here
  ];
  
  return (
    <div className='bg-white'>
      <div className="relative h-[50vh] md:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/about-bg.jpg")', 
          backgroundPosition: 'center'
        }}
      >
      <div className="absolute inset-0 bg-indigo-600/60 md:bg-gradient-to-b from-white via-white/0 to-indigo-900/80 via-30% flex items-center justify-center">
        <div className="text-center text-white px-6 space-y-6 animate-[fadeIn_1s_ease-in_forwards]">
          <h1 className="text-5xl md:text-6xl font-bold animate-[fadeIn_1s_ease-in_forwards]">
            ABOUT US
          </h1>
          <div>
            <Link href="/contact">
              <button className="bg-indigo-600 hover:bg-indigo-700 
                text-white font-bold py-3 px-6
                transition-all duration-300 transform hover:scale-[1.05]">
                CONTACT US
              </button>
            </Link>
          </div>
          <Link href="/">
            <button className="hidden md:block md:mx-auto underline text-center text-indigo-200 hover:text-indigo-400 transition-all duration-300 transform hover:scale-[1.05]">
                Home Page
            </button>
          </Link>
        </div>
       </div>
      </div>
      <About />

      <div className="relative h-[20vh] md:h-[50vh] flex justify-center items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/leadership.jpg")',
          backgroundPosition: 'center'
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-indigo-800/70" />
       <div className="relative text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white">LEADERSHIP TEAM</h1>
      </div>
    </div>
      {/* People Section */}
      {peopleDetails.map((person,index) => (
      <div key={index} className="container mx-auto px-16 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* People Image - Larger on PC */}
          <div className="flex justify-center">
            <div className="w-64 h-64 lg:w-96 lg:h-96 md:w-96 md:h-96 relative 
              transform transition-all duration-300 hover:scale-105">
              <Image 
                src={person.image}
                alt={person.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg"
              />
            </div>
          </div>

          {/* CEO Bio */}
          <div className='md:w-full'>
            <h2 className="text-3xl font-bold mb-4 text-indigo-900">
              {person.name}
            </h2>
            <p className="text-xl text-indigo-900 mb-4">
              {person.role}
            </p>
            <p className="text-gray-700 mb-6">
              {person.bio}
            </p>
            <p className="text-gray-900 font-semibold mb-6">
              {person.additionalNote}
            </p>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-indigo-900">
                Education
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {person.education.map((degree, index) => (
                  <li key={index}>{degree}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>))}
    </div>
  );
};

export default AboutPage;