"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

const ProjectsText = () => {
  return (
    <div className="h-[15rem] md:h-[20rem] lg:h-[25rem] bg-blue w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-center text-white relative z-20">
        Projects
      </h1>
      <div className="w-full md:w-[40rem] h-32 md:h-40 relative flex justify-center">
        {/* Gradients */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-1/2 md:w-3/4 blur-sm" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/2 md:w-3/4" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] md:h-[5px] w-1/4 blur-sm" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={800} // Reduced density for smaller screens
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black-100 [mask-image:radial-gradient(200px_150px_at_top,transparent_20%,white)] md:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export default ProjectsText;
