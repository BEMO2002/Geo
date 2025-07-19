import React from 'react'
import ContactImage from "../assets/home/contact.png"
const HeadContact = () => {
  return (
    <div className="relative w-full mt-16">
    <img src={ContactImage} alt=""  className="object-cover w-full md:h-[70vh] h-auto " />

    <div className="absolute inset-0 bg-black/60 flex items-center">
      <div className="container mt-20 lg:mt-0  mx-auto mask-x-from-95% px-4 md:px-8 text-center text-white">
        <span className="relative z-10 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight uppercase ">Contact Us</span>
      </div>
    </div>
  </div>
  )
}

export default HeadContact