import React from 'react'
import AboutImage from "../assets/who we are/about.webp"
const About = () => {
  return (  
    <div className="relative w-full">
      <img src={AboutImage} alt="" style={{ height: "50vh" }} className="object-cover w-full " />

      <div className="absolute inset-0 bg-black/60 flex items-center">
        <div className="container  mx-auto mask-x-from-95% px-4 md:px-8 text-center text-white">
          <span className="relative z-10 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">Who We Are</span>
        </div>
      </div>
    </div>
  )
}

export default About