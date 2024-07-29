import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const StepperWidget = () => {
  const controls = useAnimation();
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i <= stepIndex; i++) {
        await controls.start({
          opacity: 1,
          x: 0,
          transition: { delay: i * 0.01 } // Stagger the animations
        });
      }
    };
    sequence();
  }, [stepIndex, controls]); // Rerun when stepIndex changes

  useEffect(() => {
    // Simulate progress automatically
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev < 2 ? prev + 1 : 0)); // Cycle through steps
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="flex ml-10 mt-6 border-l border-gray-200 pl-6">
        {[
          {
            number: '01',
            title: 'Feature / Function',
            description: 'We meet Your Requirement',
          },
          {
            number: '02',
            title: 'Solution',
            description: 'We solve your current problems',
          },
          {
            number: '03',
            title: 'Outcomes',
            description: 'We enable your Future Results',
          },
        ].map((step, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={controls}
                className={`mb-10 mr-6 ${stepIndex < index ? 'text-gray-300' : ''}`}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full ring-4 shadow-lg">
            <span className={`text-xl font-bold ${stepIndex < index ? 'text-gray-400' : 'text-blue-700'}`}>
              {step.number}
            </span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-2xl leading-tight mt-6">
                  {step.title}
                </h3>
                <p className="text-lg">{step.description}</p>
              </div>
            </motion.div>
        ))}
      </div>
  );
};

export default StepperWidget;
