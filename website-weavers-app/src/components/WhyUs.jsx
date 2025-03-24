import { useState } from 'react';

import whyUs from '../assets/images/why-us.jpeg';
import design from '../assets/images/design.jpeg';
import develop from '../assets/images/develop.jpeg';

import { ChartPie } from 'lucide-react';


const WhyUs = () => {
  
    const [activeImage, setActiveImage] = useState(0);
    const reasons = [
        { 
          title: 'Website Design', 
          description: 'We believe in the power of design to tell your brand story, crafting unique visuals that reflect your identity and values', 
          icon: <ChartPie size='32' color='#3b82f6' />,
          image: whyUs
        },
        { 
          title: 'Showcase Your Brand',
          description: 'We work closely with you to understand your operational challenges and deliver software that addresses them effectively.',
          icon: <ChartPie size='32' color='#3b82f6' />,
          image: design
        },
        { 
          title: 'Meet Business Needs', 
          description: 'We combine technical expertise with creative flair to deliver seamless, high-performing websites tailored to your business needs.',
          icon: <ChartPie size='32' color='#3b82f6' />,
          image: develop
        },
    ];

    return (
        <section id="why-us" className="px-0 py-16 bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div className=" mx-0 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold m-6 text-center">Why choose us</h2>
          <h2 className="text-3xl text-blue-500 font-bold mb-12 text-center">On your next project</h2>
          <div className="flex flex-col gap-8 w-5/6">
            {/*<div className='w-full px-0 h-96 rounded-lg overflow-hidden'>
              <img src={whyUs.src} alt="Why Us" className="w-full h-96 object-cover " />
              <p className="text-center text-gray-600 italic mb-12">
                The innovation consists in seeing what everyone has seen and in thinking what no one has thought.
              </p>
            </div>*/}
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
                {/* Stack all images on top of each other */}
                {reasons.map((reason, index) => (
                    <img
                        key={index}
                        src={reason.image.src}
                        alt={`Image ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                            ${activeImage === index ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>
            <div className=''>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                  <div key={index} className={`p-8 rounded-md transition duration-300 ${activeImage === index ? 'bg-slate-200 dark:bg-gray-900 ' : 'bg-none'} hover:bg-slate-200 dark:hover:text-white dark:hover:bg-gray-700 dark:border-white cursor-pointer shadow-lg flex flex-col justify-center`}
                    onMouseEnter={() => setActiveImage(index)}
                    >
                    <div className='flex flex-row gap-4 mb-4 items-center'>
                      {reason.icon}  
                      <h3 className="text-xl font-bold text-left">{reason.title}</h3>
                    </div>
                    <p className="text-gray-600 text-left dark:text-slate-400">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default WhyUs;