import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../Framermotion/varient";

const CounterBox = ({ end, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className="flex items-center justify-center flex-col">
      <h4 className="text-primary text-[40px] font-[700] leading-[52px] ">
        {inView ? <CountUp end={end} duration={5} /> : 0}+
      </h4>
      <h2 className="text-[24px] font-[700] leading-[36px] text-base ">
        {label}
      </h2>
    </div>
  );
};

const Numbers = () => {
  return (
    <section className="py-[90px] px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
            <motion.div
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <CounterBox end={330} label="Projects Done" />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <CounterBox end={850} label="Our Clients" />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <CounterBox end={95} label="Suppliers" />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.45)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <CounterBox end={50} label="Total Revenue" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
