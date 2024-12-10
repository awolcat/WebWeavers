import ServiceCarouselCard from './ServiceCarouselCard';

import React, { useState, useEffect, useCallback } from 'react';
import items from './productsList';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // const items = [
  //   { id: 1, content: 'Item 1', color: 'bg-red-200' },
  //   { id: 2, content: 'Item 2', color: 'bg-blue-200' },
  //   { id: 3, content: 'Item 3', color: 'bg-green-200' },
  //   { id: 4, content: 'Item 4', color: 'bg-yellow-200' },
  //   { id: 5, content: 'Item 5', color: 'bg-purple-200' },
  //   { id: 6, content: 'Item 6', color: 'bg-pink-200' },
  //   { id: 7, content: 'Item 7', color: 'bg-orange-200' },
  //   { id: 8, content: 'Item 4', color: 'bg-yellow-200' },
  //   { id: 9, content: 'Item 5', color: 'bg-purple-200' },
  //   { id: 10, content: 'Item 6', color: 'bg-pink-200' },
  //   { id: 11, content: 'Item 7', color: 'bg-orange-200' }
  // ];

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
    <div 
      className="flex flex-col w-full mx-auto py-4 items-center overflow-hidden  h-[24rem]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex justify-center items-center h-full space-x-4 overflow-hidden">
        {items.slice(currentIndex, currentIndex + 5).map((item, index) => (
          <div 
            key={item.id}
            className={`
              flex flex-col flex-shrink-0 flex-grow-1 w-40 h-fit text-left justify-between
              text-slate-950 bg-neutral-50 opacity-100 rounded-lg shadow-lg
              transition-transform duration-300 cursor-pointer
              ${index === 2 ? 'scale-110 border border-solid border-blue-600' : 'scale-90 opacity-75'}
              px-4 py-6
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
        {items.slice(0, 4).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-3 h-3 rounded-full transition-colors duration-300
              ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;