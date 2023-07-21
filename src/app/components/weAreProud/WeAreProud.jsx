/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "./weAreProud.scss";
import { motion } from "framer-motion";
import logoArtbag from "../../images/logos/LOGOARTBAG.png";
import bancoFormosa from "../../images/logos/LOGOBANCOFORMOSA.png";
import wyndham from "../../images/logos/LOGOWYNDHAM.png";
import rockCycle from "../../images/logos/LOGOROCKCYCLE.png";
import piba from "../../images/logos/LOGOPIBA.png";
import meta from "../../images/logos/LOGOMETA.png";
import diamondsFilm from "../../images/logos/LOGODIAMONDFILMS.png";
import dannyOcean from "../../images/logos/LOGODANNYOCEAN.png";
import bodegaAraujo from "../../images/logos/LOGOBODEGAARAUJO.png";
import Image from "next/image";

const WeAreProud = () => {
  const logos = [
    { clase: "bancoFormosa", logo: bancoFormosa },
    { clase: "wyndham", logo: wyndham },
    { clase: "bodegaAraujo", logo: bodegaAraujo },
    { clase: "logoArtbag", logo: logoArtbag },
    { clase: "meta", logo: meta },
    { clase: "diamondsFilm", logo: diamondsFilm },
    { clase: "dannyOcean", logo: dannyOcean },
    { clase: "piba", logo: piba },
    { clase: "rockCycle", logo: rockCycle },
  ];
  const frase = "we're proud to work with";
  return (
    <motion.section className="weAreProud">
      <div className="weAreProud__container">
        <div className="weAreProud__container__title">
          <p>{frase}</p>
        </div>
        <div className="weAreProud__container__content">
          <div className="weAreProud__container__content__container">
            {logos.map((item, i) => (
              <div
                className="weAreProud__container__content__container__logo"
                key={i}
              >
                <Image
                  src={item.logo}
                  alt={item.clase}
                  className={`weAreProud__container__content__container__logo__marca ${item.clase}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WeAreProud;
