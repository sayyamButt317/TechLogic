import SocialIcons from "../Utils/socialicons";

const Footer = () => {
  return (
    <footer className="bg-black text-center text-white lg:text-left mt-12">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* LogicTech Studio Section */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              TechLogic 
            </h6>
            <p className="mb-4">
            TechLogic is a dedicated IT company that specializes in providing innovative and effective solutions to businesses worldwide.
            </p>
            <SocialIcons/>
          </div>

          {/* Quick Links Section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Quick Links
            </h6>
            {["Home", "Our Story", "What We Do", "How We Work", "Contact"].map((link, index) => (
              <p className="mb-4" key={index}>
                <a href="#!" className="text-white">
                  {link}
                </a>
              </p>
            ))}
          </div>

          {/* Services Section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Services
            </h6>
            {["Product Development", "Application Modernisation", "Devops & Platform", "Security & Compliance"].map((service, index) => (
              <p className="mb-4" key={index}>
                <a href="#!" className="text-white">
                  {service}
                </a>
              </p>
            ))}
          </div>

          {/* Contact Section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {[
              {
                icon: (
                  <path d="M11.47 3.84a.75.75 0 011.06 0L3 6.632l9 5.25 9-5.25-8.689-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                ),
                text: "New York, NY 10012, US",
              },
              {
                icon: (
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                ),
                text: "techlogic@gmail.com",
              },
              {
                icon: (
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                ),
                text: "+ 92 3240149841",
              },
                        
              
            ].map((contact, index) => (
              <p className="mb-4 flex items-center justify-center md:justify-start" key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                  {contact.icon}
                </svg>
                {contact.text}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black p-6 text-center">
        <span>© 2023 Copyright:</span>
        <div className="font-semibold text-neutral-600 dark:text-white">
          TechLogic
        </div>
      </div>
    </footer>
  );
};

export default Footer;
