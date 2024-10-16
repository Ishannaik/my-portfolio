export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning Machine Learning",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// data/index.ts
// data/index.ts
export const projects = [
  {
    title: "CloakBin",
    image: "/cloakbin.png", // Replace with actual image path
    description:
      "Cloakbin is your go-to platform for swiftly sharing text and code snippets securely and anonymously. With a minimalist interface and robust encryption, Cloakbin prioritizes speed and privacy.",
    technologies: ["EJS"],
    liveUrl: "https://cloakbin.com",
  },
  {
    title: "PixaShield",
    image: "/pixashield_gun.png", // Replace with actual image path
    description:
      "PixaShield, an AI Intelligent Camera Solution, was developed by the team from Thakur College of Engineering. It was the first prize winner in the Rajasthan Police Hackathon 1.0.",
    technologies: ["AI", "Surveillance"],
    liveUrl: "https://github.com/Ishannaik/PixaShield",
  },
  {
    title: "Networld Technologies",
    image: "/networldtechnologies.png", // Replace with actual image path
    description:
      "Landing page created for NetWorld Technologies. A simple, clean, and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://networldtechnologies.in",
  },
  {
    title: "Brainwave",
    image: "/brainwave.png", // Replace with actual image path
    description:
      "Landing page website for BrainWave, featuring interactive elements and modern design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://brainwaveaiapp.vercel.app/",
  },
];
export const testimonials = [
  {
    quote:
      "Working with Mr. Ishan was quite the smooth experience. He understood the problem at hand and the requirements of the project right away with little explanation. The end result was a very clean, modern and functional website delivered as promised in both time and quality. I would definitely recommend him if you need a quick and reliable solution.",
    name: "Siddhant Chetlur",
    title: "Satisfied Client",
    image: "/chetlur.jpg"
  },
  {
    quote:
      "Ishan exceeded my expectations. His attention to detail and innovative thinking provided us with exactly what we needed. The end product was more than what we asked for, thanks to his commitment to delivering high-quality results.",
    name: "Ishaan Gupta",
    title: "Satisfied Customer",
    image: "/gupta.jpg"
  },
  {
    quote:
      "Ishan’s problem-solving abilities and in-depth knowledge of the latest technologies made our project a huge success. His dedication and work ethic are second to none.",
    name: "Satvam Thakkar",
    title: "Satisfied Customer",
    image: "/satvam.jpg"
  },
  {
    quote:
      "Ishan took on every challenge we threw at him and came up with great solutions each time. His level of commitment and skill ensured that our project was delivered on time and with high quality.",
    name: "Shounak Dewoolkar",
    title: "Intern at Drip Capital",
    image: "/shounak.jpg"
  },
  {
    quote:
      "Working with Ishan has been an absolute joy. His ability to understand complex requirements and transform them into functional, user-friendly products is truly impressive.",
    name: "Prashant",
    title: "Founder of Networld Technologies",
    image: "/prashant.webp"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

// src/data.js or src/data/index.js

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/ishannaik", // Replace with your GitHub profile URL
  },
  {
    id: 2,
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/ishannaik7", // Replace with your Twitter profile URL
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://linkedin.com/in/ishannaik7", // Replace with your LinkedIn profile URL
  },
];

