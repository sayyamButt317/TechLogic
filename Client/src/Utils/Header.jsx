import LOGO from "./Logo";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Use Effect for screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Close the menu when screen is large enough
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu when navigating on mobile
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-10">
      <div className="container mx-auto px-4 py-4 lg:py-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <LOGO />
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        
        {/* Navigation Links */}
        <nav 
          className={`
            ${isMenuOpen ? 'block' : 'hidden'} 
            md:flex md:flex-row items-center gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent
          `}
        >
          <p onClick={() => handleNavigation('/')} className="cursor-pointer py-2 md:py-0 hover:text-gray-400 transition duration-300">Home</p>
          <p onClick={() => handleNavigation('/Service')} className="cursor-pointer py-2 md:py-0 hover:text-gray-400 transition duration-300">Services</p>
          <p onClick={() => handleNavigation('/About')} className="cursor-pointer py-2 md:py-0 hover:text-gray-400 transition duration-300">About</p>
          <p onClick={() => handleNavigation('/Contact')} className="cursor-pointer py-2 md:py-0 hover:text-gray-400 transition duration-300">Contact</p>
        </nav>
      </div>
    </header>
  );
}

export default Header;
