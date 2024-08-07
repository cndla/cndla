'use client';
import Image from 'next/image';
import React from 'react';
import './onFire.scss';
import hongo from 'public/images/hongo.gif';
import onfire from 'public/images/onfire.png';
import { motion } from 'framer-motion';
import { Logo } from '../lab/Lab';
import { roboto } from '../fonts/Font';
import { useTranslations } from 'next-intl';

const animation = {
    hidden: {
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.5,
            type: 'spring',
            stiffness: 100,
            damping: 20,
        },
    },
    visible: {
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.5,
            type: 'spring',
        },
    },
};

const OnFire = () => {
    const t = useTranslations('Home');
    return (
        <section className={`${roboto.className} onFire`} id="workshops">
            <div className="onFire__images">
                <Logo
                    text={'/wrkshops'}
                    borderColor={'border-white'}
                    extraClass={'mb-8 text-3xl'}
                />

                <Image
                    src={hongo}
                    alt="aca va un gif"
                    width="auto"
                    height="auto"
                    className="sm:w-96 w-72 aspect-square "
                ></Image>
                <Image
                    src={onfire}
                    alt="aca va un gif"
                    width="auto"
                    height="auto"
                    className="w-72 sm:w-96 "
                ></Image>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={animation}
                className="onFire__workshops"
            >
                <p className="text-xl sm:text-4xl xl:text-6xl">
                    {t('onfire-card-first-paragraph')}
                </p>
                <motion.p className="text-lg sm:text-2xl xl:text-4xl">
                    {t('onfire-card-second-paragraph')}
                </motion.p>
            </motion.div>
            <div className="flex gap-4 text-xs font-bold sm:text-2xl">
                <p className="onFire__texts__animation ">
                    <motion.span
                        initial={{ x: 0 }}
                        whileInView={{
                            x: ['-40px', '0px'],
                            opacity: [1],
                        }}
                        transition={{
                            duration: 0.99,
                            delay: 1.2,
                            repeat: Infinity,
                            repeatDelay: 2,
                            repeatType: 'reverse',
                            type: 'spring',
                        }}
                    >
                        {t('onfire-first-paragraph')}
                    </motion.span>
                    {t('onfire-second-paragraph')}✽
                </p>
                /
                <p className="gap-1 onFire__texts__animation ">
                    <motion.span>{t('onfire-third-paragraph')}</motion.span>{' '}
                    {t('onfire-fourth-paragraph')}
                </p>
                /
                <p className="onFire__texts__animation ">
                    {t('onfire-fifth-paragraph')}
                    <motion.span
                        layout
                        initial={{}}
                        whileInView={{
                            x: ['40px', '0px'],
                            opacity: [1],
                        }}
                        transition={{
                            duration: 0.99,
                            delay: 0.9,
                            repeat: Infinity,
                            repeatDelay: 2,
                            repeatType: 'reverse',
                            type: 'spring',
                        }}
                    >
                        {t('onfire-sixth-paragraph')}✽
                    </motion.span>
                </p>
            </div>
            <p className="text-base onFire__newEdition sm:text-3xl">
                {t('consortium-seventh-paragraph')}
            </p>
        </section>
    );
};

export default OnFire;
