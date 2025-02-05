import React from 'react';
import Head from 'next/head';

interface Service {
  id: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 'community-housing',
    title: 'Community Housing',
    description: 'Integrated SUD/Mental Health support services'
  },
  {
    id: 'detox',
    title: 'Detoxification/Withdrawal Management',
    description: 'Residential treatment for substance use disorders and addictions'
  },
  {
    id: 'outpatient',
    title: 'Outpatient Treatment',
    description: 'Integrated SUD/Mental Health comprehensive care'
  },
  {
    id: 'residential',
    title: 'Residential Treatment',
    description: 'Comprehensive integrated SUD/Mental Health residential care'
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Absolute Wellness Services</title>
      </Head>
      
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900 
        transform transition-all duration-500 hover:scale-[1.02]">
        Our Treatment Services
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white shadow-lg rounded-lg p-6 
            transform transition-all duration-300 
            hover:scale-105 hover:shadow-xl 
            hover:bg-blue-50"
          >
            <h2 className="text-xl font-semibold mb-4 text-blue-800">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
            <button className="mt-4 bg-blue-500 text-white 
              px-4 py-2 rounded 
              hover:bg-blue-600 
              transition-colors 
              transform hover:scale-[1.05]">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;