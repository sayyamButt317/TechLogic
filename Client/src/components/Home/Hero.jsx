import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SocialIcons from "../../Utils/socialicons";
import Header from "../../Utils/Header";
function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 overflow-hidden bg-gradient-to-b from-gray-0 via-gray-200 to-gray-300 pt-16">
      <Header />

      {/* Company Title and Description */}
      <div className=" space-y-6 pb-[300px] pt-28 md:pb-[200px] lg:pb-[300px] ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="max-w-[300px] font-md text-6xl xs:max-w-none md:text-8xl ">
            AI Solutions
            <br />
            For The Future
          </h1>
          <p className="max-w-[460px] text-base text-gray-700 sm:text-lg">
            TechLogic is a full-service digital consultancy partnering with
            clients to provide creative solutions in design and technology
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Buttons */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/Service")}
              className="bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-200"
            >
              Explore Our Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/Contact")}
              className="border border-white text-black font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black shadow-md transition duration-200"
            >
              Contact Us
            </motion.button>
          </div>
          {/* <SocialIcons /> */}
        </motion.div>
      </div>

      {/* Sidebar */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:right-16 lg:right-24 xl:right-32 2xl:right-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* <Sidebar /> */}
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
