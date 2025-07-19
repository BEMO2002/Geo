import React from 'react'
import AboutTwoImage from "../assets/services/servfirst.png"

const ServicesOen = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">

      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl uppercase text-black mb-4">Design & Engineering
        </h2>
        <p className="mb-5 leading-relaxed ">
        We offer full-service design and structural engineering for MSE walls, ensuring stability, durability, and cost-efficiency. Our expert team uses advanced software and industry best practices to meet all project specifications and regulatory standards. This includes calculating the friction angle of the select backfill and determining reinforcement lengths based on wall height and loading conditions.

        </p>
      </div>
            {/* Left Side: Image */}
            <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img src={AboutTwoImage} alt="About Two" className="  object-cover shadow-lg" />
      </div>
    </div>
  )
}

export default ServicesOen