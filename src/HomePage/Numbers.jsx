import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterBox = ({ end, label, suffix = "+", unit, custom }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div
      ref={ref}
      className="flex items-center justify-center flex-col text-center"
    >
      <h4 className="text-primary md:text-[32px] text-[24px] font-[700] leading-[44px] flex items-baseline justify-center">
        {custom ? (
          custom
        ) : (
          <>
            {inView ? <CountUp end={end} duration={3} separator="," /> : 0}
            {suffix}
            {unit && (
              <span className="ml-1 text-[18px] font-bold text-primary">
                {unit}
              </span>
            )}
          </>
        )}
      </h4>
      <h2 className="md:text-[24px] text-[15px] font-[700] leading-[36px] text-base ">
        {label}
      </h2>
    </div>
  );
};

const Numbers = () => {
  return (
    <section className="py-[60px] px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* الصف الأول */}
            <CounterBox end={20} label="YEARS OF INNOVATION" />
            <CounterBox
              custom="(SR 962+ million)"
              label="LAST 5 YEARS' REVENUES"
            />
            <CounterBox end={2000} label="CRAFT & STAFF EMPLOYEES" />
            <CounterBox end={100} label="PROJECTS" />
            <CounterBox end={30} label="LOCATIONS" />
            {/* الصف الثاني */}
            <CounterBox end={270} label="CLIENTS" />
            <CounterBox end={35} label="CITIES SERVED" />
            <CounterBox end={24} label="SITE SUPPORT" suffix="/7" />
            {/* صف ثالث للعنصر الأخير */}
            <CounterBox end={50000} label="SKUs" suffix="+" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
