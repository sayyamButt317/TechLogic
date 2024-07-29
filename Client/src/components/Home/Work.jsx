
import StepperWidget from "../../Utils/StepperWidget";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Work = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-10 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10 md:gap-16">

          {/* Text Content */}
          <div className="lg:w-1/2 text-gray-800">
            <h2 className="text-sky-400 text-sm font-medium mb-2">HOW WE WORK</h2>
            <div className="space-y-2">
              <h3  data-aos="fade-right"
            data-aos-duration="600"  className="text-2xl md:text-3xl font-bold">WORKED WITH START-UPS AND</h3>
              <h3  data-aos="fade-left"
            data-aos-duration="600" className="text-2xl md:text-3xl font-bold">MORE ESTABLISHED COMPANIES</h3>
            </div>
            <p    data-aos="fade-left"
            data-aos-duration="600" className="mt-6 text-base md:text-lg leading-relaxed">
              We are a boutique software agency, intentionally staying small to maintain the exceptional quality of our team. This allows us to be selective about the clients and products we partner with. 
            </p>
            <p     data-aos="fade-left"
            data-aos-duration="600" className="mt-4 text-base md:text-lg leading-relaxed">
              We prioritize outcome-driven development and seek out companies we can truly help deliver a significant impact for their customers. 
            </p>

            {/* Button */}
            <motion.button
              onClick={() => navigate("/About")}
              whileHover={{ scale: 1.1 }}
              className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md shadow-md hover:shadow-lg transition duration-200"
            >
              Learn More
            </motion.button> 
          </div>

          {/* Stepper Widget */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <StepperWidget /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
