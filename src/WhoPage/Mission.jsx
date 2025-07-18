import React from 'react'
import MissionImage from "../assets/who we are/mission.webp"
const Mission = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">

      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl text-black mb-4">OUR MISSION</h2>
        <p className="mb-5 leading-relaxed ">
          The following points clarify how seeks to be a better organization internally and externally to be an active member of the local and international community.
        </p>
        <div className="mb-4">
          <span className="font-bold">EMPLOYEES</span>
          <p>
            We motivate our staff by creating a better work environment to allow them to Show their best and to be creative at work, which affects us by a positive return for them and for the company.
          </p>
        </div>
        <div className="mb-4">
          <span className="font-bold">CLIENTS</span>
          <p>
            We achieve to meet and exceed our client’s expectations about our projects.
          </p>
        </div>
        <div className="mb-4">
          <span className="font-bold"><span className="text-red-600">GEO</span><span className="text-second">DUKE</span></span>
          <p>
            We are effective and hard workers in our project to deliver the project on time with high quality to meet our client's expectations.
          </p>
        </div>
      </div>
            {/* Left Side: Image */}
            <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img src={MissionImage} alt="About Two" className="  object-cover shadow-lg" />
      </div>
    </div>
  )
}

export default Mission