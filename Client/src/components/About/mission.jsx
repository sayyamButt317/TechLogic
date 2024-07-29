import React from 'react'

function mission() {
  return (
    <div 
    data className='flex flex-row px-3'>
        <div  data-aos="fade-up" data-aos-duration="1200" className='container'>
        <h1  className="font-serif text-black text-xl font-bold mb-4 md:w-1/2 md:px-3 py-6">
          MISSION
        </h1>
      <div className="flex flex-row w-full h-auto md:max-md">
      
        <span className="text-gray-600 text-lg leading-relaxed">
          Our mission is to support business development and growth through
          unique and innovative technology solutions and services.
        </span>
    
      </div>
      
        </div>
        <div  data-aos="fade-up" data-aos-duration="1200" className='container'>
        <h1 className="font-serif text-black text-xl font-bold mb-4 md:w-1/2 md:px-3 py-6">
          Vision
        </h1>
      <div className="flex flex-row w-full h-auto md:max-md">
      
        <span className="text-gray-600 text-lg leading-relaxed">
        Our vision is to excel in innovative technological developments and to set a benchmark of excellence in providing IT solutions for global clients.
        </span>
    
      </div>
      
        </div>
    </div>
  )
}

export default mission