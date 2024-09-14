'use client';
import { useScroll, motion, useTransform, progress } from 'framer-motion';
import React, { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

const Word = ({ value, highlightedText, customWidth }) => {
    const theElemente = useRef(null);
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: theElemente,
        offset: ['0.50 end', 'start 0.50'],
    });
    const words = value.split(' ');
    return (
        <p
            ref={theElemente}
            className={twMerge(
                'flex flex-wrap items-center justify-between gap-1 m-auto',
                customWidth ?? 'w-10/12'
            )}
        >
            <span className="flex pr-20 text-lg text-cnlda-orange md:pr-44 md:text-3xl">
                {highlightedText}
            </span>
            <div
                className={twMerge(
                    'flex flex-wrap items-center justify-between gap-1',
                    customWidth ?? 'w-10/12'
                )}
            >
                {words.map((word, index) => {
                    const start = index / words.length;
                    const end = start + 1 / words.length;
                    return (
                        <TheWord
                            key={index}
                            range={[start, end]}
                            progress={scrollYProgress3}
                        >
                            {word}
                        </TheWord>
                    );
                })}
            </div>
        </p>
    );
};

const TheWord = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className="relative md:leading-9">
            <span className="absolute text-lg opacity-0 md:opacity-15 md:text-3xl">
                {children}
            </span>
            <motion.span
                style={{ opacity: opacity }}
                className="mr-1 text-lg text-white md:text-3xl"
            >
                {children}
            </motion.span>
        </span>
    );
};

export default Word;
