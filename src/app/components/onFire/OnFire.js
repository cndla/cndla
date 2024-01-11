import Image from "next/image";
import React from "react";
import './onFire.scss'
import hongo from 'public/images/hongo.gif'
import onfire from 'public/images/onfire.png'

const OnFire = () => {
  return (
    <section className="onFire">
      <div className="onFire__images">
        <Image src={hongo} alt="aca va un gif" width="auto" height="auto" className="onFire__images__hongo"></Image>
        <Image src={onfire} alt="aca va un gif" width="auto" height="auto" className="onFire__images__onfire"></Image>
      </div>
      <div className="">
        <p>workshops that inspire <br /> <span>for all around the galaxy</span></p>
      </div>
    </section>
  );
};

export default OnFire;
