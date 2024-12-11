import { useState, useEffect, useCallback } from 'react';
import items from './productsList';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > minSwipeDistance) {
      nextSlide();
    }
    if (touchEnd - touchStart > minSwipeDistance) {
      prevSlide();
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => 
      prev < items.length - 5 ? prev + 1 : 0
    );
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => 
      prev > 0 ? prev - 1 : 0
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section id="services" className="w-full px-6 py-16 text-white">
        <div className=" mx-auto">
          <h2 className="text-xl mb-4 text-center">Our</h2>
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Services</h2>
    <div 
      className="flex flex-col w-full mx-auto py-4 items-center overflow-hidden h-[36rem] lg:h-[24rem]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex justify-center items-center h-full space-x-4 overflow-hidden">
        {items.slice(currentIndex, currentIndex + 5).map((item, index) => (
          <div 
            key={item.id}
            className={`
              flex flex-col flex-shrink-0 flex-grow-1 w-48 h-fit text-left justify-between
              text-slate-950 bg-neutral-50 opacity-100 rounded-lg shadow-lg
              transition-transform duration-300 cursor-pointer
              ${index === 2 ? 'scale-110 border border-solid border-blue-600' : 'scale-90 opacity-75'}
              px-4 py-6
              md:w-72 md:h-60
              lg:w-72 lg:h-60
            `}
          >
            <h2 className={`rounded-full border border-solid w-fit p-2
                            ${index === 2 ? 'border-blue-600' : 'border-current'}`}>{item.icon}</h2>
            <h3 className={`text-xl font-bold
                            ${index === 2 ? 'text-blue-600' : 'text-current'}`}>{item.title}</h3>
            <p className=''>{item.content}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {items.slice(0, 5).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-4 h-4 cursor-pointer rounded-full transition-colors duration-300
              ${index === 2 ? 'bg-blue-600' : 'bg-gray-300'}
            `}
          >
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-center mt-8">
          <button className="bg-blue-600 text-white px-12 py-3 rounded-lg flex items-center justify-center gap-2">
                Get In Touch
          </button>
          </div>
        </div>
      </section>
  );
};

export default Carousel;