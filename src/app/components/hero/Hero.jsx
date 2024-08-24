'use client';
import React, { useEffect, useRef } from 'react';
import './hero.scss';
import { Roboto } from 'next/font/google';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import video from './video.gif';
import Word from './Word';
import { useTranslations } from 'next-intl';

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
});

const Hero = () => {
    const container = useRef(null);
    const t = useTranslations('Home');
    const element = useRef(null);
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: element,
        offset: ['start end', 'start center'],
    });
    const theElemente = useRef(null);
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: theElemente,
        offset: ['0.5 end', 'start center'],
    });

    const firstText = t('hero-description-first-paragraph');

    const secondText = t('hero-description-second-paragraph');

    const y = useTransform(scrollYProgress3, [0, 1], [0, -300]);
    const x3 = useTransform(scrollYProgress3, [0, 1], [0, 300]);

    return (
        <section
            className={`${roboto.className} hero lg:h-auto md:p-24 overflow-y-hidden pt-24`}
            id="about"
        >
            <div
                ref={container}
                className="flex items-center justify-center w-full "
            >
                <div className="relative w-7/12 overflow-hidden">
                    <div className="absolute w-full h-full">
                        <motion.div
                            style={{ y: y }}
                            className="h-[50%] bg-black w-full"
                        ></motion.div>

                        <motion.div
                            ref={theElemente}
                            style={{ y: x3 }}
                            className="h-[50%] bg-black  "
                        ></motion.div>
                    </div>
                    <motion.img src={video.src} alt="logo" className="w-full" />
                </div>
            </div>
            <div className="">
                <motion.div
                    style={{ opacity: scrollYProgress2 }}
                    className="flex flex-wrap w-11/12 m-auto text-balance "
                    ref={element}
                >
                    <p className="flex flex-col justify-between mb-8 mt-10 w-10/12 gap-1 m-auto">
                        <span className="flex pr-20 text-lg text-cnlda-orange md:pr-44 md:text-3xl">
                            {"/kan'dela/"}
                        </span>
                        <span className="relative md:leading-9">
                            <span className="absolute text-lg opacity-0 md:opacity-15 md:text-2xl">
                                {firstText}
                            </span>
                            <motion.span
                                style={{ opacity: 1 }}
                                className="mr-1 text-lg text-white md:text-2xl"
                            >
                                {firstText}
                            </motion.span>
                        </span>
                    </p>
                    <Word
                        value={secondText}
                        highlightedText={t('hero-manifest')}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
