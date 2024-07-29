import React from "react";
import aboutbg from "../../assets/aboutbg.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function AboutPage() {
    const navigate = useNavigate();

    return (
        <div
            className="relative w-full py-16 text-center bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${aboutbg})` }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                           <h1 className="text-4xl font-medium md:text-4xl lg:text-5xl mb-4">
                        Transforming Lives Through 
                    </h1>
                    <h1 className="text-4xl font-medium md:text-4xl lg:text-5xl mb-4">
                        & Technology
                    </h1>
                </motion.div>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                    <motion.button
                        onClick={() => navigate('/Service')}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm sm:text-base"
                    >
                        Explore Our Services
                    </motion.button>
                    <motion.button
                        onClick={() => navigate('/Contact')}
                        whileHover={{ scale: 1.1 }}
                        className="bg-transparent border border-white text-white px-6 py-3 rounded-full text-sm sm:text-base"
                    >
                        Contact Us
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
