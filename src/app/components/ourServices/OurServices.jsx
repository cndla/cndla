"use client";
import React from "react";
import "./ourServices.scss";
import { motion } from "framer-motion";
import pyramid from "../animations/pyramid.json";
import Lottie from "lottie-react";
import circle from "../animations/circle.json";
import ripple from "../animations/ripple.json";
import arrowDown from "../animations/arrowDown.json";
import coin from '../animations/coin.json'

const OurServices = () => {
  const items = [
    { text: "Engagement strategy", animation: pyramid },
    { text: "Brand identity", animation: ripple },
    { text: "Performance", animation: circle },
    { text: "Content & visual creators", animation: coin },
    { text: "Creative projects lab", animation: arrowDown },
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
            <React.Fragment key={index}>
              <span className="ourServices__container__menu__text">
                <Lottie
                  className="arrow"
                  animationData={item.animation}
                  loop={true}
                />
                {item.text}
              </span>
              {index !== items.length - 1 && (
                <motion.hr
                  key={index + 1 * 9}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
