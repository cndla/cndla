"use client";
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
  const text = "let's work together";
  const splitText = text.split(" ");
  const [textArea, setTextArea] = useState("");
  const [textAreaRows, setTextAreaRows] = useState(1);
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const handleChangeTextArea = (e) => {
    setTextArea(e.target.value);
    let isDeleting = [];

    if (textArea.length % 25 == 0) {
      if (isDeleting.includes(textArea.length)) return null;
      isDeleting.push(textArea.length);
      setTextAreaRows(textAreaRows + 1);
    }
    if (textArea.length == 1) {
      setTextAreaRows(1);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!name.trim()) {
      setError('Name is required.');
      return;
    }
    if (!company.trim()) {
      setError('Company is required.');
      return;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('A valid email is required.');
      return;
    }
    if (!textArea.trim()) {
      setError('Message is required.');
      return;
    }

    setError('');

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          company: company,
          email: email,
          message: textArea,
        }),
      });
      console.log(res);

      if (res.ok) {
        setStatus('Email sent successfully!');
        setName('');
        setCompany('');
        setEmail('');
        setTextArea('');
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred while sending the email.');
    }
  };
  return (
    <section
      className={`${roboto.className} bg-black pt-20 pb-40 p-10`}
      id="connect"
    >
      <div className="flex flex-col justify-between max-w-screen-xl m-auto space-y-6 sm:space-y-32">
        <h2 className="text-2xl text-center text-white sm:text-4xl">
          {splitText.map((text, i) => (
            <motion.span
              key={i}
              className={`pr-3 ${i == 2 && "text-cnlda-orange"}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 * i }}
            >
              {text}
            </motion.span>
          ))}
        </h2>

        <div className="flex flex-wrap justify-between w-full gap-8 text-white sm:p-8">
          <div className="w-full text-xl sm:w-auto sm:text-3xl">
            <p className="font-thin">01</p>
            <p className="font-bold">name</p>
            <input
              type="text"
              className="w-full h-10 mt-6 text-base bg-black border-b-2 border-white sm:w-56 focus:outline-none"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="w-full text-xl sm:w-auto sm:text-3xl">
            <p className="font-thin">02</p>
            <p className="font-bold">company</p>
            <input
              type="text"
              className="w-full h-10 mt-6 text-base bg-black border-b-2 border-white sm:w-56 focus:outline-none"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
          </div>
          <div className="w-full text-xl sm:text-3xl sm:text-right sm:w-auto">
            <p className="font-thin">03</p>
            <p className="font-bold">email</p>
            <input
              type="text"
              className="w-full h-10 mt-6 text-base bg-black border-b-2 border-white sm:w-56 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="w-full text-xl sm:text-3xl sm:text-right sm:w-auto">
            <p className="font-thin">04</p>
            <p className="font-bold">message</p>
            <textarea
              type="text"
              rows={textAreaRows}
              onChange={handleChangeTextArea}
              value={textArea}
              className="w-full mt-6 text-base bg-black border-b-2 border-white sm:w-56 focus:outline-none"

            />
          </div>
        </div>
        <div className="text-right ">
          <button className="px-3 py-2 text-white transition-colors duration-300 border border-white rounded-full hover:bg-white hover:text-black" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
        <div className="flex flex-col items-center gap-4 mt-6 text-center text-white sm:mt-0 ">
          <div className="flex gap-1">
            <a href="https://ar.linkedin.com/company/cndla" className="" target="_blank">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/cndlacollective/" target="_blank">
              <Instagram />
            </a>
          </div>
          <p className="text-xs text-nowrap sm:text-sm md:text-md lg:text-lg xl:text-xl">
            follow us for our latest stories and insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
