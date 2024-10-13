import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function TimelineComponent() {
  const commonImageClass =
    "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full";

  const data = [
    {
      title: "PRESENT",
      content: (
        <>
          <h2>Freelance Developer</h2>
          <p>
            Duration: Jul 2017 - Present | Mumbai, Maharashtra, India - Remote
            <br />
            Developed custom Python bots and Minecraft plugins for clients.
            <br />
            Specialized in Python and Java programming. Enhanced project
            productivity through automation and server management solutions.
          </p>
          <br />
          <div className="p-4">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Built and launched Aceternity UI and Aceternity UI Pro from
              scratch
            </p>
            <div className={`grid grid-cols-2 gap-4 ${commonImageClass}`}>
              <Image
                src="https://assets.aceternity.com/templates/startup-1.webp"
                alt="Project Image 1"
                width={500}
                height={500}
              />
              <Image
                src="https://assets.aceternity.com/templates/startup-2.webp"
                alt="Project Image 2"
                width={500}
                height={500}
              />
              <Image
                src="https://assets.aceternity.com/templates/startup-3.webp"
                alt="Project Image 3"
                width={500}
                height={500}
              />
              <Image
                src="https://assets.aceternity.com/templates/startup-4.webp"
                alt="Project Image 4"
                width={500}
                height={500}
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
          <h2>Freelance Developer</h2>
          <p>
            Duration: Jul 2017 - Present | Mumbai, Maharashtra, India - Remote
            <br />
            Developed custom Python bots and Minecraft plugins for clients.
            <br />
            Specialized in Python and Java programming. Enhanced project
            productivity through automation and server management solutions.
          </p>
          <br />
          <div className={`grid grid-cols-2 gap-4 ${commonImageClass}`}>
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="Project Image"
              width={500}
              height={500}
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="Project Image"
              width={500}
              height={500}
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="Project Image"
              width={500}
              height={500}
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="Project Image"
              width={500}
              height={500}
            />
          </div>
        </>
      ),
    },
    {
      title: "2017",
      content: (
        <>
          <h2>Founder & Manager - Minecraft Server InPocket</h2>
          <p>
            Duration: Jul 2017 - Apr 2019 | Mumbai, Maharashtra, India - Hybrid
            <br />
            Developed and customized the server using Java and JSON, managing
            cloud infrastructure. Led marketing and community-building efforts,
            resulting in a 30% boost in engagement.
          </p>
          <br />
          <div className={`grid grid-cols-2 gap-4 ${commonImageClass}`}>
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="Project Image"
              width={500}
              height={500}
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="Project Image"
              width={500}
              height={500}
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="Project Image"
              width={500}
              height={500}
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="Project Image"
              width={500}
              height={500}
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
