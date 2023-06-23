"use client";
import React from "react";
import "./ourServices.scss";
import { motion } from "framer-motion";
import arrowAnimation from "../animations/arrowAnimation.json";
import Lottie from "lottie-react";

const OurServices = () => {
  const items = [
    "Engagement strategy",
    "Brand identity",
    "Performance",
    "Content & visual creators",
    "Creative projects lab",
  ];

  return (
    <div className="ourServices">
      <div className="ourServices__container">
        <div className="ourServices__container__title">
          <div className="ourServices__container__title__first">
            <p className="ourServices__container__title__first__text">
              Our Services
            </p>
            <p className="">-</p>
          </div>
          <div className="ourServices__container__title__second">
            <p className="">we create digital spaces</p>
            <p className="">that re-imagine the way</p>
            <p className="">people interact with brands</p>
          </div>
        </div>
        <div className="ourServices__container__menu">
          {items.map((item, index) => (
            <>
              <span key={index} className="ourServices__container__menu__text">
                <Lottie className="arrow" animationData={arrowAnimation} loop={true} />
                {item}
              </span>
              {index !== items.length - 1 && (
                <motion.hr
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
