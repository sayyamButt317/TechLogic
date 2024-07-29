import React from "react";
import instagram from "../assets/insta.png";
import facebook from "../assets/fb.png";
import linkedin from "../assets/linkedin.png";

const icons = [
  { image: facebook, href: "https://www.facebook.com" },
  { image: linkedin, href: "https://www.linkedin.com" },
  { image: instagram, href: "https://www.instagram.com" },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-2 mt-4">
     

      {icons.map((icon, index) => (
        <span>
          <a
            key={index}
            href={icon.href}
            className="text-white text-[18px] font-[600]"
          >
            <img src={icon.image} height="50" width="50" alt="" />
          </a>
          
        </span>
        
      ))}
  
    </div>
  );
};

export default SocialIcons;
