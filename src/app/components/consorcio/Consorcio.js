import React from "react";
import "./consorcio.scss";
import Image from "next/image";
import vina from "../../images/vina.jpg";

const Consorcio = () => {
  return (
    <section className="consorcio">
      <div className="consorcio__container">
        <div className="consorcio__container__text">
          <h2 className="consorcio__container__text__title">reunión de consorcio</h2>
          <div className="consorcio__container__text__animationTop">
            <p>where we talk about everything </p>
            <p>but the important things.</p>
          </div>
          <div className="consorcio__container__text__animationBot">
            <p>we mix everything we love and </p>
            <p>we make experiences in the </p>
            <p>cities we visit.</p>
          </div>
          <div className="consorcio__container__text__last">
            <div className="consorcio__container__text__last__gastro">
              <p>gastro</p>
              <p>+</p>
              <p>culture</p>
            </div>
            <div className="consorcio__container__text__last__music">
              <p>music</p>
              <p>+</p>
              <p>people</p>
            </div>
          </div>
        </div>
        <div className="consorcio__container__img">
          <Image src={vina} alt="vina" width={"auto"} />
        </div>
      </div>
    </section>
  );
};

export default Consorcio;
