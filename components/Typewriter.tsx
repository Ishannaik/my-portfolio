"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

import React from 'react'

const Typewriter = () => {
    const words = [
        {
            text: "My",
        },
        {
            text: "Work",
        },
        {
            text: "Experience",
            className: "text-blue-500 dark:text-purple",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[1rem]  ">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}


export default Typewriter;