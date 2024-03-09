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
      initial={{ width: "0px" }} // Ancho inicial en 0
      transition={{ duration: 2 }} // Duración de la animación en segundos
      style={{
        height: "1px", // Altura del elemento
        backgroundColor: "white", // Color de fondo, puedes cambiarlo
      }}
      whileInView={{ width: "100%" }}
    ></motion.div>
  );

  return (
    <section
      className={`${roboto.className} w-screen bg-black text-white py-28 px-5 md:pt-28 md:py-0 `}
    >
      <div className="grid grid-cols-6 grid-rows-6 gap-4 ">
        <div className="col-span-6 text-2xl font-bold md:col-span-2 md:text-4xl">
          <p className="">all under one roof</p>
          <p className="">-</p>
        </div>
        <div className="col-span-6 row-span-4 row-start-2 place-items-stretch md:col-span-3 md:row-span-6 md:col-start-4  flex flex-col justify-between">
          {" "}
          <Hr />
          {data.map((item) => (
            <div key={item.id} className="md:space-y-8 text-lg xl:text-4xl flex flex-col justify-center gap-4 md:block">
              <div className="flex items-center justify-start gap-6   ">
                <span className="w-11">{item.icon}</span>
                {item.text}
              </div>
              <Hr />
            </div>
          ))}
        </div>
        <div className="col-span-6 row-start-6 pt-8 md:col-span-2 md:row-start-6 ">
          <p className="text-xl">
            we put our passion and know-how <br /> at the service of your brand
          </p>
        </div>
      </div>
    </section>
  );
};

/* {data.map((item) => (
  <div key={item.id} className="flex flex-col justify-center">
    <div className="flex items-center gap-6 pb-5 pt-1 text-2xl xl:text-4xl pr-4">
      <span className="w-11">{item.icon}</span>
      {item.text}
    </div>
    <Hr />
  </div>
))} */
