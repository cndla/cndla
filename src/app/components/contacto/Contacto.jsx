'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react';
import './contacto.scss';
import linea from '../../images/linea.png';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { roboto } from '../fonts/Font';
import Linkedin from '../../svgs/Linkedin';
import Instagram from '../../svgs/Instagram';
import Toast from '../toast/Toast';
import { useTranslations } from 'next-intl';

const Contacto = () => {
    const t = useTranslations('Home');
    const text = t('contact-first-paragraph');
    const splitText = text.split(' ');
    const [textArea, setTextArea] = useState('');
    const [textAreaRows, setTextAreaRows] = useState(1);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState('');
    const [status, setStatus] = useState('');
    const [already, setAlready] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isToastVisible, setToastVisible] = useState(false);

    const handleChangeTextArea = (e) => {
        setTextArea(e.target.value);

        if (textArea.length % 25 == 0) {
            if (already.includes(textArea.length))
                return setTextAreaRows(textAreaRows - 1);
            setAlready((prev) => [...prev, textArea.length]);
            setTextAreaRows(textAreaRows + 1);
        }
        if (textArea.length == 1 || textArea == '') {
            setTextAreaRows(1);
            setAlready([]);
        }
    };
    const handleSubmit = async (e) => {
        setLoading(true);
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
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    company: company,
                    email: email,
                    message: textArea,
                }),
            });
            setLoading(false);

            if (res.ok) {
                setStatus('email sent successfully!');
                setName('');
                setCompany('');
                setEmail('');
                setTextArea('');
                setTextAreaRows(1);
                setAlready([]);
                setLoading(false);
                showToast();
            } else {
                setStatus('failed to send email. try again later');
                setLoading(false);
                showToast();
            }
        } catch (error) {
            console.error(error);
            showToast();

            setStatus(
                'an error occurred while sending the email. try again later'
            );
            setLoading(false);
        }
    };

    const showToast = () => {
        setToastVisible(true);
        setTimeout(() => {
            setToastVisible(false);
        }, 3000); // El toast desaparecerá después de 3 segundos
    };
    return (
        <section
            className={`${roboto.className} bg-black pt-20 pb-40 p-10`}
            id="connect"
        >
            <div className="flex flex-col justify-between max-w-screen-xl m-auto space-y-6 sm:space-y-16">
                <h2 className="text-2xl text-center text-white sm:text-4xl">
                    {splitText.map((text, i) => (
                        <motion.span
                            key={i}
                            className={`pr-3 ${i == 2 && 'text-cnlda-orange'}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 * i }}
                        >
                            {text}
                        </motion.span>
                    ))}
                </h2>

                <div className="flex flex-col gap-8 text-white sm:p-8">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full text-xl sm:w-auto sm:text-3xl">
                            <p className="font-thin">01</p>
                            <p className="font-bold">
                                {t('contact-second-paragraph')}
                            </p>
                            <input
                                type="text"
                                className="w-full h-10 mt-6 text-base bg-black border-b-2 border-white sm:w-56 focus:outline-none"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className="w-full text-xl sm:w-auto sm:text-3xl">
                            <p className="font-thin">02</p>
                            <p className="font-bold">
                                {t('contact-third-paragraph')}
                            </p>
                            <input
                                type="text"
                                className="w-full h-10 mt-6 text-base bg-black border-b-2 border-white sm:w-56 focus:outline-none"
                                onChange={(e) => setCompany(e.target.value)}
                                value={company}
                            />
                        </div>
                        <div className="w-full text-xl sm:text-3xl sm:text-right sm:w-auto">
                            <p className="font-thin">03</p>
                            <p className="font-bold">
                                {t('contact-fourth-paragraph')}
                            </p>
                            <input
                                type="text"
                                className="w-full h-10 mt-6 text-base bg-black border-b-2 border-white sm:w-56 focus:outline-none"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className="w-full text-xl sm:text-3xl sm:text-right sm:w-auto">
                            <p className="font-thin">04</p>
                            <p className="font-bold">
                                {t('contact-fifth-paragraph')}
                            </p>
                            <textarea
                                type="text"
                                rows={textAreaRows}
                                onChange={handleChangeTextArea}
                                value={textArea}
                                className="w-full mt-6 text-base bg-black border-b-2 border-white min-h-10 sm:w-56 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-end gap-3 text-right ">
                        <Toast message={status} isVisible={isToastVisible} />{' '}
                        <button
                            className="self-center px-3 py-2 text-white transition-colors duration-300 border border-white rounded-full hover:bg-white hover:text-black justify-self-center"
                            onClick={handleSubmit}
                        >
                            {loading
                                ? t('contact-seventh-paragraph')
                                : t('contact-sixth-paragraph')}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4 text-center text-white sm:mt-0 ">
                    <div className="flex gap-1">
                        <a
                            href="https://ar.linkedin.com/company/cndla"
                            className=""
                            target="_blank"
                        >
                            <Linkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/cndlacollective/"
                            target="_blank"
                        >
                            <Instagram />
                        </a>
                    </div>
                    <p className="text-xs text-nowrap sm:text-sm md:text-md lg:text-lg xl:text-xl">
                        {t('contact-eighth-paragraph')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
