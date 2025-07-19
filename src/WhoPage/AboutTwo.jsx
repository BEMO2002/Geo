import React from 'react'
import AboutTwoImage from "../assets/who we are/About2.webp"
const AboutTwo = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12 relative">
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img src={AboutTwoImage} alt="About Two" className="  object-cover shadow-lg" />
      </div>
      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">

        <h2 className="font-bold text-2xl md:text-3xl text-black mb-4">ABOUT US</h2>
        <p className="mb-5 leading-relaxed ">
          For more than 15 years, <span className="text-red-600 font-bold">GEO</span><span className="text-second font-bold">DUKE</span> Company has specialized in both Construction and infrastructure work with high efficiency and speed throughout the Kingdom of Saudi Arabia and the Gulf region.
        </p>
        <p className="leading-relaxed ">
          <span className="text-red-600 font-bold">GEO</span><span className="text-second font-bold">DUKE</span> Company specializes in <span className="font-medium">infrastructure, construction, and concrete works</span>, and has implemented many projects throughout the Kingdom of Saudi Arabia, as the company has a specialized team of engineers, technicians, and specialists in infrastructure and the implementation of various construction works, such as <span className="font-medium">ready-mix concrete</span>, bridges, tunnels, strategic tanks, and others.
        </p>
      </div>
    </div>
  )
}

export default AboutTwo