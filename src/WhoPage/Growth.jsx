import React from 'react'
import GrowthImage from "../assets/who we are/groth.webp"
const Growth = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">

      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl text-black mb-4">PROFESSIONAL GROWTH</h2>
        <p className="mb-5 leading-relaxed ">
          The creativity, professionalism, and diligence of the people who work for us are the key to our underlying success in <span className="text-red-600 font-bold">GEO</span><span className="text-second font-bold">DUKE</span>. Maintaining an environment where those people feel nurtured and challenged is of paramount importance to us.
        </p>
        <p className="mb-5 leading-relaxed ">
          We put a great deal of effort into helping our staff develop all of their skill-sets. During the course of the years, our team of engineers and managers participated in numerous advanced training courses, certification courses and leading industry exhibitions.
        </p>
        <p className="leading-relaxed ">
          Our strategic approach looks at the bigger picture, allowing us to assign the right people with the right expertise, ensuring the project is commercially viable and aligned to meet cost objectives. In addition to exceeding client expectations, we conduct impact analyses to ensure that the ‘doorstep community’ is included and enhanced through every project.
        </p>

      </div>
            {/* Left Side: Image */}
            <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img src={GrowthImage} alt="About Two" className="  object-cover shadow-lg" />
      </div>
    </div>
  )
}

export default Growth