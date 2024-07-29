import { motion } from "framer-motion";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";
import manwithlaptop from "../../assets/manwithlaptop.png";
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-h-[1050px] bg-black overflow-hidden">
      
    {/* Blurred Background Image */}
    <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-sm md:blur" // blur-sm for smaller screens, blur for larger
        style={{ backgroundImage: `url(${manwithlaptop})` }}
      />
      {/* Company Title and Description on the Left */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="absolute top-1/3 left-8 md:left-16 lg:left-24 xl:left-32 2xl:left-48 flex flex-col items-start justify-center h-1/2 text-white z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md sm:max-w-lg md:max-w-xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Welcome To <span className="text-purple-500">TechLogic</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
              We're dedicated to transforming your digital aspirations into reality. With our innovative software solutions and cutting-edge technology expertise, we empower businesses to thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Buttons */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/Service")}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-200"
              >
                Explore Our Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/Contact")}
                className="border border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black shadow-md transition duration-200"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
        {/* Heading */}
      <div className="absolute top-1/4 text-center ml-6  text-white z-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4"
        >
          TURN YOUR VISION INTO <br />
          <span className="text-purple-500">REALITY</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl"
        >
          Let's Start Building Together
        </motion.p>
      </div>
      </div>

      {/* Sidebar */}
      <div className="absolute bottom-10 right-10 md:right-16 lg:right-24 xl:right-32 2xl:right-48"> 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Sidebar />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
