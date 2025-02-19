import React from 'react';
import { 
  HeartHandshake, 
  HandHeart, 
  BookHeart,
  Handshake
} from 'lucide-react';

const PromiseDiv = () => {
  const services = [
    {
      icon: HeartHandshake,
      title: `Community Connection`,
      info: `We help you build strong connections with local 
          resources and support networks to enhance your recovery journey.`,
    },
    {
      icon: HandHeart,
      title: `Compassionate Care`,
      info: `We treat you with empathy and respect, offering a supportive 
        environment where you can feel safe and understood.`,
    },
    {
      icon: Handshake,
      title: `Experienced Team`,
      info: `Our skilled team combines expertise from various fields to 
       provide comprehensive and effective care.`,
    },
    {
      icon: BookHeart,
      title: `Personalized Approach`,
      info: `We tailor our treatment plans to fit your unique needs, 
        ensuring you receive the care and support you deserve.`,
    },
  ];

  return (
    <div className="relative mb-4 md:h-[150vh] ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/promise.jpg")',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-indigo-800/70" />
      <div className="relative h-full container mx-auto px-6 py-12">
      <hr className="border-t-1 border-double mx-auto w-3/4 border-white mb-6" />
       <h1 className="text-3xl md:text-5xl font-bold text-center text-white">OUR PROMISE TO YOU</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 h-full items-center">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center text-white p-6"
            >
                <span className="">
                  <service.icon 
                    className="w-16 h-16 mb-4"
                    strokeWidth={1.5}
                  />
                </span>
                <h1 className="text-xl md:text-2xl font-bold text-center">{service.title}</h1>
              <span className="text-md md:text-lg text-center">
                {service.info}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromiseDiv;