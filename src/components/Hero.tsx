import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import GridBackground from "./ui/GridBackground"; // Import the new GridBackground component
import { ModeToggle } from "./ui/ModeToggle";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Use the new GridBackground component here */}
      <GridBackground />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-2-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.Js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl ">
            Hi I&apos;m Ishan, a Full Stack Developer
          </p>
          <a href="#about" title="About Section">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="bg-blue-500 text-white hover:bg-blue-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300"
            />
          </a>
        </div>
      </div>
      <div className="fixed bottom-5 right-5 z-50"> 
        <ModeToggle />
      </div>
    </div>
  );
};

export default Hero;
