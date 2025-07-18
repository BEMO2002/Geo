import React from 'react'
import GoalImage from "../assets/who we are/goal.webp"
const Goal = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img src={GoalImage} alt="About Two" className="  object-cover shadow-lg" />
      </div>
      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl text-black mb-4">OUR GOALS</h2>
        <p className="mb-5 leading-relaxed ">
          Seeking to develop and advance the field of contracting to keep pace with the great and rapid development in the Kingdom of Saudi Arabia and to achieve the Kingdom’s Vision 2030, by committing to applying quality standards and modern technologies in the field of construction and participating in prosperity and advancement to serve our dear country, Our most important goals include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Increase Revenue and Profitability.</li>
          <li>Improve Market Share.</li>
          <li>Enhance Brand Reputation.</li>
          <li>Expand Operations.</li>
        </ul>
      </div>
    </div>
  )
}

export default Goal