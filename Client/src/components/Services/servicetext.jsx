import { motion } from 'framer-motion';
import { FaChartLine, FaCloud, FaLaptopCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Features = [
  {
    icon: <FaChartLine className="text-3xl text-blue-500 md:text-6xl" />,
    title: "Customized Solutions",
  },
  {
    icon: <FaCloud className="text-orange-400 text-4xl md:text-6xl" />,
    title: "Execution & Development",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-green-500 md:text-6xl" />,
    title: "Professional Expertise",
  }
];

function CompanyServices() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gradient-to-r from-blue-950 to-blue-950 py-20 h-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 p-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            OUR WORKING PROCESS
          </h1>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            TO GROW YOUR BUSINESS
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
            Our vision is to excel in innovative technological developments and to set a benchmark of excellence in providing IT solutions for global clients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {Features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mx-4"
            >
              <div
                className="flex items-center justify-center rounded-full bg-white h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 mb-4"
              >
                {feature.icon}
              </div>
              <span className="text-lg sm:text-xl md:text-2xl text-white mb-2">
                {feature.title}
              </span>
              <div className="flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                <span className="text-white text-sm sm:text-base">
                  Read More
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/Contact")}
            className="bg-white border border-white text-blue-500 font-bold px-6 py-3 rounded-full"
          >
            Contact Us!
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default CompanyServices;
