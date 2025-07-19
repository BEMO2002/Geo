import React from 'react'
import servicesVideo from "../assets/services/mixkit-traffic-on-a-vehicular-bridge-over-a-highway-30509-hd-ready - Trim.mp4" // Update with your video path

const TopPhoto = () => {
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


      <div className="absolute inset-0 bg-black/10 flex items-center ">
        <div className="container mx-auto  px-4 md:px-8 text-center mt-20 lg:mt-0 text-white">
          <span className="relative uppercase z-10 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            What We Do
          </span>
        </div>
      </div>
    </div>
  )
}

export default TopPhoto