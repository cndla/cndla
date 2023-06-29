import React from "react";
import "./hero.scss";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__title">
        <div className="hero__title__moment">
          <span>this</span>
          <span>is</span>
          <span>your</span> <span>moment,</span>
        </div>
        <div className="hero__title__moment">
          <span>go</span>
          <span>beyond</span>
          <span>the</span>
          <span>normal.</span>
        </div>
      </div>
      <div className="hero__subtitle">
        <h2 className={roboto.className}>
          we’re a boutique studio working on selected projects for
        </h2>
        <h2 className={roboto.className}>
          startups and companies, bringing what they envision to life
        </h2>
      </div>
    </div>
  );
};

export default Hero;
