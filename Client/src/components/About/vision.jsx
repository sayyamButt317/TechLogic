import { FaLaptopCode, FaCloud, FaChartLine } from "react-icons/fa";
import { motion } from 'framer-motion'; // Added for animation

const Vision = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-950 to-blue-950 ">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto text-center"> 

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4"
          >
            Our Vision
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-white leading-relaxed mb-10"
          >
            We strive to be at the forefront of technological innovation, setting a benchmark for excellence in providing IT solutions to clients worldwide.
          </motion.p>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: FaCloud, color: "text-orange-500", title: "Innovation" },
              { icon: FaLaptopCode, color: "text-green-500", title: "Collaboration" },
              { icon: FaChartLine, color: "text-blue-500", title: "Excellence" },
            ].map(({ icon: Icon, color, title }, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="flex flex-col items-center text-white p-4 rounded-lg shadow-md bg-gradient-to-br from-blue-800 to-blue-900"
              >
                <Icon className={`text-4xl ${color} mb-2`} />
                <span className="text-lg sm:text-xl font-semibold">{title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
