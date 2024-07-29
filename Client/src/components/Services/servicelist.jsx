import Appdevelopment from "../../assets/AppDevelopment.gif";
import Frontend from "../../assets/frontend.gif";
import Desktop from "../../assets/Desktop.gif";
import Blockchain from "../../assets/blockchain.gif";
import Robot from "../../assets/robot.gif"

import Team from "../../assets/team.gif";


const services = [
  {
    image: Frontend,
    title: "WEB DEVELOPMENT",
    height: "80",
    width: "80",
    description: "We acquire our thrills from creating web solutions to help execute your business operations smoothly, fast, and efficiently. A big chunk of our daily routine is spent designing and developing custom online business systems, be it for blue-chip corporate clients, fresh-faced start-ups, or local SMEs."
  },
  {
    image: Appdevelopment,
    title: "APP DEVELOPMENT",
    height: "80",
    width: "80",
    description: "We reinforce your business strength through adaptable iOS and Android apps development. We have you covered from design to development, launch, and marketing  Our experts supplement the customer's thought-process along with their guaranteeing successful project delivery."
  },

  {
    image: Desktop,
    title: "DESKTOP DEVELOPMENT",
    height: "80",
    width: "80",
    description: "We sustain best practices and market trends to deliver well-rounded desktop software development services. Our competent designers and programmers never hesitate to go extra miles while transforming an exciting desktop application concept into an industry sensation."
  },
  {
    image: Blockchain,
    title: "BlockChain ",
    height: "80",
    width: "80",
    description: "Benefit your business with trust, transparency, and efficiency through our enterprise dApps. We excel at delivering scalable, reliable, and fully customized blockchain applications with years of expertise in this technology. Moreover, we keep improving our process with the evolving blockchain industry."
  },
  {
    image: Robot,
    title: "AI & ML ",
    height: "110",
    width: "110",
    description: "Our AI and ML solutions improve user experience, optimize product performance, and enhance customer satisfaction. We use the latest technologies to deliver custom AI models that drive your business forward."
  },
  {
    image: Team,
    title: "TEAM For Your Projects",
    height: "80",
    width: "80",
    description: "Hire Dedicated Resources for Your Project. Our team is committed to delivering high-quality, high-performing, and high-value solutions to your business needs. We have the right blend of designers, developers, QA engineers, marketers to bring the best for you."
  }
];

function ServiceList() {
  return (
      <div className="container flex flex-col justify-center items-center lg:pt-4">
        <div className="text-center">
          <span className="block text-blue-500 text-lg font-lg font-serif">WHAT WE DO</span>
          <h2 data-aos="fade-up" data-aos-duration="400" className="text-sky-950 font-[800] text-2xl mb-5">
            OFFERS SIMPLE AND ELEGANT SOLUTION
          </h2>
          <p data-aos="fade-up" data-aos-duration="600" className="lg:max-w-[800px] lg:max-auto text-headingColor font-[500] text-[16px] leading-7">
            We help enterprises through custom business solutions and provide IT outsourcing services to companies with agility, quality, and commitment.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-wrap-reverse justify-center items-center gap-4 p-4">
          {services.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-duration={(index + 1) * 700} className="w-72 flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-t-lg">
                  <img src={service.image} style={{ height: `${service.height}px`, width: `${service.width}%` }} alt="" className="object-contain" />
                  <div className="p-4 text-center">
                    <span className="text-lg font-bold text-gray-900">{service.title}</span>
                    <h5 className="text-sm mt-2 font-ui-serif tracking-tight text-gray-600">{service.description}</h5>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}

export default ServiceList;
