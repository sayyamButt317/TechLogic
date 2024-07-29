import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import questiongirl from "../../assets/questiongirl.jpg";

const points = [
  {
    number: "01",
    title: "Expert Team",
    description: "Our diverse team delivers custom solutions tailored to your specific needs.",
  },
  {
    number: "02",
    title: "Industry Leading",
    description: "Achieve industry success with our innovative and proven solutions.",
  },
  {
    number: "03",
    title: "Global Reach",
    description: "Collaborate seamlessly with our team, regardless of your location or time zone.",
  },
  {
    number: "04",
    title: "24/7 Customer Support",
    description: "We prioritize your satisfaction with round-the-clock customer support.",
  },
  {
    number: "05",
    title: "Client-Centric Approach",
    description: "Experience personalized support that consistently exceeds your expectations.",
  },
];

const WhyUs = () => {
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  // Staggered animation effect
  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i <= activeIndex; i++) {
        await controls.start({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.2 }, 
        });
      }
    };
    sequence();
  }, [activeIndex, controls]);

  // Auto-cycling of points
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % points.length);
    }, 5000); // Increased interval to 5 seconds for better readability
    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <p className="text-red-600 text-md">Why TechLogic</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Why TechLogic Stands Out As Your Premier Digital Partner?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Points List */}
          <div className="lg:w-1/2">
            <ul className="space-y-4">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  className={`flex items-center space-x-4 p-4 rounded-md shadow-md ${
                    activeIndex === index ? "bg-white" : "bg-gray-100 opacity-70"
                  }`}
                >
                  <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center">
                    <span className="text-white font-bold">{point.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{point.title}</h3>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
              <img 
                src={questiongirl} 
                alt="Why TechLogic" 
                className="absolute inset-0 object-cover w-full h-full" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
