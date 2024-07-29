
import web from "../../assets/AppDevelopment.gif";
import Frontend from "../../assets/frontend.gif";
import Desktop from "../../assets/Desktop.gif";
import security from "../../assets/security.gif";

const cards = [
  {
    image: Frontend,
    height: "100",
    width: "100",
    title: "Web Development",
    description:
        "Product Development typically refers to all stages involved in bringing a product from concept or idea through market release and Innovative solutions",
  },
  {
    image: web,
    height: "100",
    width: "100",
    title: "Application Modernisation",
    description:
        "The practice of updating older software for newer computing approaches, including newer languages, frameworks, and infrastructure platforms.",
  },
  {
    image: Desktop,
    height: "100",
    width: "100",
    title: "DevOps & Platform",
    description:
        "DevOps Platform empowers organizations to maximize the overall return on software development by delivering software faster and efficiently.",
  },
  {
    image: security,
    height: "100",
    width: "100",
    title: "Security & Compliance",
    description:
        "Security compliance management is the process of monitoring and assessing systems, devices, and networks to ensure they comply with regulatory requirements.",
  },
];

const Card = () => {
  return (
      <>
        <div className="container flex flex-col justify-center items-center lg:pt-4">
          <div className="text-center">
            <span className="block text-blue-500 text-lg font-lg  font-serif">WHAT WE DO</span>
            <h2
                data-aos="fade-up"
                data-aos-duration="400"
                className="text-sky-950 font-[800] text-2xl mb-5"
            >
              OFFERS SIMPLE AND ELEGANT SOLUTION
            </h2>
            <p
                data-aos="fade-up"
                data-aos-duration="600"
                className="lg:max-w-[800px] lg:max-auto text-headingColor font-[500] text-[16px] leading-7"
            >
              We help enterprises through custom business solutions and provide IT outsourcing services to companies with agility, quality, and commitment.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 p-4">
          {cards.map((card, index) => (
              <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration={(index + 1) * 700}
                  className="w-full sm:w-72 flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg"
              >
                <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-t-lg">
                  <img
                      src={card.image}
                      style={{ height: `${card.height}px`, width: `${card.width}%` }}
                      alt=""
                      className="object-contain"
                  />
                  <div className="p-4 text-center">
                <span className="text-lg font-bold text-gray-900">
                  {card.title}
                </span>
                    <h5 className="text-base mt-2 font-ui-serif tracking-tight text-gray-600">
                      {card.description}
                    </h5>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </>
  );
};

export default Card;
