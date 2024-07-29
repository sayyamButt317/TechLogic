import React from 'react';
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
                text: "info@example.com",
              },
              {
                icon: (
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                ),
                text: "+ 01 234 567 88",
              },
              {
                icon: (
                  <path
                    fillRule="evenodd"
                    d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                    clipRule="evenodd"
                  />
                ),
                text: "+ 01 234 567 89",
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
