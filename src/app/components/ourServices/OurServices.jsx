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
      text: ["on fire", "sessions -", "workshops"],
    },
  ];

  const goTo = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

    }
  }

  return (
    <section className="ourServices">
      <div className="ourServices__container">
        {data.map((item, index) => (
          <motion.a
            key={index}
            onClick={() => goTo(item.text[2])}
            className="ourServices__container__item roboto"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.65 }}
          >
            {item.text.map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
