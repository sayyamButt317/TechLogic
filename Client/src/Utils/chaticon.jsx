import React from 'react'

function chaticon() {
  return (
    <div className="flex items-center gap-4">
    <button
      className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 
        rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"
    >
      <i className="ri-send-plane-line"></i>Lets' Talk
    </button>
    <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
      <i className="ri-menu-line"></i>
    </span>
  </div>
  )
}

export default chaticon