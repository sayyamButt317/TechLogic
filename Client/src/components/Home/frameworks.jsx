
import { motion } from "framer-motion"; 
import Angular from "../../assets/angular.png";
import AWS from "../../assets/aws.png";
import Django from "../../assets/django.png";
import Docker from "../../assets/docker.png";
import Flutter from "../../assets/flutter.png";
import Kotlin from "../../assets/kotlin.png";
import Mongodb from "../../assets/mongodb.png";
import Next from "../../assets/nextjs.png";
import react from "../../assets/react.png";
import Nginx from "../../assets/nginx.png";
import Node from "../../assets/nodejs.png";
import SQL from "../../assets/sql.svg";
import Vue from "../../assets/vue.png";
import Graph from "../../assets/graphql.png";
import Ios from "../../assets/ios.png";

const icons = [
  { image: Flutter, width: 100 },
  { image: Kotlin, width: 100 },
  { image: Ios, width: 50 },
  { image: Angular, width: 100 },
  { image: Vue, width: 50 },
  { image: Next, width: 100 },
  { image: react, width: 100 },
  { image: Node, width: 100 },
  { image: Django, width: 50 },
  { image: Mongodb, width: 100 },
  { image: Docker, width: 100 },
  { image: AWS, width: 100 },
  { image: Nginx, width: 100 },
  { image: SQL, width: 100 },
  { image: Graph, width: 100 },
];

const Frameworks = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        {/* Headings */}
        <div className="text-center mb-8">
          <p className="text-red-600 text-md font-serif font-semibold">
            Tools & Technologies
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-800">
            Latest Tools and Technologies To Drive Innovation in Digital Solutions
          </h2>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }} // Add hover animation
              className="flex flex-col items-center justify-center p-4 rounded-md shadow-md bg-white"
            >
              <img
                 data-aos="fade-up"
              data-aos-duration="300"
                src={icon.image}
                width={icon.width}
                height="auto"
                loading="lazy"
                alt={icon.image.split("/").pop().split(".")[0]} // Extract filename as alt text
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frameworks;
