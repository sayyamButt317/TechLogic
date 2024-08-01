
import PersonImage from "./personimage";
import { useNavigate } from "react-router-dom";

const OurStory = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full py-10 md:py-20"> {/* Changed to section for semantics */}
      <div className="container mx-auto"> {/* Removed unnecessary height and width */}
        <div className="rounded-md bg-slate-200 shadow-md p-8 md:p-12"> {/* Added shadow, improved padding */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16"> {/* Increased gap for better spacing */}

            {/* Image */}
            <div className="w-full md:w-1/2 lg:w-1/3"> {/* Adjusted image width for different screen sizes */}
              <PersonImage />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 lg:w-2/3 text-gray-800">
              <h2 data-aos="fade-right"
            data-aos-duration="600" 
            className="text-sky-500 text-medium font-medium mb-2">OUR STORY</h2> {/* Used h2 for heading */}
              <div className="space-y-2"> {/* Grouped the headings for better spacing */}
                <h3 
                data-aos="fade-left"
                data-aos-duration="600" 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                  NOT ONLY DELIVER PRODUCT
                </h3>
                <h3 
                data-aos="fade-left"
                data-aos-duration="600" className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                  BUT ALSO REALIZE A BETTER
                </h3>
                <h3 
                data-aos="fade-left"
                data-aos-duration="600" className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                  WAY OF WRITING SOFTWARE
                </h3>
              </div>

              <p 
              data-aos="fade-right"
              data-aos-duration="600" className="mt-6 text-base md:text-lg leading-relaxed">
                We are a small software agency, deliberately staying small to maintain the high quality of our team. This allows us to be selective about the clients and products we work with. We focus on outcome-driven development and seek companies we can help deliver a big impact for their customers, driving success and growth.
              </p>

              <p 
              data-aos="fade-left"
              data-aos-duration="600" className="mt-4 text-base md:text-lg leading-relaxed">
                Our team is skilled in a wide range of technologies and techniques. Before joining, all of our team members have held key roles in product management, software development, DevOps, as well as security and compliance.
              </p>

              {/* Button */}
              <button
              data-aos="fade-right"
              data-aos-duration="600" 
                onClick={() => navigate("/About")}
                className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md shadow-md hover:shadow-lg transition duration-200"
              >
                More About Us!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
