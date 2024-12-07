import { useState, useEffect } from 'react';
import c1 from '../assets/carousel-1.jpg';
import c2 from '../assets/carousel-2.jpg';
import c3 from '../assets/carousel-3.jpg';
import c4 from '../assets/carousel-4.jpg';
import c5 from '../assets/carousel-5.jpg';
import c6 from '../assets/carousel-6.jpg';

const carouselImages = [c1, c2, c3, c4, c5, c6];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % carouselImages.length
    );
  };

  return (
    <div className="relative w-full mt-[70px]">
      <div className="relative w-full h-[900px]">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700
              ${currentIndex === index ? 'opacity-100 z-0' : 'opacity-0'}`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2  hover:bg-white px-2 py-4 cursor-pointer z-20"
        >
          <span className="text-6xl font-bold">‹</span>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 hover:bg-white px-2 py-4 cursor-pointer z-20"
        >
          <span className="text-6xl font-bold">›</span>
        </button>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
}