import React, { useRef, useEffect, useState } from "react";
import HeadContact from "./HeadContact";
import ContactForm from "./ContactForm";
import CareerForm from "./CareerForm";
import Map from "./Map";

const MainContact = () => {
  const containerRef = useRef(null);
  const [dividerHeight, setDividerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setDividerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <HeadContact />
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-start w-full relative "
      >
        <div className="w-full md:flex-1 md:min-w-[320px]">
          <ContactForm />
        </div>
        {/* Divider with OR */}
        <div className="hidden md:flex flex-col items-center justify-center relative mx-2 h-full">
          <div
            className="w-px bg-gray-300 relative"
            style={{ height: dividerHeight || "100%" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 cursor-pointer -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow text-lg font-bold text-gray-600">
            or
          </div>
        </div>
        <div className="w-full md:flex-1 md:min-w-[320px]">
          <CareerForm />
        </div>
      </div>
      <Map />
    </>
  );
};

export default MainContact;
