import React from 'react';
import Link from 'next/link';

const HomeButtomDiv = () => {
  return (
    <div className="relative md:h-[80vh] flex justify-center items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/contact-bg.jpg")',
          backgroundPosition: 'center'
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-indigo-800/70 backdrop-blur-md" />
      <div id="deev" className="relative text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white">Have questions or need support?</h1>
        <h2 className="text-2xl font-bold text-center">We Are Ready to Help</h2>
        <p className="text-lg text-center">Reach out to our compassionate team for assistance and guidance on your road to recovery.</p>
        <p>
          <Link href="/contact">
            <button 
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-4 px-6 mb-4 rounded-sm transition-color" >
              CONTACT US
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomeButtomDiv;