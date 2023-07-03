import Image from "next/image";
import React from "react";
import inspire from '../../images/inspire.png'
import './onFire.scss'

const OnFire = () => {
  return (
    <div className="onFire">
      <div className="onFire__container">
        <h2 className="onFire__container__title">on fire sessions</h2>
        <div className="onFire__container__content">
          <p>
            we are surrounded by extremely talented people. trends hunters and
            fascinating
          </p>
          <p>
            people who are in a constant persuit of learning, evolving and
            growing, and aeger
          </p>
          <p>to share everything the know as well</p>
        </div>
        <Image className="onFire__container__image" src={inspire} alt="inspire" width={"auto"} />
      </div>
    </div>
  );
};

export default OnFire;
