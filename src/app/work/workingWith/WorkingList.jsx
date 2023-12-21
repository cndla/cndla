"use client";
import React from "react";
import WorkingWith from "./WorkingWith";
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
import "./workingWith.scss";


const WorkingList = () => {
  const data = [
    {
      className: "wyndham",
      text: "wyndham hoteles",
      background: wyndhamBg,
      subtitle:
        "digital strategy | content production | experience & culture | influencers",
    },
    {
      className: "dannyOcean",
      text: "danny ocean",
      background: bgDannyOcean,
      subtitle: "engagement strategy | content | fan club | experience ",
    },
    {
      className: "artbag",
      text: "artbag",
      background: bgArtBag,
      subtitle:
        "brand strategy | social media | content | paid media | experience & culture ",
    },
    {
      className: "rockCycle",
      text: "rockcycle",
      background: bgRockCycle,
      subtitle:
        " brand strategy | social media | content | email mkt | paid media | pr actions | experience & culture",
    },
    {
      className: "bancoFormosa",
      text: "banco de formosa",
      background: bgBancoFormosa,
      subtitle:
        "digital strategy | key visual | content | experience & culture",
    },
    {
      className: "diamondsFilm",
      text: "diamond films",
      background: bgDiamondsFilm,
      subtitle:
        "brand strategy | social media | content | pr actions | experience & culture",
    },
    {
      className: "bodegaAraujo",
      text: "bodega araujo",
      background: bgBodegaAraujo,
      subtitle:
        "brand strategy | social media | content | paid media | pr actions | experience & culture",
    },
    {
      className: "piba",
      text: "piba",
      background: bgPiba,
      subtitle:
        "brand strategy | social media | content | paid media | pr actions | experience & culture",
    },
    { className: "meta", text: "meta", background: bgMeta, subtitle: "digital strategy | content production | experience & culture | influencers" },
  ];

  return (
    <section className="workingList">
      {data.map((item, i) => (
        <WorkingWith {...item} key={i} />
      ))}
    </section>
  );
};

export default WorkingList;
