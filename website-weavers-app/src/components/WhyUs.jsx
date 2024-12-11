import whyUs from '../assets/images/why-us.jpeg';
import { ChartPie } from 'lucide-react';

const WhyUs = () => {
    return (
        <section id="why-us" className="px-0 py-16 bg-gray-50 border-b-4 border-gray-200">
        <div className=" mx-0">
          <h2 className="text-3xl font-bold mb-4 text-center">Why choose us</h2>
          <h2 className="text-3xl text-blue-500 font-bold mb-12 text-center">On your next project</h2>
          <div className='px-0 h-96 '>
            <img src={whyUs.src} alt="Why Us" className="w-full h-96 object-cover " />
          </div>
          <p className="text-center text-gray-600 italic mb-12">
            "The innovation consists in seeing what everyone has seen and in thinking what no one has thought."
          </p>
          <div className='max-w-6xl mx-auto'>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-md border-2 border-solid border-slate-100 shadow-lg ">
              <div className='flex flex-row gap-4 mb-4 items-center'>
                <ChartPie size='32' color='#3b82f6' />  
                <h3 className="text-xl font-bold">Website Design</h3>
              </div>
              <p className="text-gray-600">
                We believe in the power of design to tell your brand story, crafting unique visuals 
                that reflect your identity and values
              </p>
            </div>
            <div className="p-8 rounded-md border-2 border-solid border-slate-100 shadow-lg ">
              <div className='flex flex-row gap-4 mb-4 items-center'>
                <ChartPie size='32' color='#3b82f6' />  
                <h3 className="text-xl font-bold">Showcase Your Brand</h3>
              </div>
              <p className="text-gray-600">
                We work closely with you to understand your operational challenges and deliver 
                software that addresses them effectively.
              </p>
            </div>
            <div className="p-8 rounded-md border-2 border-solid border-slate-100 shadow-lg ">
              <div className='flex flex-row gap-4 mb-4 items-center'>
                <ChartPie size='32' color='#3b82f6' />  
                <h3 className="text-xl font-bold">Meet Business Needs</h3>
              </div>
              <p className="text-gray-600">
                We combine technical expertise with creative flair to deliver seamless, 
                high-performing websites tailored to your business needs.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
};

export default WhyUs;