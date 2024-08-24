/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useRef, useState } from 'react';
import './consorcio.scss';
import Image from 'next/image';
import {
    consorcio1,
    consorcio2,
    consorcio3,
    consorcio4,
    consorcio5,
    culture,
    gastro,
    gozadera,
    music,
    people,
} from './data';
import reunion from 'public/images/reuniondeconsorcio.png';
import { motion } from 'framer-motion';
import useIsMobile from '../../customHooks/useIsMobile';
import { roboto } from '../fonts/Font';
import { useTranslations } from 'next-intl';

const Consorcio = () => {
    const isMobile = useIsMobile();

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const t = useTranslations('Home');
    const ref = useRef(null);

    useEffect(() => {
        // Function to update dimensions
        const updateDimensions = () => {
            if (ref.current) {
                const { clientWidth, clientHeight } = ref.current;
                setDimensions({ width: clientWidth, height: clientHeight });
            }
        };

        // Call updateDimensions initially
        updateDimensions();

        // Add event listener to window for resize events
        window.addEventListener('resize', updateDimensions);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []); // Empty dependency array ensures this effect only runs once

    return (
        <section className={` ${roboto.className} pt-20 text-white bg-black`}>
            <div className="flex flex-col m-auto space-y-10 sm:flex-row-reverse sm:flex columns-2 sm:space-y-0 max-w-screen-2xl">
                <div className="sm:w-2/3 xl:w-7/12">
                    <div className="flex justify-between w-full columns-4">
                        <motion.img
                            src={consorcio1.src}
                            alt=""
                            className="object-cover w-1/4 p-1 sm:w-24 aspect-square md:w-32 lg:w-40 xl:w-44 2xl:w-56"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, y: dimensions.height }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 2,
                                repeatType: 'mirror',
                            }}
                            ref={ref}
                        />
                        <div className="w-1/4"></div>
                        <motion.img
                            src={consorcio2.src}
                            alt=""
                            className="object-cover w-1/4 p-1 sm:w-24 aspect-square md:w-32 lg:w-40 xl:w-44 2xl:w-56"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, y: dimensions.height }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 2,
                                repeatType: 'mirror',
                            }}
                        />
                        <motion.img
                            src={consorcio3.src}
                            alt=""
                            className="object-cover w-1/4 p-1 sm:w-24 aspect-square md:w-32 lg:w-40 xl:w-44 2xl:w-56"
                        />
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="w-1/4"></div>
                        <motion.img
                            src={consorcio4.src}
                            alt=""
                            className="object-cover w-1/4 p-1 sm:w-24 aspect-square md:w-32 lg:w-40 xl:w-44 2xl:w-56"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, y: -dimensions.height }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 2,
                                repeatType: 'mirror',
                            }}
                        />
                        <div className="w-1/4"></div>
                        <motion.img
                            src={consorcio5.src}
                            alt=""
                            className="object-cover w-1/4 p-1 sm:w-24 aspect-square md:w-32 lg:w-40 xl:w-44 2xl:w-56"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 sm:items-end sm:pr-2 sm:w-5/12 sm:mt-0 md:w-4/12 lg:p-2">
                    <Image src={reunion} alt="" className="w-36 xl:w-72" />
                    <div className="px-12 space-y-5 text-xs text-center text-balance sm:text-right sm:space-y-3 sm:text-xs sm:px-2 md:text-base lg:text-lg xl:text-2xl">
                        <p>
                            {t('consortium-first-paragraph')} <br />
                            {t('consortium-second-paragraph')}
                        </p>
                        <p>{t('consortium-third-paragraph')}</p>
                        <p>
                            {t('consortium-fourth-paragraph')} <br />
                            {t('consortium-fifth-paragraph')}
                        </p>
                        <p>{t('consortium-sixth-paragraph')}</p>
                    </div>
                </div>
            </div>
            <div className="pt-10 md:pt-16 ">
                <div className="flex items-start justify-between w-10/12 p-5 pt-8 m-auto xl:w-8/12">
                    <img
                        src={gastro.src}
                        alt=""
                        className="w-1/6 h-12 md:w-16 lg:w-20 xl:w-24 2xl:w-28"
                    />
                    <img
                        src={music.src}
                        alt=""
                        className="w-1/6 h-12 md:w-16 lg:w-20 xl:w-24 2xl:w-28"
                    />
                    <img
                        src={culture.src}
                        alt=""
                        className="w-1/6 h-12 md:w-16 lg:w-20 xl:w-24 2xl:w-28"
                    />
                    <img
                        src={people.src}
                        alt=""
                        className="w-1/6 h-12 md:w-16 lg:w-20 xl:w-24 2xl:w-28"
                    />
                    <img
                        src={gozadera.src}
                        alt=""
                        className="w-1/6 h-12 md:w-16 lg:w-20 xl:w-24 2xl:w-28"
                    />
                </div>
                <p className="pt-12 text-lg sm:text-xl text-center underline underline-offset-4 sm:pt-14">
                    {t('consortium-seventh-paragraph')}
                </p>
            </div>
        </section>
    );
};

export default Consorcio;
