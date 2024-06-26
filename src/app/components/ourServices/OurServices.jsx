"use client";
import React from "react";
import "./ourServices.scss";
import { motion } from "framer-motion";
import { roboto } from "../fonts/Font";

const OurServices = () => {
  const data = [
    {
      text: ["digital", "strategy", "studio"],
    },
    {
      text: ["creative", "lab and", "experiences"],
    },
    {
      text: ["on fire", "session ", "workshops"],
    },
  ];

  const goTo = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

    }
  }

  return (
    <section className={`${roboto.className} ourServices h-[800px] sm:h-screen lg:p-24 `} id="home">
      <div className="flex flex-col items-center justify-center h-full ourServices__container lg:flex-row">
        {data.map((item, index) => (
          <motion.a
            key={index}
            onClick={() => goTo(item.text[2])}
            className={" flex lg:flex-col  border border-white justify-center w-11/12 items-center rounded-[50%] hover:bg-white hover:text-black lg:text-5xl lg:h-[70svh] text-lg h-44"}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.65 }}
          >
            {item.text.map((text, i) => (
              <span key={i} className="pr-1 last:font-bold">{text}</span>
            ))}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
