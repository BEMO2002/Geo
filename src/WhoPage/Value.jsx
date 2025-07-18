import React from 'react'
import ValueImage from "../assets/who we are/value.webp"
const Value = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10 py-8 px-4 md:px-12">
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img src={ValueImage} alt="About Two" className="  object-cover shadow-lg" />
      </div>
      {/* Right Side: Text */}
      <div className="flex-1  text-base md:text-lg font-normal">
        <h2 className="font-bold text-2xl md:text-3xl text-black mb-4">OUR VISION</h2>
        <p className="mb-5 leading-relaxed ">
          To become a leading company in the implementation of private and non-traditional infrastructure works. To be a
          <span className="font-normal tracking-wide"> leading engineering, construction, and project management organization </span>
          by delivering special results for our clients, building satisfying jobs for our employees, and earning a fair return on the value we deliver.
        </p>
        <div className="mt-12">
          <h2 className="font-bold text-2xl md:text-3xl text-black mb-4">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <ul className="list-disc pl-6 space-y-2">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Passion</li>
              <li>Trust</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Teamwork</li>
              <li>Creativity</li>
              <li>Loyalty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Value