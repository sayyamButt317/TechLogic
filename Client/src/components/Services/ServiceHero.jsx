import { motion } from 'framer-motion';
import globe from "../../assets/globe.jpg";
import { useNavigate } from "react-router-dom"

function ServicePage() {
  const navigate = useNavigate();

  return (
      
        <div className=" w-full py-16 bg-cover bg-center h-screen" style={{ backgroundImage: `url(${globe})` }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white text-center justify-between">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="text-center"
            >
              <h1 className="text-4xl font-medium md:text-4xl lg:text-5xl mb-4">
                Empowering Your Business with AI
              </h1>
              <h1 className="text-4xl font-medium md:text-4xl lg:text-5xl mb-4">
                & Technology
              </h1>
              <p className="text-lg md:text-xl">
                We deliver innovative software solutions tailored to your specific needs.
              </p>
            </motion.div>
            <div className="flex justify-center space-x-4 mt-4">
              <motion.button
                  onClick={() => navigate('/Service')}
                  whileHover={{scale: 1.1}}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full"
              >
                Explore Our Services
              </motion.button>
              <motion.button
                  onClick={() => navigate('/Contact')}
                  whileHover={{scale: 1.1}}
                  className="bg-transparent border border-white text-white px-6 py-3 rounded-full"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </div>
      
  );
}

export default ServicePage;
