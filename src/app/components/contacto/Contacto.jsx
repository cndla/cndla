'use client'
/* eslint-disable @next/next/no-img-element */

import React from "react";
import "./contacto.scss";
import linea from "../../images/linea.png";
import Image from "next/image";

import { motion } from "framer-motion";
import { roboto } from "../fonts/Font";

const Contacto = () => {
  const text = "let's work together"
  const splitText = text.split(" ")

  return (
    <section className={`${roboto.className} contacto pt-20 pb-32`} id="connect">
      <div className="contacto__container">
        <h2 className="contacto__container__title" >{splitText.map((text, i) => (
          <motion.span key={i} className={`pr-3 ${i == 2 && "text-cnlda-orange"}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ duration: .500, delay: 0.3 * i }} >{text}</motion.span>
        ))}</h2>
        <div className="contacto__container__content">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_16)">
                    <path
                      d="M26.24 0.165039H7.77998C5.76515 0.167685 3.83359 0.969279 2.40889 2.39398C0.984186 3.81869 0.182639 5.75024 0.179993 7.76508V26.225C0.179991 28.2416 0.980375 30.1757 2.40536 31.6026C3.83035 33.0295 5.76342 33.8324 7.77998 33.8351H26.24C28.2583 33.8351 30.1939 33.0333 31.6211 31.6061C33.0482 30.179 33.85 28.2433 33.85 26.225V7.76508C33.8473 5.74851 33.0444 3.81543 31.6175 2.39044C30.1907 0.965452 28.2566 0.165037 26.24 0.165039ZM26.24 31.4951H7.77998C6.38403 31.4924 5.04615 30.936 4.06 29.948C3.07384 28.96 2.51999 27.621 2.51999 26.225V7.76508C2.52263 6.37085 3.07765 5.03445 4.06352 4.04858C5.04939 3.06272 6.38576 2.50771 7.77998 2.50507H26.24C27.636 2.50506 28.9749 3.05889 29.9629 4.04504C30.9509 5.0312 31.5073 6.36912 31.51 7.76508V26.225C31.5073 27.6219 30.9513 28.9609 29.9635 29.9486C28.9758 30.9364 27.6369 31.4924 26.24 31.4951Z"
                      fill="white"
                    />
                    <path
                      d="M7.86002 13.235H11.86V26.235H7.86002V13.235ZM9.86002 6.78503C10.3228 6.78503 10.7752 6.92232 11.16 7.17944C11.5449 7.43657 11.8448 7.80197 12.0219 8.22955C12.199 8.65713 12.2453 9.12763 12.1551 9.58154C12.0648 10.0355 11.8419 10.4524 11.5146 10.7797C11.1874 11.1069 10.7704 11.3298 10.3165 11.4201C9.86261 11.5104 9.39212 11.464 8.96454 11.2869C8.53696 11.1098 8.17151 10.8099 7.91438 10.4251C7.65726 10.0403 7.52002 9.58787 7.52002 9.12506C7.52002 8.50445 7.76655 7.90923 8.20538 7.4704C8.64422 7.03156 9.23941 6.78503 9.86002 6.78503Z"
                      fill="white"
                    />
                    <path
                      d="M14.4 13.235H18.27V14.995H18.33C18.7158 14.3338 19.2741 13.79 19.9453 13.4219C20.6164 13.0537 21.3751 12.875 22.14 12.905C26.23 12.905 26.98 15.595 26.98 19.085V26.205H22.98V19.895C22.98 18.385 22.98 16.445 20.88 16.445C18.78 16.445 18.46 18.095 18.46 19.785V26.205H14.46L14.4 13.235Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_16">
                      <rect
                        width="33.67"
                        height="33.67"
                        fill="white"
                        transform="translate(0.179993 0.165039)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_14)">
                    <path
                      d="M25.72 0.910042H6.45C5.60214 0.910041 4.76258 1.07716 3.97938 1.40192C3.19618 1.72669 2.4847 2.20274 1.88563 2.80274C1.28656 3.40274 0.81166 4.11492 0.488106 4.89863C0.164552 5.68233 -0.00130677 6.52214 7.75291e-06 7.37V26.64C7.75291e-06 28.3507 0.679558 29.9913 1.88917 31.2009C3.09878 32.4105 4.73936 33.09 6.45 33.09H25.72C26.5679 33.0914 27.4077 32.9255 28.1914 32.6019C28.9751 32.2784 29.6873 31.8035 30.2873 31.2044C30.8873 30.6053 31.3633 29.8939 31.6881 29.1107C32.0128 28.3275 32.18 27.4879 32.18 26.64V7.37C32.1813 6.52129 32.0151 5.68067 31.6909 4.89631C31.3668 4.11195 30.891 3.39933 30.2909 2.7992C29.6907 2.19907 28.978 1.72323 28.1937 1.39906C27.4093 1.07488 26.5687 0.908725 25.72 0.910042ZM29.62 26.64C29.6174 27.6673 29.2074 28.6517 28.48 29.3771C27.7527 30.1026 26.7673 30.51 25.74 30.51H6.45C5.42443 30.5074 4.44162 30.0988 3.71642 29.3736C2.99123 28.6484 2.58265 27.6656 2.58001 26.64V7.37C2.58265 6.34443 2.99123 5.36162 3.71642 4.63642C4.44162 3.91123 5.42443 3.50265 6.45 3.50001H25.72C26.7473 3.5 27.7327 3.9074 28.46 4.63288C29.1874 5.35836 29.5974 6.3427 29.6 7.37L29.62 26.64ZM16.12 10.41C14.5898 10.4036 13.1047 10.9282 11.9182 11.8944C10.7316 12.8607 9.91703 14.2087 9.61341 15.7084C9.30979 17.2082 9.53593 18.7669 10.2533 20.1185C10.9706 21.4702 12.1347 22.5311 13.5469 23.1203C14.9591 23.7095 16.532 23.7905 17.9973 23.3494C19.4626 22.9084 20.7294 21.9725 21.5817 20.7017C22.434 19.4308 22.819 17.9035 22.671 16.3805C22.523 14.8575 21.8511 13.433 20.77 12.35C19.5375 11.1139 17.8656 10.4163 16.12 10.41ZM16.12 21.01C15.053 21.0107 14.0288 20.5902 13.27 19.84C12.8957 19.4679 12.5987 19.0254 12.3962 18.538C12.1936 18.0505 12.0896 17.5278 12.09 17C12.09 16.2089 12.3246 15.4355 12.7641 14.7777C13.2036 14.1199 13.8284 13.6073 14.5593 13.3045C15.2902 13.0018 16.0944 12.9225 16.8704 13.0769C17.6463 13.2312 18.359 13.6122 18.9184 14.1716C19.4778 14.731 19.8588 15.4437 20.0131 16.2197C20.1675 16.9956 20.0883 17.7999 19.7855 18.5308C19.4828 19.2617 18.9701 19.8863 18.3123 20.3259C17.6545 20.7654 16.8811 21 16.09 21L16.12 21.01ZM27.18 6.94001C27.1762 7.28409 27.0401 7.61349 26.8 7.85999C26.5573 8.09852 26.2303 8.23156 25.89 8.23005H24.62C24.3934 8.23208 24.1703 8.17385 23.9735 8.06141C23.7767 7.94896 23.6133 7.78632 23.5 7.59003C23.4004 7.39473 23.3518 7.17739 23.3588 6.95826C23.3657 6.73913 23.428 6.52535 23.5397 6.33674C23.6515 6.14813 23.8092 5.99084 23.998 5.87952C24.1869 5.7682 24.4009 5.70645 24.62 5.70002H25.91C26.2513 5.70264 26.5779 5.8394 26.8193 6.08076C27.0606 6.32211 27.1974 6.64868 27.2 6.99L27.18 6.94001Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_14">
                      <rect
                        width="32.18"
                        height="32.18"
                        fill="white"
                        transform="translate(0 0.910034)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </a>
            </div>
            <p>subscribe for our latest stories and insights</p>
            <Image src={linea} alt="" className="linea" width={0} height={0} />
          </div>
          <button className="button ">send</button>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
