"use client";
import React from "react";
import WorkingWith from "./WorkingWith";
import logoArtbag from "../../images/logos/LOGOARTBAG.png";
import bancoFormosa from "../../images/logos/LOGOBANCOFORMOSA.png";
import wyndham from "../../images/logos/LOGOWYNDHAM.png";
import rockCycle from "../../images/logos/LOGOROCKCYCLE.png";
import piba from "../../images/logos/LOGOPIBA.png";
import meta from "../../images/logos/LOGOMETA.png";
import diamondsFilm from "../../images/logos/LOGODIAMONDFILMS.png";
import dannyOcean from "../../images/logos/LOGODANNYOCEAN.png";
import bodegaAraujo from "../../images/logos/LOGOBODEGAARAUJO.png";
//
import bgArtBag from "../../images/ARTBAG.webp";
import bgBancoFormosa from "../../images/BANCOFORMOSA.webp";
import wyndhamBg from "../../images/WYNDHAM.png";
import bgRockCycle from "../../images/ROCKCYCLE.webp";
import bgPiba from "../../images/PIBA.webp";
import bgMeta from "../../images/META.webp";
import bgDiamondsFilm from "../../images/DIAMONDSFILM.webp";
import bgDannyOcean from "../../images/DANNYOCEAN.webp";
import bgBodegaAraujo from "../../images/BODEGAARAUJO.webp";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import "./workingWith.scss";

const WorkingList = () => {
  const data = [
    { className: "artbag", logo: logoArtbag, background: bgArtBag },
    {
      className: "bancoFormosa",
      logo: bancoFormosa,
      background: bgBancoFormosa,
    },
    { className: "wyndham", logo: wyndham, background: wyndhamBg },
    { className: "rockCycle", logo: rockCycle, background: bgRockCycle },
    { className: "piba", logo: piba, background: bgPiba },
    {
      className: "diamondsFilm",
      logo: diamondsFilm,
      background: bgDiamondsFilm,
    },
    { className: "meta", logo: meta, background: bgMeta },
    { className: "dannyOcean", logo: dannyOcean, background: bgDannyOcean },
    {
      className: "bodegaAraujo",
      logo: bodegaAraujo,
      background: bgBodegaAraujo,
    },
  ];

  return (
    <div className="workingList">
      {data.map((item, i) => (
        <WorkingWith key={i} {...item} />
      ))}
    </div>
  );
};

export default WorkingList;
