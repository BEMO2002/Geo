import React from 'react'
import AboutTwoImage from "../assets/services/sersecond.png"
const ServicesTwo = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">
                  {/* Left Side: Image */}
                  <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img src={AboutTwoImage} alt="About Two" className="  object-cover shadow-lg" />
      </div>
      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl text-black mb-4"> Supply & Installation
        </h2>
        <p className="mb-5 leading-relaxed ">
        From geosynthetic reinforcements to facing panels, we supply all necessary materials and provide complete installation services. Our crews are trained and certified to deliver safe, timely, and precise wall construction, including precast concrete facing panels, soil reinforcements, and attachment devices. 


        </p>
      </div>

    </div>
  )
}

export default ServicesTwo