"use client";
import React from "react";
import "./ourServices.scss";
import { motion } from "framer-motion";

const OurServices = () => {
  const data = [
    {
      text: ["digital", "strategy", "studio"],
    },
    {
      text: ["creative", "lab and", "experiences"],
    },
    {
      text: ["on fire", "sessions ", "workshops"],
    },
  ];

  const goTo = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

    }
  }

  return (
    <section className="ourServices h-screen lg:p-24 ">
      <div className="ourServices__container flex flex-col lg:flex-row items-center justify-center h-full">
        {data.map((item, index) => (
          <motion.a
            key={index}
            onClick={() => goTo(item.text[2])}
            className="roboto flex lg:flex-col  border border-white justify-center w-11/12 items-center rounded-[50%] hover:bg-white hover:text-black lg:text-5xl lg:h-[70vh] text-xl h-44"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.65 }}
          >
            {item.text.map((text, i) => (
              <span key={i} className="last:font-bold pr-1">{text}</span>
            ))}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
