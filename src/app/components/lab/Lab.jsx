'use client';
import React from 'react';
import LabCreating from './LabCreating';
import { AnimatePresence } from 'framer-motion';
import TextRevealByWord from './Text-reveal';
import { useTranslations } from 'next-intl';

export const Logo = ({ text, borderColor, extraClass }) => (
    <div
        className={`${extraClass} lg:border-4  border-2 ${
            borderColor ? borderColor : 'border-black'
        } flex  lg:p-2 p-3  rounded-full lg:max-w-64 max-w-40 font-bold justify-center lg:text-4xl text-lg text-nowrap `}
    >
        <span className="px-3 font-normal text-nowrap ">{text}</span>
    </div>
);

const Lab = () => {
    const t = useTranslations('Home');
    return (
        // <LabCreating />
        <div className="relative pt-10 text-white bg-black " id="experiences">
            <TextRevealByWord text={t('lab-first-paragraph')} className="" />
            <TextRevealByWord text={t('lab-second-paragraph')} className="" />
            <TextRevealByWord text={t('lab-third-paragraph')} className="" />
        </div>
    );
};

export default Lab;
