'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const images = [
    "/sliderimages/aetnalogo.jpg",
    "/sliderimages/amerigrouplogo.jpg",
    "/sliderimages/beconhealthlogo.jpg",
    "/sliderimages/bluecrosslogo.jpg",
    "/sliderimages/cignalogo.jpg",
    "/sliderimages/coventrylogo.jpg",
    "/sliderimages/humanalogo.jpg",
    "/sliderimages/medicaidlogo.jpg",
    "/sliderimages/medicarelogo.jpg",
    "/sliderimages/multiplanlogo.jpg",
    "/sliderimages/optumlogo.jpg",
  ];

  
  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setSlidesToShow(3);
      } else if (screenWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };
    
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + slidesToShow) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slidesToShow, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + slidesToShow) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - slidesToShow < 0 ? images.length - slidesToShow : prev - slidesToShow
    );
  };

  
  const totalGroups = Math.ceil(images.length / slidesToShow);
  const activeGroup = Math.floor(currentIndex / slidesToShow);

  return (
    <div className="relative w-full bg-transparent" style={{ height: '20vh' }}>
      <div className="relative w-full h-full overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full gap-2"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {images.map((img, index) => (
            <div 
              key={index}
              className="flex-shrink-0 h-full"
              style={{ 
                width: `calc(${100 / slidesToShow}% - 0.5rem)`
              }}
            >
              <img
                src={img}
                alt={`Insurance Provider ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

    
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {[...Array(totalGroups)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * slidesToShow)}
            className={`w-2 h-2 rounded-full ${
              activeGroup === index ? 'bg-indigo-700' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;