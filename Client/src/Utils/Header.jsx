import { useState, useEffect } from "react";
import LOGO from "./Logo";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size on initial render and resize
  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
    setIsMenuOpen(false); // Close menu on small screens
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-10">
      <div className="container flex items-center justify-between mx-auto px-4 py-4 lg:py-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <LOGO />
        </div>

        {/* Navigation - Conditionally render for screen size */}
        {isSmallScreen ? (
          // Mobile Menu
          <>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            {isMenuOpen && (
              <nav className="absolute top-16 left-0 w-full bg-black">
                {/* ... menu items ... */}
              </nav>
            )}
          </>
        ) : (
          // Desktop Menu
          <nav className={`flex items-center gap-8 ${isMenuOpen ? 'block' : 'hidden'} md:static md:bg-transparent absolute top-16 left-0 w-full bg-black md:bg-black md:top-auto md:left-auto md:w-auto`}>
          <p onClick={() => handleNavigation('/')} className="cursor-pointer py-2 md:py-0 hover:text-gray-400 transition duration-300">Home</p>
          <p onClick={() => handleNavigation('/Service')} className="cursor-pointer py-2 md:py-0 hover:text-gray-400 transition duration-300">Services</p>
          <p onClick={() => handleNavigation('/About')} className="cursor-pointer py-2 md:py-0 hover:text-gray-400 transition duration-300">About</p>
          <p onClick={() => handleNavigation('/Contact')} className="cursor-pointer py-2 md:py-0 hover:text-gray-400 transition duration-300">Contact</p>
        </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
