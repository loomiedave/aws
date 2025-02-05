import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServicesPage: React.FC = () => {
  const services: ServiceCard[] = [
    {
      title: "Community Housing (BH)",
      description: "Integrated treatment for substance use disorders and mental health in a supportive community environment. Our housing program provides a stable foundation for recovery.",
      image: "/communityhousing.jpg",
      link: "/contact"
    },
    {
      title: "Detoxification/Withdrawal Management",
      description: "Professional residential care for substance use disorders and addictions. Our medical team provides 24/7 support through the withdrawal process with evidence-based protocols.",
      image: "/detox.jpg",
      link: "/contact"
    },
    {
      title: "Outpatient Treatment (BH)",
      description: "Flexible integrated treatment programs for substance use disorders and mental health, allowing you to maintain daily responsibilities while receiving care.",
      image: "/outpatient-treatment.jpg",
      link: "/contact"
    },
    {
      title: "Residential Treatment (BH)",
      description: "Comprehensive integrated care for substance use disorders and mental health in a structured residential setting.",
      image: "/residential.jpg",
      link: "/contact"
    }
  ];

  const treatments = [
    {
      title: "Alcohol Abuse",
      description: `If you or your loved one is struggling with Alcohol addiction, trust Absolute Wellness Services for your comprehensive treatment to jumpstart your sobriety. We offer individualized, evidence-based treatments combining traditionally effective therapies and holistic wellness practices. Our approach has enabled numerous people to sustain sobriety.`,
      ctaText: "Get Help Today",
      image: "/alcohol.jpg"
    },
    {
      title: "Drug Addiction & Detox",
      description: `Absolute Wellness Services is here for you if you are battling a drug addiction. We assist with withdrawal management while going through detox, and we will treat your co-occurring medical and mental health diseases related to Addiction. We understand that everyone's story is different, so we are here for you on this journey.`,
      ctaText: "Start Recovery",
      image: "/addiction.jpg"
    },
    {
      title: "Aftercare",
      description: "Post-discharge, our team will work with you to connect you to resources aimed at relapse prevention, which will help you in your recovery journey.",
      ctaText: "Learn More",
      image: "/aftercare.jpg"
    },
    {
      title: "Intensive Outpatient Program",
      description: "Structured outpatient treatment providing comprehensive care while maintaining daily life responsibilities.",
      ctaText: "Explore Program",
      image: "/iop.jpg"
    },
    {
      title: "Residential Rehab",
      description: "We offer housing assistance while we continue to foster relapse prevention.",
      ctaText: "Find Support",
      image: "/rehab.jpg"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/services.jpg")',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-indigo-700/60 md:bg-gradient-to-b from-white via-white/0 to-indigo-900/80 via-30% flex items-center justify-center">
          <div className="text-center text-white px-6 space-y-6 animate-[fadeIn_1s_ease-in_forwards]">
            <h1 className="text-5xl md:text-6xl font-bold">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Comprehensive care for mental health and substance use disorders
            </p>
          </div>
        </div>
      </div>

      {/* Primary Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8" id="primary-services">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link href={service.link}>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Treatment Programs Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4" id="treatments">
          <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">
            Treatments at a Glance: Aimed at Fostering Remission and Relapse Prevention 
          </h2>
          <div className="space-y-12">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-[400px] md:h-full">
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-indigo-900 mb-4">
                      {treatment.title}
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {treatment.description}
                    </p>
                    <Link href="/contact">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 self-start">
                        {treatment.ctaText}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey to Recovery?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is here to help you every step of the way. Contact us today to learn more about our programs and how we can support your recovery.
          </p>
          <Link href="/contact">
            <button className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300">
              Contact Us Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;