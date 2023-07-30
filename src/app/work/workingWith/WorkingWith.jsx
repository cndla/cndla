import React from "react";
import "./workingWith.scss";

const WorkingWith = ({ className, text, subtitle }) => {
  return (
    <div className={`workingList__container`}>
      <div className="workingList__container__banner">
        <p className="workingList__container__banner__text">{text}</p>
        <p className="workingList__container__banner__subtitle">{subtitle}</p>
      </div>
      <div className={`workingList__container__img ${className}`}></div>
    </div>
  );
};

export default WorkingWith;
