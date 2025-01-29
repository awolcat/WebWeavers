import { useState, useEffect } from "react";
import { CrossIcon, Minus } from "lucide-react";

import contact from "../assets/images/stepsImages/contact.svg";
import plan from "../assets/images/stepsImages/planning.svg";
import develop from "../assets/images/stepsImages/develop.svg";
import launch from "../assets/images/stepsImages/launch.jpg";

const Stepper = () => {
    const steps = [
        { title: "Step 1", heading: "Contact us", content: "We start with a detailed discussion about your business needs and goals.", image: contact },
        { title: "Step 2", heading: "Project planning", content: "Based on our consultation, we develop a comprehensive project plan.", image: plan },
        { title: "Step 3", heading: "Setup & development", content: "Our team begins building your project including SEO optimization.", image: develop },
        { title: "Step 4", heading: "Launch & optimization", content: "Once development is complete and you've approved the final product, we launch!", image: launch },
    ];
    const [step, setStep] = useState(0);

    const [isPlaying, setIsPlaying] = useState(true);

    // Auto-advance slides
  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setStep((prevIndex) => 
          prevIndex === steps.length - 1 ? 0 : prevIndex + 1
        );
      }, 10000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, steps.length]);

    return (
        <div id="how-to" className="ml-16">
            <h1 className="text-3xl font-bold m-8 text-center">How it works</h1>
            <h2 className="text-[36px] text-left p-0 font-bold w-full lg:w-[27rem] font-serif fadein-up">
                Reach more customers online and increase credibility everywhere.
            </h2>
            <div className="flex flex-row items-center justify-between flex-wrap-reverse lg:flex-nowrap">
                <div className="flex flex-col sm:w-4/5 md:w-3/5 lg:w-2/5">
                    {steps.map((item, index) => (
                        <div key={index} className="flex flex-col w-full">
                            <div className="flex flex-row items-center ">
                                <div
                                    className={`p-2 m-2 border-2 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer
                                        ${index === step ? "bg-black text-white " : "bg-white hover:bg-gray-100"}`}
                                    onClick={() => {setStep(index); setIsPlaying(false);}}
                                >
                                    {index === step ? <Minus size={16}/> : <CrossIcon size={16} />}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold">{item.heading}</h3>
                                </div>
                            </div>
                            <div 
                                className={`transition-all duration-600 ease-in-out
                                    ${index === step ? "opacity-100 translate-x-0" : "opacity-50 -translate-x-2"}
                                `}
                            >
                                <div className={`${index === step ? "h-auto p-4 pr-16 text-left rounded mt-2 border-l-2 border-grey-500 ml-8": " hidden h-0"} `}>
                                    {item.content}
                                    {isPlaying && (<div className="absolute left-0 top-0 w-[2px] ml-8 bg-black" 
                                        style={{
                                            animation: `lineProgressVertical 10s linear`,
                                            height: '0'
                                        }} />)}
                                </div>
                            </div>
                        </div>
                    ))}
                    <a href="#contact">
                        <button className="bg-black text-white w-3/4 justify-self-center self-center mt-16 px-6 py-3 rounded-lg flex justify-center items-center hover:scale-105 transition-transform duration-300">
                            Get Started 
                        </button>
                    </a>
                </div>
                <div className="w-5/5 lg:w-3/5 m-4 ml-0 p-4 h-[35rem] rounded-lg bg-black self-end justify-self-end"
                    >
                    <img src={steps[step].image.src} alt={steps[step].heading} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Stepper;