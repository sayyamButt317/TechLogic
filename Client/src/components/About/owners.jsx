import React from "react";
import web from "../../assets/AppDevelopment.gif";
import Sayyam from "../../assets/sayyam.png";
import Desktop from "../../assets/Desktop.gif";
import Game from "../../assets/game.gif";

const cards = [
  {
    image: Sayyam,
    title: "Sayyam Butt",
    description:
      "A Full Stack Developer with one year of experience with Sayyam and Game developers with a variety of different challenges a",
  },
  {
    image: web,
    title: "Amash",
    description:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
  },
  {
    image: Desktop,
    title: "Sayyam",
    description:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
  },
  {
    image: Game,
    title: "Game",
    description:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
  },
];

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-duration={(index + 1) * 700}
          className="max-w-xs md:max-w-sm bg-white border rounded-lg shadow dark:bg-white"
        >
          <div className="flex items-center justify-center rounded-t-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 h-48">
            
          <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="..." className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
<img
              src={card.image}
              className="w-full h-full object-cover"
              alt=""
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="px-5 py-3">
            <h5 className="text-xl font-ui-serif tracking-tight text-black-300 dark:text-black">
              {card.description}
            </h5>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-black">
                {card.title}
              </span>
           
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
