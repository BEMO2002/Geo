import React from 'react'
import servicesVideo from "../assets/Solutions/solutionHead.mp4"
const HeadSolution = () => {
  return (
    <div className="relative w-full md:h-[70vh]" >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="object-cover w-full h-full"
    >
      <source src={servicesVideo} type="video/mp4" />
    </video>


    <div className="absolute inset-0 bg-black/60 flex items-center">
      <div className="container mx-auto mask-x-from-95% px-4 md:px-8 text-center text-white">
        <span className="relative z-10 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
        SOLUTIONS & SLOPE SYSTEMS
        </span>
      </div>
    </div>
  </div>
  )
}

export default HeadSolution