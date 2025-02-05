import React from 'react';
import { 
  Wine, 
  Pill, 
  HeartPulse, 
  HandHeart, 
  NotebookPen , 
  Home 
} from 'lucide-react';
import Link from 'next/link';

const Treatmentgrid = () => {
  const services = [
    {
      icon: Wine,
      label: 'Alcohol Abuse',
      url: '/services/drug-addiction',
    },
    {
      icon: Pill,
      label: 'Drug Addiction',
      url: '/services/drug-addiction',
    },
    {
      icon: HeartPulse,
      label: 'Detox',
      url: '/services/drug-addiction',
    },
    {
      icon: HandHeart,
      label: 'Aftercare',
      url: '/services/drug-addiction',
    },
    {
      icon: NotebookPen,
      label: 'Intensive Outpatient Program',
      url: '/services/drug-addiction',
    },
    {
      icon: Home,
      label: 'Residential Rehab',
      url: '/services/drug-addiction',
    },
  ];

  return (
    <div className="container bg-gray-200 mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {services.map((service, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow "
          >
            <Link
              href={service.url}
              key={index}
              className="block"
             >
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-200 hover:bg-indigo-400 transition-colors mb-4">
            <service.icon 
                className="w-12 h-12 text-indigo-600"
                strokeWidth={1.5}
            />
            </span>
            </Link>
            <span className="text-lg font-semibold text-gray-800 text-center">
              {service.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatmentgrid;