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
              <br />
              Developed landing pages for businesses, Python automation scripts, and Java Minecraft plugins.
              <br />
              Specialized in Discord bot development and backend solutions.
              <br />
              Enhanced project workflows through automation and server management.
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
                src="/pixashield_gun.png"
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
      title: "2017",
      content: (
        <>
          <div className="mb-4">
            <h2>Founder & Manager - Minecraft Server InPocket</h2>
            <p>
              <br />
              I developed custom plugins from scratch using Java and JSON, while overseeing cloud infrastructure and integrating a payment gateway. Additionally, I led community engagement and marketing efforts to foster a vibrant, active player base.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/minecraft1.jpg"
              alt="Minecraft Image 1"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full"
            />
            <Image
              src="/minecraft2.png"
              alt="Minecraft Image 2"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <Timeline data={data} />
    </div>
  );
}
