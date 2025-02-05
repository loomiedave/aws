'use client';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] sm:h-[100vh] md:h-[100vh] transition-all duration-500 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("/main.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-indigo-600/60 md:bg-gradient-to-b from-white via-white/0 to-indigo-900/80 via-30%" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 z-10">
        <hr className="border-t-1 border-double mx-auto w-3/4 border-gray-200 mb-8 sm:mb-16" />
        <h1 className="max-w-6xl text-xl sm:text-2xl md:text-5xl font-bold mb-4 sm:mb-6 opacity-0 animate-[fadeIn_1s_ease-in_forwards] text-white drop-shadow-xl">
          ABSOLUTE WELLNESS SERVICES: Your comprehensive solution for addiction treatment and mental health services.
        </h1>
        <p className="text-base sm:text-xl mb-4 sm:mb-16 opacity-0 animate-[fadeIn_1s_ease-in_0.3s_forwards] text-white/90 drop-shadow">
          AWS is dedicated to utilizing cutting-edge innovations to optimize the standard of care for our patients,
          ensuring that they receive the evidence-based, individualized, patient-centered, compassionate, and effective
          treatment available on their path to recovery.
        </p>
        <Link
          href="/get-started"
          className="group relative px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-base sm:text-lg opacity-0 animate-[fadeIn_1s_ease-in_0.6s_forwards]"
        >
          <span className="absolute inset-0 bg-white rounded-lg transition-all duration-300 group-hover:scale-105"></span>
          <span className="relative text-purple-600 font-semibold">
            Get Started
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;