import { Timeline } from "./ui/timeline";
import Image from "next/image";

export default function TimelineComponent() {
  const commonImageClass = "rounded-lg object-cover w-full";

  const data = [
    {
      title: "PRESENT",
      content: (
        <>
          <div className="mb-4">
            <h2>Freelance Developer</h2>
            <p>
              Duration: Jul 2017 - Present | Mumbai, Maharashtra, India - Remote
              <br />
              Developed custom Python bots and Minecraft plugins for clients.
              <br />
              Specialized in Python and Java programming. Enhanced project
              productivity through automation and server management solutions.
            </p>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/cloakbin.png"
                alt="Project Image 1"
                width={500}
                height={500}
                className={commonImageClass}
              />
              <Image
                src="/networldtechnologies.png"
                alt="Project Image 2"
                width={500}
                height={500}
                className={commonImageClass}
              />
              <Image
                src="/brainwave.png"
                alt="Project Image 3"
                width={500}
                height={500}
                className={commonImageClass}
              />
              <Image
                src="/pixashield.png"
                alt="Project Image 4"
                width={500}
                height={500}
                className={commonImageClass}
              />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "2019",
      content: (
        <>
          <div className="mb-4">
            <h2>Freelance Developer</h2>
            <p>
              Duration: Jul 2017 - Present | Mumbai, Maharashtra, India - Remote
              <br />
              Developed custom Python bots and Minecraft plugins for clients.
              <br />
              Specialized in Python and Java programming. Enhanced project
              productivity through automation and server management solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="Project Image 1"
              width={500}
              height={500}
              className={commonImageClass}
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="Project Image 2"
              width={500}
              height={500}
              className={commonImageClass}
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="Project Image 3"
              width={500}
              height={500}
              className={commonImageClass}
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="Project Image 4"
              width={500}
              height={500}
              className={commonImageClass}
            />
          </div>
        </>
      ),
    },
    {
      title: "2017",
      content: (
        <>
          <div className="mb-4">
            <h2>Founder & Manager - Minecraft Server InPocket</h2>
            <p>
              Duration: Jul 2017 - Apr 2019 | Mumbai, Maharashtra, India -
              Hybrid
              <br />
              Developed and customized the server using Java and JSON, managing
              cloud infrastructure. Led marketing and community-building
              efforts, resulting in a 30% boost in engagement.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="Project Image 1"
              width={500}
              height={500}
              className={commonImageClass}
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="Project Image 2"
              width={500}
              height={500}
              className={commonImageClass}
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="Project Image 3"
              width={500}
              height={500}
              className={commonImageClass}
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="Project Image 4"
              width={500}
              height={500}
              className={commonImageClass}
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <Timeline data={data} />
    </div>
  );
}
