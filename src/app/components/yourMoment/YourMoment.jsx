'use client';
import React, { useEffect } from 'react';
import './yourMoment.scss';
import { motion, useInView } from 'framer-motion';
import { useAnimate } from 'framer-motion';
import useIsMobile from '../../customHooks/useIsMobile';
import { roboto } from '../fonts/Font';
import { useTranslations } from 'next-intl';

const YourMoment = () => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    const isMobile = useIsMobile();
    const t = useTranslations('Home');

    /*  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { duration: 0.5, delay: 0.5 });
    } else {
      animate(scope.current, { opacity: 0 });
    }
  }, [isInView]); */

    if (isMobile)
        return (
            <section
                className={`${roboto.className} flex items-center bg-cover h-[700px] bg-white-pattern p-8`}
            >
                <div className="w-full text-[8.5vw] text-justify min-w-fit">
                    <p className="flex items-end min-w-fit">
                        <motion.span
                            className="w-full h-0.5 bg-black"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 3 }}
                        >
                            {' '}
                        </motion.span>
                        <span className="min-w-fit">
                            {t('moment-first-paragraph')}
                        </span>
                    </p>
                    <p className="flex justify-between w-full">
                        {t('moment-second-paragraph')}{' '}
                        <motion.p
                            animate={{ left: ['-30px', '30px'] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: 'reverse',
                                repeatDelay: 2,
                                duration: 3,
                            }}
                            className="relative"
                        >
                            {t('moment-third-paragraph')}
                        </motion.p>{' '}
                        <span>✽</span>
                    </p>
                    <p className="min-w-fit">{t('moment-fourth-paragraph')}</p>
                </div>
            </section>
        );

    return (
        <section
            className={`${roboto.className} yourMoment h-screen bg-white-pattern bg-cover bg-center`}
        >
            <div className="flex flex-col mx-auto w-fit justify-center h-full sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                <div className="flex items-baseline">
                    <motion.div
                        initial={{ width: '0px', opacity: 0 }}
                        whileInView={{ width: '60px', opacity: 1 }}
                        className="w-10 h-2 bg-black spacer"
                        transition={{ duration: 1, type: 'tween' }}
                        style={{ originX: 0 }}
                    ></motion.div>
                    <p className="">{t('moment-fifth-paragraph')}</p>
                </div>
                <p className="">
                    {t('moment-sixth-paragraph')}{' '}
                    <motion.span
                        ref={scope}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 3,
                            type: 'spring',
                            repeat: Infinity,
                            repeatType: 'reverse',
                            repeatDelay: 1,
                        }}
                        className=""
                    >
                        {t('moment-seventh-paragraph')}
                    </motion.span>
                </p>
            </div>
        </section>
    );
};

export default YourMoment;
