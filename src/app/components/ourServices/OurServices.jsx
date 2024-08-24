'use client';
import React from 'react';
import './ourServices.scss';
import { motion } from 'framer-motion';
import { roboto } from '../fonts/Font';
import { useTranslations } from 'next-intl';

const OurServices = ({ locale }) => {
    const t = useTranslations('Home');
    const data = [
        {
            text: [
                t('hero-first-button.digital'),
                t('hero-first-button.strategy'),
                t('hero-first-button.studio'),
            ],
        },
        {
            text: [
                t('hero-second-button.creative'),
                t('hero-second-button.lab-and'),
                t('hero-second-button.experiences'),
            ],
        },
        {
            text: [
                t('hero-third-button.on-fire'),
                t('hero-third-button.session'),
                t('hero-third-button.workshops'),
            ],
        },
    ];

    const goToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    const goTo = (index) => {
        switch (index) {
            case 0:
                return goToSection('studio');
            case 1:
                return goToSection('experiences');
            case 2:
                return goToSection('workshops');
            default:
                return;
        }
    };
    console.log('LOCALE', locale);
    return (
        <section
            className={`${roboto.className} ourServices h-[800px] sm:h-screen lg:p-24 `}
            id="home"
        >
            <div className="flex flex-col items-center justify-center h-full ourServices__container lg:flex-row">
                {data.map((item, index) => (
                    <motion.a
                        key={index}
                        onClick={() => goTo(index)}
                        className={
                            ' flex lg:flex-col  border border-white justify-center w-11/12 items-center rounded-[50%] hover:bg-white hover:text-black lg:text-5xl lg:h-[70svh] text-lg h-44'
                        }
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.5 + index * 0.2,
                            duration: 0.65,
                        }}
                    >
                        {item.text.map((text, i) => (
                            <span
                                key={i}
                                className={`pr-1 ${
                                    locale === 'en'
                                        ? 'last:font-bold'
                                        : 'first:font-bold'
                                }`}
                            >
                                {text}
                            </span>
                        ))}
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default OurServices;
