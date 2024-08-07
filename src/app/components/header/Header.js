'use client';
import React, { useState, useEffect } from 'react';
import './header.scss';
import {
    AnimatePresence,
    motion,
    useScroll,
    useTransform,
} from 'framer-motion';
import Link from 'next/link';
import ArrowUp from '../../svgs/ArrowUp';
import { roboto } from '../hero/Hero';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

const Header = ({ locale }) => {
    const [show, setShow] = useState(false);
    const t = useTranslations('Home');
    const { scrollYProgress } = useScroll();
    const goTo = (link) => {
        const element = document.getElementById(link);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        scrollYProgress.on('change', (latest) => {
            if (latest > 0.1) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
        return () => {
            scrollYProgress.clearListeners();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AnimatePresence>
            <div className={`header ${roboto.className}`}>
                <div className="m-auto text-sm header__menu sm:w-11/12">
                    <div className="header__menu__left ">
                        <a onClick={() => goTo('home')} className="hover">
                            {t('home-button')}
                        </a>
                        <Link
                            href={locale === 'en' ? 'es' : 'en'}
                            className="hover"
                        >
                            <p>{locale === 'en' ? 'Español' : 'English'}</p>
                        </Link>
                        <a href="#about" className="hover scroll-smooth">
                            {t('about-button')}
                        </a>
                    </div>
                    <div className="header__menu__right ">
                        <a href="#work" className="hover">
                            {t('work-button')}
                        </a>

                        <div className="relative ">
                            <ArrowUp color={'fill-black'} show={show} />
                            <a href="#connect" className="hover">
                                {t('connect-button')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default Header;
