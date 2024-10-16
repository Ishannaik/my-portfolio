"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { projects } from "../data"; // Import the project data from your index.ts file

const Projects = () => {
  // Create tabs dynamically from projects data
  const tabs = projects.map((project) => ({
    title: project.title,
    value: project.title.toLowerCase().replace(/\s+/g, "-"),
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 md:p-10 text-lg md:text-2xl lg:text-4xl font-bold text-white bg-gradient-to-br from-gray-900 via-indigo-800 to-cyan-600">
        <ProjectWithImage title={project.title} image={project.image} />
      </div>
    ),
  }));

  return (
    <div className="h-[15rem] md:h-[30rem] lg:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-5">
      <Tabs tabs={tabs} />
    </div>
  );
};

// Define the props type for ProjectWithImage
interface ProjectWithImageProps {
  title: string;
  image: string;
}

// ProjectWithImage component to display the title and full-width image
const ProjectWithImage: React.FC<ProjectWithImageProps> = ({ title, image }) => {
  return (
    <div className="flex flex-col justify-start w-full h-full">
      {/* Title aligned to the left */}
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold p-4 md:p-6">{title}</h2>

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
    </div>
  );
};

export default Projects;
