"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { projects } from "../data"; // Import the project data from your index.ts file
import image from "next/image";
import { title } from "process";

const Projects = () => {
  // Create tabs dynamically from projects data
  const tabs = projects.map((project) => ({
    title: project.title,
    value: project.title.toLowerCase().replace(/\s+/g, "-"),
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <ProjectWithImage title={project.title} image={project.image} />
      </div>
    ),
  }));

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-5">
      <Tabs tabs={tabs} />
    </div>
  );
};

// ProjectWithImage component to display the title and full-width image
const ProjectWithImage = ({ title, image }) => {
  return (
    <div className="flex flex-col justify-start w-full h-full">
      {/* Title aligned to the left */}
      <h2 className="text-4xl md:text-5xl font-bold p-6">{title}</h2>

      {/* Image taking full width and touching sides and bottom */}
      <div className="w-full h-full">
        <Image
          src={image}
          alt={`${title} image`}
          layout="responsive"
          width={1000}
          height={600}
          className="object-cover object-left-top w-full h-full rounded-2xl"
        />
      </div>
    </div >
  );
};

export default Projects;
