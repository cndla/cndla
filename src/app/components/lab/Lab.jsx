import React from "react";
import "./lab.scss";

const Lab = () => {
  return (
    <section className="lab">
      <div className="lab__container">
        <h2 className="lab__container__title">
          <span>CNDLA</span>
          <span>\</span>
          <span>LAB</span>
        </h2>
        <div className="lab__container__subtitle">
          <div className="lab__container__subtitle__top">
            <div className="lab__container__subtitle__top__hr"></div>
            an innovation lab that builds ideas and projects
          </div>
          <div className="lab__container__subtitle__bottom">
            that reshape culture and entertainment.
            <div className="lab__container__subtitle__bottom__hr"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lab;
