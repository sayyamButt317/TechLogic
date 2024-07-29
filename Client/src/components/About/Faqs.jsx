const Faqs = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="font-serif text-lg text-red-600 text-center mb-4">
        FAQs
      </h1>
      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-center mb-10">
        Answers To Your Common Questions
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 px-4">
          <h3 className="font-semibold text-xl mb-2">
            What Services does LogicTech Offer?
          </h3>
          <p className="mt-2 font-light">
          TechLogic offers comprehensive software development, design, and marketing services to meet all your digital needs.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-2">
            Why Choose  TechLogic for Software Development?
          </h3>
          <p className="mt-2 font-light">
          TechLogic excels in software development with a team of skilled professionals dedicated to delivering innovative and high-quality solutions tailored to your requirements.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-2">
            How does TechLogic ensure design excellence?
          </h3>
          <p className="mt-2 font-light">
          TechLogic design team combines creativity and expertise to craft visually stunning and user-friendly interfaces that elevate your brand and captivate your audience.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-2">
            What marketing strategies does TechLogic employ?
          </h3>
          <p className="mt-2 font-light">
          TechLogic employs data-driven marketing strategies to enhance your online presence, drive traffic, and maximize your ROI through targeted campaigns and analytics-driven insights.
          </p>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <h3 className="font-semibold text-xl mb-2">
            What's TechLogic app development expertise?
          </h3>
          <p className="mt-2 font-light">
          TechLogic specializes in mobile app development, creating intuitive, feature-rich applications for seamless user experiences across platforms.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-2">
            How does TechLogic develop websites?
          </h3>
          <p className="mt-2 font-light">
          TechLogic prioritizes user experience and scalability, ensuring our websites effectively communicate your brand and achieve your goals.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-2">
            How does TechLogic ensure ongoing support and maintenance?
          </h3>
          <p className="mt-2 font-light">
          TechLogic provides continuous support and maintenance services to ensure your digital products remain up-to-date and fully functional.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-2">
            Can TechLogic handle complex enterprise solutions?
          </h3>
          <p className="mt-2 font-light">
            Yes, TechLogic has extensive experience in developing complex enterprise solutions tailored to meet the unique needs of large organizations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
