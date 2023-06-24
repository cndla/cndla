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

const WorkingList = () => {
  const data = [
    { className: "artbag", logo: logoArtbag },
    { className: "bancoFormosa", logo: bancoFormosa },
    { className: "wyndham", logo: wyndham },
    { className: "rockCycle", logo: rockCycle },
    { className: "piba", logo: piba },
    { className: "diamondsFilm", logo: diamondsFilm },
    { className: "meta", logo: meta },
    { className: "dannyOcean", logo: dannyOcean },
    { className: "bodegaAraujo", logo: bodegaAraujo },
  ];

  return (
    <>
      {data.map((item, i) => (
        <WorkingWith key={i} className={item.className} logo={item.logo} />
      ))}
    </>
  );
};

export default WorkingList;
