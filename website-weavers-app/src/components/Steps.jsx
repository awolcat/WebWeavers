import { useState } from "react";

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

    return (
        <div>
            <h1>Steps</h1>
            <div className="flex flex-row p-8 gap-8 items-center justify-center">
                <div className="flex flex-col w-1/4">
                    {steps.map((item, index) => (
                        <div key={index} className="flex flex-col w-full">
                            <div className="flex flex-row items-center ">
                                <div
                                    className={`p-2 m-2 border-2 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer
                                        ${index === step ? "bg-blue-500 text-white rotate-90" : "bg-white hover:bg-gray-100"}`}
                                    onClick={() => setStep(index)}
                                >
                                    {index + 1}
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
                                <div className={`${index === step ? "h-auto p-4 text-left rounded mt-2 border-l-2 border-grey-500 ml-8": " hidden h-0"} `}>
                                    {item.content}
                                </div> 
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-2/4 m-4 p-4 h-[25rem] rounded-lg transition-all duration-300 ease-in-out bg-black">
                    <img src={steps[step].image.src} alt={steps[step].heading} className="w-full h-full object-cover translate-x-0" />
                </div>
            </div>
        </div>
    );
};

export default Stepper;