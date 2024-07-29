import React from 'react';

function Logo() {
    return (
        <div className="flex items-center gap-2">
      <span className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-thin md:font-serif rounded-full flex items-center justify-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
        >
          <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
        </svg>
      </span>
            <div>
                <h2 className="text-white ">TechLogic</h2>
            </div>
        </div>
    );
}

export default Logo;
