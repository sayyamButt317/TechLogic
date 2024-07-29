import React, { useState, useEffect } from "react";
import apostrophe from "../../assets/apostrophe.png";

const reviews = [
  {
    username: "Imran Haider",
    designation: "Software Engineer",
    description:
      "Working with TechLogic was a fantastic experience. They delivered top-quality software on time and exceeded our expectations in every way. I highly recommend their services to anyone in need of reliable and innovative tech solutions."
  },
  {
    username: "Dr. Asif Ranjha",
    designation: "Healthcare Professional",
    description:
      "The team at TechLogic was incredibly knowledgeable and professional. They helped us create a user-friendly application that has significantly improved our operations. Their attention to detail and commitment to excellence is unmatched."
  },
  {
    username: "Nadeem Moen",
    designation: "Entrepreneur",
    description:
      "TechLogic transformed our business idea into a successful digital product. Their expertise in software development and dedication to customer satisfaction is evident in the final product. We are extremely happy with their work and look forward to future collaborations."
  }
];

const Feedback = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container w-full flex flex-col h-full bg-gray-800 mx-auto rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 p-6">
      <h1 className="text-md text-red-600 text-center">Testimonials</h1>
      <span className="text-3xl text-center justify-between">
        Check What Clients Say
      </span>
      <span className="text-3xl text-center justify-between">
        About LogicTech Studio
      </span>
      <div className="flex justify-center items-center">
        <span className="flex text-8xl mt-4">
          <img src={apostrophe} alt="apostrophe" height="50" width="50" />
          <img src={apostrophe} alt="apostrophe" height="50" width="50" />
        </span>
      </div>

      <span className="container w-1/2 text-md mt-4 text-center justify-between">
        {reviews[currentReview].description}
      </span>
      <div className="text-center mt-4">
        <span className="text-lg font-bold">{reviews[currentReview].username}</span>
        <span className="block text-sm text-gray-400">{reviews[currentReview].designation}</span>
      </div>
      <div className="flex flex-row justify-center gap-8 mt-4">
        <button
          onClick={() => setCurrentReview((prevReview) => (prevReview - 1 + reviews.length) % reviews.length)}
        >
          Back
        </button>
        <button
          onClick={() => setCurrentReview((prevReview) => (prevReview + 1) % reviews.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Feedback;
