import { useState, useEffect, useCallback } from 'react';
import items from './productsList';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => 
      prev > 0 ? prev - 1 : items.length - 5
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
    <section id="services" className="full p-4 text-white relative mt-8 mx-4 mb-4 border-2 rounded-[4rem] bg-black shadow-black shadow-lg">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-100 rounded-[4rem] z-5">

        </div>
        <div className="relative top-0 left-0 w-full h-full z-10 overflow-hidden rounded-[3rem] px-6 services-screen">
          <h2 className="text-xl mb-4 mt-4 text-center">Our</h2>
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Services</h2>
          <div 
            className="flex flex-col w-full mx-0 py-4 mx-2 items-center h-[30rem] lg:h-[26rem]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className=" flex justify-center items-center h-full space-x-4 overflow-hidden">
              {items.slice(currentIndex, currentIndex + 5).map((item, index) => (
                <div 
                  key={item.id}
                  className={`
                    flex flex-col flex-shrink-0 flex-grow-1 w-48 h-fit text-left justify-between items-center
                    text-slate-950 bg-neutral-50 opacity-100 rounded-lg shadow-lg h-72
                    transition-transform duration-300 cursor-pointer
                    ${index === 2 ? 'scale-110 border border-solid border-blue-600' : 'scale-90 opacity-75'}
                    px-4 py-6
                    md:w-72 md:h-[16rem]
                    lg:w-72 lg:h-[16rem]
                  `}
                >
                  
                  <h2 className={`rounded-full border border-solid w-fit p-2
                                  ${index === 2 ? 'border-blue-600 duration-700' : 'border-current'}`}>{item.icon}</h2>
                  <h3 className={`text-xl font-bold
                                  ${index === 2 ? 'text-blue-600' : 'text-current'}`}>{item.title}</h3>
                  <p className=''>{item.content}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-row justify-center items-center mt-8 gap-4">
              <ArrowLeft onClick={prevSlide} className="w-8 h-8 cursor-pointer" />
              {/* Dots Navigation */}
            <div className="flex justify-center space-x-2">
              {items.slice(0, 5).map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    w-4 h-4 cursor-pointer rounded-full transition-colors delay-300 duration-700
                    ${index === 2 ? 'bg-blue-600 scale-110' : 'bg-gray-300 scale-90'}
                  `}
                > &nbsp;
                </div>
              ))}
            </div>
                <ArrowRight onClick={nextSlide} className="w-8 h-8 cursor-pointer" />
            
              </div>
        </div>
    <div className="flex justify-center mt-8">
          <a href="#contact">
            <button className="bg-blue-600 text-white px-12 py-3 rounded-lg flex items-center justify-center gap-2">
                  Get In Touch
            </button>
          </a>
          </div>
        </div>
      </section>
  );
};

export default Carousel;