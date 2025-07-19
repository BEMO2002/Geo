import React from 'react'
import AboutTwoImage from "../assets/services/servSix.png";
const ServicesSix = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img
          src={AboutTwoImage}
          alt="About Two"
          className="  object-cover shadow-lg md:h-[600px]"
        />
      </div>
      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl uppercase text-black mb-4">
          {" "}
          Sustainable & Innovation Solutions

        </h2>
        <p className="mb-5 leading-relaxed ">
        <span className="text-red-600 font-bold">GEO</span><span className="text-second font-bold">DUKE</span> ensures that all materials and construction practices meet
        Our designs incorporate environmentally friendly materials and construction practices, reducing the environmental footprint without compromising strength and functionality. Our MSE wall systems are designed not only for strength and durability but also to minimize environmental impact. We incorporate eco-friendly materials, such as recycled aggregates and geosynthetics with low environmental footprints, while optimizing wall geometry to reduce land disturbance. Our construction methods aim to limit carbon emissions, waste generation, and resource consumption. Additionally, we offer vegetated wall facings and green alternatives that blend seamlessly with the natural landscape, promoting biodiversity and stormwater management. By combining engineering excellence with environmental responsibility, we deliver retaining wall solutions that support sustainable growth and long-term value for communities and ecosystems alike.

        </p>
      </div>
    </div>
  )
}

export default ServicesSix