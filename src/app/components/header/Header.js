'use client'
import Link from "next/link";
import React from "react";
import "./header.scss";
import useScrollVisibility from "@/app/customHooks/useScrollVisibility";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const isVisible = useScrollVisibility()

  return (
    <AnimatePresence>
      {isVisible && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} className="header">
        <div className="header__menu">
          <div className="header__menu__left ">
            <Link href="/" className="hover">
              home
            </Link>
            <Link href="#" className="logo hover">
              <svg
                width="150"
                height="30"
                viewBox="0 0 664 179"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M132.7 64.2L116.5 90.3C116.2 65.2 102.7 51.9 82.8999 51.9C49.2999 51.9 36.8 87.7 36.5 120.3C36.2 150.4 52.3002 173.5 83.2002 173.6C104.1 173.6 124.3 163.9 137.4 141C137.7 141.3 139.4 142.4 139.4 142.4C124 168.2 105.1 178.2 78 178.2C33.1 178.2 0.799805 151.1 0.799805 113C0.799805 74.9 32.4 47.8 78.5 47.8C99.2 48.2 120.7 53.7 132.7 64.2Z" />
                <path d="M138.8 172.7C151.1 172.7 154.9 164.2 156 158.4V53.9H139.5L136.5 50.7H205.6L208.6 53.9C191.1 53.9 191.1 72 191.1 72V90.5C203.9 67.5 217.6 48.2 243.6 48.2C269.4 48.2 284.9 67.2 286.5 88.8V172.8H303.3L306.3 176H237.2L234.2 172.8C247.2 172.8 250.7 163.2 251.4 157.3V92.2C251.4 80.5 249.4 58.3 232.4 58.3C217.9 58.3 203.3 74.4 191.3 98.9V172.6H208.1L211.1 175.8H142L138.8 172.7Z" />
                <path d="M382.2 172.7C394.5 172.7 398.3 164.2 399.4 158.4V113.5C392.9 142.3 374.3 178.4 340 178.4C308.8 178.4 297.4 149.1 305.7 114.8L399.4 54.1V3.5H382.9L379.9 0.299988H449L452 3.5C434.5 3.5 434.5 21.6 434.5 21.6V172.7H451.3L454.3 175.9H385.2L382.2 172.7ZM399.4 59.2L345.8 96.3C337.5 136.9 344.8 161.8 361.2 161.8C384.2 161.5 399.6 112.1 399.6 88.1V59.3H399.4V59.2Z" />
                <path d="M448.3 172.7C460.6 172.7 464.4 164.2 465.5 158.4V0.399994H515.3L518.1 3.60001C500.6 3.60001 500.6 21.7 500.6 21.7V172.5H517.4L520.4 175.7H451.3L448.3 172.7Z" />
                <path d="M591.4 172.7C605.7 172.7 608.2 161.4 608.6 156.2V113.6C601.6 142.4 582.8 178.5 553.4 178.5C534.1 178.5 516.3 163 516.7 139.4L608.4 85.1V80.3C608.4 58.4 593 52.5 580.6 52.8C562.5 53.2 538.7 72.8 523.2 100.5L520.7 100.1L533 57.5L580.7 48.5C601.6 48.5 642.9 57.5 643.6 79.8V173H660.4L663.4 176.2H594.3L591.4 172.7ZM557.4 121.8C552.3 136.6 557 161.6 571.2 161.6C589.7 161.3 606.6 118.7 608.7 93.2V89L557.4 121.8Z" />
              </svg>
            </Link>
            <Link href="/" className="hover">
              about
            </Link>
          </div>
          <div className="header__menu__right ">
            <Link href="work" className="hover">
              work
            </Link>
            <Link href="/" className="hover">
              connect
            </Link>
          </div>
        </div>
      </motion.div>)}
    </AnimatePresence>
  );
};

export default Header;
