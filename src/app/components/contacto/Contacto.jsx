'use client'
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import "./contacto.scss";
import linea from "../../images/linea.png";
import Image from "next/image";

import { motion } from "framer-motion";
import { roboto } from "../fonts/Font";
import Linkedin from "../../svgs/Linkedin";
import Instagram from "../../svgs/Instagram";

const Contacto = () => {
  const text = "let's work together"
  const splitText = text.split(" ")
  const [textArea, setTextArea] = useState("")
  const [textAreaRows, setTextAreaRows] = useState(1)

  const handleChangeTextArea = (e) => {
    setTextArea(e.target.value)
    console.log(textArea.length)
    let isDeleting = []

    if (textArea.length % 13 == 0) {
      if (isDeleting.includes(textArea.length)) return null
      isDeleting.push(textArea.length)
      console.log(isDeleting)
      setTextAreaRows(textAreaRows + 1)
    }
    if (textArea.length == 1) {
      setTextAreaRows(1)
    }
  }

  return (
    <section className={`${roboto.className} bg-black pt-20 pb-40 p-10`} id="connect">
      <div className="space-y-6 sm:space-y-32">
        <h2 className="text-2xl text-center text-white sm:text-4xl" >{splitText.map((text, i) => (
          <motion.span key={i} className={`pr-3 ${i == 2 && "text-cnlda-orange"}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ duration: .500, delay: 0.3 * i }} >{text}</motion.span>
        ))}</h2>
        {/* <div className="contacto__container__content">
          <div className="contacto__container__content__formContainer">
            <form className="contacto__container__content__formContainer__form">
              <div className="contacto__container__content__formContainer__form__inputContainer">
                <p>
                  01<span>name</span>
                </p>
                <input type="text" />
              </div>
              <div className="contacto__container__content__formContainer__form__inputContainer">
                <p>
                  02<span>company</span>
                </p>
                <input type="text" />
              </div>
              <div className="contacto__container__content__formContainer__form__inputContainer">
                <p className="contacto__container__content__formContainer__form__inputContainer__end">
                  03<span>email</span>
                </p>
                <input type="text" />
              </div>
              <div className="contacto__container__content__formContainer__form__inputContainer">
                <p className="contacto__container__content__formContainer__form__inputContainer__end">
                  04<span>message</span>
                </p>
                <input type="text" />
              </div>
            </form>
          </div>
          <div className="contacto__container__content__footer">
            <div className="flex gap-1 contacto__container__content__footer__redes">
              <a href="#">
                <Linkedin />
              </a>
              <a href="#">
                <Instagram />
              </a>
            </div>
            <p className="">subscribe for our latest stories and insights</p>
          </div>
          <button className="button ">send</button>
        </div> */}
        <div className="flex flex-wrap justify-center gap-8 p-8 text-white">
          <div className="text-xl sm:text-3xl">
            <p className="font-thin">01</p>
            <p className="font-bold">name</p>
            <input type="text" className="w-full mt-6 bg-black border-b-2 border-white sm:w-56 focus:outline-none" />
          </div>
          <div className="text-xl sm:text-3xl">
            <p className="font-thin">02</p>
            <p className="font-bold">company</p>
            <input type="text" className="w-full mt-6 bg-black border-b-2 border-white sm:w-56 focus:outline-none" />
          </div>
          <div className="text-xl sm:text-3xl sm:text-right">
            <p className="font-thin">03</p>
            <p className="font-bold">email</p>
            <input type="text" className="w-full mt-6 bg-black border-b-2 border-white sm:w-56 focus:outline-none" />
          </div>
          <div className="text-xl sm:text-3xl sm:text-right">
            <p className="font-thin">04</p>
            <p className="font-bold">message</p>
            <textarea type="text" rows={textAreaRows} onChange={handleChangeTextArea} value={textArea} className="w-full mt-6 bg-black border-b-2 border-white sm:w-56 focus:outline-none" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-6 text-center text-white sm:mt-0 ">
          <div className="flex gap-1">

            <a href="" className="">
              <Linkedin />
            </a>
            <a href="">
              <Instagram />
            </a>
          </div>
          <p className="text-xs text-nowrap">follow us for our latest stories and insights</p>
        </div>
        <div className='text-right'>
          <button className="px-3 py-2 text-white border border-white rounded-full">Enviar</button>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
