"use client";
import React from "react";
import "./underOneRoof.scss";
import { motion } from "framer-motion";
import { SvgEngagement } from "./svg/SvgEngagement";
import { BranIdentity } from "./svg/BranIdentity";
import { Performance } from "./svg/Performance";
import { Audiovisual } from "./svg/Audiovisual";
import { BrandExperience } from "./svg/BrandExperience";
import { roboto } from "../hero/Hero";

export const UnderOneRoof = () => {
  const data = [
    {
      id: 1,
      icon: <SvgEngagement />,
      text: "engagement strategy",
    },
    {
      id: 2,
      icon: <BranIdentity />,
      text: "brand identity",
    },
    {
      id: 3,
      icon: <Performance />,
      text: "performance / paid media",
    },
    {
      id: 4,
      icon: <Audiovisual />,
      text: "audiovisual content producers",
    },
    {
      id: 5,
      icon: <BrandExperience />,
      text: "brand experiences & influencers",
    },
  ];
  const Hr = () => (
    <motion.div
      initial={{ width: "30px" }} // Ancho inicial en 0
      transition={{ duration: 2 }} // Duración de la animación en segundos
      style={{
        height: "1px", // Altura del elemento
        backgroundColor: "white", // Color de fondo, puedes cambiarlo
      }}
      whileInView={{ width: "100%" }}
    ></motion.div>
  );
  return (
    <section className={`${roboto.className} w-screen bg-black text-white`}>
      <div className="lg:pl-24 md:pl-10 py-64 flex flex-col lg:flex-row w-full justify-between">
        <div className="flex lg:flex-col justify-between h-[50vh] max-h-dvh">
          <p className="text-5xl font-bold">
            all under one roof <br />
            <span>-</span>
          </p>
          <p className="text-2xl">
            we put our passion and know-how <br />
            at the service of your brand.
          </p>
        </div>
        <div className="h-[50vh] flex flex-col justify-between ">
          <Hr />
          {data.map((item) => (
            <div key={item.id} className="flex flex-col justify-center">
              <div className="flex items-center gap-6 pb-5 pt-1 text-2xl xl:text-4xl pr-4">
                <span className="w-11">{item.icon}</span>
                {item.text}
              </div>
              <Hr />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
