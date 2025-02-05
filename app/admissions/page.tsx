import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AdmissionsPage: React.FC = () => {
  const admissionSteps = [
    {
      title: "Initial Screening",
      description: "Our intake staff conducts a thorough screening to determine the appropriate treatment modality for your needs.",
      icon: "/screening.jpg"
    },
    {
      title: "Treatment Level Assessment",
      description: "We evaluate eligibility for levels I, II.I, III.I, or III.III treatment modalities based on your specific situation.",
      icon: "/assessment.jpg"
    },
    {
      title: "Schedule Intake",
      description: "If appropriate, we schedule your intake/admission appointment within 5 days of initial contact.",
      icon: "/schedule.jpg"
    },
    {
      title: "Begin Treatment",
      description: "Start your personalized treatment program with our dedicated team of professionals.",
      icon: "/treatment.jpg"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/admissions.jpg")',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-indigo-700/60 md:bg-gradient-to-b from-white via-white/0 to-indigo-900/80 via-40% flex items-center justify-center">
          <div className="text-center text-white px-6 space-y-6 animate-[fadeIn_1s_ease-in_forwards]">
            <h1 className="text-5xl md:text-6xl font-bold">Admissions</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Your Journey to Recovery Starts Here
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="admissions-info" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">Welcome to Absolute Wellness Services</h2>
            <p className="text-gray-700 text-lg mb-6">
              At Absolute Wellness Services, we are dedicated to providing evidence-based, individualized care to those struggling with substance use disorders (SUD). We admit clients daily, Monday – Friday, and our unique approach ensures that each individual receives the personalized care they need, making you feel valued and understood in your journey to recovery.
            </p>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-indigo-900 mb-4">Hours of Operation</h3>
              <p className="text-indigo-900">Monday through Friday | 7 am - 9 pm</p>
            </div>
          </div>

          {/* Admission Process */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">Our Admission Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {admissionSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to start your admission process. Our caring team is here to guide you through every step.
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <button className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300">
                Contact Admissions
              </button>
            </Link>
            <a href="tel:+1234567890" className="inline-block">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300">
                Call Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;